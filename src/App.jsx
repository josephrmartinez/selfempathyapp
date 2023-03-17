import { useState } from 'react'
import { Link, useParams, useLocation, useSearchParams } from "react-router-dom"
import './App.css'
import React from 'react'
import Select from 'react-select'
import { feelingsList } from './assets/feelingsList'
import { complaintsList } from './assets/complaintsList'
import DivColumn from './components/DivColumn'
import { ReactComponent as SearchIcon } from './assets/icons/search.svg';
import { ReactComponent as InfoIcon } from './assets/icons/info-circle.svg';

function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [section, setSection] = useState(searchParams.get("section") || "feelings")
  const [searchText, setSearchText] = useState('');
  const [infoBox, setInfoBox] = useState(false)
  const [addWord, setAddWord] = useState(false)
  const [userInput, setUserInput] = useState("")


  const sections = [
    { value: "feelings", label: "I'm feeling:" },
    { value: "complaints", label: "They're being:" }
  ]


  const location = useLocation()
  // console.log(location)

  function handleSelectInputChange(value) {
    setSection(value.value)
    setSearchParams({ section: value.value })

  }

  function handleAddWordClick() {
    setAddWord(!addWord)
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      handleAddWordClick()
    }
  }

  function handleChangeUserInput(e) {
    setUserInput(e.target.value)
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
            className="border rounded-full w-24 indent-2"></input>
          <SearchIcon className="SearchIcon"/>
        </div>
      </div>
      <div className='container'>
        <DivColumn
          wordList={section === "feelings" ? feelingsList : complaintsList}
          searchText={searchText}
          divClass={section}
          searchParams={searchParams}
          handleAddWordClick={handleAddWordClick}
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
            <input className='border-b-4 w-28 outline-none text-center' style={{ borderColor: section === "feelings" ? "#699F96" : "#043D66" }} onKeyDown={handleKeyDown} type="text" autoFocus value={userInput} onChange={handleChangeUserInput}></input>
            <div className='mt-6 px-5 py-2 bg-gray-50 border rounded cursor-pointer'  onClick={()=> setAddWord(!addWord)}><div className="text-slate-800 text-sm" >add</div></div>

          </div>
        </div>
        }
    </div>
  )
}

export default App
