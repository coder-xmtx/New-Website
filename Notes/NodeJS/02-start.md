# Node.js start

## 1. 运行

在 Node 环境下运行 JS 文件

```bash
node xxx.js
```

## 2. 注意事项

1. Node.js 中不能使用 BOM 和 DOM 的 API，可以使用 console 和定时器 API
2. Node.js 中的顶级对象为 global，也可以用 globalThis 访问顶级对象（推荐使用 globalThis）
