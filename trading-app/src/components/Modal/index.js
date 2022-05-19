// import { Button } from 'bootstrap';
import React, { useState } from 'react'

import {
  Button, ModalTitle,
  ModalFooter,
  ModalBody,
  ModalHeader,
  ModalDialog
} from 'react-bootstrap';
import "./style.css";

export default function Modal({ show, Customizetable, handleClose }) {


  return (
    <>


      <div className="modal" id="myModal" style={{ display: show ? "block" : "none" }}>
        <div className="modal-dialog">
          <div className="modal-content">

            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title">Customize Table</h4>
              <button type="button" className="btn-close" onClick={Customizetable} ></button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <table className="table">
              <tr>
                <td>contents</td>
                
              </tr>


              <tr>
                <td>Ask</td>
                
              </tr>
              <tr>
                <td>Bid</td>
                
              </tr>
              <tr>
                <td>low</td>
                
              </tr>
              <tr>
                <td>Ltp</td>
              </tr>
              <tr>
                <td>previous Close</td>
              </tr>
              <tr>
                <td>Change</td>
              </tr>
              <tr>
                <td>Close</td>
              </tr>
              <tr>
                <td>Open</td>
              </tr>
              <tr>
                <td>High</td>
              </tr>
              <tr>
                <td>previous Close</td>
              </tr>
              <tr>
                <td>previous Close</td>
              </tr>
              </table>





            </div>

            {/* <!-- Modal footer --> */}
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" onClick={handleClose} >Save preferences</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
