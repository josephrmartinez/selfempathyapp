export default function DivGridSummary({ words, bgColor}) {

  return (
    <div className="grid grid-cols-2 gap-6">
          {words.map((word, index) => (
              <div
                  key={index}
                  className={`py-2 px-3 rounded-full cursor-default antialiased`}
                  style={{ color: '#FEFEFE', backgroundColor: bgColor, borderWidth: '1px', borderColor: bgColor }}>
          {word.word}
        </div>
      ))}
       </div>
  );
}
