import { useState, useEffect } from 'react'
import { Link, useParams, useLocation, useSearchParams } from "react-router-dom"
import './App.css'
import React from 'react'
import Select from 'react-select'
import feelings from './assets/feelings.json'
import complaints from './assets/complaints.json'
import DivColumn from './components/DivColumn'
import { ReactComponent as SearchIcon } from './assets/icons/search.svg';
import { ReactComponent as InfoIcon } from './assets/icons/info-circle.svg';
import generateComplaintObject from './utilities/generateComplaintObject'
import generateFeelingObject from './utilities/generateFeelingObject'
import { data } from 'autoprefixer'

function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [section, setSection] = useState(searchParams.get("section") || "feelings")
  const [searchText, setSearchText] = useState('');
  const [infoBox, setInfoBox] = useState(false)
  const [addWord, setAddWord] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const [userInput, setUserInput] = useState("")
  const[feelingsData, setFeelingsData] = useState(
    JSON.parse(localStorage.getItem("feelingsData")) || feelings)
  const[complaintsData, setComplaintsData] = useState(
    JSON.parse(localStorage.getItem("complaintsData")) || complaints)
  const feelingsList = Object.keys(feelingsData).sort((a, b) => a.localeCompare(b));
  const complaintsList = Object.keys(complaintsData).sort((a, b) => a.localeCompare(b));
  

  useEffect(() => {
    localStorage.setItem("feelingsData", JSON.stringify(feelingsData))
    }, [feelingsData])
  
  useEffect(() => {
    localStorage.setItem("complaintsData", JSON.stringify(complaintsData))
  }, [complaintsData])


  const sections = [
    { value: "feelings", label: "I'm feeling:" },
    { value: "complaints", label: "They're being:" }
  ]

  function handleSelectInputChange(value) {
    setSection(value.value)
    setSearchParams({ section: value.value })

  }

  function toggleAddWordBox() {
    setAddWord(!addWord)
  }


  function closeAddWordBox() {
    setUserInput("")
    setAddWord(false)
  }


  function handleAddWord() {
    if (userInput.trim().length < 4 || !/^[a-zA-Z]+$/.test(userInput.trim())) {
      return
    }
    // setIsFetching(true)
    const dataObj = section === "complaints" ? generateComplaintObject(userInput) : generateFeelingObject(userInput)
    console.log(dataObj)

    if (section === "complaints") {
      setComplaintsData(prevData => ({
        ...prevData, ...dataObj
      }))
      console.log(complaintsData)
    } else {
      setFeelingsData(prevData => ({
        ...prevData, ...dataObj
      }))
    }
    
    setUserInput("")
    // setIsFetching(false)
    setAddWord(false)
    }
  

  function handleKeyDown(e) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      handleAddWord()
    }
  }

  function handleChangeUserInput(e) {
    setUserInput(e.target.value.toLowerCase())
  }
  return (
    <div>
      <div className='header'>
        <div className='m-auto cursor-pointer' onClick={()=> setInfoBox(!infoBox)}><InfoIcon/></div>
        <div className='m-auto w-[180px]'><Select options={sections} defaultValue={sections.filter(each => each.value === section)} onChange={handleSelectInputChange} isSearchable={false} /></div>
        <div className='searchContainer'>
          <input
          type="text"
          placeholder=''
          value={searchText}
          onChange={(e) => setSearchText(e.target.value.toLowerCase())}
            className="border rounded-full w-24 indent-2"
          style={{borderColor: 'rgb(212 212 212)'}}></input>
          <SearchIcon className="SearchIcon"/>
        </div>
      </div>
      <div className='relative top-20 flex flex-col justify-center items-center'>
        <DivColumn
          wordList={section === "feelings" ? feelingsList : complaintsList}
          searchText={searchText}
          divClass={section}
          toggleAddWordBox={toggleAddWordBox}
           />
      </div>
      {infoBox &&
        <div className='bg'>
          <div className='popup'>
            <div className='m-4'>
              <div className='text-sm text-slate-800'>An online guide to support the self-empathy process. Start with a complaint or feeling to connect with your underlying feelings and needs.</div>
            </div>
            <div className='text-sm m-4 text-slate-800'>site built by <a className="underline" target="_blank" href='https://www.josephm.dev'>josephm.dev</a></div>
            <div className='mt-6 px-5 py-2 bg-gray-50 border rounded cursor-pointer' onClick={()=> setInfoBox(!infoBox)}><div className="text-slate-800 text-sm" >close</div></div>

          </div>
        </div>
      }
      {addWord &&
        <div className='bg'>
          <div className='popup'>
            <div className='m-4'>
              <div className='text-sm text-slate-800'>use another word: </div>
            </div>
            {!isFetching && 
              <>
            <input className='mb-8 border-b-4 w-28 outline-none text-center' style={{ borderColor: section === "feelings" ? "#699F96" : "#043D66" }} onKeyDown={handleKeyDown} type="text" autoFocus value={userInput} onChange={handleChangeUserInput}></input>
              <div className='w-20 mt-6  h-10 py-2 bg-gray-50 border rounded cursor-pointer' onClick={handleAddWord}><div className="text-slate-800 text-sm" >add</div></div>
              <div className='absolute bottom-8 text-sm' style={{color: 'gray'}} onClick={closeAddWordBox}>close</div>
            </>}
            {isFetching &&
            <>  
            <input readOnly className='mb-8 border-b-4 w-28 outline-none text-center' style={{ borderColor: section === "feelings" ? "#699F96" : "#043D66" }} type="text" autoFocus value={userInput}></input>
            <div className='w-20 mt-7 mx-auto py-3 bg-gray-50  flex justify-center'><div className='loader' ></div></div>
          </>
          }
          </div>
        </div>
        }
    </div>
  )
}

export default App


