import React from 'react';
import { BrowserRoute, Link, Route,
Routes } from 'react-router-dom';

import { logo } from './assets'
import { Home,CreatePost } from './pages';


const App = () => {
    return (
        <BrowserRoute>
        <header className='w-full flex justify-between items-center bg-white
        sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'></header>
        </BrowserRoute>
    )
}







export default App