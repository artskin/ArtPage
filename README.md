# ArtPage

ArtPage是基于Grunt的扩展库,由前端思考( http://www.artcss.com )发起。<br>
提供一系列方法，帮助我们快速构建前端自动化工具。

## 使用方法

### 安装

	npm install -g ArtPage

### 初始化目录:

	ArtPage -init ./myfolder

### 下载Plugin:

	cd ./myfolder
	npm install
	bower install

就会下载对应的插件到

	./myfolder/app/
	./myfolder/bower_components/
	./myfolder/bower_components/

### 举个栗子：

	我的项目目录：/mysite
	我的前端资源文件：/mysite/assets
	我想把veryless放到 /mysite/assets/lib/ 里面
	sudo npm install -g veryless
	cd /mysite/assets/
	# 初始化 目录
	ArtPage -init lib
	# 下载Plugin css3
	cd lib

### Demo

scss:
```scss
$blue: #3bbfce;
$margin: 16px;
$font-md:12px;

.content_navigation {
  border-color: $blue;
  color: darken($blue, 10%);
}

.border {
  padding: $margin / 2;
  margin: $margin / 2;
  border-color: $blue;
  font-size:$font-md;
}
```
javascript:
```javascript
var aa = document.getElementById("aa");
aa.innerHTML = "hello ";
```

