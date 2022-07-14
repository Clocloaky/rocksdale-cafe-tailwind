import { useParams, useNavigate, Link } from "react-router-dom";
import { getEvent, getOtherEvents } from "../slices/eventPageFunctions";
import { FaArrowLeft } from "react-icons/fa";

const EventsDetailPage = () => {
    const { eventID } = useParams();
    const eventDesc = getEvent(eventID);
    const otherEvents = getOtherEvents(eventID);
    //array destructure is depended on order
    //object destructure requires that the property names
    let { id, imageUrl: imageURL, title, date, type, body } = eventDesc[0]
    // [{}] {}
    //I write so much spaghetti code holy crap
    let navigate = useNavigate();

    return (
        <div className="grid pt-[100px] md:grid-cols-3 gap-5 md:pt-[450px] md:px-20 lg:px-40">
            <div className="col-span-2 md:pr-10">
                <div className="md:pb-[100px]">
                    <button className="flex bg-red-500 items-center p-1 text-white"
                        onClick={() => {
                            navigate("/Events");
                        }}
                    > <FaArrowLeft />&nbsp;&nbsp;Go back to Events</button>
                </div>
                <img className='bg-gray-500 h-[200px] w-full object-cover' src={imageURL} alt="/" />
                <h1 className='text-6xl font-bold'>{title} - {type}</h1>
                <p>{date}</p>
                <p>{body}</p>
            </div>
            <div className="border p-10">
                <h1>See other {type} Events:</h1>
                {
                    otherEvents.map((event, index) => {
                        return (

                            <div key={index} className="pb-5">
                                <Link
                                    style={{ display: "block", margin: "1rem 0" }}
                                    to={`/Events/${event.id}`}
                                >
                                    <img src={event.imageUrl} alt="" />
                                    <h1 className="text-center">{event.title} <span className="text-sm text-gray-600">{event.date}</span></h1>
                                </Link>
                            </div>

                        )
                    })
                }
            </div>
        </div >
    )
}

export default EventsDetailPage