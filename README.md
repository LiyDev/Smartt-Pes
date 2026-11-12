# Smartt Pés 🦶

Aplicação web (mobile-first) de saúde e cuidado com os pés, em que o usuário cria conta, conhece os tratamentos e especialidades, agenda consultas presenciais ou por teleconsulta e acompanha seu histórico.

> Projeto front-end. Os dados de consultas, planos e tratamentos vêm de arquivos *mock* (`src/services`), sem back-end.

## Funcionalidades

- Cadastro e login
- Catálogo de **tratamentos e especialidades** (podologia, dermatologia, angiologia, reflexologia, aromaterapia e outras)
- **Agendamento de consultas** e edição dos detalhes da consulta
- **Teleconsulta**
- Atendimento **Podomoto**
- **Planos** disponíveis
- **Histórico** de consultas
- Perfil do usuário e página Sobre
- Pré-visualização em moldura de celular quando aberto em tela grande

## Rotas

| Rota | Página |
| --- | --- |
| `/` | Início |
| `/criar` | Cadastro |
| `/login` | Login |
| `/home` | Serviços |
| `/agendamento` | Agendar consulta |
| `/teleconsulta` | Teleconsulta |
| `/podomoto` | Podomoto |
| `/servicos` | Tratamentos |
| `/planos` | Planos |
| `/perfil` | Perfil |
| `/historico` | Histórico |
| `/detalhes` | Editar consulta |
| `/sobre` | Sobre |

## Tecnologias

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [React Router 7](https://reactrouter.com/)
- [styled-components](https://styled-components.com/)
- [Lucide React](https://lucide.dev/) (ícones)
- ESLint
- Deploy configurado para a [Vercel](https://vercel.com/) (`vercel.json`)

## Estrutura do projeto

```
Smartt-Pes/
├── public/
└── src/
    ├── assets/       # Imagens e ícones
    ├── components/   # Header, Footer, ProfileInfoCard, UI (Button, Label)...
    ├── pages/        # Uma pasta por página (index.tsx + style.ts)
    ├── services/     # Dados mock (consultas, planos, tratamentos)
    ├── styles/       # Estilos globais
    ├── App.tsx       # Rotas
    └── main.tsx
```

## Como executar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
git clone https://github.com/LiyDev/Smartt-Pes.git
cd Smartt-Pes
npm install
npm run dev
```

### Scripts disponíveis

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Verifica os tipos e gera a build de produção |
| `npm run preview` | Visualiza a build localmente |
| `npm run lint` | Executa o ESLint |

## Autora

**Lilian Emilly** — [@LiyDev](https://github.com/LiyDev)
