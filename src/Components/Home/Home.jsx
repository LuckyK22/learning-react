import React from 'react'
import BgChange from './BgChange'
import Clock from './Clock'
import {Link} from 'react-router-dom'
import "./Home.css"

function Home() {
    return (
        <>
        <div
        style={{
            width: `100vw`
        }}
        >
            <div className='text-center text-6xl text-slate-100'>Lucky Kanathe</div>
            <div className='text-center text-6xl text-slate-100'>
            <Clock />
            <BgChange  />
            </div>
            <div className='text-center text-3xl text-slate-100 mt-10'>
            <Link  to="./currencyConverter"> Curreny Converter</Link>
            </div>
            <br />
            <div className='flex justify-center text-3xl text-slate-100'>
            <Link  to="/passwordGen">Password Gen</Link>
            </div>
            <br />
            <div className='flex justify-center text-3xl text-slate-100'>
            <Link  to="/passwordGen">Todo</Link>
            </div>
        </div>
        </>
    )
}

export default Home