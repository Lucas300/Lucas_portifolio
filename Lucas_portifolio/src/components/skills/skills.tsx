import React from "react";
import background from "../../assets/images/fundos/background.png";

function Skills() {
        return (
        <div className="bg-gray-900 text-white py-10" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex flex-col gap-4 items-center justify-end py-4">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text">
                        Minhas Skills
                </h2>
            </div>
            <div className="bg-zinc-900 text-white p-8 rounded-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-6">
                {/* Linguagens */}
                <div>
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    📘 Linguagens
                </h3>
                <div className="flex flex-wrap gap-2">
                    <img src="https://skillicons.dev/icons?i=html" className="w-10" alt="HTML" />
                    <img src="https://skillicons.dev/icons?i=css" className="w-10" alt="CSS" />
                    <img src="https://skillicons.dev/icons?i=js" className="w-10" alt="JavaScript" />
                    <img src="https://skillicons.dev/icons?i=ts" className="w-10" alt="TypeScript" />
                    <img src="https://skillicons.dev/icons?i=java" className="w-10" alt="Java" />
                    <img src="https://skillicons.dev/icons?i=cs" className="w-10" alt="C#" />
                    <img src="https://skillicons.dev/icons?i=php" className="w-10" alt="PHP" />
                </div>
                </div>

                {/* Frameworks */}
                <div>
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    ⚙️ Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                    <img src="https://skillicons.dev/icons?i=react" className="w-10" alt="React" />
                    <img src="https://skillicons.dev/icons?i=spring" className="w-10" alt="Spring" />
                    <img src="https://skillicons.dev/icons?i=tailwind" className="w-10" alt="TailwindCSS" />
                    <img src="https://skillicons.dev/icons?i=bootstrap" className="w-10" alt="Bootstrap" />
                </div>
                </div>

                {/* Ferramentas */}
                <div>
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    🛠️ Ferramentas
                </h3>
                <div className="flex flex-wrap gap-2">
                    <img src="https://skillicons.dev/icons?i=vscode" className="w-10" alt="VSCode" />
                    <img src="https://skillicons.dev/icons?i=eclipse" className="w-10" alt="Eclipse" />
                    <img src="https://skillicons.dev/icons?i=idea" className="w-10" alt="IntelliJ" />
                    <img src="https://skillicons.dev/icons?i=vite" className="w-10" alt="Vite" />
                </div>
                </div>

                {/* DevOps */}
                <div>
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    🚀 DevOps
                </h3>
                <div className="flex flex-wrap gap-2">
                    <img src="https://skillicons.dev/icons?i=git" className="w-10" alt="Git" />
                    <img src="https://skillicons.dev/icons?i=github" className="w-10" alt="GitHub" />
                    <img src="https://skillicons.dev/icons?i=vercel" className="w-10" alt="Vercel" />
                </div>
                </div>

                {/* Banco de Dados */}
                <div>
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    🗄️ Banco de Dados
                </h3>
                <div className="flex flex-wrap gap-2">
                    <img src="https://skillicons.dev/icons?i=mysql" className="w-10" alt="MySQL" />
                    <img src="https://skillicons.dev/icons?i=postgresql" className="w-10" alt="PostgreSQL" />
                    <img src="https://skillicons.dev/icons?i=hibernate" className="w-10" alt="MongoDB" />
                </div>
                </div>
            </div>
            </div>

        </div>
    );
}

export default Skills;