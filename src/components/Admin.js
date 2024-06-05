import React, { useContext }  from "react";
import Context from "../context/context.js";

function Admin() {
    const context = useContext(Context);
    const{events, fetchAllEvents} = context;
    return <div>
    </div>
}

export default Admin;