import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Home from '../Pages/Home';
import Signup from '../Pages/Signup';

const Navigator = (props) => {
    // console.log(props)
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home workerData={props.workersData} />} />
                <Route path='/signup' element={<Signup addWorker={props.addWorker} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Navigator;
