import background from "../../assets/images/fundos/fundo1.png";

function Sobre() {
    return (
        <>
            <div
                id="sobre"
                // pt-20: espaço maior no topo em telas pequenas; md:pt-10 reduz o espaço em telas médias e maiores
                className="bg-black bg-cover bg-center py-10 bg-no-repeat flex justify-center pt-20 md:pt-10"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="container text-white px-4 md:px-20 py-10">
                    <div className="flex flex-col gap-4 items-center text-left md:text-justify">
                        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text text-center">
                            Sobre Mim
                        </h2>
                        <p className="text-base md:text-xl mt-4 text-center md:text-justify">
                            Sou um desenvolvedor Full Stack em formação, com sólida base em Java, Spring Boot, React, MySQL e tecnologias web. Tenho experiência como instrutor de informática, atuando com manutenção de computadores, suporte técnico e ensino de ferramentas como Microsoft Office e sistemas operacionais. Essa vivência fortaleceu minhas habilidades em comunicação, lógica de programação e resolução de problemas.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sobre