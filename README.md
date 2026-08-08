# 鳞境｜中国蛇类安全科普图鉴

一个以中国省级地图为入口的纯前端蛇类科普网站。可以按蛇种查看省级分布，也可以点击省份浏览当前图鉴收录的蛇类，并阅读外观、易混淆种、毒性机制、中毒表现和医院常查指标。

在线访问：[snake-atlas-china.sebastianklx6.chatgpt.site](https://snake-atlas-china.sebastianklx6.chatgpt.site)

## 功能

- 中国省级行政区交互地图，支持缩放、拖动和键盘选择
- 47 种中国常见蛇类档案
- 按蛇种与按省份双向索引
- 神经毒、血液/细胞毒、混合毒、肌毒、后沟牙与无毒分类
- 外观特征、易混淆种和远距离辨识提示
- 中毒症状、临床提示及医院常查指标
- 136 张本地 AVIF/WebP 图片，提供作者、许可和原始来源
- 响应式布局与图片懒加载

## 重要说明

本项目用于安全科普，不用于现场物种鉴定、捕捉指导或医疗诊断。省级分布仍是持续校订中的演示数据，不代表完整调查结果，也不能据此断言某地不存在某种蛇。

疑似毒蛇咬伤时，不要等待网页鉴定或自行解读化验结果，应减少活动并立即联系 120 或前往具备蛇伤救治能力的医院。

## 本地运行

需要 Node.js `>=22.13.0`。

```bash
npm install
npm run dev
```

浏览器访问 `http://localhost:3000/`。

生产构建：

```bash
npm run build
```

## 项目结构

```text
app/
  page.tsx          页面交互与内容布局
  china-map.tsx     中国省级 GeoJSON 地图
  snake-data.ts     蛇种、分布、症状与医疗指标数据
  snake-images.ts   图片来源与许可元数据
  globals.css       页面样式
public/snakes/      本地 AVIF/WebP 图片
```

## 资料与图片

医疗科普主要参考国家卫健委《常见动物致伤诊疗规范（2021年版）》和 WHO《Guidelines for the management of snakebites, 2nd edition》。图片主要来自 iNaturalist、Wikimedia Commons 与台湾生物多样性网络。

每张图片的作者、来源和许可证见 [IMAGE_LICENSES.md](IMAGE_LICENSES.md)。地图数据来自 `china-map-geojson`，该软件包采用 ISC 许可证。

## 参与贡献

欢迎提交分布资料勘误、物种分类更新、可靠图片来源和无障碍改进。提交前请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)，涉及分布或医疗信息的修改必须附可核验来源。

## 许可证

源代码采用 [MIT License](LICENSE)。`public/snakes/` 中的第三方图片不适用 MIT License，仍分别受 [IMAGE_LICENSES.md](IMAGE_LICENSES.md) 所列许可证约束。
