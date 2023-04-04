### 👷🏻‍♂️ forge-fmt-respect-root

### ⬆️ Installation
```sh
forge install
```

### 🚀 Target
Format the files both with `forge fmt --root contracts contracts/src/Counter.sol`

### 🤌 Expectation
The `forge fmt` command to support both `--root` and `<PATH>` to the file that
needs to be formatted.

### 🧐 Result
```
$ forge fmt --root contracts contracts/src/Counter.sol
error: the argument '--root <PATH>' cannot be used with '[PATH]...'

Usage: forge fmt --root <PATH> [PATH]...

For more information, try '--help'.
```

### 🧶 Reproduction
Jump in `contracts` folder, and try running `forge fmt contracts/src/Counter.sol`.

The formatting configuration set in `foundry.toml` will be respected.

Now jump in the parent directory, `forge-fmt-respect-root` and run the same command.

Now the config is not respected since `forge` applies default formatting rules
if `foundry.toml` is not found`