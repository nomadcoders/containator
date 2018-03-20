#!/usr/bin/env node

const program = require("commander");

program
  .version("1.0.0")
  .description(
    "CLI tool that generates awesome components following the Container/Presenter pattern for React Projects."
  );

program
  .command("create <container>")
  .option("--styled", "Creates a component with Styled Components import")
  .option("--css", "Creates a component with a .css file imported")
  .alias("c")
  .description("Creates a component")
  .action((container, command) => console.log(container, command));

program.parse(process.argv);
