import React from 'react'
import { useState } from 'react'
import { Link, useParams, useLocation, useLoaderData } from "react-router-dom"


import Select from 'react-select'
import { feelingsList } from '../assets/feelingsList'
import { complaintsList } from '../assets/complaintsList'
import DivColumn from '../components/DivColumn'


export function loader() {
    return "the data goes here"
}

export default function EmpathyPage(props) {
// props.word
// props.divClass
    
    // let location = useLocation()
    // console.log(location)

    // const data = useLoaderData()
    // console.log(data)

    const params = useParams()
    console.log(params)

    return (
    <div>
      <div className='header'>
        <Link to={`..`} className='m-auto cursor-pointer'><img role="img" src='../src/assets/icons/arrow-left-short.svg'/></Link>
        <div className='m-auto w-[180px]'>{params.word}</div>
        <div>        </div>
      </div>
      <div className='container'>
        <div>{params.section}</div>
      </div>
      
    </div>
  )
}