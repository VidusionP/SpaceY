import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Main(props) {
    const res = props.events.filter(word => props.events.indexOf(word) < 2)
    console.log (res)
    const res1 = props.launch.filter(word => props.launch.indexOf(word) < 5)
    console.log (res1)
  return (
    <div>
        <div>
            <h1>LATEST NEWS</h1>
            <div>
                {res.map((item,i ) => {
                        return (
                            <div>
                                {/* <div><img src={item.feature_image}/></div> */}
                                
                                <div>
                                    <h3>{item.date}</h3>
                                    <h3>{item.name}</h3>
                                    <div>
                                        <div>{item.location}</div>
                                        {item.expeditions[0] ? <div>{item.expeditions[0].name}</div> : ''}
    
                                        {item.spacestations[0] ? <div>{item.spacestations[0].name}</div> : ''}
                                    </div>
                                </div>
                            </div>
                        )
                })}
                <div></div>
                <button>SEE MORE</button>
            </div>
        </div>
        <div>
            <h1>SPACE LAUNCHES</h1>
            <div>
                {res1.map((item,i ) => {
                        return (
                            <div>
                                <div>
                                    <div>
                                        {/* <div><img src={item.image}/></div> */}
                                        <div>
                                            <h3>{item.name}</h3>
                                            <p>{item.launch_service_provider.name} | {item.pad.location.country_code}</p>
                                            <p>{item.pad.location.name}</p>
                                            <p>{item.net}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3>Status: {item.status.name}</h3>
                                    <h3>Mission: </h3>
                                    <p>{item.mission.description}</p>
                                    <div>
                                        {item.mission.orbit ? <div>{item.mission.orbit.name}</div>: '' }
                                        {item.pad.name ? <div>{item.pad.name}</div>: '' }
                                        
                                    </div>
                                </div>
                            </div>
                        )
                })}
                <div></div>
                <button>SEE MORE</button>
            </div>
        </div>
    </div>
  )
}

