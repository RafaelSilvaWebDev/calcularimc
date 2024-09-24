const botaoCalc = document.getElementById('btnCalcular');
const botaoLp = document.getElementById('btnLimpar')
const tb_nome = document.getElementById('texboxName');
const tb_altura = document.getElementById('texboxAltura');
const tb_peso = document.getElementById('textboxPeso');
const tb_resultado = document.getElementById('textboxResultado');
const tb_idade = document.getElementById('textboxIdade');

botaoCalc.addEventListener('click', function() {
    // Verificando se algum dos campos obrigatórios está vazio
    if (tb_nome.value === '' || tb_altura.value === '' || tb_peso.value === '' || tb_idade.value === '') {
        tb_resultado.value = "Erro: Todos os campos são obrigatórios!";
        return; 
    }

    const idade = parseInt(tb_idade.value);
    const dados = criarPessoa();
    const imc = dados.peso / Math.pow(dados.altura, 2);
    let mensagem = '';

    // Caso para pessoas com 65 anos ou mais
    if (idade >= 65) {
        if (imc < 22) {
            mensagem = "Abaixo do peso";
        } else if (imc >= 22 && imc < 27) {
            mensagem = "Peso normal";
        } else if (imc > 27) {
            mensagem = "Acima do peso (Sobrepeso)";
        }
    } else {
        // Caso para pessoas com menos de 65 anos
        if(imc < 16){
            mensagem = "Magreza grau III"
        } else if (imc >= 16 && imc < 17){
            mensagem = "Magreza grau II"
        } else if (imc >= 17 && imc < 18.5){
            mensagem = "Magreza grau I"
        } else if (imc >= 18.5 && imc < 25) {
            mensagem = "Peso normal";
        } else if (imc >= 25 && imc < 30) {
            mensagem = "Acima do peso (Sobrepeso)";
        } else if (imc >= 30 && imc < 35) {
            mensagem = "Obesidade I";
        } else if (imc >= 35 && imc <= 40) {
            mensagem = "Obesidade II";
        } else if (imc > 40) {
            mensagem = "Obesidade III";
        }
    }

    // Cálculo do peso ideal
    const pesoIdealMinimo = 18.5 * Math.pow(dados.altura, 2);
    const pesoIdealMaximo = 24.9 * Math.pow(dados.altura, 2);

    // Exibição do resultado
    tb_resultado.value = `${dados.nome}, seu IMC é ${imc.toFixed(2)} (${mensagem}),Seu peso mínimo ideal é ${pesoIdealMinimo.toFixed(2)} kg e seu peso máximo ideal é ${pesoIdealMaximo.toFixed(2)} kg.`;
});

botaoLp.addEventListener('click',function(){
    tb_nome.value = '';
    tb_altura.value = '';
    tb_peso.value = '';
    tb_idade.value = '';
    tb_resultado.value = '';
})


function criarPessoa() {
    return {
        nome: tb_nome.value,
        altura: parseFloat(tb_altura.value),
        peso: parseFloat(tb_peso.value)
    };
}
