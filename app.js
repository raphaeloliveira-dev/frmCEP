const form = document.getElementById('form'); // Capturando formulário
const cepInput = document.getElementById('cep'); // Capturando input do CEP 

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    const cep = cepInput.value; // Obtém o valor do input do CEP

    try {
        const resp= await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    // Fazendo a requisição para a API do ViaCEP 
    const data = await resp.json(); // Convertendo a resposta para JSON

    if (data.erro) {
        alert('CEP não encontrado'); // Caso o CEP não seja encontrado
        return;
    }
    
    // Preenchendo os campos do formulário com os dados retornados 
    document.getElementById('logradouro').value = data.logradouro;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('localidade').value = data.localidade;
    document.getElementById('uf').value = data.uf;
    
   }catch (error) {
    alert('Erro ao buscar o CEP'); // Caso ocorra algum erro na requisição
   }

}
);