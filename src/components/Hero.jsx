import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Container principal */}
      <div
        className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-start gap-5`}
      >
        {/* Elemento decorativo à esquerda */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>

        {/* Texto de introdução */}
        <div className="flex-1">
          <h1 className={`${styles.heroHeadText} text-white break-words`}>
            Olá,{" "}
            <span className="text-[#915EFF]">SBTechSupportBusiness</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 break-words`}
          >
            A SBTechSupportBusiness é uma empresa de tecnologia dedicada a
            oferecer soluções inovadoras para empresas e indivíduos que desejam
            otimizar suas operações, melhorar sua infraestrutura e se manter à
            frente no mercado competitivo. Nosso foco é em suporte técnico,
            automação de processos e desenvolvimento de software.
          </p>
        </div>
      </div>

      {/* Animação do botão de rolagem */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
