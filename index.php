<?php
// php removido por causa das informações confidencias da empresa que prestei esse projeto.
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>

    <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.15/dist/tailwind.min.css">
    <link rel="shortcut icon"
        href="https://s3.amazonaws.com/gupy5/production/companies/341/career/355/images/2022-02-16_15-31_logo.png"
        type="image/x-icon">

    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Solicitação Visto</title>
</head>
<style>
    h1 {
        font-size: 30px;
        text-align: center;
        padding: 10px;
        margin-bottom: 20px;
    }

    select {
        border: 1px solid #3b82f6;
        border-radius: 10px;
    }

    .none {
        display: none;
    }
    .logo {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .logo img {
        height: 150px;
    }

    @media (max-width: 800px) {
        form {
            width: 85%;
        }
    }

    ion-icon {
        font-size: 30px;
        color: #3b82f6;
    }
    .mb-4 button, .mb-6 button{
        margin-top: 10px;
    }
</style>

<body>
    <div class="logo">
        <img src="https://s3.amazonaws.com/gupy5/production/companies/341/career/355/images/2022-02-16_15-31_logo.png">
    </div>
    <h1>Preencha o formulário abaixo:</h1>
    <form class="max-w-md mx-auto" method="POST" action="questions.php">

        <div class="mb-4" id="form_name">
            <label class="block text-gray-700 font-bold mb-2" for="nome">
                Nome:
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nome" name="nome" type="text" placeholder="Digite seu nome" required>
            <button id="btn-nome"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Próxima</button>

        </div>
        <div class="mb-4 none" id="form_email">
            <button id="back-email"><ion-icon name="arrow-up-outline"></ion-icon></button>
            <label class="block text-gray-700 font-bold mb-2" for="email">
                E-mail:
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" name="email" type="email" placeholder="Digite seu e-mail" required>
            <button id="btn-email"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Próxima</button>
        </div>
        <div class="mb-6 none" id="form_whatsapp">
            <button id="back-whats"><ion-icon name="arrow-up-outline"></ion-icon></button>
            <label class="block text-gray-700 font-bold mb-2" for="whatsapp">
                WhatsApp:
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="whatsapp" name="whatsapp" type="tel" placeholder="Digite seu WhatsApp" required>
            <button id="btn-whats"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Próxima</button>

        </div>
        <div class="mb-4 none" id="exp-doutorado">
            <button id="back-doutorado"><ion-icon name="arrow-up-outline"></ion-icon></button>
            <label for="doutorado" class="block text-gray-700 font-bold mb-2">Você tem doutorado?</label>
            <select id="doutorado" name="doutorado"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required>
                <option value="">Selecione uma opção</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
            <div class="" id="anos-doutorado">
                <label for="anos-experiencia">Quantos anos de experiência você tem?</label>
                <select id="anos-experiencia" name="anos-experiencia">
                    <option value="0-5">Menos de 5 anos</option>
                    <option value="5-10">De 5 a 10 anos</option>
                    <option value="10+">Mais de 10 anos</option>
                </select>
            </div>
            <button id="btn-doutorado"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Próxima</button>
        </div>
        
        <div class="mb-4 none" id="exp-mestrado">
            <button id="back-mestrado"><ion-icon name="arrow-up-outline"></ion-icon></button>
            <label for="mestrado" class="block text-gray-700 font-bold mb-2">Você tem mestrado? </label>
            <select id="mestrado" name="mestrado"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required>
                <option value="">Selecione uma opção</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
            <div id="xp-mestrado">
                <label for="">Quantos anos de experiência você tem?</label>
                <select id="anos-mestrado" name="anos-mestrado">
                    <option value="0-5">Menos de 5 anos</option>
                    <option value="5-10">De 5 a 10 anos</option>
                    <option value="10+">Mais de 10 anos</option>
                </select>
            </div>
            <button id="btn-mestrado"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Próxima</button>
        </div>
        <div class="mb-4 none" id="exp-bacharel">
            <button id="back-bacharel"><ion-icon name="arrow-up-outline"></ion-icon></button>
            <label for="" class="block text-gray-700 font-bold mb-2">Você tem bacharelado ou licenciatura com mais de 5
                anos de experiência? </label>
            <select id="bacharel" name="bacharel"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required>
                <option value="">Selecione uma opção</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
            <div id="xp-bacharel">
                <label for="anos-bacharel">Quantos anos de experiência você tem?</label>
                <select id="anos-bacharel" name="anos-bacharel">
                    <option value="5-10">De 5 a 10 anos</option>
                    <option value="10+">Mais de 10 anos</option>
                </select>
            </div>
            <button id="btn-bacharel"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Próxima</button>

            </div>
        <div class="mb-4 none" id="exp-curso">
            <button id="back-curso"><ion-icon name="arrow-up-outline"></ion-icon></button>
            <label for="curso" class="block text-gray-700 font-bold mb-2">Voce tem algum curso: profissionalizante, tecnologo ou tecnico?</label>
            <select id="curso" name="curso"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required>
                <option value="">Selecione uma opção</option>
                <option value="nao">Não</option>
                <option value="sim">Sim</option>
            </select>
            <button id="btn-curso"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Próxima</button>

            </div>
        <div class="mb-4 none" id="exp-cartas">
            <button id="back-contribuicao"><ion-icon name="arrow-up-outline"></ion-icon></button>
            <label for="cartas" class="block text-gray-700 font-bold mb-2">Voce conseguiria cartas de recomendação?</label>
            <select id="cartas" name="cartas">
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
        </div>

        <div class="mb-4 none" id="exp-contribuicao">
            <label for="contribuicao" class="block text-gray-700 font-bold mb-2">Voce tem contribuição expressiva na area que atua?</label>
            <select id="contribuicao" name="contribuicao">
                <option value="">Selecione uma opção</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
            <br>
            <button id="btn-contribuicao"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Próxima</button>

            </div>

        <div class="mb-4 none" id="exp-licensa">
            <button id="back-licensa"><ion-icon name="arrow-up-outline"></ion-icon></button>
            <label for="licensa" class="block text-gray-700 font-bold mb-2">Para exercer sua atividade voce precisa de alguma licensa? Como: OAB, CREA?</label>
            <select id="licensa" name="licensa">
                <option value="">Selecione uma opção</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
            <button id="btn-licensa"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Próxima</button>

        </div>

        <div class="mb-4 none" id="exp-classe">
            <button id="back-classe"><ion-icon name="arrow-up-outline"></ion-icon></button>
            <label for="classe" class="block text-gray-700 font-bold mb-2">Voce faz parte de alguma associação de classe?</label>
            <select id="classe" name="classe">
                <option value="">Selecione uma opção</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
            <button id="btn-classe"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Próxima</button>
        </div>

        <div class="mb-4 none" id="exp-class">
            <button id="back-class"><ion-icon name="arrow-up-outline"></ion-icon></button>
            <label for="exp" class="block text-gray-700 font-bold mb-2">Voce tem 10 anos ou mais de experiência em sua vida profissional na sua area?</label>
            <select id="exp" name="exp">
                <option value="">Selecione uma opção</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
            <button id="btn-class"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Próxima</button>
        </div>

        <div class="mb-4 none" id="exp-prof">
            <button id="back-prof"><ion-icon name="arrow-up-outline"></ion-icon></button>
            <label for="prof" class="block text-gray-700 font-bold mb-2">Voce ganha acima da sua classe de profissional?</label>
            <select id="prof" name="prof">
                <option value="">Selecione uma opção</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
            <button id="btn-prof"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Próxima</button>

        </div>

        <div class="mb-4 none" id="exp-itens">
            <button id="back-itens"><ion-icon name="arrow-up-outline"></ion-icon></button>
            <label for="itens" class="block text-gray-700 font-bold mb-2">Você tem alguns desses itens?</label>
            <div>
                <input type="checkbox" id="artigos-publicados" name="itens[]" value="artigos-publicados">
                <label for="artigos-publicados">Artigos Publicados</label>
            </div>
            <div>
                <input type="checkbox" id="entrevistas" name="itens[]" value="entrevistas">
                <label for="entrevistas">Entrevistas</label>
            </div>
            <div>
                <input type="checkbox" id="reconhecimento-midia" name="itens[]" value="reconhecimento-midia">
                <label for="reconhecimento-midia">Reconhecimento na Mídia</label>
            </div>
            <div>
                <input type="checkbox" id="premios" name="itens[]" value="premios">
                <label for="premios">Prêmios</label>
            </div>
            <div>
                <input type="checkbox" id="livros-publicados" name="itens[]" value="livros-publicados">
                <label for="livros-publicados">Livros Publicados</label>
            </div>
            <button id="btn-itens"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Próxima</button>

        </div>


        <div class="mb-4 none" id="area">
            <button id="back-area"><ion-icon name="arrow-up-outline"></ion-icon></button>
            <label for="area" class="block text-gray-700 font-bold mb-2">Qual sua área de atuação?</label>
            <select id="area" name="area">
                <option value="saude">Saude</option>
                <option value="educacao">Educação</option>
                <option value="ciencia">Ciência</option>
                <option value="tecnologia">Tecnologia</option>
                <option value="artes">Artes</option>
                <option value="negocios">Negócios</option>
                <option value="empreendedorismo">Empreendedorismo</option>
                <option value="engenharia">Engenharia</option>
            </select>

        </div>

        <div id="botao" class=" none flex items-center justify-between">
            <div class="">
                <input type="checkbox" required>
                <label>Eu confirmo o envio dos meus dados</label>
            </div>
            <button type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                id="submit-btn">Enviar</button>
        </div>
        <script src="./questions.js"></script>
    </form>

</body>

</html>