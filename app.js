const form = document.getElementById('form');
const cepInput = document.getElementById('cepInput');

const preencherResultado = (data) => {
  document.getElementById('logradouro').textContent = data.logradouro || 'N/A';
  document.getElementById('bairro').textContent = data.bairro || 'N/A';
  document.getElementById('cidade').textContent = data.localidade || 'N/A';
  document.getElementById('estado').textContent = data.uf || 'N/A';
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const cep = cepInput.value.trim();

  if (!/^\d{8}$/.test(cep)) {
    alert('Digite um CEP válido com 8 números.');
    return;
  }

  try {
    const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await resp.json();

    if (!resp.ok || data.erro) {
      throw new Error('CEP não encontrado');
    }

    preencherResultado(data);
  } catch (error) {
    alert(error.message || 'Erro ao buscar o CEP');
  }
});