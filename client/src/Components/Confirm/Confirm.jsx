
import React from "react";
import './Confirm.css'
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
        <button onClick= {props.handleConfirm}>Xác nhận </button>
      </div>
    </div>
  );
};
 
export default Popup;