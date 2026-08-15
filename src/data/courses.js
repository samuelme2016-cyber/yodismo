export const modulesData = [
  {
    id: "lives-gravadas",
    badge: "MÓDULO 1",
    title: "LIVES GRAVADAS",
    subtitle: "Lives na Prática para TikTok Shop",
    description: "Assista às lives gravadas e veja na prática estratégias para vender através do TikTok Shop.",
    detailDescription: "Conteúdos gravados para você aprender na prática como utilizar Lives no TikTok Shop.",
    coverImage: "./assets/cover_lives_gravadas.jpg",
    color: "cyan",
    gradient: "from-cyan-500/20 via-slate-900 to-slate-950",
    accentBorder: "group-hover:border-cyan-500/50",
    accentGlow: "group-hover:shadow-[0_0_30px_rgba(0,242,254,0.25)]",
    badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    buttonBg: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold",
    lessons: [
      {
        id: "aula-01",
        number: "AULA 01",
        title: "Baixando o Live Studio e fazendo as configurações básicas",
        duration: "18 min",
        thumbnail: "./assets/thumb_live_aula01.jpg",
        videoUrl: "https://youtu.be/WBu2wy-mLas",
        description: "Aprenda a fazer o download seguro do TikTok Live Studio oficial, realizar o processo de instalação e configurar os parâmetros essenciais de resolução, câmera, microfone e qualidade para a sua primeira transmissão."
      },
      {
        id: "aula-02",
        number: "AULA 02",
        title: "Live Studio — Configurações avançadas",
        duration: "24 min",
        thumbnail: "./assets/thumb_live_aula02.jpg",
        videoUrl: "https://youtu.be/E-3ik79rDEE",
        description: "Domine os recursos avançados do Live Studio: ajuste fino de bitrate de vídeo, codificação por GPU, gerenciamento de cenas, atalhos de teclado e integração direta com o catálogo de produtos do TikTok Shop."
      },
      {
        id: "aula-03",
        number: "AULA 03",
        title: "TikTok Web — Tudo pronto para rodar a primeira Live",
        duration: "20 min",
        thumbnail: "./assets/thumb_live_aula03.jpg",
        videoUrl: "https://youtu.be/4MYHyDpMNIA",
        description: "Passo a passo pelo painel do TikTok Web para preparar o título da transmissão, selecionar a categoria do produto, vincular cupons de desconto ao vivo e verificar a saúde da conta antes de iniciar a Live."
      },
      {
        id: "aula-04",
        number: "AULA 04",
        title: "Como funciona a extensão de Live",
        duration: "15 min",
        thumbnail: "./assets/thumb_live_aula04.jpg",
        videoUrl: "https://youtu.be/ec7q1M5dfp4",
        description: "Entenda em detalhes o funcionamento da extensão de Live para otimizar suas vendas: fixação automática de produtos na tela, exibição de notificações de compras em tempo real e automação de engajamento do chat."
      }
    ]
  },
  {
    id: "videos-com-ia",
    badge: "MÓDULO 2",
    title: "VÍDEOS COM IA",
    subtitle: "Criação de Conteúdo Automatizado com Inteligência Artificial",
    description: "Aprenda a criar vídeos utilizando Inteligência Artificial para publicar e vender no TikTok Shop.",
    detailDescription: "Aprenda a utilizar Inteligência Artificial para criar vídeos estratégicos para o TikTok Shop.",
    coverImage: "./assets/cover_videos_ia.jpg",
    color: "pink",
    gradient: "from-pink-500/20 via-slate-900 to-slate-950",
    accentBorder: "group-hover:border-pink-500/50",
    accentGlow: "group-hover:shadow-[0_0_30px_rgba(254,44,85,0.25)]",
    badgeBg: "bg-pink-500/10 text-pink-400 border-pink-500/30",
    buttonBg: "bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold",
    lessons: [
      {
        id: "aula-01",
        number: "AULA 01",
        title: "Aulão Vídeo com IA",
        duration: "45 min",
        thumbnail: "./assets/thumb_ia_aulao.jpg",
        videoUrl: "https://youtu.be/MqV0P1mhtVs",
        description: "Aulão completo e intensivo ensinando a utilizar Inteligência Artificial do zero para criar, editar e publicar vídeos de alta conversão para o TikTok Shop. Aprenda a gerar roteiros virais, vozes sintéticas ultra-realistas, avatares e criativos focados em vendas.",
        materials: [
          {
            id: "mat-01",
            badge: "MATERIAL 01",
            title: "CRIADOR DE INFLUENCER",
            description: "Agente utilizado para analisar uma imagem de referência e criar uma descrição detalhada da personagem para utilização em ferramentas de IA generativa.",
            agentUrl: "https://chatgpt.com/g/g-6a4d0b583bbc81918702d66d54ecbc8c-agente-criador-de-influencer",
            buttonText: "ACESSAR AGENTE",
            promptSection: {
              title: "PROMPT PARA INICIAR O AGENTE",
              explanation: "Copie este prompt e envie ao agente sempre que iniciar uma nova conversa.",
              promptText: `SEMPRE MANDE ISSO AO INICIAR A CONVERSA COM O AGENTE

Analise detalhadamente a mulher na imagem anexada e me retorne um JSON completo descrevendo todas as características físicas dela para que eu possa recriar uma pessoa visualmente idêntica usando IA generativa.

O JSON deve conter obrigatoriamente os seguintes campos:

{
"rosto": {
"formato": "",
"maças_do_rosto": "",
"mandibula": "",
"queixo": ""
},
"pele": {
"tom": "",
"subtom": "",
"textura": "",
"imperfeicoes_naturais": ""
},
"olhos": {
"formato": "",
"cor": "",
"tamanho": "",
"cilios": "",
"sobrancelhas": ""
},
"nariz": {
"formato": "",
"tamanho": "",
"ponta": ""
},
"labios": {
"volume": "",
"formato": "",
"cor_natural": ""
},
"cabelo": {
"cor": "",
"tom": "",
"comprimento": "",
"textura": "",
"estilo": ""
},
"maquiagem": {
"estilo": "",
"base": "",
"olhos": "",
"labios": "",
"blush": "",
"iluminador": ""
},
"corpo": {
"biotipo": "",
"silhueta": "",
"altura_estimada": ""
},
"acessorios": {
"brincos": "",
"colares": "",
"outros": ""
},
"expressao": {
"padrao": "",
"energia": "",
"olhar": ""
},
"estilo_geral": {
"vibe": "",
"personalidade_visual": "",
"nivel_de_beleza": ""
},
"instrucoes_geracao": {
"camera": "",
"angulo": "",
"iluminacao": "",
"fundo": "",
"realismo": ""
}
}

Seja extremamente detalhado em cada campo. Não generalize — descreva o que você realmente vê na foto. O objetivo é que outra IA consiga recriar essa mulher com fidelidade máxima.`
            }
          },
          {
            id: "mat-02",
            badge: "MATERIAL 02",
            title: "AGENTE PARA CRIAR VÍDEOS COM IA",
            description: "Use este agente para criar os vídeos de IA apresentados nesta aula.",
            agentUrl: "https://chatgpt.com/g/g-p-6a80aeefc19c81919ec2da24f18f0b26-tts-formatos/project",
            buttonText: "ACESSAR AGENTE"
          }
        ]
      }
    ]
  }
];
