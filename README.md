使用qiankun的微前端的主仓库
子项目地址：
[react](https://github.com/Cribug8080/qk-react)
[vue](https://github.com/Cribug8080/qk-vue3)

## 部署
### 打包代码
在服务器安装git、nvm、node、yarn
clone下来项目
```bash
git clone https://github.com/Cribug8080/qk-main.git # 如果失败就curl -O https://github.com/Cribug8080/qk-main/archive/refs/heads/main.zip
yarn
yarn build
```


### [安装nginx](https://www.runoob.com/linux/nginx-install-setup.html)
```bash
yum install nginx
# redhat package manager [管理套件](https://www.runoob.com/linux/linux-comm-rpm.html)
rpm -qa | grep -i nginx # 查看安装包
rpm -ql nginx-1.21.5-3.hce2.x86_64 # 查看路径
```

### nginx配置 /etc/nginx/nginx.conf
启动`./nginx`,访问80端口可以看到Welcome to nginx on openEuler!
配置 `/etc/nginx/nginx.conf`
重启：`nginx -s reload`
[spa nginx 配置](https://juejin.cn/post/7003257678537424932)

```conf
server {
        listen 8888; // 监听的端口号
        server_name localhost;
        root ../[项目地址]/dist; // 前端包地址（这里基于解压后的nginx.exe所在地址使用的相对路径）
        location / {
            index /index.html;
            try_files $uri $uri/ /index.html; // spa应用的关键配置
        }
        location ^~ /api/ {
            # proxy_pass [接口代理地址]; // 接口代理地址
        }
    }
```

查看错误日志：`/var/log/nginx/error.log`
可能需要修改`user root;`






