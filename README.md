# Scandiweb Test

### Technology used

- REACT-JS - Front-end
- BOOSTRAP - Utilizes Sass for a modular and customizable architecture.
- PHP - Back-end API
- MySQL - Database

### How to run locally

1. It's recommended to use XAMPP as a local server because its installer already has MySQL to run the API. To download click [here](https://www.apachefriends.org/pt_br/index.html).

### How to run the project

1. First clone the repository in the "/htdocs" directory located in the XAMPP root folder using the command:

```sh
    git clone https://github.com/Hakai17/scandiweb.git
```

- It's also possible to clone to any other folder on your computer, just change the folder that XAMPP will serve. Click [here](https://www.servti.com/2019/01/08/como-change-default-folder-htdocs-of-xampp/) to read the tutorial on how to do.

2. Run the "APACHE" and "MySQL" services in XAMPP.
3. Acess the phpmyadmin and create a database with name "_scandiweb_",
if you already has a database, just change the value "dbanme" in "connect.php"
4. import the file "products.sql".
5. use "npm install", "npm install booststrap ^5.3.0-alpha3", "npm install react-router-dom" and "npm start" to run the project.
6. Now the project is configured and ready to run.

### Images

<img src="https://github.com/Hakai17/scandiweb/blob/developer/src/assets/images/homepage.png" alt="homepage" />

<img src="https://github.com/Hakai17/scandiweb/blob/developer/src/assets/images/addpage.png" alt="addproduct page" />

