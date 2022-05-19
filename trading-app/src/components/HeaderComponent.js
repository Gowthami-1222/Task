import React from 'react'
import { OverlayTrigger } from 'react-bootstrap'
import "./HeaderComponent.css"
// import Popup from './Popup';
import Popup from "./../components/PopupComponent";

const  HeaderComponent = (props) => {
  return (
    <div className='Header'>
        <h1>Listed Stocks</h1>
        <div className='shareBtn'>
            <button className='btn1'>Share results</button>
        </div>
        <div className='customizeBtn'>
            <button className='btn2' onClick={props.customClick}>Customize table</button>
        
        </div>
    </div>
  )
}

export default HeaderComponent 