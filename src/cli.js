#!/usr/bin/env node
import etime from "./main.js";
import chalk from "chalk";
import { program } from "commander";

program
  .name("etime")
  .description("Measure the time taken to execute a command")
  .version("1.1.1")
  .argument("<command>", "Command to execute")
  .argument("[args...]", "Arguments for the command")
  .action(async (command, args) => {
    try {
      const { duration, exitCode } = await etime.run(command, args);
      console.log(chalk.yellow(`Command executed in ${duration} seconds`));
      process.exit(exitCode);
    } catch (err) {
      console.log(chalk.redBright(`Error executing command: ${err.message}`));
      process.exit(1);
    }
  });

program
  .command("start")
  .description("Get started using Etiming")
  .action(() => {
    console.log(chalk.bgBlue("Welcome to the Etiming CLI Tool!"));
    console.log(
      "\nEtiming is a lightweight npm package designed to measure the duration of command execution. To get started, simply run:"
    );
    console.log(chalk.green("   npx etime <command>"));
    console.log(
      "\nAlternatively, you can install the package globally to use it across various projects on your system:"
    );
    console.log(chalk.green("    npm install -g etiming"));
    console.log(chalk.green("    etime <command>"));
    console.log("\nEtiming also supports API integration:");
    console.log(
      chalk.yellow(
        "    For further information, please visit the project's documentation page: https://www.npmjs.com/package/etiming \n    Or refer to the README.md file located in the package's root directory"
      )
    );
  });

program.parse(process.argv);
