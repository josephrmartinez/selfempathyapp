import React from 'react'
import { useState } from 'react'
import { Link, useParams, useLocation, useLoaderData } from "react-router-dom"


import Select from 'react-select'
import { feelingsList } from '../assets/feelingsList'
import { complaintsList } from '../assets/complaintsList'
import DivColumn from '../components/DivColumn'

import complaints from '../assets/complaints'
import feelings from '../assets/feelings'



export function loader() {
    return "the data goes here"
}

export default function EmpathyPage(props) {
    // let location = useLocation()
    // console.log(location)

    // const data = useLoaderData()
    // console.log(data)

    const params = useParams()
    console.log(params)

    const content =
        params.section == "feelings" ? feelings[params.word] :  complaints[params.word]

    const initialFeelings = content.initialFeelings
    const underlyingFeelings = content.underlyingFeelings
    const needs = content.needs

    return (
    <div>
      <div className='header'>
        <Link to={`..`} className='m-auto cursor-pointer'><img role="img" src='../src/assets/icons/arrow-left-short.svg'/></Link>
        <div className='m-auto w-[180px]'>{params.word}</div>
        <div>        </div>
      </div>
      <div className='container'>
                {initialFeelings && <>
                    <div>initial feelings</div>
                    <div>{initialFeelings}</div>
                </>}
                <div>underlying feelings</div>
                <div>{underlyingFeelings}</div>
                <div>needs</div>
                <div>{needs}</div>
      </div>
      
    </div>
  )
}