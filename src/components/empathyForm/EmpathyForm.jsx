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

    const steps = [];
        if (data['initialFeelings']) {
        steps.push(<EFInitialFeelings {...data} formPage="EFInitialFeelings" updateFields={updateFields} handleDivClick={handleDivClick} />);
        }
        steps.push(
        <EFUnderlyingFeelings {...data} formPage="EFUnderlyingFeelings" updateFields={updateFields} handleDivClick={handleDivClick} />,
        <EFNeeds {...data} formPage="EFNeeds" updateFields={updateFields} handleDivClick={handleDivClick} />,
        <EFSummary {...data} formPage="EFSummary"/>
        );

    const { currentStepIndex, step, isLastStep, back, next } =
        useMultistepForm(steps);


    const formPage = step.props.formPage
    
    
      
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

    function onSubmit(e) {
        e.preventDefault();
        if (!isLastStep) return next()

    };
    


    return (
            <div className="h-full grid grid-rows-[50px,1fr,120px] pt-4">
                {step}
            {formPage !== "EFSummary" && <div className="flex flex-row justify-between items-center text-md mx-4">
                {currentStepIndex === 0 && <div className=""></div>}
                {currentStepIndex !== 0 &&
                    <button type="button" className="flex flex-row items-center" style={{ color: "#545454" }} onClick={back}><LeftIcon className="mx-2 opacity-40" width={12} />
                        {formPage === "EFUnderlyingFeelings" && "initial feelings"}
                        {formPage === "EFNeeds" && "underlying feelings"}
                    </button>}
                
                <button className="flex flex-row items-center" type="button" style={{ color: "#545454" }} onClick={next}>
                    {formPage === "EFInitialFeelings" && "underlying feelings"}
                    {formPage === "EFUnderlyingFeelings" && "needs"}
                    {formPage === "EFNeeds" && "summary"}
                    <RightIcon className="mx-2 opacity-40" width={12} />
                </button>
            </div>}
            </div>
        
    )
}