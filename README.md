# Challenge Encurtador - Backend

## Como funciona o projeto:
Api que encurta urls e as salva no banco de dados, essa urls possuem um tempo de expiração. Quando a url gerada é requisitada voce sera redirecionado para a url completa.

## Projeto em produção
link: https://challenge-encurtador.herokuapp.com/

Projeto publicado no link, caso demore para responder aguardar um pouco, tem relação com o heroku.

### Para rodar o projeto:
Lembrando que é necessário ter o docker e o yarn npm, se quiser optar por rodar por outro meio alterar as configurações dentro do arquivo 'ormconfig.js'

1- docker-compose build  

2- docker-compose up -d

3- yarn typeorm migration:run

4- yarn dev:server


Na hora de finalizar não esqueça de encerrar o container:
docker-compose down


Mantive o .env por não conter informações sensiveis nesse caso especifico e pra facilitar na hora de rodar o projeto, não é o correto, porém para facilitar ao testarem resolvi deixar.

### Pontos que gostaria de adicioar
[ ] Talvez ao ver que a url esta expirada excluí-la

[ ] Ao mandar uma url já existente apenas atualizar o tempo de expiração (gerar ou não outra url?)

[ ] Testar mais fuções dentro dos testes automatizados
