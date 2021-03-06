import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import "./Modal.css";

export default function Modal(data) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  //console.log(SenatorData.SenatorData);
  // Prevents scrolling
  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  if (data.data.ticker.includes("href")) {
    const tickerName = data.data.ticker.split('>')[1].split('<');
    console.log(tickerName[0]);
    data.data.ticker = tickerName[0];
  }
  return (
    <>
    <Button onClick={toggleModal} variant="outlined" color="primary">Details</Button>
      {modal && (
        <div className="fixed z-10 bg-black bg-opacity-50 w-screen h-screen inset-0">
          <div onClick={toggleModal} className=""></div>
          <div className="modal-content">
            <h2>Details of {data.data.type}</h2>
            <p>
            Asset Type: {data.data.asset_type}
            </p>
            <p>
            Ticker: {data.data.ticker}
            <br>
            </br>
            Date: {data.data.transaction_date}
            <br>
            </br>
            Ownership: {data.data.owner}
            <br>
            </br>
            Amount: {data.data.owner}
            <br>
            </br>
            Comment: {data.data.comment}
            </p>
            <Link to={data.data.ptr_link}> "View Disclosure from EDF.gov"
            </Link>
            <div class="mt-3 flex justify-end space-x-3">
              <button class="px-3 py-1 rounded bg-red-800 text-gray-200 hover:bg-red-700 transition duration-200 hover:bg-opacity-70" onClick={toggleModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}