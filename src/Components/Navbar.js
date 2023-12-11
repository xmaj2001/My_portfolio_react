import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
                <div className="container">
                    <Link to={"/"} className="navbar-brand w3-hide-large text-primary" ><b className="f-xmaj">X</b><span className="f-xmaj">-MAJ</span></Link>
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="#home" className="nav-link"><i className="ti-home pr-2"></i>Pricipal</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#about" className="nav-link"><i className="ti-user pr-2"></i>Sobre</Link>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown d-inline-block">
                                    <button className="nav-link btn btn-link dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Páginas
                                    </button>
                                    <div className="dropdown-menu dropdown" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" >
                                        <Link className="dropdown-item" to={"#"}>Não Disponível</Link>
                                        <Link className="dropdown-item" to={"#"}></Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav brand">
                            <img src="assets/imgs/avatar.jpg" alt="" className="brand-img"/>
                                <li className="brand-txt">
                                    <h5 className="brand-title f-xmaj">X-MAJ</h5>
                                    <small className="brand-subtitle">Xavier Moisés Alberto José</small>
                                </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"#portfolio"} className="nav-link">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"https://github.com/xmaj2001"} className="nav-link"><i className="icon-github pr-1"></i> GitHub</Link>
                            </li>
                            <li className="nav-item last-item">
                                <Link to={"#contact"} className="nav-link">Contactos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;