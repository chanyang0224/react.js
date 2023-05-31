import { useState } from "react";
import './button.css';

function GoodAndAnd() {
    let [isGood, setGood] = useState(false);

    let toggleHeart = () => {
        setGood(!isGood);
    }

    return (
        <button className="btn_outLine btn_whiteOutLine" type="button" onClick={toggleHeart}>
            { isGood && <p>❤️</p> }
            { !isGood && <p>🤍</p> }
        </button>
    );
}


export default GoodAndAnd;