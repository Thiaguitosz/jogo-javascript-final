// Constantes de personagem, natureza, etc
const naturezas = [// névoa
    {
        "nome": "Códigos do Infinito ♾️",
        "desc": "Controle dos algoritmos. Sua vantagem é o Debug Eterno, seu inimigo fica 10% mais fraco durante toda a luta.",
        "habilidades": [
            { nome: "Rubber duck debugging", dano: 60 },
            { nome: "Compilador Infinito", dano: 85 },
            { nome: "Decomposição ao binário", dano: 140 }
        ]
    },
    {
        "nome": "Cálculo Sagrado 📐",
        "desc": "Similar ao poder do treinador. Sua vantagem é a Corda da Geometria Divina, seu ataque tem uma chance de prender o inimigo por uma rodada durante a batalha.",
        "habilidades": [
            { "nome": "Corte de Vértices", "dano": 60 },
            { "nome": "Parábola Ofensiva", "dano": 80 },
            { "nome": "Fermat's Final Strike", "dano": 160 }
        ]
    },
    {
        "nome": "Fluxo de Redes 🌐",
        "desc": "Poder semelhante ao DELA. O preço que se paga pelo fluxo das redes é ser corrompido aos poucos, cada ataque diminui aos poucos sua vitalidade corrompendo sua alma.",
        "habilidades": [
            { nome: "Multiplexão de pacotes de DNA", dano: 75 },
            { nome: "Invasão Digital", dano: 110 },
            { nome: "Endless Proxy Chain", dano: 200 }
        ]
    },
    {
        "nome": "Nexus Web 🕸️",
        "desc": "Capacidade de controlar a responsividade dos elementos do universo, definindo quais são as propriedades de elementos da vida real. Sua vantagem é o acesso à dimensão Live Server que te proporciona duas chances de atacar (caso erre o primeiro), já que simula a dinamicidade do ataque previamente na dimensão Live Server e só então ataca de verdade.",
        "habilidades": [
            { "nome": "Callback Hell", "dano": 70 },
            { "nome": "Manipulação final do Document Object Model", "dano": 90 },
            { "nome": "Unsolvable Promise", "dano": 140 }
        ]
    }
];

const armas = {
    Default: { nome: "Não possui", forca: 0},
    EspadaSimples: { nome: "Espada Simples", forca: 1 },
    EspadaLonga: { nome: "Espada Longa", forca: 1.5 },
    EspadaTemplaria: { nome: "Espada Sagrada ✠", forca: 3 }, 
    MachadoGélido: { nome: "Machado Gélido", forca: 5},
    EspadaGramatical: { nome: "Espada da Estrutura Sintática Absoluta", forca: 10 },
    EspadaCibernetica: { nome: "A Grande Excalibur Cibérnetica", forca: 11 }
};

const personagens = {
    Protagonista: {
        nome: "Cibely",
        vida: 100,
        arma: armas.EspadaSimples,
        get forca() {
            return this.arma.forca;
        },
        natureza: "Indefinida",
        inventario: [],
        habilidades: [
            { nome: "Chute", dano: 20 },
            { nome: "???", dano: null },
            { nome: "???", dano: null },
            { nome: "???", dano: null },
        ]
    },
    BonecoMadeira: {
        nome: "Boneco de madeira",
        vida: 60,
        forca: 0,
        arma: armas.Default,
        habilidades: [
            {nome: "Presença de madeira", dano: 99999, peso: 1}
        ]
    },
    PedroRocha: {
        nome: "Pedro Rocha",
        vida: 150,
        get forca() {
            return this.arma.forca;
        },
        arma: armas.EspadaTemplaria,
        habilidades: [
            { nome: "Fulgor da Cruzada", dano: 25, peso: 1 / 25 },  // Peso maior (comum)
            { nome: "Corte do Grande Arquiteto", dano: 30, peso: 1 / 30 },  // Peso maior (comum)
            { nome: "Ira de Hugues de Payens", dano: 60, peso: 1 / 60 }   // Peso menor (raro)
        ]
    },
    Tharcísio: {
        nome: "Rei Tharcísio",
        vida: 350,
        get forca() {
            return this.arma.forca;
        },
        arma: armas.MachadoGélido,
        habilidades: [
            { nome: "Esmaga Crânio", dano: 20, peso: 1 / 20 },  // Peso maior (comum)
            { nome: "Estacas Glaciais", dano: 25, peso: 1 / 25 },  // Peso maior (comum)
            { nome: "Fúria de Taioberen", dano: 50, peso: 1 / 50 }  // Peso menor (raro)
        ]
    },
    Luíza: {
        nome: "Luíza, a Regente do Caos da Rede Suprema",
        vida: 1000,
        get forca() {
            return this.arma.forca;
        },
        arma: armas.EspadaGramatical,
        habilidades: [
            { nome: "Correntes do Submundo Digital", dano: 150, peso: 1 / 150 },  // Habilidade comum
            { nome: "Anáfora da Dissonância Fatal", dano: 200, peso: 1 / 200 },  // Habilidade comum
            { nome: "Oração Subordinada Substantiva Objetiva Indireta Reduzida de Infinitivo", dano: 400, peso: 1 / 400 },  // Habilidade rara
            { nome: "Dilúvio Infinito de Pacotes do Caos Primordial", dano: 100, peso: 1 / 1000 }   // Habilidade lendária
        ]
    }    
}

const items = {
    "Firewall Tourniquet": {
        nome: "Firewall Tourniquet",
        atributo: 60
    },
    "Competência 1": {
        nome: "Competência 1",
        atributo: 150
    },
    "Pedra Crackau": {
        nome: "Pedra Crackau",
        atributo: 700
    }
};

function start() {
    h1(); // Começa história
    chooseNature();
    if (!b1()) { // Perdeu na b1
        mensagemDerrota("b1");
        return;
    }
    h2();
    if (!b2()) { // Perdeu na b2
        mensagemDerrota("b2"); 
        return;
    }
    h3();
    if (!b3()) { // Perdeu na b3
        mensagemDerrota("b3");
        return;
    }
    h4();
    if (!b4()) { // Perdeu na b4
        mensagemDerrota("b4");
        return;
    }
}

// Histórias 
function h1() {
    // Bloco 1.1
    mecanismoFala(`Nas ruínas de Berizalém`, `Pedro GG: Cibely... acorda Cibely... você desmaiou.
    Cibely: Onde ela está?
    Nicolas: Cibely, fuja... você é a nossa única esperança para acabar com ELA.
    Cibely: Não!! Eu tenho que lutar... desmaia
    Pedro GG: Thiago, leve-a para um lugar seguro e a treine, ela é a filha da profecia. Fujam, nós seguramos ELA.`);

    // Bloco 1.2
    skipFala()
    mecanismoFala(`Em uma caverna próxima à Serra:`, `Cibely: Onde estou?
    Thiago: Acabou, Cibely... O reino de Salinoria caiu, Paradisium está em ruínas, e Berizalém foi destruída ontem, com a chegada da Deusa das Trevas. O único império que ainda resiste é o grande reino de Taioberen.
    Cibely: Mas como isso aconteceu? Eu só me lembro de estar em Berizalém e, de repente, acordei aqui...
    Thiago: Foi há 17 anos. Um sacerdote da web e guardião do Templo Federal de Salinoria sonhou com o nascimento de uma garota cujas veias brilhavam como fibra óptica. As palavras que saíam de sua boca eram tão certas quanto a morte dos que a enfrentam. Essa garota nasceu, cresceu e fugiu da pequena vila da Luz de Miguel, vivendo na escuridão e adquirindo conhecimento.
    Thiago: Mas foi há 2 anos que o verdadeiro pesadelo começou. Ela invadiu o Templo Federal Sagrado de Salinoria e matou cada um dos guardiões do conhecimento, incluindo seu próprio pai. Desde então, usou esse poder para dominar os reinos. Ontem à noite, ela invadiu Berizalém e matou Nicolas e Pedro GG. Conseguimos fugir a tempo.
    Cibely: E vamos ficar aqui apenas observando? Eu preciso lutar!
    Thiago: ...
    Thiago: Você ainda não entende. Ela é mais forte que todos nós.
    Cibely: Então é isso? Apenas assistir à queda dos reinos, uma a uma?`)

    // Bloco 1.3
    skipFala()
    mecanismoFala(``, `Thiago: Cibely, há algo que preciso te contar... O mesmo sacerdote da web, naquele dia, também sonhou com outra face dessa história. Você ainda é nova para compreender as forças que regem este universo, mas elas estão em constante busca pelo equilíbrio. Por isso, ele fez nascer alguns meses antes, uma dualidade: outro ser capaz de igualar o poder da garota das trevas que estava por vir.
    Cibely: Onde ela está? Precisamos encontrá-la agora! É nossa única esperança.
    Thiago: Ela está aqui, na minha frente.
    Cibely: O que? Não é possível... Eu? Mas eu não consegui proteger nem meus companheiros de batalha, minha família... nem mesmo meu irmão.
    Thiago: Cibely, você é a filha da profecia, a única que pode derrotá-la. Você pode parecer fraca agora, mas precisamos treinar. Você tem um potencial enorme. Não pense nas batalhas perdidas, pense nas lutas que ainda estão por vir. Faça seu irmão se orgulhar.
    Cibely: Certo! Vamos treinar.`)
    
    // Bloco 1.4 (pré-natureza)
    skipFala()
    mecanismoFala(`Em um lago secreto aos arredores de Berizalém`, `Thiago: Antes de tudo, faremos um teste para descobrir qual a seu poder de natureza. Por exemplo, a minha natureza é o Cosmos Numérico, com ela posso executar ataques baseados em teoremas matemáticos que regem o universo. Entre no lago místico e revele sua natureza de poder.
    Cibely: Certo.`)
    skipFala() // skip final
}

function h2() {
    // Bloco 2.1
    mecanismoFala(`Pós-batalha`, `Thiago: Bom, agora você pelo menos sabe chutar kk
    Cibely: Idiota, vamos direto ao ponto... Quando vamos começar a ir atrás DELA?
    Thiago: ...
    Thiago: Calma, você só desbloqueou uma habilidade de natureza nova, um boneco de madeira não chega nem perto do poder de um dos aliados dela.
    Cibely: Aliados? Ela têm soldados das trevas?
    Thiago: E muito fortes... Muitos deles desacreditaram na profecia de uma grande heroína e preferiram pular para o outroo lado antes do fim do mundo.
    Cibely: Isso é triste, tenho que provar que ainda há esperança.
    Thiago: Exato... mas bom, vou te dar alguns presentes, você vai precisar desses itens para a próxima batalha já que ainda não possui as habilidades de sua natureza.
    Cibely: Oque são esses itens?
    Thiago: São alguns itens básicos que vão aumentar sua vida cada precise. Seu poder é basicamente um multiplicador do seu dano e é definido pela sua arma. Lembra que sempre nas batalhas você tem que decidir se deve atacar ou usar algum item, escolha cuidadosamente.
    Cibely: Okay.`)
    skipFala()
    addKitBasico()
    
    
    // Bloco 2.2
    skipFala()
    mecanismoFala("Sem rumo?", `Cibely: Tá, mas o que faremos agora?
    Thiago: Vamos encontrar um antigo companheiro de batalha, ele possuía uma Ordem de Guerreiros Templários, são um pouco mercenários, mas possuem um grande senso de justiça, eles vão poder nos ajudar.
    Cibely: Onde eles residem?
    Thiago: Pelo o que eu sei, não estão muito longe, parecem estar morando em uma fazenda abandonada aos arredores da Serra.
    Cibely: O que estamos esperando? Vamos lá!`);
    
    // Bloco 2.3
    skipFala();        
    mecanismoFala("No Caminho", `Cibely: Me conta então, o que vocês estavam fazendo em Berizalém quando ELA chegou? Não me lembro de mais nada.
    Thiago: Nicolas e eu estávamos visitando o seu irmão, foi então que ouvimos gritos no centro da cidade e fomos checar, quando chegamos lá, ELA estava aniquilando os moradores da cidade enquanto eles imploravam pela sua vida... Você acordou com o barulho ainda perto da sua casa e foi correndo nos procurar no centro, quando você chegou lá, ela percebeu quem você era e usou seu Unicast para forçar a sua mente até desmaiar, mas seu irmão e Nicolas lutaram para que pudéssemos fugir e infelizmente morreram no processo.
    Cibely: C@ralh*, eles realmente lutaram por mim, não posso os decepcionar.`);
    
    // Bloco 2.4
    skipFala();
    mecanismoFala("Chegada à Fazenda", `Thiago: Chegamos, vamos entrar.
    Cibely: Puta que pariu, esse lugar está imundo.
    Thiago: Realmente, a última vez que eu vim aqui esse lugar era bem mais organizado.
    Cibely: Será que eles abandonaram esse lugar?`);
    
    // Bloco 2.5
    skipFala();
    mecanismoFala("Encontro com Pedro Rocha", `Pedro Rocha: Quem tá aí?
    Pedro Rocha: Você *olhando para Cibely*.
    Thiago: Rocha! Quanto tempo, mano! Como andam as coisas, cadê os outros caras?
    Pedro Rocha: Eles morreram... ELA os matou.
    Thiago: Não acredito, mano. Sinto muito, mas como você conseguiu fugir? Sei que você era o Grão-Mestre, mas o poder dela é inigualável.
    Pedro Rocha: ...
    Thiago: Você não fez isso...
    *Pedro Rocha corre para cima de Thiago e o esfaqueia na barriga com uma faca envenenada, fazendo-o desmaiar*
    Pedro Rocha: Ela me deu algo que eu não pude recusar...
    Cibely: Thiago!
    Pedro Rocha: Você... é a filha da profecia não é?
    Pedro Rocha: ELA sentenciou a sua morte. Sua vida será minha!`);
    skipFala()
}

function h3() {
    // Bloco 3.1
    mecanismoFala("Pós-confronto", `Thiago: Jesus, o que aconteceu? Você está banhada em sangue. (canônico)
    Cibely: Me desculpe, eu tive que matar ele.
    Thiago: Tá, AINDA BEM que você matou ele, né porra, o desgraçado tentou me matar.
    Cibely: Sim, ele me ofereceu sua espada como sinal de arrependimento, além disso, aprendi uma nova habilidade quando matei ele, o ${personagens.Protagonista.habilidades[2].nome}.
    Thiago: Amassou, Cibs.
    Cibely: 😝
    Thiago: Nunca imaginaria que aquele cara se tornaria aliado das trevas, ele sempre foi virtuoso em relação ao mal do mundo, mas fico feliz que tenha se arrependido no leito de morte. Ele falou alguma coisa sobre ELA?
    Cibely: Ele disse que só uma tal de ${armas.EspadaCibernetica.nome} escondida em algum lugar do Reino de Taioberen seria capaz de derrotar ELA e se arrependeu de ter seguido o caminho errado por ganância.
    Thiago: Então ${armas.EspadaCibernetica.nome} está lá? Eu ouvi rumores, mas não acreditei que era real...
    Cibely: O que seria essa tal de ${armas.EspadaCibernetica.nome}?
    Thiago: É uma arma mortal, capaz de fazer até o guerreiro mais fraco 10 vezes mais forte.
    Cibely: E quem a possui?
    Thiago: Há muitos anos atrás, o antigo portador dessa espada misteriosamente morreu a caminho de Salinoria e dizem que foi saqueada de seu corpo e vendida a um comprador secreto por um valor extraordinário.
    Cibely: Então só poderia ser alguém da nobreza, correto?
    Thiago: Com certeza, temos que partir para Taioberen assim que amanhecer para investigar isso. Você PRECISA dessa espada, só assim você será capaz de usar todo o seu poder.
    Cibely: Certo!`);
    
    // Bloco 3.2
    skipFala()
    mecanismoFala("No dia seguinte, chegando em Taioberen", `Guarda do Reino: Ei! Parem aí. Vocês são aqueles que mataram os membros da Ordem dos Templários?
    Thiago: O que? Não! A gente pode explicar.
    Guarda do Reino: Calados, vocês serão levados ao Rei.
    Cibely: Que merda, mano, será que a gente...
    Thiago: Calma, Cibely. Vai dar tudo certo.`);
    
    // Bloco 3.3
    skipFala()
    mecanismoFala("Dentro castelo", `Guardas Reais: Trouxemos aqueles responsáveis por assassinar a Ordem dos Templários.
    Rei Tharcísio: Então vocês mataram meus soldados de elite? Eu os enviei para dar um fim na garota das trevas. Vocês têm ideia da merda que fizeram? Tudo pode acabar da noite pro dia e isso será culpa de vocês!
    Thiago: Tharcísio, podemos explicar. Nós não matamos eles! ELA os matou.
    Cibely: Teoricamente, eu matei o líder deles quase que só no chute kkkkkkkkk, muito otário.
    Rei Tharcísio: Quanta bobagem... Vocês esperam que eu acredite que uma garota de 18 anos seria capaz de matar os ditos soldados mais poderosos dos 4 reinos? Deveriam cortar a língua por tanta mentira.
    Thiago: É sério, a garota ao meu lado é a filha da profecia. Nós precisamos da sua ajuda para encontrar a ${armas.EspadaCibernetica.nome}.
    Rei Tharcísio: Idiotas, vocês acham mesmo que ela existe? E acham que está aqui? São mais loucos que eu.
    Maria Clara: Eu sei onde encontrar a espada!
    Rei Tharcísio: Filha? Volte para o seu quarto... você não deveria estar aqui.
    Maria Clara: Velho desgraçado, eu sei que você fez um pacto com ELA e ofereceu a espada em troca de poder mágico.
    Thiago: Isso é verdade, Rei? Não acredito...
    Cibely: Nos entregue a espada!`);
    
    // Bloco 3.4
    skipFala()
    mecanismoFala("Rei?", `Tharcísio: Bom... Vocês sabem demais. Eu dou um jeito na minha filha depois. Guardas, matem-nos. 
    *Tharcísio materializa o ${armas.MachadoGélido.nome}*
    Thiago: CIBELY, ATACA ELE, EU SEGURO OS GUARDAS.`);
    skipFala()
}

function h4() {
    // Bloco 4.1
    mecanismoFala("Pós-confronto", `Thiago: Porra, esses guardas eram fortes.
    Cibely: Eu acabei de matar o cara com a espada mais forte do mundo e você tá reclamando dos Guardas??
    Thiago: Okay, my bad. Ele falou alguma coisa?
    Cibely: Nada, ele morreu frustado, com raiva e jurando que a gente iria morrer pra ele ainda. Mas ele falou uma coisa sim, parece que Luíza já está a caminho de Salinoria para pegar algo no Templo que fará ela ainda mais forte e capaz de nos matar.
    Thiago: Então a gente tem que ir pra lá correndo. Alias, que espada bonita, você deve estar forte pra caralho.
    Cibely: Sim, e agora eu conquistei minha última habilidade: ${personagens.Protagonista.habilidades[2].nome}
    Thiago: Você está mais forte que eu... que orgulho...
    Cibely: Obrigado, mas agora precisamos ir, não podemos perder tempo.
    Thiago: Certo, vamos lá!`)

    // Bloco 4.2
    skipFala()
    mecanismoFala("Caminho para Salinoria", `Thiago: Estamos quase lá, Cibely. Sinto que estamos prestes a confrontar Luíza de uma vez por todas.
    Cibely: Eu sei, mas… e se eu não for boa o suficiente? E se Luíza, a Regente do Caos da Rede Suprema acabar com tudo, assim como fez com Pedro e Nicolas?
    Thiago: Não pense assim. A dor pela perda deles não pode nos parar. Eles sacrificaram tanto para que você pudesse continuar.
    Cibely: É só que… eu me preocupo. O que ELA é capaz de fazer?
    Thiago: Nós não sabemos, mas precisamos focar no que podemos fazer agora. Se ainda há esperança no mundo, precisamos acreditar que podemos salvá-lo. E se não… devemos honrar a memória daqueles que se foram lutando até o fim.
    Cibely: Você tem razão. Não posso me deixar abater agora. Vou lutar com tudo que tenho, por mim e por eles.
    Thiago: É isso aí! Você não está sozinha.
    Cibely: Obrigada, Thiago. Por Pedro e Nicolas.`);
    
    // Bloco 4.3
    skipFala()
    mecanismoFala("Ruínas de Salinoria", `Cibely: Olha, Thiago... chegamos. Essas ruínas... estão ainda mais desoladas do que eu imaginava.
    Thiago: É, o lugar está tomado pela escuridão. Luíza realmente não teve piedade.
    Cibely: E agora ela está aqui, no templo. Temos que ter cuidado. Não podemos subestimar seu poder.
    Thiago: Cibely, lembre-se do que conversamos. Temos que manter a calma e usar nossas habilidades. Não podemos deixar que o medo nos domine.
    Cibely: Eu sei... mas é difícil. A ideia de enfrentá-la me deixa nervosa. E se não conseguirmos?
    Thiago: Vamos conseguir! Lute por Pedro e Nicolas. Eles estão com você, mesmo que não estejam aqui fisicamente.
    Cibely: Obrigada, Thiago. Vamos mostrar a Luíza que somos mais fortes do que ela pensa.
    *(Eles entram no templo e encontram Luíza, de pé, envolta em uma aura sombria.)*
    Luíza, a Regente do Caos da Rede Suprema: Ah, olhem só quem chegou! Cibely, a heroína perdida e seu fiel treinador. Vejo que não aprenderam nada com suas derrotas.
    Cibely: Luíza! Estamos aqui para te deter e proteger Salinoria!
    Luíza, a Regente do Caos da Rede Suprema: Proteger? Com essa fraqueza? Vocês não têm ideia do que eu sou capaz. Estão prestes a se arrepender de terem vindo aqui.
    Thiago: Não vamos recuar! Estamos prontos para enfrentar você, custe o que custar.
    Luíza, a Regente do Caos da Rede Suprema: Muito bem, então venham. Vamos ver se conseguem sobreviver a este confronto. Preparados?`);

    // Bloco 4.4
    skipFala()
    mecanismoFala("Templo de Salinoria - Confronto Imediato", `Luíza, a Regente do Caos da Rede Suprema: *(com um sorriso desdenhoso)* Olhem só, os valentes heróis se aproximando! Vocês realmente acham que têm alguma chance contra mim?
    *(Com um movimento ágil, Luíza se teletransporta para trás de Thiago.)*
    Cibely: Thiago, cuidado!
    *(Antes que ele possa se mover, Luíza enfia uma espada no coração de Thiago, que cai no chão, olhos arregalados.)*
    Luíza, a Regente do Caos da Rede Suprema: *(rindo alto)* Oh, olha só! Mais um a se juntar ao seu triste destino!
    Cibely: *(em choque, corre até Thiago)* Não... Thiago, não! 
    Luíza, a Regente do Caos da Rede Suprema: *(zombando)* E pensar que você achava que poderia me enfrentar! Ele se juntou a seus amigos, Pedro GG e Nicolas. Todos mortos por minha mão.
    Cibely: *(com a voz embargada)* Você é uma monstra! O que fez com eles?
    Luíza, a Regente do Caos da Rede Suprema: *(com um sorriso cruel)* Eles foram fracos, assim como você. Você realmente acha que a força vem da compaixão? Vocês são patéticos.
    Cibely: *(erguendo a cabeça, consumida pela dor e raiva)* Você não vai se sair impune! Eles merecem mais do que isso!
    Luíza, a Regente do Caos da Rede Suprema: *(com desdém)* Mais? O que eles merecem é a verdade: vocês nunca foram fortes o suficiente. Não conseguirão me parar. 
    *(Cibely se levanta, seus olhos brilhando com determinação e uma nova fúria. Cibely parte para cima de Luíza)*`)
    skipFala()
}

// Batalhas

function b1() {
    mecanismoFala(``,`Thiago: Agora para o próximo treino antes da sua primeira batalha de verdade, você entrará em uma simulação de batalha. Seu primeiro inimigo será um boneco de madeira.
    Cibely: É sério isso?
    Thiago: Tem que começar de baixo, ne? Afinal você só tem uma habilidade desbloqueada kkkkkkkkk otária.`)
    skipFala()
    console.warn("Atenção! Você vai entrar em batalha. Use attk n ou item n, respectivamente, para atacar ou usar item na rodada.")
    skipFala()
    return batalha(personagens.Protagonista, personagens.BonecoMadeira)
}

function b2() {  // Pedro Rocha
    console.warn("Atenção! Você vai entrar em batalha. Use attk n ou item n, respectivamente, para atacar ou usar item na rodada.")
    skipFala()
    return batalha(personagens.Protagonista, personagens.PedroRocha)
}

function b3() {
    return batalha(personagens.Protagonista, personagens.Tharcísio)
}

function b4() {
    return batalha(personagens.Protagonista, personagens.Luíza)
}

// Escolher natureza

function chooseNature() {
    console.log(`\n\n%cEscolha sua natureza`, "font-family: Cinzel, serif; color: white; background-color: black; font-weight: bold; padding: 10px; font-size: 26px")
    for (let i = 0; i < 4; i++) {
        console.log(
            `%c${i + 1}. ${naturezas[i].nome}%c
        ${naturezas[i].desc}`,
            "color: yellow; background-color: black; font-weight: bold; padding: 10px; font-size: 18px;",
            "color: green; background-color: black; font-weight: bold; padding: 10px; font-size: 14px;"
        );
    }

    let natureza;
    while (true) {
        natureza = prompt("Escolha sua natureza:");
        if (natureza >= 1 && natureza <= 4) {
            break;
        } else {
            console.log("Escolha inválida! Repita a escolha. Apenas os números de 1 a 4 são válidos.");
        }
    }
    console.clear()
    mecanismoFala(``, `Thiago: Sempre soube que sua natureza seria ${naturezas[(natureza-1)].nome}!`)
    personagens.Protagonista.natureza = `${naturezas[(natureza-1)].nome}`

    skipFala()
}

// Funções Especiais & Mecanismos de Jogo

function mecanismoFala(titulo, fala) {
    let pessoas = ["Pedro GG", "Cibely", "Nicolas", "Thiago", "Pedro Rocha", "Guarda do Reino", "Rei Tharcísio", "Guardas Reais", "Maria Clara", "Luíza, a Regente do Caos da Rede Suprema"];
    let regex = new RegExp(`(${pessoas.join('|').replace(/ /g, '\\s')})\\s*(:)`, 'g');
    let newSpeech = fala.replace(regex, (match, nome) => `%c${nome}:%c`)
    let qntStyle = (newSpeech.match(/%c/g) || []).length;

    const titleStyle = `
    font-family: 'Cinzel', serif; 
    color: #d4af37; /* Um tom dourado */
    background-color: #2e2a1c; /* Um fundo escuro para contraste */
    font-size: 18px; /* Um pouco maior para dar destaque */
    font-style: italic; 
    padding: 10px; 
    border: 2px solid #d4af37; /* Borda dourada */
`;
    const nameStyle = "color: yellow; background-color: black; font-weight: bold; padding: 5px;";
    const speechStyle = "color: white; background-color: black; font-weight: bold; padding: 5px;";
    
    let estilos = [titleStyle, "background-color: none", speechStyle]; // Pra ficar arrumadin

    for (let i = 1; i <= qntStyle; i++) {
        estilos.push(i % 2 === 0 ? speechStyle : nameStyle/*ímpar*/);
    }
    
    console.log(`%c${titulo}%c\n\n%c    ${newSpeech}`, ...estilos);
}; // Essa função cria aquela aparência das falas, geralmente eu meto um bloco de texto para cada mecanismoFala

function skipFala() {
    alert("Clique em ok para passar para a próxima fala.")
    console.clear()
} // Essa função basicamente pergunta se o usuário quer pular a fala presente e limpa o console, retoricamente vai existir uma próxima fala pós essa

function batalha(protagonista, inimigo) {
    const estiloTitulo = 'color: lightblue; background-color: black; font-size: 20px; font-weight: bold;';
    const estiloVida = 'color: red; background-color: black; font-size: 20px; font-weight: bold;';
    const estiloForca = 'color: orange; background-color: black; font-size: 20px; font-weight: bold;';
    const estiloInventario = 'color: white; background-color: black; font-size: 14px;';
    const estiloHabilidade = 'color: cyan; background-color: black; font-size: 16px;';
    const estiloNormal = 'color: white; background-color: black; font-size: 14px; padding: 5px;'
    const estiloDano = 'color: red; background-color: black; font-size: 14px; padding: 5px;'
    const estiloCura = 'color: springgreen; background-color: black; font-size: 14px; padding: 5px;'
    const estiloDefault = 'background-color: none; font-size: 14px'
    let boolResultado;
    let nRodada = 0;
    while(true) {
        if(protagonista.natureza === "Códigos do Infinito ♾️") {
            inimigo.forca = (inimigo.forca*0.90);
        }
        if(protagonista.natureza === "" & nRodada>2) { // momochi
            protagonista.vida = (protagonista.vida*0.99);
        };
        let logsdarodada = `%cAções:\n`;
        let estilologsdarodada = [estiloTitulo, estiloNormal];
        // Titulo da batalha
        console.log("%cBatalha ⚔️", 'background-color: black; font-size: 30px; padding: 10px; padding-left: 15px; padding-right: 15px; color: #9c1111; font-family: "Cinzel"; font-weight: bold;');
        // Quem contra quem

        // Rodada n
        nRodada += 1;
        console.log(`%cRodada nº ${nRodada}`, 'background-color: black; font-size: 18px; padding: 10px; color: white; font-family: "MedievalSharp", cursive;')
        
        // Atributos da protagonista (Vida e força)
        let attFraseCimaP =`%c${protagonista.nome}:\n%c❤️ ${protagonista.vida} HP %c⚔️ Força: ${protagonista.forca}x%c\n`
        let attFraseBaixoP = `%c${protagonista.arma.nome} 🗡️`
        let espacosP = ' '.repeat((attFraseCimaP.length-attFraseBaixoP.length)/4)
        console.log(`${attFraseCimaP}${espacosP}${attFraseBaixoP}`, estiloTitulo, estiloVida, estiloForca, estiloDefault, estiloForca)

        // Atributos do inimigo (Vida e força)
        let attFraseCimaI = `%c${inimigo.nome}:\n%c❤️ ${inimigo.vida} HP %c⚔️ Força: ${inimigo.forca}x%c\n`
        let attFraseBaixoI = `%c${inimigo.arma.nome} 🗡️`
        let espacosI = ' '.repeat((attFraseCimaI.length - attFraseBaixoI.length) / 4)
        console.log(`${attFraseCimaI}${espacosI}${attFraseBaixoI}`, estiloTitulo, estiloVida, estiloForca, estiloDefault, estiloForca)

        // Inventário do jogador
        const inventarioStr = protagonista.inventario.length === 0
        ? 'Inventário vazio'
        : protagonista.inventario.map((item, index) => `[${index + 1}] ${item.item.nome} (x${item.quantidade})`).join('  ');

        console.log(`%c🧳 Inventário:\n%c${inventarioStr}`, estiloTitulo, estiloInventario);


        // Habilidades do jogador
        const habilidadesStr = protagonista.habilidades.length > 0
            ? [
                protagonista.habilidades.slice(0, 2).map((habilidade, index) => `[${index + 1}] ${habilidade.nome} (${habilidade.dano} 🗡️)`).join('  '),
                protagonista.habilidades.slice(2).map((habilidade, index) => `[${index + 3}] ${habilidade.nome} (${(habilidade.dano * protagonista.forca)} 🗡️)`).join('  ')
            ].join('\n')
            : '???';

        console.log(`%c✨ Habilidades:\n%c${habilidadesStr}`, estiloTitulo, estiloHabilidade);


        // Prompt para mecanismo de ataque/uso de item
        let tipoAcao;
        let indexAcao;
        while (true) {
            var acao = prompt("Ação:")
            function taErradoIrmao() {
                console.warn("Ação inválida, confira a ação e tente novamente.")
            }
            if (acao === null) {
                taErradoIrmao()
                continue;
            }

            tipoAcao = acao.split(' ')[0];
            indexAcao = acao.split(' ').slice(-1)[0];

            const regex = /^(attk|item) \d+$/;
            if (regex.test(acao) && tipoAcao === "attk" && indexAcao <= protagonista.habilidades.length && indexAcao > 0) {
                if (protagonista.habilidades[indexAcao - 1].nome !== "???") {
                    coisaUsada = protagonista.habilidades[indexAcao - 1].nome;
                    break;
                } else {
                    taErradoIrmao()
                }
            } else if (regex.test(acao) && tipoAcao === "item" && indexAcao <= protagonista.inventario.length && indexAcao > 0) {
                coisaUsada = protagonista.inventario[indexAcao - 1];
                break;
            } else {
                taErradoIrmao()
            }
        }

        // Mecanismo de ataque/uso de item
        switch (tipoAcao) {
            case "attk":
                inimigo.vida -= (protagonista.habilidades[indexAcao - 1].dano * protagonista.forca);
                logsdarodada += `\n%c    Você usou ${protagonista.habilidades[indexAcao - 1].nome}%ccausando ${(protagonista.habilidades[indexAcao - 1].dano * protagonista.forca)} DP\n`;
                estilologsdarodada.push(estiloDano)
                break;
            case "item":
                var nomeItem = protagonista.inventario[indexAcao - 1].item.nome;
                logsdarodada += (usarItem(nomeItem) + `\n`);
                estilologsdarodada.push(estiloCura)
        };

        // Mecanismo de ataque do inimigo
        function selecionarHabilidade(inimigo) {
            const totalPeso = inimigo.habilidades.reduce((acc, habilidade) => acc + habilidade.peso, 0);
            const numeroAleatorio = Math.random() * totalPeso;
            let pesoAcumulado = 0;

            for (const habilidade of inimigo.habilidades) {
                pesoAcumulado += habilidade.peso;
                if (numeroAleatorio <= pesoAcumulado) {
                    return habilidade;
                }
            }
        }
        let ataqueInimigo = selecionarHabilidade(inimigo)
        
        if (personagens.Protagonista.natureza === "Cálculo Sagrado 📐") {
            // Define a chance de cancelar o ataque (por exemplo, 10%)
            const chanceDeCancelar = Math.random() < 0.1; // 10% de chance
        
            if (chanceDeCancelar) {
                console.log(`%c     A habilidade do inimigo foi cancelada pela natureza!`, 'background-color: black; color: yellow; font-weight: bold;');
            } else {
                // Se não for cancelado, subtrai a vida do protagonista
                personagens.Protagonista.vida -= (ataqueInimigo.dano * inimigo.forca);
            }
        } else {
            // Se a natureza não for Cálculo Sagrado, apenas subtrai a vida normalmente
            personagens.Protagonista.vida -= (ataqueInimigo.dano * inimigo.forca);
        }

        logsdarodada += `   %c${inimigo.nome} usou ${ataqueInimigo.nome}%ccausando ${ataqueInimigo.dano * inimigo.forca} DP`
        estilologsdarodada.push(estiloNormal)
        estilologsdarodada.push(estiloDano)
        if(protagonista.vida <= 0 && inimigo.vida <= 0) {
            protagonista.vida = 1
        }
        console.clear()
        console.log(logsdarodada, ...estilologsdarodada);
        if(protagonista.vida <= 0) {
            boolResultado = false;
            alert('Confirma')
            console.clear()
            break;
        } else if(inimigo.vida <= 0) {
            boolResultado = true;
            skipFala()
            mensagemVitoria(inimigo.nome)
            alert('Confirma')
            console.clear()
            break;
        };
        alert('Confirma')
        console.clear()
    }
    return boolResultado;

}

function addKitBasico() {
    // Adicionando itens de dano
    personagens.Protagonista.inventario.push({
        item: items["Firewall Tourniquet"],
        quantidade: 5 // Total de Firewalls
    });
    personagens.Protagonista.inventario.push({
        item: items["Competência 1"],
        quantidade: 2 // Total de Competências 1
    });

    console.log(`%cOs itens seguintes foram adicionados ao seu inventário:%c\n- 5 Poderes da Rede Neural\n- 2 Competências 1`, "background-color: black; color: white; padding: 7px", "background-color: black; color:#FFDF00; padding: 7px;");
}

function addKitIntermediario() {
    // Função para adicionar ou atualizar itens no inventário
    function addItemToInventory(item, quantidade) {
        const existingItem = personagens.Protagonista.inventario.find(i => i.item === item);
        if (existingItem) {
            existingItem.quantidade += quantidade; // Aumenta a quantidade
        } else {
            personagens.Protagonista.inventario.push({
                item: item,
                quantidade: quantidade
            }); // Adiciona o novo item
        }
    }

    // Adicionando itens de dano
    addItemToInventory(items["Firewall Tourniquet"], 7);
    addItemToInventory(items["Competência 1"], 5);

    console.log(`%cOs itens seguintes foram adicionados ao seu inventário:%c\n- 7 Firewall Tourniquet\n- 5 Competências 1`, "background-color: black; color: white; padding: 7px", "background-color: black; color:#FFDF00; padding: 7px;");
}

function addKitAvancado() {
    // Função para adicionar ou atualizar itens no inventário
    function addItemToInventory(item, quantidade) {
        const existingItem = personagens.Protagonista.inventario.find(i => i.item === item);
        if (existingItem) {
            existingItem.quantidade += quantidade; // Aumenta a quantidade
        } else {
            personagens.Protagonista.inventario.push({
                item: item,
                quantidade: quantidade
            }); // Adiciona o novo item
        }
    }

    // Adicionando itens do kit avançado
    addItemToInventory(items["Competência 1"], 10);
    addItemToInventory(items["Pedra Crackau"], 1);

    console.log(`%cOs itens seguintes foram adicionados ao seu inventário:%c\n- 10 Competências 1\n- 1 Pedra Crackau`, 
                "background-color: black; color: white; padding: 7px", 
                "background-color: black; color:#FFDF00; padding: 7px;");
}

function usarItem(nomeItem) {
    const item = items[nomeItem];
    let logItem;

    if (!item) {
        return;
    }

    // Achar o item no inventário do protagonista
    const inventario = personagens.Protagonista.inventario;
    const itemInventario = inventario.find(i => i.item === item);

    if (!itemInventario) {
        return; // O item não está no inventário
    }

    // Usar o item, restaurando vida
    personagens.Protagonista.vida += item.atributo;

    // Diminuir a quantidade do item no inventário
    itemInventario.quantidade--;

    if (itemInventario.quantidade === 0) {
        // Se for o último item, removê-lo do inventário
        const index = inventario.indexOf(itemInventario);
        inventario.splice(index, 1);
        logItem = `%c\n     Você usou ${nomeItem}:%crestaurou ${item.atributo} de vida e o item foi removido do inventário.`;
    } else {
        logItem = `%c\n     Você usou ${nomeItem}:%crestaurou ${item.atributo} de vida. Restam ${itemInventario.quantidade} no inventário.`;
    }

    return logItem;
}

function mensagemVitoria(nomeInimigo) {
    const estiloParabenizacao = `
    background-color: black; 
    color: green; 
    padding: 5px; 
    border: 3px solid green; 
    font-size: 12px; 
    text-shadow: 0 0 5px green, 0 0 10px green; 
    box-shadow: 0 0 10px green;`;
    const estiloItensNovos = `
    background-color: black; 
    color: white; 
    font-weight: bold; 
    padding: 10px; 
    border: 2px solid gold; 
    border-radius: 5px;`;

    switch (nomeInimigo) {
        case 'Boneco de madeira':
            console.log(`%c     Você derrotou o boneco de madeira! Que fácil!     \n     Se tivesse sido uma luta de verdade, teria sido uma piada... ah, espera, foi!     `, estiloParabenizacao);
            skipFala()
            console.log(`%c🆕 Nova habilidade desbloqueada! 🔓\n🆕 ${armas.EspadaLonga.nome} \n❤️ +100 HP `, estiloItensNovos);
            // Mais vida
            personagens.Protagonista.vida += 100;
            // Nova arma   
            personagens.Protagonista.arma = armas.EspadaLonga;
            // Nova habilidade
            personagens.Protagonista.habilidades[1].nome = naturezas.find(natureza => natureza.nome === personagens.Protagonista.natureza).habilidades[0].nome
            personagens.Protagonista.habilidades[1].dano = naturezas.find(natureza => natureza.nome === personagens.Protagonista.natureza).habilidades[0].dano
            break;

        case 'Pedro Rocha':
            mecanismoFala("Alea iacta est.", `Pedro Rocha: Sempre acreditei que poderia ser um homem de bem, buscando a pureza em meu coração. Mas a ganância do dinheiro me corrompeu, eu traí meus amigos e minha ordem por ambição. Agora, ao final da minha jornada, percebo que fui apenas um tolo, perdendo o que realmente importava. Se eu pudesse voltar atrás, mudaria tudo. Um verdadeiro Grão-Mestre resiste à tentação, e eu falhei. Você, que ainda tem a chance, Cibely, deve se preparar para enfrentar ELA, pois a verdadeira batalha ainda está por vir. O verdadeiro poder está nas mãos daqueles que não se vendem, e que permanecem fiéis ao que é certo! Non nobis, Domine, non nobis, sed Nomini tuo da gloriam. E lembre-se: não acreditem no R...`);
            skipFala();
            
            console.log(`%c     Você derrotou Pedro Rocha! Ele te deixou sua espada templária, um poderoso símbolo de sua luta interna e do peso de suas escolhas. Essa espada, forjada nas chamas da adversidade, representa não apenas a vitória, mas também os desafios enfrentados ao longo do caminho.\nQue a sabedoria de sua história, repleta de ensinamentos e reflexões, te guie na busca pela verdade e na jornada em direção ao autoconhecimento. Lembre-se: cada decisão molda o futuro, e cada batalha é uma oportunidade de crescimento!`, estiloParabenizacao);
            
            // Exibir itens ganhos
            skipFala()
            console.log(`%c❤️ +300 HP \n🧪 Kit Intermediário de Poções \n🆕 ${armas.EspadaTemplaria.nome} \n🆕 Nova habilidade desbloqueada! 🔓`, estiloItensNovos);
            skipFala()
            // Aumentar vida
            personagens.Protagonista.vida += 300;
            
            // Nova arma
            personagens.Protagonista.arma = armas.EspadaTemplaria;
        
            // Nova habilidade
            personagens.Protagonista.habilidades[2].nome = naturezas.find(natureza => natureza.nome === personagens.Protagonista.natureza).habilidades[1].nome;
            personagens.Protagonista.habilidades[2].dano = naturezas.find(natureza => natureza.nome === personagens.Protagonista.natureza).habilidades[1].dano;
        
            // Poções
            addKitIntermediario();
            break;

        case 'Rei Tharcísio':
            mecanismoFala("Deus não salve o Rei!", `Rei Tharcísio: Você acha que pode me vencer? Eu sou o Rei Tharcisio, o soberano absoluto do reino de Taioberen! Sua insignificância não pode sequer compreender o poder que eu possuo! Você acha que pode se erguer contra mim? Vocês não sabem nem mesmo o que está acontecendo em suas vidas! A verdade é que eu fui o verdadeiro governante, e você, uma mera marionete nas mãos de forças que não consegue entender! Quando a poeira assentar, você verá que nada muda! E a história nunca esquecerá o quão grandioso eu fui. Você não é nada! NADA! Se soubessem o que ela está fazendo com eles, tenho certeza que não teria coragem de vir me desafiar. 
            Cibely: Eles quem??
            Rei Tharcísio: Seus... *morre*`);
            skipFala();
        
            console.log(`%c     Você derrotou o Rei Tharcisio, um tirano que traiu seu próprio reino por poder! Agora, a Grande Excalibur Cibernética está em suas mãos, e o reino de Taioberen pode reerguer-se sob a liderança de sua filha, Maria Clara, que trará justiça e esperança ao povo!`, estiloParabenizacao);
        
            // Exibir itens ganhos
            skipFala();
            console.log(`%c❤️ +50000 HP \n🧪 Kit Avançado de Poções \n🆕 ${armas.EspadaCibernetica.nome} \n🆕 Nova habilidade desbloqueada! 🔓`, estiloItensNovos);
            skipFala();
        
            // Aumentar vida
            personagens.Protagonista.vida += 50000;
        
            // Nova arma
            personagens.Protagonista.arma = armas.EspadaCibernetica;
        
            // Nova habilidade (se aplicável)
            personagens.Protagonista.habilidades[3].nome = naturezas.find(natureza => natureza.nome === personagens.Protagonista.natureza).habilidades[2].nome;
            personagens.Protagonista.habilidades[3].dano = naturezas.find(natureza => natureza.nome === personagens.Protagonista.natureza).habilidades[2].dano;
        
            // Poções
            addKitAvancado();
            break;
            

        case 'Luíza, a Regente do Caos da Rede Suprema':
            console.log(`%c     Você derrotou Luíza, a Regente do Caos da Rede Suprema, a vilã que trouxe trevas e destruição a tantos reinos. Sua crueldade não conhece limites, e ela se regozijava em causar dor e sofrimento. 
        Com a sua derrota, uma nova esperança surge! Você é a luz que brilhará na escuridão, a única capaz de inspirar aqueles que sobreviveram a se reerguerem. 
        Agora, o povo de todos os reinos pode respirar aliviado, sabendo que um futuro melhor é possível. Você é a heroína que sempre esperaram! 
        Não só trouxe paz, mas também a promessa de uma nova vida para todos. Que sua coragem e determinação sejam a chama que iluminará o caminho para um novo amanhecer!      `, estiloParabenizacao);
            break;
    }
}