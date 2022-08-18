import React from "react";
import NavBar from '../components/navbar'
import Laboratorios from "../components/laboratorios";
import Footer from "../components/footer";
import DivLab from "../components/divLab";
import IMGLaboratorio from "../assets/laboratorio.png";

const LaboratoriosPage= () =>{
  return (
    <>
      <NavBar page="laboratorios"/>
      <DivLab imagem={IMGLaboratorio}/>
      <Laboratorios/>
      <Footer />
    </>
  )
}

export default LaboratoriosPage;
