import React from "react";
import './home.css';
import video from '../../Assets/video2.mp4';
import {GrLocation} from 'react-icons/gr';
import {FaFilter} from 'react-icons/fa';

const Home=() =>{
    return(
        <section className='home'>
            <div className="overlay"></div>
                <video src={video} muted autoPlay loop type='video/mp4'></video>
            
            <div className="homeContent Container">
                <div className="textDiv">
                    <span className="smallText">
                        Our Packages
                    </span>
                    <h1 className="homeTitle">
                        Search your Holidays
                    </h1>
                </div>
                <div className="cardDiv grid">
                    <div className='destinationInput'>
                        <label htmlFor="city">Search your Destination:</label>
                        <div className='input flex'>
                            <input type="text" placeholder="Enter name here... "/>
                            <GrLocation className="icon"/>
                        </div>
                    </div>
                    <div className='dateInput'>
                        <label htmlFor="date">Search your Date:</label>
                        <div className='input flex'>
                            <input type="date"/>
                            
                        </div>
                    </div>
                    <div className='priceInput'>
                        <div className="label_total flex">
                            <label htmlFor="price">Max price:</label>
                            <h3 className="total">$5000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="5000" min="1000" />
                        </div>
                    </div>
                    <div className="searchOptions flex">
                        <FaFilter className="icon" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home