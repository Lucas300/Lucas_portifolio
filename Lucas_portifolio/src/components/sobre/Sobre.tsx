
import lucas from "../../assets/images/lucas.png";
import background from "../../assets/images/44.png";

function Sobre() {
    return (
        <>     
            <div className="bg-black bg-cover bg-center bg-no-repeat flex justify-center" style={{ backgroundImage: `url(${background})`}}>
                <div className='container grid grid-cols-2 text-white mb-20'>
                <div className="flex justify-center">
                        <img
                            src={lucas}
                            alt="Imagem Página Home"
                            className="w-48 rounded-full transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold text-justifyd'>
                        💼 Resumo Profissional
                        </h2>
                        <p className='text-xl'>
                        Sou um desenvolvedor Full Stack em formação, com sólida base em Java, Spring Boot, React, MySQL e tecnologias web. Tenho experiência como instrutor de informática, atuando com manutenção de computadores, suporte técnico e ensino de ferramentas como Microsoft Office e sistemas operacionais. Essa vivência fortaleceu minhas habilidades em comunicação, lógica de programação e resolução de problemas.
                        </p>
                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sobre