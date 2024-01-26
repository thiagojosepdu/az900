import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './pergunta.css';

function Pergunta() {
  const navigate = useNavigate();
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostasUsuario, setRespostasUsuario] = useState([]);
  const [respostaCorreta, setRespostaCorreta] = useState(null);
  const [exibirMensagemAcertos, setExibirMensagemAcertos] = useState(false);
  const [respostasCorretas, setRespostasCorretas] = useState([]);
  const [tempoDecorrido, setTempoDecorrido] = useState(0);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

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

  useEffect(() => {
    const respostasCorretasArray = perguntas.map((pergunta) => pergunta.respostaCorreta);
    setRespostasCorretas(respostasCorretasArray);
  }, []); // Executa apenas uma vez para inicializar as respostas corretas

  useEffect(() => {
    // Inicia o cronômetro
    const interval = setInterval(() => {
      setTempoDecorrido((tempo) => tempo + 1);
    }, 1000); // Atualiza a cada segundo

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  const handleResposta = (resposta) => {
    const respostaCorretaAtual = perguntas[perguntaAtual].respostaCorreta;
    setRespostaCorreta(resposta === respostaCorretaAtual);

    const respostaObj = { pergunta: perguntaAtual, respostaUsuario: resposta };
    setRespostasUsuario([...respostasUsuario, respostaObj]);
  };

  const calcularPerguntasCorretas = () => {
    return respostasUsuario.filter((resposta) => {
      const respostaCorretaAtual = perguntas[resposta.pergunta].respostaCorreta;
      return resposta.respostaUsuario === respostaCorretaAtual;
    }).length;
  };

  const calcularPorcentagemAcertos = () => {
    const perguntasCorretas = calcularPerguntasCorretas();
    return (perguntasCorretas / perguntas.length) * 100;
  };

  const concluirPerguntas = () => {
    const porcentagemAcertos = calcularPorcentagemAcertos();
    setExibirMensagemAcertos(true);

    // Passa as respostas corretas como parte da navegação
    navigate(`/trintaresultado?acertos=${porcentagemAcertos}`, { state: { respostasCorretas } });
  };

  const proximaPerguntaOuConcluir = () => {
    if (perguntaAtual < perguntas.length - 1 && respostasUsuario[perguntaAtual] !== undefined) {
      setPerguntaAtual(perguntaAtual + 1);
      setRespostaCorreta(null);
    } else if (perguntaAtual === perguntas.length - 1 && respostasUsuario[perguntaAtual] !== undefined) {
      concluirPerguntas();
    }
  };

  return (
    <div className="pergunta-container">
    <div className="cronometro">Tempo: {formatTime(tempoDecorrido)}</div>
    {perguntaAtual < perguntas.length ? (
      <div className="pergunta-box">
          <h1>Pergunta {perguntaAtual + 1}</h1>
          <p>{perguntas[perguntaAtual].pergunta}</p>
          <ul>
            {perguntas[perguntaAtual].opcoes.map((opcao, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="resposta"
                    value={opcao[0]}
                    onChange={() => handleResposta(opcao[0])}
                    checked={respostasUsuario[perguntaAtual]?.respostaUsuario === opcao[0]}
                  />
                  {opcao}
                </label>
              </li>
            ))}
          </ul>
          {respostaCorreta !== null && (
            <div>
              <p>{respostaCorreta ? 'Resposta Correta!' : 'Resposta Incorreta.'}</p>
              {perguntaAtual < perguntas.length - 1 ? (
                <button onClick={proximaPerguntaOuConcluir} disabled={!respostasUsuario[perguntaAtual]?.respostaUsuario}>
                  Próxima Pergunta
                </button>
              ) : (
                <button onClick={proximaPerguntaOuConcluir} disabled={!respostasUsuario[perguntaAtual]?.respostaUsuario}>
                  Concluir
                </button>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="resultado-box">
          {exibirMensagemAcertos && (
            <div className="mensagem-acertos">
              <p>Parabéns! Você acertou {calcularPerguntasCorretas()} de {perguntas.length} perguntas.</p>
            </div>
          )}
          <h1>Quiz concluído!</h1>
          <h2>Respostas:</h2>
          <ul>
            {respostasUsuario.map((resposta, index) => (
              <li key={index}>
                Pergunta {resposta.pergunta + 1}: {resposta.respostaUsuario} ({perguntas[resposta.pergunta].respostaCorreta})
              </li>
            ))}
          </ul>
          <p>Perguntas corretas: {calcularPerguntasCorretas()} de {perguntas.length}</p>
          <p>Porcentagem de acertos: {calcularPorcentagemAcertos()}%</p>
        </div>
      )}
    </div>
  );
}

export default Pergunta;