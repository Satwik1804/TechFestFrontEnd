import  Context from "./context.js";
import { useState } from "react";

const State = (props) => {
    const host = "http://localhost:5000";
    const [login, setLogin] = useState(false);
    const eventsInitial = [];
    const [events, setEvents] = useState(eventsInitial);
    const fetchAllEvents = async () => {
      const response = await fetch(`${host}/events/fetchAllEvents`, {
        method: "GET",
      });
      const json = await response.json()
      setEvents(json)
    }
    const addEvent = async (eventId, eventImage, eventName, eventDescription, eventDate, eventVenue) => {
      const response = await fetch(`${host}/events/addEvent`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({eventId, eventImage, eventName, eventDescription, eventDate, eventVenue}), 
      });
      console.log({eventId, eventImage, eventName, eventDescription, eventDate, eventVenue})
      var event = {
        _id: "659cbc1160cafa8de381085453",
        eventId: eventId,
        eventImage: eventImage,
        eventDescription: eventDescription,
        eventDate: eventDate,
        eventVenue: eventVenue,
        __v: 0,
      };
      setEvents(events.concat(event));
    };
    const editEvent = async (id, eventId, eventImage, eventName, eventDescription, eventDate, eventVenue) => {
      const response = await fetch(`${host}/events/updateEvent/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({eventId, eventImage, eventName, eventDescription, eventDate, eventVenue}), 
      });
      let newEvents = JSON.parse(JSON.stringify(events))
      for (let index = 0; index < newEvents.length; index++) {
        const element = newEvents[index];
        if (element._id === id) {
          newEvents[index].eventId = eventId;
          newEvents[index].eventImage = eventImage;
          newEvents[index].eventName = eventName;
          newEvents[index].eventDescription = eventDescription;
          newEvents[index].eventDate = eventDate;
          newEvents[index].eventVenue = eventVenue;
          break;
        }
      }
      setEvents(newEvents);
    };
    const deleteEvent = async (id) => {
      const response = await fetch(`${host}/events/deleteEvent/${id}`, {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json",
        }
      });
      const newEvents = events.filter((event)=>{ return event._id!==id })
      setEvents(newEvents)
    }
    const competitionsInitial = [];
    const [competitions, setCompetitions] = useState(competitionsInitial);
    const fetchAllCompetitions = async () => {
      const response = await fetch(`${host}/competitions/fetchAllCompetitions`, {
        method: "GET",
      });
      const json = await response.json()
      setCompetitions(json)
    }
    const addCompetition = async (competitionId, competitionImage, competitionName, competitionDescription, competitionWinningPrice, competitionDate, competitionVenue, clubName) => {
      const response = await fetch(`${host}/competitions/addCompetition`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({competitionId, competitionImage, competitionName, competitionDescription, competitionWinningPrice, competitionDate, competitionVenue, clubName}), 
      });
        var competition = {
        _id: "659cbc1160cafa8de381085453",
        competitionId: competitionId,
        competitionImage: competitionImage,
        competitionName: competitionName,
        competitionDescription: competitionDescription,
        competitionWinningPrice: competitionWinningPrice,
        competitionDate: competitionDate,
        competitionVenue: competitionVenue,
        clubName: clubName,
        __v: 0,
      };
      setCompetitions(competitions.concat(competition));
    };
    const editCompetition = async (id, competitionId, competitionImage, competitionName, competitionDescription, competitionWinningPrice, competitionDate, competitionVenue, clubName) => {
      const response = await fetch(`${host}/competitions/updateCompetition/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({competitionId, competitionImage, competitionName, competitionDescription, competitionWinningPrice, competitionDate, competitionVenue, clubName}), 
      });
      let newCompetitions = JSON.parse(JSON.stringify(competitions))
      for (let index = 0; index < newCompetitions.length; index++) {
        const element = newCompetitions[index];
        if (element._id === id) {
          newCompetitions[index].competitionId = competitionId;
          newCompetitions[index].competitionImage = competitionImage;
          newCompetitions[index].competitionName = competitionName;
          newCompetitions[index].competitionDescription = competitionDescription;
          newCompetitions[index].competitionWinningPrice = competitionWinningPrice;
          newCompetitions[index].competitionDate = competitionDate;
          newCompetitions[index].competitionVenue = competitionVenue;
          newCompetitions[index].clubName = clubName;
          break;
        }
      }
      setCompetitions(newCompetitions);
    };
    const deleteCompetition = async (id) => {
      const response = await fetch(`${host}/competitions/deleteCompetition/${id}`, {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json",
        }
      });
      const newCompetitions = competitions.filter((competition)=>{ return competition._id!==id })
      setCompetitions(newCompetitions)
    }
    const workshopsInitial = [];
    const [workshops, setWorkshops] = useState(workshopsInitial);
    const fetchAllWorkshops = async () => {
      const response = await fetch(`${host}/workshops/fetchAllWorkshops`, {
        method: "GET",
      });
      const json = await response.json()
      setWorkshops(json)
    }
    const addWorkshop = async (workshopId, workshopImage, workshopName, workshopDescription, workshopPrice, workshopDate, workshopVenue, clubName) => {
      const response = await fetch(`${host}/workshops/addWorkshop`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({workshopId, workshopImage, workshopName, workshopDescription, workshopPrice, workshopDate, workshopVenue, clubName}), 
      });
        var workshop = {
        _id: "659cbc1160cafa8de381085453",
        workshopId: workshopId,
        workshopImage: workshopImage,
        workshopName: workshopName,
        workshopDescription: workshopDescription,
        workshopPrice: workshopPrice,
        workshopDate: workshopDate,
        workshopVenue: workshopVenue,
        clubName: clubName,
        __v: 0,
      };
      setWorkshops(workshops.concat(workshop));
    };
    const editWorkshop = async (id, workshopId, workshopImage, workshopName, workshopDescription, workshopPrice, workshopDate, workshopVenue, clubName) => {
      const response = await fetch(`${host}/workshops/updateWorkshop/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({workshopId, workshopImage, workshopName, workshopDescription, workshopPrice, workshopDate, workshopVenue, clubName}), 
      });
      let newWorkshops = JSON.parse(JSON.stringify(workshops))
      for (let index = 0; index < newWorkshops.length; index++) {
        const element = newWorkshops[index];
        if (element._id === id) {
          newWorkshops[index].workshopId = workshopId;
          newWorkshops[index].workshopImage = workshopImage;
          newWorkshops[index].workshopName = workshopName;
          newWorkshops[index].workshopDescription = workshopDescription;
          newWorkshops[index].workshopPrice = workshopPrice;
          newWorkshops[index].workshopDate = workshopDate;
          newWorkshops[index].workshopVenue = workshopVenue;
          newWorkshops[index].clubName = clubName;
          break;
        }
      }
      setWorkshops(newWorkshops);
    };
    const deleteWorkshop = async (id) => {
      const response = await fetch(`${host}/workshops/deleteWorkshop/${id}`, {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json",
        }
      });
      const newWorkshops = workshops.filter((workshop)=>{ return workshop._id!==id })
      setWorkshops(newWorkshops)
    }
    const storesInitial = [];
    const [stores, setStores] = useState(storesInitial);
    const fetchAllItems = async () => {
      const response = await fetch(`${host}/stores/fetchAllItems`, {
        method: "GET",
      });
      const json = await response.json()
      setStores(json)
    }
    const addItems = async (itemId, itemImage, itemPrice) => {
      const response = await fetch(`${host}/stores/addItem`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({itemId, itemImage, itemPrice}), 
      });
        var store = {    
        _id: "659cbc1160cafa8de381085453",
        itemId: itemId,
        itemImage: itemImage,
        itemPrice: itemPrice,
        __v: 0,
      };
      setStores(stores.concat(store));
    };
    const editItem = async (id, itemId, itemImage, itemPrice) => {
      const response = await fetch(`${host}/stores/updateItem/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({itemId, itemImage, itemPrice}), 
      });
      let newStores = JSON.parse(JSON.stringify(stores))
      for (let index = 0; index < newStores.length; index++) {
        const element = newStores[index];
        if (element._id === id) {
          newStores[index].itemId = itemId;
          newStores[index].itemImage = itemImage;
          newStores[index].itemPrice = itemPrice;
          break;
        }
      }
      setStores(newStores);
    };
    const deleteItem = async (id) => {
      const response = await fetch(`${host}/stores/deleteItem/${id}`, {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json",
        }
      });
      const newItems = stores.filter((item)=>{ return item._id!==id })
      setStores(newItems)
    }
    return (
       <Context.Provider value={{ login, setLogin, events, setEvents, fetchAllEvents, addEvent,  editEvent, deleteEvent, competitions, fetchAllCompetitions, addCompetition, editCompetition, deleteCompetition, workshops, fetchAllWorkshops, addWorkshop, editWorkshop, deleteWorkshop, stores, setStores, fetchAllItems, addItems, editItem, deleteItem }}>
             {props.children}
       </Context.Provider>
    );
};

export default State;