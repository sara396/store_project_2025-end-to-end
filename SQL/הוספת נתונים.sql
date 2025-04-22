
INSERT INTO Category(CategoryName)VALUES
('Playmobil'),
('creations'),
('dolls'),
('doll stroller'),
('Bicycle'),
('board games')

INSERT INTO Games (GameName,GameCategory,GamePrice,GameImg,GameAmount)VALUES
('king',1,100,'img king',12),
('boat',1,150,'img boat',23),
('ambulance',1,150,'img ambulance',32),
('police ',1,100,'img police',11),
('fireDepartment',1,100,'img fireDepartment',0),
('papers',2,10,'img papers',354),
('coloring books',2,15,'img coloring books',129),
('Mandalas',2,32,'img Mandalas',98),
('home decoration',2,50,'img home decoration',76),
('Meri',3,100,'img Meri',32),
('Alisa',3,200,'img Alisa',23),
('SilverCros',4,550,'img SilverCros',7),
('Alias',6,100,'img Alias',30),
('Monopol',6,250,'img Monopol',45),
('Taki',6,70,'img Taki',103),
('Damka',6,70,'img Damka',69)


INSERT INTO Customer(CustName,CustPassWord,CustCreditDetails)VALUES
('חיים', '111','Visa 1234-5678-9012-3456'),
('רחל', '222','MasterCard 2345-6789-0123-4567'),
('חנה', '333','Discover 3456-7890-1234-5678'),
('ישראל', '444','Amex 4567-8901-2345-6789'),
('יוסי', '555','Visa 5678-9012-3456-7890');

INSERT INTO Buy(CustID,BuyDaty,BuySum)VALUES
(100, '2023-01-01', 150),
(102, '2024-08-02', 64),
(103, '2024-08-09', 300),
(100, '2024-11-14', 100),
(101, '2024-12-05', 60);

INSERT INTO SaleDetails(BuyId,GameID,SaleAmount)VALUES
(1,3,1),
(2,8,2),
(3,2,2),
(4,4,1),
(5,6,6)

select*from Category
select*from Customer
select*from Games
select*from Buy
select*from SaleDetails