
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Div from "./Div";

export default function DivColumn({ wordList, searchText, divClass, handleAddWordClick, searchParams }) {
  const [newInput, setNewInput] = useState("")
  const [newInputActive, setNewInputActive] = useState(false)
  
  const divs = [];

  wordList.forEach((word) => {
    if (!word.startsWith(searchText)){return}

      divs.push(
          <Div
              word={word}
              divClass={divClass}
              key={word}
              searchParams={searchParams}
          />
    );
  });
  
  return (
    <div className='flex flex-col items-center'>
      {divs}
      <div className={`listDiv ${divClass}`} onClick={handleAddWordClick} >+</div>
    </div>
  )  
}