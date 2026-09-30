// ============================================================
// Quiz: Robótica Industrial, Sensores e IoT — NexTheis IoT
// ============================================================

const QUESTOES = [
  // 1) ROBÔS
  {
    area: "Robótica Industrial",
    contexto: "Uma indústria alimentícia deseja aumentar a velocidade de separação e embalagem de pequenos itens em uma linha de produção, exigindo ciclos de altíssima velocidade (mais de 150 movimentos por minuto). O robô será montado em uma estrutura fixa suspensa acima da esteira, movimentando apenas um efetuador leve para captar os itens.",
    pergunta: "Considerando as características de cada tipo de robô industrial, qual modelo é o mais adequado para essa aplicação?",
    alternativas: [
      { texto: "Robô Cartesiano, pois sua estrutura rígida em três eixos lineares garante a maior precisão absoluta entre todos os tipos.", correta: false },
      { texto: "Robô Polar, por ser historicamente o primeiro tipo de robô industrial utilizado em linhas de alta velocidade.", correta: false },
      { texto: "Robô Delta, por sua estrutura paralela leve, montada acima da linha, que permite acelerações e velocidades muito altas em tarefas de pick and place.", correta: true },
      { texto: "Robô Cilíndrico, por possuir o menor custo entre os tipos e ser ideal para altíssima velocidade.", correta: false }
    ]
  },

  // 2) SENSORES (1)
  {
    area: "Sensores IoT",
    contexto: "Em uma linha de produção, é necessário contar automaticamente quantas peças metálicas passam por um determinado ponto da esteira. A solução não pode ter contato físico com as peças, pois isso desgastaria o sensor rapidamente.",
    pergunta: "Qual sensor é o mais indicado para essa aplicação?",
    alternativas: [
      { texto: "Sensor Indutivo (ex: LJ12A3), pois gera um campo eletromagnético que detecta a aproximação de objetos metálicos sem contato físico.", correta: true },
      { texto: "Sensor Capacitivo (ex: LJ18A3), pois detecta exclusivamente objetos metálicos através de variação de capacitância.", correta: false },
      { texto: "LDR, pois sua resistência varia proporcionalmente à quantidade de metal presente no ambiente.", correta: false },
      { texto: "DHT22, pois é capaz de identificar metais através da variação da umidade relativa do ar.", correta: false }
    ]
  },

  // 3) SENSORES (2)
  {
    area: "Sensores IoT",
    contexto: "Um sistema de irrigação automática precisa acionar uma bomba d'água sempre que o solo de uma horta estiver seco, monitorando continuamente o teor de água presente na terra ao longo de várias semanas de uso contínuo.",
    pergunta: "Qual sensor é o mais apropriado para viabilizar esse sistema com maior durabilidade?",
    alternativas: [
      { texto: "Sensor de chuva FC-37, pois é projetado especificamente para medir a umidade presente dentro da terra.", correta: false },
      { texto: "Sensor capacitivo de umidade do solo, pois mede o teor de água presente na terra sem sofrer corrosão dos eletrodos, ao contrário dos modelos resistivos.", correta: true },
      { texto: "Sensor de nível tipo boia, pois foi projetado para detectar umidade em terrenos abertos como hortas.", correta: false },
      { texto: "MQ-135, pois mede a concentração de vapor de água presente no solo através de gases.", correta: false }
    ]
  },

  // 4) MULTÍMETRO (com imagem)
  {
    area: "Multímetro",
    contexto: "Antes de conectar um sensor a uma placa NodeMCU, um técnico decide verificar se a fonte de alimentação está realmente fornecendo os 5V esperados. Ele configura o multímetro conforme a imagem abaixo e realiza a medição entre o pino 5V e o pino GND da placa.",
    pergunta: "Considerando a configuração do multímetro e a leitura indicada no visor, qual é a conclusão mais adequada sobre o estado da alimentação?",
    imagem: { src: "./img/quiz/multimetro-dcv.svg", alt: "Multímetro digital configurado na escala de tensão contínua (DC V), exibindo a leitura 4.98 no visor" },
    alternativas: [
      { texto: "A fonte está fornecendo uma tensão dentro da faixa esperada para alimentar corretamente um circuito de 5V.", correta: true },
      { texto: "A fonte está com defeito grave, pois o valor deveria ser exatamente 5,00V, sem nenhuma variação.", correta: false },
      { texto: "O multímetro foi configurado incorretamente, pois deveria medir corrente elétrica (A) e não tensão (V).", correta: false },
      { texto: "A leitura obtida indica um curto-circuito entre os pinos 5V e GND da placa.", correta: false }
    ]
  },

  // 5) ARDUINO (1)
  {
    area: "Arduino",
    contexto: "Um estudante deseja ler a tensão gerada por um sensor LM35 através de uma entrada analógica do Arduino Uno, convertendo posteriormente essa leitura em graus Celsius.",
    pergunta: "Sabendo que o conversor analógico-digital (ADC) do Arduino Uno possui resolução de 10 bits, qual é a faixa de valores retornada pela função analogRead()?",
    alternativas: [
      { texto: "De 0 a 255", correta: false },
      { texto: "De 0 a 1023", correta: true },
      { texto: "De 0 a 4095", correta: false },
      { texto: "De 0 a 100", correta: false }
    ]
  },

  // 6) ARDUINO (2)
  {
    area: "Arduino",
    contexto: "Durante a montagem de um circuito com um sensor PIR conectado a uma entrada digital do Arduino Uno, um estudante percebeu que o LED conectado a uma saída digital não acendia, mesmo quando havia movimento sendo detectado no ambiente.",
    pergunta: "Qual das opções abaixo representa a causa mais provável para esse problema?",
    alternativas: [
      { texto: "O sensor PIR é incompatível com o Arduino Uno e só funciona com placas ESP8266.", correta: false },
      { texto: "O pino do LED não foi configurado corretamente como saída com pinMode(pino, OUTPUT) dentro da função setup().", correta: true },
      { texto: "O Arduino Uno não possui pinos digitais suficientes para esse tipo de projeto.", correta: false },
      { texto: "O sensor PIR só pode ser conectado a uma entrada analógica do Arduino.", correta: false }
    ]
  },

  // 7) ESP8266
  {
    area: "ESP8266 / NodeMCU",
    contexto: "Um estudante deseja conectar um sensor DHT22, originalmente utilizado em projetos com sinais de até 5V, diretamente a uma entrada digital de uma placa NodeMCU (ESP8266).",
    pergunta: "Qual cuidado técnico deve ser considerado nessa integração?",
    alternativas: [
      { texto: "Nenhum cuidado é necessário, pois todos os pinos do ESP8266 suportam sinais de 5V normalmente.", correta: false },
      { texto: "Deve-se utilizar um divisor de tensão ou conversor de nível lógico, já que os pinos do ESP8266 operam com lógica de 3,3V.", correta: true },
      { texto: "O sensor DHT22 não pode ser utilizado em nenhuma hipótese com microcontroladores ESP8266.", correta: false },
      { texto: "É necessário elevar a tensão de alimentação do sensor para 9V antes de conectá-lo ao ESP8266.", correta: false }
    ]
  },

  // 8) CÓDIGO (1) — imagem tipo screenshot VS Code
  {
    area: "Código",
    contexto: "O trecho de código abaixo foi utilizado em um sensor ultrassônico HC-SR04 conectado a uma NodeMCU, controlando o acionamento de um LED de alerta.",
    pergunta: "Em qual unidade de medida a variável 'distancia' é calculada, e a que distância máxima o LED é aceso?",
    imagem: { src: "./img/quiz/codigo1-distancia.png", alt: "Código Arduino calculando a distância a partir do tempo de eco de um sensor ultrassônico", tipo: "codigo" },
    alternativas: [
      { texto: "Metros; o LED acende quando um objeto está a até 20 metros de distância.", correta: false },
      { texto: "Centímetros; o LED acende quando um objeto está a até 20 cm de distância.", correta: true },
      { texto: "Milímetros; o LED acende quando um objeto está a até 20 mm de distância.", correta: false },
      { texto: "Polegadas; o LED acende quando um objeto está a até 20 polegadas de distância.", correta: false }
    ]
  },

  // 9) CÓDIGO (2) — bug spotting
  {
    area: "Código",
    contexto: "Um estudante montou o código abaixo para piscar um LED conectado ao pino D2 de uma NodeMCU, mas o LED permanece sempre apagado, não importa quanto tempo o circuito fique ligado.",
    pergunta: "Qual é o erro presente nesse código que impede o funcionamento correto do LED?",
    imagem: { src: "./img/quiz/codigo2-led.png", alt: "Código Arduino com função setup() e loop() controlando um LED no pino D2", tipo: "codigo" },
    alternativas: [
      { texto: "A função delay() não pode ser utilizada dentro da função loop().", correta: false },
      { texto: "Falta configurar o pino do LED como saída com pinMode(LED, OUTPUT) dentro da função setup().", correta: true },
      { texto: "O valor HIGH deveria ser substituído pelo número 1023 para acender o LED corretamente.", correta: false },
      { texto: "A linha Serial.begin(115200) está impedindo o funcionamento das demais linhas do código.", correta: false }
    ]
  },

  // 10) CÓDIGO (3) — map()
  {
    area: "Código",
    contexto: "Um Arduino lê o valor de um potenciômetro conectado ao pino A0 (variação de 0 a 1023) e utiliza a função map() para converter essa leitura para uma nova faixa, de 10 a 60, antes de exibir o resultado no Monitor Serial.",
    pergunta: "Considerando que a leitura de analogRead(A0) retornou o valor 512 (aproximadamente a metade da escala), qual valor será impresso no Monitor Serial?",
    imagem: { src: "./img/quiz/codigo3-map.png", alt: "Código Arduino utilizando a função map() para converter a leitura de um potenciômetro", tipo: "codigo" },
    alternativas: [
      { texto: "512", correta: false },
      { texto: "60", correta: false },
      { texto: "35", correta: true },
      { texto: "10", correta: false }
    ]
  }
];

// ============================================================
// Estado do jogo
// ============================================================
const CHAVE_RANKING = "nextheis_quiz_ranking_v1";
const MAX_RANKING_ENTRIES = 100;
const PONTOS_POR_ACERTO = 10;

let perguntasEmbaralhadas = [];
let indiceAtual = 0;
let acertos = 0;
let erros = 0;
let respondeuAtual = false;
let nomeJogador = "";
let tempoInicio = 0;

const telaIntro = document.getElementById("tela-intro");
const telaQuiz = document.getElementById("tela-quiz");
const telaResultado = document.getElementById("tela-resultado");
const telaRanking = document.getElementById("tela-ranking");

function embaralhar(array) {
  const copia = array.slice();
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function iniciarQuiz() {
  const inputNome = document.getElementById("input-nome-jogador");
  if (inputNome) {
    const valor = inputNome.value.trim();
    nomeJogador = valor === "" ? "Jogador Anônimo" : valor.slice(0, 20);
  } else if (!nomeJogador) {
    nomeJogador = "Jogador Anônimo";
  }

  tempoInicio = Date.now();

  // Embaralha a ordem das alternativas de cada questão (mantendo a original intacta)
  perguntasEmbaralhadas = QUESTOES.map((q) => {
    const alternativas = embaralhar(q.alternativas);
    return { ...q, alternativas };
  });

  indiceAtual = 0;
  acertos = 0;
  erros = 0;

  telaIntro.classList.add("escondido");
  telaResultado.classList.add("escondido");
  telaRanking.classList.add("escondido");
  telaQuiz.classList.remove("escondido");

  renderizarQuestao();
}

function renderizarQuestao() {
  respondeuAtual = false;
  const q = perguntasEmbaralhadas[indiceAtual];
  const total = perguntasEmbaralhadas.length;

  document.getElementById("quiz-progresso-texto").textContent =
    `Questão ${indiceAtual + 1} de ${total}`;
  document.getElementById("quiz-progresso-barra").style.width =
    `${(indiceAtual / total) * 100}%`;

  document.getElementById("quiz-area-badge").textContent = q.area;
  document.getElementById("quiz-contexto").textContent = q.contexto;
  document.getElementById("quiz-pergunta").textContent = q.pergunta;

  const imgContainer = document.getElementById("quiz-imagem-container");
  imgContainer.innerHTML = "";
  if (q.imagem) {
    const img = document.createElement("img");
    img.src = q.imagem.src;
    img.alt = q.imagem.alt;
    img.className = q.imagem.tipo === "codigo" ? "quiz-img quiz-img-codigo" : "quiz-img";
    imgContainer.appendChild(img);
    imgContainer.classList.remove("escondido");
  } else {
    imgContainer.classList.add("escondido");
  }

  const letras = ["A", "B", "C", "D"];
  const lista = document.getElementById("quiz-alternativas");
  lista.innerHTML = "";

  q.alternativas.forEach((alt, idx) => {
    const btn = document.createElement("button");
    btn.className = "alternativa";
    btn.innerHTML = `<span class="alternativa-letra">${letras[idx]}</span><span class="alternativa-texto">${alt.texto}</span>`;
    btn.addEventListener("click", () => responder(idx));
    lista.appendChild(btn);
  });

  document.getElementById("quiz-proxima-btn").classList.add("escondido");
  document.getElementById("quiz-feedback").textContent = "";
  document.getElementById("quiz-feedback").className = "quiz-feedback";
}

function responder(idxEscolhido) {
  if (respondeuAtual) return;
  respondeuAtual = true;

  const q = perguntasEmbaralhadas[indiceAtual];
  const botoes = document.querySelectorAll("#quiz-alternativas .alternativa");
  const feedback = document.getElementById("quiz-feedback");

  const acertou = q.alternativas[idxEscolhido].correta;

  botoes.forEach((btn, idx) => {
    btn.classList.add("desabilitada");
    if (q.alternativas[idx].correta) {
      btn.classList.add("correta");
    } else if (idx === idxEscolhido) {
      btn.classList.add("errada");
    }
  });

  if (acertou) {
    acertos++;
    feedback.textContent = "✅ Resposta correta!";
    feedback.classList.add("feedback-correto");
  } else {
    erros++;
    feedback.textContent = "❌ Resposta incorreta. A alternativa correta está destacada em verde.";
    feedback.classList.add("feedback-errado");
  }

  const total = perguntasEmbaralhadas.length;
  document.getElementById("quiz-progresso-barra").style.width =
    `${((indiceAtual + 1) / total) * 100}%`;

  const proximaBtn = document.getElementById("quiz-proxima-btn");
  proximaBtn.classList.remove("escondido");
  proximaBtn.textContent =
    indiceAtual + 1 === total ? "Ver resultado" : "Próxima questão →";
}

function proximaQuestao() {
  indiceAtual++;
  if (indiceAtual >= perguntasEmbaralhadas.length) {
    mostrarResultado();
  } else {
    renderizarQuestao();
  }
}

function mostrarResultado() {
  telaQuiz.classList.add("escondido");
  telaResultado.classList.remove("escondido");

  const total = perguntasEmbaralhadas.length;
  const percentual = Math.round((acertos / total) * 100);
  const pontos = acertos * PONTOS_POR_ACERTO;
  const tempoSegundos = Math.round((Date.now() - tempoInicio) / 1000);

  document.getElementById("resultado-acertos").textContent = acertos;
  document.getElementById("resultado-erros").textContent = erros;
  document.getElementById("resultado-percentual").textContent = `${percentual}%`;
  document.getElementById("resultado-pontos").textContent = pontos;

  const mensagem = document.getElementById("resultado-mensagem");
  if (percentual >= 80) {
    mensagem.textContent = "Excelente! Você domina muito bem o conteúdo do site. 🏆";
  } else if (percentual >= 50) {
    mensagem.textContent = "Bom resultado! Revise os tópicos que errou para fixar ainda mais o conteúdo. 👍";
  } else {
    mensagem.textContent = "Vale a pena revisar as páginas do site antes de tentar novamente. 📚";
  }

  const posicao = registrarPontuacao(nomeJogador, acertos, erros, pontos, tempoSegundos);
  const posicaoTexto = document.getElementById("resultado-posicao");
  posicaoTexto.textContent =
    `${nomeJogador}, você entrou no ranking deste navegador na posição #${posicao} com ${pontos} pontos (tempo: ${formatarTempo(tempoSegundos)}).`;
}

function reiniciarQuiz() {
  telaResultado.classList.add("escondido");
  telaRanking.classList.add("escondido");
  telaIntro.classList.remove("escondido");
}

// ============================================================
// Ranking (100% local, via localStorage — sem backend/servidor)
// ============================================================

function carregarRanking() {
  try {
    const dados = localStorage.getItem(CHAVE_RANKING);
    return dados ? JSON.parse(dados) : [];
  } catch (erro) {
    console.error("Não foi possível ler o ranking do localStorage:", erro);
    return [];
  }
}

function salvarRanking(lista) {
  try {
    localStorage.setItem(CHAVE_RANKING, JSON.stringify(lista));
    return true;
  } catch (erro) {
    console.error("Não foi possível salvar o ranking no localStorage:", erro);
    return false;
  }
}

function ordenarRanking(lista) {
  // Critério: mais pontos primeiro; em empate, menor tempo vence
  return lista.slice().sort((a, b) => {
    if (b.pontos !== a.pontos) return b.pontos - a.pontos;
    return a.tempoSegundos - b.tempoSegundos;
  });
}

// Salva a pontuação da partida atual no ranking local e retorna a posição (1º, 2º...)
function registrarPontuacao(nome, acertosPartida, errosPartida, pontos, tempoSegundos) {
  const lista = carregarRanking();

  const novaEntrada = {
    nome: nome,
    acertos: acertosPartida,
    erros: errosPartida,
    pontos: pontos,
    tempoSegundos: tempoSegundos,
    data: new Date().toISOString(),
  };

  lista.push(novaEntrada);

  let ordenada = ordenarRanking(lista);

  // Mantém o ranking em um tamanho razoável, preservando os melhores
  if (ordenada.length > MAX_RANKING_ENTRIES) {
    ordenada = ordenada.slice(0, MAX_RANKING_ENTRIES);
  }

  salvarRanking(ordenada);

  // Descobre a posição da entrada que acabamos de jogar
  const posicao = ordenada.findIndex((item) => item === novaEntrada) + 1;
  return posicao > 0 ? posicao : ordenada.length;
}

function formatarTempo(totalSegundos) {
  const min = Math.floor(totalSegundos / 60);
  const seg = totalSegundos % 60;
  return `${min}:${String(seg).padStart(2, "0")}`;
}

function formatarData(isoString) {
  const d = new Date(isoString);
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "2-digit" });
}

function renderizarRanking() {
  const lista = ordenarRanking(carregarRanking());
  const container = document.getElementById("ranking-lista");
  const avisoVazio = document.getElementById("ranking-vazio");

  container.innerHTML = "";

  if (lista.length === 0) {
    avisoVazio.classList.remove("escondido");
    return;
  }
  avisoVazio.classList.add("escondido");

  const medalhas = ["🥇", "🥈", "🥉"];

  lista.forEach((item, idx) => {
    const linha = document.createElement("div");
    linha.className = "ranking-linha";
    if (idx < 3) linha.classList.add("ranking-top3");

    const posicaoTexto = medalhas[idx] || `${idx + 1}º`;

    linha.innerHTML = `
      <span class="ranking-posicao">${posicaoTexto}</span>
      <span class="ranking-nome">${escapeHTML(item.nome)}</span>
      <span class="ranking-detalhe">${item.acertos}/10 acertos</span>
      <span class="ranking-detalhe">⏱ ${formatarTempo(item.tempoSegundos)}</span>
      <span class="ranking-pontos">${item.pontos} pts</span>
      <span class="ranking-data">${formatarData(item.data)}</span>
    `;
    container.appendChild(linha);
  });
}

function escapeHTML(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

function mostrarTelaRanking() {
  telaIntro.classList.add("escondido");
  telaQuiz.classList.add("escondido");
  telaResultado.classList.add("escondido");
  telaRanking.classList.remove("escondido");
  renderizarRanking();
}

function limparRanking() {
  const confirmar = confirm(
    "Tem certeza que deseja apagar todo o ranking salvo neste navegador? Essa ação não pode ser desfeita."
  );
  if (!confirmar) return;
  localStorage.removeItem(CHAVE_RANKING);
  renderizarRanking();
}

document.getElementById("btn-jogar").addEventListener("click", iniciarQuiz);
document.getElementById("quiz-proxima-btn").addEventListener("click", proximaQuestao);
document.getElementById("btn-jogar-novamente").addEventListener("click", iniciarQuiz);
document.getElementById("btn-voltar-inicio").addEventListener("click", reiniciarQuiz);
document.getElementById("btn-ver-ranking-intro").addEventListener("click", mostrarTelaRanking);
document.getElementById("btn-ver-ranking-resultado").addEventListener("click", mostrarTelaRanking);
document.getElementById("btn-ranking-voltar").addEventListener("click", reiniciarQuiz);
document.getElementById("btn-limpar-ranking").addEventListener("click", limparRanking);