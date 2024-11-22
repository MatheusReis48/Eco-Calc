import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Seção 1: Texto Inicial */}
      <section 
        id="section-home" 
        className="flex-grow min-h-screen bg-[#4F7942] flex items-center justify-end p-8" 
        style={{ 
          backgroundImage: `url(/mao-com-planta.jpg)`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'right' 
        }}
      >
        <div className="text-right w-full max-w-5xl">
          <img 
            src="/EcoCALC.png" 
            alt="EcoCalc" 
            className="flex float-right" 
          />
          <h1 className="text-3xl font-bold text-[#1ea13099]">Bem-vindo ao EcoCalc</h1>
          <p className="text-lg mt-4 text-gray-600">
            O EcoCalc é uma plataforma desenvolvida para ajudar você a calcular a economia gerada pela utilização de energia solar em sua residência. 
            Nosso objetivo é fornecer uma maneira simples e eficiente de calcular o impacto da energia solar no seu bolso, promovendo o uso sustentável e consciente de energia.
          </p>
        </div>
      </section>

      {/* Seção 2: Simulação */}
      <section id="section-calculadora" className="flex-grow min-h-screen bg-white flex flex-col justify-center items-center p-8">
        <div className="mb-12 w-full max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-[#1ea13099]">Simule sua Economia!</h2> 
          <p className="mt-4 text-lg text-gray-600">
            Descubra o quanto você pode economizar com energia solar.
          </p>
        </div>

        <div className="w-full max-w-2xl mt-8 text-center">
          <h3 className="text-xl font-semibold text-[#1ea13099]">Como Funciona o Cálculo?</h3>
          <p className="mt-4 text-base text-gray-600 mb-8">
            O cálculo leva em consideração o consumo mensal de energia em kWh e o custo da instalação do sistema solar. 
            A economia mensal é estimada com base na redução do consumo de energia da rede elétrica, considerando que o sistema solar pode cobrir até 70% do consumo.
            O tempo de retorno do investimento é calculado dividindo o custo da instalação pela economia mensal.
          </p>
        </div>

        {/* Botão para acessar a Calculadora */}
        <Link href="/calculator" className="bg-green-500 text-white px-4 py-3 rounded-md text-sm hover:bg-green-600 mt-6">
          Acesse a Calculadora
        </Link>
      </section>

      {/* Seção 3: Benefícios da Energia Solar */}
      <section 
        className="flex-grow min-h-screen flex flex-col justify-center items-center p-8 relative" 
        style={{ 
          backgroundImage: `url(/energiaSolar.jpg)`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0 z-0" />
        <div className="z-10 text-center text-white relative px-8">
          <h2 className="text-3xl font-semibold text-[#1ea13099] mb-12 drop-shadow-lg">Benefícios da Energia Solar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full">
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-[#1ea13099] mb-4">Economia no Longo Prazo</h3>
              <p className="text-sm text-gray-600">
                A energia solar permite uma redução significativa nas suas contas de energia elétrica a longo prazo.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-[#1ea13099] mb-4">Sustentabilidade</h3>
              <p className="text-sm text-gray-600">
                Contribua para um futuro mais sustentável, reduzindo sua dependência de fontes não renováveis de energia.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-[#1ea13099] mb-4">Valorização do Imóvel</h3>
              <p className="text-sm text-gray-600">
                Imóveis com sistema de energia solar são mais valorizados no mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: Sobre Nós */}
      <section id="section-quem-somos" className="flex-grow min-h-screen bg-[#4F7942] flex flex-col justify-center items-center p-8">
        <h2 className="text-3xl font-semibold text-[#cdffe299] mb-6">Sobre Nós</h2>
        <p className="text-lg text-white text-center max-w-md mb-8">
          Conheça a equipe responsável por este projeto, nossos objetivos e os integrantes.
        </p>
        <Link
          href="/about"
          className="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600"
        >
          Veja os Integrantes
        </Link>
      </section>
    </div>
  );
}

export default Home;
