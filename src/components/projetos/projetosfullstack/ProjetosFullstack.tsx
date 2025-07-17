import { GithubLogo, Play } from "@phosphor-icons/react";
import fotoprojeto1 from "../../../assets/images/praca.png"
import fotoprojeto2 from "../../../assets/images/blog.png"
import fotoprojeto3 from "../../../assets/images/farmacia.png";


import { useState } from 'react';


function Projetosfullstack() {
    const [isOpen, setIsOpen] = useState<number | null>(null);

    const openPopup = (index: number) => {
        setIsOpen(index);
    };

    const closePopup = () => {
        setIsOpen(null);
    };

    return (
        <div
            id="projetos"
            // pt-20: espaço maior no topo em telas pequenas; md:pt-14 reduz o espaço em telas médias e maiores
            className=" text-white py-14 pt-20 md:pt-14">
            <div className="flex flex-col gap-4 items-center justify-end py-4">
                <h2 className="text-5xl mb-6 font-bold bg-gradient-to-r from-blue-500 to-blue-300 text-transparent pb-5 bg-clip-text">
                    Meus Projetos
                </h2>
            </div>
            <div className="bg-zinc-900 text-white p-8 rounded-xl max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-5 mx-auto max-w-7xl">
                    {/* Card 1 */}
                    <div className="bg-slate-800 rounded-xl shadow-md p-4 max-w-xs mb-4 mx-auto">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-2">PraçaFit</h2>
                        </div>
                        <div className="flex justify-center">
                            <img
                                onClick={() => openPopup(1)}
                                src={fotoprojeto1}
                                alt="Foto de Lucas Daniel"
                                className="w-3/4 h-3/4 rounded-md mb-4 mx-auto transition duration-300 hover:scale-110 cursor-pointer"
                            />

                        </div>
                        <div className="flex justify-center gap-2 mb-2">
                            <img src="https://skillicons.dev/icons?i=java" className="w-6 transition duration-300 hover:scale-125" alt="Java" />
                            <img src="https://skillicons.dev/icons?i=spring" className="w-6 transition duration-300 hover:scale-125" alt="Spring" />
                            <img src="https://skillicons.dev/icons?i=docker" className="w-6 transition duration-300 hover:scale-125" alt="TypeScript" />
                            <img src="https://skillicons.dev/icons?i=react" className="w-6 transition duration-300 hover:scale-125" alt="React" />
                            <img src="https://skillicons.dev/icons?i=tailwind" className="w-6 transition duration-300 hover:scale-125" alt="TailwindCSS" />
                            <img src="https://skillicons.dev/icons?i=ts" className="w-6 transition duration-300 hover:scale-125" alt="TypeScript" />
                        </div>
                        <div className="text-center">
                            <p className="text-lg font-bold text-transparent bg-gradient-rainbow bg-clip-text bg-[length:400%_400%] animate-gradient-x">
                                Full-Stack
                            </p>

                        </div>
                        <a href="#card1">
                            <div className="text-center">
                                <button
                                    onClick={() => openPopup(1)}
                                    className="bg-blue-800 cursor-pointer text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700 hover:scale-110"
                                >
                                    Ver Detalhes
                                </button>
                            </div>
                        </a>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-slate-800 rounded-xl shadow-md p-4 max-w-xs mb-4 mx-auto">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-2">Blog Pessoal</h2>
                        </div>
                        <div className="flex justify-center">
                            <img
                                onClick={() => openPopup(2)}
                                src={fotoprojeto2}
                                alt="Foto de Lucas Daniel"
                                className="w-3/4 h-3/4 rounded-md mb-4 mx-auto transition duration-300 hover:scale-110 cursor-pointer"
                            />

                        </div>
                        <div className="flex justify-center gap-2 mb-2">
                            <img src="https://skillicons.dev/icons?i=java" className="w-6 transition duration-300 hover:scale-125" alt="Java" />
                            <img src="https://skillicons.dev/icons?i=spring" className="w-6 transition duration-300 hover:scale-125" alt="Spring" />
                            <img src="https://skillicons.dev/icons?i=docker" className="w-6 transition duration-300 hover:scale-125" alt="TypeScript" />
                            <img src="https://skillicons.dev/icons?i=react" className="w-6 transition duration-300 hover:scale-125" alt="React" />
                            <img src="https://skillicons.dev/icons?i=tailwind" className="w-6 transition duration-300 hover:scale-125" alt="TailwindCSS" />
                            <img src="https://skillicons.dev/icons?i=ts" className="w-6 transition duration-300 hover:scale-125" alt="TypeScript" />
                        </div>
                        <div className="text-center">
                            <p className="text-lg font-bold text-transparent bg-gradient-rainbow bg-clip-text bg-[length:400%_400%] animate-gradient-x">
                                Full-Stack
                            </p>
                        </div>
                        <a href="#card2">
                            <div className="text-center">
                                <button
                                    onClick={() => openPopup(2)}
                                    className="bg-blue-800 cursor-pointer text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700 hover:scale-110"
                                >
                                    Ver Detalhes
                                </button>
                            </div>
                        </a>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-slate-800 rounded-xl shadow-md p-4 max-w-xs mb-4 mx-auto">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-2">Farmácia</h2>
                        </div>
                        <div className="flex justify-center">
                            <img
                                onClick={() => openPopup(3)}
                                src={fotoprojeto3}
                                alt="Foto de Lucas Daniel"
                                className="w-3/4 h-3/4 rounded-md mb-4 mx-auto transition duration-300 hover:scale-110 cursor-pointer"
                            />

                        </div>
                        <div className="flex justify-center gap-2 mb-2">
                            <img src="https://skillicons.dev/icons?i=java" className="w-6 transition duration-300 hover:scale-125" alt="Java" />
                            <img src="https://skillicons.dev/icons?i=spring" className="w-6 transition duration-300 hover:scale-125" alt="Spring" />
                            <img src="https://skillicons.dev/icons?i=docker" className="w-6 transition duration-300 hover:scale-125" alt="TypeScript" />
                            <img src="https://skillicons.dev/icons?i=react" className="w-6 transition duration-300 hover:scale-125" alt="React" />
                            <img src="https://skillicons.dev/icons?i=tailwind" className="w-6 transition duration-300 hover:scale-125" alt="TailwindCSS" />
                            <img src="https://skillicons.dev/icons?i=ts" className="w-6 transition duration-300 hover:scale-125" alt="TypeScript" />
                        </div>
                        <div className="text-center">
                            <p className="text-lg font-bold text-transparent bg-gradient-rainbow bg-clip-text bg-[length:400%_400%] animate-gradient-x">
                                Full-Stack
                            </p>
                        </div>
                        <a href="#card3">
                            <div className="text-center">
                                <button
                                    onClick={() => openPopup(3)}
                                    className="bg-blue-800 cursor-pointer text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700 hover:scale-110"
                                >
                                    Ver Detalhes
                                </button>
                            </div>
                        </a>
                    </div>

                    <div></div>
                    {/* Botão final */}
                    <div className="flex justify-center">
                        <a
                            href="https://github.com/Lucas300"
                            target="_blank"
                            className="border  border-gray-500 bg-slate-800 px-4 py-2 rounded hover:bg-slate-950 transition"
                        >
                            <div className="flex items-center gap-2 border-spacing-1 ">
                                <GithubLogo size={20} weight="bold" className="" /> Mais projetos GitHub
                            </div>
                        </a>
                    </div>
                </div>

                {/* Popup 1*/}
                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-gray-800 text-white p-6 rounded-lg max-w-lg w-full">
                            {/* botao de fechar */}
                            <div className="flex mb-4 justify-end">
                                <button
                                    onClick={closePopup}
                                    className="text-white   text-xl font-extrabold  bg-gray-800 hover:text-white"
                                >
                                    ✕
                                </button>
                            </div>
                            {isOpen === 1 &&
                                <div className="flex-1">
                                    <iframe
                                        className="w-full my-5 h-64 md:h-[14em] rounded"
                                        src="https://www.youtube.com/embed/_jSXWycWISE?si=A9EI2UY60DcV_YAm"
                                        title="YouTube Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            }
                            {isOpen === 2 &&
                                <div className="flex-1">
                                    <iframe
                                        className="w-full my-5 h-64 md:h-[14em] rounded"
                                        src="https://www.youtube.com/embed/apF_VJ5VebI?si=Ay_ha-bnVBbIvGXQ"
                                        title="YouTube Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            }
                            {isOpen === 3 &&
                                <div className="flex-1">
                                    <iframe
                                        className="w-full my-5 h-64 md:h-[14em] rounded"
                                        src="https://www.youtube.com/embed/14IriWSoVAk?si=hI0NLq0qk3CBWm_l"
                                        title="YouTube Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            }

                            <div className="flex justify-between  items-center mb-4">
                                <h2 className="text-xl font-bold">
                                    {isOpen === 1 && "Projeto PraçaFit"}
                                    {isOpen === 2 && "Projeto Blog Pessoal"}
                                    {isOpen === 3 && "Projeto Farmácia"}
                                </h2>
                            </div>
                            <div className="mb-4">
                                <p>
                                    {isOpen === 1 &&
                                        "Esse é o Praça Fit, um projeto desenvolvido em grupo como parte do Projeto Integrador da Generation Brasil. A aplicação tem como objetivo orientar pessoas no uso correto dos aparelhos de academias ao ar livre, com sugestões de exercícios baseadas no cálculo do IMC."}
                                    {isOpen === 2 &&
                                        "Esse é o meu blog pessoal,nele compartilho minha evolução na área de TI, aprendizados e projetos que venho desenvolvendo como dev Full Stack."}
                                    {isOpen === 3 &&
                                        "Esse é meu projeto de gerenciamento de produtos para uma farmácia, desenvolvido com Java, Spring Boot e PostgreSQL no back-end, e React com Descrição do projeto Farmácia."}
                                </p>
                            </div>
                            {isOpen === 1 &&
                                <div className="flex flex-wrap gap-2">
                                    <a
                                        href="https://github.com/Lucas300/Backend_fitness"
                                        target="_blank"
                                        className="border border-gray-500 px-2 py-2 text-sm md:px-4 md:py-2 md:text-base rounded hover:bg-slate-900 transition bg-slate-800"
                                    >
                                        <div className="flex items-center gap-2 border-spacing-1">
                                            <GithubLogo size={18} weight="bold" className="" /> Back-end
                                        </div>
                                    </a>
                                    <a
                                        href="https://github.com/Lucas300/Frontend_fitness"
                                        target="_blank"
                                        className="border border-gray-500 bg-slate-950 px-2 py-2 text-sm md:px-4 md:py-2 md:text-base rounded hover:bg-slate-800 transition"
                                    >
                                        <div className="flex items-center gap-2 border-spacing-1">
                                            <GithubLogo size={18} weight="bold" className="" /> Front-end
                                        </div>
                                    </a>
                                    <a
                                        href="https://pracafit.netlify.app/"
                                        target="_blank"
                                        className="bg-green-600 text-white px-2 py-2 text-sm md:px-4 md:py-2 md:text-base rounded hover:bg-green-700 transition"
                                    >
                                        <div className="flex items-center gap-2 border-spacing-1">
                                            <Play size={18} weight="bold" className="" /> Testar
                                        </div>

                                    </a>
                                </div>

                            }
                            {isOpen === 2 &&
                                <div className="flex flex-wrap gap-2">
                                    <a
                                        href="https://github.com/Lucas300/blogpessoal_spring"
                                        target="_blank"
                                        className="border border-gray-500 px-2 py-2 text-sm md:px-4 md:py-2 md:text-base rounded hover:bg-slate-900 transition bg-slate-800"
                                    >
                                        <div className="flex items-center gap-2 border-spacing-1">
                                            <GithubLogo size={18} weight="bold" className="" /> Back-end
                                        </div>
                                    </a>
                                    <a
                                        href="https://github.com/Lucas300/BlogPessoal_React"
                                        target="_blank"
                                        className="border border-gray-500 bg-slate-950 px-2 py-2 text-sm md:px-4 md:py-2 md:text-base rounded hover:bg-slate-800 transition"
                                    >
                                        <div className="flex items-center gap-2 border-spacing-1">
                                            <GithubLogo size={18} weight="bold" className="" /> Front-end
                                        </div>
                                    </a>
                                    <a
                                        href="https://blog-pessoal-lucas-pi.vercel.app/"
                                        target="_blank"
                                        className="bg-green-600 text-white px-2 py-2 text-sm md:px-4 md:py-2 md:text-base rounded hover:bg-green-700 transition"
                                    >
                                        <div className="flex items-center gap-2 border-spacing-1">
                                            <Play size={18} weight="bold" className="" /> Testar
                                        </div>

                                    </a>
                                </div>
                            }
                            {isOpen === 3 &&
                                <div className="flex flex-wrap gap-2">
                                    <a
                                        href="https://github.com/Lucas300/Backend_Farmacia"
                                        target="_blank"
                                        className="border border-gray-500 px-2 py-2 text-sm md:px-4 md:py-2 md:text-base rounded hover:bg-slate-900 transition bg-slate-800"
                                    >
                                        <div className="flex items-center gap-2 border-spacing-1">
                                            <GithubLogo size={18} weight="bold" className="" /> Back-end
                                        </div>
                                    </a>
                                    <a
                                        href="https://github.com/Lucas300/React_farmacia"
                                        target="_blank"
                                        className="border border-gray-500 bg-slate-950 px-2 py-2 text-sm md:px-4 md:py-2 md:text-base rounded hover:bg-slate-800 transition"
                                    >
                                        <div className="flex items-center gap-2 border-spacing-1">
                                            <GithubLogo size={18} weight="bold" className="" /> Front-end
                                        </div>
                                    </a>
                                    <a
                                        href="https://lucas-drogaria-sao-paulo.vercel.app/"
                                        target="_blank"
                                        className="bg-green-600 text-white px-2 py-2 text-sm md:px-4 md:py-2 md:text-base rounded hover:bg-green-700 transition"
                                    >
                                        <div className="flex items-center gap-2 border-spacing-1">
                                            <Play size={18} weight="bold" className="" /> Testar
                                        </div>

                                    </a>
                                </div>
                            }
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}

export default Projetosfullstack;