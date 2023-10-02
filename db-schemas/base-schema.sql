CREATE TABLE PRODUCTS(
    ID INT UNSIGNED AUTO_INCREMENT NOT NULL,
    NAME VARCHAR(100) NOT NULL,
    QUANTITY INT UNSIGNED NOT NULL DEFAULT 0,
    PRIMARY KEY(ID)
);


CREATE TABLE USERS(
    ID INT UNSIGNED AUTO_INCREMENT NOT NULL,
    NAME VARCHAR(100) NOT NULL,
    ROLE ENUM('ADMIN','SELLER','SUPPORTER','CUSTOMER'),
    PRIMARY KEY(ID)    
);
