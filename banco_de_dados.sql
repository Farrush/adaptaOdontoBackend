use consultorioDB;
CREATE TABLE cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telefone VARCHAR(15) NOT NULL
);

CREATE TABLE login(
    id_login INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    tipo_usuario ENUM('admin', 'dentista') NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE funcionario (
	id_funcionario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    especialidade VARCHAR(255) NOT NULL,
    contato varchar(15),
	id_login int,
	foreign key (id_login) references login(id_login) on delete set null
);
CREATE TABLE agendamento (
    id_agendamento INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT,
    id_funcionario INT,
	data_agendamento DATETIME NOT NULL,
    status ENUM('confirmado', 'cancelado') NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES usuario(id_cliente),
    FOREIGN KEY (id_funcionario) REFERENCES funcionario(id_funcionario)
);
CREATE TABLE estoque (
	id_item INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    quantidade INT NOT NULL,
    categoria VARCHAR(225) NOT NULL
);
INSERT INTO estoque (nome, quantidade, categoria) VALUES 
('Escova de Dentes', 100, 'Higiene Oral'),
('Fio Dental', 50, 'Higiene Oral'),
('Creme Dental', 75, 'Higiene Oral'),
('Luvas de Procedimento', 200, 'Equipamento'),
('Máscara Cirúrgica', 150, 'Equipamento'),
('Desinfetante', 30, 'Materiais de Limpeza'),
('Algodão', 100, 'Materiais de Limpeza'),
('Anestésico Local', 25, 'Medicamentos'),
('Lente de Contato para Câmera', 10, 'Equipamento'),
('Aparelho de Raios X', 5, 'Equipamento');

INSERT INTO funcionario (nome, especialidade, contato) VALUES
('Marco Melo', 'Odontopediatria', '11971235674'),
('Aline Taranto','Endodontia','11995754062'),
('Filipo Amarante', 'Ortodontia', '11945673434'),
('Ana Araujo', 'Periodontia', '11990903452');






