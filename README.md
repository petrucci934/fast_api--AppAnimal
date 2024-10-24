# AppAnimal

Este é um projeto de exemplo para um sistema de cadastro de animais usando FastAPI no backend e uma página HTML interativa com Axios no frontend para listar e cadastrar os animais.

## Funcionalidades

- **Listar Animais**: Exibe uma lista dos animais cadastrados no sistema.
- **Cadastrar Animal**: Permite o cadastro de um novo animal informando nome, idade, sexo e cor.
- **Deletar Animal**: Possibilidade de deletar animais cadastrados via API.

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS e JavaScript (Axios para requisições HTTP).
- **Backend**: FastAPI com CORS habilitado.
- **Banco de Dados**: Dados armazenados em memória (uma lista no servidor, sem persistência).

## Como Executar o Projeto

### Requisitos

- Python 3.x
- FastAPI
- Uvicorn (para executar o servidor)
- Axios (biblioteca JavaScript para requisições HTTP)

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/appanimal.git
   cd appanimal 



2. Clone o repositório:
   ```bash    
    Copiar código
    python -m venv venv
    source venv/bin/activate  # Para Linux/MacOS
    venv\Scripts\activate  # Para Windows

3. Instale as dependências:
   ```bash    
    pip install fastapi uvicorn

4. Execute o servidor FastAPI:
   ```bash    
    uvicorn main:app --reload

5. Abra o arquivo index.html no navegador. Certifique-se de que o backend está rodando no endereço http://localhost:8000.

6. Agora você pode cadastrar novos animais e vê-los listados na página.


   ## Estrutura do Projeto
      ```bash    
      ├── main.py # Código do servidor FastAPI
      ├── index.html # Página web do frontend
      ├── style.css # Arquivo CSS para estilizar o frontend
      ├── index.js # Script JavaScript para interações no frontend
      ├── README.md # Este arquivo de documentação



## Endpoints da API
   '''bash
   - GET /animais/: Retorna a lista de todos os animais cadastrados.
   - POST /animais/: Cadastra um novo animal.
   - GET /animais/{animal_id}: Retorna os detalhes de um animal específico.
   - DELETE /animais/{animal_id}: Deleta um animal com base no ID.

   ## Exemplo de Requisição

      ### Cadastro de um novo animal
      ```bash    
      POST /animais/
      Content-Type: application/json

      {
      "nome": "Rex",
      "idade": 3,
      "sexo": "Macho",
      "cor": "Marrom"
      }
   ## Considerações Finais

   
      Este projeto é um exemplo simples de como integrar um frontend com FastAPI para criar uma aplicação de cadastro de animais. O banco de dados utilizado é volátil (em memória), portanto os dados serão perdidos após reiniciar o servidor.


'''bash
   Esse `README.md` fornece uma documentação básica para qualquer desenvolvedor que deseje entender e executar o projeto localmente.





