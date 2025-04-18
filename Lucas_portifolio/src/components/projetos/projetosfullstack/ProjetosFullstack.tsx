import { GithubLogo, Play } from "@phosphor-icons/react";
import background from "../../../assets/images/fundos/background.png";
import fotoprojeto1 from "../../../assets/images/lucas/praca.png"
import fotoprojeto2 from "../../../assets/images/projetos/blog.jpg";
import fotoprojeto3 from "../../../assets/images/projetos/farmacia.png";


import { useState } from 'react';
import Popupteste from "./popupteste";


function Projetosfullstack() {
    const [isOpen, setIsOpen] = useState<number | null>(null);

    const openPopup = (index: number) => {
        setIsOpen(index);
    };

    const closePopup = () => {
        setIsOpen(null);
    };

    return (
        <div className="bg-gray-900 text-white py-10 " style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex flex-col gap-4 items-center justify-end py-4">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 text-transparent pb-5 bg-clip-text">
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
                                src={fotoprojeto1}
                                alt="Foto de Lucas Daniel"
                                className="w-3/4 h-3/4 rounded-md mb-4 mx-auto transition duration-300 hover:scale-110"
                            />
                        </div>
                        <div className="flex justify-center gap-4 mb-2">
                            <img src="https://skillicons.dev/icons?i=java" className="w-6 transition duration-300 hover:scale-125" alt="Java" />
                            <img src="https://skillicons.dev/icons?i=spring" className="w-6 transition duration-300 hover:scale-125" alt="Spring" />
                            <img src="https://skillicons.dev/icons?i=react" className="w-6 transition duration-300 hover:scale-125" alt="React" />
                            <img src="https://skillicons.dev/icons?i=tailwind" className="w-6 transition duration-300 hover:scale-125" alt="TailwindCSS" />
                            <img src="https://skillicons.dev/icons?i=ts" className="w-6 transition duration-300 hover:scale-125" alt="TypeScript" />
                        </div>
                        <div className="text-center">
                            <p className="text-lg text-gray-400 mb-4">Projeto Fitness</p>
                        </div>
                        <a href="#card1">
                            <div className="text-center">
                                <button
                                    onClick={() => openPopup(1)}
                                    className="bg-blue-800 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700 hover:scale-110"
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
                                src={fotoprojeto2}
                                alt="Foto de Lucas Daniel"
                                className="w-3/4 h-3/4 rounded-md mb-4 mx-auto transition duration-300 hover:scale-110"
                            />
                        </div>
                        <div className="flex justify-center gap-4 mb-2">
                            <img src="https://skillicons.dev/icons?i=java" className="w-6 transition duration-300 hover:scale-125" alt="Java" />
                            <img src="https://skillicons.dev/icons?i=spring" className="w-6 transition duration-300 hover:scale-125" alt="Spring" />
                            <img src="https://skillicons.dev/icons?i=react" className="w-6 transition duration-300 hover:scale-125" alt="React" />
                            <img src="https://skillicons.dev/icons?i=tailwind" className="w-6 transition duration-300 hover:scale-125" alt="TailwindCSS" />
                            <img src="https://skillicons.dev/icons?i=ts" className="w-6 transition duration-300 hover:scale-125" alt="TypeScript" />
                        </div>
                        <div className="text-center">
                            <p className="text-lg text-gray-400 mb-4">Blog Pessoal</p>
                        </div>
                        <a href="#card2">
                            <div className="text-center">
                                <button
                                    onClick={() => openPopup(2)}
                                    className="bg-blue-800 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700 hover:scale-110"
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
                                src={fotoprojeto3}
                                alt="Foto de Lucas Daniel"
                                className="w-3/4 h-3/4 rounded-md mb-4 mx-auto transition duration-300 hover:scale-110"
                            />
                        </div>
                        <div className="flex justify-center gap-4 mb-2">
                            <img src="https://skillicons.dev/icons?i=java" className="w-6 transition duration-300 hover:scale-125" alt="Java" />
                            <img src="https://skillicons.dev/icons?i=spring" className="w-6 transition duration-300 hover:scale-125" alt="Spring" />
                            <img src="https://skillicons.dev/icons?i=react" className="w-6 transition duration-300 hover:scale-125" alt="React" />
                            <img src="https://skillicons.dev/icons?i=tailwind" className="w-6 transition duration-300 hover:scale-125" alt="TailwindCSS" />
                            <img src="https://skillicons.dev/icons?i=ts" className="w-6 transition duration-300 hover:scale-125" alt="TypeScript" />
                        </div>
                        <div className="text-center">
                            <p className="text-lg text-gray-400 mb-4">Farmácia</p>
                        </div>
                        <a href="#card3">
                            <div className="text-center">
                                <button
                                    onClick={() => openPopup(3)}
                                    className="bg-blue-800 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700 hover:scale-110"
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
                                            <GithubLogo size={20} weight="bold" className="" /> Meu GitHub
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
                                        src="https://www.youtube.com/embed/hO_tjm9i32g?si=AY43KFBixHzep-OS"
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
                                        src="https://www.youtube.com/embed/hO_tjm9i32g?si=AY43KFBixHzep-OS"
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
                                        src="https://www.youtube.com/embed/hO_tjm9i32g?si=AY43KFBixHzep-OS"
                                        title="YouTube Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            }

                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">
                                    {isOpen === 1 && "Detalhes do Projeto PraçaFit"}
                                    {isOpen === 2 && "Detalhes do Projeto Blog Pessoal"}
                                    {isOpen === 3 && "Detalhes do Projeto Farmácia"}
                                </h2>
                            </div>
                            <div className="mb-4">
                                <p>
                                    {isOpen === 1 &&
                                        "Descrição do projeto PraçaFit. Aqui você pode adicionar mais detalhes sobre o projeto."}
                                    {isOpen === 2 &&
                                        "Descrição do projeto Blog Pessoal. Aqui você pode adicionar mais detalhes sobre o projeto."}
                                    {isOpen === 3 &&
                                        "Descrição do projeto Farmácia. Aqui você pode adicionar mais detalhes sobre o projeto."}
                                </p>
                            </div>
                            {isOpen === 1 &&
                                <div className="flex flex-wrap gap-2">
                                    <a
                                        href="https://github.com/seu-usuario/repositorio-back"
                                        target="_blank"
                                        className="border border-gray-500 px-4 py-2 rounded hover:bg-slate-900 transition bg-slate-800"
                                    >
                                        <div className="flex items-center gap-2 border-spacing-1 ">
                                            <GithubLogo size={20} weight="bold" className="" /> Back-end
                                        </div>
                                    </a>
                                    <a
                                        href="https://github.com/seu-usuario/repositorio-front"
                                        target="_blank"
                                        className="border border-gray-500 bg-slate-950 px-4 py-2 rounded hover:bg-slate-800 transition"
                                    >
                                        <div className="flex items-center gap-2 border-spacing-1 ">
                                            <GithubLogo size={20} weight="bold" className="" /> Front-end
                                        </div>
                                    </a>
                                    <a
                                        href="https://link-do-projeto"
                                        target="_blank"
                                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                                    >
                                        <div className="flex items-center gap-2 border-spacing-1 ">
                                            <Play size={20} weight="bold" className="" /> Testar
                                        </div>

                                    </a>
                                </div>

                            }
                            {isOpen === 2 &&
                                <div className="flex flex-wrap gap-2">
                                    <a
                                        href="https://github.com/seu-usuario/repositorio-back"
                                        target="_blank"
                                        className="border border-gray-500 px-4 py-2 rounded hover:bg-slate-900 transition bg-slate-800"
                                    >
                                        <div className="flex items-center gap-2 border-spacing-1 ">
                                            <GithubLogo size={20} weight="bold" className="" /> Back-end
                                        </div>
                                    </a>
                                    <a
                                        href="https://github.com/seu-usuario/repositorio-front"
                                        target="_blank"
                                        className="border border-gray-500 bg-slate-950 px-4 py-2 rounded hover:bg-slate-800 transition"
                                    >
                                        <div className="flex items-center gap-2 border-spacing-1 ">
                                            <GithubLogo size={20} weight="bold" className="" /> Front-end
                                        </div>
                                    </a>
                                    <a
                                        href="https://link-do-projeto"
                                        target="_blank"
                                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                                    >
                                        <div className="flex items-center gap-2 border-spacing-1 ">
                                            <Play size={20} weight="bold" className="" /> Testar
                                        </div>

                                    </a>
                                </div>
                            }
                            {isOpen === 3 &&
                                <div className="flex flex-wrap gap-2">
                                    <a
                                        href="https://github.com/seu-usuario/repositorio-back"
                                        target="_blank"
                                        className="border border-gray-500 px-4 py-2 rounded hover:bg-slate-900 transition bg-slate-800"
                                    >
                                        <div className="flex items-center gap-2 border-spacing-1 ">
                                            <GithubLogo size={20} weight="bold" className="" /> Back-end
                                        </div>
                                    </a>
                                    <a
                                        href="https://github.com/seu-usuario/repositorio-front"
                                        target="_blank"
                                        className="border border-gray-500 bg-slate-950 px-4 py-2 rounded hover:bg-slate-800 transition"
                                    >
                                        <div className="flex items-center gap-2 border-spacing-1 ">
                                            <GithubLogo size={20} weight="bold" className="" /> Front-end
                                        </div>
                                    </a>
                                    <a
                                        href="https://link-do-projeto"
                                        target="_blank"
                                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                                    >
                                        <div className="flex items-center gap-2 border-spacing-1 ">
                                            <Play size={20} weight="bold" className="" /> Testar
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