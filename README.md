# Containator

Generate customizable React Components following the Container/Presenter Pattern.

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

### Command:

```console
containator <NameOfComponent>
```

Before you can use it create a `containerOptions.json` file on the root folder of your project so you can customize the files that are gonna be generated, these are the options:

| Name       | Description                                                                                                                                                                     | Type                 | Default |
| ---------- | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------: | :-----: |
| styles     | Choose if you want to get a .css file created and imported to the presenter component or if you want an import to `styled-components`                                           | enum('styled','css') | css     |
| typescript | If you are using Typescript this option will create interfaces for both the class component on the container and the stateless component on the presenter, also .ts extensions. | boolean              | false   |


Example of `containerOptions.json` file:

````json
{
  "styles": "css",
  "typescript": true
}

````

### Example of usage

1.  Go to the folder where you want to create the component:

    ```console
    nico@coder:~$ cd Components
    ```

2.  Run containator where 'Awesome' is the name of your component:

    ```console
    nico@coder:/Components$ containator Awesome
    ```

3.  Go inside to see the magic ✨

    ```console
    nico@coder:/Components$ cd Awesome && ls
    ```

4. This will give you this folder structure with the default options:

    ```console
    Awesome
    ├── AwesomeContainer.js
    ├── AwesomePresenter.js
    ├-- AwesomeStyles.css
    ├── index.js
    ```


# How do the files look like?

With the default options:


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

#### AwesomePresenter.js with Styled Components:

```js
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AwesomePresenter = ({}) => "Make something awesome!";

AwesomePresenter.propTypes = {};

export default AwesomePresenter;
```

## With Typescript:

#### AwesomeContainer.tsx

```tsx
import React, { Component } from "react";
import PropTypes from "prop-types";
import AwesomePresenter from "./AwesomePresenter";

interface IProps {
  [x: string]: any;
}

interface IState {
  [x: string]: any;
}

class AwesomeContainer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  static propTypes = {};
  render() {
    return <AwesomePresenter {...this.state} />;
  }
}

export default AwesomeContainer;

```


#### AwesomeContainer.tsx with CSS


````tsx
import React from "react";
import PropTypes from "prop-types";
import "./SomethingStyles.css";

interface IProps {
  [x: string]: any;
}

const SomethingPresenter: React.SFC<IProps> = ({}) => (
  <span>Make something awesome!</span>
);

SomethingPresenter.propTypes = {};

export default SomethingPresenter;

````

# Credits

This CLI was made with ❤️ by Nico from [Nomad Coders](http://academy.nomadcoders.co) , if you have any problems using it please open a pull request or contact me via [slack](http://nomadcoders.now.sh).

Stay cool 😎, be happy 😬 and make beautiful stuff 💅🏻

~ Nico & Lynn
