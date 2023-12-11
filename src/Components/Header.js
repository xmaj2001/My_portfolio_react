import { Link } from "react-router-dom";

function Header() {
    const style = {
        background: "red",
        border: "2px solid red"
    };
    return (
        <>
            <header className="header">
                <div className="container">
                    <ul className="social-icons pt-3">
                        <li className="social-item">
                            <Link className="social-link text-light bounceIn wow" to={"/"}><i className="icon-facebook"
                                aria-hidden="true"></i></Link></li>
                        <li className="social-item"><Link className="social-link text-light" to={"https://twitter.com/xmaj2001"}>
                            <i className="icon-twitter"
                                aria-hidden="true"></i></Link></li>
                        <li className="social-item"><Link className="social-link text-light" to={"https://www.youtube.com/xmaj2001"}><i className="icon-youtube-play"
                            aria-hidden="true"></i></Link></li>
                        <li className="social-item"><Link className="social-link text-light" to={"https://www.instagram.com/xmaj_2001"}><i className="icon-instagram"
                            aria-hidden="true"></i></Link></li>
                        <li className="social-item"><Link className="social-link text-light" to={"https://github.com/xmaj2001"}><i className="icon-github"
                            aria-hidden="true"></i></Link></li>
                    </ul>
                    <div className="header-content">
                        <h4 className="header-subtitle">
                            <span className="fadeIn wow">
                                Olá,
                            </span>
                            <span className="fadeIn wow" data-wow-delay="0.6s">
                                Sou
                            </span>
                        </h4>
                        <h1 className="header-title f-xmaj fadeIn wow" data-wow-delay="1s">X-MAJ</h1>
                        <div className="brand-subtitle fadeIn wow" data-wow-delay="1.5s">Xavier Moisés Alberto José</div>
                        <h6 className="header-mono fadeInLeft wow" data-wow-delay="2.2s">Desenvolvidor | Frond end & Designer</h6>
                        <span>Visita meu</span>
                        <br/>
                        <span className="w3-margin-top">
                            
                            <Link to={""} className="btn btn-dark btn-rounded bounceIn wow" data-wow-delay="2.5s">
                                GitHub <i className="icon-github pr-1"></i>
                            </Link>
                            <span className="d-online p-2 bounceIn wow" data-wow-delay="2.8s">OU</span>
                            <Link to={""} style={style} className="btn btn-danger btn-rounded bounceIn wow" data-wow-delay="3s">
                                Canal <i className="icon-youtube-play pr-1" ></i>
                            </Link>
                        </span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;