import Footer from "../components/footer/Footer"
import NavBar from "../components/navbar/NavBar"
import lucas from "../../src/assets/images/lucas.png";


function Home() {
    return (
        <>
            <NavBar />
            <div className="bg-black flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            hello!
                        </h2>
                        <p className='text-xl'>
                            Meu nome é Lucas Daniel, sou desenvolvedor fullstack e estou em busca de uma oportunidade na área.
                        </p>
                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src={lucas}
                            alt="Imagem Página Home"
                            className="w-48 rounded-full transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home