import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/33168327?s=460&u=300908967953287d6109cbadc244615e2867f2fc&v=4" alt="Filippe Pimentel" />
                <div>
                    <strong>Filippe Pimentel</strong>
                    <span>Programação</span>
                </div>
            </header>
            <p>
                Programação é o processo de escrita, teste e manutenção de um programa de computador.
                    <br /><br />
                    O programa é escrito em uma linguagem de programação,
                    embora seja possível, com alguma dificuldade, escrevê-lo diretamente em linguagem de máquina.
                    <br /><br />
                    Diferentes partes de um programa podem ser escritas em diferentes linguagens.
                    </p>
            <footer>
                <p>
                    Preço/Hora
                            <strong>R$ 30,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;