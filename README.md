# Gitbook 数据统计插件

习惯用cnzz的数据统计,但是目前没找到..  一想有人也用百度的.  那么就模仿一下,把两个都加一下试试


1. 如果你添加了百度的参数(token),那么将会用百度统计
2. 如果你添加了cnzz的参数(cnzz_id),那么将会用cnzz统计
3. 如果你两者都添加了,那么两个统计就都会用到

## Usage
```
"plugins": [
        "statistics"
    ],
    "pluginsConfig": {
        "statistics": {
              "bd_token": "百度token",
              "cnzz_id": xxxxxxx
            }
    }
```




> 参考了 [https://github.com/huisman6/gitbook-plugin-baidu-tongji](https://github.com/huisman6/gitbook-plugin-baidu-tongji)