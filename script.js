const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da aula de programação você se depara com uma nova linguagem de programação que promete facilitar a criação de projetos complexos. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é intimidante!",
                afirmacao: "No início ficou apreensivo com a ideia de aprender uma nova linguagem e o impacto que isso poderia ter no seu fluxo de trabalho."
            },
            {
                texto: "Isso é empolgante!",
                afirmacao: "Quis explorar a nova linguagem e ver como ela pode melhorar seus projetos e simplificar seu código."
            }
        ]
    },
    {
        enunciado: "Com a introdução desta nova linguagem de programação, o professor decidiu fazer uma sequência de aulas para ensinar seus conceitos. No fim de uma aula, ele pede que você crie um projeto utilizando essa nova linguagem. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza a documentação e tutoriais online da nova linguagem para entender como aplicar os conceitos no seu projeto.",
                afirmacao: "Conseguiu usar os recursos disponíveis para aprender e aplicar a nova linguagem no projeto com sucesso."
            },
            {
                texto: "Desenvolve o projeto com base nas aulas, discussões com colegas e conhecimentos prévios de programação.",
                afirmacao: "Sentiu-se mais confortável utilizando suas próprias estratégias e conhecimentos para criar o projeto."
            }
        ]
    },
    {
        enunciado: "Após a entrega do projeto, o professor organiza uma revisão em grupo para discutir as soluções adotadas e o impacto da nova linguagem no desenvolvimento de software. Como você se posiciona durante a discussão?",
        alternativas: [
            {
                texto: "Defende a ideia de que a nova linguagem pode aumentar a produtividade e melhorar a qualidade do código.",
                afirmacao: "Acredita que a nova linguagem pode impulsionar a inovação e otimizar processos de programação."
            },
            {
                texto: "Se preocupa com a curva de aprendizado e os desafios que as novas linguagens podem representar para desenvolvedores iniciantes.",
                afirmacao: "Sua preocupação levou a discutir a importância de fornecer suporte adicional para quem está aprendendo novas tecnologias."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisa criar um diagrama no computador para representar a arquitetura do seu projeto. E agora?",
        alternativas: [
            {
                texto: "Criar o diagrama utilizando uma ferramenta de design gráfico como o Microsoft Visio.",
                afirmacao: "Notou que muitos colegas ainda não dominam as ferramentas tradicionais e decidiu ajudar a ensinar o básico de design de diagramas para iniciantes."
            },
            {
                texto: "Criar o diagrama utilizando uma ferramenta de geração automática de diagramas.",
                afirmacao: "Aproveitou a agilidade das ferramentas automáticas para criar diagramas e agora pode ensinar outras pessoas a utilizá-las também."
            }
        ]
    },
    {
        enunciado: "Você tem um projeto de programação em grupo para entregar na semana seguinte, e um membro do grupo decidiu usar uma ferramenta automática para gerar o código. O problema é que o código gerado está muito parecido com o exemplo da ferramenta. O que você faz?",
        alternativas: [
            {
                texto: "Usar o código gerado pela ferramenta é uma maneira de agilizar o trabalho, então não vê problema em utilizá-lo como está.",
                afirmacao: "Acabou se tornando dependente da ferramenta automática para gerar código e agora sente dificuldade em codificar manualmente."
            },
            {
                texto: "Embora a ferramenta seja útil, é crucial revisar e personalizar o código para garantir que ele se ajuste às necessidades do projeto e reflita a visão do grupo.",
                afirmacao: "Percebeu que as ferramentas automáticas são úteis, mas o código gerado precisa ser ajustado e personalizado para o projeto específico."
            }
        ]
    }
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
