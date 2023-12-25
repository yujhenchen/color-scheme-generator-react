<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/yujhenchen/color-scheme-generator-react">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">Color Scheme Generator</h3>

  <p align="center">
    My solo project - Color Scheme Generator (from The Frontend Developer Career Path of Scrimba)
    <br />
    <a href="https://github.com/yujhenchen/color-scheme-generator-react"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="" target=”_blank”>View Demo</a>
    ·
    <a href="https://github.com/yujhenchen/color-scheme-generator-react/issues">Report Bug</a>
    ·
    <a href="https://github.com/yujhenchen/color-scheme-generator-react/issues">Request Feature</a>
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
        <!-- <li><a href="#prerequisites">Prerequisites</a></li> -->
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#usage">Usage</a></li> -->
    <li><a href="#roadmap">Roadmap</a></li>
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <li><a href="#issues-and-solutions">Issues and solutions</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

My solo project - Color Scheme Generator.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![TailwindCSS][TailwindCSS]][TailwindCSS-url]

- React Hooks
    - useState
    - useCallback

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

<!-- ### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ``` -->

### Installation

Install packages

```sh
yarn
```

Launch at localhost in development mode

```sh
yarn start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- ROADMAP -->

## Roadmap

- [x] Click to copy color to clipboard

See the [open issues](https://github.com/yujhenchen/color-scheme-generator-react/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ISSUES AND SOLUTIONS -->

## Issues and solutions

### Vertical align text in `<p>`?

#### Solution
flex items-center justify-center


### How to display check mark in the selected `<option>` in `<select>`?

#### Solution


### Vertical stretch flex item in flex direct row parent?

#### Solution
set self-stretch to the flex item


### Scale to increase the size of flex item without changing the layout of the parent?

#### Solution


### Show copy toast and hide after seconds

#### Solution
debounce


### debounce does not work?
Root cause:
> This is a caveat of function components. Local variables inside a function expires after every call. Every time the component is re-evaluated, the local variables gets initialized again.

#### Solution
https://rajeshnaroth.medium.com/using-throttle-and-debounce-in-a-react-function-component-5489fc3461b3



debounce function in helper.js:
```
export default function debounce(func, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
```

Before
```
  const hideToast = debounce(() => setShowToast(false), 2000);
```

After wrap the usage using useCallBack()
```
const hideToast = useCallback(
    debounce(() => setShowToast(false), 2000),
    []
  );
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

<!-- Jen Chen - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com -->

Jen Chen

Project Link: [https://github.com/yujhenchen/color-scheme-generator-react](https://github.com/yujhenchen/color-scheme-generator-react)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Scrimba](https://scrimba.com/)



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/yujhenchen/color-scheme-generator-react.svg?style=for-the-badge
[contributors-url]: https://github.com/yujhenchen/color-scheme-generator-react/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/yujhenchen/color-scheme-generator-react.svg?style=for-the-badge
[forks-url]: https://github.com/yujhenchen/color-scheme-generator-react/network/members
[stars-shield]: https://img.shields.io/github/stars/yujhenchen/color-scheme-generator-react.svg?style=for-the-badge
[stars-url]: https://github.com/yujhenchen/color-scheme-generator-react/stargazers
[issues-shield]: https://img.shields.io/github/issues/yujhenchen/color-scheme-generator-react.svg?style=for-the-badge
[issues-url]: https://github.com/yujhenchen/color-scheme-generator-react/issues
[license-shield]: https://img.shields.io/github/license/yujhenchen/color-scheme-generator-react.svg?style=for-the-badge
[license-url]: https://github.com/yujhenchen/color-scheme-generator-react/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[FontAwesome]: https://a11ybadges.com/badge?logo=fontawesome
[FontAwesome-url]: https://fontawesome.com/
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/