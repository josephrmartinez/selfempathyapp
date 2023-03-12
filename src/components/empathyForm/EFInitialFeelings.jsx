import FormWrapper from "./FormWrapper";
import DivGrid from "../DivGrid";

export default function EFInitialFeelings({updateFields, initialFeelings }) {
//   const reactionClicked = (e) => {
//     updateFields({partnerReactions: partnerReactions.map((reaction) =>
//         reaction.id === e.target.getAttribute("data-id")
//           ? { ...reaction, selected: !reaction.selected }
//           : reaction) })
//   };

    console.log(initialFeelings)
    
    return (
        <FormWrapper title="MY INITIAL FEELINGS">
            <DivGrid words={initialFeelings} bgColor={'#699F96'} />
        </FormWrapper>
  );
}


