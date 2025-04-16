import React from "react";
import background from "../../../assets/images/fundos/background.png";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import fotoprojeto from "../../../assets/images/lucas/praca.png"
import fotoprojeto2 from "../../../assets/images/fundos/background.png";
import fotoprojeto3 from "../../../assets/images/fundos/background.png";
import Collapse from "./CollapseTeste";
import { useState } from 'react';

function Projetosfullstack() {
    const [isOpen, setIsOpen] = useState(false);



    return (
        <div className="bg-gray-900 text-white py-10" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                                src={fotoprojeto}
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
                            <p className="text-lg text-gray-600 mb-4">Projeto Fitness</p>
                        </div>
                        
                        {/* Centralizando o GitHub */}
                        {/* <div className="flex justify-center rounded-md bg-slate-900 ml-20 mr-20 py-1">
                            <a href="https://github.com/Lucas300" target="_blank">
                                <GithubLogo
                                    size={48}
                                    weight="bold"
                                    className="transition duration-300 hover:scale-125"
                                />
                            </a>
                        </div> */}
                        {/*botao colapse1*/}
                        <div className="p flex justify-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="bg-blue-800 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700 hover:scale-110"
                            >
                                {isOpen ? 'Fechar' : 'Abrir'} Detalhes
                            </button>    
                        </div>
                    </div>



                    {/* Card 2 */}
                    <div className="bg-slate-800 rounded-xl shadow-md p-4 max-w-xs mb-4 mx-auto">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-2">Blog Pessoal</h2>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={fotoprojeto}
                                alt="Foto de Lucas Daniel"
                                className="w-3/4 h-3/4 rounded-md mb-4 mx-auto transition duration-300 hover:scale-110"
                            />
                        </div>
                        <div className="flex justify-center gap-4 mb-4">
                            <img src="https://skillicons.dev/icons?i=java" className="w-6 transition duration-300 hover:scale-125" alt="Java" />
                            <img src="https://skillicons.dev/icons?i=spring" className="w-6 transition duration-300 hover:scale-125" alt="Spring" />
                            <img src="https://skillicons.dev/icons?i=react" className="w-6 transition duration-300 hover:scale-125" alt="React" />
                            <img src="https://skillicons.dev/icons?i=tailwind" className="w-6 transition duration-300 hover:scale-125" alt="TailwindCSS" />
                            <img src="https://skillicons.dev/icons?i=ts" className="w-6 transition duration-300 hover:scale-125" alt="TypeScript" />

                        </div>
                        <div className="text-center">
                            <p className="text-lg text-gray-600 mb-4">Projeto Blog Pessoal</p>
                        </div>
                        {/* Centralizando o GitHub */}
                        <div className="p flex justify-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="bg-blue-800 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700 hover:scale-110"
                            >
                                {isOpen ? 'Fechar' : 'Abrir'} Detalhes
                            </button>    
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-slate-800 rounded-xl shadow-md p-4 max-w-xs mb-4 mx-auto">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-2">Drogaria São Paulo</h2>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={fotoprojeto}
                                alt="Foto de Lucas Daniel"
                                className="w-3/4 h-3/4 rounded-md mb-4 mx-auto transition duration-300 hover:scale-110"
                            />
                        </div>
                        <div className="flex justify-center gap-4 mb-4">
                            <img src="https://skillicons.dev/icons?i=java" className="w-6 transition duration-300 hover:scale-125" alt="Java" />
                            <img src="https://skillicons.dev/icons?i=spring" className="w-6 transition duration-300 hover:scale-125" alt="Spring" />
                            <img src="https://skillicons.dev/icons?i=react" className="w-6 transition duration-300 hover:scale-125" alt="React" />
                            <img src="https://skillicons.dev/icons?i=tailwind" className="w-6 transition duration-300 hover:scale-125" alt="TailwindCSS" />
                            <img src="https://skillicons.dev/icons?i=ts" className="w-6 transition duration-300 hover:scale-125" alt="TypeScript" />

                        </div>
                        <div className="text-center">
                            <p className="text-lg text-gray-600 mb-4">Projeto de farmácia</p>
                        </div>
                        {/* Centralizando o GitHub */}
                        <div className="p flex justify-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="bg-blue-800 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700 hover:scale-110"
                            >
                                {isOpen ? 'Fechar' : 'Abrir'} Detalhes
                            </button>    
                        </div>
                    </div>
                </div>
                
                <div
                                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="mt-4 bg-gray-100 p-4 rounded text-black">
                                    Este é o conteúdo colapsável. Você pode colocar texto, imagens, ou até outro componente aqui.
                                </p>
                            </div>
            </div>
        
        </div>
    );
}

export default Projetosfullstack;