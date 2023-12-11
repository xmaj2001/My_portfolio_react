import { Link } from "react-router-dom";
import Skill from "./Skill";

function SobreI() {
    return (
        <>
            <div id="about" className="row about-section">
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light pulse wow">Quem sou eu?</h3>
                    <span className="line mb-5"></span>
                    <h5 className="mb-3 pulse wow" data-wow-delay="0.2s">Sou Desenvolvidor multifacetado</h5>
                    <p className="mt-20 fadeIn wow">Apaixonado por Astronomínha, Programação, Jogos e criação de Sites.
                        Compartilho dicas úteis e Tutorias para iniciantes no mundo da Programação,
                        Explorando novas fronteiras no universo digital.
                        Visita meu Canal
                        <Link to={""} className="btn w3-transparent btn-rounded bounceIn wow" data-wow-delay="0.5s">
                            <i className="icon-youtube-play icon-md " ></i>
                        </Link>
                        lá tem vídeos interessante ou meu GitHub
                        <Link to={""} className="btn w3-transparent btn-rounded bounceIn wow" data-wow-delay="0.5s">
                            <i className="icon-github icon-md" ></i>
                        </Link>
                        onde tem alguns projectos.
                    </p>
                    <button className="btn btn-outline-danger bounceIn wow"><i className="icon-download "></i> Baixar meu CV</button>
                </div>
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light pulse wow">Informações de Contactos</h3>
                    <span className="line mb-5"></span>
                    <ul className="mt40 info list-unstyled">
                        <li className="fadeInDown wow" data-wow-delay="0.5s"><span>Email</span> : xmaj2001@gmail.com</li>
                        <li className="fadeInDown wow" data-wow-delay="0.4s"><span>Telefone</span> : + (244) 944-083-160</li>
                        <li className="fadeInDown wow" data-wow-delay="0.3s"><span>Instagram</span> : xmaj_2001 </li>
                        <li className="fadeInDown wow" data-wow-delay="0.1s"><span>Localização</span> : Angola/ Luanda/ Golf2 / Talatona </li>
                    </ul>
                    <ul className="social-icons pt-3">
                        <li className="social-item fadeInLeft wow" data-wow-delay="0.2s"><Link className="social-link" to={"#"}><i className="icon-facebook"
                            aria-hidden="true"></i></Link></li>
                        <li className="social-item fadeInLeft wow" data-wow-delay="0.5s"><Link className="social-link" to={"#"}><i className="icon-twitter"
                            aria-hidden="true"></i></Link></li>
                        <li className="social-item fadeInLeft wow" data-wow-delay="0.6s"><Link className="social-link" to={"#"}><i className="icon-youtube-play"
                            aria-hidden="true"></i></Link></li>
                        <li className="social-item fadeInLeft wow" data-wow-delay="0.8s"><Link className="social-link" to={"#"}><i className="icon-instagram"
                            aria-hidden="true"></i></Link></li>
                        <li className="social-item fadeInLeft wow" data-wow-delay="0.9s"><Link className="social-link" to={"#"}><i className="icon-github"
                            aria-hidden="true"></i></Link></li>
                    </ul>
                </div>
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light bounceInLeft wow">Desenvolvidor</h3>
                    <span className="line mb-5"></span>

                    <div className="fadeInUp wow row" data-wow-delay="0.2s">
                        <div className="col-12 ml-auto mr-3">
                            <h6>WEB <i className="icon-web"></i></h6>
                            <p className="subtitle">PHP / NodeJS / React / </p>
                            <hr />
                        </div>
                    </div>
                    <div className="fadeInUp wow row" data-wow-delay="0.3s">
                        <div className="col-12 ml-auto mr-3">
                            <h6>Game <i className="icon-gamepad"></i></h6>
                            <p className="subtitle">Unity / Renpy</p>
                            <hr />
                        </div>
                    </div>
                    <div className="fadeInUp wow row" data-wow-delay="0.4s">
                        <div className="col-12 ml-auto mr-3">
                            <h6>Mobile <i className="icon-mobile icon-md"></i></h6>
                            <p className="subtitle">AndroidStudio / Flutter / XamarinForm</p>
                            <hr />
                        </div>
                    </div>
                    <div className="fadeInUp wow row" data-wow-delay="0.2s">
                        <div className="col-12 ml-auto mr-3">
                            <h6>Desktop <i className="icon-desktop"></i></h6>
                            <p className="subtitle">C# / Python / Java</p>
                            <hr />
                        </div>
                    </div>
                    <div className="fadeInUp wow row" data-wow-delay="0.3s">
                        <div className="col-12 ml-auto mr-3">
                            <h6>Design <i className="icon-brush icon-lg"></i></h6>
                            <p className="subtitle">PhotoShop / Adobe XD</p>
                            <hr />
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Habilidades</h3>
                    <span className="line mb-5"></span>
                    <Skill titulo={"HTML5 & CSS3"} volume={"100%"} />
                    <Skill titulo={"JavaScript"} volume={"97%"} />
                    <Skill titulo={"NodeJS"} volume={"60%"} />
                    <Skill titulo={"React"} volume={"87%"} />
                    <Skill titulo={"PHP"} volume={"100%"} />
                    <Skill titulo={"SQL"} volume={"75%"} />
                </div>

                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Outras Habilidades</h3>
                    <span className="line mb-5"></span>
                    <Skill titulo={"C#"} volume={"100%"} />
                    <Skill titulo={"Python"} volume={"60%"} />
                    <Skill titulo={"Unity"} volume={"90%"} />
                    <Skill titulo={"Xamarin"} volume={"87%"} />
                    <Skill titulo={"Java"} volume={"70%"} />
                    <Skill titulo={"AndroidStudio"} volume={"75%"} />
                </div>

                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Idiomas</h3>
                    <span className="line mb-5"></span>
                    <Skill titulo={"Português"} volume={"100%"} />
                    <Skill titulo={"English"} volume={"10%"} />
                </div>
            </div>
        </>
    )
}

export default SobreI;