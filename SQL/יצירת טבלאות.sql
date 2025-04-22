
CREATE TABLE Category(						--טבלת קטגוריה
	CategoryId int identity (1,1) primary key,--קוד קטגוריה
	CategoryName nvarchar(20)				--שם קטגוריה
);

CREATE TABLE Games(							--טבלת משחקים
	GameID int identity(1,1)primary key,				--קוד משחק
	GameName Nvarchar(20),				--שם מוצר
	GameCategory int REFERENCES Category,	--קוד קטגוריה
	GamePrice int,								--מחיר
	GameImg nvarchar(20),						--תמונה
	GameAmount int						--כמות זמינה
);

CREATE TABLE Customer(						--טבלת לקוחות
	CustID int identity(100,1)primary key,			--קוד לקוח
	CustName nvarchar(20),				--שם לקוח
	CustPassWord nvarchar(20),					--סיסמא
	CustCreditDetails nvarchar(50)					--פרטי כרטיס אשראי
);

CREATE TABLE Buy(						--קניות
	BuyId int identity(1,1) primary key,				--קוד קניה
	CustID int REFERENCES Customer,		--קוד לקוח
	BuyDaty date,							--תאריך קניה
	BuySum int									--סכום קניה
);

CREATE TABLE SaleDetails(				--טבלת פרטי קניה
	SaleCode int identity(1,1) primary key,--קוד פרטי קניה
	BuyId int REFERENCES Buy,		--קוד קניה
	GameID int REFERENCES Games,			--קוד משחק
	SaleAmount int 
);

