"use client";
import { useEffect } from "react";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { EB_Garamond } from "next/font/google";

export default function Home() {
  const enableLightmode = () => {
    document.body.classList.add("lightmode");
    localStorage.setItem("lightmode", "active");
  };

  const disableLightmode = () => {
    document.body.classList.remove("lightmode");
    localStorage.setItem("lightmode", "null");
  };

  useEffect(() => {
    let lightmode = localStorage.getItem("lightmode");
    if (lightmode === "active") enableLightmode();
  });

  const handleClick = () => {
    let lightmode = localStorage.getItem("lightmode");
    lightmode !== "active" ? enableLightmode() : disableLightmode();
  };

  return (
    <main className="">
      {/*header*/}
      <header className="header_container">
        <div className="flex gap-[180px] items-center">
          <h1 className="header_text">Lucas Fernandes</h1>
          <a className="button_header" href="#home">
            Home
          </a>
          <a className="button_header" href="#Projects">
            Projects
          </a>
          <a href="#socials" className="button_header">
            Socials
          </a>
          <a href="#forca" className="button_header">
            Forca
          </a>
        </div>
        <button id="theme-switch" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#e3e3e3"
          >
            <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#e3e3e3"
          >
            <path d="M338.5-338.5Q280-397 280-480t58.5-141.5Q397-680 480-680t141.5 58.5Q680-563 680-480t-58.5 141.5Q563-280 480-280t-141.5-58.5ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z" />
          </svg>
        </button>
      </header>

      <section
        id="home"
        className="flex gap-20 justify-start flex-col min-h-screen mt-45"
      >
        {/*texto animado (talvez animado XD)*/}
        <div className="animated-txt">
          <h2 className="txt">Welcome!_</h2>
        </div>

        {/*descricao + foto redonda com expand*/}
        <div className="flex  justify-evenly items-center gap-20">
          <div className="common">
            <p className="about-text">
              Formado pelo Colégio Madre de Deus e atualmente estudante de{" "}
              <strong className="text-[#e83151]">Ciências da Computação</strong>{" "}
              na Universidade Católica de Pernambuco.
            </p>
            <p className="about-text">
              Sou uma pessoa curiosa e tranquila, que prefere ouvir mais do que
              falar, mas sempre respondo de forma cordial e aberta quando me
              procuram.
            </p>
            <p className="about-text">
              Desde meu primeiro contato com a programação, desenvolvi diversos
              projetos voltados para aprendizado prático e aplicação no mercado.
            </p>
            <p className="about-text">
              Tenho experiência em linguagens como{" "}
              <strong className="text-[#e83151]">
                C, C++, Java, JavaScript, HTML5, CSS3 e Python
              </strong>
              , e estou constantemente buscando evoluir, adquirindo novos
              conhecimentos e certificações que fortaleçam meu repertório.{" "}
              <strong className="text-[#e83151]">:)</strong>
            </p>
            <div className="about-me-socials">
              <a href="https://github.com/Bye-bit">
                <svg
                  fill="var(--accent-color)"
                  width="48px"
                  height="48px"
                  viewBox="0 -0.5 25 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022 0-.044 0-.066 0h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/fer.lucas2?igsh=ZWxqeG43MjVhMzRx">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="var(--accent-color)"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/lucas-fernandes-nunes-machado-dev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="var(--accent-color)"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
            </div>
          </div>

          {/*foto redonda ( se deus quiser ela fica redonda ) */}
          <div className="foto2">
            <Image
              className="foto"
              width={300}
              height={300}
              alt="Me"
              src="/Me.jpeg"
            ></Image>
          </div>
        </div>
      </section>

      <section id="Projects" className="min-h-screen">
        <div className="flex gap-[30px] justify-center flex-col items-center">
          <div className="projects-title">Projects</div>
          <p className="projects-text">
            <strong className="text-[#e83151]">
              Aqui estão alguns dos meus projetos: :)
            </strong>
          </p>

          <div className="grid grid-cols-3 gap-15 mt-35">
            {/* CARD */}
            <div className="project-card">
              <img
                src="/projeto1.png"
                alt="Projeto 1"
                className="project-img"
              />

              <h4 className="project-title">StonksViewer</h4>

              <p className="project-desc">
                Sistema em feito em Python utilizando o framework Django
              </p>

              <a
                href="https://github.com/LucasMN0/stonks-viewer"
                target="_blank"
                className="project-btn"
              >
                Ver no GitHub
              </a>
            </div>

            <div className="project-card">
              <img
                src="/projeto2.png"
                alt="Projeto 2"
                className="project-img"
              />

              <h5 className="project-title">CardapIA</h5>

              <p className="project-desc">
                Sistema feito em Javascript utilizando a API do gemini para
                gerar receitas saudaveis automaticamente
              </p>

              <a
                href="https://github.com/LettyciaDev/PROJETO-WEB-MOBILE"
                target="_blank"
                className="project-btn"
              >
                Ver no GitHub
              </a>
            </div>
            <div className="project-card">
              <img
                src="/projeto3.png"
                alt="Projeto 3"
                className="project-img"
              />

              <h6 className="project-title">App de musicas</h6>

              <p className="project-desc">
                Sistema em feito em java usando arquivos para armazenar as
                musicas e playlists, com interface feita em javaFX
              </p>

              <a
                href="https://github.com/joao0cb/Projeto-POO"
                target="_blank"
                className="project-btn"
              >
                Ver no GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="forca" className="min-h-screen">
        <div className="flex gap-[30px] justify-center flex-col items-center">
          <div className="projects-title">Jogo da Forca</div>
          <p className="projects-text">
            <strong className="text-[#e83151]">
              Aqui esta o Jogo da forca :)
            </strong>
          </p>
          <svg width="220" height="260" viewBox="0 0 220 260">
            <line
              x1="10"
              y1="250"
              x2="180"
              y2="250"
              stroke="#111"
              strokeWidth="4"
            />

            <line
              x1="50"
              y1="250"
              x2="50"
              y2="20"
              stroke="#111"
              strokeWidth="4"
            />

            <line
              x1="50"
              y1="20"
              x2="140"
              y2="20"
              stroke="#111"
              strokeWidth="4"
            />

            <line
              x1="140"
              y1="20"
              x2="140"
              y2="50"
              stroke="#111"
              strokeWidth="3"
            />

            <circle
              cx="140"
              cy="70"
              r="18"
              stroke="#111"
              strokeWidth="3"
              fill="none"
            />

            <line
              x1="140"
              y1="88"
              x2="140"
              y2="150"
              stroke="#111"
              strokeWidth="3"
            />

            <line
              x1="140"
              y1="105"
              x2="105"
              y2="125"
              stroke="#111"
              strokeWidth="3"
            />

            <line
              x1="140"
              y1="105"
              x2="175"
              y2="125"
              stroke="#111"
              strokeWidth="3"
            />

            <line
              x1="140"
              y1="150"
              x2="110"
              y2="200"
              stroke="#111"
              strokeWidth="3"
            />

            <line
              x1="140"
              y1="150"
              x2="170"
              y2="200"
              stroke="#111"
              strokeWidth="3"
            />

            <circle
              cx="140"
              cy="50"
              r="6"
              stroke="#111"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          <a href="/forca" className="project-btn">
            <strong>Jogar agora!</strong>
          </a>
        </div>
      </section>

      <footer id="socials">
        <div className="footer-container">
          <p className="footer-text">Socials</p>

          <div className="footer-right">
            <div className="footer-item">
              <strong>Email:</strong>
              <span>lucasfernandes.sqn@gmail.com</span>
            </div>

            <div className="footer-item">
              <strong>Numero:</strong>
              <span>+55 981872602</span>
            </div>

            <div className="footer-item">
              <strong>Instagram:</strong>
              <span>@fer.lucas2</span>
            </div>

            <div className="footer-item">
              <strong>Github:</strong>
              <span>Bye-bit</span>
            </div>

            <div className="footer-item">
              <strong>LinkedIn:</strong>
              <span>@LucasFernandes</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
