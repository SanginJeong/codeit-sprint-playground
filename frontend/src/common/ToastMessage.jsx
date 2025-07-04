import React from 'react'
import {ToastContainer} from "react-toastify";
import "react-toastify/ReactToastify.css";

const ToastMessage = () => {
  return (
    <>
      <ToastContainer
        theme='colored'
        autoClose={3000}
        limit={1}
      />
    </>
  )
}

export default ToastMessage