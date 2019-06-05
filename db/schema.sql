drop DATABASE if exists burgers_db;
create DATABASE burgers_db;
Use burgers_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(250),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);
