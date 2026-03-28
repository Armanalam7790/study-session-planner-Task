// import React, { useContext } from 'react'
// import { useForm } from 'react-hook-form'
// import { Mystore } from '../context/SeasionContext'
// import { nanoid } from 'nanoid'

// const SeassionForm = () => {
//  const {FormData, setFormData} =   useContext(Mystore)
//  const {register, reset, handleSubmit, formState:{errors}}=  useForm()
//  const submitHandler =(data)=>{
      
//   // setFormData((prev)=> [...prev, data , id:nanoid() ])
//   setFormData((prev) => [...prev, { ...data, id: nanoid() }])
      
//  }
//  console.log(FormData);
 
//   return (
//     <div>
//       <form  
//       onSubmit={handleSubmit(submitHandler)}
      
//       className='border-4 flex flex-col gap-3.5 border-amber-600 p-8'>

//     <div>
//         <input 
//         {...register('name',{required:"Topic Name Required"})}
//         placeholder='Topic Name' className='boeder p-4 text-black bg-yellow-200 ' type="text" />
//  <p className='text-red-600'>{errors.name && <span>{errors.name.message}</span>  }</p>
//     </div>
       

//         <div className='w-[300px]'>
//             <p className='p-2 text-white'>Subject</p>
//                <select 
//         {...register('subject')}
               
//                className='w-full p-4 bg-yellow-200' >
//           <option value="Dsa">Dsa</option>
//           <option value="Web Dev">Web Dev</option>
//           <option value="DBMS">DBMS</option>
//           <option value="OS">OS</option>
//           <option value="Other">Other</option>

//         </select>



           
//         </div>


//           <div className='w-[300px]'>
//             <p className='p-2 text-white'>Priority</p>
//                <select
//         {...register('Priority')}
               
//                className='w-full p-4 bg-yellow-200' >
//           <option value="Low">Low</option>
//           <option value="High">High</option>
//           <option value="Medium">Medium</option>
          

//         </select>


        
           
//         </div>


//        <div>
        
//          <p className='p-2 text-white'>Duration Number</p>
//         <input
//               {...register("time", {
//     required: "Time is required",
//     pattern: {
//       value: /^[0-9]{2}$/,
//       message: "Enter exactly 2 digits"
//     }
//   })}

//         placeholder='00' className='boeder p-4 text-black bg-yellow-200 ' id='du' type="number" />
//  <p className='text-red-600'>{errors.time && <span>{errors.time.message}</span>  }</p>

//        </div>

//         <div>
        
//          <p className='p-2 text-white'>Date</p>
//         <input
//         {...register('date',{required:"date is Required"})}
//         placeholder='00' className='boeder p-4 text-black bg-yellow-200 ' id='du' type="date" />
//  <p className='text-red-600'>{errors.date && <span>{errors.date.message}</span>  }</p>

//        </div>

//       <div className='flex gap-4'>

//          <button type='submit' className='boeder p-3 text-black bg-yellow-200 '>Submit</button>
//           <button type='reset'  className='boeder p-3 text-black bg-yellow-200 '>reset</button>
//       </div>
//       </form>
//       </div>
//   )
// }

// export default SeassionForm

import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Mystore } from '../context/SeasionContext'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'

const SeassionForm = () => {
 const {FormData, setFormData} =   useContext(Mystore)
 const {register, reset, handleSubmit, formState:{errors}}=  useForm()
 const submitHandler =(data)=>{
      

  setFormData((prev) => [...prev, { ...data, id: nanoid() }])
  toast.success('Task Add')
  reset()
      
 }
 console.log(FormData);
 
  return (
    <div className='m-5'>
      <form  
      onSubmit={handleSubmit(submitHandler)}
      className='border border-gray-700 flex flex-col gap-4 bg-gray-900 rounded-xl p-8 w-[500px] mx-auto mt-10'>

    <div>
        <input 
        {...register('name',{required:"Topic Name Required"})}
        placeholder='Topic Name' className='w-full p-3 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400' type="text" />
        <p className='text-red-500 text-sm mt-1'>{errors.name && <span>{errors.name.message}</span>}</p>
    </div>
       

        <div>
            <p className='p-2 text-white text-sm'>Subject</p>
            <select 
            {...register('subject')}
            className='w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400'>
              <option value="Dsa">Dsa</option>
              <option value="Web Dev">Web Dev</option>
              <option value="DBMS">DBMS</option>
              <option value="OS">OS</option>
              <option value="Other">Other</option>
            </select>
        </div>


        <div>
            <p className='p-2 text-white text-sm'>Priority</p>
            <select
            {...register('Priority')}
            className='w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400'>
              <option value="Low">Low</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
            </select>
        </div>


       <div>
        <p className='p-2 text-white text-sm'>Duration Number</p>
        <input
        {...register("time", {
          required: "Time is required",
          pattern: {
            value: /^[0-9]{2}$/,
            message: "Enter exactly 2 digits"
          }
        })}
        placeholder='00' className='w-full p-3 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400' id='du' type="number" />
        <p className='text-red-500 text-sm mt-1'>{errors.time && <span>{errors.time.message}</span>}</p>
       </div>

        <div>
          <p className='p-2 text-white text-sm'>Date</p>
          <input
          {...register('date',{required:"date is Required"})}
          placeholder='00' className='w-full p-3 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400' id='du' type="date" />
          <p className='text-red-500 text-sm mt-1'>{errors.date && <span>{errors.date.message}</span>}</p>
        </div>

      <div className='flex gap-4'>
        <button type='submit' className='p-3 px-6 text-gray-900 font-semibold bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors'>Submit</button>
        <button type='reset' className='p-3 px-6 text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors'>reset</button>
      </div>

      </form>
    </div>
  )
}

export default SeassionForm