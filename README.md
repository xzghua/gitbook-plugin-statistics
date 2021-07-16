# Gitbook 数据统计插件

[![npm:download](https://img.shields.io/npm/dt/gitbook-plugin-statistics)](https://www.npmjs.com/package/gitbook-plugin-statistics)


习惯用cnzz的数据统计,但是目前没找到..  一想有人也用百度的.  那么就模仿一下,把两个都加一下试试


1. 如果你添加了百度的参数(token),那么将会用百度统计
2. 如果你添加了cnzz的参数(cnzz_id),那么将会用cnzz统计
3. 如果你添加了google分析的参数(google_id),那么将会用谷歌分析
3. 如果你三者都添加了,那么三个统计就都会用到

## Usage

```json
"plugins": [
        "statistics"
    ],
    "pluginsConfig": {
        "statistics": {
              "bd_token": "百度token",
              "cnzz_id": xxxxxxx
              "google_id": "google analytics 追踪ID"
            }
    }
```




> 参考了 [https://github.com/huisman6/gitbook-plugin-baidu-tongji](https://github.com/huisman6/gitbook-plugin-baidu-tongji)