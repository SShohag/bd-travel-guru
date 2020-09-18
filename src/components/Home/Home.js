import React from 'react';
import './Home.css'
import Place from '../Place/Place';
import Background from "../../bgimage/background.png"
import Header from '../Header/Header';

const Home = () => {
    const homeStyle ={
        backgroundImage:`url(${Background})`,
        // backgroundRepeat:"no-repeat",
        // backgroundPosition:"center",
        // backgroundSize:"cover"
    }
    var place =[
        {"key":1, "category":"tourPlace", "name":"SHAJEAK", "details":"Sajek valley is known for its natural environment and is surrounded by mountains, dense forest, and grassland hill tracks. Many small rivers flow through the mountains among which the Kachalong and the Machalong are notable. On the way to Sajek valley, one has to cross the Mayni range and the Mayni river. The road to Sajek has high peaks and falls.", "img":"https://i.ibb.co/yVrBrdj/sajek.png"},
    
        {"key":2, "category":"tourPlace", "name":"SREEMANGAL", "details":"In Srimangal Tour, traveler can have a look at the terraced tea garden along with pineapple, rubber and lemon plantations. There are a number of resorts in Srimangal established in recent times and the traveler choose from a 5 star resort to eco resorts in Srimanga", "img":"https://i.ibb.co/ZJ6Tr7K/mongol.png"},
    
        {"key":3, "category":"tourPlace", "name":"SUNDARBAN", "details":"There are many Sundarban tour operators that offer different types of package tours to the Sundarbans National Park in West Bengal. Most are predefined group tours with fixed itineraries and can either be day tours, overnight, or multiple nights with set accommodations included.","img":"https://i.ibb.co/pPrd2k3/sundonbon.png"}
    ];

    

    return (
        <div className="home" style={homeStyle}>
            
            {
            place.map(plc=> <Place key={plc.key} place={plc}></Place>)
            }
        </div>
    );
};

export default Home;