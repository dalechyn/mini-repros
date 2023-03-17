### 👷🏻‍♂️ compile-wagmi-cli-lib

### ⬆️ Installation
```sh
npm i
```

### 🚀 Target
Compile the generated `wagmi.hooks.ts` with `declaration: true` to be able to
use the generated hooks along with declaration files in any other project.

### 🪄 Build
```sh
npm run build
```

### 😢 Problem

The build script (`npm run build`) fails with the next error:
```
wagmi.hooks.ts:102:17 - error TS4058: Return type of exported function has or is using name 'CallOverrides' from external module "/Users/someone/somewhere/node_modules/@wagmi/core/dist/contracts-b112c24e" but cannot be named.

102 export function useCounter(
                    ~~~~~~~~~~

wagmi.hooks.ts:102:17 - error TS4058: Return type of exported function has or is using name 'EventListener' from external module "/Users/someone/somewhere/node_modules/@wagmi/core/dist/index" but cannot be named.

102 export function useCounter(
                    ~~~~~~~~~~

wagmi.hooks.ts:102:17 - error TS4058: Return type of exported function has or is using name 'Overrides' from external module "/Users/someone/somewhere/node_modules/@wagmi/core/dist/contracts-b112c24e" but cannot be named.

102 export function useCounter(
                    ~~~~~~~~~~

wagmi.hooks.ts:206:17 - error TS4058: Return type of exported function has or is using name 'Overrides' from external module "/Users/someone/somewhere/node_modules/@wagmi/core/dist/contracts-b112c24e" but cannot be named.

206 export function useCounterIncrement<
                    ~~~~~~~~~~~~~~~~~~~

wagmi.hooks.ts:240:17 - error TS4058: Return type of exported function has or is using name 'Overrides' from external module "/Users/someone/somewhere/node_modules/@wagmi/core/dist/contracts-b112c24e" but cannot be named.

240 export function useCounterSetNumber<
                    ~~~~~~~~~~~~~~~~~~~


Found 5 errors in the same file, starting at: wagmi.hooks.ts:102
```
