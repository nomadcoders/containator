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

const presenterContent = (name, css = false, styled = false) =>
  `import React from "react";
import PropTypes from "prop-types";
${css ? `import "./${name}Styles.css";\n` : ``}${
    styled ? `import styled from "styled-components";\n` : ``
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
  .action(() => program.help())
  .description(
    "CLI tool that generates awesome components following the Container/Presenter pattern for React Projects."
  );

program
  .command("create <container>")
  .option("--styled", "Creates a component with Styled Components import")
  .option("--css", "Creates a component with a .css file imported")
  .alias("c")
  .description("Creates a component")
  .action((container, command) => {
    /*
        First we gotta capitalize the first letter of the command
    */
    const containerName = `${container[0].toUpperCase()}${container.substring(
      1
    )}`;
    /*
        We check if the folder exists.
    */
    if (!fs.existsSync(containerName)) {
      /*
        If it doesn't we create it.
      */
      fs.mkdirSync(containerName);
      /*
        We create the index file
      */
      createFile(`${containerName}/index.js`, indexContent(containerName));
      /*
        Then the container file
      */
      createFile(
        `${containerName}/${containerName}Container.js`,
        containerContent(containerName)
      );
      /*
       We check if the user selected any of the available Styling options
      */
      if (command.styled || command.css) {
        if (command.styled) {
          /*
            If the user chose styled then we create a file
            that has an import to styled components
          */
          createFile(
            `${containerName}/${containerName}Presenter.js`,
            presenterContent(containerName, false, true)
          );
          console.log(
            `✨ ${containerName} Component created with Styled-Components 💅 (great taste btw)`
          );
        } else if (command.css) {
          /*
            If the user chose css then we create a file
            that has an import to a css file and we 
            create an empty css file.
          */
          createFile(
            `${containerName}/${containerName}Presenter.js`,
            presenterContent(containerName, true, false)
          );
          createFile(`${containerName}/${containerName}Styles.css`, "");
          console.log(`✨ ${containerName} Component and CSS file created`);
        }
      } else {
        /*
          If the user didn't select any of them we just
          create a file with no imports
        */
        createFile(
          `${containerName}/${containerName}Presenter.js`,
          presenterContent(containerName)
        );
        console.log(`✨ ${containerName} Component created`);
      }
    } else {
      /*
        If it does, we refuse to do anything
      */
      console.log("Directory already exists, I refuse to delete it 😐");
    }
  });

program.parse(process.argv);

var NO_COMMAND_SPECIFIED = program.args.length === 0;

// Handle it however you like
if (NO_COMMAND_SPECIFIED) {
  // e.g. display usage
  program.help();
}
