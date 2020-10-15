import React from 'react';
import {Link} from 'react-router-dom';
import iconeLogo from '../images/logo2.svg'
import '../styles/pages/orfanatoMapa.css';
import {FiPlus, FiHome} from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';


function OrfanatosMapas(){
    return (
       <div id="page-map">
           <aside>
               <header>
                   <img src={iconeLogo} alt="logo"/>

                   <h2> Escolha um orfanato no mapa</h2>
                   <p>Muitas crianças estão esperando a sua visita :D</p>
               </header>

               <footer>
                   <strong>São Lourenço da Mata</strong>
                   <span>Pernambuco</span>
               </footer>

              
           </aside>
           
            <Map 
                center={[-8.0060748,-35.0328706]}
                zoom={14}
                style={{width:'100%', height:'100%'}}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}

                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
                
            </Map>
            
            <Link to="/" className="link-back"> 
                <FiHome size="32" color="#fff" />
            </Link>

            <Link to="" className="link-creat"> 
                <FiPlus size="32" color="#fff" />
            </Link>
       </div>
    );
}

export default OrfanatosMapas;