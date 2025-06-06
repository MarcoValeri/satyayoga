export interface EventbriteEvent {
    id: string;
    name: { text: string, html: string };
    start: { local: string };
    summary: string;
    url: string;
    listed: boolean;
    status: string;
}

interface EventbriteError {
    error: string;
    error_description: string;
    status_code: number;
}

export const fetchEventbriteEvents = async (): Promise<EventbriteEvent[]> => {
    const organizerId = process.env.EVENTBRITE_ORGANIZER_ID;
    const privateToken = process.env.EVENTBRITE_PRIVATE_TOKEN?.trim();

    if (!organizerId || !privateToken) {
        console.error(`Eventbrite credentials are not set in .env.local`);
        return [];
    }

    const url = `https://www.eventbriteapi.com/v3/organizers/${organizerId}/events/`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${privateToken}`,
                'Content-Type': 'application/json',
            },
            next: {
                revalidate: 3600, // revalidate the data every hour
            },
        });

        if (!response.ok) {
            const errorDetails: EventbriteError = await response.json();
            console.error('Eventbrite API Error:', errorDetails);
            return [];
        }

        const data = await response.json();
        let allEvents: EventbriteEvent[] = data.events || [];

        // Filter upcoming and public evnets
        const now = new Date();
        const upcomingPublicEvents = allEvents.filter(event => {
            const eventDate = new Date(event.start.local);
            return event.listed === true && eventDate > now;
        })

        // Sort the filtered envets
        const sortedEvents = upcomingPublicEvents.sort((a, b) => {
            const dateA = new Date(a.start.local).getTime();
            const dateB = new Date(b.start.local).getTime();
            return dateA - dateB;
        })

        return sortedEvents;

    } catch (error) {
        console.log(`A network or other fetch error occurred: ${error}`);
        return [];
    }
}