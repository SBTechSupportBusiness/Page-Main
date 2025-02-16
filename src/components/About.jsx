import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-tilt";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Nossa missão.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Facilitar a transformação digital das empresas por meio de soluções tecnológicas personalizadas, suporte eficiente e um compromisso inabalável com a inovação.
        Nossos serviços
Suporte técnico de TI: Diagnóstico e resolução de problemas em hardware, redes e sistemas operacionais.
Gestão de infraestrutura: Configuração, monitoramento e manutenção de servidores, redes e dispositivos.
Automação de processos: Desenvolvimento de scripts, pipelines e automações para reduzir tarefas repetitivas.
Desenvolvimento de software: Soluções sob medida utilizando tecnologias modernas como Python, Java, Node.js e frameworks como Spring Boot e Django.
Consultoria e treinamento: Capacitação em ferramentas de TI, metodologias ágeis e práticas DevOps.
Por que escolher a SBTechSupportBusiness?
Atendimento personalizado e suporte rápido.
Uso de tecnologias de ponta para garantir eficiência e segurança.
Experiência em projetos de diversos segmentos, de startups a grandes corporações.
Garantia de resultados sólidos, alinhados com as necessidades dos nossos clientes.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
