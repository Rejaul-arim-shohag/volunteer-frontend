import React from 'react';

const Event = (props) => {
    const { name, imageURL} = props.event;
    const deleteEvent = (id) =>{
        
    }
    return (
        <div style={{display:"inline-block", margin:"5px 10px"}} className="">
            <img style={{ width: "250px", }} src={imageURL} alt="" />
            <p>{name} <button onClick={()=>deleteEvent(props.event_id)}>Delete</button></p>
            
        </div>
    );
};

export default Event;