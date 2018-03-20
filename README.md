# Containator

CLI tool that generates awesome components following the Container/Presenter pattern for React projects.

## Installation

For better experience shake before use and install globally 🌏

#### yarn

```
yarn global add containator
```

#### npm

```
npm install -g containator
```

## Usage

### 🚧 Warning: 🚧

Containator will create a folder with your component's name, if the folder is already created it won't create anything since it would be dangerous to overwrite.

1.  Go to the folder where you want to create the component:

    ```console
    nico@coder:~$ cd Components
    ```

2.  Run containator where 'Awesome' is the name of your component:

    ```console
    nico@coder:/Components$ containator create Awesome
    ```

3.  Go inside to see the magic ✨

    ```console
    nico@coder:/Components$ cd Awesome && ls
    ```

Enjoy!

That will create a folder with the following file structure:

```bash
Awesome
├── AwesomeContainer.js
├── AwesomePresenter.js
├── index.js
```

### What about CSS?

Containator can also create a CSS file for you and import it on the presenter component. You can use this by using:

`containator create Awesome --css`

That will create a folder with the following file structure:

```
Awesome
├── AwesomeContainer.js
├── AwesomePresenter.js
├── Awesome.css
├── index.js
```

### What if I use styled-components?

It's also supported, just run:

`containator create Awesome --styled`

And your presenter.js will have an import to styled ready to be used.

# How do the files look like?

I'm glad you asked!

#### index.js:

```js
import AwesomeContainer from "./AwesomeContainer";
export default AwesomeContainer;
```

#### AwesomeContainer.js:

```js
import React, { Component } from "react";
import PropTypes from "prop-types";
import AwesomePresenter from "./AwesomePresenter";

class AwesomeContainer extends Component {
  static propTypes = {};
  state = {};
  render() {
    return <AwesomePresenter {...this.state} />;
  }
}
export default AwesomeContainer;
```

#### AwesomePresenter.js without CSS:

```js
import React from "react";
import PropTypes from "prop-types";

const AwesomePresenter = ({}) => "Make something awesome!";

AwesomePresenter.propTypes = {};

export default AwesomePresenter;
```

#### AwesomePresenter.js with CSS:

```js
import React from "react";
import PropTypes from "prop-types";
import "AwesomeStyles.css";

const AwesomePresenter = ({}) => "Make something awesome!";

AwesomePresenter.propTypes = {};

export default AwesomePresenter;
```

#### AwesomePresenter.js with Styled Components:

```js
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AwesomePresenter = ({}) => "Make something awesome!";

AwesomePresenter.propTypes = {};

export default AwesomePresenter;
```

# Credits

This CLI was made with ❤️ by Nico from [Nomad Coders](http://academy.nomadcoders.co) , if you have any problems using it please open a pull request or contact me via [slack](http://nomadcoders.now.sh).

Stay cool 😎, be happy 😬 and make beautiful stuff 💅🏻

~ Nico & Lynn
