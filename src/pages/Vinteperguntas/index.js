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
    navigate(`/vinteresultado?acertos=${porcentagemAcertos}`, { state: { respostasCorretas } });
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