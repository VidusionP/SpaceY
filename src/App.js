import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Header } from './components/Header/Header';
import Main from './components/Main/Main';


function App() {
  const [launch, setLaunch] = useState([])
  const [event, setEvent] = useState([])
  const [station, setStation] = useState([])

    const getData = async () => {
        const res = await axios.get('https://lldev.thespacedevs.com/2.2.0/launch/upcoming');
        const res1 = await axios.get('https://lldev.thespacedevs.com/2.2.0/event/upcoming');
        const res2 = await axios.get('https://lldev.thespacedevs.com/2.2.0/spacestation');
        setLaunch(res.data.results)
        setEvent(res1.data.results)
        setStation(res2.data.results)
    }
    useEffect(() => {
        getData()
    },[])
  return (
    <>
      <Router>
        <Header/>
        <Main
          events={event}
          launch={launch}
          space={station}
        />

      </Router>
    </>
  );
}

export default App;
