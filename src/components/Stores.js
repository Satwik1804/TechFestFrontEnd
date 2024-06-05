import React, { useState, useContext, useEffect, useRef } from "react";
import Context from "../context/context.js";
import StoreItem from "./StoreItem.js";

function Items() {
    const context = useContext(Context);
    const{login, stores, fetchAllItems, addItems, editItem} = context;
    const [item, setItem] = useState({itemId:"", itemImage:"", itemPrice:""})
    useEffect(() => {
        fetchAllItems()
     }, [fetchAllItems])
    const handleClick = (e) => {
        e.preventDefault();
        addItems(item.itemId, item.itemImage, item.itemPrice);
    }
    const handleChange = (e) => {
        setItem({...item, [e.target.name]: e.target.value})
    }
    const ref = useRef(null)
    const refClose = useRef(null)
    const [newItem, setNewItem] = useState({id:"", newitemId:"", newitemImage:"", newitemPrice: 0})
    const updateItem = (currentItem) => {
        ref.current.click()
        setNewItem({id: currentItem._id, newitemId: currentItem.itemId, newitemImage: currentItem.itemImage, newitemPrice: currentItem.itemPrice});
    }
    const newHandleClick = (e) => {
        editItem(newItem.id, newItem.newitemId, newItem.newitemImage, newItem.newitemPrice)
        refClose.current.click()
    }
    const newHandleChange = (e) => {
        setNewItem({...newItem, [e.target.name]: e.target.value})
    }
    return <div>
        {(login && <div><form>
        <div class="mb-3">
            <input type="text" class="form-control" id="itemId" name="itemId" placeholder="Item Id" onChange={handleChange} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="itemImage" name="itemImage" placeholder="Item Image" onChange={handleChange} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="itemPrice" name="itemPrice" placeholder="Item Price" onChange={handleChange} />
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleClick}>Add item</button>
       </form>
       <button ref={ref} type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Item</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
            <div class="mb-3">
            <input type="text" class="form-control" id="newitemId" name="newitemId" placeholder="Item Id" onChange={newHandleChange} value={newItem.newitemId} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="newitemImage" name="newitemImage" placeholder="Item Image" onChange={newHandleChange} value={newItem.newitemImage} />
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="newitemPrice" name="newitemPrice" placeholder="Item Price" onChange={newHandleChange} value={newItem.newitemPrice} />
        </div>
            </form>
            </div>
            <div class="modal-footer">
                <button ref={refClose} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button onClick={newHandleClick} type="button" class="btn btn-primary">Update Item</button>
            </div>
            </div>
        </div>
        </div>
       </div>)}
        <div className="row my-3">
        {stores.map((item)=>{
            return <StoreItem key={item.id} item={item} updateItem={updateItem} />;
        })}
    </div>
    </div>
}

export default Items;