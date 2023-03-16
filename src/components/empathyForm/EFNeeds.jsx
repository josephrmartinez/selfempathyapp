import FormWrapper from "./FormWrapper";
import DivGrid from "../DivGrid";

export default function EFNeeds({updateFields, needs, handleDivClick }) {

    return (
        <FormWrapper title="MY NEEDS">
            <DivGrid words={needs} bgColor={'#93b1c9'} section="needs" handleDivClick={handleDivClick}/>
        </FormWrapper>
  );
}

