import type { IconType } from 'react-icons'
import {
  SiAngular, SiAnsible, SiCss, SiDocker, SiExpress, SiFastapi, SiFigma, SiFirebase, SiGit,
  SiGithub, SiGitlab, SiGnubash, SiGooglecloud, SiGrafana, SiGraphql, SiHtml5, SiJavascript,
  SiJenkins, SiJupyter, SiKubernetes, SiLangchain, SiLaravel, SiLinux, SiMongodb, SiMysql,
  SiNodedotjs, SiNumpy, SiOllama, SiOpenjdk, SiPandas, SiPhp, SiPostgresql, SiPostman, SiPython,
  SiReact, SiSass, SiScikitlearn, SiScrapy, SiStreamlit, SiSupabase, SiTailwindcss, SiTensorflow,
  SiTypescript, SiApachespark,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { VscAzure } from 'react-icons/vsc'
import { TbBrandOpenai } from 'react-icons/tb'

import ragAgent from './assets/projects/rag-agent.webp'
import scrapy from './assets/projects/scrapy.webp'
import rekognition from './assets/projects/rekognition.webp'
import csvImporter from './assets/projects/csv-importer.webp'
import mnist from './assets/projects/mnist.webp'
import makinonBikes from './assets/projects/makinon-bikes.webp'
import papafilms from './assets/projects/papafilms.webp'
import telegramBot from './assets/projects/telegram-bot.webp'
import rickAndMorty from './assets/projects/rick-and-morty.webp'
import training from './assets/projects/training.webp'

export const PROFILE = {
  name: 'Jose Antonio Holgado',
  shortName: 'Jose Antonio',
  location: 'Málaga, España',
  email: 'joseantonio-hb@hotmail.com',
  github: 'https://github.com/joseaholgado',
  linkedin: 'https://www.linkedin.com/in/jos%C3%A9-antonio-holgado-bonet-033243199/',
  cv: `${import.meta.env.BASE_URL}CV_Jose_Antonio_Holgado.pdf`,
  roles: ['Data Engineer', 'Frontend Developer', 'Especialista en IA y Big Data'],
  pitch:
    'Construyo pipelines que recogen datos de ficheros, APIs y la web, los limpian y los dejan listos para análisis e IA. Y cuando hace falta, también creo el dashboard o la aplicación web que pone esos datos en manos del usuario.',
}

export type Tech = { name: string; icon: IconType }

const t = (name: string, icon: IconType): Tech => ({ name, icon })

export const TECH = {
  python: t('Python', SiPython),
  sql: t('PostgreSQL', SiPostgresql),
  mysql: t('MySQL', SiMysql),
  mongo: t('MongoDB', SiMongodb),
  pandas: t('Pandas', SiPandas),
  numpy: t('NumPy', SiNumpy),
  scrapy: t('Scrapy', SiScrapy),
  spark: t('Spark', SiApachespark),
  jupyter: t('Jupyter', SiJupyter),
  supabase: t('Supabase', SiSupabase),
  firebase: t('Firebase', SiFirebase),
  aws: t('AWS', FaAws),
  gcp: t('Google Cloud', SiGooglecloud),
  azure: t('Azure', VscAzure),
  docker: t('Docker', SiDocker),
  k8s: t('Kubernetes', SiKubernetes),
  jenkins: t('Jenkins', SiJenkins),
  ansible: t('Ansible', SiAnsible),
  linux: t('Linux', SiLinux),
  bash: t('Bash', SiGnubash),
  git: t('Git', SiGit),
  github: t('GitHub', SiGithub),
  gitlab: t('GitLab', SiGitlab),
  react: t('React', SiReact),
  ts: t('TypeScript', SiTypescript),
  js: t('JavaScript', SiJavascript),
  angular: t('Angular', SiAngular),
  tailwind: t('Tailwind', SiTailwindcss),
  sass: t('Sass', SiSass),
  html: t('HTML5', SiHtml5),
  css: t('CSS', SiCss),
  node: t('Node.js', SiNodedotjs),
  express: t('Express', SiExpress),
  fastapi: t('FastAPI', SiFastapi),
  java: t('Java', SiOpenjdk),
  php: t('PHP', SiPhp),
  laravel: t('Laravel', SiLaravel),
  langchain: t('LangChain', SiLangchain),
  openai: t('OpenAI', TbBrandOpenai),
  ollama: t('Ollama', SiOllama),
  tensorflow: t('TensorFlow', SiTensorflow),
  sklearn: t('Scikit-learn', SiScikitlearn),
  streamlit: t('Streamlit', SiStreamlit),
  graphql: t('GraphQL', SiGraphql),
  figma: t('Figma', SiFigma),
  postman: t('Postman', SiPostman),
  grafana: t('Grafana', SiGrafana),
} satisfies Record<string, Tech>

export const SKILL_GROUPS = [
  {
    title: 'Data Engineering',
    description: 'Pipelines ETL/ELT: extracción de ficheros, APIs y web scraping, limpieza, validación y carga en bases de datos.',
    techs: [TECH.python, TECH.sql, TECH.pandas, TECH.scrapy, TECH.mysql, TECH.mongo, TECH.spark, TECH.jupyter],
    featured: true,
  },
  {
    title: 'Frontend',
    description: 'Dashboards y aplicaciones web rápidas, accesibles y responsive.',
    techs: [TECH.react, TECH.ts, TECH.js, TECH.angular, TECH.tailwind, TECH.sass],
  },
  {
    title: 'IA y Automatización',
    description: 'Agentes RAG, machine learning y automatización de procesos (RPA).',
    techs: [TECH.langchain, TECH.openai, TECH.tensorflow, TECH.sklearn, TECH.streamlit, TECH.ollama],
  },
  {
    title: 'Cloud y DevOps',
    description: 'Despliegue de cargas de datos en la nube con contenedores y CI/CD.',
    techs: [TECH.aws, TECH.gcp, TECH.azure, TECH.docker, TECH.k8s, TECH.jenkins, TECH.linux, TECH.git],
  },
  {
    title: 'Backend',
    description: 'APIs y servicios que alimentan las aplicaciones.',
    techs: [TECH.fastapi, TECH.node, TECH.express, TECH.java, TECH.laravel, TECH.php],
  },
]

export const PIPELINE = [
  { step: 'Extraer', detail: 'CSV, APIs, scraping' },
  { step: 'Transformar', detail: 'Limpieza y validación' },
  { step: 'Cargar', detail: 'SQL, NoSQL, cloud' },
  { step: 'Visualizar', detail: 'Dashboards y apps' },
]

export type ProjectCategory = 'data' | 'web'

export type Project = {
  title: string
  description: string
  image: string
  techs: string[]
  link: string
  category: ProjectCategory
}

const GH = 'https://github.com/joseaholgado'

export const PROJECTS: Project[] = [
  {
    title: 'Agente RAG con LangGraph',
    description: 'Agente de IA que lee PDFs y busca en internet para responder preguntas con contexto.',
    image: ragAgent,
    techs: ['Python', 'LangGraph', 'LangChain', 'RAG'],
    link: `${GH}/agente-langgraph`,
    category: 'data',
  },
  {
    title: 'Scrapy FilmAffinity',
    description: 'Pipeline de extracción: scraping de películas, limpieza y análisis exploratorio de los datos.',
    image: scrapy,
    techs: ['Python', 'Scrapy', 'Pandas', 'ydata-profiling'],
    link: `${GH}/Scrapy_filmaffinity`,
    category: 'data',
  },
  {
    title: 'Análisis de imágenes con AWS',
    description: 'Detecta objetos y emociones, genera la salida en JSON y la convierte en audio traducido al español.',
    image: rekognition,
    techs: ['Python', 'Rekognition', 'Polly', 'Translate'],
    link: `${GH}/aws-rekognition`,
    category: 'data',
  },
  {
    title: 'Importador de CSV',
    description: 'Lee ficheros CSV, valida los datos y los carga en base de datos.',
    image: csvImporter,
    techs: ['Java', 'SQL'],
    link: `${GH}/importador_csv`,
    category: 'data',
  },
  {
    title: 'Clasificador MNIST',
    description: 'Red neuronal que reconoce dígitos escritos a mano, con interfaz web en Streamlit.',
    image: mnist,
    techs: ['Python', 'TensorFlow', 'Streamlit'],
    link: `${GH}/redes_neuronales_numeros_mnist`,
    category: 'data',
  },
  {
    title: 'MakinonBikes',
    description: 'Tienda online de bicicletas con app de gestión de citas para el taller.',
    image: makinonBikes,
    techs: ['Laravel', 'Angular', 'MySQL', 'Tailwind', 'AWS'],
    link: 'https://github.com/AlbertoMorenoFdez/Makinon-Bikes',
    category: 'web',
  },
  {
    title: 'PapaFilms',
    description: 'Cartelera de cine: explora películas, busca títulos y guarda favoritas con la API de TMDb.',
    image: papafilms,
    techs: ['JavaScript', 'HTML5', 'CSS3', 'API TMDb'],
    link: `${GH}/Cartelera_Api`,
    category: 'web',
  },
  {
    title: 'Bot de Telegram',
    description: 'Automatiza tareas, responde a comandos personalizados e interactúa con APIs externas.',
    image: telegramBot,
    techs: ['JavaScript', 'Node.js', 'API Telegram'],
    link: `${GH}/Bot_Telegram`,
    category: 'web',
  },
  {
    title: 'Cards Rick and Morty',
    description: 'Tarjetas con personajes aleatorios usando la API oficial de la serie.',
    image: rickAndMorty,
    techs: ['JavaScript', 'HTML5', 'CSS3'],
    link: `${GH}/Fotos_RickAndMoty_Api`,
    category: 'web',
  },
  {
    title: 'Gestión de Entrenamientos',
    description: 'Aplicación en Java para administrar rutinas, usuarios y planes de entrenamiento.',
    image: training,
    techs: ['Java', 'MySQL'],
    link: `${GH}/Proyecto_Entrenamiento_Java`,
    category: 'web',
  },
]

export type TimelineItem = {
  title: string
  org: string
  date: string
  description: string
  techs: string[]
  kind: 'work' | 'education'
}

export const TIMELINE: TimelineItem[] = [
  {
    title: 'RPA y Desarrollador de IA',
    org: 'Viewnext · Málaga',
    date: '2025 — Actualidad',
    description: 'Desarrollo de agentes para automatizar tareas repetitivas y soluciones de IA para mejorar la experiencia del usuario.',
    techs: ['Python', 'LangChain', 'LangGraph', 'OpenAI', 'Azure', 'FastAPI', 'PostgreSQL'],
    kind: 'work',
  },
  {
    title: 'Software Developer',
    org: 'Surbans · Málaga',
    date: '2024 — 2025',
    description: 'Desarrollo integral de la aplicación Surbans: soluciones escalables de frontend y backend.',
    techs: ['JavaScript', 'React', 'React Native', 'Node.js', 'Express', 'MongoDB', 'Google Cloud'],
    kind: 'work',
  },
  {
    title: 'Curso de Especialización en IA y Big Data',
    org: 'IES Portada Alta · Málaga',
    date: '2024 — 2025',
    description: 'Formación oficial en análisis de datos, machine learning y procesamiento de grandes volúmenes de datos.',
    techs: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Spark', 'Power BI', 'MongoDB'],
    kind: 'education',
  },
  {
    title: 'Técnico Superior en Desarrollo de Aplicaciones Web',
    org: 'CPIFP Alan Turing · Málaga',
    date: '2022 — 2024',
    description: 'Desarrollo web full stack con tecnologías modernas.',
    techs: ['JavaScript', 'Angular', 'Sass', 'PHP', 'Laravel', 'AWS'],
    kind: 'education',
  },
  {
    title: 'Bootcamp de Ciberseguridad',
    org: 'Formación complementaria',
    date: '',
    description: 'Protección de sistemas, análisis de vulnerabilidades y buenas prácticas de seguridad.',
    techs: ['Linux', 'Redes', 'Seguridad'],
    kind: 'education',
  },
]

export const STATS = [
  { value: '2+', label: 'años construyendo software' },
  { value: '30+', label: 'repositorios en GitHub' },
  { value: 'IA', label: 'y Big Data: especialización oficial' },
  { value: '10', label: 'proyectos destacados' },
]

export const MARQUEE: Tech[] = [
  TECH.python, TECH.sql, TECH.pandas, TECH.spark, TECH.aws, TECH.docker, TECH.react, TECH.ts,
  TECH.langchain, TECH.mongo, TECH.gcp, TECH.fastapi, TECH.k8s, TECH.tailwind, TECH.git,
  TECH.tensorflow, TECH.linux, TECH.node,
]
