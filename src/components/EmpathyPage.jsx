import React from 'react'
import { useState } from 'react'
import { Link, useParams, useLocation, useLoaderData, useSearchParams } from "react-router-dom"
import { ReactComponent as HomeIcon } from '../assets/icons/house.svg'
import complaints from '../assets/complaints'
import feelings from '../assets/feelings'
import EmpathyForm from './empathyForm/EmpathyForm'


export default function EmpathyPage(props) {
  const params = useParams()

  const location = useLocation()
  

  const sectionState = location.state
  // console.log(sectionState)

  const content =
      params.section == "feelings" ? feelings[params.word] :  complaints[params.word]

  
  let frontEndEmpathyData =
   params.section == "complaints" ? {
      complaint: content.complaint,
      initialFeelings: content.initialFeelings.map(each => {
        return {word: each, selected: false}
      }),
      underlyingFeelings: content.underlyingFeelings.map(each => {
        return {word: each, selected: false}
      }),
      needs: content.needs.map(each => {
        return {word: each, selected: false}
      }),
    }
      : 
   {
      feeling: content.initialFeeling,
      underlyingFeelings: content.underlyingFeelings.map(each => {
        return {word: each, selected: false}
      }),
      needs: content.needs.map(each => {
        return {word: each, selected: false}
      }),
    }
  
  

    return (
    <div>
      <div className='header'>
        <Link to={`..${sectionState}`} className='m-auto cursor-pointer'><HomeIcon /></Link>
      </div>
            <div className='empathyContainer'>
                <div>
                    <div className='text-sm'>{params.section == "feelings" ? "I'M FEELING" : "THEY'RE BEING"}</div>
                    <div className={`listDiv ${params.section}`} style={{ cursor: "default" }}>{params.word}</div>
                </div>
                <div className='h-full w-full'>
                    <EmpathyForm content={frontEndEmpathyData} />
                </div>
            </div>

    </div>
  )
}
