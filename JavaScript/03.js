//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados
let saldoTotal = parseInt(gets());
let valorSaque = parseInt(gets());

//TODO: Criar as condições necessárias para impressão da saída, vide tabela de exemplos.
function realizarSaque(saldoDisponivel, valorSaque) {
    if (valorSaque <= saldoDisponivel) {
        saldoDisponivel -= valorSaque;
        return { sucesso: true, novoSaldo: saldoDisponivel };
    } else {
        return { sucesso: false };
    }
}

const resultadoSaque = realizarSaque(saldoTotal, valorSaque);

if (resultadoSaque.sucesso) {
    print(`Saque realizado com sucesso. Novo saldo: ${resultadoSaque.novoSaldo}`);
} else {
    print("Saldo insuficiente. Saque nao realizado!");
}