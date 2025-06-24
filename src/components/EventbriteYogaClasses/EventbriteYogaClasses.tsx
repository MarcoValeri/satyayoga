import CardClassBook from "../CardClassBook/CardClassBook";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { fetchEventbriteEvents, EventbriteEvent } from "@/lib/eventbrite";

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getAllClasses = async () => {
    const allEvents = await fetchEventbriteEvents();
    const allClasses = allEvents.filter(event => event.format.name === 'Class, Training, or Workshop');
    // await sleep(2000000);    
    return allClasses;
}

const EventbriteYogaClasses = async () => {

    const getEventbriteYogaClasses: EventbriteEvent[] = await getAllClasses();
    console.log(getEventbriteYogaClasses);

    return (
        <>
            {
                getEventbriteYogaClasses.length > 0
                ?
                getEventbriteYogaClasses.map((event, index) => {
                    return (
                        <CardClassBook
                            key={event.id}
                            dateStart={event.start.local}
                            dateEnd={event.end.local}
                            time={event.start.local}
                            title={"Open Vinyasa"}
                            teacherLink="https://www.instagram.com/catgiordo/"
                            teacher="Caterina Giordo"
                            venue={event.venue.name}
                            venueAddress="https://maps.app.goo.gl/STZ8rWyhiuFZ4RQt6"
                            booking={event.url}
                        />
                    )
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

export default EventbriteYogaClasses;