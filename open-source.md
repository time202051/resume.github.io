# 开源项目

持续贡献开源社区，分享技术成果，提升开发效率。

## ol-base-components

**文档**: [https://time202051.github.io/baseCom.github.io/](https://time202051.github.io/baseCom.github.io/)

### 项目简介

无需联调的 CRUD 页面基于 Element-UI 的企业级组件库。交互式命令行方式自动生成完整页面，无需手动联调，几秒完成页面。

![ol-base-components](/assets/olbaseComponentsGw.png)

### 核心特性

- **极速集成**: 简单易用，支持 Vue2，开箱即用，极大提升开发效率
- **npx 脚本一键生成**: 提供 npx 脚本，自动生成 API 接口和模块文件
- **VSCode 插件生成代码**: 通过 VSCode 插件直接生成联调好的 Vue 页面，包含完整的增删改查功能
- **丰富的组件**: 提供表格、表单、弹窗、搜索框等常用组件，API 友好，文档详细
- **多级表头 & Swagger 支持**: 支持多级表头、动态列显示隐藏、自动从 Swagger 生成表头字段
- **灵活的搜索框组件**: 支持多种输入类型（文本、下拉、日期、树形选择等），可与表格无缝联动

### 使用方式

```bash
npm install ol-base-components
```

---

## VSCode 插件

### 1. vue-page-generator

Vue 页面生成器，快速生成 Vue 页面模板，包含常用配置和结构，加速项目开发。
![vue-page-generator](/assets/vue-page-generator.png)

### 2. auto-columns

自动生成表格列配置，根据数据结构智能生成列定义，减少手动编写列配置的工作量。

![auto-columns](/assets/autoColumns.png)

### 3. copy encryption cracking

密破禁止复制的工具插件。

## element-plus-leaf

**GitHub**: [https://github.com/time202051/element-plus-leaf](https://github.com/time202051/element-plus-leaf)

### 项目简介

Vue3 项目二次封装组件库，可以通过 `npm i element-plus-leaf` 使用二次封装的 ef-table、ef-form 组件。

### 核心特性

- **ef-table**: 基于 Element Plus Table 的二次封装，简化表格开发
- **ef-form**: 基于 Element Plus Form 的二次封装，简化表单开发
- **开箱即用**: 继承所有 Element Plus 的属性和方法
- **类型安全**: 完整的 TypeScript 类型支持

---

## paginationTable

**GitHub**: [https://github.com/time202051/paginationTable/tree/master](https://github.com/time202051/paginationTable/tree/master)

### 项目简介

Vue2 项目二次封装的 table 和 form 组件，以及 paginationTable.js 实现分页接口。

### 核心特性

- **分页管理**: 支持防抖、节流、轮询、loading、错误重试、自动请求/手动请求
- **回调支持**: onSuccess、onBefore、onError、onRes 等回调
- **Mock 数据**: 提供 mockRes 方便后端暂未开发完接口时候的假数据开发
- **组件封装**: 二次封装 table 和 form 组件，提升开发效率

---
