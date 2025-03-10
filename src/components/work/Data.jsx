import ReactGram from "../../assets/reactgram.png";
import Ciclou from "../../assets/ciclou.png";
import CondoView from "../../assets/condoview.png";
import Work1 from "../../assets/swift.jpg";
import Work2 from "../../assets/movie.jpg";
import Work3 from "../../assets/itask.jpg";

export const projectsData = [
    {
        id: 1,
        Image: ReactGram,
        title: 'ReactGram',
        link: 'https://github.com/LucasBatista37/ReactGram/wiki/Prints-do-Projeto',
        github: 'https://github.com/LucasBatista37/ReactGram',
        description: 'Rede social inspirada no instagram',
        technologies: ['React', 'NodeJs', 'MongoDB'],
        category: 'web'
    },
    {
        id: 2,
        Image: Work1,
        title: 'MiniBlog',
        link: '',
        github: 'https://github.com/LucasBatista37/Miniblog',
        description: 'Um Mini Blog feito usando Firebase e React',
        technologies: ['React', 'Firebase'],
        category: 'web'
    },
    {
        id: 3,
        Image: Ciclou,
        title: 'Ciclou',
        link: '',
        github: 'https://github.com/LucasBatista37/Ciclou-App',
        description: 'App de Cóleta de Óleo Sustentável',
        technologies: ['Flutter', 'Firebase'],
        category: 'mobile'
    },
    {
        id: 4,
        Image: CondoView,
        title: 'CondoView',
        link: '',
        github: 'https://github.com/LucasBatista37/Condoview-App',
        description: 'Condoview busca facilitar a administração do condomínio',
        technologies: ['Flutter', 'NodeJs', 'MongoDB'],
        category: 'mobile'
    },
    {
        id: 5,
        Image: Work2,
        title: 'Central Filmes',
        link: 'https://all-movie-films.vercel.app/',
        github: 'https://github.com/LucasBatista37/AllMovie_Films',
        description: 'Uma aplicação para encontrar informações de filmes.',
        technologies: ['React', 'API REST'],
        category: 'web'
    },
    {
        id: 6,
        Image: Work3,
        title: 'Tarefa Rápida',
        link: 'https://itask-typescript.vercel.app/',
        github: 'https://github.com/LucasBatista37/Task_Typescript',
        description: 'Aplicativo para gerenciamento de tarefas.',
        technologies: ['TypeScript', 'React'],
        category: 'web'
    },
];
