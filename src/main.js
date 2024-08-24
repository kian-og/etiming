import chalk from "chalk";
import { spawn } from "child_process";
import { performance } from "perf_hooks";

const etime = {
  run: (command, args = []) => {
    return new Promise((resolve, reject) => {
      if (!command) {
        console.log(chalk.redBright("Error: No command provided"));
        reject(new Error("Error: No command provided"));
        process.exit(1);
      }

      // Start timing
      const start = performance.now();

      // Execute command
      const childProcess = spawn(command, args, {
        stdio: "inherit",
        shell: true,
      });

      // Handle completion and timing
      childProcess.on("close", (code) => {
        const end = performance.now();
        const duration = (end - start) / 1000;
        resolve({
          duration: duration.toFixed(2),
          exitCode: code,
        });
      });

      // Handle errors
      childProcess.on("error", (err) => {
        console.log(chalk.redBright(err));
        process.exit(1);
      });
    });
  },
};

export default etime;
