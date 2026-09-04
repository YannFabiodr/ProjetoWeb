create database BDImpressora3d;

use BDImpressora3d;

create table TBCliente(
    ID int not nulll PRIMARY KEY,
    Nome varchar(200) not null,
    CPF varchar(14) not null,
    Sexo varchar(1) not null,
    DataNasc date not null,
    Email varchar(200) not null,
    Senha varchar(16) not null
)

create table TBEndereco (
    IdEndereco int not null PRIMARY KEY IDENTITY,
    CEP varchar(8) not null,
    TipoEnder varchar(100) not null,
    CodCliente int not null,
    Rua varchar(200) not null,
    Numero int not null,
    Complemento varchar(100),
    Bairro varchar(100) not null,
    Cidade varchar(100) not null,
    Estado varchar(2) not null
)

create table TBVenda (
    IdVenda not null PRIMARY KEY IDENTITY,
    DataVenda date not null,
    
)