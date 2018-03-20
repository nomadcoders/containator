# Containator

CLI tool that generates awesome components following the Container/Presenter pattern for React Projects.

## Installation

#### yarn

```
yarn global add containator
```

#### npm

```
npm install -g containator
```

## Usage

`containator create Awesome`

That will create a folder with the following file structure:

```
Awesome
    AwesomeContainer.js
    AwesomePresenter.js
    index.js
```

### What about CSS?

Containator can also create a CSS file for you and import it on the presenter component. You can use this by using:

`containator create Awesome --css`

That will create a folder with the following file structure:

```
Awesome
    AwesomeContainer.js
    AwesomePresenter.js
    Awesome.css
    index.js
```

### What if I use styled-components?

It's also supported, just run:

`containator create Awesome --styled`

And your presenter.js will have an import to styled ready to be used.

# How do the files look like?

I'm glad you asked!

#### index.js:

```
import AwesomeContainer from "./AwesomeContainer";
export default AwesomeContainer;
```

#### AwesomeContainer.js:

```
import React, { Component } from "react";
import PropTypes from "prop-types"
import AwesomePresenter from "./AwesomePresenter";

class AwesomeContainer extends Component{
  static propTypes = {}
  state = {}
  render(){
    return <AwesomePresenter {...this.state}/>
  }
}
export default AwesomeContainer;
```

#### AwesomePresenter.js without CSS:

```
import React from "react";
import PropTypes from "prop-types";

const BabyPresenter = ({}) => "Make something awesome!";

BabyPresenter.propTypes = {}

export default BabyPresenter;
```

#### AwesomePresenter.js with CSS:

```
import React from "react";
import PropTypes from "prop-types";
import "AwesomeStyles.css"

const BabyPresenter = ({}) => "Make something awesome!";

BabyPresenter.propTypes = {}

export default BabyPresenter;
```

#### AwesomePresenter.js with Styled Components:

```
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BabyPresenter = ({}) => "Make something awesome!";

BabyPresenter.propTypes = {}

export default BabyPresenter;
```

Stay cool, be happy and make beautiful stuff!
