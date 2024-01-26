import React from 'react';
import { useLocation } from 'react-router-dom';
import './pergunta.css';

function QuarentaResultado() {
  const location = useLocation();
  const acertos = new URLSearchParams(location.search).get('acertos');
  const respostasCorretas = location.state?.respostasCorretas || [];

  // Array de perguntas com opções e respostas corretas
  const perguntas = [
    {
      pergunta: '1- O que é uma máquina virtual no contexto do Azure?',
      opcoes: ['A - Um computador físico dedicado', 'B - Uma máquina real em um datacenter local', 'C - Uma instância virtual de um computador hospedada no Azure', 'D - Um serviço exclusivo do Azure DevOps'],
      respostaCorreta: 'C',
    },
    {
      pergunta: '2- Qual é o principal benefício do modelo de serviço "Platform as a Service" (PaaS) no Azure?',
      opcoes: ['A - Controle total sobre a infraestrutura', 'B - Escalabilidade automática', 'C - Nenhuma integração com ferramentas de desenvolvimento', 'D - Baixa velocidade de implementação'],
      respostaCorreta: 'B',
    },
    {
      pergunta: '3- O que são políticas de gerenciamento de recursos no Azure?',
      opcoes: ['A - Restrições sobre o número de usuários em uma assinatura', 'B - Diretrizes para a organização de recursos no Azure', 'C - Regras para definir o preço dos recursos', 'D - Ferramentas para monitorar o consumo de dados'],
      respostaCorreta: 'B',
    },
    {
      pergunta: '4- Qual serviço do Azure é utilizado para hospedar aplicativos web?',
      opcoes: ['A - Azure Blob Storage', 'B - Azure Kubernetes Service (AKS)', 'C - Azure Web Apps', 'D - Azure Virtual Network'],
      respostaCorreta: 'C',
    },
    {
      pergunta: '5- O que é o conceito de "escalabilidade automática" no contexto do Azure?',
      opcoes: ['A - Aumento ou diminuição manual dos recursos', 'B - Ajuste automático da capacidade com base na demanda', 'C - Capacidade fixa que não pode ser alterada', 'D - Desativação automática de recursos ociosos'],
      respostaCorreta: 'B',
    },
    {
      pergunta: '6- Como o Azure Resource Manager (ARM) simplifica o gerenciamento de recursos no Azure?',
      opcoes: ['A - Introduzindo complexidade adicional', 'B - Fornecendo uma interface gráfica única', 'C - Limitando as opções de configuração', 'D - Não tem impacto no gerenciamento de recursos'],
      respostaCorreta: 'B',
    },
    {
      pergunta: '7- Qual serviço do Azure é utilizado para criar redes privadas virtuais (VPNs)?',
      opcoes: ['A - Azure Blob Storage', 'B - Azure Virtual Network', 'C - Azure SQL Database', 'D - Azure DevOps'],
      respostaCorreta: 'B',
    },
    {
      pergunta: '8- O que são os serviços cognitivos no Azure?',
      opcoes: ['A - Serviços para armazenamento em nuvem', 'B - Serviços para análise de dados em tempo real', 'C - Serviços para inteligência artificial e aprendizado de máquina', 'D - Serviços de gerenciamento de contêineres'],
      respostaCorreta: 'C',
    },
    {
      pergunta: '9- Qual é o papel do Azure DevOps no ciclo de vida do desenvolvimento de software?',
      opcoes: ['A - Armazenar grandes volumes de dados', 'B - Distribuir o tráfego de rede', 'C - Gerenciar contêineres usando Kubernetes', 'D - Suportar o desenvolvimento, entrega e operações'],
      respostaCorreta: 'D',
    },
    {
      pergunta: '10- O que é o Azure Monitor?',
      opcoes: ['A - Um serviço para armazenamento em nuvem', 'B - Um serviço de monitoramento de tráfego', 'C - Uma ferramenta para análise de big data', 'D - Uma plataforma para desenvolvimento de jogos'],
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

export default QuarentaResultado;
