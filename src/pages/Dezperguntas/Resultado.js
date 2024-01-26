import React from 'react';
import { useLocation } from 'react-router-dom';
import './pergunta.css';

function Resultado() {
  const location = useLocation();
  const acertos = new URLSearchParams(location.search).get('acertos');
  const respostasCorretas = location.state?.respostasCorretas || [];

  // Array de perguntas com opções e respostas corretas
  const perguntas = [
    {
      pergunta: '1-Para cada uma das seguintes declarações, selecione a verdadeira.',
      opcoes: ['A - A America do Norte é representada por uma única região do azure', 'B - Cada região do azure tem vários datacenters', 'C - A transferencia de dados entre os serviços do azure localizados em diferentes regioes do azure sao sempre gratuitas'],
      respostaCorreta: 'B',
    },
    {
      pergunta: '2-Para cada uma das seguintes declarações, selecione a verdadeira.',
      opcoes: ['A - Os dados armazenados em uma conta de armazenamento do Azure tem automaticamente pelo menos três cópias', 'B - Todos os dados copiados para uma conta de armazenamento do Azure são copiados automaticamente para outro datacenter do Azure', 'C - Uma conta de Armazenamento do Azure pode conter até 2TB de dados e até uma milhão de arquivos'],
      respostaCorreta: 'A',
    },
    {
      pergunta: '3-Sua empresa tem 10 departamentos. A empresa planeja implementar um ambiente Azure. Você precisa garantir que cada departamento possa usar uma opção de pagamento diferente para os serviços do Azure que consome. O que você deve criar para cada departamento?',
      opcoes: ['A - um grupo de recursos', 'B - uma instância de contêiner', 'C - uma reserva', 'D - uma assinatura'],
      respostaCorreta: 'D',
    },
    {
      pergunta: '4-Selecione a resposta que conclui corretamente a frase. [Opção de resposta] refere-se aos custos iniciais incorridos uma vez, como compras de hardware.',
      opcoes: ['A - Um modelo baseado em consumo', 'B - Despesas de capital', 'C - Elasticidade', 'D - Despesas operacionais'],
      respostaCorreta: 'B',
    },
    {
      pergunta: '5-Aumentar a capacidade de computação de um aplicativo adicionando RAM ou CPUs a uma máquina virtual é chamado de [opção de resposta].',
      opcoes: ['A - recuperação de desastre', 'B - alta disponibilidade', 'C - dimensionamento horizontal', 'D - dimensionamento vertical'],
      respostaCorreta: 'D',
    },
    {
      pergunta: '6-Implantar e configurar recursos baseados em nuvem rapidamente à medida que os requisitos de negócios mudam é chamado de [opção de resposta].',
      opcoes: ['A - agilidade', 'B - elasticidade', 'C - alta disponibilidade', 'D - escalabilidade'],
      respostaCorreta: 'A',
    },
    {
      pergunta: '7-Aumentar a capacidade de computação de um aplicativo adicionando instâncias de recursos, como máquinas virtuais, é chamado de [opção de resposta].',
      opcoes: ['A - recuperação de desastre', 'B - alta disponibilidade', 'C - dimensionamento horizontal', 'D - dimensionamento vertical'],
      respostaCorreta: 'C',
    },
    {
      pergunta: '8-Do que depende a alta disponibilidade em um ambiente de nuvem pública?',
      opcoes: ['A - despesas de capital', 'B - limites de retenção de backup baseado em nuvem', 'C - o Contrato de Nível de Serviço (SLA) escolhido', 'D - a escalabilidade vertical de um aplicativo'],
      respostaCorreta: 'C',
    },
    {
      pergunta: '9-Um exemplo de [opção de resposta] é dimensionar automaticamente um aplicativo para garantir que o aplicativo tenha os recursos necessários para atender às demandas dos clientes.',
      opcoes: ['A - agilidade', 'B - elasticidade', 'C - distribuição geográfica', 'D - alta disponibilidade'],
      respostaCorreta: 'B',
    },
    {
      pergunta: '10-Na computação em nuvem, [opção de resposta] permite implantar aplicativos em datacenters regionais em todo o mundo.',
      opcoes: ['A - recuperação de desastre', 'B - elasticidade', 'C - localização geográfica', 'D - alta disponibilidade'],
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

export default Resultado;
