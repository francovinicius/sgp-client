# SGP (Sistema de Gerenciamento de Projetos)

## Descrição  
SGP é uma aplicação desenvolvida em **Java Spring Boot** (backend) e **Angular** (frontend). Trata-se de um Sistema de Gerenciamento de Pessoas. 

## Estrutura do Projeto  
O projeto é dividido em duas partes:  

- **Backend**: API responsável por processar as regras de negócios e gerenciar o banco de dados.  
- **Frontend**: Interface do usuário, conectada ao backend para exibir dados e facilitar a interação.  

### Backend  
- **Controle**: Gerencia requisições e lógica de negócios.  
- **Modelo**: Define as entidades do sistema.  
- **Repositório**: Interage com o banco de dados.  

### Frontend  
- **Componentes**: Definem a estrutura e lógica da interface.  
- **Serviços**: Gerenciam a comunicação com a API do backend.  
- **Rotas**: Determinam as páginas e fluxos da aplicação.  

## Tecnologias Utilizadas  
- **Backend**:  
  - Java  
  - Spring Boot  
  - MySQL / SQLite (configurável)  
- **Frontend**:  
  - Angular  
  - TypeScript  

---

## Pré-requisitos  
Certifique-se de ter as seguintes ferramentas instaladas:  
- **Node.js** e **npm** (para o frontend)  
- **JDK 11+** (para o backend)  
- **Maven** (para build do backend)  
- **MySQL** ou **SQLite** (para o banco de dados)  

---

## Instalação e Execução

### 1. Clonar os Repositórios  

Abra o terminal e execute os comandos abaixo para baixar os dois repositórios:  

```bash
# Clonar o backend
git clone https://github.com/francovinicius/SGP.git

# Clonar o frontend
git clone https://github.com/francovinicius/sgp-client.git
```

---

### 2. Backend: Configuração e Execução  

1. Navegue para o diretório do backend:  
   ```bash
   cd SGP
   ```

2. Configure o banco de dados MySQL no arquivo `application.properties` ou `application.yml`. Um exemplo:  

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/sgp
   spring.datasource.username=seu_usuario
   spring.datasource.password=sua_senha
   spring.jpa.hibernate.ddl-auto=update
   ```

3. Execute o backend com Maven:  
   ```bash
   mvn spring-boot:run
   ```

4. O backend estará disponível em:  
   ```
   http://localhost:8080/
   ```

---

### 3. Frontend: Configuração e Execução  

1. Abra outro terminal e navegue para o diretório do frontend:  
   ```bash
   cd sgp-client
   ```

2. Instale as dependências do Angular:  
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento Angular:  
   ```bash
   ng serve
   ```

4. O frontend estará disponível em:  
   ```
   http://localhost:4200/
   ```

---

### 4. Acesso ao Sistema  

- **Backend**: `http://localhost:8080/`  
- **Frontend**: `http://localhost:4200/sgp`  

---

## Considerações Finais  

Agora você tem o **SGP** rodando localmente! A interface do frontend se comunica diretamente com a API do backend. Certifique-se de que ambos os servidores estejam em execução para que a aplicação funcione corretamente.  

Caso tenha dúvidas ou encontre problemas, consulte a documentação do projeto ou abra uma **issue** nos repositórios.  

---

## Contato  

- **Autor**: Vinicius Franco Duarte  
- **GitHub**: [SGP - Backend](https://github.com/francovinicius/SGP) | [SGP - Frontend](https://github.com/francovinicius/sgp-client)
