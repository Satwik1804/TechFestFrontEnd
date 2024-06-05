import React, { useContext, useEffect, useState, useRef } from "react";
import Context from "../context/context.js";
import WorkshopItem from "./WorkshopItem.js";

function Workshops() {
    const context = useContext(Context);
    const{login, workshops, fetchAllWorkshops, addWorkshop, editWorkshop} = context;
    const [workshop, setWorkshop] = useState({workshopId:"", workshopImage:"", workshopName:"", workshopDescription:"", workshopPrice:"", workshopDate:"", workshopVenue:"", clubName:""})
    useEffect(() => {
       fetchAllWorkshops()
    }, [fetchAllWorkshops])
    const handleClick = (e) => {
        e.preventDefault();
        addWorkshop(workshop.workshopId, workshop.workshopImage, workshop.workshopName, workshop.workshopDescription, workshop.workshopPrice, workshop.workshopDate, workshop.workshopVenue, workshop.clubName);
    }
    const handleChange = (e) => {
        setWorkshop({...workshop, [e.target.name]: e.target.value})
    }
    const ref = useRef(null)
    const refClose = useRef(null)
    const [newWorkshop, setNewWorkshop] = useState({id:"", newworkshopId: "", newworkshopImage: "", newworkshopName:"", newworkshopDescription: "", newworkshopPrice: 0, newworkshopDate: "", newworkshopVenue: "", newclubName:""})
    const updateWorkshop = (currentWorkshop) => {
        ref.current.click()
        setNewWorkshop({id: currentWorkshop._id, newworkshopId: currentWorkshop.workshopId, newworshopImage: currentWorkshop.workshopImage, newworkshopName: currentWorkshop.workshopName, newworkshopDescription: currentWorkshop.workshopDescription, newworkshopPrice: currentWorkshop.newworkshopPrice, newworkshopDate: currentWorkshop.workshopDate, newworkshopVenue: currentWorkshop.competitionVenue, newclubName: currentWorkshop.clubName});
    }
    const newHandleClick = (e) => {
        editWorkshop(newWorkshop.id, newWorkshop.newworkshopId, newWorkshop.newworkshopImage, newWorkshop.newworkshopName, newWorkshop.newworkshopDescription, newWorkshop.newworkshopPrice, newWorkshop.newworkshopDate, newWorkshop.newworkshopVenue, newWorkshop.newclubName)
        refClose.current.click()
    }
    const newHandleChange = (e) => {
        setNewWorkshop({...newWorkshop, [e.target.name]: e.target.value})
    }
    return <div>
        {(login && <div><form>
        <div class="mb-3">
            <input type="text" class="form-control" id="workshopId" name="workshopId" placeholder="Workshop Id" onChange={handleChange} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="workshopImage" name="workshopImage" placeholder="Workshop Image" onChange={handleChange} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="workshopName" name="workshopName" placeholder="Workshop Name" onChange={handleChange} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="workshopDescription" name="workshopDescription" placeholder="Workshop Description" onChange={handleChange} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="workshopDescription" name="workshopPrice" placeholder="Workshop Price" onChange={handleChange} />
        </div>
        <div class="mb-3">
            <input type="date" class="form-control" id="workshopDate" name="workshopDate" placeholder="Workshop Date" onChange={handleChange} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="workshopVenue" name="workshopVenue" placeholder="Workshop Venue" onChange={handleChange} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="clubName" name="clubName" placeholder="Club Name" onChange={handleChange} />
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleClick}>Add workshop</button>
       </form>
       <button ref={ref} type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Workshop</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
            <div class="mb-3">
            <input type="text" class="form-control" id="newworkshopId" name="newworkshopId" placeholder="Workshop Id" onChange={newHandleChange} value={newWorkshop.newworkshopId} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="newworkshopImage" name="newworkshopImage" placeholder="Workshop Image" onChange={newHandleChange} value={newWorkshop.newworkshopImage} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="newworkshopName" name="newworkshopName" placeholder="Workshop Name" onChange={newHandleChange} value={newWorkshop.newworkshopName} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="newworkshopDescription" name="newworkshopDescription" placeholder="Workshop Description" onChange={newHandleChange} value={newWorkshop.newworkshopDescription} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="newworkshopDescription" name="newworkshopPrice" placeholder="Workshop Price" onChange={newHandleChange} value={newWorkshop.newworkshopPrice} />
        </div>
        <div class="mb-3">
            <input type="date" class="form-control" id="newworkshopDate" name="newworkshopDate" placeholder="Workshop Date" onChange={newHandleChange} value={newWorkshop.newworkshopDate} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="newworkshopVenue" name="newworkshopVenue" placeholder="Workshop Venue" onChange={newHandleChange} value={newWorkshop.newworkshopVenue} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="newclubName" name="newclubName" placeholder="Club Name" onChange={newHandleChange} value={newWorkshop.newclubName} />
        </div>
            </form>
            </div>
            <div class="modal-footer">
                <button ref={refClose} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button onClick={newHandleClick} type="button" class="btn btn-primary">Update Workshop</button>
            </div>
            </div>
        </div>
        </div></div>)}
       <div className="row my-3">
        {workshops.map((workshop)=>{
            return <WorkshopItem key={workshop.id} workshop={workshop} updateWorkshop={updateWorkshop} />;
        })}
    </div>
    </div>
}

export default Workshops;