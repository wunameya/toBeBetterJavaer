import{_ as n,c as e,o as i,e as a}from"./app-ChTk1xp_.js";const s={},t=a(`<p>大家好，我是二哥呀。最近在搭建<a href="https://paicoding.com/" target="_blank" rel="noopener noreferrer">技术派</a>网站，就不可避免地要用到 Nginx，索性就出一期 Nginx 的入门教程，希望也可以帮助到大家~😁</p><p>作为开发者，相信大家都知道 Nginx 的重要性。Nginx 是一个高性能的 HTTP 和反向代理 Web 服务器，由俄罗斯的伊戈尔·赛索耶夫开发，第一个版本发布于 2004 年 10 月 4 日。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Nginx 的特点是：</p><ul><li>内存占用少</li><li>并发能力强（可支持大约 50000 个并发连接）</li><li>配置超简洁</li><li>bug 非常少</li><li>安装超简单</li><li>服务特别稳（几个月也不需要重启）</li></ul><p>基于这些特点，越来越多的网站开始使用 Nginx。于是，掌握 Nginx 就变成了开发者的一项必不可少的技能。</p><h2 id="一、nginx-的作用" tabindex="-1"><a class="header-anchor" href="#一、nginx-的作用"><span>一、Nginx 的作用</span></a></h2><p><strong>反向代理</strong>是 Nginx 作为 Web 服务器最常用的功能之一。什么是反向代理呢？很多初学者在第一次遇到这个名词的时候总免不了出现很多问号。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那要想搞明白什么是反向代理，就必须得搞明白什么是正向代理。</p><p>举个例子，小二的浏览器是无法直接访问谷哥的，但香港的代理服务器是可以访问谷哥的，于是小二访问了香港的代理服务器，也就间接地访问了谷哥。那这台代理服务器也就是<strong>正向代理</strong>。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>总结一句就是，<strong>正向代理是代理客户端的</strong>，让你能正常访问目的服务器。</p><p>与之相反，<strong>反向代理是代理服务器的</strong>，让大量的请求均衡地访问到某一台服务器上。</p><p>举个例子，10 万个小二同时在访问 <a href="https://www.itwanger.com/" target="_blank" rel="noopener noreferrer">itwanger.com</a>， 如果只有一台服务器的话，很容易就瘫痪了，于是高并发的情况下会有很多台服务器（假如 10 台吧）来接这个活，那怎么让 10 万个小二访问到这 10 台服务器呢？</p><p>这就需要一个反向代理服务器了，反向代理服务器让 1 万个小二访问服务器 A，1 万个小二访问服务器 B，1 个小二访问服务器 C，这样的话，每台服务器的压力就相应减小了，是不是很 nice？</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-04.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那问题来了。每台服务器的能力可能不同，比如说服务器 A 的内存比较大一点，有 100 个 G；服务器 B 的内存小一点，有 10 个 G；服务器 C 的内存更小一点，只有 1 个 G。怎么才能让没台服务器承担起它能力范围内的访问呢？</p><p><strong>Nginx 内置了轮询和加权轮询来达到负载均衡的目的</strong>。服务器 A 牛逼就把它的权重加大一点，让 5 万个小二访问它；服务器 B 弱一点，权重就再小一点，让 2 万个小二访问它；服务器 C 更弱，权重就最小，让 1 万个小二访问它。</p><p>除此之外，Nginx 还有一个很牛逼的功能是<strong>动静分离</strong>。</p><p>在我们的软件开发中，有些请求是需要后台处理的；有些请求是不需要后台处理的，比如说 css、js 这些文件请求，这些不需要经过后台处理的文件就叫静态文件。</p><p>我们可以根据一些规则，把动态资源和静态资源分开，然后通过 Nginx 把请求分开，静态资源的请求就不需要经过 Web 服务器处理了，从而提高整体上的资源的响应速度。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-05.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="二、nginx-的安装" tabindex="-1"><a class="header-anchor" href="#二、nginx-的安装"><span>二、Nginx 的安装</span></a></h2><p>针对不同的操作系统，Nginx 的安装各不相同。</p><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h3><p>Windows 可以直接到官网下载 zip 绿色安装包，解压后就可以了。</p><blockquote><p><a href="http://nginx.org/en/download.html" target="_blank" rel="noopener noreferrer">http://nginx.org/en/download.html</a></p></blockquote><h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos"><span>macOS</span></a></h3><p>macOS 可以通过 Homebrew 来安装，之前没有安装的话可以戳<a href="https://javabetter.cn/gongju/brew.html" target="_blank" rel="noopener noreferrer">这个链接</a>，终端的话，建议大家使用 <a href="https://javabetter.cn/gongju/warp.html" target="_blank" rel="noopener noreferrer">wrap</a>，有 AI 提示，非常方便。</p><p>安装命令如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>brew install nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>大体的过程就是，你问一下 wrap，我怎么安装 Nginx 啊，它就会告诉你完整的安装和启动步骤，并且会告诉你 Nginx 的配置文件在哪里。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/nginx-20231209205522.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果端口不是 80 的话，可以在配置文件里进行修改，比如说我改成了 8088。</p><p>那安装成功后就可以通过 <code>http://localhost:8088</code> 来访问了。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/nginx-20231209205810.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h3><p>Linux 的安装方式有很多种，每一家的服务器厂商都会有 doc 文档。比如说<a href="https://curl.qcloud.com/gIsvte7E" target="_blank" rel="noopener noreferrer">腾讯云</a>的你搜一下 Nginx 关键字就可以看到了。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/nginx-20231209210202.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我这里以 macOS 环境为例，来演示一下。</p><p>第一步，通过 <code>brew info nginx</code> 命令查看 Nginx 是否安装。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-07.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>第二步，通过 <code>brew install nginx</code> 命令安装 Nginx。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-08.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>从以上信息可以得出：</p><ul><li>根目录是 <code>/usr/local/var/www</code></li><li>配置文件是 <code>/usr/local/etc/nginx/nginx.conf</code></li><li>默认端口是 8080</li></ul><p>第三步，通过 <code>nginx</code> 命令启动 Nginx。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-09.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>第四步，在浏览器地址栏通过 <code>localhost:8080</code> 访问，可以看到以下欢迎页面。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="三、nginx-常用命令" tabindex="-1"><a class="header-anchor" href="#三、nginx-常用命令"><span>三、Nginx 常用命令</span></a></h2><p>通常来说，Nginx 一旦启动后，我们是很少让它退出的，使用最多的就是 reload 命令。当我们修改了配置文件，是需要执行一次 reload 命令让 Nginx 生效的。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>nginx  启动</span></span>
<span class="line"><span>nginx -s stop  停止</span></span>
<span class="line"><span>nginx -s quit  安全退出</span></span>
<span class="line"><span>nginx -s reload  重新加载配置文件</span></span>
<span class="line"><span>nginx -t  检查配置文件是否正确</span></span>
<span class="line"><span>ps aux|grep nginx  查看nginx进程</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重点强调一下 <code>nginx -t</code> 命令，这个命令可以检查配置文件是否正确，如果正确的话，会输出以下信息。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>nginx: the configuration file /usr/local/etc/nginx/nginx.conf syntax is ok</span></span>
<span class="line"><span>nginx: configuration file /usr/local/etc/nginx/nginx.conf test is successful</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>假如你忘记配置文件的位置，那这个命令就实在是太有用了。</p><p>另外，Nginx 的 reload 对用户是无感的，这一点我觉得很牛逼，你重启了 Nginx，但用户就仿佛没有感觉，还在继续访问网站，这就是 Nginx 的优势。</p><h2 id="四、nginx-的配置" tabindex="-1"><a class="header-anchor" href="#四、nginx-的配置"><span>四、Nginx 的配置</span></a></h2><p>我们先来看一下 Nginx 的配置结构图：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>main        # 全局配置</span></span>
<span class="line"><span>├── events  # 配置网络连接</span></span>
<span class="line"><span>├── http    # 配置代理、缓存、日志等</span></span>
<span class="line"><span>│   ├── upstream # 配置负载均衡</span></span>
<span class="line"><span>│   ├── server   # 配置虚拟主机，可以有多个 server</span></span>
<span class="line"><span>│   ├── server</span></span>
<span class="line"><span>│   │   ├── location  # 用于匹配 URI（URL 是 URI 的一种），可以有多个 location</span></span>
<span class="line"><span>│   │   ├── location</span></span>
<span class="line"><span>│   │   └── ...</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>└── ...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再把 Nginx 的默认配置拉出来看一下，我把注释加了进去，这样大家很容易就明白这行配置是用来干嘛的了。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>worker_processes  1; # Nginx 进程数，一般设置为和 CPU 核数一样</span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    worker_connections  1024; # 每个进程允许最大并发数</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    include       mime.types; # 文件扩展名与类型映射表</span></span>
<span class="line"><span>    default_type  application/octet-stream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    sendfile        on; # 开启高效传输模式</span></span>
<span class="line"><span>    keepalive_timeout  65; # 保持连接的时间，也叫超时时间，单位秒</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen       8080; # 配置监听的端口</span></span>
<span class="line"><span>        server_name  localhost; # 配置的域名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            root   html; # 网站根目录</span></span>
<span class="line"><span>            index  index.html index.htm; # 默认首页文件</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        error_page   500 502 503 504  /50x.html; # 默认50x对应的访问页面</span></span>
<span class="line"><span>        location = /50x.html {</span></span>
<span class="line"><span>            root   html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    include servers/*; # 加载子配置项</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们以生产环境 Linux 为例。</p><p>由于我的服务器上 80 端口是默认打开的，所以我将监听端口配置成了 80，如果你配置成其他端口的话，记得云服务的安全组里把端口打开。</p><p>root 我指定了 <code>/home/www</code> 目录，首页文件为 index.html。这个文件是我自定义的，来看一下内容。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;</span></span>
<span class="line"><span>&lt;title&gt;沉默王二&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;img src=&quot;niubi.jpeg&quot; /&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很言简意赅，总之就是二哥，牛逼~</p><p>好，保存配置文件，并且 reload Nginx，我们在本地的浏览器中输入服务器的 IP 地址就可以看到效果了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="五、nginx-的学习资料" tabindex="-1"><a class="header-anchor" href="#五、nginx-的学习资料"><span>五、Nginx 的学习资料</span></a></h2><p>关于 Nginx 的负载均衡，还有动静分离，我们以后有机会再讲。Nginx 的入门非常简单，但有一说一，如果想要在工作中用好 Nginx，还是需要花费一番功夫的。</p><p>我这里再给大家推荐一些不错的学习资料吧。</p><p><strong>1）狂神说的视频入门教程</strong>，我个人觉得，狂神的入门教程还是非常舒适的，语速和内容都刚刚好。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>https://www.bilibili.com/video/BV1F5411J7vK</p></blockquote><p><strong>2）黑马程序员Nginx教程</strong>，总共 159 讲，基本上算是非常全面的 Nginx 的视频教程了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-14.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>https://www.bilibili.com/video/BV1ov41187bq</p></blockquote><p><strong>3）极客时间上的 Nginx100 讲</strong>，讲的比较深一点，涉及到不少原理层面的东西。钱包比较鼓的话，可以去付费下：<a href="http://gk.link/a/12eru" target="_blank" rel="noopener noreferrer">http://gk.link/a/12eru</a></p><p><strong>4）Nginx 从入门到实践，万字详解</strong>，图文版的，可以到掘金上看看这篇文章，内容基本上面面俱到了（可以看一下下面的目录），配合前面的视频课，拿下 Nginx 基本上是稳了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-15.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>https://juejin.cn/post/6844904144235413512</p></blockquote><p>这些资料如果能全部过一遍的话，我要喊你 Nginx 小王子了，估计公司遇到 Nginx 问题的话，你肯定是解决问题的那一个。</p><hr><p>GitHub 上标星 10000+ 的开源知识库《<a href="https://github.com/itwanger/toBeBetterJavaer" target="_blank" rel="noopener noreferrer">二哥的 Java 进阶之路</a>》第一版 PDF 终于来了！包括Java基础语法、数组&amp;字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳：<a href="https://javabetter.cn/overview/" target="_blank" rel="noopener noreferrer">太赞了，GitHub 上标星 10000+ 的 Java 教程</a></p><p>微信搜 <strong>沉默王二</strong> 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 <strong>222</strong> 即可免费领取。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,88),r=[t];function l(p,g){return i(),e("div",null,r)}const c=n(s,[["render",l],["__file","nginx.html.vue"]]),d=JSON.parse('{"path":"/nginx/nginx.html","title":"5分钟带你深入浅出搞懂 Nginx","lang":"zh-CN","frontmatter":{"title":"5分钟带你深入浅出搞懂 Nginx","shortTitle":"Nginx 入门","category":["Java企业级开发"],"tag":["Nginx"],"description":"本文是一篇通俗易懂、风趣幽默的 Nginx 入门教程，内容涵盖 Nginx 是什么、Nginx 的作用、Nginx 的安装、Nginx 的常用命令、Nginx 的配置、Nginx 的学习资料等知识点。学 Nginx，就认准二哥的 Java 进阶之路😄。","head":[["meta",{"name":"keywords","content":"nginx,nginx入门,nginx教程,nginx配置,nginx反向代理,nginx负载均衡,nginx动静分离"}],["meta",{"property":"og:url","content":"https://javabetter.cn/nginx/nginx.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"5分钟带你深入浅出搞懂 Nginx"}],["meta",{"property":"og:description","content":"本文是一篇通俗易懂、风趣幽默的 Nginx 入门教程，内容涵盖 Nginx 是什么、Nginx 的作用、Nginx 的安装、Nginx 的常用命令、Nginx 的配置、Nginx 的学习资料等知识点。学 Nginx，就认准二哥的 Java 进阶之路😄。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-25T09:46:09.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Nginx"}],["meta",{"property":"article:modified_time","content":"2024-07-25T09:46:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5分钟带你深入浅出搞懂 Nginx\\",\\"image\\":[\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-01.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-02.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-03.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-04.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-05.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/nginx-20231209205522.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/nginx-20231209205810.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/nginx-20231209210202.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-07.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-08.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-09.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-10.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-12.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-13.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-14.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-15.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png\\"],\\"dateModified\\":\\"2024-07-25T09:46:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"一、Nginx 的作用","slug":"一、nginx-的作用","link":"#一、nginx-的作用","children":[]},{"level":2,"title":"二、Nginx 的安装","slug":"二、nginx-的安装","link":"#二、nginx-的安装","children":[{"level":3,"title":"Windows","slug":"windows","link":"#windows","children":[]},{"level":3,"title":"macOS","slug":"macos","link":"#macos","children":[]},{"level":3,"title":"Linux","slug":"linux","link":"#linux","children":[]}]},{"level":2,"title":"三、Nginx 常用命令","slug":"三、nginx-常用命令","link":"#三、nginx-常用命令","children":[]},{"level":2,"title":"四、Nginx 的配置","slug":"四、nginx-的配置","link":"#四、nginx-的配置","children":[]},{"level":2,"title":"五、Nginx 的学习资料","slug":"五、nginx-的学习资料","link":"#五、nginx-的学习资料","children":[]}],"git":{"createdTime":1640569261000,"updatedTime":1721900769000,"contributors":[{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":8.67,"words":2602},"filePathRelative":"nginx/nginx.md","localizedDate":"2021年12月27日","excerpt":"<p>大家好，我是二哥呀。最近在搭建<a href=\\"https://paicoding.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">技术派</a>网站，就不可避免地要用到 Nginx，索性就出一期 Nginx 的入门教程，希望也可以帮助到大家~😁</p>\\n<p>作为开发者，相信大家都知道 Nginx 的重要性。Nginx 是一个高性能的 HTTP 和反向代理 Web 服务器，由俄罗斯的伊戈尔·赛索耶夫开发，第一个版本发布于 2004 年 10 月 4 日。</p>\\n<figure><img src=\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-01.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>"}');export{c as comp,d as data};
