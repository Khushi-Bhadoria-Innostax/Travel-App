import React from "react";
import './main.css';
import img from '../../Assets/img2.jpeg';
import {MdOutlineLocationOn} from 'react-icons/md';
import {HiOutlineClipboardList} from 'react-icons/hi';

const Data = [
    {
      id: 1,
      imgSrc: img,
      destTitle: "Paris",
      location: "France",
      grade: 9.5,
      fees: 100,
      description: "Explore the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral."
    },
    /*{
      id: 2,
      img: "im2.jpeg",
      destTitle: "Rome",
      location: "Italy",
      grade: 9.2,
      fees: 80,
      description: "Visit the Colosseum, Vatican City, and Trevi Fountain."
    },
    {
      id: 3,
      img: "img4.jpeg",
      destTitle: "Tokyo",
      location: "Japan",
      grade: 9.7,
      fees: 120,
      description: "Experience vibrant neighborhoods, sushi, and the stunning views from Tokyo Skytree."
    },
    {
      id: 4,
      img: "img5.jpeg",
      destTitle: "New York City",
      location: "United States",
      grade: 9.3,
      fees: 150,
      description: "Discover Times Square, Statue of Liberty, and Central Park."
    },
    {
      id: 5,
      img: "img6.jpeg",
      destTitle: "Cairo",
      location: "Egypt",
      grade: 9.1,
      fees: 70,
      description: "Marvel at the Great Pyramids of Giza and explore the ancient Egyptian history."
    },
    {
        id: 6,
        img: "img7.jpeg",
        destTitle: "Cairo",
        location: "Egypt",
        grade: 9.1,
        fees: 70,
        description: "Marvel at the Great Pyramids of Giza and explore the ancient Egyptian history."
      },
      {
        id: 7,
        img: "img8.jpeg",
        destTitle: "Cairo",
        location: "Egypt",
        grade: 9.1,
        fees: 70,
        description: "Marvel at the Great Pyramids of Giza and explore the ancient Egyptian history."
      },
      {
        id: 8,
        img: "img9.jpeg",
        destTitle: "Cairo",
        location: "Egypt",
        grade: 9.1,
        fees: 70,
        description: "Marvel at the Great Pyramids of Giza and explore the ancient Egyptian history."
      },
      {
        id: 9,
        img: "img10.jpeg",
        destTitle: "Cairo",
        location: "Egypt",
        grade: 9.1,
        fees: 70,
        description: "Marvel at the Great Pyramids of Giza and explore the ancient Egyptian history."
      }*/
  ];
  


const Main=() =>{
    return(
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">
                    Most visited destinations
                </h3>
            </div>
            <div className="secContent grid">
                {
                    Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                        return(
                            <div key={id} className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <MdOutlineLocationOn className='icon'/>
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardList className="icon" />
                                    </button>
                                </div>

                            </div>
                        )

                    })
                }


            </div>
        </section>
    )
}

export default Main