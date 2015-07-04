Share.js
----------
[![Issues](https://img.shields.io/github/issues/lichunqiang/yii2-xmlparser.svg?style=flat-square)](https://github.com/lichunqiang/yii2-xmlparser/issues)

分享到微博、微信、QQ、豆瓣和人人等社交网站, 基于jQuery.

## 示例

[在线Demo](http://lichunqiang.github.io/share.js)

## 使用

Dom结构：

```
<ul data-url="xxx" data-message="some message" data-summary="summary" data-picture="xxx">
	<li data-network="weibo">微博</li>
	...
</ul>
```

初始化：

```
$('ul').share();
```

### API

* `data-url` 分享的当前页面地址或者其他地址
* `data-message` 分享的标题
* `data-summary` 分享内容，「只对QQ空间、豆瓣、和人人有效」
* `data-picture` 分享的图像

## License

![MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)
