function solicitarContato(modelo) {
    const nome = prompt(`Você está interessado no ${modelo}. Informe seu nome para contato:`);
    if (nome) {
        alert(`Obrigado, ${nome}! Em breve entraremos em contato sobre o ${modelo}.`);
    } else {
        alert("Por favor, informe seu nome.");
    }
}
