import Ciclou from "../../assets/ciclousombreado.png";
import CondoView from "../../assets/condoview.png";
import Beyond from "../../assets/beyond.png";
import PetLitoral from "../../assets/petlitoral.png";
import ReactGram from "../../assets/reactgram.png";
import PetCare from "../../assets/PetCare.png";
import Work1 from "../../assets/swift.jpg";
import Work2 from "../../assets/movie.jpg";
import Work3 from "../../assets/itask.jpg";

export const projectsData = [
    {
        id: 1,
        Image: Ciclou,
        title: 'Ciclou',
        link: 'https://play.google.com/store/apps/details?id=com.beyondsystem.ciclou_novo_app',
        github: 'https://github.com/LucasBatista37/Ciclou-App',
        description: 'App de Cóleta de Óleo Sustentável',
        technologies: ['Flutter', 'Firebase'],
        category: 'mobile'
    },
    {
        id: 2,
        Image: CondoView,
        title: 'CondoView',
        link: '',
        github: 'https://github.com/LucasBatista37/Condoview-App',
        description: 'Condoview busca facilitar a administração do condomínio',
        technologies: ['Flutter', 'NodeJs', 'MongoDB'],
        category: 'mobile'
    },
    {
        id: 3,
        Image: PetLitoral,
        title: 'Pet Litoral',
        link: 'https://petlitoral.shop',
        github: 'https://github.com/LucasBatista37/Pet-Litoral-Page',
        description: 'Site feito para agendamento de banho e tosa feito para o pet shop Pet Litoral.',
        technologies: ['React'],
        category: 'web'
    },
    {
        id: 4,
        Image: Beyond,
        title: 'Beyond',
        link: 'https://beyondsystem.online/',
        github: 'https://github.com/LucasBatista37/Beyond-Site',
        description: 'Site para a empresa freelance Beyond System',
        technologies: ['React', 'Tawind'],
        category: 'web'
    }, 
    {
        id: 5,
        Image: PetCare,
        title: 'PetCare',
        link: 'www.petcare.shop',
        github: 'https://github.com/LucasBatista37/Beyond-Site',
        description: 'Sistema de Gestão para Pet Shops.',
        technologies: ['React', 'Tawind', 'NodeJs', 'MongoDB'],
        category: 'web'
    },
    {
        id: 6,
        Image: Work1,
        title: 'MiniBlog',
        link: 'https://github.com/LucasBatista37/Miniblog/wiki/Prints-do-Projeto',
        github: 'https://github.com/LucasBatista37/Miniblog',
        description: 'Um Mini Blog feito usando Firebase e React',
        technologies: ['React', 'Firebase'],
        category: 'web'
    }, 
    {
        id: 7,
        Image: ReactGram,
        title: 'ReactGram',
        link: 'https://github.com/LucasBatista37/ReactGram/wiki/Prints-do-Projeto',
        github: 'https://github.com/LucasBatista37/ReactGram',
        description: 'Rede social inspirada no instagram',
        technologies: ['React', 'NodeJs', 'MongoDB'],
        category: 'web'
    },
    {
        id: 8,
        Image: Work2,
        title: 'Central Filmes',
        link: 'https://centralfilmes.vercel.app/',
        github: 'https://github.com/LucasBatista37/Central-Filmes',
        description: 'Uma aplicação para encontrar informações de filmes.',
        technologies: ['React', 'API REST'],
        category: 'web'
    },
    {
        id: 9,
        Image: Work3,
        title: 'Tarefa Rápida',
        link: 'https://itask-typescript.vercel.app/',
        github: 'https://github.com/LucasBatista37/Task_Typescript',
        description: 'Site para gerenciamento de tarefas.',
        technologies: ['TypeScript', 'React'],
        category: 'web'
    },
];
