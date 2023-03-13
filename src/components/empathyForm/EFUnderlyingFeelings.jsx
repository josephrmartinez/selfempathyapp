import FormWrapper from "./FormWrapper";
import DivGrid from "../DivGrid";

export default function EFUnderlyingFeelings({updateFields, underlyingFeelings, handleDivClick }) {
//   const reactionClicked = (e) => {
//     updateFields({partnerReactions: partnerReactions.map((reaction) =>
//         reaction.id === e.target.getAttribute("data-id")
//           ? { ...reaction, selected: !reaction.selected }
//           : reaction) })
//   };

    return (
        <FormWrapper title="MY UNDERLYING FEELINGS">
            <DivGrid words={underlyingFeelings} bgColor={'#935A5A'} handleDivClick={handleDivClick} section="underlyingFeelings" />
        </FormWrapper>
  );
}

