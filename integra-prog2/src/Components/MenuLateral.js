import { Link } from "react-router-dom"
import styles from "./MenuLateral.Modules.css"
function MenuLateral(){
    return(
        <div className="container">
            <nav className="menu-lateral">
                <ul>
                    <li className="item-menu">
                        <a href="#">
                            <span className="icon"><i class="bi bi-house"></i></span>
                            <span className="txt-link"><Link to="/InicioAluno">Incio</Link></span>
                        </a>
                    </li>
                    <li className="item-menu">
                        <a href="#">
                            <span className="icon"><i class="bi bi-book"></i></span>
                            <span className="txt-link"><Link to="/Aulas">Aulas</Link></span>
                        </a>
                    </li>
                    <li className="item-menu">
                        <a href="#">
                            <span className="icon"><i class="bi bi-cone-striped"></i></span>
                            <span className="txt-link"><Link to="/Treinos">Treinos</Link></span>
                        </a>
                    </li>
                    <li className="item-menu">
                        <a href="#">
                            <span className="icon"><i class="bi bi-calendar2-date"></i></span>
                            <span className="txt-link"><Link to="/Agenda">Avaliação</Link></span>
                        </a>
                    </li><li className="item-menu">
                        <a href="#">
                            <span className="icon"><i class="bi bi-cash"></i></span>
                            <span className="txt-link"><Link to="/Pagamentos">Financeiro</Link></span>
                        </a>
                    </li><li className="item-menu">
                        <a href="#">
                            <span className="icon"><i class="bi bi-gear"></i></span>
                            <span className="txt-link"><Link to="/Configuracoes">Configurações</Link></span>
                        </a>
                    </li>
                    <li className="item-menu">
                        <a href="#">
                            <span className="icon"><i class="bi bi-graph-up-arrow"></i></span>
                            <span className="txt-link"><Link to="/Relatorios">Relatórios</Link></span>
                        </a>
                    </li>
                    


                </ul>
            </nav>
        </div>
    )
}
export default MenuLateral