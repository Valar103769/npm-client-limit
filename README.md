

安装依赖时，强制约束只能使用指定的包管理器

## Usage
例如，强制指定使用 `pnpm`

`package.json` 中添加
```json
  "scripts": {
    "preinstall": "npx npm-client-limit pnpm",
  }
```
缺点: 只能限制安装所有依赖时, 例如  `npm install` ，安装某个依赖还是无法限制，例如 `npm install react`


