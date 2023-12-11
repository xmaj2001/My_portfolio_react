import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import SobreI from '../Components/SobreI';
export default function Home() {
    return (
        <>

            <Header />
            <Navbar />

            <main>
                <section className="container-fluid">
                    <SobreI/>
                </section>
                <section className="section bg-dark py-5">
                    <div className="container text-center">
                        <h2 className="text-light mb-5 font-weight-normal">Estou disponível para FreeLancer</h2>
                        <button className="btn bg-primary w-lg">Contrata-me</button>
                    </div>
                </section>
                {/* Portfolio Section */}
                <section className="section bg-custom-gray" id="portfolio">
                    <div className="container">
                        <h1 className="mb-5"><span className="text-danger">Meu</span> Portfolio</h1>
                        <div className="portfolio">
                            <div className="filters">
                                <Link to={"#"} data-filter=".new" className="active">
                                    Novo
                                </Link>
                                <Link to={"#"} data-filter=".advertising">
                                    Desktop
                                </Link>
                                <Link to={"#"} data-filter=".branding">
                                    Designer
                                </Link>
                                <Link to={"#"} data-filter=".web">
                                    Web
                                </Link>

                                <Link to={"#"} data-filter=".web">
                                    Mobile
                                </Link>
                            </div>
                        </div>

                        <div className="portfolio-container">

                        </div>
                    </div>
                </section>
                {/* Section Contactos */}
                <section className="section contact" id="contact">
                   
                </section>
            </main >
        </>
    )
}