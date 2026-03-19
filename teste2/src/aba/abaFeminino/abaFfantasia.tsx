import { useState } from "react";
import logo from "../../imagens/logo.png"
import { Link } from "react-router-dom";

function FEMININOFANTASIA() {
  
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  return (
    /*div principal*/
    <div className="min-h-screen h-screen overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {/*background*/}
      <div className="bg-gray-200 h-screen w-screen">
        {/*header*/}
        <div className="bg-emerald-500 h-20 flex">
          {/*imagem*/}
          <div className="flex items-center">
            <img className="h-24 w-50" src={logo} alt="" />
          </div>
          {/*nav bar*/}
          <div className="flex flex-col items-center mr-20 ml-20  ">
            <button
              onClick={() => setDropdown((v) => !v)}
              className="text-white relative top-7 cursor-pointer"
            >
              Meninos
            </button>
            {dropdown && (
              <div className="bg-gray-300 shadow-2xl rounded-2xl flex flex-col absolute top-15 ">
                <Link
                  to="/MasculinoCurto"
                  className="text-black pr-10 pl-10 pb-2 pt-2 hover:bg-gray-500 rounded-t-2xl cursor-pointer"
                >
                  Pijamas Curtos
                </Link>
                <Link
                  to="/MasculinoLongo"
                  className="text-black pr-10 pl-10 pb-2 pt-2 hover:bg-gray-500  cursor-pointer"
                >
                  Pijamas Longos
                </Link>
                <Link
                  to="/MasculinoFantasia"
                  className="text-black pr-10 pl-10 pb-3 pt-2 hover:bg-gray-500 rounded-b-2xl cursor-pointer"
                >
                  Pijamas Fantasias
                </Link>
              </div>
            )}
          </div>
          {/*nav bar 2*/}
          <div className="flex flex-col items-center mr-20  ">
            <Link className="text-white relative top-7 cursor-pointer" to={'/'}>
            Home
            </Link>
          </div>
          {/*nav bar 3*/}
          <div className="flex flex-col items-center    ">
            <button
              onClick={() => setDropdown2((v) => !v)}
              className="text-white relative top-7 cursor-pointer"
            >
              Bebê
            </button>
            {dropdown2 && (
              <div className="bg-gray-300 shadow-2xl rounded-2xl flex flex-col absolute top-15 ">
                <Link
                  to="/BebeCurto"
                  className="text-black pr-10 pl-10 pb-2 pt-2 hover:bg-gray-500 rounded-t-2xl cursor-pointer"
                >
                  Pijamas Curtos
                </Link>
                <Link
                  to="/BebeLongo"
                  className="text-black pr-10 pl-10 pb-2 pt-2 hover:bg-gray-500  cursor-pointer"
                >
                  Pijamas Longos
                </Link>
                <Link
                  to="/BebeFantasia"
                  className="text-black pr-10 pl-10 pb-3 pt-2 hover:bg-gray-500 rounded-b-2xl cursor-pointer"
                >
                  Pijamas Fantasias
                </Link>
              </div>
            )}
          </div>
            {/*Barra de pesquisa e botao*/}
          <div className=" flex items-center justify-end w-screen">
            <input
              className=" rounded-2xl border-2 pl-2 mr-5 w-100 h-9 bg-gray-100  border-gray-400"
              type="text"
              placeholder="Pesquisa aqui"
            />
            <button className="bg-white w-28 h-9 rounded-2xl mr-5 hover:bg-gray-200 cursor-pointer">
              Pesquisar
            </button>
          </div>
          
        </div>
        <div>
            <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default FEMININOFANTASIA;
