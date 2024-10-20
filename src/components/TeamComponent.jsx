import React from 'react'
import { teams } from '../constants/Teams'
import { Link } from 'react-router-dom'
import TeamCard from './TeamCard'

function TeamComponent() {

  const varient = {

  }

  return (
    <div className="flex flex-col items-center  ">
     

    <h2 className="text-5xl font-bold ">Our Team</h2>
    <p className='text-center text-xs w-[80%] py-10 my-3 border-y-2'>
      We are a team of passionate and dedicated software developers, focused on providing innovative solutions for businesses. Our team members have a strong background in computer science, have a keen eye for detail, and are always eager to learn and improve. We are here to help you achieve your goals and create lasting impact on your business.
    </p>
    

    <div className="flex w-full flex-wrap justify-between items-center px-10 my-5">
      <div className="flex flex-wrap gap-8 w-full justify-center items-center">
        {teams.slice(0, 4).map((team, index) => (
          <TeamCard
           key={index} team={team} index={index} />
        ))}
      </div>
    </div>
    <Link to={"/Team"} className="px-4 text-pink-600 bg-[#080a54] font-bold rounded-md py-2">
      {" "}
      see more
    </Link>
  </div>
  )
}

export default TeamComponent