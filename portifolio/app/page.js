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
    <main className="mx-[80px] mt-[40px]">
      {/*header*/}
      <header className="header_container">
        <div className="flex gap-[180px] items-center">
          <h1 className="header_text">Lucas Fernandes</h1>
          <a className="button_header" href="#top">
            Home
          </a>
          <a className="button_header">Experience</a>
          <a className="button_header">Projects</a>
          <a className="button_header">Social</a>
          <a className="button_header">Aura</a>
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

      <section id="top" className="flex gap-20 justify-center flex-col mt-10">
        {/*texto animado (talvez animado XD)*/}
        <div className="animated_txt">
          <h2 className="txt">Welcome!_</h2>
        </div>

        {/*descricao + foto redonda com expand*/}
        <div className="common">
          <p className="about_text">
            Formado pelo Colégio Madre de Deus e atualmente estudante de{" "}
            <strong className="text-[#e83151]">Ciências da Computação</strong>{" "}
            na Universidade Católica de Pernambuco.
          </p>
          <p className="about_text">
            Sou uma pessoa curiosa e tranquila, que prefere ouvir mais do que
            falar, mas sempre respondo de forma cordial e aberta quando me
            procuram.
          </p>
          <p className="about_text">
            Desde meu primeiro contato com a programação, desenvolvi diversos
            projetos voltados para aprendizado prático e aplicação no mercado.
          </p>
          <p className="about_text">
            Tenho experiência em linguagens como{" "}
            <strong className="text-[#e83151]">
              C, C++, Java, JavaScript, HTML5, CSS3 e Python
            </strong>
            , e estou constantemente buscando evoluir, adquirindo novos
            conhecimentos e certificações que fortaleçam meu repertório.
          </p>
        </div>
      </section>
    </main>
  );
}
