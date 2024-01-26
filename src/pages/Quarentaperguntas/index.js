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
    navigate(`/quarentaresultado?acertos=${porcentagemAcertos}`, { state: { respostasCorretas } });
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