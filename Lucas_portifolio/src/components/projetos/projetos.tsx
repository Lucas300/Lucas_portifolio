import React from "react";
import background from "../../assets/images/fundos/background.png";
import Projetosfullstack from "./projetosfullstack/ProjetosFullstack";

function Projetos() {
        return (
        <div className="bg-gray-900 text-white py-10" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
           
            <div className="container mx-auto p-4 md:p-12">
                
                <Projetosfullstack />
            </div>

        </div>
    );
}

export default Projetos;