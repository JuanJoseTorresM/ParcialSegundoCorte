import Navbar from "../components/Navbar";
import TextoHome from "../components/TextoHome";
import TituloHome from "../components/TituloHome";

const Home = () => {
    return (
        <>

            <div className="bg-[url('./images/Recurso1.png')] bg-cover bg-no-repeat min-h-screen">
                <Navbar />
                <TituloHome />
                <TextoHome />
            </div>
        </>
    )
}
export default Home;