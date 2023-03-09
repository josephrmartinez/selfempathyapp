import { useState } from 'react'

export default function DivList({ wordList, divClass }) {
  const [searchText, setSearchText] = useState('');

  return (
    <>
    <Header
        searchClass="searchBar"
        pageTitle={"feelings"}
        searchText={searchText}
        onSearchTextChange={setSearchText}
        icon="src/assets/icons/arrow-left-short.svg"
      />
      <ColumnOfDivs
        searchText={searchText}
        wordList={wordList}
        divClass={divClass} />
    </>
  )
}


function ColumnOfDivs({ wordList, searchText, divClass }) {
  const divs = [];

  wordList.forEach((word) => {
    if (!word.startsWith(searchText)){return}

    divs.push(
      <SingleDiv
        text={word}
        key={word}
        divClass={divClass}    
      />
    );
  });
  
  return (
    <div className='listContainer'>
      {divs}
    </div>
  )  
}



function SingleDiv({ text, divClass }) {
  return (
      <div className={`listDiv ${divClass}`} >
      {text}
    </div>
  )
};
