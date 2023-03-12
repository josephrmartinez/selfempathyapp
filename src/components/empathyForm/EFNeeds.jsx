import FormWrapper from "./FormWrapper";
import DivGrid from "../DivGrid";

export default function EFNeeds({updateFields, needs }) {
//   const reactionClicked = (e) => {
//     updateFields({partnerReactions: partnerReactions.map((reaction) =>
//         reaction.id === e.target.getAttribute("data-id")
//           ? { ...reaction, selected: !reaction.selected }
//           : reaction) })
//   };

    return (
        <FormWrapper title="MY NEEDS">
            <DivGrid words={needs} bgColor={'#93b1c9'} />
        </FormWrapper>
  );
}
