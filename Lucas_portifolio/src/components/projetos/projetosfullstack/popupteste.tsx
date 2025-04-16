import React, { useState } from "react";
import { GithubLogo, Play } from "@phosphor-icons/react";
import background from "../../../assets/images/fundos/background.png";
import fotoprojeto1 from "../../../assets/images/lucas/praca.png";
import fotoprojeto2 from "../../../assets/images/projetos/blog.jpg";
import fotoprojeto3 from "../../../assets/images/projetos/farmacia.png";

function Popupteste() {
    const [isOpen, setIsOpen] = useState<number | null>(null);

    const openPopup = (index: number) => {
        setIsOpen(index);
    };

    const closePopup = () => {
        setIsOpen(null);
    };

    return (
        <div
            className="bg-gray-900 text-white py-10"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="flex flex-col gap-4 items-center justify-end py-4">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 text-transparent pb-5 bg-clip-text">
                    Meus Projetos
                </h2>
            </div>
            <div className="bg-zinc-900 text-white p-8 rounded-xl max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
                    {/* Card 1 */}
                    <div className="bg-slate-800 rounded-xl shadow-md p-4 max-w-xs mx-auto">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-2">PraçaFit</h2>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={fotoprojeto1}
                                alt="Projeto PraçaFit"
                                className="w-3/4 h-3/4 rounded-md mb-4 mx-auto transition duration-300 hover:scale-110"
                            />
                        </div>
                        <div className="text-center">
                            <button
                                onClick={() => openPopup(1)}
                                className="bg-blue-800 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700 hover:scale-110"
                            >
                                Ver Detalhes
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-slate-800 rounded-xl shadow-md p-4 max-w-xs mx-auto">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-2">Blog Pessoal</h2>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={fotoprojeto2}
                                alt="Projeto Blog Pessoal"
                                className="w-3/4 h-3/4 rounded-md mb-4 mx-auto transition duration-300 hover:scale-110"
                            />
                        </div>
                        <div className="text-center">
                            <button
                                onClick={() => openPopup(2)}
                                className="bg-blue-800 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700 hover:scale-110"
                            >
                                Ver Detalhes
                            </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-slate-800 rounded-xl shadow-md p-4 max-w-xs mx-auto">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-2">Farmácia</h2>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={fotoprojeto3}
                                alt="Projeto Farmácia"
                                className="w-3/4 h-3/4 rounded-md mb-4 mx-auto transition duration-300 hover:scale-110"
                            />
                        </div>
                        <div className="text-center">
                            <button
                                onClick={() => openPopup(3)}
                                className="bg-blue-800 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700 hover:scale-110"
                            >
                                Ver Detalhes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-800 text-white p-6 rounded-lg max-w-lg w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">
                                {isOpen === 1 && "Detalhes do Projeto PraçaFit"}
                                {isOpen === 2 && "Detalhes do Projeto Blog Pessoal"}
                                {isOpen === 3 && "Detalhes do Projeto Farmácia"}
                            </h2>
                            <button
                                onClick={closePopup}
                                className="text-gray-400 hover:text-white"
                            >
                                ✕
                            </button>
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
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/seu-usuario/repositorio-back"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                            >
                                <GithubLogo size={20} weight="bold" /> Back-end
                            </a>
                            <a
                                href="https://github.com/seu-usuario/repositorio-front"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                            >
                                <GithubLogo size={20} weight="bold" /> Front-end
                            </a>
                            <a
                                href="https://link-do-projeto"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                            >
                                <Play size={20} weight="bold" /> Testar
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Popupteste;