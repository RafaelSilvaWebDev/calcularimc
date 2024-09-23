const botao = document.getElementById('btnCalcular');
const tb_nome = document.getElementById('texboxName');
const tb_altura = document.getElementById('texboxAltura');
const tb_peso = document.getElementById('textboxPeso');
const tb_resultado = document.getElementById('textboxResultado');

botao.addEventListener('click',function(){


    if(tb_nome.value == '' && tb_altura.value == '' && tb_peso.value == ''){
        tb_resultado.value = "Erro: Todos os campos são obrigatórios!"
    }else{
        const dados = criarPessoa()
        const imc = dados.peso / Math.pow(dados.altura,2)
        let mensagem = '';

        if(imc < 18.5){
            mensagem = "Abaixo do Peso"
        } else if(imc >= 18.5 && imc < 25){
            mensagem = "Peso normal"
        } else if (imc >= 25 && imc < 30){
            mensagem = "Acima do peso (Sobrepeso)"
        } else if(imc >= 30 && imc <35){
            mensagem = "Obesidade I"
        } else if(imc >= 35 && imc <= 40){
            mensagem = "Obesidade II"
        } else if(imc > 40){
            mensagem = "Obesidade III"
        }

        const pesoIdealMinimo = 18.5 * Math.pow(dados.altura,2);
        const pesoIdealMaximo = 24.9 * Math.pow(dados.altura, 2);

        tb_resultado.value = `${dados.nome}, seu IMC é ${imc.toFixed(2)} (${mensagem}),\n Seu peso ideal é aproximadamente ${pesoIdealMaximo.toFixed(2)} kg. `
    }
})


function criarPessoa(nome,altura,peso){
    return{
        nome: tb_nome.value,
        altura: parseFloat(tb_altura.value),
        peso: parseFloat(tb_peso.value)
        
    }
}