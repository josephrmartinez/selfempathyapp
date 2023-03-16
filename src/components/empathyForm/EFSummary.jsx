import FormWrapper from "./FormWrapper";
import DivGridSummary from "../DivGridSummary";

export default function EFSummary(data) {
    
    // USE OPTIONAL CHAINING OPERATOR TO AVOID UNDEFINED ERROR
    const selectedInitialFeelings = data.initialFeelings?.filter(each => each.selected)
    const selectedUnderlyingFeelings = data.underlyingFeelings.filter(each => each.selected)
    const selectedNeeds = data.needs.filter(each => each.selected)

    return (
    <>
        { selectedInitialFeelings && 
        <FormWrapper FormWrapper title = "MY INITIAL FEELINGS" >
            <DivGridSummary words={selectedInitialFeelings} section="initialFeelings" bgColor={'#699F96'}/>
            <div className="text-sm text-center my-5">MY UNDERLYING FEELINGS</div>
            <DivGridSummary words={selectedUnderlyingFeelings} section="underlyingFeelings" bgColor={'#935A5A'}/>
            <div className="text-sm text-center my-5">MY NEEDS</div>
            <DivGridSummary words={selectedNeeds} section="needs" bgColor={'#93b1c9'}/>
        </FormWrapper>
    }

        { !selectedInitialFeelings && 
        < FormWrapper FormWraper title = "MY UNDERLYING FEELINGS" >
            <DivGridSummary words={selectedUnderlyingFeelings} section="underlyingFeelings" bgColor={'#935A5A'}/>
            <div className="text-sm text-center my-5">MY NEEDS</div>
            <DivGridSummary words={selectedNeeds} section="needs" bgColor={'#93b1c9'}/>
        </FormWrapper>
    }
    
        </>
    )
}

