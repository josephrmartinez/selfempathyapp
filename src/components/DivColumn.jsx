
import { useNavigate } from "react-router-dom";
import Div from "./Div";

export default function DivColumn({ wordList, searchText, divClass }) {
  const divs = [];

  wordList.forEach((word) => {
    if (!word.startsWith(searchText)){return}

      divs.push(
          <Div
              word={word}
              divClass={divClass}
              key={word}
          />
    );
  });
  
  return (
    <div className='listContainer'>
      {divs}
    </div>
  )  
}