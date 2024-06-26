
# 📗 Table of Contents

- [📖 About the Project](#about-project)
    - [🛠 Built With](#built-with)
        - [Tech Stack](#tech-stack)
        - [Key Features](#key-features)
        - [Approach](#approach)
    - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
    - [Setup](#setup)
    - [Prerequisites](#prerequisites)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)


# 📖 [Real-time Ride-Share Tracking] <a name="about-project"></a>


**[Real-time Ride-Share Tracking]**  This is simple webpage utilizing Google Maps API to navigate the route.
## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://react.dev/">Reactjs</a></li>
    <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
    <li><a href="https://developers.google.com/maps">Google Maps API</a></li>
  </ul>
</details>


### Key Features <a name="key-features"></a>

- **Interactive map displaying the entire route with marked stops (uses custom markers).**
- **Real-time tracking of the driver's current location.**
- **Calculates and displays both distance and ETA for next stop, assuming constant speed.**
- **Uses additional waypoint coordinates to improve the route efficiency.**
- **Responsive design**


<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Approach to Solve the Problem <a name="approach"></a>

1. Render basic UI with Header based on Figma design and load the map using `useJsApiLoader`.
2. Fetch route directions using Google Maps Directions Service.
3. Initialize (draw) the full route from starting point (Nyabugogo) to ending point (Kimironko)
   with five intermediate stops based on provided coordinates.
4. Included additional custom waypoints to dictate route from second to third stop as the public transport buses need to use specific route (Not allowed to use road nearby Presidential palace).
5. Wait for user to click `Startup` button to start car movement along the drawn route.
6. When button is clicked, the marker simulating driver's movement is moved one step at time along the route while regularly updating the distance and ETA (Estimated Time of Arrival) to the next stop.

## 🚀 Live Demo <a name="live-demo"></a>
Click [here](https://real-time-ride-share-tracking.vercel.app/) to view a live demo of the project.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 💻 Getting Started <a name="getting-started"></a>


To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

1. [Nodejs](https://nodejs.org/en)
2. [Google Map API KEY](https://developers.google.com/maps/documentation/javascript/get-api-key)
3. [Cypress System Requirements](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)
4. Desired Code Editor


### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone https://github.com/edenlisk/transportation-project-assessment.git
```

### Install

Install this project with:

```sh
  cd my-folder
  npm install
```
### Usage

Before running the project, make sure you add .env file with the following variables
```shell
VITE_GOOGLE_MAP_API_KEY=your-google-map-api-key
```
To run the project in development mode, execute the following command:


```sh
  npm start
```


### Deployment

You can deploy this project by using this command:


```sh
    npm run build
```

### Testing

This webpage uses modern testing technologies. It uses cypress for End-to-End and Component tests.

```sh
    npm run test
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Edenlisk**

- LinkedIn: [@edenlisk](https://www.linkedin.com/in/nsanzimfura-enock-nkumbuyedeni/)
- GitHub: [@Edenlisk](https://github.com/edenlisk)
- Twitter: [@Edenlisk](https://twitter.com/nkumbuyedeni)



<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🔭 Future Features <a name="future-features"></a>

[comment]: <> (> Describe 1 - 3 features you will add to the project.)

- **Commuter feature: A tool that helps commuters locate and time their bus arrivals in
  real-time, reducing waiting times.**
- **Vehicle Locator: An application for finding available cars in the vicinity, displaying
  distance and estimated arrival time to the commuter.**
- **Route Optimizer: A feature that suggests the best routes for commuters based on
  current traffic and transit schedules.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/edenlisk/transportation-project-assessment/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ⭐️ Show your support <a name="support"></a>

[comment]: <> (> Write a message to encourage readers to support your project)

If you like this project kindly consider giving ⭐

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

[comment]: <> (> Give credit to everyone who inspired your codebase.)

We would like to thank [_]() who provided the task details and figma design.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


