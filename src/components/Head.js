import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
// import { Link } from 'react-router-dom';

const Head = () => {

    const dispatch = useDispatch();

    const handleToogle = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className="grid grid-flow-col p-2 m-2 shadow-lg">

            <div className='flex col-span-2'>

                <img onClick={() => handleToogle()} className="h-8" src={require("../assets/hanburgerImage1.png")} alt='hanburgerImage icon' />

                <img className="h-8 ml-6 " src={require("../assets/YouTube-Logo1.png")} alt="ytLogo" />

            </div>

            <div className="col-span-8 w-auto">

                <input type='text' className="w-69px ml-8 border border-gray-500 rounded-l-full" />

                <button className="border border-gray-500 rounded-r-full bg-slate-300">🔍</button>

            </div>

            <div className="col-span-2" >
                <img className="h-8 " src={require('../assets/userIcon.png')} alt='userIcon' />
            </div>

        </div>
    )

}

export default Head;