import { useState } from "react";
import DataTable from "react-data-table-component";
import HeaderComponent from "./components/HeaderComponent";
import { columns, data } from "./data";
import Modal from "./components/Modal";
import PopupComponent from "./components/PopupComponent";
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const { show, setButtonPopup }= useState(false);
  const tableData = {
    columns,
    data
  };

  const handleCustomizeBtn = () => {
          setShow(!show)  
  }
  const modalProps = {show,handleClose,handleCustomizeBtn}
  return (
    <>
      <HeaderComponent customClick = {handleCustomizeBtn}/>
      <div className="main">
        {/* <button onClick={() => setButtonPopup(false)}> handleCustomizeBtn</button>  */}
         {/* <Popup trigger={customizetable}></Popup> */}
      </div>
      <div className="data-table">

      </div>
      <DataTable
        columns={columns}
        data={data}
        noHeader
        defaultSortField="id"
        defaultSortAsc={true}
        // pagination
        highlightOnHover
        dense
        Popup
        

      />
     { show?<Modal {...modalProps} />:null}
      {/* // { show?<PopupComponent />:null}  */}

    </>


  );
};

export default App;
