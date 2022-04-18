## Recrutamento para vaga Frontend Pleno React

Para realizar os testes de proficiência para a vaga, vamos precisar que realize algumas tasks:
Ao finalizar cada task, execute o comando "yarn test" para executar os testes.
Se der SUCCESS, siga para a próxima task.

1 - Criar uma página no Next.js "/teste" com um h1 "Hello P9digital" e um botão "Entrar" que redireciona para a página do formulário "/form";
    - Criar a página "/teste";
    - Criar o h1 com o texto "Hello P9digital" e insira a classe "titulo";
    - Criar o botão com o texto "Entrar" que redireciona para a página "/form";

2 - Na página /form, crie no form simples os campos "celular, uf e cidade" e o botão "Enviar" que imprima um alert com o texto "Dados enviados com sucesso!"
    - Criar o input text "celular";
    - Criar o campo select "uf" alimentando os valores do campo com a variável do helper dados.js "estados";
        - O valor dos campos será a própria uf (uppercase) e o texto também. Ex: <option value="SP">SP</option>
    - Criar o campo select "cidade" alimentando os valores do campo de acordo com a uf selecionada fazendo uma requisição GET na URL "api/cidades/{uf}" com fetch;
        - O valor dos campos será o id da cidade e o texto o nome da cidade. Ex: <option value="123">São José do Rio Preto</option>
    - Criar o botão "Enviar" que imprime um alert com o texto "Dados enviados com sucesso!"

3 - 

