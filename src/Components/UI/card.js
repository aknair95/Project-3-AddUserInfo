
import "./card.css";

const Card=(props) =>{
    return (
            <div className={`card ${props.classname}`}>
                {props.children}
            </div>
            )    
}

export default Card;