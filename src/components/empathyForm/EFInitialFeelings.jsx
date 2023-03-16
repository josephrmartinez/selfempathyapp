import FormWrapper from "./FormWrapper";
import DivGrid from "../DivGrid";

export default function EFInitialFeelings({updateFields, initialFeelings, handleDivClick }) {
    
    return (
        <FormWrapper title="MY INITIAL FEELINGS">
            <DivGrid words={initialFeelings} section="initialFeelings" bgColor={'#699F96'} handleDivClick={handleDivClick}/>
        </FormWrapper>
  );
}


