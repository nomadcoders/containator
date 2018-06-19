#!/usr/bin/env node

const program = require("commander"),
  fs = require("fs"),
  path = require("path");

const FILE_ENCODING = "utf8";

const indexContent = name =>
  `import ${name}Container from "./${name}Container";
export default ${name}Container;`;

const containerContent = name =>
  `import React, { Component } from "react";
import PropTypes from "prop-types";
import ${name}Presenter from "./${name}Presenter";

class ${name}Container extends Component {
  static propTypes = {};
  state = {};
  render() {
    return <${name}Presenter {...this.state} />;
  }
}

export default ${name}Container;
`;

const presenterContent = (name, css = false, styled = false, scss = false) =>
  `import React from "react";
import PropTypes from "prop-types";
${css ? `import "./${name}Styles.css";\n` : ``}${
    styled ? `import styled from "styled-components";\n` : ``
  }${scss ? `import "./${name}Styles.scss";\n` : ``}
const ${name}Presenter = ({}) => "Make something awesome!";

${name}Presenter.propTypes = {};

export default ${name}Presenter;
`;

const createFile = (location, content, encoding = FILE_ENCODING) => {
  fs.writeFile(
    location,
    content,
    encoding,
    err => `Couldn't create the file because of ${err}`
  );
};

program
  .version("1.0.4")
  .description(
    "Generate customizable React Components following the Container/Presenter Pattern."
  );

program.parse(process.argv);

var NO_COMMAND_SPECIFIED = program.args.length === 0;

// Handle it however you like
if (NO_COMMAND_SPECIFIED) {
  // e.g. display usage
  program.help();
} else {
  let options;
  const nodeModulesPath = process.mainModule.paths
    .filter(path => path.includes("node_modules"))
    .shift();

  const optionsFilePath = path.join(
    nodeModulesPath,
    "../containerOptions.json"
  );
  console.log(optionsFilePath);
  /* fs.readFile(optionsFilePath, FILE_ENCODING, (err, data) => {
    if (err) {
      console.error(
        "Couldn't read the config file, make sure you create a containerOptions.json file on the root of your project."
      );
      return;
    } 
  });*/
}
