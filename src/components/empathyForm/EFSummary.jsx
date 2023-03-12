import FormWrapper from "./FormWrapper";
import DivGrid from "../DivGrid";

export default function EFSummary({updateFields, initialFeelings }) {
//   const reactionClicked = (e) => {
//     updateFields({partnerReactions: partnerReactions.map((reaction) =>
//         reaction.id === e.target.getAttribute("data-id")
//           ? { ...reaction, selected: !reaction.selected }
//           : reaction) })
//   };

    return (
        <FormWrapper title="MY INITIAL FEELINGS">
            <div>initial feeling</div>
            <div className="text-sm text-center my-5">MY UNDERLYING FEELINGS</div>
            <div>underlying</div>
            <div className="text-sm text-center my-5">MY NEEDS</div>
            <div>need</div>
        </FormWrapper>
  );
}

