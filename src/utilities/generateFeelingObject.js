import { underlyingFeelingsList } from "../assets/underlyingFeelingsList"
import { needsList } from "../assets/needsList"
import { returnSixRandomValues } from "./returnSixRandomValues"

export default function generateFeelingObject(feeling) {
      let feelingObject =
      {
            [feeling]: {
                  "initialFeeling": feeling,
                  "underlyingFeelings": returnSixRandomValues(underlyingFeelingsList),
                  "needs": returnSixRandomValues(needsList)
            }
      }
      return feelingObject
}