import React from 'react';
import { useLocation } from 'react-router-dom';
import './pergunta.css';

function QuinzeResultado() {
  const location = useLocation();
  const acertos = new URLSearchParams(location.search).get('acertos');
  const respostasCorretas = location.state?.respostasCorretas || [];

  // Array de perguntas com opções e respostas corretas
  const perguntas = [
    {
      pergunta: '1- Qual é o principal benefício da computação em nuvem?',
      opcoes: ['A - Menor segurança', 'B - Menor escalabilidade', 'C - Pagamento por uso', 'D - Maior complexidade'],
      respostaCorreta: 'C',
    },
    {
      pergunta: '2- O que é o Azure Blob Storage?',
      opcoes: ['A - Um banco de dados relacional', 'B - Um serviço de armazenamento de objetos', 'C - Um serviço de computação sem servidor', 'D - Um serviço de monitoramento de tráfego'],
      respostaCorreta: 'B',
    },
    {
      pergunta: '3- Qual serviço do Azure é usado para análise de big data?',
      opcoes: ['A - Azure Blob Storage', 'B - Azure Kubernetes Service (AKS)', 'C - Azure HDInsight', 'D - Azure DevOps'],
      respostaCorreta: 'C',
    },
    {
      pergunta: '4- O que é Azure Active Directory (AAD)?',
      opcoes: ['A - Uma plataforma de desenvolvimento de jogos', 'B - Um serviço de banco de dados relacional', 'C - Um serviço de autenticação e autorização', 'D - Uma categoria de serviços de rede'],
      respostaCorreta: 'C',
    },
    {
      pergunta: '5- Qual é o principal propósito do Azure Load Balancer?',
      opcoes: ['A - Armazenar grandes volumes de dados', 'B - Distribuir o tráfego de rede entre várias máquinas virtuais', 'C - Monitorar a integridade dos discos virtuais', 'D - Oferecer serviços de backup'],
      respostaCorreta: 'B',
    },
    {
      pergunta: '6- O que são conjuntos de disponibilidade no Azure?',
      opcoes: ['A - Grupos de máquinas virtuais associados a um único datacenter', 'B - Grupos de máquinas virtuais que oferecem alta disponibilidade', 'C - Serviços de monitoramento de tráfego na nuvem', 'D - Categorias de serviços de armazenamento'],
      respostaCorreta: 'B',
    },
    {
      pergunta: '7- Qual serviço do Azure é usado para gerenciar contêineres usando Kubernetes?',
      opcoes: ['A - Azure Blob Storage', 'B - Azure Kubernetes Service (AKS)', 'C - Azure Virtual Network', 'D - Azure DevOps'],
      respostaCorreta: 'B',
    },
    {
      pergunta: '8- O que é Azure SQL Database?',
      opcoes: ['A - Um serviço de armazenamento de arquivos', 'B - Um serviço de banco de dados relacional gerenciado', 'C - Um serviço de gerenciamento de contêineres', 'D - Uma plataforma de desenvolvimento de jogos'],
      respostaCorreta: 'B',
    },
    {
      pergunta: '9- O que são Azure Resource Groups?',
      opcoes: ['A - Um serviço de backup para máquinas virtuais', 'B - Um contêiner lógico para recursos do Azure', 'C - Uma categoria de serviços de rede', 'D - Grupos de recursos para organizar e gerenciar recursos do Azure'],
      respostaCorreta: 'B',
    },
    {
      pergunta: '10- O que são Azure Functions?',
      opcoes: ['A - Um serviço de banco de dados NoSQL', 'B - Um serviço de análise de big data', 'C - Um serviço de computação sem servidor para executar código em resposta a eventos', 'D - Uma plataforma de desenvolvimento de jogos'],
      respostaCorreta: 'C',
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

export default QuinzeResultado;
