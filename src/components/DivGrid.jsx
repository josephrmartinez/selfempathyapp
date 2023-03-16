import React, { useState } from 'react';

export default function DivGrid({ words, section, bgColor, updateFields, handleDivClick}) {
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [userInputActive, setUserInputActive] = useState(false)
  const [userInputValue, setUserInputValue] = useState("")

  function handleAddClick() {
    setUserInputActive(true)
  }

  function handleInputChange(e) {
    setUserInputValue(e.target.value)
  }

  function handleInputSubmit(e) {
    words.push({ word: e.target.value })
    setUserInputValue("")
    setUserInputActive(false)
  }

  return (
    <div className="grid grid-cols-2 gap-6">
      {words.map((word, index) => (
        <div
          key={index}
          className={`py-2 px-3 rounded-full cursor-pointer antialiased`}
          style={word.selected
            ? { color: '#FEFEFE', backgroundColor: bgColor, borderWidth: '1px', borderColor: bgColor }
            : { color: '#606060', borderWidth: '1px', borderColor: '#c5c5c5'}}
          onClick={() => handleDivClick(section, index)}
        >
          {word.word}
        </div>
      ))}
      {userInputActive ?
        <div className='py-2 px-3 rounded-full' style={{ borderWidth: '1px', borderColor: '#c5c5c5' }}>
          <input
            type="text"
            value={userInputValue}
            className='outline-none w-16 text-center rounded-full antialiased'
            style={{ color: '#606060', backgroundColor: 'transparent' }}
            autoFocus
            onChange={handleInputChange}
            onBlur={handleInputSubmit}
          ></input></div>
        : <div onClick={handleAddClick} className="cursor-pointer" style={{ color: '#d4d4d4'}}>+</div>}
    </div>
  );
}
