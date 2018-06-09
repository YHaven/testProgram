Linux

1.安装python   默认已经安装

2.安装setuptools

3.安装pip
	wget https://....
	tar zxf pip.tar.gz
	cd pip
	python setup.py install
	pip --version


4.用pip安装virtualenv
	pip install virtualenv
	alias pget=pip install -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com
	pget virtualenv

5.vitualenv 使用
	virtualenv venv
	source venv/bin/activate
	deactivate
6.用pip安装tomado
	pip freeze
	pget tornado
	pip freeze



windows

1.安装python2.7
   https://www.python.org

2.安装virtualenv虚拟化环境
	#pip install virtualenv
	#pip install -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com virtualenv

3.virtualenv使用
	创建虚拟环境 virtualenv               virtualenv venv
	激活虚拟环境 venv\Scripts\activate
	退出虚拟环境 deactivate

4.使用pip安装tomado
	#pip freeze
	#pip install -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com tornado 
	#pip freeze





	###### 修改config.py，配置数据库、redis、日志等
###### 创建数据库或更新表
	python main.py upgradedb
###### 启动server
	python main.py --master=true --port=8888



