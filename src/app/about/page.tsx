import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#4F7942] p-8">
      <section className="bg-[#e2e8eb] rounded-lg shadow-lg p-16 w-full max-w-6xl min-h-[85vh] mx-auto">
        <h1 className="text-4xl text-[#6BBF59] font-bold text-center mb-12">Sobre Nós</h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-16">
          <div className="lg:w-1/2 text-center lg:text-left lg:pr-12 mb-12 lg:mb-0">
            <h2 className="text-[#333333] text-3xl font-semibold mb-6">Quem Somos:</h2>
            <p className="mb-4 leading-relaxed text-base text-[#333333]">
              Somos estudantes comprometidos em criar soluções sustentáveis. Nosso objetivo é fornecer ferramentas acessíveis para capacitar a transição para fontes de energia renovável.
            </p>
            <p className="mb-4 leading-relaxed text-base text-[#333333]">
              Com foco em energia solar, buscamos simplificar o processo de implementação, destacando benefícios financeiros e ambientais.
            </p>
            <p className="leading-relaxed text-base text-[#333333]">
              Nossa equipe está localizada em São Paulo, unindo inovação e sustentabilidade para criar um futuro mais verde.
            </p>
            <br />
            <div>
              <p className="leading-relaxed text-lg text-[#333333] font-semibold">LinkedIn:</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-sm text-blue-600">
                <li>
                  <a 
                    href="https://www.linkedin.com/in/matheus-h-reis" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Matheus H. Reis
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/joão-vitor-di-re-a6a610292/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    João Vitor Di Re
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/luan-dantas-33b26323b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Luan Dantas
                  </a>
                </li>
              </ul>
            </div>
            <br />
            <div>
              <p className="leading-relaxed text-lg text-[#333333] font-semibold">GitHub:</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-sm text-gray-800">
                <li>
                  <a 
                    href="https://github.com/MatheusReis48" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    MatheusReis48
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/Joao-Dire" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Joao-Dire
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/lds2125" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    lds2125
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Imagens dos integrantes */}
          <div className="lg:w-1/2 flex flex-col items-center gap-8">
            <div className="relative w-40 h-40">
              <Image
                src="/Luan.png" 
                alt="Luan"
                width={160}   
                height={160}  
                className="object-cover shadow-md"
              />
            </div>
            <div className="relative w-40 h-40">
              <Image
                src="/joao.jpg" 
                alt="João"
                width={160}   
                height={160}  
                className="object-cover shadow-md"
              />
            </div>
            <div className="relative w-40 h-40">
              <Image
                src="/Matheus.jpeg" 
                alt="Matheus"
                width={160}   
                height={160}  
                className="object-cover shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-[#333333] text-3xl font-semibold mb-6">Nossa Visão</h2>
          <p className="mb-8 leading-relaxed text-base text-[#333333]">
            Acreditamos em um futuro mais sustentável e acessível. Nosso objetivo é fornecer soluções inovadoras e práticas para promover a energia solar em larga escala, garantindo uma transição energética justa e eficiente.
          </p>
        </div>
      </section>
    </div>
  );
}
