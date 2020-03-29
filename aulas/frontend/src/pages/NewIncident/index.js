import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";
import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>
                        Descreva o caso detalhadamente para encontar um herói
                        para resolver isso.
                    </p>
                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para o home
                    </Link>
                </section>
                <form>
                    <input type="text" placeholder="Título do caso" />
                    <textarea type="email" placeholder="Descrição" />
                    <input type="text" placeholder="Valor em reais" />

                    <button type="submit" class="button">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}
