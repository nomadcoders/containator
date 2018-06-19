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
// import PropTypes from "prop-types";
import ${name}Presenter from "./${name}Presenter";

class ${name}Container extends Component {
  // static propTypes = {};
  state = {};
  render() {
    return <${name}Presenter {...this.state} />;
  }
}

export default ${name}Container;
`;

const presenterContent = (name, styles) =>
  `// import React from "react";
// import PropTypes from "prop-types";
${styles === "css" ? `import "./${name}Styles.css";\n` : ``}${
    styles === "styled" ? `// import styled from "styled-components";\n` : ``
  }
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
  const nodeModulesPath = process.mainModule.paths
    .filter(path => path.includes("node_modules"))
    .shift();

  const optionsFilePath = path.join(
    nodeModulesPath,
    "../containerOptions.json"
  );

  fs.readFile(optionsFilePath, FILE_ENCODING, (err, data) => {
    if (err || !data) {
      console.error(
        "Couldn't read the config file, make sure you create a containerOptions.json file on the root of your project."
      );
      return;
    }
    if (data) {
      jsonOptions = JSON.parse(data);
      const styles = jsonOptions.styles || "css";
      const typescript = jsonOptions.typescript || false;
      const interfaces = jsonOptions.interfaces || false;
      const componentName = program.args[0];

      const containerName = `${componentName[0].toUpperCase()}${componentName.substring(
        1
      )}`;

      if (!fs.existsSync(containerName)) {
        // Folder
        fs.mkdirSync(containerName);
        if (typescript) {
        } else {
          // Index file
          createFile(`${containerName}/index.js`, indexContent(containerName));
          // Container file
          createFile(
            `${containerName}/${containerName}Container.js`,
            containerContent(containerName)
          );
          // Index file
          createFile(
            `${containerName}/${containerName}Presenter.js`,
            presenterContent(componentName, styles)
          );
          if (styles === "css") {
            createFile(`${containerName}/${containerName}Styles.css`, "");
          }
        }
      } else {
        console.error(
          "Component with that name already exists. Refusing to proceed."
        );
      }
    }
  });
}
