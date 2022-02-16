

安装依赖时，强制约束只能使用指定的包管理器

## Usage
例如，强制指定使用 `pnpm`

`package.json` 中添加
```json
  "scripts": {
    "prepare": "npx npm-client-limit pnpm"
  }
```

[prepare: 在两种情况前运行，一是npm publish命令前，二是不带参数的npm install命令](https://segmentfault.com/a/1190000008832423)

 如果你的项目需要使用 `npm publish`, 那么请不要使用该库


