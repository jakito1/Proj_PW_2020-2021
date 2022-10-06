use CulinariaIPS;

-- APAGA TUDO DA NOVA BD
/*
exec sp_MSforeachtable "declare @name nvarchar(max); set @name = parsename('?', 1); exec sp_MSdropconstraints @name";
exec sp_MSforeachtable "drop table ?";
*/

create table Users(
	UserID int identity(1,1) not null primary key,
	UserType varchar(50) not null
);

create table Accounts(
	AccountID int identity(1,1) not null primary key,
	AUserID int not null foreign key references Users(UserID),
	AEmail varchar(200) unique not null,
	AUsername varchar(20) not null,
	APassword varchar(max) not null,
);

create table Categories(
	CategoryID int identity(1,1) not null primary key,
	CategoryName varchar(100)
);

create table Comments(
	CommentID int identity(1,1) not null primary key,
	AccountID int not null foreign key references Accounts(AccountID),
	Comment varchar(200) not null
);

create table Reactions(
	ReactionID int identity(1,1) not null primary key,
	Reaction nvarchar(max) not null,
);

create table Posts(
	PostID int identity(1,1) not null primary key,
	PCategoryID int not null foreign key references Categories(CategoryID),
	PUserID int not null foreign key references Users(UserID),
	PTitle varchar(100) not null,
	PImage image,
	PCommentID int foreign key references Comments(CommentID),
	PReactionID int foreign key references Reactions(ReactionID), 
	upvotes int,
	downvotes int,
);


---------------------------------------------------------------------------------------------------


insert into Users(UserType) values('Gestor do Fórum');
insert into Users(UserType) values('Gestor de Conteúdo');
insert into Users(UserType) values('Visitante');

insert into Accounts(AUserID, AEmail, AUsername, APassword) values(1, 'gestorForum@gmail.com', 'gestorForum', 'gestorForum1234');
insert into Accounts(AUserID, AEmail, AUsername, APassword) values(2, 'gestorConteudo@gmail.com', 'gestorConteudo', 'gestorConteudo1234');
insert into Accounts(AUserID, AEmail, AUsername, APassword) values(3, 'visitante@gmail.com', 'visitante', 'visitante1234');

insert into Comments(AccountID, Comment) values(3, 'Post hilariante');

insert into Reactions(Reaction) values(N'😍');
insert into Reactions(Reaction) values(N'🤢');
insert into Reactions(Reaction) values(N'🤷‍');

insert into Categories(CategoryName) values('Truques e Dicas');
insert into Categories(CategoryName) values('Receitas Portuguesas');
insert into Categories(CategoryName) values('Receitas Saudáveis');
insert into Categories(CategoryName) values('Sabores do Mundo');
	
insert into Posts(PCategoryID, PUserID, PTitle, PCommentID, PReactionID, upvotes, downvotes) values(2, 3, 'O meu primeiro arroz de pato!', 1, null, 0, 0);
insert into Posts(PCategoryID, PUserID, PTitle, PCommentID, PReactionID, upvotes, downvotes) values(3, 3, 'Quando nem torradas sabes fazer XD', 1, null, 0, 0);


---------------------------------------------------------------------------------------------------
go
create or alter procedure LoginUser @email varchar(200), @Password varchar(max)
as
begin
	declare @checkAccount int;
	set @checkAccount = (select count(*) from Accounts where AEmail = @email and APassword = @Password);
    if @email is not null and @Password is not null and @checkAccount = 1
    begin
        return 1;
    end
	else
	begin
		return 0;
	end
end
go


go
create or alter procedure Registar @email varchar(50), @Password varchar(max), @Username varchar(50)
as
begin
	declare @checkAccount int;
	set @checkAccount = (select count(*) from Accounts where AEmail = @email);
    if @email is not null and @Password is not null and @Username is not null and @checkAccount = 0
    begin
        insert into Accounts(AUserID, AEmail,AUsername, APassword) values (3, @email, @Username, @Password);
		select AEmail,AUsername from Accounts where AEmail = @email;
    end
end
go

-- select * from Accounts;