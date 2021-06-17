import React, { useState } from 'react';
import Event from '../Event/Event';
import { useEffect } from 'react';

const Home = () => {
    const [events, setEvent] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/events')
        .then((res)=>res.json())
        .then((data)=>{
            // console.log('this is home data',data)
            setEvent(data)
        })
    },[])
    return (
        <div className="container row text-center m-auto">

            {
                events.map(event => <Event event={event}></Event>)
            }
        </div>
    );
};

export default Home;