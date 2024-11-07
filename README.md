# Application-TG

Aplicação para consumo de logs no Trabalho de Graduação (TG), desenvolvida como prova de conceito para o uso do Graylog Open.

## Descrição

Este projeto faz parte de uma prova de conceito para monitoramento de logs usando o Graylog Open. A aplicação coleta, processa e envia logs de atividades para análise centralizada e monitoração, facilitando a detecção e investigação de eventos.

## Requisitos para rodar a aplicação

- **Java 17**
- **Apache Maven 3.9.5**
- **Node.JS 21.6.2**
- **Docker**

#### Para utilização conjunta ao graylog
- **Graylog Open**, configurado para receber logs

## Build da Aplicação
Antes de iniciar, compile e empacote o projeto usando Maven. Esse passo gera um pacote `.jar` da aplicação:

```bash
mvn clean package -DskipTests
```

