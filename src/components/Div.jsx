import { useNavigate } from "react-router-dom";

export default function Div(props) {
    return (
        <div className={`listDiv ${props.divClass}`} key={props.word} onClick={() => console.log(props.divClass, props.word)}>
            {props.word}
        </div>
    )
}