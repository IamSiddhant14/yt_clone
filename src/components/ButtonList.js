import React from 'react'
import Button from './Button';

const ButtonList = () => {
  return (
    <div className='flex '>
      <Button name="All" />
 
      <Button className=" px-2 m-5 bg-slate-600 rounded-lg " name="Music" />

      <Button className=" px-2 m-5 bg-slate-600 rounded-lg " name="Live" />

      <Button className=" px-2 m-5 bg-slate-600 rounded-lg " name="News" />

      <Button className=" px-2 m-5 bg-slate-600 rounded-lg " name="Mixes" />

      <Button className=" px-2 m-5 bg-slate-600 rounded-lg " name="Computer Programing" />

      <Button className=" px-2 m-5 bg-slate-600 rounded-lg " name="Combat sports" />

      <Button className=" px-2 m-5 bg-slate-600 rounded-lg " name="Comedy" />

      <Button className=" px-2 m-5 bg-slate-600 rounded-lg " name="Podcast" /> 
    </div>
  )
}

export default ButtonList
