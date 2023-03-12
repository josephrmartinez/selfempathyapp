import { useState } from "react"
import useMultistepForm from "../../utilities/useMultistepForm"
import EFInitialFeelings from "./EFInitialFeelings"
import EFUnderlyingFeelings from "./EFUnderlyingFeelings"
import EFNeeds from "./EFNeeds"
import EFSummary from "./EFSummary"

import { useNavigate } from "react-router-dom"


export default function EmpathyForm(props) {
    const [data, setData] = useState(props.content)
    
    function updateFields(fields) {
        setData(prevData => {
            return {...prevData, ...fields}
        })
    }


    const { steps, currentStepIndex, step, isLastStep, back, next } =
        useMultistepForm([
            <EFInitialFeelings {...data} updateFields={updateFields} />,
            <EFUnderlyingFeelings {...data} updateFields={updateFields} />,
            <EFNeeds {...data} updateFields={updateFields} />,
            <EFSummary {...data} updateFields={updateFields} />
        ])
    
    const navigate = useNavigate()

    function onSubmit(e) {
        e.preventDefault();
        
        if (!isLastStep) return next()

        // // Parse any JSON previously stored
        // var existingData = JSON.parse(localStorage.getItem("reactionsJournalLogData"));
        // if(existingData == null) existingData = starterData;
        
        // localStorage.setItem("entry", JSON.stringify(data));
        // // Save data back to local storage
        // existingData.unshift(data);
        // localStorage.setItem("reactionsJournalLogData", JSON.stringify(existingData));
    

        // navigate('/reactionsjournal/logs')
    };
    


    return (
            <form className="h-full grid grid-rows-[60px,1fr,80px]" onSubmit={onSubmit}>
                {step}
            {currentStepIndex !== 3 && <div className="flex flex-row justify-between items-center text-sm mx-4">
                {currentStepIndex === 0 && <div className=""></div>}
                {currentStepIndex !== 0 &&
                    <button type="button" className="flex flex-row items-center" style={{ color: "#888888" }} onClick={back}><img className="mx-2 opacity-40" width={12} src="../../src/assets/icons/angle-left-solid.svg" />
                        {currentStepIndex === 1 && "initial feelings"}
                        {currentStepIndex === 2 && "underlying feelings"}
                    </button>}
                
                <button className="flex flex-row items-center" type="submit" style={{ color: "#888888" }}>
                    {currentStepIndex === 0 && "underlying feelings"}
                    {currentStepIndex === 1 && "needs"}
                    {currentStepIndex === 2 && "I'm complete"}
                    <img className="mx-2 opacity-40" width={12} src="../../src/assets/icons/angle-right-solid.svg" />
                </button>
            </div>}
            </form>
        
    )
}










// const DEV_DATA = {
//     complaint: "aggressive",
//     initialFeelings: [
//         { word: "attacked", votes: 0 },
//         { word: "belittled", votes: 0 },
//         { word: "intimidated", votes: 0 },
//         { word: "victimized", votes: 0 },
//         { word: "violated", votes: 0 },
//         { word: "threatened", votes: 0 }
//     ],
//     underlyingFeelings: [
//         { word: "angry", votes: 0 },
//         { word: "sad", votes: 0 },
//         { word: "resentment", votes: 0 },
//         { word: "frustrated", votes: 0 },
//         { word: "concerned", votes: 0 },
//         { word: "afraid", votes: 0 }
//     ],
//     needs: [
//         { word: "safety", votes: 0 },
//         { word: "autonomy", votes: 0 },
//         { word: "choice", votes: 0 },
//         { word: "consideration", votes: 0 },
//         { word: "respect", votes: 0 },
//         { word: "ease", votes: 0 }
//     ]
//   }
