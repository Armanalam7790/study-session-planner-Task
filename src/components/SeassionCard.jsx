import React, { useContext } from 'react'
// import { useCallback } from 'react'
import { Mystore } from '../context/SeasionContext'

const SeassionCard = () => {
const {FormData, deleteFunc}  =   useContext(Mystore)
console.log(FormData);

  return (
    <div className='text-white flex flex-wrap gap-4 p-4'>
      {FormData.map((elem)=>{
        return <div key={elem.key} className='bg-gray-800 p-4 rounded-lg shadow-md w-[250px] border border-gray-700'>
          
          <h1 className='text-sm text-gray-400'>📅 {elem.date}</h1>
          
          <h1 className='text-lg font-semibold mt-1'>
            {elem.name}
          </h1>

          <h1 className='text-sm mt-1'>
             Priority: 
            <span className='ml-1 text-yellow-400'>{elem.Priority}</span>
          </h1>

          <h1 className='text-sm mt-1'>
            Time: {elem.time} hrs
          </h1>

          <h1 className='text-sm mt-1 text-gray-300'>
            📘 {elem.subject}
          </h1>

          <button
          onClick={()=> deleteFunc(elem.id)}
          className='border rounded border-pink-700 text-pink-700 px-5 py-1 mt-2 cursor-pointer'> delete</button>

        </div>
      })}
    </div>
  )
}

export default SeassionCard

