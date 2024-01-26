// pergunta.js

import React, { useState, useEffect } from 'react';
import './pergunta.css';
import { Link } from 'react-router-dom';


function Pergunta() {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostasUsuario, setRespostasUsuario] = useState([]);
  const [respostaCorreta, setRespostaCorreta] = useState(null);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [quantidadePerguntas, setQuantidadePerguntas] = useState(10);

  const perguntas = [
    // Lista de perguntas
  ];

  useEffect(() => {
    setRespostaSelecionada(null);
    setRespostasUsuario([]);
    setRespostaCorreta(null);
    setPerguntaAtual(0);
  }, [quantidadePerguntas]);

  const handleResposta = (resposta) => {
    const respostaCorretaAtual = perguntas[perguntaAtual].respostaCorreta;
    const respostaCorreta = resposta === respostaCorretaAtual;

    setRespostaCorreta(respostaCorreta);

    const respostaObj = { pergunta: perguntaAtual, respostaUsuario: resposta, correta: respostaCorreta };
    setRespostasUsuario([...respostasUsuario, respostaObj]);
    setRespostaSelecionada(resposta);
  };

  const calcularPerguntasCorretas = () => {
    return respostasUsuario.filter((resposta) => resposta.correta).length;
  };

  const calcularPorcentagemAcertos = () => {
    const perguntasCorretas = calcularPerguntasCorretas();
    return (perguntasCorretas / quantidadePerguntas) * 100;
  };

  const handleProximaPergunta = () => {
    if (perguntaAtual < quantidadePerguntas - 1) {
      setPerguntaAtual(perguntaAtual + 1);
      setRespostaCorreta(null);
      setRespostaSelecionada(null);
    }
  };

  const concluirPerguntas = () => {
    setPerguntaAtual(quantidadePerguntas);
  };

  const iniciarPerguntas = (quantidade) => {
    setQuantidadePerguntas(quantidade);
  };

  return (
    <div className="pergunta-container">
      {perguntaAtual === 0 && (
        <div className="selecao-inicial">
          <h1>Selecione o simulado desejado:</h1>
          <div style={{ margin: '20px 0' }}>
          <Link to="/dezperguntas">
            <button style={{ marginRight: '30px' }} onClick={() => iniciarPerguntas(10)}>          
              Simulado A
            </button>
          </Link >

          <Link to="/quinzeperguntas"> 
            <button style={{ marginRight: '30px' }} onClick={() => iniciarPerguntas(15)}>
            Simulado B
            </button>
          </Link >
          
          <Link to="/vinteperguntas"> 
            <button style={{ marginRight: '30px' }} onClick={() => iniciarPerguntas(20)}>
            Simulado C
            </button>
          </Link >


          <Link to="/trintaperguntas"> 
            <button style={{ marginRight: '30px' }} onClick={() => iniciarPerguntas(25)}>
            Simulado D
            </button>
          </Link >


          <Link to="/quarentaperguntas"> 
            <button style={{ marginRight: '30px' }} onClick={() => iniciarPerguntas(30)}>
            Simulado E
            </button>
          </Link >
            {/* Adicione mais botões conforme necessário */}
          </div>
        </div>
      )}

      {perguntaAtual > 0 && perguntaAtual <= quantidadePerguntas ? (
        <div className="pergunta-box">
          <h1>Pergunta {perguntaAtual} - {perguntas[perguntaAtual - 1].pergunta}</h1>
          <ul>
            {perguntas[perguntaAtual - 1].opcoes.map((opcao, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="resposta"
                    value={opcao[0]}
                    checked={respostaSelecionada === opcao[0]}
                    onChange={() => handleResposta(opcao[0])}
                  />
                  {opcao}
                </label>
              </li>
            ))}
          </ul>
          {respostaCorreta !== null && (
            <p>{respostaCorreta ? 'Resposta Correta!' : 'Resposta Incorreta.'}</p>
          )}
          {perguntaAtual === quantidadePerguntas && (
            <button onClick={concluirPerguntas}>Concluir Perguntas</button>
          )}
          {perguntaAtual < quantidadePerguntas && (
            <button onClick={handleProximaPergunta}>Próxima Pergunta</button>
          )}
        </div>
      ) : null}

      {perguntaAtual > 0 && perguntaAtual > quantidadePerguntas && (
        <div className="resultado-box">
          <h1>Quiz concluído!</h1>
          <h2>Respostas:</h2>
          <ul>
            {respostasUsuario.map((resposta, index) => (
              <li key={index}>
                Pergunta {resposta.pergunta + 1}: {resposta.respostaUsuario} ({resposta.correta ? 'Correta' : 'Incorreta'})
              </li>
            ))}
          </ul>
          <p>Perguntas corretas: {calcularPerguntasCorretas()} de {quantidadePerguntas}</p>
          <p>Porcentagem de acertos: {calcularPorcentagemAcertos()}%</p>
        </div>
      )}
    </div>
  );
}

export default Pergunta;
