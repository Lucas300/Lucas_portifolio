import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import lucas from "../assets/images/lucas.png";
import background from "../assets/images/background.png";
import React from "react";

function Home() {
    return (
        <>
            <div
                className="bg-black bg-cover bg-center bg-no-repeat flex justify-center" style={{ backgroundImage: `url(${background})`}}>
                <div className="container grid grid-cols-1 text-white mt-20 mb-32">
                    <div className="flex flex-col gap-4 items-center justify-end py-4">
                        <h2 className="text-8xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text">
                            Lucas Daniel
                        </h2>
                        <p className="text-4xl">Desenvolvedor fullstack Java.</p>
                        <div className="flex justify-around gap-4">
                            <div className="flex gap-2">
                                <a
                                    className="hover:scale-125"
                                    href="https://www.linkedin.com/in/lucas-daniel-souza-dias/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <LinkedinLogo size={50} weight="bold" />
                                </a>
                                <a
                                    className="hover:scale-125"
                                    href="https://github.com/Lucas300"
                                    target="_blank"
                                >
                                    <GithubLogo size={50} weight="bold" />
                                </a>
                                <a
                                    className="hover:scale-125"
                                    href="https://www.instagram.com/lucas.kardashiann/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <InstagramLogo size={50} weight="bold" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home