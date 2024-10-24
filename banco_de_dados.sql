drop database consultorioDB;
create database consultorioDB;
use consultorioDB;

CREATE TABLE paciente (
    id_paciente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    rg varchar(11) not null unique,
    telefone VARCHAR(15) 
);

CREATE TABLE login(
    id_login INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);
CREATE TABLE agendamento (
    id_agendamento INT PRIMARY KEY AUTO_INCREMENT,
    id_paciente INT,
	dt_agendamento DATE NOT NULL,
    hr_agendamento time not null,
    tratamento varchar(255) not null,
    status ENUM('confirmado', 'cancelado', 'concluído') NOT NULL,
    FOREIGN KEY (id_paciente) REFERENCES paciente(id_paciente) on delete set null
);
insert into login (nome, email, senha) values ("Rodrigo", "r@gmail.com", sha2("12345678", 256));
select id_login as ID, nome as Nome, email as Email, senha as Senha from login;
insert into paciente (nome, rg, telefone) values 
	("Maria Oliveira dos Santos", "55834758-10", "11 90000-0000"),
    ("João Carvalho Leão", "55434758-07", "11 98000-0000"),
    ("Charlie Cernov Amarante", "55856788-02", "11 97000-0000");
select nome as nome, rg as RG, telefone as telefone from paciente;

insert into agendamento (id_paciente, dt_agendamento, hr_agendamento, tratamento, status) values 
(1, "2024-10-30", "14:00:00", "checkup", 'confirmado'),
(2, "2024-10-20", "11:00:00", "checkup", 'concluído'),
(3, "2024-10-30", "12:00:00", "canal", 'cancelado');
select * from agendamento;
select id_login as id, email from login where email = "r@gmail.com" and senha = sha2("12345678", 256);




