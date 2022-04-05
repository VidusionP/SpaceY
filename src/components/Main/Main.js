import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Main.scss'

export default function Main(props) {
    const res = props.events.filter(word => props.events.indexOf(word) < 2)
    // console.log (res)
    const res1 = props.launch.filter(word => props.launch.indexOf(word) < 2)
    // console.log (res1)
    const res2 = props.space.filter(word => props.space.indexOf(word) < 2)
    // console.log (res2)
    const [on, setOn] = useState(false)
  return (
    <div className='main'>
        <div className='main__news'>
            <h1 className='main__news--title'>LATEST NEWS</h1>
            <div className='main__news--section'>
                {res.map((item,i ) => {
                        return (
                            <div className='main__news--section__card'>
                                {/* <span className='main__hover'></span> */}
                                <img className='main__news--section__card--img' src={item.feature_image}/>
                                <div className='main__news--section__card--div'>
                                    <h3 className='main__news--section__card--date'>{new Date(item.date).toDateString()}</h3>
                                    <h3 className='main__news--section__card--title'>{item.name}</h3>
                                    <div>
                                        <div className='main__news--section__card--loc'>{item.location}</div>
                                        {item.expeditions[0] ? <div className='main__news--section__card--exp'>{item.expeditions[0].name}</div> : ''}
    
                                        {item.spacestations[0] ? <div className='main__news--section__card--ss'>{item.spacestations[0].name}</div> : ''}
                                    </div>
                                </div>
                            </div>
                        )
                })}
                <div></div>
                <button className='main__button'>SEE MORE</button>
            </div>
        </div>
        <div className='main__space'>
            <h1 className='main__news--title'>SPACE LAUNCHES</h1>
            <div className='main__space--section'>
                {res1.map((item,i ) => {
                        return (
                            <div className='main__space--section__card'>
                                <div className='main__space--section__card--top'>
                                        <div className='main__space--section__card--top__div'>
                                            <img className='main__space--section__card--top__img' src={item.image}/>
                                            </div>
                                        <div className='main__space--section__card--top__div2'>
                                            <h3 className='main__space--section__card--top__title'>{item.name}</h3>
                                            <p className='main__space--section__card--top__name'>{item.launch_service_provider.name} | {item.pad.location.country_code}</p>
                                            <p className='main__space--section__card--top__pad'>{item.pad.location.name}</p>
                                            <p className='main__space--section__card--top__date'>{new Date(item.net).toDateString()}</p>
                                            {/* <p className='main__space--section__card--top__date'>{new Date(item.net).getDate()}</p> */}
                                        </div>
                                    </div>
                                
                                <div className='main__space--section__card--bot'>
                                    <h3 className='main__space--section__card--bot__status'>Status: {item.status.name}</h3>
                                    <h3 className='main__space--section__card--bot__miss'>Mission: </h3>
                                    {item.mission ? <p className='main__space--section__card--bot__desc'>{item.mission.description}</p>: <p className='main__space--section__card--bot__desc'>TBD</p>}
                                    <div className='main__space--section__card--bot__bot'>
                                        {item.mission ? <div className='main__space--section__card--bot__bot--1'>{item.mission.orbit.name}</div>: '' }
                                        {item.pad.name ? <div className='main__space--section__card--bot__bot--2'>{item.pad.name}</div>: '' }
                                        
                                    </div>
                                </div>
                            </div>
                        )
                })}
                <div></div>
                <button className='main__button'>SEE MORE</button>
            </div>
        </div>
        {/* <div className='main__station'>
            <h1 className='main__news--title'>SPACESTATIONS</h1>
            <div>
                {res2.map((item,i ) => {
                        return (
                            <div>
                                <div>
                                    <h2>{item.name}</h2>
                                    <p>{item.description}</p>
                                    <p>Status: {item.status.name}</p>
                                    <p>Owner: {item.owners[0].name}</p>
                                </div>
                                <div><img src={item.image_url}/></div>
                            </div>
                        )
                })}
                <div></div>
                <button className='main__button'>SEE MORE</button>
            </div>
        </div> */}
    </div>
  )
}

