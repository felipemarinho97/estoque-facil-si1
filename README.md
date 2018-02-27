# Estoque Facil - Sistema de Informação 1

# Instalação das depedências do Frontend
Para a instalação das dependências do AngularJS execute no terminal o seguinte comando:
```
npm install
```
Para mais informações da estrutura do AngularJS acesse o README na pasta **src/main/webapp**

# Instalação das dependências do Backend
É necessário a instalação do PostgreSQL e subir uma instância local na porta 5432 (normalmente é a porta padrão do PostgreSQL). Seguindo as configurações que estão no arquivo src/main/resources/application.properties basta o seguinte comando:

```
createdb -U postgres estoque-facil-db
```
Link de ajuda: https://www.digitalocean.com/community/tutorials/como-instalar-e-utilizar-o-postgresql-no-ubuntu-16-04-pt

# Execução Local (Passos) do Backend
### Spring Boot
```
mvn spring-boot:run
```

 

