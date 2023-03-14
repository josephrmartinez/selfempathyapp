import FormWrapper from "./FormWrapper";
import DivGrid from "../DivGrid";

export default function EFSummary(data) {
    
    // USE OPTIONAL CHAINING OPERATOR TO AVOID UNDEFINED ERROR
    const selectedInitialFeelings = data.initialFeelings?.filter(each => each.selected)
    const selectedUnderlyingFeelings = data.underlyingFeelings.filter(each => each.selected)
    const selectedNeeds = data.needs.filter(each => each.selected)

    return (
    <>
        { selectedInitialFeelings && 
        <FormWrapper FormWrapper title = "MY INITIAL FEELINGS" >
            <DivGrid words={selectedInitialFeelings} section="initialFeelings" bgColor={'#699F96'} isCursorPointer={false} handleDivClick={() => { return }}/>
            <div className="text-sm text-center my-5">MY UNDERLYING FEELINGS</div>
            <DivGrid words={selectedUnderlyingFeelings} section="underlyingFeelings" bgColor={'#935A5A'} isCursorPointer={false} handleDivClick={() => { return }}/>
            <div className="text-sm text-center my-5">MY NEEDS</div>
            <DivGrid words={selectedNeeds} section="needs" bgColor={'#93b1c9'} isCursorPointer={false} handleDivClick={() => { return }}/>
        </FormWrapper>
    }

        { !selectedInitialFeelings && 
        < FormWrapper FormWraper title = "MY UNDERLYING FEELINGS" >
            <DivGrid words={selectedUnderlyingFeelings} section="underlyingFeelings" bgColor={'#935A5A'} isCursorPointer={false} handleDivClick={() => { return }}/>
            <div className="text-sm text-center my-5">MY NEEDS</div>
            <DivGrid words={selectedNeeds} section="needs" bgColor={'#93b1c9'} isCursorPointer={false} handleDivClick={() => { return }}/>
        </FormWrapper>
    }
    
        </>
    )
}

