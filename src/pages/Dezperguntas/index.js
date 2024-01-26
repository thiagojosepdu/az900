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
      pergunta: '1-Para cada uma das seguintes declarações, selecione a verdadeira.',
      opcoes: ['A - A America do Norte é representada por uma única região do azure', 'B - Cada região do azure tem vários datacenters', 'C - A transferência de dados entre os serviços do azure localizados em diferentes regiões do azure sao sempre gratuitas'],
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
    navigate(`/resultado?acertos=${porcentagemAcertos}`, { state: { respostasCorretas } });
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