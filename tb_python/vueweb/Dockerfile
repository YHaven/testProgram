# 使用Nginx
FROM nginx  
# 作者
MAINTAINER DAFENG                     
# 删除nginx 默认配置
RUN rm /etc/nginx/conf.d/default.conf
# 添加我们自己的配置 default.conf 在下面
ADD default.conf /etc/nginx/conf.d/  

COPY dist/  /usr/share/nginx/html/