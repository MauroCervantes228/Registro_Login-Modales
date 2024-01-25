"use client"
import React, { useState } from "react";
import Login from "./login";
import Register from "./Registro";

const IndexPage = () => {
  const [modalType, setModalType] = useState(null);

  const handleModalClick = (type) => {
    setModalType(type);
  };

  const handleCloseModal = () => {
    setModalType(null);
  };

  return (
    <div>
      <button onClick={() => handleModalClick("login")}>Iniciar Sesion</button>
      {modalType === "registro" && <Register onClose={handleCloseModal} />}
      <br />
      <button onClick={() => handleModalClick("registro")}>Registro</button>
      {modalType === "login" && <Login onClose={handleCloseModal} />}
    </div>
  );
};

export default IndexPage;