//Mascara Whatsapp
const whatsInput = document.getElementById('whatsapp');
whatsInput.addEventListener('input', () => {
    let telefone = whatsInput.value;
    telefone = telefone.replace(/\D/g, '');
    if (telefone.length > 2) {
        telefone = `(${telefone.substring(0, 2)})${telefone.substring(2)}`;
    }
    if (telefone.length > 9) {
        telefone = `${telefone.substring(0, 9)}-${telefone.substring(9)}`;
    }
    whatsInput.value = telefone;
});

// botão que renderiza de nome --> email:
const btnNome = document.querySelector('#btn-nome');
var form_email = document.getElementById("form_email");
var form_nome = document.getElementById("form_name");
var form_whatsapp = document.getElementById("form_whatsapp");
var nome = document.getElementById("nome");

btnNome.addEventListener('click', () => {

    if (nome.value === '') {
        alert("Campo obrigatório!");
    } else {
        form_email.style.display = "block";
        form_nome.style.display = "none";
    }
});
//botão que renderiza email --> whatsapp:
const btnEmail = document.querySelector('#btn-email');
var email = document.getElementById("email");

btnEmail.addEventListener('click', () => {
    if (email.value === '') {
        alert("Campo obrigatório!");
    } else {
        form_email.style.display = "none";
        form_whatsapp.style.display = "block";
    }
});
// Renderiza a view "Você tem doutorado?"
const btnWhats = document.querySelector('#btn-whats');
var whatsapp = document.getElementById("whatsapp");
var expdoutorado = document.getElementById("exp-doutorado");

btnWhats.addEventListener('click', () => {
    if (whatsapp.value === '') {
        alert("Campo obrigatório!");
    } else {
        form_whatsapp.style.display = "none";
        expdoutorado.style.display = "block";
    }
});

//verifica se tem ou não DOUTORADO
var doutorado = document.getElementById("doutorado");
var anos_doutorado = document.getElementById("anos-doutorado");

doutorado.addEventListener("change", function () {
    if (doutorado.value === "sim") {
        anos_doutorado.style.display = "block";
    } else {
        anos_doutorado.style.display = "none";
    }
});

// Renderiza o "Você tem mestrado?":
const btnDoutorado = document.querySelector("#btn-doutorado");
var expmestrado = document.getElementById("exp-mestrado");

btnDoutorado.addEventListener('click', () => {
    if (doutorado.value === '') {
        alert("Campo obrigatório!");
    } else {
        expmestrado.style.display = "block";
        expdoutorado.style.display = "none";

    }
});
//verifica se tem MESTRADO
var mestrado = document.getElementById("mestrado");
var anos_mestrado = document.getElementById("xp-mestrado");

mestrado.addEventListener("change", function () {
    if (mestrado.value === "sim") {
        anos_mestrado.style.display = "block";
    } else {
        anos_mestrado.style.display = "none";
    }
});

//Renderiza o "Você tem bacharelado ou licenciatura com mais de 5 anos de experiência?"
const btnMestrado = document.querySelector("#btn-mestrado");
var expbacharel = document.getElementById("exp-bacharel");

btnMestrado.addEventListener('click', () => {
    if (mestrado.value === '') {
        alert("Campo obrigatório!");
    } else {
        expmestrado.style.display = "none";
        expbacharel.style.display = "block";
    }
});

//verifica se tem BACHAREL:
var bacharel = document.getElementById("bacharel");
var anos_bacharel = document.getElementById("xp-bacharel");

bacharel.addEventListener("change", function () {
    if (bacharel.value === "sim") {
        anos_bacharel.style.display = "block";
    } else {
        anos_bacharel.style.display = "none";
    }
});

//Renderiza o "Voce tem algum curso: profissionalizante, tecnologo ou tecnico?"
const btnBacharel = document.querySelector("#btn-bacharel");
var expcurso = document.getElementById("exp-curso");

btnBacharel.addEventListener('click', () => {
    if (bacharel.value === '') {
        alert("Campo obrigatório!");
    } else {
        expcurso.style.display = "block";
        expbacharel.style.display = "none";
    }
});

// renderiza o campo "Voce tem contribuição expressiva na area que atua?"
const btnCurso = document.querySelector("#btn-curso");
var curso = document.getElementById("curso");
var expcontribuicao = document.getElementById("exp-contribuicao");
var cartas = document.getElementById("exp-cartas");

btnCurso.addEventListener('click', () => {
    if (curso.value === '') {
        alert("Campo obrigatório!");
    } else {
        expcontribuicao.style.display = "block";
        cartas.style.display = "block";
        expcurso.style.display = "none";
    }
});

// Renderiza "Para exercer sua atividade voce precisa de alguma licensa? Como: OAB, CREA?"
const btnContribuicao = document.querySelector("#btn-contribuicao");
var contribuicao = document.getElementById("contribuicao");
var explicensa = document.getElementById("exp-licensa");

btnContribuicao.addEventListener('click', () => {
    if (contribuicao.value === "") {
        alert("Campo obrigatório!");
    } else {
        explicensa.style.display = "block";
        cartas.style.display = "none";
        expcontribuicao.style.display = "none";
    }
});

//renderiza "Voce faz parte de alguma associação de classe?"
const btnLicensa = document.querySelector("#btn-licensa");
var licensa = document.getElementById("licensa");
var expclasse = document.getElementById("exp-classe");

btnLicensa.addEventListener('click', () => {
    if (licensa.value === '') {
        alert("Campo obrigatório!");
    } else {
        explicensa.style.display = "none";
        expclasse.style.display = "block";
    }
});

//Renderiza "Voce tem 10 anos ou mais de experiência em sua vida profissional na sua area?"

const btnClasse = document.querySelector("#btn-classe");
var expclass = document.getElementById("exp-class");
var classe = document.getElementById("classe");

btnClasse.addEventListener('click', () => {
    if (classe.value === '') {
        alert("Campo obrigatório!");
    } else {
        expclasse.style.display = "none";
        expclass.style.display = "block";
    }
});

const btnClass = document.querySelector("#exp-class");
var exp = document.getElementById("exp");
var exp_prof = document.getElementById("exp-prof");

btnClass.addEventListener('click', () => {
    if (exp.value === '') {
        alert("Campo obrigatório!");
    } else {
        expclass.style.display = "none";
        exp_prof.style.display = "block";
    }
});

//renderiza "Voce ganha acima da sua classe de profissional?"

const btnProf = document.querySelector("#btn-prof");
var prof = document.getElementById("prof");
var itens = document.getElementById("exp-itens");

btnProf.addEventListener('click', () => {
    if (prof.value === '') {
        alert("Campo obrigatório!");
    } else {
        exp_prof.style.display = "none";
        itens.style.display = "block";
    }
});

const btnItens = document.querySelector("#btn-itens");
var area = document.getElementById("area");
var botao = document.getElementById("botao");

btnItens.addEventListener('click', () => {
    itens.style.display = "none";
    area.style.display = "block";
    botao.style.display = "block";
});
//Renderiza "Você tem alguns desses itens?"

//Voltar para email->nome:
const backEmail = document.querySelector("#back-email");
backEmail.addEventListener('click', () => {
    form_email.style.display = "none";
    form_nome.style.display = "block";
});

//voltar whatsapp -> email:
const backWhats = document.querySelector("#back-whats");
backWhats.addEventListener('click', () => {
    form_whatsapp.style.display = "none";
    form_email.style.display = "block";
});

//Volta doutorado -> whatsapp:
const backDoutorado = document.querySelector("#back-doutorado");
backDoutorado.addEventListener('click', () => {
    expdoutorado.style.display = "none";
    form_whatsapp.style.display = "block";
});

//volta mestrado -> doutorado:
const backMestrado = document.querySelector("#back-mestrado");
backMestrado.addEventListener('click', () => {
    expmestrado.style.display = "none";
    expdoutorado.style.display = "block";
});

//Volta bacharel -> mestrado:
const backBacharel = document.querySelector("#back-bacharel");
backBacharel.addEventListener('click', () => {
    expmestrado.style.display = "block";
    expbacharel.style.display = "none";
});

//volta curso -> bacharel:
const backCurso = document.querySelector("#back-curso");
backCurso.addEventListener('click', () => {
    expcurso.style.display = "none";
    expbacharel.style.display = "block";
});

//volta contribuicao -> mestrado
const backContribuicao = document.querySelector("#back-contribuicao");
backContribuicao.addEventListener('click', () => {
    expcontribuicao.style.display = "none";
    cartas.style.display = "none";
    expmestrado.style.display = "block";
});
//volta licença -> contribuicao
const backLicensa = document.querySelector("#back-licensa");
backLicensa.addEventListener('click', ()=>{
    expcontribuicao.style.display = "block";
    cartas.style.display = "block";
    explicensa.style.display = "none";
});
//volta classe -> licença
const backClasse = document.querySelector("#back-classe");
backClasse.addEventListener('click', () =>{
    explicensa.style.display = "block";
    expclasse.style.display = "none";
});

//Volta class -> classe
const backClass = document.querySelector("#back-class");
backClass.addEventListener('click', ()=>{
    expclass.style.display = "block";
    expclasse.style.display = "none";
})
// volta itens -> classe
const backitens = document.querySelector("#back-itens");
backitens.addEventListener('click', ()=>{
    expclasse.style.display = "block";
    itens.style.display = "none";
})
// volta area->itens
const backArea = document.querySelector("#back-area");
backArea.addEventListener('click', () =>{
    area.style.display = "none";
    itens.style.display = "block";
})
