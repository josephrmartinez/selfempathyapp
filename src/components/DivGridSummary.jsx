export default function DivGridSummary({ words, bgColor}) {

  return (
    <div className="flex row-auto flex-wrap justify-center">
          {words.map((word, index) => (
              <div
                  key={index}
                  className={`py-2 px-3 mx-2 my-2 rounded-full select-none antialiased`}
                  style={{ color: '#FEFEFE', backgroundColor: `${bgColor}`, borderWidth: '1px', borderColor: bgColor }}>
                {word.word}
              </div>
      ))}
       </div>
  );
}
