import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";

const View = () => {
    const {id} = useParams();
    const allPastes = useSelector((state) => state.paste.pastes);
    const paste = allPastes.filter((p) => p._id === id)[0];
  return (
    <div className='mt-30 m-10 min-h-screen'>
        <NavLink className='rounded-xl flex gap-2 justify-center items-center text-xl font-bold border w-25 p-2 bg-purple-400'
        to={"/pastes"}
        >
        <IoMdArrowRoundBack />
        Back
        </NavLink>
      <h1 className='m-5 text-3xl font-semibold '>{paste.title}</h1>
      <p className='m-5 text-lg'>{paste.content}</p>
    </div>
  )
}

export default View
