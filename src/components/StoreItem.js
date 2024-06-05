import React, { useContext, useRef } from "react";
import Context from "../context/context.js";

function StoreItem(props) {
    const context = useContext(Context)
    const { login, deleteItem } = context
    const ref = useRef(null);
    const refClose = useRef(null);
    const handleClick = (e) => {
      ref.current.click();
    }
    return <div>
<button ref={ref} type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#myModal">
  Open modal
</button>

<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Buy Item</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <img src="https://www.investopedia.com/thmb/tJq-mQKa7VHC4JG76FATefpzN1Y=/1148x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png" alt="qr-image" height="100" width="100"></img>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div><div className="card">
    <img src={props.item.itemImage} className="card-img-top stores" alt="storeImage" />
    <div className="card-body">
      <p className="card-text">${props.item.itemPrice}</p>
      <div class="d-flex justify-content-between">
      <a href="#" className="btn btn-primary delete" onClick={handleClick}>Buy</a>
      { login && <div class="d-flex justify-content-between">
      <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {deleteItem(props.item._id)}} width="25" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
      <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {props.updateItem(props.item)}} width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg> </div> }
      </div>
    </div>
  </div>
  </div>
}

export default StoreItem;