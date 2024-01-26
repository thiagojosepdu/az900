import React from 'react';
import { useLocation } from 'react-router-dom';
import './pergunta.css';

function VinteResultado() {
  const location = useLocation();
  const acertos = new URLSearchParams(location.search).get('acertos');
  const respostasCorretas = location.state?.respostasCorretas || [];

  // Array de perguntas com opções e respostas corretas
  const perguntas = [
    {
      pergunta: '1- O que é o serviço Azure Virtual Network?',
      opcoes: ['A - Um banco de dados relacional', 'B - Um serviço de armazenamento de objetos', 'C - Um serviço de rede virtual na nuvem', 'D - Uma plataforma de desenvolvimento de jogos'],
      respostaCorreta: 'C',
    },
    {
      pergunta: '2- Qual serviço do Azure fornece uma plataforma para desenvolvimento, entrega e operações?',
      opcoes: ['A - Azure DevOps', 'B - Azure Blob Storage', 'C - Azure Kubernetes Service (AKS)', 'D - Azure Virtual Network'],
      respostaCorreta: 'A',
    },
    {
      pergunta: '3- O que são máquinas virtuais no contexto do Azure?',
      opcoes: ['A - Servidores físicos dedicados', 'B - Máquinas de café virtuais', 'C - Ambientes de desenvolvimento', 'D - Recursos computacionais isolados que podem executar sistemas operacionais'],
      respostaCorreta: 'D',
    },
    {
      pergunta: '4- O que é o Azure DevOps?',
      opcoes: ['A - Um serviço de armazenamento de arquivos', 'B - Um serviço de banco de dados NoSQL', 'C - Uma plataforma de desenvolvimento de jogos', 'D - Um conjunto de serviços para desenvolvimento, entrega e operações'],
      respostaCorreta: 'D',
    },
    {
      pergunta: '5- Qual é a principal diferença entre IaaS e PaaS no Azure?',
      opcoes: ['A - Número de letras', 'B - Escalabilidade', 'C - Nível de abstração do gerenciamento da infraestrutura', 'D - Preço'],
      respostaCorreta: 'C',
    },
    {
      pergunta: '6- O que é um serviço de banco de dados NoSQL?',
      opcoes: ['A - Um serviço de armazenamento de arquivos', 'B - Um serviço de banco de dados relacional gerenciado', 'C - Um serviço de banco de dados não relacional', 'D - Um serviço para análise de big data'],
      respostaCorreta: 'C',
    },
    {
      pergunta: '7- Como o Azure Load Balancer ajuda na disponibilidade?',
      opcoes: ['A - Armazenando grandes volumes de dados', 'B - Distribuindo o tráfego entre várias máquinas virtuais', 'C - Oferecendo serviços de backup', 'D - Monitorando a integridade dos discos virtuais'],
      respostaCorreta: 'B',
    },
    {
      pergunta: '8- O que é o Azure Kubernetes Service (AKS)?',
      opcoes: ['A - Um serviço de armazenamento de arquivos', 'B - Uma plataforma de desenvolvimento de jogos', 'C - Um serviço para implantar e gerenciar contêineres usando Kubernetes', 'D - Um serviço de banco de dados relacional'],
      respostaCorreta: 'C',
    },
    {
      pergunta: '9- O que são serviços de análise de big data no Azure?',
      opcoes: ['A - Serviços para armazenamento em nuvem', 'B - Serviços para análise de dados em tempo real', 'C - Serviços para análise de big data', 'D - Serviços de gerenciamento de contêineres'],
      respostaCorreta: 'C',
    },
    {
      pergunta: '10- O que é o Azure Blob Storage?',
      opcoes: ['A - Um serviço de banco de dados relacional', 'B - Um serviço de armazenamento de objetos', 'C - Um serviço de computação sem servidor', 'D - Um serviço de monitoramento de tráfego'],
      respostaCorreta: 'B',
    },
   
   
    // Adicione mais perguntas conforme necessário
  ];

  return (
    <div className="pergunta-container">
      <div className="resultado-box">
        <h1>Resultado do Quiz</h1>
        <div className="mensagem-resultado">
          {acertos === '100' ? (
            <p>Parabéns! Você acertou todas as perguntas.</p>
          ) : acertos >= '50' ? (
            <p>Parabéns! Você acertou {acertos}% das perguntas.</p>
          ) : (
            <p>Infelizmente, você acertou apenas {acertos}% das perguntas. Continue praticando!</p>
          )}
        </div>
        <h2>Respostas Corretas:</h2>
        <ul>
          {respostasCorretas.map((resposta, index) => (
            <li key={index}>
              Pergunta {index + 1}: {perguntas[index].opcoes.find(opcao => opcao.startsWith(resposta))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VinteResultado;
