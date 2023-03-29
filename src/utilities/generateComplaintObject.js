import { initialFeelingsList } from "../assets/initialFeelingsList"
import { underlyingFeelingsList } from "../assets/underlyingFeelingsList"
import { needsList } from "../assets/needsList"
import { returnSixRandomValues } from "./returnSixRandomValues"

export default function generateComplaintObject(complaint) {
    let complaintObject =
    {
        [complaint]: {
            "complaint": complaint,
            "initialFeelings": returnSixRandomValues(initialFeelingsList),
            "underlyingFeelings": returnSixRandomValues(underlyingFeelingsList),
            "needs": returnSixRandomValues(needsList)
        }
    }
    return complaintObject
}