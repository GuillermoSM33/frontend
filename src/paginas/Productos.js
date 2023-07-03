import React from "react";
import Encabezado from "../componentes/Encabezado";
import Deslizable from "../componentes/Deslizable";
import Cuerpo3 from "../componentes/Cuerpo3";

function Productos() {
    return (
        <>
            <Encabezado></Encabezado>
            <section id="Texto">
                <br />
                <h1 className="Exclamar">"!Nuestas Ofertas!"</h1>
            </section>
            <Deslizable></Deslizable>
            <Cuerpo3></Cuerpo3>
        </>
    );
}

export default Productos;