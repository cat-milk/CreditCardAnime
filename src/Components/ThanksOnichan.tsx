import React from 'react';
import yuiBlush from '../assets/images/yui_cheek_squish.jpg';

const ThanksOniChan:React.FC<any> = (props) => {

    const doNothing = () => {};
    const handleRestart = props.handleRestart ? props.handleRestart : doNothing;

    const goBack = () => {
        handleRestart();
    }

    return (
        <div className="h-full flex">
            <div>
                <img src={yuiBlush} alt="" />
                Thank you
            </div>
            <button onClick={goBack}>Go back</button>
        </div>
    )
}

export default ThanksOniChan;