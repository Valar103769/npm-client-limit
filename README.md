

安装依赖时，强制约束只能使用指定的包管理器

## Usage
例如，强制指定使用 `pnpm`

`package.json` 中添加
```json
  "scripts": {
    "preinstall": "npx npm-client-limit pnpm",
  }
```
缺点: 仅支持不带参数的install命令, 例如  `npm install` 


