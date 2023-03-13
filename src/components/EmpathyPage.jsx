import React from 'react'
import { useState } from 'react'
import { Link, useParams, useLocation, useLoaderData } from "react-router-dom"

import Select from 'react-select'
import { feelingsList } from '../assets/feelingsList'
import { complaintsList } from '../assets/complaintsList'
import DivColumn from '../components/DivColumn'
import DivGrid from './DivGrid'
import { ReactComponent as HomeIcon } from '../assets/icons/house.svg'

import complaints from '../assets/complaints'
import feelings from '../assets/feelings'
import EmpathyForm from './empathyForm/EmpathyForm'


export default function EmpathyPage(props) {
    const params = useParams()

    const content =
        params.section == "feelings" ? feelings[params.word] :  complaints[params.word]

    const initialFeelings = content.initialFeelings
    const underlyingFeelings = content.underlyingFeelings
    const needs = content.needs

    console.log(content)


    return (
    <div>
      <div className='header'>
        <Link to={`..`} className='m-auto cursor-pointer'><HomeIcon /></Link>
      </div>
            <div className='container empathy'>
                <div>
                    <div className='text-sm'>{params.section == "feelings" ? "I'M FEELING" : "THEY'RE BEING"}</div>
                    <div className={`listDiv ${params.section}`} style={{ cursor: "default" }}>{params.word}</div>
                </div>
                <div className='h-full w-full'>
                    <EmpathyForm content={content} />
                </div>
            </div>

    </div>
  )
}

// {initialFeelings && <>
//                     <div className='text-sm'>INITIAL FEELINGS</div>
//                     <DivGrid
//                         words={initialFeelings}
//                         bgColor={'#699F96'}
//                         ringColor={'blue-500'}
//                         applyTransparency={applyTransparency}
//                     />
//                 </>}
//                 <div className='text'>UNDERLYING FEELINGS</div>
//                 <DivGrid
//                         words={underlyingFeelings}
//                         bgColor={'#935A5A'}
//                         ringColor={'blue-500'}
//                         applyTransparency={applyTransparency}
//                     />
//                 <div className='text-sm'>NEEDS</div>
//                 <DivGrid
//                         words={needs}
//                         bgColor={'#93b1c9'}
//                         ringColor={'blue-500'}
//                         applyTransparency={applyTransparency}
//                     />
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => handleTransparencyClick(setApplyTransparency)}>
//                     I'm complete
//                 </button>