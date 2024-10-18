function mecanismoFala(titulo, fala) {
    let pessoas = ["Pedro GG", "Cibely", "Nicolas", "Thiago"];
    let regex = new RegExp(`(${pessoas.join('|').replace(/ /g, '\\s')})\\s*(:)`, 'g');
    let newSpeech = fala.replace(regex, (match, nome) => `%c${nome}:%c`)
    let qntStyle = (newSpeech.match(/%c/g) || []).length;

    const titleStyle = `
    font-family: 'Cinzel', serif; 
    color: #d4af37; /* Um tom dourado */
    background-color: #2e2a1c; /* Um fundo escuro para contraste */
    font-size: 14px; /* Um pouco maior para dar destaque */
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


mecanismoFala(`Nas ruínas de Berizalém`, `Pedro GG: Cibely... acorda Cibely... você desmaiou.
    Cibely: Onde ela está?
    Nicolas: Cibely, fuja... você é a nossa única esperança para acabar com Luíza.
    Cibely: Não!! Eu tenho que lutar... desmaia
    Pedro GG: Thiago, leve-a para um lugar seguro e a treine, ela é a filha da profecia. Fujam, nós seguramos ELA.`);