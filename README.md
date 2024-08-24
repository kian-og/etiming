## Etiming

Etiming is a lightweight and straightforward package designed to help you measure the execution time of commands with ease.

## Installation

Install Etiming via npm with the following command:

```bash
npm install etiming
```

## CLI Usage

Etiming includes a simple CLI tool that allows you to measure the time taken to execute a command directly in your terminal.

### Basic Usage

To use Etiming from the command line, run:

```bash
npx etime <command>
```

For example:

```bash
npx etime echo 10
```

Output:

```bash
10
Command executed in 0.02 seconds
```

### Chaining Commands

Etiming supports chaining multiple commands recursively:

```bash
npx etime npx etime npx etime npx etime echo 10
```

Output:

```bash
10
Command executed in 0.02 seconds
Command executed in 2.33 seconds
Command executed in 4.59 seconds
Command executed in 6.78 seconds
```

### Global Installation

For more convenient access, you can install Etiming globally:

```bash
npm install -g etiming
```

Once installed globally, you can use the etime command independently across different projects:

```bash
etime echo 10
```

Output:

```bash
10
Command executed in 0.02 seconds
```

## API Usage

Etiming is also usable within Node.js as a programmatic API, providing the same functionality as the CLI tool.

### Example

```js
import etime from "etiming";

etime
  .run("echo 3")
  .then(({ duration, exitCode }) => {
    console.log(
      `Command executed in ${duration} seconds with exit code ${exitCode}`
    );
  })
  .catch((err) => {
    console.error(`Error: ${err.message}`);
  });
```
