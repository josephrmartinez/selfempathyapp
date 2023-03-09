import { useState } from 'react'
import { Link, useParams, useLocation } from "react-router-dom"
import './App.css'
import React from 'react'
import Select from 'react-select'
import { feelingsList } from './assets/feelingsList'
import { complaintsList } from './assets/complaintsList'
import DivColumn from './components/DivColumn'

export default function EmpathyPage(props) {
// props.word
// props.divClass

    return (
    <div>
      <div className='header'>
        <div className='m-auto cursor-pointer' onClick={()=> console.log("go back")}><img role="img" src='src/assets/icons/arrow-left-short.svg'/></div>
        <div className='m-auto w-[180px]'>word</div>
        <div>        </div>
      </div>
      <div className='container'>
        <div>sliders</div>
      </div>
      
    </div>
  )
}