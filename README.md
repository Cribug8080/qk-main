使用qiankun的微前端的主仓库
子项目地址：
[react](https://github.com/Cribug8080/qk-react)
[vue](https://github.com/Cribug8080/qk-vue3)

## 部署

[ssh免密登陆](https://blog.csdn.net/jeikerxiao/article/details/84105529)

服务器经常github拉不下代码，可以切换仓库使用[gitee](https://gitee.com/)，同步仓库的[方法](https://help.gitee.com/questions/GitHub%E4%BB%93%E5%BA%93%E5%BF%AB%E9%80%9F%E5%AF%BC%E5%85%A5Gitee%E5%8F%8A%E5%90%8C%E6%AD%A5%E6%9B%B4%E6%96%B0)

同步两个仓库的代码，使用`qkpush`推送代码。
```bash
# 编辑文件.zshrc或者.bashrc `alias qkpush="git push;git push github;"`
git remote add origin [gitee地址]
git remote add github [github地址]
```

### 打包代码
在服务器安装git、nvm、node、yarn
clone下来项目
```bash
git clone https://github.com/Cribug8080/qk-main.git
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


子应用

配置跨域()
```conf
add_header Access-Control-Allow-Origin *;
add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';

if ($request_method = 'OPTIONS') {
    return 204;
}

root /
```






