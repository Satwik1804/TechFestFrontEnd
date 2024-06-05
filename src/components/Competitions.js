import React, { useState, useContext, useEffect, useRef } from "react";
import Context from "../context/context.js";
import CompetitionItem from "./CompetitionItem.js";

function  Competitions() {
    const context = useContext(Context);
    const {login, competitions, fetchAllCompetitions, addCompetition, editCompetition} = context;
    const [competition, setCompetition] = useState({competitionId:"", competitionImage:"", competitionName:"", competitionDescription:"", competitionWinningPrice: 0, competitionDate:"", competitionVenue:"", clubName:""})
    useEffect(() => {
       fetchAllCompetitions()
    }, [fetchAllCompetitions])
    const handleClick = (e) => {
        e.preventDefault();
        addCompetition(competition.competitionId, competition.competitionImage, competition.competitionName, competition.competitionDescription, competition.competitionWinningPrice, competition.competitionDate, competition.competitionVenue, competition.clubName);
    }
    const handleChange = (e) => {
        setCompetition({...competition, [e.target.name]: e.target.value})
    }
    const ref = useRef(null)
    const refClose = useRef(null)
    const [newCompetition, setNewCompetition] = useState({id:"", newcompetitionId: "", newcompetitionImage: "", newcompetitionName:"", newcompetitionDescription: "", newcompetitionWinningPrice: 0, newcompetitionDate: "", newcompetitionVenue: "", newclubName:""})
    const updateCompetition = (currentCompetition) => {
        const winningPrice = parseInt(currentCompetition.competitionWinningPrice);
        ref.current.click()
        setNewCompetition({id: currentCompetition._id, newcompetitionId: currentCompetition.competitionId, newcompetitionImage: currentCompetition.competitionImage, newcompetitionName: currentCompetition.competitionName, newcompetitionDescription: currentCompetition.competitionDescription, newcompetitionWinningPrice: newCompetition.newcompetitionWinningPrice, newcompetitionDate: currentCompetition.competitionDate, newcompetitionVenue: currentCompetition.competitionVenue, newclubName: currentCompetition.clubName});
    }
    const newHandleClick = (e) => {
        editCompetition(newCompetition.id, newCompetition.newcompetitionId, newCompetition.newcompetitionImage, newCompetition.newcompetitionName, newCompetition.newcompetitionDescription, newCompetition.newcompetitionWinningPrice, newCompetition.newcompetitionDate, newCompetition.newcompetitionVenue, newCompetition.newclubName)
        refClose.current.click()
    }
    const newHandleChange = (e) => {
        setNewCompetition({...newCompetition, [e.target.name]: e.target.value})
    }
    return <div>
        {(login && <div><form>
        <div class="mb-3">
            <input type="text" class="form-control" id="competitionId" name="competitionId" placeholder="Competition Id" onChange={handleChange} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="competitionImage" name="competitionImage" placeholder="Competition Image" onChange={handleChange} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="competitionName" name="competitionName" placeholder="Competition Name" onChange={handleChange} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="competitionDescription" name="competitionDescription" placeholder="Competition Description" onChange={handleChange} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="competitionDescription" name="competitionWinningPrice" placeholder="Competition Winning Price" onChange={handleChange} />
        </div>
        <div class="mb-3">
            <input type="date" class="form-control" id="competitionDate" name="competitionDate" placeholder="Competition Date" onChange={handleChange} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="competitionVenue" name="competitionVenue" placeholder="Competition Venue" onChange={handleChange} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="clubName" name="clubName" placeholder="Club Name" onChange={handleChange} />
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleClick}>Add competition</button>
       </form>
       <button ref={ref} type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Competition</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
            <div class="mb-3">
            <input type="text" class="form-control" id="newcompetitionId" name="newcompetitionId" placeholder="Competition Id" onChange={newHandleChange} value={newCompetition.newcompetitionId} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="newcompetitionImage" name="newcompetitionImage" placeholder="Competition Image" onChange={newHandleChange} value={newCompetition.newcompetitionImage} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="newcompetitionName" name="newcompetitionName" placeholder="Competition Name" onChange={newHandleChange} value={newCompetition.newcompetitionName} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="newcompetitionDescription" name="newcompetitionDescription" placeholder="Competition Description" onChange={newHandleChange} value={newCompetition.newcompetitionDescription} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="newcompetitionDescription" name="newcompetitionWinningPrice" placeholder="Competition Winning Price" onChange={newHandleChange} value={newCompetition.newcompetitionWinningPrice} />
        </div>
        <div class="mb-3">
            <input type="date" class="form-control" id="newcompetitionDate" name="newcompetitionDate" placeholder="Competition Date" onChange={newHandleChange} value={newCompetition.newcompetitionDate} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="newcompetitionVenue" name="newcompetitionVenue" placeholder="Competition Venue" onChange={newHandleChange} value={newCompetition.newcompetitionVenue} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="newclubName" name="newclubName" placeholder="Club Name" onChange={newHandleChange} value={newCompetition.newclubName} />
        </div>
            </form>
            </div>
            <div class="modal-footer">
                <button ref={refClose} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button onClick={newHandleClick} type="button" class="btn btn-primary">Update Competition</button>
            </div>
            </div>
        </div>
        </div></div>)}<div className="row my-3">
        {competitions.map((competition)=>{
            return <CompetitionItem key={competition.id} competition={competition} updateCompetition={updateCompetition} />;
        })}
    </div>
    </div>
}

export default Competitions;