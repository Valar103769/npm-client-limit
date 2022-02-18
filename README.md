

安装依赖时，强制约束只能使用指定的包管理器

## Usage
例如，强制指定使用 `pnpm`

`package.json` 中添加
```json
  "scripts": {
    "preinstall": "npx npm-client-limit pnpm",
  }
```

`npm install` 安装所有依赖时, 可被限制

缺点：安装某个依赖时，无法限制，例如 `npm install react`


