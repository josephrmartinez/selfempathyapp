import FormWrapper from "./FormWrapper";
import DivGrid from "../DivGrid";

export default function EFInitialFeelings({updateFields, initialFeelings, handleDivClick }) {
//   const reactionClicked = (e) => {
//     updateFields({partnerReactions: partnerReactions.map((reaction) =>
//         reaction.id === e.target.getAttribute("data-id")
//           ? { ...reaction, selected: !reaction.selected }
//           : reaction) })
//   };

    
    return (
        <FormWrapper title="MY INITIAL FEELINGS">
            <DivGrid words={initialFeelings} section="initialFeelings" bgColor={'#699F96'} handleDivClick={handleDivClick}/>
        </FormWrapper>
  );
}


