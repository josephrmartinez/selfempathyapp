import React, { useState } from 'react';

export default function DivGrid({ words, bgColor}) {
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  const handleDivClick = (index) => {
    if (selectedIndexes.includes(index)) {
      setSelectedIndexes(selectedIndexes.filter((i) => i !== index));
    } else {
      setSelectedIndexes([...selectedIndexes, index]);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {words.map((word, index) => (
        <div
          key={index}
          className={`py-2 px-3 rounded-full cursor-pointer antialiased`}
          style={selectedIndexes.includes(index)
            ? { color: '#FEFEFE', backgroundColor: bgColor }
            : { color: '#606060', borderWidth: '1px', borderColor: '#c5c5c5'}}
          onClick={() => handleDivClick(index)}
        >
          {word}
        </div>
      ))}
    </div>
  );
}