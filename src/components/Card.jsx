import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-white mr-7 text-black inline-block p-6 text-center rounded'>
      <img className=' ml-4 h-32 w-32 rounded-full mb-3' src={props.photo} alt=''/>
      <h1>{props.username} Surname</h1>
      <h2>{props.city}, {props.age}</h2>
      <h3 className='text-blue-400'>{props.profession}</h3>
      <button className='mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Add Friend</button>
    </div>
  )
}

export default Card
