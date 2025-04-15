import lucas from "../../assets/images/lucas/lucas1.png";
import background from "../../assets/images/fundos/fundo1.png";

function Sobre() {
    return (
        <>     
            <div
                className="bg-black bg-cover bg-center bg-no-repeat flex justify-center"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="container text-white px-10 md:px-20 py-10">
                    <div className="flex flex-col gap-4 items-center text-center text-justify">
                        <h2 className="text-5xl font-bold">
                            Resumo Profissional
                        </h2>
                        <p className="text-xl mt-4">
                            Sou um desenvolvedor Full Stack em formação, com sólida base em Java, Spring Boot, React, MySQL e tecnologias web. Tenho experiência como instrutor de informática, atuando com manutenção de computadores, suporte técnico e ensino de ferramentas como Microsoft Office e sistemas operacionais. Essa vivência fortaleceu minhas habilidades em comunicação, lógica de programação e resolução de problemas.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sobre