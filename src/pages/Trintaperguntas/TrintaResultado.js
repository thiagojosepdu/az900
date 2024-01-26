import React from 'react';
import { useLocation } from 'react-router-dom';
import './pergunta.css';

function TrintaResultado() {
  const location = useLocation();
  const acertos = new URLSearchParams(location.search).get('acertos');
  const respostasCorretas = location.state?.respostasCorretas || [];

  // Array de perguntas com opções e respostas corretas
  const perguntas = [
    {
      pergunta: '1- O que é o Azure Active Directory (AAD)?',
      opcoes: ['A - Um serviço de banco de dados relacional', 'B - Uma solução de backup para máquinas virtuais', 'C - Um serviço para autenticação e autorização', 'D - Uma plataforma de desenvolvimento de jogos'],
      respostaCorreta: 'C',
    },
    {
      pergunta: '2- Qual é o principal propósito do Azure Resource Group?',
      opcoes: ['A - Uma categoria de serviços de rede', 'B - Um serviço de monitoramento de tráfego na nuvem', 'C - Um contêiner lógico para recursos do Azure', 'D - Uma plataforma de desenvolvimento de jogos'],
      respostaCorreta: 'C',
    },
    {
      pergunta: '3- Como o Azure SQL Database é categorizado?',
      opcoes: ['A - Um serviço de armazenamento de arquivos', 'B - Um serviço de banco de dados relacional gerenciado', 'C - Um serviço de gerenciamento de contêineres', 'D - Uma plataforma de desenvolvimento de jogos'],
      respostaCorreta: 'B',
    },
    {
      pergunta: '4- O que são conjuntos de disponibilidade no Azure?',
      opcoes: ['A - Grupos de máquinas virtuais associados a um único datacenter', 'B - Grupos de máquinas virtuais que oferecem alta disponibilidade', 'C - Serviços de monitoramento de tráfego na nuvem', 'D - Plataforma para desenvolvimento, entrega e operações'],
      respostaCorreta: 'B',
    },
    {
      pergunta: '5- Qual é o principal propósito do Azure Functions?',
      opcoes: ['A - Um serviço de banco de dados NoSQL', 'B - Um serviço de análise de big data', 'C - Um serviço de computação sem servidor para executar código em resposta a eventos', 'D - Um serviço de monitoramento de tráfego'],
      respostaCorreta: 'C',
    },
    {
      pergunta: '6- Como o Azure DevOps é melhor descrito?',
      opcoes: ['A - Uma plataforma de desenvolvimento de jogos', 'B - Um conjunto de serviços para armazenamento em nuvem', 'C - Uma plataforma para desenvolvimento, entrega e operações', 'D - Um serviço de backup para máquinas virtuais'],
      respostaCorreta: 'C',
    },
    {
      pergunta: '7- Qual serviço do Azure é usado para armazenar grandes volumes de dados?',
      opcoes: ['A - Azure Blob Storage', 'B - Azure Virtual Network', 'C - Azure Kubernetes Service (AKS)', 'D - Azure SQL Database'],
      respostaCorreta: 'A',
    },
    {
      pergunta: '8- O que são serviços de análise de dados em tempo real no Azure?',
      opcoes: ['A - Serviços para armazenamento em nuvem', 'B - Serviços para análise de dados em tempo real', 'C - Serviços para análise de big data', 'D - Serviços de gerenciamento de contêineres'],
      respostaCorreta: 'B',
    },
    {
      pergunta: '9- Qual é o serviço do Azure usado para distribuir o tráfego de rede entre várias máquinas virtuais?',
      opcoes: ['A - Azure Blob Storage', 'B - Azure Kubernetes Service (AKS)', 'C - Azure Load Balancer', 'D - Azure DevOps'],
      respostaCorreta: 'C',
    },
    {
      pergunta: '10- O que são conjuntos de disponibilidade no Azure?',
      opcoes: ['A - Grupos de máquinas virtuais associados a um único datacenter', 'B - Grupos de máquinas virtuais que oferecem alta disponibilidade', 'C - Serviços de monitoramento de tráfego na nuvem', 'D - Plataforma para desenvolvimento, entrega e operações'],
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

export default TrintaResultado;
