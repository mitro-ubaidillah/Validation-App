import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DonationApp from '../pages/DonationApp';
import FinishDonationApp from '../pages/FinishDonationApp';

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DonationApp />} />
                <Route path='/finish' element={<FinishDonationApp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp;
