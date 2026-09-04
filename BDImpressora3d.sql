create database BDImpressora3d;

use BDImpressora3d;

create table TBCliente(
    ID int not null PRIMARY KEY,
    Nome varchar(200) not null,
    CPF varchar(14) not null,
    Sexo varchar(1) not null,
    DataNasc date not null,
    Telefone varchar(11) not null,
    Email varchar(200) not null,
    Senha varchar(16) not null
)

create table TBEndereco (
    IdEndereco int not null PRIMARY KEY auto increment,
    CEP varchar(8) not null,
    TipoEnder varchar(100) not null,
    CodCliente int not null,
    Rua varchar(200) not null,
    Numero int not null,
    Complemento varchar(100),
    Bairro varchar(100) not null,
    Cidade varchar(100) not null,
    Estado varchar(2) not null,
    FOREIGN KEY (CodCliente) REFERENCES TBCliente(ID)
)

create table TBVendedor(
    IDVendedor int not null PRIMARY KEY IDENTITY,
    Nome varchar(200) not null,
    CPF varchar(14) not null,
    Sexo varchar(1) not null,
    DataNasc date not null,
    Telefone varchar(11) not null,
    Email varchar(200) not null,
    Senha varchar(16) not null,
    Salario decimal(10,2) not null,
    PorcComissao varchar(3) not null,
    ValorComissao decimal(10,2) not null
)

create table TBVenda (
    IdVenda int not null PRIMARY KEY IDENTITY,
    DataVenda date not null,
    CodCliente int not null,
    CodVendedor int not null,
    IDEntrega int not null IDENTITY,
    ValorFrete decimal(10,2) not null,
    ValorTotal decimal(10,2) not null,
    FOREIGN KEY (CodVendedor) REFERENCES TBVendedor(IDVendedor),
    FOREIGN KEY (CodCliente) REFERENCES TBCliente(IDCliente) 
)

create table TBImpressora(
    IDImpressora int not null PRIMARY KEY IDENTITY,
    Modelo varchar(200) not null,
    Fabricante varchar(100) not null,
    ValorAquisicao decimal(10,2) not null,
    VidaUtilHoras varchar(100) not null,
    CustoHoraDepreciacao decimal(10,2) not null
)

create table TBFilamento(
    IDFilamento int not null PRIMARY KEY,
    Tipo varchar(100) not null,
    Cor varchar(100) not null,
    QtdEst int not null,
    Espessura decimal(10,2) not null,
    Qualidade varchar(200),
    PesoBobinaKg decimal(10,2) not null,
    ValorBobina decimal(10,2) not null
)



create table TBPeca(
    IDPeca int not null PRIMARY KEY IDENTITY,
    CustoEnergia varchar(100) not null,
    CustoMaoObra decimal(10, 2),
    Nome varchar(200) not null,
    CustoDeprec decimal(10,2) not null,
    CodFilamento int not null,
    CustoTotal decimal(10,2) not null,
    BicoMM decimal(10,2) not null,
    PrecoVenda decimal(10,2) not null,
    TempoImpHoras varchar(100) not null,
    PesoGramas decimal(10,2 ) not null,
    DespGramas decimal(10,2) not null,
    CustoMaterial decimal(10,2) not null,
    FOREIGN KEY (CodFilamento) REFERENCES TBFilamentos(IDFilamento) 
)

create table TBItemVenda(
    Quantidade int  not null,
    ValorUnitario decimal(10,2)not null,
    SubTotal decimal(10,2) not null
)

