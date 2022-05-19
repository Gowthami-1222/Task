import React from 'react'
//simport Popup from './components/Popup';

function popup(props) {
  return (props.trigger) ?(
    <div className="popup">
        <div className="popup inner">
            <button className="close-btn">close</button>
            {props.children}

        </div>

    </div>
  ) :"";
}

export default popup