import React from "react";
import Encabezado from "../componentes/Encabezado";
import Deslizable from "../componentes/Deslizable";
import Texto from "../componentes/Texto";
import Carrito from "../componentes/Carrito";


function Compras() {
    return (
        <>
            <Encabezado></Encabezado>
            <Deslizable></Deslizable>
            <Texto></Texto>
            <h1 className="Exclamar">!Nuestros Anillos!</h1>
            <Carrito></Carrito>
            <div class="boton">
                <a href="confir_compra.html">Comprar</a>
            </div>
        </>
    );
}

export default Compras;