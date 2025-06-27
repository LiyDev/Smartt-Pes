// src/mocks/mockEspecialidades.ts
import aromaterapiaImg from '../assets/aromaterapia.jpg';
import dermatologiaImg from '../assets/dermatologia.jpg';
import reflexologiaImg from '../assets/reflexologia.jpg';
import angiologiaImg from '../assets/angiologia.jpg';
import podologiaImg from '../assets/podologia.jpg';

export interface Especialidade {
  nome: string;
  descricao: string;
  imagem: string; // caminho resolvido pela importação
}

export const especialidades: Especialidade[] = [
  {
    nome: 'Aromaterapia',
    descricao: 'Terapia holística que utiliza óleos essenciais para promover bem-estar físico e emocional.',
    imagem: aromaterapiaImg,
  },
  {
    nome: 'Dermatologia',
    descricao: 'Especialidade médica que trata doenças da pele, unhas e cabelos.',
    imagem: dermatologiaImg,
  },
  {
    nome: 'Reflexologia',
    descricao: 'Técnica terapêutica que aplica pressão em pontos específicos dos pés para aliviar tensões e promover relaxamento.',
    imagem: reflexologiaImg,
  },
  {
    nome: 'Angiologia',
    descricao: 'Especialidade médica que trata doenças dos vasos sanguíneos e linfáticos.',
    imagem: angiologiaImg,
  },
  {
    nome: 'Podologia',
    descricao: 'Especialidade que cuida da saúde dos pés, tratando calos, unhas encravadas e outras condições.',
    imagem: podologiaImg,
  },
];
