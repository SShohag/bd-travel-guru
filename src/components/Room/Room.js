import React from 'react';
import './Room.css'
const Room = () => {
    var rooms = [
        {"key":4, "name":"Light bright stylish apt and sage peaceful stay", "img":"https://i.ibb.co/0hJD9SS/Rectangle-26.png", "about":"4 guests 2 bedroom 2bed 2 bath Wifi Air conditioning kitchen ","cancellation":"cancellation fexibility availiable",  "price":34},
    
        {"key":5, "name":"Apartment in Lost Panorama", "img":"https://i.ibb.co/PgxJWMF/Rectangle-27.png", "about":"4 guests 2 bedroom 2bed 2 bath wifi airconditioning kitchen ","cancellation":"cancellation fexibility availiable", "price":52},
    
        {"key":6, "name":"Ar Lounge and Pool", "img":"https://i.ibb.co/51MfG9M/Rectangle-28.png", "about":"4 guests 2 bedroom 2bed 2 bath wifi airconditioning kitchen ","cancellation":"cancellation fexibility availiable", "price":44}
    ];
    return (
        <div>
            <div>
            {
                rooms.map(room=> 
                <div className="room" >
                    <img src={room.img} alt=""/>
                    <div style={{marginLeft:"5px"}} >
                        <h5>{room.name}</h5>
                        <p>{room.about}</p>
                        <p> {room.cancellation} </p>
                        <br/>
                        <h5> $ {room.price}/night </h5>
                    </div>
                </div> )
            }
            </div>
        </div>
    );
};

export default Room;