//RENDERIZAÇÃO CONDICIONAL
// escala: toda variavel exp-name se refere a DIV que vai renderizar ou ocultar a DIV.

//renderização dos campos nome -> Email
var nome = document.getElementById("nome");
var form_email = document.getElementById("form_email");
nome.addEventListener("change", function () {
  if (nome != null) {
    form_email.style.display = "block";
  }
  else {
    form_email.style.display = "none";
  }
});
//renderização Email->whatsapp:
var email = document.getElementById("email");
var form_whatsapp = document.getElementById("form_whatsapp");
email.addEventListener("change", function () {
  if (email != null) {
    form_whatsapp.style.display = "block";
  }
  else {
    form_whatsapp.style.display = "none";
  }
});
//renderização whatsapp -> doutorado:
var whatsapp = document.getElementById("whatsapp");
var expdoutorado = document.getElementById("exp-doutorado");
var doutorado = document.getElementById("doutorado");
whatsapp.addEventListener("change", function () {
  if (whatsapp != null) {
    expdoutorado.style.display = "block";
    doutorado.style.display = "block";
  }
  else {
    expdoutorado.style.display = "none";
    doutorado.style.display = "none";

  }
});

// Script para o select de "Você tem doutorado?"
var doutorado = document.getElementById("doutorado");
var expdoutorado = document.getElementById("exp-doutorado");
var mestrado = document.getElementById("anos-mestrado");
var expmestrado = document.getElementById("experiencia-mestrado");
var bacharel = document.getElementById("bacharel");
var expbacharel = document.getElementById("experiencia-bacharel");


// variaveis para ocultar os primeiros campos (abaixo)
var form_name = document.getElementById("form_name");
var form_email = document.getElementById("form_email");
var form_whatsapp = document.getElementById("form_whatsapp");
var anos_doutorado = document.getElementById("anos-doutorado");
doutorado.addEventListener("change", function () {
  if (doutorado.value === "sim") {
    expdoutorado.style.display = "block";
    expmestrado.style.display = "block";
    form_name.style.display = "none";
    form_email.style.display = "none";
    form_whatsapp.style.display = "none";
  } else {
    anos_doutorado.style.display = "none";
    expdoutorado.style.display = "block";
    expmestrado.style.display = "block";
    form_name.style.display = "none";
    form_email.style.display = "none";
    form_whatsapp.style.display = "none"
  }
});

var anos_bacharel = document.getElementById("xp-bacharel");
bacharel.addEventListener("change", function () {
  if (bacharel === "sim") {
    anos_bacharel.style.display = "block";
  } else {
    anos_bacharel.style.display = "none";
  }
});

//Script para o select de "Você tem mestrado?"
var mestrado = document.getElementById("mestrado");
var expbacharel = document.getElementById("exp-bacharel");
var pos = document.getElementById("pos");
var curso = document.getElementById("exp-curso");
var anos_mestrado = document.getElementById("xp-mestrado");

mestrado.addEventListener("change", function () {
  if (mestrado.value === "sim") {
    expbacharel.style.display = "block";
    pos.style.display = "block";
    curso.style.display = "block";
    anos_mestrado.style.display = "none";

  } else if (mestrado.value === "nao") {
    anos_mestrado.style.display = "none";
    expbacharel.style.display = "block";
    pos.style.display = "block";
    curso.style.display = "block";

  } else {
    expbacharel.style.display = "none";
    pos.style.display = "none";
    curso.style.display = "none";
  }
});


// Script para o select "Voce tem algum curso:"
var curso = document.getElementById("curso");
var expcartas = document.getElementById("exp-cartas");


curso.addEventListener("change", function () {
  if (curso.value === "sim") {
    expcartas.style.display = "block";
    expbacharel.style.display = "none";
    expdoutorado.style.display = "none";
    expmestrado.style.display = "none";
    curso.style.display = "none";
  } else if (curso.value === "nao") {
    expcartas.style.display = "none";

  }
});

// Script para o select CARTAS DE RECOMENDACAO
var cartas = document.getElementById("cartas");
var expcontribuicao = document.getElementById("exp-contribuicao");

cartas.addEventListener("change", function () {
  if (cartas.value === "sim") {
    expcontribuicao.style.display = "block";
  } else {
    expcontribuicao.style.display = "none";
  }
});
// Script para o select de "Voce tem contribuição?"
var contribuicao = document.getElementById("contribuicao");
var explicensa = document.getElementById("exp-licensa");

contribuicao.addEventListener("change", function () {
  if (contribuicao.value === "sim" || contribuicao.value === "nao") {
    explicensa.style.display = "block";
  } else {
    explicensa.style.display = "none";
  }
});
// Script para o select "Para exercer sua atividade"
var licensa = document.getElementById("licensa");
var expclasse = document.getElementById("exp-classe");

licensa.addEventListener("change", function () {
  if (licensa.value === "sim" || licensa.value === "nao") {
    expclasse.style.display = "block";
  } else {
    expclasse.style.display = "none";
  }
});
// Script para o select "Voce faz parte de alguma associação de classe?"
var classe = document.getElementById("classe");
var expexp = document.getElementById("exp-class");


classe.addEventListener("change", function () {
  if (classe.value === "sim" || classe.value === "nao") {
    expexp.style.display = "block";
  } else {
    expexp.style.display = "none";
  }
});

// Script para o select "Voce tem 10 anos ou mais"
var exp = document.getElementById("exp");
var expprof = document.getElementById("exp-prof");

exp.addEventListener("change", function () {
  if (exp.value === "sim" || exp.value === "nao") {
    expprof.style.display = "block";
  } else {
    expprof.style.display = "none";
  }
});
// Script para o select "Voce ganha acima da sua classe de profissional?"
var prof = document.getElementById("prof");
//renderiza o botao
// renderiza os itens tambem.
var itens = document.getElementById("exp-itens");
var area = document.getElementById("exp-area");

prof.addEventListener("change", function () {
  if (prof.value === "sim" || prof.value === "nao") {

    itens.style.display = "block";
    area.style.display = "block";

  } else {

    itens.style.display = "none";
    area.style.display = "none";

  }
});


//Voltar para email->nome:
const backEmail = document.querySelector("#back-email");
backEmail.addEventListener('click', ()=>{
  form_email.style.display = "none";
  form_name.style.display = "block";
});

// const backWhats = document.querySelector("#back-whats");
// const backDoutorado = document.querySelector("#back-doutorado");
// const backMestrado = document.querySelector("#back-mestrado");
// const backBacharel = document.querySelector("#back-bacharel");
// const backCurso = document.querySelector("#back-curso");
// const backContribuicao = document.querySelector("#back-contribuicao");
// const backLicensa = document.querySelector("#back-licensa");
// const backClasse = document.querySelector("#back-classe");
// const backClass = document.querySelector("#back-class");
// const backitens = document.querySelector("#back-itens");
// const backArea = document.querySelector("#back-area");
