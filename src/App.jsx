import React from 'react'
import Card from './components/Card'

const App = () => {

  const users=[
  {
    "name": "Aarav Sharma",
    "city": "Mumbai",
    "age": 28,
    "profession": "Software Engineer",
    "profile_photo": "https://randomuser.me/api/portraits/men/21.jpg"
  },
  {
    "name": "Meera Kapoor",
    "city": "Delhi",
    "age": 32,
    "profession": "Graphic Designer",
    "profile_photo": "https://randomuser.me/api/portraits/women/34.jpg"
  },
  {
    "name": "Rohan Mehta",
    "city": "Bangalore",
    "age": 25,
    "profession": "Data Analyst",
    "profile_photo": "https://randomuser.me/api/portraits/men/56.jpg"
  },
  {
    "name": "Priya Verma",
    "city": "Chennai",
    "age": 30,
    "profession": "Marketing Manager",
    "profile_photo": "https://randomuser.me/api/portraits/women/67.jpg"
  },
  {
    "name": "Karan Singh",
    "city": "Hyderabad",
    "age": 27,
    "profession": "UI/UX Designer",
    "profile_photo": "https://randomuser.me/api/portraits/men/12.jpg"
  }
]

  return (
    <div>
      <div className='p-10'>
         {users.map(function(elem, idx){
            return <Card key={idx} username={elem.name} age={elem.age} city={elem.city} photo={elem.profile_photo} profession={elem.profession} />
         })}
      </div>
      
    </div>
  )
}

export default App
