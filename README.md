<a name="readme-top"></a>
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <p align="center">
   REACT DESIGN PATTERNS
    <br />
    <br />
  </p>
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
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This project is to explore React.js Design Patterns with help of Shaun Wassell's course in LinkedIn Learning.

<dl>
  <dt>Layout Components - React components that deal primarily with arranging other components on the page</dt>
  <dd>i) split-screen-component</dd>
  
  <dd>ii) list-item-component</dd>
  <dd>iii) modal-components</dd>
  <dt>Container Components - Components that take care of loading and managing data for their child components</dt>
  <dd>i) current-user-loader-component -> Loading current user (CurrentUserLoader)/ Loading users by id (UserLoader)/ Generic component to load any type of resource from the server (ResourceLoader)/ Load data by creating a async function and load data from local storage (DataSource)</dd>
  <dt>Uncontrolled Components - Components that keep track of their own states and release data only when some event occurs (submit event for HTML forms)</dt>
  <dd>i) uncontrolled-components</dd>
  <dt>Controlled Components - Components that do not keep track of their own state-all state is passed in as props from a parent component (when we use useState hook with text inputs) - tend to be more reusable and easier to test</dt>
   <dd>i) controlled-components</dd>
   <dt>Controlled and Uncontrolled Content (More)</dt>
   <dd>i) controlled-uncontrolled-modals</dd>
   <dd>ii) controlled-uncontrolled-onboarding-flows</dd>
   <dt>Higher-Order Components - A component that returns another component instead of JSX</dt>
   <dd>i) higher-order-components</dd>
 
</dl>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Node][Node.js]][Node-url]
* [![React][React.js]][React-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* Node.js
  ```sh
  Download and install from the official website of Node.js

* npm
  ```sh
  npm install npm@latest -g
  
* Bootstrap
  ```sh
  npm install bootstrap@4.0.0
  ```

* OMDB API 
  ```sh
  Generate an API key to use the Movie API via below link
  https://www.omdbapi.com/
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/KayVee78/movie-app.git
   ```
2. Install NPM packages
   ```sh
   cd client/
   npm install
   
3. To run the project
   ```sh
   npm run start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/kithmi-hetti-709966219/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
[MySQL]: https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white
[Mysql-url]: https://www.mysql.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[Bootstrap]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com/docs/5.3/getting-started/webpack/

