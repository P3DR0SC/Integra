import { Link } from "react-router-dom"
import styles from "./MenuProfessor.Modules.css"
function MenuProfessor(){
    return(
        <div className="containerP">
            <nav className="menu-lateralP">
                <ul>
                    <li className="item-menuP">
                        <a href="#">
                            <span className="icon"><i class="bi bi-house"></i></span>
                            <span className="txt-link"><Link to="/Dashboard">Incio</Link></span>
                        </a>
                    </li>
                    <li className="item-menuP">
                        <a href="#">
                            <span className="icon"><i class="bi bi-book"></i></span>
                            <span className="txt-link"><Link to="/Pessoas">Pessoas</Link></span>
                        </a>
                    </li>
                    <li className="item-menuP">
                        <a href="#">
                            <span className="icon"><i class="bi bi-cone-striped"></i></span>
                            <span className="txt-link"><Link to="/Cadastros">Cadastros</Link></span>
                        </a>
                    </li>
                    <li className="item-menuP">
                        <a href="#">
                            <span className="icon"><i class="bi bi-calendar2-date"></i></span>
                            <span className="txt-link"><Link to="/Matriculas">Matriculas</Link></span>
                        </a>
                    </li><li className="item-menuP">
                        <a href="#">
                            <span className="icon"><i class="bi bi-cash"></i></span>
                            <span className="txt-link"><Link to="/FinanceiroAdm">Financeiro</Link></span>
                        </a>
                    </li><li className="item-menuP">
                        <a href="#">
                            <span className="icon"><i class="bi bi-gear"></i></span>
                            <span className="txt-link"><Link to="/Configuracoes">Caixas</Link></span>
                        </a>
                    </li>
                    <li className="item-menuP">
                        <a href="#">
                            <span className="icon"><i class="bi bi-graph-up-arrow"></i></span>
                            <span className="txt-link"><Link to="/AgendaAdm">Tarefas/Agenda</Link></span>
                        </a>
                    </li>
                    


                </ul>
            </nav>
        </div>
    )
}
export default MenuProfessor