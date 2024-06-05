// import React, { useState, useContext, useEffect, useRef }  from "react";
// import Context from "../context/context.js";
// import EventItem from "./EventItem.js";

// function Events() {
//     const context = useContext(Context);
//     const{login, events, fetchAllEvents, addEvent, editEvent} = context;
//     const [event, setEvent] = useState({eventId: "", eventImage: "", eventName: "", eventDescription: "", eventDate: "", eventVenue: ""})
//     useEffect(() => {
//        fetchAllEvents()
//     }, [fetchAllEvents])
//     const handleClick = (e) => {
//         e.preventDefault();
//         addEvent(event.eventId, event.eventImage, event.eventName, event.eventDescription, event.eventDate, event.eventVenue);
//     }
//     const handleChange = (e) => {
//         setEvent({...event, [e.target.name]: e.target.value})
//     }
//     const ref = useRef(null)
//     const refClose = useRef(null)
//     const [newEvent, setNewEvent] = useState({id:"", neweventId: "", neweventImage: "", neweventName:"", neweventDescription: "", neweventDate: "", neweventVenue: ""})
//     const updateEvent = (currentEvent) => {
//         ref.current.click()
//         setNewEvent({id: currentEvent._id, neweventId: currentEvent.eventId, neweventImage: currentEvent.eventImage, neweventName: currentEvent.eventName, neweventDescription: currentEvent.eventDescription, neweventDate: currentEvent.eventDate, neweventVenue: currentEvent.eventVenue});
//     }
//     const newHandleClick = (e) => {
//         editEvent(newEvent.id, newEvent.neweventId, newEvent.neweventImage, newEvent.neweventName, newEvent.neweventDescription, newEvent.neweventDate, newEvent.neweventVenue)
//         refClose.current.click()
//     }
//     const newHandleChange = (e) => {
//         setNewEvent({...newEvent, [e.target.name]: e.target.value})
//     }
//     return <div>
//     {(login && <div><form>
//         <div class="mb-3">
//             <input type="text" class="form-control" id="eventId" name="eventId" placeholder="Event Id" onChange={handleChange} />
//         </div>
//         <div class="mb-3">
//             <input type="text" class="form-control" id="eventImage" name="eventImage" placeholder="Event Image" onChange={handleChange} />
//         </div>
//         <div class="mb-3">
//             <input type="text" class="form-control" id="eventName" name="eventName" placeholder="Event Name" onChange={handleChange} />
//         </div>
//         <div class="mb-3">
//             <input type="text" class="form-control" id="eventDescription" name="eventDescription" placeholder="Event Description" onChange={handleChange} />
//         </div>
//         <div class="mb-3">
//             <input type="date" class="form-control" id="eventDate" name="eventDate" placeholder="Event Date" onChange={handleChange} />
//         </div>
//         <div class="mb-3">
//             <input type="text" class="form-control" id="eventVenue" name="eventVenue" placeholder="Event Venue" onChange={handleChange} />
//         </div>
//         <button type="submit" class="btn btn-primary" onClick={handleClick}>Add Event</button>
//        </form>
//        <button ref={ref} type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
//         Launch demo modal
//         </button>
//         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div class="modal-dialog">
//             <div class="modal-content">
//             <div class="modal-header">
//                 <h5 class="modal-title" id="exampleModalLabel">Edit Event</h5>
//                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div class="modal-body">
//             <form>
//                 <div class="mb-3">
//                     <input type="text" class="form-control" id="neweventId" name="neweventId" placeholder="Event Id" value={newEvent.neweventId} onChange={newHandleChange} />
//                 </div>
//                 <div class="mb-3">
//                     <input type="text" class="form-control" id="neweventImage" name="neweventImage" placeholder="Event Image" value={newEvent.neweventImage} onChange={newHandleChange} />
//                 </div>
//                 <div class="mb-3">
//                     <input type="text" class="form-control" id="neweventName" name="neweventName" placeholder="Event Name" value={newEvent.neweventName} onChange={newHandleChange} />
//                 </div>
//                 <div class="mb-3">
//                     <input type="text" class="form-control" id="neweventDescription" name="neweventDescription" placeholder="Event Description" value={newEvent.neweventDescription} onChange={newHandleChange} />
//                 </div>
//                 <div class="mb-3">
//                     <input type="date" class="form-control" id="neweventDate" name="neweventDate" placeholder="Event Date" value={newEvent.neweventDate} onChange={newHandleChange} />
//                 </div>
//                 <div class="mb-3">
//                     <input type="text" class="form-control" id="neweventVenue" name="neweventVenue" placeholder="Event Venue" value={newEvent.neweventVenue} onChange={newHandleChange} />
//                 </div>
//             </form>
//             </div>
//             <div class="modal-footer">
//                 <button ref={refClose} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                 <button onClick={newHandleClick} type="button" class="btn btn-primary">Update Event</button>
//             </div>
//             </div>
//         </div>
//         </div></div>)}
//         <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="..." class="d-block w-100" alt="..." />
//     </div>
//     <div class="carousel-item">
//       <img src="..." class="d-block w-100" alt="..." />
//     </div>
//     <div class="carousel-item">
//       <img src="..." class="d-block w-100" alt="..." />
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
//     <div className="row my-3">
//         {events.map((event)=>{
//             return <EventItem key={event.id} event={event} updateEvent={updateEvent} />;
//         })}
//     </div>
//     </div>
// }

// export default Events;

import React, { useState, useContext, useEffect, useRef } from "react";
import Context from "../context/context.js";
import EventItem from "./EventItem.js";

function Events() {
    const context = useContext(Context);
    const { login, events, fetchAllEvents, addEvent, editEvent } = context;
    const [event, setEvent] = useState({
        eventId: "",
        eventImage: "",
        eventName: "",
        eventDescription: "",
        eventDate: "",
        eventVenue: ""
    });

    useEffect(() => {
        fetchAllEvents();
    }, [fetchAllEvents]);

    const handleClick = (e) => {
        e.preventDefault();
        addEvent(
            event.eventId,
            event.eventImage,
            event.eventName,
            event.eventDescription,
            event.eventDate,
            event.eventVenue
        );
    };

    const handleChange = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value });
    };

    const ref = useRef(null);
    const refClose = useRef(null);
    const [newEvent, setNewEvent] = useState({
        id: "",
        neweventId: "",
        neweventImage: "",
        neweventName: "",
        neweventDescription: "",
        neweventDate: "",
        neweventVenue: ""
    });

    const updateEvent = (currentEvent) => {
        ref.current.click();
        setNewEvent({
            id: currentEvent._id,
            neweventId: currentEvent.eventId,
            neweventImage: currentEvent.eventImage,
            neweventName: currentEvent.eventName,
            neweventDescription: currentEvent.eventDescription,
            neweventDate: currentEvent.eventDate,
            neweventVenue: currentEvent.eventVenue
        });
    };

    const newHandleClick = (e) => {
        editEvent(
            newEvent.id,
            newEvent.neweventId,
            newEvent.neweventImage,
            newEvent.neweventName,
            newEvent.neweventDescription,
            newEvent.neweventDate,
            newEvent.neweventVenue
        );
        refClose.current.click();
    };

    const newHandleChange = (e) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    };

    // Filter out the last three events if array is not empty
    const lastThreeEvents = events.length > 0 ? events.slice(-3) : [];

    // Render the carousel only if there are events to display
    const renderCarousel = lastThreeEvents.length > 0 && (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {/* Generating indicators dynamically */}
                {lastThreeEvents.map((event, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : ""}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {/* Generating carousel items dynamically */}
                {lastThreeEvents.map((event, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                        <img src={event.eventImage} className="d-block w-100" alt={event.eventName} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{event.eventName}</h5>
                            <p>{event.eventDescription}</p>
                            <p>Date: {event.eventDate}</p>
                            <p>Venue: {event.eventVenue}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Carousel controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );

    return (
        <div>
            {login && (
                <div>
<button ref={ref} type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button ref={refClose} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
                    <form>
                        {/* Your form inputs */}
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleClick}
                        >
                            Add Event
                        </button>
                    </form>
                    {/* Your modal */}
                </div>
            )}
            {/* Render the carousel only if there are events */}
            {renderCarousel}
            <div className="row my-3">
                {events.map((event) => {
                    return <EventItem key={event.id} event={event} updateEvent={updateEvent} />;
                })}
            </div>
        </div>
    );
}

export default Events;













