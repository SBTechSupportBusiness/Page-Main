import {
  backend,
  carrent,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  meta,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  shopify,
  starbucks,
  tailwind,
  tesla,
  threejs,
  tripguide,
  typescript,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Developer",
    icon: web,
  },
  {
    title: "Banco de dados",
    icon: mobile,
  },
  {
    title: "Analista",
    icon: backend,
  },
  {
    title: "DevOps",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Gestão de infraestrutura",
    company_name: "Michelin",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "cabeamento estruturado",
      "instalação de equipamentos",
      "configuração de equipamentos",
      "gerenciamento de estações e servidores",
      "soluções para infraestrutura",
      "Configuração, monitoramento e manutenção de servidores, redes e dispositivos.",
    ],
  },
  {
    title: "Gerenciamento de backup",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "soluções para armazenamento",
      "estrutura de backup para arquivos",
      "monitoramento de rotina",
    ],
  },
  {
    title: "soluções de segurança",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "soluções de epp (antivirus)",
      "gerenciamento de agentes",
      "monitoramento e limpeza de dispositivos infectados",
    ],
  },
  {
    title: "soluções de projeto",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "desenvolvimento de documentação",
      "análise de ambiente",
    ],
  },
  {
    title: "Suporte técnico de TI",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Diagnóstico e resolução de problemas em hardware, redes e sistemas operacionais.",
    ],
  },
  {
    title: "Automação de processos",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Desenvolvimento de scripts, pipelines e automações para reduzir tarefas repetitivas.",
    ],
  },
];

const projects = [
  {
    name: "Potifolio",
    description:
      "Gestão e automação de servidores. Configuração e manutenção de servidores Linux utilizando Nginx, Docker e Ansible. Implementação de pipelines CI/CD com GitHub Actions para automação de deploys. Scripts para backup automatizado e monitoramento de logs em servidores locais e na nuvem (AWS).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/SBTechSupportBusiness?tab=repositories",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const whyChooseSBTechSupportBusiness = [
  "Atendimento personalizado e suporte rápido.",
  "Uso de tecnologias de ponta para garantir eficiência e segurança.",
  "Experiência em projetos de diversos segmentos, de startups a grandes corporações.",
  "Garantia de resultados sólidos, alinhados com as necessidades dos nossos clientes.",
];

// Define missing variables (SBTechSupportBusiness and testimonials)
const SBTechSupportBusiness = {
  name: "SB Tech Support Business",
  description: "Providing top-notch IT support solutions.",
};

const testimonials = [
  {
    name: "Client One",
    feedback: "Excellent service, highly recommend.",
  },
  {
    name: "Client Two",
    feedback: "The team was incredibly professional and efficient.",
  },
];

export { experiences, projects, SBTechSupportBusiness, services, technologies, testimonials, whyChooseSBTechSupportBusiness };
