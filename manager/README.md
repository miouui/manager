<<<<<<< HEAD
# study

#### 介绍
学习用

#### 软件架构
软件架构说明


#### 安装教程

1.  xxxx
2.  xxxx
3.  xxxx

#### 使用说明

1.  xxxx
2.  xxxx
3.  xxxx

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
=======
# vue-manage-system

<a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-3.1.2-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/vuejs/pinia">
    <img src="https://img.shields.io/badge/pinia-2.0.14-brightgreen.svg" alt="pinia">
  </a>
  <a href="https://github.com/lin-xin/vue-manage-system/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
  <a href="https://github.com/lin-xin/vue-manage-system/releases">
    <img src="https://img.shields.io/github/release/lin-xin/vue-manage-system.svg" alt="GitHub release">
  </a>
  <a href="https://lin-xin.gitee.io/example/work/#/donate">
    <img src="https://img.shields.io/badge/%24-donate-ff69b4.svg" alt="donate">
  </a>

基于 Vue3 + pinia + Element Plus 的后台管理系统解决方案。[线上地址](https://lin-xin.gitee.io/example/work/)

> Vue2 版本请看 [tag-V4.2.0](https://github.com/lin-xin/vue-manage-system/tree/V4.2.0)，带后台功能请看 [tsrpc-manage-system](https://github.com/lin-xin/tsrpc-manage-system)

[English document](https://github.com/lin-xin/manage-system/blob/master/README_EN.md)

## 赞助商

### 好问

[<img src="https://static.bestqa.net/logo/bestqa_haowen.png" width="220" height="100">](https://www.bestqa.net/home/index.html)

专业问卷服务，一对一客服，按需定制 

## 支持作者

请作者喝杯咖啡吧！(微信号：linxin_20)

![微信扫一扫](https://lin-xin.gitee.io/images/weixin.jpg)

## 前言

该方案作为一套多功能的后台框架模板，适用于绝大部分的后台管理系统开发。基于 Vue3 + pinia + typescript，引用 Element Plus 组件库，方便开发。实现逻辑简单，适合外包项目，快速交付。

## 功能

-   [x] Element Plus
-   [x] vite 3
-   [x] pinia
-   [x] typescript
-   [x] 登录/注销
-   [x] Dashboard
-   [x] 表格
-   [x] Tab 选项卡
-   [x] 表单
-   [x] 图表 :bar_chart:
-   [x] 富文本/markdown编辑器
-   [x] 图片拖拽/裁剪上传
-   [x] 权限管理
-   [x] 三级菜单
-   [x] 自定义图标


## 安装步骤
> 因为使用vite3，node版本需要 14.18+

```
git clone https://github.com/lin-xin/vue-manage-system.git      // 把模板下载到本地
cd vue-manage-system    // 进入模板目录
npm install         // 安装项目依赖，等待安装完成之后，安装失败可用 cnpm 或 yarn

// 运行
npm run dev

// 执行构建命令，生成的dist文件夹放在服务器下即可访问
npm run build
```

## 组件使用说明与演示

### vue-schart

vue.js 封装 sChart.js 的图表组件。访问地址：[vue-schart](https://github.com/lin-xin/vue-schart#/) 

<p><a href="https://www.npmjs.com/package/vue-schart"><img src="https://img.shields.io/npm/dm/vue-schart.svg" alt="Downloads"></a></p>

```html
<template>
    <div>
        <schart class="wrapper" canvasId="myCanvas" :options="options"></schart>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Schart from "vue-schart"; // 导入Schart组件
const options = ref({
    type: "bar",
    title: {
        text: "最近一周各品类销售图",
    },
    labels: ["周一", "周二", "周三", "周四", "周五"],
    datasets: [
        {
            label: "家电",
            data: [234, 278, 270, 190, 230],
        },
        {
            label: "百货",
            data: [164, 178, 190, 135, 160],
        },
        {
            label: "食品",
            data: [144, 198, 150, 235, 120],
        },
    ],
})
</script>
<style>
    .wrapper {
        width: 7rem;
        height: 5rem;
    }
</style>
```

## 项目截图

### 登录

![Image text](https://github.com/lin-xin/manage-system/raw/master/screenshots/wms3.png)

### 首页

![Image text](https://github.com/lin-xin/manage-system/raw/master/screenshots/wms1.png)

## License

[MIT](https://github.com/lin-xin/vue-manage-system/blob/master/LICENSE)
>>>>>>> b2567cd (manager)
