// função executada em tempo real

(async () => {

    try {
        const headers = {
            'Content-Type': 'application/json',
            'appTeste': 'Sinal de teste/header',
            'autorization': 'Bearer oosasdask3214324312@@!1adasafdas997837yREDS@24',
        };
        const init = {
            // adicionando método HTTP
            method: 'DELETE',
            headers: headers,
            body: JSON.stringify({ // convertendo o conteúdo em JSON
                title: 'Local',
            })

            // para usar o método DELETE, não é necessário o body.
        };

        const respApi = await fetch(
            'https://jsonplaceholder.typicode.com/posts/1',
            init
        );
        
        const respJson = await respApi.json();

        // console.log(respApi)
    

        console.log(respJson)



    } catch (e) {
        console.log('Erro identificado. Observe a url e a sintaxe do cógido. \n'+ e)
    }

})();



/**
 * const apiData = fetch('https://jsonplaceholder.typicode.com/posts')
            .then(apiData => {
                // para converter a resposta em ojb JSON
                return apiData.json();
            })
            .then(jsonApi => {
                // atribuir a resposta convertida em json à variável jsonApi
                console.log(jsonApi);
            })
            
            .catch(e => {
                console.log('Erro identificado. \n'+ e)
            })
 */
   



            /**
             * Erros  comuns
             * 
             * Quando esquecemos algum caracter ou até apagamos algum da url sem querer, tem um erro comum chamado 'Uncaught':
             *  VM73:2 Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 1
             * Isso querer dizer que nenhum dado foi capturado.
             * 
             * Podemos evutar esse erro usnado a função catch(e).
             * 
             */
