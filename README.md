# Application-TG  
 
Aplicação para consumo de logs no Trabalho de Graduação (TG), desenvolvida como prova de conceito para o uso do **Graylog Open**.  
  
## Descrição  
Este projeto faz parte de uma **prova de conceito** para monitoramento de logs utilizando o **Graylog Open**.  
A aplicação coleta, processa e envia logs de atividades para um ambiente centralizado, permitindo uma análise eficiente e facilitando a detecção e investigação de eventos.  
 
## Requisitos  
Para rodar a aplicação, certifique-se de ter os seguintes requisitos instalados:  
 
### **Ambiente principal**  
- **Java 17**  
- **Apache Maven 3.9.5**  
- **Node.js 21.6.2**  
- **Docker**  
 
### **Para integração com Graylog**  
- **Graylog Open**, devidamente configurado para receber logs  
 
## Build da Aplicação  
Antes de iniciar, compile e empacote o projeto utilizando **Maven**.  
Esse passo irá gerar um arquivo `.jar` da aplicação:  
 
```bash
mvn clean package -DskipTests
