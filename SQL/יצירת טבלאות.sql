
CREATE TABLE Category(						--���� �������
	CategoryId int identity (1,1) primary key,--��� �������
	CategoryName nvarchar(20)				--�� �������
);

CREATE TABLE Games(							--���� ������
	GameID int identity(1,1)primary key,				--��� ����
	GameName Nvarchar(20),				--�� ����
	GameCategory int REFERENCES Category,	--��� �������
	GamePrice int,								--����
	GameImg nvarchar(20),						--�����
	GameAmount int						--���� �����
);

CREATE TABLE Customer(						--���� ������
	CustID int identity(100,1)primary key,			--��� ����
	CustName nvarchar(20),				--�� ����
	CustPassWord nvarchar(20),					--�����
	CustCreditDetails nvarchar(50)					--���� ����� �����
);

CREATE TABLE Buy(						--�����
	BuyId int identity(1,1) primary key,				--��� ����
	CustID int REFERENCES Customer,		--��� ����
	BuyDaty date,							--����� ����
	BuySum int									--���� ����
);

CREATE TABLE SaleDetails(				--���� ���� ����
	SaleCode int identity(1,1) primary key,--��� ���� ����
	BuyId int REFERENCES Buy,		--��� ����
	GameID int REFERENCES Games,			--��� ����
	SaleAmount int 
);

