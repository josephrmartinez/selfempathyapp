import React, { useState } from 'react';

export default function DivGrid({ words, section, bgColor, updateFields, handleDivClick, isCursorPointer}) {
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  // const handleDivClick = (index) => {
  //   if (selectedIndexes.includes(index)) {
  //     setSelectedIndexes(selectedIndexes.filter((i) => i !== index));
  //   } else {
  //     setSelectedIndexes([...selectedIndexes, index]);
  //   }
  // };

  // console.log(words)

  // function handleDivClick(index, section) {
  //   console.log(index, section)
  // }

  // updateFields({ conversationWith: e.target.value, conversationID: nanoid() })

  return (
    <div className="grid grid-cols-2 gap-6">
      {words.map((word, index) => (
        <div
          key={index}
          className={`py-2 px-3 rounded-full ${isCursorPointer ? 'cursor-pointer' : 'cursor-default'} antialiased`}
          style={word.selected
            ? { color: '#FEFEFE', backgroundColor: bgColor, borderWidth: '1px', borderColor: bgColor }
            : { color: '#606060', borderWidth: '1px', borderColor: '#c5c5c5'}}
          onClick={() => handleDivClick(section, index)}
        >
          {word.word}
        </div>
      ))}
    </div>
  );
}
