# ArtStatic

ArtStatic是基于Grunt的扩展库,由前端思考( http://www.artcss.com )发起。<br>
提供一系列方法，帮助我们快速构建前端自动化工具。

## 使用方法

安装

	npm install -g artweb

初始化目录:

	ArtStatic -init ./myfolder

下载Plugin:

	cd ./myfolder
	npm install
	bower install

就会下载对应的插件到

	./myfolder/app/
	./myfolder/bower_components/
	./myfolder/bower_components/

举个栗子：

	我的项目目录：/mysite
	我的前端资源文件：/mysite/assets
	我想把veryless放到 /mysite/assets/lib/ 里面
	sudo npm install -g veryless
	cd /mysite/assets/
	# 初始化 目录
	autoweb -init lib
	# 下载Plugin css3
	cd lib
	veryless -use css3
