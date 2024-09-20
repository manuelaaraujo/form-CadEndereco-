'use strict'; // ativa o modo restrito 
// esse modo faz com o que o JavaScript opere dde forma mais segura e rigorosa, ajudando a evitar erros comuns de programação
/* Consumo de API https://viacep.com.br/ */

// FUNÇÃO PARA LIMPAR OS CAMPOS PREENCHIDOS 
const limparFormulario = () => {
    document.getElementById('logradouro').value = ''; 
    document.getElementById('bairro').value = ''; 
    document.getElementById('localidade').value = ''; 
    document.getElementById('uf').value = ''; 
    document.getElementById('cep').value = ''; 
    document.getElementById('numero').value = '';
    document.getElementById('complemeto').value = ''; 
}

// verifica se o cep é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const 