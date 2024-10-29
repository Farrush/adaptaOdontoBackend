drop database odonto_db;
create database odonto_db;
use odonto_db;

create table paciente(
	id_paciente int not null auto_increment primary key,
    nome varchar(255) not null,
    rg varchar(32) not null unique,
    telefone varchar(15) not null
);

create table login(
	id_login int not null auto_increment primary key,
    nome varchar(255) not null,
    email varchar(255) not null unique,
    senha varchar(255) not null
);

create table agendamento(
	id_agendamento int not null auto_increment primary key,
    id_paciente int,
    dt_agendamento date not null,
    hr_agendamento time not null,
    tratamento varchar(255),
    status enum('Confirmado', 'Cancelado', 'Concluído') not null,
    foreign key (id_paciente) references paciente(id_paciente) on delete set null
);