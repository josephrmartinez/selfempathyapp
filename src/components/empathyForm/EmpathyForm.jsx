import { useState } from "react"
import useMultistepForm from "../../utilities/useMultistepForm"
import EFInitialFeelings from "./EFInitialFeelings"
import EFUnderlyingFeelings from "./EFUnderlyingFeelings"
import EFNeeds from "./EFNeeds"
import EFSummary from "./EFSummary"
import { ReactComponent as RightIcon } from '../../assets/icons/angle-right-solid.svg'
import { ReactComponent as LeftIcon } from '../../assets/icons/angle-left-solid.svg'


export default function EmpathyForm(props) {
    const [data, setData] = useState(props.content)

    // const { currentStepIndex, step, isLastStep, back, next } =
    // useMultistepForm([
    //     data['initialFeelings'].length > 1
    //     ? null
    //     : <EFInitialFeelings {...data} updateFields={updateFields} handleDivClick={handleDivClick} />,
    //     <EFUnderlyingFeelings {...data} updateFields={updateFields} handleDivClick={handleDivClick} />,
    //     <EFNeeds {...data} updateFields={updateFields} handleDivClick={handleDivClick} />,
    //     <EFSummary {...data} />
    // ]);

    const steps = [];
        if (data['initialFeelings']) {
        steps.push(<EFInitialFeelings {...data} updateFields={updateFields} handleDivClick={handleDivClick} />);
        }
        steps.push(
        <EFUnderlyingFeelings {...data} updateFields={updateFields} handleDivClick={handleDivClick} />,
        <EFNeeds {...data} updateFields={updateFields} handleDivClick={handleDivClick} />,
        <EFSummary {...data} />
        );

    const { currentStepIndex, step, isLastStep, back, next } =
        useMultistepForm(steps);

        // // Ensure that currentStepIndex is correctly set if the first step is not rendered
        // if (data['initialFeelings'].length < 1 && currentStepIndex === 0) {
        // next();
        // }

    const formPage = step.type.name

    // if (data['initialFeelings'].length > 1) {
    //     console.log("choop")
    //     const { currentStepIndex, step, isLastStep, back, next } =
    //         useMultistepForm([
    //             <EFInitialFeelings {...data} updateFields={updateFields} handleDivClick={handleDivClick} />,
    //             <EFUnderlyingFeelings {...data} updateFields={updateFields} handleDivClick={handleDivClick} />,
    //             <EFNeeds {...data} updateFields={updateFields} handleDivClick={handleDivClick} />,
    //             <EFSummary {...data} />
    //         ])
    //     const formPage = step.type.name
    // } else {
    //     const { currentStepIndex, step, isLastStep, back, next } =
    //         useMultistepForm([
    //             <EFUnderlyingFeelings {...data} updateFields={updateFields} handleDivClick={handleDivClick} />,
    //             <EFNeeds {...data} updateFields={updateFields} handleDivClick={handleDivClick} />,
    //             <EFSummary {...data} />
    //         ])
    //     const formPage = step.type.name
    // }
    
        

    // console.log(data['initialFeelings'].length > 1)

    function updateFields(fields) {
        setData(prevData => {
            return {...prevData, ...fields}
        })
    }

    function handleDivClick(section, index) {        
        setData(prevData => {
            const updatedSection = prevData[section].map((item, i) => {
                if (i === index) {
                    return { ...item, selected: !item.selected };
                }
                return item;
            });
            return { ...prevData, [section]: updatedSection };
        });
    }

    // const { currentStepIndex, step, isLastStep, back, next } =
    //         useMultistepForm([
    //             <EFInitialFeelings {...data} updateFields={updateFields} handleDivClick={handleDivClick} />,
    //             <EFUnderlyingFeelings {...data} updateFields={updateFields} handleDivClick={handleDivClick} />,
    //             <EFNeeds {...data} updateFields={updateFields} handleDivClick={handleDivClick} />,
    //             <EFSummary {...data} />
    //         ])
    // const formPage = step.type.name

    
    

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
            {formPage !== "EFSummary" && <div className="flex flex-row justify-between items-center text-sm mx-4">
                {currentStepIndex === 0 && <div className=""></div>}
                {currentStepIndex !== 0 &&
                    <button type="button" className="flex flex-row items-center" style={{ color: "#888888" }} onClick={back}><LeftIcon className="mx-2 opacity-40" width={12} />
                        {formPage === "EFUnderlyingFeelings" && "initial feelings"}
                        {formPage === "EFNeeds" && "underlying feelings"}
                    </button>}
                
                <button className="flex flex-row items-center" type="submit" style={{ color: "#888888" }}>
                    {formPage === "EFInitialFeelings" && "underlying feelings"}
                    {formPage === "EFUnderlyingFeelings" && "needs"}
                    {formPage === "EFNeeds" && "I'm complete"}
                    <RightIcon className="mx-2 opacity-40" width={12} />
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
