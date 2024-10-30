import Work1 from "../../assets/swift.jpg";
import Work2 from "../../assets/movie.jpg";
import Work3 from "../../assets/itask.jpg";
import Work4 from "../../assets/pokeapi.png";
import Work5 from "../../assets/work5.jpg";

export const projectsData = [
    {
        id: 1,
        Image: Work1,
        title: 'Swift Post',
        link: 'https://swift-post-portifolio-qh1m.vercel.app/',
        github: 'https://github.com/LucasBatista37/SwiftPost-Portifolio',
        description: 'Um Mini Blog feito usando Firebase e React',
        technologies: ['React', 'Firebase']
    },
    {
        id: 2,
        Image: Work2,
        title: 'All Movies',
        link: 'https://all-movie-films.vercel.app/',
        github: 'https://github.com/LucasBatista37/AllMovie_Films',
        description: 'Uma aplicação para encontrar informações de filmes.',
        technologies: ['React', 'API REST']
    },
    {
        id: 3,
        Image: Work3,
        title: 'ITask',
        link: 'https://itask-typescript.vercel.app/',
        github: 'https://github.com/LucasBatista37/Task_Typescript',
        description: 'Aplicativo para gerenciamento de tarefas.',
        technologies: ['TypeScript', 'React']
    },
    {
        id: 4,
        Image: Work4,
        title: 'PokeApi',
        link: 'https://pokemon-api-hazel.vercel.app/',
        github: 'https://github.com/LucasBatista37/PokemonApi',
        description: 'Sistema de pesquisa usando a PokeApi',
        technologies: ['Html', 'Css', 'Javascript', 'API HTTP']
    },
    {
        id: 5,
        Image: Work5,
        title: 'Aplicativo de chat',
        link: '',
        github: '',
        description: 'Em desenvolvimento...',
        technologies: ['Flutter', 'Firebase']
    }
];
