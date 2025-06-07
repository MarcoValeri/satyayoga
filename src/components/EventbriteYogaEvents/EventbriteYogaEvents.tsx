import CardClass from '../CardClass/CardClass';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { fetchEventbriteEvents, EventbriteEvent } from '@/lib/eventbrite';

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getLastEvents = async () => {
    const allEvents = await fetchEventbriteEvents();
    
    // await sleep(2000000);
    
    return allEvents;
}

interface EventbriteYogaEventsProps {
    eventsNumber: number;
}

const EventbriteYogaEvents = async (props: EventbriteYogaEventsProps) => {

    const eventbriteYogaEvents: EventbriteEvent[] = await getLastEvents();

    return (
        <>
            {
            eventbriteYogaEvents.length > 0
            ?
            eventbriteYogaEvents.map((event, index) => {
                if (index < props.eventsNumber) {
                    return (
                        <CardClass
                            key={event.id}
                            title="Open Vinyasa"
                            dateStart={event.start.local}
                            dateEnd={event.end.local}
                            time={event.start.local}
                            venue={event.venue.name}
                            buttonLink={event.url}
                            button={"BOOK"}
                        />
                    )
                }
            })
            :
            <div>
                <ErrorMessage
                    title="Oh no! Looks like our classes are taking a break."
                    message={`Check back again soon or <a className="link-red" href="/classes">click here</a>.`}
                />
            </div>
            }
        </>
    )
}

export default EventbriteYogaEvents;