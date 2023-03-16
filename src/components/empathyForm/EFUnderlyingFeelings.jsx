import FormWrapper from "./FormWrapper";
import DivGrid from "../DivGrid";

export default function EFUnderlyingFeelings({updateFields, underlyingFeelings, handleDivClick }) {

    return (
        <FormWrapper title="MY UNDERLYING FEELINGS">
            <DivGrid words={underlyingFeelings} bgColor={'#935A5A'} handleDivClick={handleDivClick} section="underlyingFeelings"/>
        </FormWrapper>
  );
}

