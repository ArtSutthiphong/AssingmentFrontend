import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Screen001 from '../screen/screen001';
import Screen002 from '../screen/screen002';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Screen001 />} />
                <Route path='/users' exact element={<Screen002 />} />
                <Route path='*' exact element={<Screen001 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;