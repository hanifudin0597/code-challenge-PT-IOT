<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Code Challenge PT IOT Kreasi Indonesia</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#requirements">Requirements</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#setup-env-example">Setup .env example</a></li>
      </ul>
    </li>
    <li><a href="#rest-api">REST API</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#related-project">Related Project</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#our-team">Our Team</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

Create a Node.js app for building e-commerce RESTful APIs using Express.

### Built With
This app was built with some technologies below:
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [JSON Web Tokens](https://jwt.io/)
- [Sequelize](https://sequelize.org/)
- [MYSQL](https://www.mysql.com/)
- and other

### Feature
- Terdapat 2 Hak Akses dalam aplikasi ini yaitu
```
    a. Admin : - Bisa mengubah hak akses suatu user (active/nonactive hak akses)
               - Melihat semua user
               - Login
    b. User : - Memiliki Akses terhadap data (Read, Update, Delete) Products
              - Login
```

- Akun Admin
```
email : admin123@gmail.com
password : admin123
```

- Akun User
```
email : user123@gmail.com
password : user123
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* [Node.js](https://nodejs.org/en/download/)

### Requirements
* [Node.js](https://nodejs.org/en/)
* [Postman](https://www.getpostman.com/) for testing

### Installation

- Clone the Repo
```
https://github.com/hanifudin0597/code-challenge-PT-IOT.git
```
- Go To Folder Repo
```
cd code-challenge-PT-IOT
```
- Install Module
```
npm install
```
- Make a new database mysql
- <a href="#setup-env-example">Setup .env</a>
- Migrate database
```
sequelize db:migrate
```
- Isi field database
```
sequelize db:seed:all
```
- Type `npm run start` To run project

<p align="right">(<a href="#top">back to top</a>)</p>

### Setup .env example

Create .env file in your root project folder.

```env
APP_PORT=
DB_HOSTNAME=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
DB_DIALECT=
JWT_SECRET=
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Dokumentasi Postman
- File dokumentasi postman terlampir


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<p align="right">(<a href="#top">back to top</a>)</p>

## License
Distributed under the [MIT](/LICENSE) License.

<p align="right">(<a href="#top">back to top</a>)</p>
