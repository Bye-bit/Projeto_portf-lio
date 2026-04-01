"use client";

import { use, useState } from "react";
import "./forca.css";
import Link from "next/link";

export default function Forca() {
  const palavras = [
    /*Frutas:*/
    { palavra: "banana", dica: "fruta" },
    { palavra: "abacaxi", dica: "fruta" },
    { palavra: "abacate", dica: "fruta" },
    { palavra: "pitaya", dica: "fruta" },
    { palavra: "graviola", dica: "fruta" },
    { palavra: "maracuja", dica: "fruta" },
    { palavra: "coco", dica: "fruta" },
    { palavra: "caju", dica: "fruta" },
    { palavra: "laranja", dica: "fruta" },
    { palavra: "jaca", dica: "fruta" },

    /*Objetos:*/
    { palavra: "microfone", dica: "objeto" },
    { palavra: "computador", dica: "objeto" },
    { palavra: "caixa", dica: "objeto" },
    { palavra: "copo", dica: "objeto" },
    { palavra: "livro", dica: "objeto" },
    { palavra: "metralhadora", dica: "objeto" },
    { palavra: "pistola", dica: "objeto" },
    { palavra: "espada", dica: "objeto" },
    { palavra: "bola", dica: "objeto" },
    { palavra: "halter", dica: "objeto" },

    /*Profissões:*/
    { palavra: "medico", dica: "Profissao" },
    { palavra: "jardineiro", dica: "Profissao" },
    { palavra: "advogado", dica: "Profissao" },
    { palavra: "contador", dica: "Profissao" },
    { palavra: "programador", dica: "profissao" },
    { palavra: "ator", dica: "Profissao" },
    { palavra: "policial", dica: "Profissao" },
    { palavra: "fonoaudiologo", dica: "Profissao" },
    { palavra: "bombeiro", dica: "Profissao" },
    { palavra: "paleontologo", dica: "Profissao" },

    /*Animais*/
    { palavra: "hiena", dica: "Animal" },
    { palavra: "lontra", dica: "Animal" },
    { palavra: "tubarao", dica: "Animal" },
    { palavra: "raposa", dica: "Animal" },
    { palavra: "elefante", dica: "Animal" },
    { palavra: "aranha", dica: "Animal" },
    { palavra: "golfinho", dica: "Animal" },
    { palavra: "gato", dica: "Animal" },
    { palavra: "cachorro", dica: "Animal" },
    { palavra: "rato", dica: "Animal" },

    /*Jogos de terror*/

    { palavra: "outlast", dica: "Jogo de terror" },
    { palavra: "alien isolation", dica: "Jogo de terror" },
    { palavra: "phasmophobia", dica: "Jogo de terror" },
    { palavra: "the forest", dica: "Jogo de terror" },
    { palavra: "amnesia", dica: "Jogo de terror" },
    { palavra: "dead space", dica: "Jogo de terror" },
    { palavra: "darkwood", dica: "Jogo de terror" },
    { palavra: "silent hill", dica: "Jogo de terror" },
    { palavra: "mimesis", dica: "Jogo de terror" },
    { palavra: "visage", dica: "Jogo de terror" },
  ];

  const [palavraEscolhida, setPalavraEscolhida] = useState(null);
  const linhas = [
    "qwertyuiop".split(""),
    "asdfghjkl".split(""),
    "zxcvbnm".split(""),
  ];
  const [letrasUsadas, setLetrasUsadas] = useState([]);

  const [erros, setErros] = useState(0);

  const maxErros = 6;

  const perdeu = erros >= maxErros;

  const venceu = palavraEscolhida?.palavra
    .split("")
    .every((letra) => letra === " " || letrasUsadas.includes(letra));

  function tentarLetra(letra) {
    if (letrasUsadas.includes(letra)) return;

    setLetrasUsadas([...letrasUsadas, letra]);

    if (!palavraEscolhida.palavra.includes(letra)) {
      setErros(erros + 1);
    }
  }

  function escolherPalavra() {
    const nova = Math.floor(Math.random() * palavras.length);
    setPalavraEscolhida(palavras[nova]);
    setLetrasUsadas([]);
    setErros(0);
  }

  return (
    <>
      <header className="header_container">
        <div className="flex gap-[180px] items-center">
          <h1 className="header_text">Jogo da forca</h1>
          <Link className="button_header" href="/">
            Home
          </Link>
        </div>
      </header>
      <div className={`forca-container ${erros > 0 ? "erro" : ""}`}>
        <svg width="200" height="250" className="forca-svg">
          <line
            x1="10"
            y1="240"
            x2="150"
            y2="240"
            stroke="black"
            strokeWidth="4"
          />
          <line
            x1="40"
            y1="240"
            x2="40"
            y2="20"
            stroke="black"
            strokeWidth="4"
          />
          <line
            x1="40"
            y1="20"
            x2="120"
            y2="20"
            stroke="black"
            strokeWidth="4"
          />
          <line
            x1="120"
            y1="20"
            x2="120"
            y2="40"
            stroke="black"
            strokeWidth="4"
          />

          {erros >= 1 && (
            <circle
              cx="120"
              cy="55"
              r="15"
              stroke="black"
              strokeWidth="3"
              fill="none"
            />
          )}

          {erros >= 2 && (
            <line
              x1="120"
              y1="70"
              x2="120"
              y2="130"
              stroke="black"
              strokeWidth="3"
            />
          )}

          {erros >= 3 && (
            <line
              x1="120"
              y1="90"
              x2="90"
              y2="110"
              stroke="black"
              strokeWidth="3"
            />
          )}

          {erros >= 4 && (
            <line
              x1="120"
              y1="90"
              x2="150"
              y2="110"
              stroke="black"
              strokeWidth="3"
            />
          )}

          {erros >= 5 && (
            <line
              x1="120"
              y1="130"
              x2="95"
              y2="170"
              stroke="black"
              strokeWidth="3"
            />
          )}

          {erros >= 6 && (
            <line
              x1="120"
              y1="130"
              x2="145"
              y2="170"
              stroke="black"
              strokeWidth="3"
            />
          )}
        </svg>
        {!palavraEscolhida && (
          <button onClick={escolherPalavra}>Escolher Palavra</button>
        )}
        {palavraEscolhida && (
          <div className="dica-container">
            <p>Dica: {palavraEscolhida.dica}</p>

            <p>
              {palavraEscolhida.palavra.split("").map((letra, index) => {
                if (letra == " ") {
                  return <span key={index} className="espaco"></span>;
                }
                if (perdeu || letrasUsadas.includes(letra)) {
                  return (
                    <span key={index} className="letra">
                      {letra}
                    </span>
                  );
                }
                return <span key={index} className="letra"></span>;
              })}
            </p>

            <div className="teclado">
              {linhas.map((linha, i) => (
                <div key={i} className="linha">
                  {linha.map((letra) => (
                    <button
                      key={letra}
                      onClick={() => tentarLetra(letra)}
                      disabled={
                        letrasUsadas.includes(letra) || perdeu || venceu
                      }
                    >
                      {letra}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
        {perdeu && (
          <p>
            <strong>Você perdeu!</strong>
          </p>
        )}
        {venceu && (
          <p>
            <strong>Você venceu!</strong>
          </p>
        )}
        {(venceu || perdeu) && (
          <button onClick={escolherPalavra}>Jogar Novamente</button>
        )}
      </div>
    </>
  );
}
