import background from "../../assets/images/fundos/fundo1.png";
import gen from "../../assets/images/gen.jpg";

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
                            Sou um desenvolvedor Full Stack em formação, com experiência prática em Java, Spring Boot, React, MySQL e outras tecnologias web. Minha trajetória inclui atuação como instrutor de informática, onde desenvolvi habilidades em comunicação, suporte técnico e ensino de ferramentas como Microsoft Office e sistemas operacionais. Essa vivência me ajudou a aprimorar a lógica de programação, a resolução de problemas e o trabalho em equipe.
                        </p>
                        <p>
                            <img
                                src={gen}
                                className="  rounded-lg  mt-4"
                                alt="Imagem da turma java 79 da generation"
                                loading="lazy"
                            />
                        </p>
                        <h3 className="text-base text-center md:text-justify">Bootcamp Fullstack Java – Generation Brasil</h3>
                        <p className="text-base md:text-xl mt-2 text-center md:text-justify">
                            Durante o Bootcamp, desenvolvi projetos completos utilizando Spring Boot, bancos de dados PostgreSQL/MySQL e aplicações web com React, trabalhando em equipe e aplicando metodologias ágeis para entregar soluções funcionais.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sobre