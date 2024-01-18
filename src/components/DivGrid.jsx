import React, { useState, useEffect } from 'react';
import { needsList } from '../assets/needsList';
import { initialFeelingsList } from '../assets/initialFeelingsList';
import { underlyingFeelingsList } from '../assets/underlyingFeelingsList';

export default function DivGrid({ words, section, bgColor, updateFields, handleDivClick}) {
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [userInputActive, setUserInputActive] = useState(false)
  const [userInputValue, setUserInputValue] = useState("")
  const [refreshActive, setRefreshActive] = useState(false)
  const [wordArray, setWordArray] = useState([])


  useEffect(() =>{
  // Select word list based on current section:
  if (section === "underlyingFeelings"){
    setWordArray(underlyingFeelingsList)
  } else if (section === "initialFeelings") {
    setWordArray(initialFeelingsList) 
  } else if (section === "needs") {
    setWordArray(needsList)
  }
  }, [section])
  

  function handleAddClick() {
    setUserInputActive(!userInputActive)
  }

  function handleInputChange(e) {
    setUserInputValue(e.target.value.toLowerCase())
  }

  function handleInputSubmit(e) {
    if (e.target.value === "") {
      setUserInputActive(!userInputActive)
    } else {
      words.push({ word: e.target.value, selected: true })
      setUserInputValue("")
      setUserInputActive(!userInputActive)
  
    }
    
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      handleInputSubmit(e)
    }
  }

  function handleRefreshClick(){

    function returnUnselectedWords(words) {
      let unselectedWords = []

      for (const item of words) {
        if (item.selected === false) {
          unselectedWords.push(item.word)
        }
      }

      return unselectedWords
    }

    function getRandomItems(array, count) {
      const newArray = array.slice();
    
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
    
      return newArray.slice(0, count);
    }

    function getNewTerms(wordArray, displayedWords, unselectedWords) {
      // Create a Set of words to remove
      const wordsToRemove = new Set(displayedWords.map(option => option.word));
    
      // Filter the wordList to remove words in the Set
      const newArray = wordArray.filter(word => !wordsToRemove.has(word));
    
      // Return selectedFalse.length number of values from newArray. Select these at random.
      const newTerms = getRandomItems(newArray, unselectedWords.length);
    
      return newTerms;
    }

    function replaceWords(words, newOptions) {
      let choiceIndex = 0;
    
      for (let i = 0; i < words.length; i++) {
        if (!words[i].selected) {
          words[i].word = newOptions[choiceIndex];
          choiceIndex++;
    
          // Reset index when all choices are used
          if (choiceIndex === newOptions.length) {
            choiceIndex = 0;
          }
        }
      }
    
      return words;
    }

    



    setRefreshActive(true)

    // Return array of currently unselected words
    const unselectedWords = returnUnselectedWords(words)

    // Extract an array of new terms
    let newTerms = getNewTerms(wordArray, words, unselectedWords)

    // Update words array with new terms
    replaceWords(words, newTerms)
    
    setTimeout(() => {
      setRefreshActive(false)
    }, 1000);
  }




  return (
    <div className="grid grid-cols-2 gap-6">
      {words.map((word, index) => (
        <div
          key={index}
          className={`py-2 px-3 w-32 rounded-full cursor-pointer select-none transition-colors duration-300 antialiased`}
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
            onKeyDown={handleKeyDown}
          ></input></div>
        : <div onClick={handleAddClick} className="cursor-pointer text-3xl select-none" style={{ color: '#545454'}}>+</div>}
        <div onClick={handleRefreshClick} className='flex flex-row items-center justify-center h-10 cursor-pointer'>
          <img src='/arrows-clockwise.png' className={`w-7 ${refreshActive && `animate-spin`}`}></img>
        </div>
    </div>
    
  );
}
