# 天气仪表盘 · Weather Dashboard

一个基于 Vue 3 的简洁天气仪表盘，纯前端项目，无需后端。

---

## 快速开始

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev

# 3. 在浏览器中打开终端显示的地址（默认 http://localhost:5173）
```

构建生产版本：

```bash
npm run build
npm run preview
```

---

## 功能

- **当前天气**：温度、天气描述、湿度、风速、体感温度
- **7 天预报**：横向滚动卡片，每天显示天气图标、描述、最高/最低温
- **暗色模式**：自动跟随系统主题切换，CSS 变量驱动双主题

---

## 数据来源

使用 [Open-Meteo](https://open-meteo.com/) 免费天气 API，无需 API Key。

默认城市：**北京**（经纬度 39.9042, 116.4074）

如需切换城市，修改 `src/App.vue` 中的 `BEIJING` 常量即可。

---

## 技术栈

| 技术 | 说明 |
| --- | --- |
| Vue 3 | Composition API + `<script setup>` |
| Vite | 构建工具 & 开发服务器 |
| axios | HTTP 请求库，调用 Open-Meteo API |
| CSS Variables | 亮/暗双主题，自动跟随系统 `prefers-color-scheme` |

无路由、无状态管理库，保持最小依赖。

---

## 目录结构

```
work/
├── src/
│   ├── api/
│   │   └── weather.js        # Open-Meteo API 封装（getCurrentWeather、getForecast、getWeatherDescription）
│   ├── assets/               # 静态资源目录
│   ├── components/
│   │   ├── CurrentWeather.vue  # 当前天气大卡片组件
│   │   └── ForecastCard.vue    # 单天预报卡片组件
│   ├── utils/
│   │   ├── date.js           # 日期工具（formatDate、getDayName）
│   │   └── weather.js        # 天气图标工具（getWeatherIcon）
│   ├── App.vue               # 主应用组件（仪表盘布局 + 数据请求）
│   ├── main.js               # 入口文件
│   └── style.css             # 全局样式 & CSS 变量（双主题）
├── test/
│   ├── runner.js             # 手写轻量测试框架（describe/it/expect）
│   ├── weather.test.js       # getWeatherDescription 测试
│   ├── utils.test.js         # formatDate / getDayName / getWeatherIcon 测试
│   └── run.js                # 测试入口
├── index.html
├── package.json
└── vite.config.js
```

---

## 测试

```bash
npm test
```

共 **44 个测试用例**，全部在 Node 环境运行，无需浏览器。

| 模块 | 用例数 | 覆盖内容 |
| --- | --- | --- |
| `getWeatherDescription` | 18 | 晴(0)、大部晴朗(1)、多云(2)、阴天(3)、雾(45/48)、雨(61/63/65)、雪(71/73/75)、雷暴(95/96/99)、未知边界码(-1/100/undefined) |
| `formatDate` | 4 | 不同月份日期格式化、返回值类型 |
| `getDayName` | 4 | 周一到周日映射、返回值校验 |
| `getWeatherIcon` | 18 | 所有天气码分支（晴/多云/阴/雾/毛毛雨/雨/雪/阵雨/雷暴）+ 边界默认值 |

---

## 纯前端说明

本项目是纯前端应用：

- 天气数据直接从浏览器请求 Open-Meteo API
- 无需搭建或部署任何后端服务
- 无用户登录、无数据库、无服务器端逻辑
