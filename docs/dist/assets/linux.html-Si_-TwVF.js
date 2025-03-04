import{_ as e,c as i,o as a,e as t}from"./app-ChTk1xp_.js";const l={},n=t('<h2 id="_1-linux-常用命令" tabindex="-1"><a class="header-anchor" href="#_1-linux-常用命令"><span>1. Linux 常用命令</span></a></h2><p>推荐阅读：<a href="https://javabetter.cn/pdf/linux.html" target="_blank" rel="noopener noreferrer">常用高频 Linux 速查备忘手册</a></p><p>我自己常用的 Linux 命令有：</p><ul><li>top 用来查看系统资源</li><li><code>ps -ef | grep java</code> 查看 Java 进程</li><li><code>netstat</code> 查看网络连接</li><li>ping 测试网络连通性</li><li>find 查找文件</li><li>chmod 修改文件权限</li><li>kill 终止进程</li><li>df 查看磁盘空间</li><li>mkdir 创建目录、rm 删除文件、cp 复制文件、mv 移动文件</li><li>zip 压缩文件、unzip 解压文件等等这些。</li></ul><blockquote><ol><li><a href="https://javabetter.cn/zhishixingqiu/mianshi.html" target="_blank" rel="noopener noreferrer">Java 面试指南（付费）</a>收录的作业帮面经同学 1 Java 后端一面面试原题：常用linux命令</li><li><a href="https://javabetter.cn/zhishixingqiu/mianshi.html" target="_blank" rel="noopener noreferrer">Java 面试指南（付费）</a>收录的虾皮面经同学 13 一面面试原题：常见的linux命令</li><li><a href="https://javabetter.cn/zhishixingqiu/mianshi.html" target="_blank" rel="noopener noreferrer">Java 面试指南（付费）</a>收录的阿里云面经同学 22 面经：linux常用命令</li></ol></blockquote><h3 id="文件操作的命令有哪些" tabindex="-1"><a class="header-anchor" href="#文件操作的命令有哪些"><span>文件操作的命令有哪些？</span></a></h3><ul><li><code>ls</code>：列出目录内容。<code>ls -l</code>显示详细信息，<code>ls -a</code>显示隐藏文件。</li><li><code>cd</code>：更改当前目录。<code>cd ..</code>回到上级目录，<code>cd ~</code>回到用户的主目录。</li><li><code>pwd</code>：显示当前工作目录的完整路径。</li><li><code>cp</code>：复制文件或目录。<code>cp source_file target_file</code>复制文件，<code>cp -r source_directory target_directory</code>复制目录。</li><li><code>mv</code>：移动或重命名文件或目录。</li><li><code>rm</code>：删除文件或目录。<code>rm -r</code>递归删除目录及其内容。</li><li><code>mkdir</code>：创建新目录。</li><li><code>cat</code>：查看文件内容。<code>cat file1 file2</code>合并文件内容显示。</li></ul><h4 id="windows下如何创建空文件" tabindex="-1"><a class="header-anchor" href="#windows下如何创建空文件"><span>Windows下如何创建空文件</span></a></h4><p>Windows 下我还是比较习惯使用右键菜单新建一个文件，然后重命名。</p><blockquote><ol><li><a href="https://javabetter.cn/zhishixingqiu/mianshi.html" target="_blank" rel="noopener noreferrer">Java 面试指南（付费）</a>收录的同学 30 腾讯音乐面试原题：如果是Windows，如何去创建一个空文件的？</li></ol></blockquote><h4 id="如何查看系统的日志文件" tabindex="-1"><a class="header-anchor" href="#如何查看系统的日志文件"><span>如何查看系统的日志文件？</span></a></h4><p>在 Linux 中，可以通过 cat、more、less、tail、head 等命令查看系统日志文件。</p><p>也可以直接通过 vim 打开日志文件，然后按照关键字去搜查对应的日志信息。</p><p>常见的系统日志文件包括：</p><ul><li><code>/var/log/syslog</code>：包含系统范围内的消息和错误日志，包括启动日志、内核日志等，是排查系统问题的首选日志文件之一。</li><li><code>/var/log/messages</code>：类似于 syslog，但通常更多关注系统级别的消息和错误。</li></ul><blockquote><ol><li><a href="https://javabetter.cn/zhishixingqiu/" target="_blank" rel="noopener noreferrer">二哥编程星球</a>球友<a href="https://t.zsxq.com/BaHOh" target="_blank" rel="noopener noreferrer">枕云眠美团 AI 面试原题</a>：如何查看系统日志文件，常见的系统日志文件有哪些</li></ol></blockquote><h3 id="系统管理的命令有哪些" tabindex="-1"><a class="header-anchor" href="#系统管理的命令有哪些"><span>系统管理的命令有哪些？</span></a></h3><ul><li><code>ps</code>：显示当前运行的进程。<code>ps aux</code>显示所有进程。</li><li><code>top</code>：实时显示进程动态。</li><li><code>kill</code>：终止进程。<code>kill -9 PID</code>强制终止。</li><li><code>df</code>：显示磁盘空间使用情况。<code>df -h</code>以易读格式显示。</li><li><code>du</code>：显示目录或文件的磁盘使用情况。</li><li><code>free</code>：显示内存和交换空间的使用情况。</li><li><code>chmod</code>：更改文件或目录的权限。</li><li><code>chown</code>：更改文件或目录的所有者和所属组。</li></ul><h4 id="如何查看linux进程或cpu使用情况" tabindex="-1"><a class="header-anchor" href="#如何查看linux进程或cpu使用情况"><span>如何查看Linux进程或CPU使用情况？</span></a></h4><p>top 命令可以实时查看所有进程的 CPU 和内存使用情况。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/linux-20241225092615.png" alt="二哥的 Java 进阶之路：top面板" tabindex="0" loading="lazy"><figcaption>二哥的 Java 进阶之路：top面板</figcaption></figure><p><code>ps aux --sort=-%cpu | head -5</code>可以查看 CPU 使用率最高的 5 个进程。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/linux-20241223162812.png" alt="二哥的 Java 进阶之路：ps 命令" tabindex="0" loading="lazy"><figcaption>二哥的 Java 进阶之路：ps 命令</figcaption></figure><blockquote><ol><li><a href="https://javabetter.cn/zhishixingqiu/mianshi.html" target="_blank" rel="noopener noreferrer">Java 面试指南（付费）</a>收录的同学 30 腾讯音乐面试原题：怎么查看一个进程的Cpu 使用率呢？</li></ol></blockquote><h4 id="如何查看linux内存使用情况" tabindex="-1"><a class="header-anchor" href="#如何查看linux内存使用情况"><span>如何查看Linux内存使用情况？</span></a></h4><p>可以使用 watch 配合 free 命令实时监控内存使用情况。如 <code>watch -n 1 free -m</code>每秒刷新一次内存使用情况。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/linux-20241223163021.png" alt="二哥的 Java 进阶之路：free" tabindex="0" loading="lazy"><figcaption>二哥的 Java 进阶之路：free</figcaption></figure><blockquote><ol><li><a href="https://javabetter.cn/zhishixingqiu/mianshi.html" target="_blank" rel="noopener noreferrer">Java 面试指南（付费）</a>收录的腾讯面经同学 29 Java 后端一面原题：如何看Linux进程或CPU使用情况？Linux查看内存情况？</li></ol></blockquote><h4 id="如何查看系统负载" tabindex="-1"><a class="header-anchor" href="#如何查看系统负载"><span>如何查看系统负载？</span></a></h4><p>top 命令是实时查看系统性能的常用工具，系统负载信息通常显示在 top 命令输出的顶部。它还显示了系统运行的进程、内存使用情况等。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/linux-20240813114745.png" alt="二哥的 Java 进阶之路：TOP 命令" tabindex="0" loading="lazy"><figcaption>二哥的 Java 进阶之路：TOP 命令</figcaption></figure><blockquote><ol><li><a href="https://javabetter.cn/zhishixingqiu/" target="_blank" rel="noopener noreferrer">二哥编程星球</a>球友<a href="https://t.zsxq.com/BaHOh" target="_blank" rel="noopener noreferrer">枕云眠美团 AI 面试原题</a>：如何查看系统负载，系统中的 load average 含义是什么</li></ol></blockquote><h4 id="load-average-是什么" tabindex="-1"><a class="header-anchor" href="#load-average-是什么"><span>Load Average 是什么？</span></a></h4><p>load average 是一个反映系统负载的指标，表示在一段时间内系统正在处理的平均进程数量。通常，它包含三个数值，分别对应过去 1 分钟、5 分钟和 15 分钟的平均负载。</p><p>比如说上图中出现的 <code>load average: 1.80, 1.74, 1.83</code> 表示：</p><ul><li>1.80：表示过去 1 分钟内，系统平均有 1.80 个进程在等待处理（包括 CPU 正在处理和等待被调度的进程）。</li><li>1.74：表示过去 5 分钟内的平均负载。</li><li>1.83：表示过去 15 分钟内的平均负载。</li></ul><p>load average 的数值可以看作是系统的工作队列长度（等待处理的任务数量）。如果这个数值接近或等于 CPU 核心数，说明系统的负载是合理的。</p><p>如果 load average 大于 CPU 核心数，表示系统的进程比 CPU 能处理的多，系统可能处于过载状态。</p><p>在单核系统中，load average 数值超过 1 通常意味着系统繁忙（有任务在等待 CPU）。</p><p>在多核系统中，假设有 N 个 CPU 核心，load average 接近 N 时表示系统正处于高负载状态，但还在可接受范围内。如果 load average 超过 N，则意味着系统可能过载。</p><p>macOS 上可以通过 <code>sysctl -a | grep machdep.cpu.core_count</code> 查看 CPU 核心数，我本机目前是 16 核。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/linux-20240813115642.png" alt="二哥的 Java 进阶之路：macOS 的 CPU 核心数" tabindex="0" loading="lazy"><figcaption>二哥的 Java 进阶之路：macOS 的 CPU 核心数</figcaption></figure><blockquote><ol><li><a href="https://javabetter.cn/zhishixingqiu/" target="_blank" rel="noopener noreferrer">二哥编程星球</a>球友<a href="https://t.zsxq.com/BaHOh" target="_blank" rel="noopener noreferrer">枕云眠美团 AI 面试原题</a>：如何查看系统负载，系统中的 load average 含义是什么</li></ol></blockquote><h4 id="chmod-的参数讲一下" tabindex="-1"><a class="header-anchor" href="#chmod-的参数讲一下"><span>chmod 的参数讲一下？</span></a></h4><p>chmod 命令在 Linux 中用来改变文件或目录的访问权限。这个命令的使用可以基于符号表示法（也称为文本方法）或者八进制数表示法。</p><p>像 <code>chmod 777 file</code> 赋予文件所有权限，就属于八进制数表示法。<code>7=4+2+1</code>，分别代表读、写、执行权限。</p><p>Linux 中的权限可以应用于三种类别的用户：</p><ul><li>文件所有者（u）</li><li>与文件所有者同组的用户（g）</li><li>其他用户（o）</li></ul><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/linux-vip-20240214205642.png" alt="图片来源于网络" tabindex="0" loading="lazy"><figcaption>图片来源于网络</figcaption></figure><p>①、符号模式</p><p>符号模式使用字母来表示权限，如下：</p><ul><li>读（r）</li><li>写（w）</li><li>执行（x）</li><li>所有（a）</li></ul><p>例如：</p><ul><li><code>chmod u+w file</code>：给文件所有者添加写权限。</li><li><code>chmod g-r file</code>：移除组用户的读权限。</li><li><code>chmod o+x file</code>：给其他用户添加执行权限。</li><li><code>chmod u=rwx,g=rx,o=r file</code>：设置文件所有者具有读写执行权限，组用户具有读执行权限，其他用户具有读权限。</li></ul><p>②、数字模式</p><p>数字模式使用三位八进制数来表示权限，每位数字代表不同的用户类别（所有者、组、其他用户），数字是其各自权限值的总和：</p><ul><li>读（r）= 4</li><li>写（w）= 2</li><li>执行（x）= 1</li></ul><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/linux-vip-20240214205700.png" alt="图片来源于网络" tabindex="0" loading="lazy"><figcaption>图片来源于网络</figcaption></figure><p>因此，权限模式可以是从 0（无权限）到 7（读写执行权限）的任何值。</p><ul><li>chmod 755 file：使得文件所有者有读写执行（7）权限，组用户和其他用户有读和执行（5）权限。</li><li>chmod 644 file：使得文件所有者有读写（6）权限，而组用户和其他用户只有读（4）权限。</li></ul><h4 id="kill-9-中的-9-是什么意思" tabindex="-1"><a class="header-anchor" href="#kill-9-中的-9-是什么意思"><span><code>kill -9</code> 中的 9 是什么意思？</span></a></h4><p><code>kill -9 PID</code> 是一种强制终止进程的方式，其中的 9 表示信号编号，代表 SIGKILL 信号。</p><blockquote><ol><li><a href="https://javabetter.cn/zhishixingqiu/mianshi.html" target="_blank" rel="noopener noreferrer">Java 面试指南（付费）</a>收录的阿里云面经同学 22 面经：kill -9 9的意义是什么</li></ol></blockquote><h3 id="网络管理的命令有哪些" tabindex="-1"><a class="header-anchor" href="#网络管理的命令有哪些"><span>网络管理的命令有哪些？</span></a></h3><ul><li><code>ping</code>：检查与远程服务器的连接。</li><li><code>wget</code>：从网络上下载文件。</li><li><code>ifconfig</code>：显示网络接口的配置信息。</li><li><code>netstat</code>：显示网络连接、路由表和网络接口信息。</li></ul><h4 id="如何查看8080端口的连接数" tabindex="-1"><a class="header-anchor" href="#如何查看8080端口的连接数"><span>如何查看8080端口的连接数？</span></a></h4><p>可以通过 netstat 命令查看，如<code>netstat -an | grep &#39;:8080&#39; | grep &#39;tcp&#39; | wc -l</code>。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/linux-20241223161926.png" alt="二哥的 Java 进阶之路：netstat 命令查看 8080 端口" tabindex="0" loading="lazy"><figcaption>二哥的 Java 进阶之路：netstat 命令查看 8080 端口</figcaption></figure><ul><li><code>-a</code>：显示所有网络连接和监听端口。</li><li><code>-n</code>：以数字形式显示地址和端口。</li><li><code>grep &#39;:8080&#39;</code>：过滤出 8080 端口的连接。</li><li><code>grep &#39;tcp&#39;</code>：仅显示 TCP 连接。</li><li><code>wc -l</code>：统计匹配到的行数，即连接数。</li></ul><p>也可以使用 <code>ss</code> 命令，它是 netstat 的替代工具；还可以使用 <code>lsof</code> 命令，它可以列出当前系统打开的文件和套接字。</p><blockquote><ol><li><a href="https://javabetter.cn/zhishixingqiu/mianshi.html" target="_blank" rel="noopener noreferrer">Java 面试指南（付费）</a>收录的腾讯面经同学 29 Java 后端一面原题：Linux系统的8080端口有多少个TCP连接，怎么看？</li></ol></blockquote><h3 id="压缩和解压的命令有哪些" tabindex="-1"><a class="header-anchor" href="#压缩和解压的命令有哪些"><span>压缩和解压的命令有哪些？</span></a></h3><ul><li><code>tar</code>：打包或解包<code>.tar</code>文件。<code>tar cvf archive.tar files</code>打包，<code>tar xvf archive.tar</code>解包。</li><li><code>gzip</code> / <code>gunzip</code>：压缩或解压<code>.gz</code>文件。</li><li><code>zip</code> / <code>unzip</code>：压缩或解压<code>.zip</code>文件。</li></ul><h3 id="查找文件的命令有哪些" tabindex="-1"><a class="header-anchor" href="#查找文件的命令有哪些"><span>查找文件的命令有哪些？</span></a></h3><ul><li><code>find</code>：在目录树中查找文件。<code>find /directory/ -name filename</code>。</li></ul><h4 id="liunx-下查找一个文件怎么做" tabindex="-1"><a class="header-anchor" href="#liunx-下查找一个文件怎么做"><span>Liunx 下查找一个文件怎么做？</span></a></h4><p>在 Linux 环境下查找文件，有多种命令和方法可以使用。find 命令是最常用的文件查找工具之一，它可以在指定目录下递归查找符合条件的文件和目录。</p><p>例如：在当前目录及其子目录中查找名为 &quot;example.txt&quot; 的文件</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">find</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;example.txt&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>例如：查找 <code>/home</code> 目录中所有 <code>.txt</code> 结尾的文件：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">find</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;*.txt&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>例如：查找 <code>/var/log</code> 目录中修改时间在 7 天以前的 <code>.log</code> 文件</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">find</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/log</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;*.log&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -mtime</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +7</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><ol><li><a href="https://javabetter.cn/zhishixingqiu/mianshi.html" target="_blank" rel="noopener noreferrer">Java 面试指南（付费）</a>收录的用友金融一面原题：Linux 的常用命令</li><li><a href="https://javabetter.cn/zhishixingqiu/mianshi.html" target="_blank" rel="noopener noreferrer">Java 面试指南（付费）</a>收录的华为 OD 面经同学 1 一面面试原题：Linux 使用过哪些命令</li><li><a href="https://javabetter.cn/zhishixingqiu/mianshi.html" target="_blank" rel="noopener noreferrer">Java 面试指南（付费）</a>收录的小公司面经同学 5 Java 后端面试原题：Liunx 下查找一个文件怎么做</li><li><a href="https://javabetter.cn/zhishixingqiu/mianshi.html" target="_blank" rel="noopener noreferrer">Java 面试指南（付费）</a>收录的华为 OD 面经同学 1 一面面试原题：chmod 的参数讲一下?</li></ol></blockquote><h2 id="_2-linux-系统管理" tabindex="-1"><a class="header-anchor" href="#_2-linux-系统管理"><span>2. Linux 系统管理</span></a></h2><h3 id="用户和用户组有什么区别" tabindex="-1"><a class="header-anchor" href="#用户和用户组有什么区别"><span>用户和用户组有什么区别？</span></a></h3><p>在 Linux 中，用户和用户组是系统权限管理的核心概念。</p><p>每个用户在 Linux 中都有一个独立的账户，用于标识该用户并控制其对系统资源的访问。用户包括普通用户和超级用户（root）。普通用户的权限有限，只能访问和修改自己拥有的文件和目录，而超级用户拥有系统的最高权限，能够执行任何操作。</p><p>每个用户在系统中都有一个唯一的用户 ID（UID），以及一个关联的用户名（login name）。</p><p>用户组是用户的集合，用于简化权限管理。每个用户可以属于一个或多个用户组，而每个用户组都有一个唯一的组 ID（GID）。通过将用户分配到不同的组，系统可以更方便地管理对文件和目录的访问权限。</p><p>一个文件或目录可以由一个用户和一个用户组拥有，系统根据文件或目录的所有者和所属组来确定其他用户对它的访问权限。</p><p>可以使用 groupadd 命令来创建新的用户组。例如：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> groupadd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> developers</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以使用 useradd 命令来创建新的用户。创建用户时可以指定该用户的默认用户组、主目录等。例如，创建一个名为 johndoe 的用户，并将其添加到 developers 组：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> useradd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> developers</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> johndoe</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><code>-m</code>：表示创建用户的同时创建用户的主目录（通常在<code>/home/username</code>）。</li><li><code>-g</code>：指定用户的初始用户组。</li></ul><blockquote><ol><li><a href="https://javabetter.cn/zhishixingqiu/" target="_blank" rel="noopener noreferrer">二哥编程星球</a>球友<a href="https://t.zsxq.com/BaHOh" target="_blank" rel="noopener noreferrer">枕云眠美团 AI 面试原题</a>：解释linux中的用户和用户组概念，如何创建新用户和用户组</li></ol></blockquote><h3 id="如何用linux命令去查找某个qps" tabindex="-1"><a class="header-anchor" href="#如何用linux命令去查找某个qps"><span>如何用linux命令去查找某个qps?</span></a></h3><p>如果服务通过网络提供访问，可以使用 netstat 或 ss 命令统计特定端口的连接数，并结合 watch 命令来监控实时的连接速率。</p><p>例如，统计 HTTPS 服务（通常运行在端口 443）每秒的请求数：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">watch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;netstat -an | grep &#39;:443 &#39; | grep ESTABLISHED | wc -l&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>解释一下：</p><ul><li><code>netstat -an</code>：显示所有连接和监听端口。</li><li><code>grep &#39;:443 &#39;</code>：过滤出端口 443 的连接。</li><li><code>grep ESTABLISHED</code>：过滤出已经建立的连接。</li><li><code>wc -l</code>：统计连接数。</li><li><code>watch -n 1</code>：每秒刷新一次命令的输出。</li></ul><p>观察连接数的变化，可以大致估算出每秒的请求数。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/linux-20240902112732.png" alt="二哥的 Java 进阶之路：技术派的 443 请求数" tabindex="0" loading="lazy"><figcaption>二哥的 Java 进阶之路：技术派的 443 请求数</figcaption></figure><blockquote><ol><li><a href="https://javabetter.cn/zhishixingqiu/mianshi.html" target="_blank" rel="noopener noreferrer">Java 面试指南（付费）</a>收录的作业帮面经同学 1 Java 后端一面面试原题：用linux命令去查找某个qps</li></ol></blockquote><h2 id="_3-git-常用命令" tabindex="-1"><a class="header-anchor" href="#_3-git-常用命令"><span>3. Git 常用命令</span></a></h2><h3 id="git-常用命令有哪些" tabindex="-1"><a class="header-anchor" href="#git-常用命令有哪些"><span>Git 常用命令有哪些？</span></a></h3><ul><li><code>git clone &lt;repository-url&gt;</code>：克隆远程仓库。</li><li><code>git status</code>：查看工作区和暂存区的状态。</li><li><code>git add &lt;file&gt;</code>：将文件添加到暂存区。</li><li><code>git commit -m &quot;message&quot;</code>：提交暂存区的文件到本地仓库。</li><li><code>git log</code>：查看提交历史。</li><li><code>git merge &lt;branch-name&gt;</code>：合并指定分支到当前分支。</li><li><code>git checkout &lt;branch-name&gt;</code>：切换分支。</li><li><code>git pull</code>：拉取远程仓库的更新。</li></ul><hr><p>图文详解 2 道 Linux 面试高频题，这次吊打面试官，我觉得稳了（手动 dog）。整理：沉默王二。</p><p><em>没有什么使我停留——除了目的，纵然岸旁有玫瑰、有绿荫、有宁静的港湾，我是不系之舟</em>。</p><p><strong>系列内容</strong>：</p><ul><li><a href="https://javabetter.cn/sidebar/sanfene/javase.html" target="_blank" rel="noopener noreferrer">面渣逆袭 Java SE 篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/javathread.html" target="_blank" rel="noopener noreferrer">面渣逆袭 Java 集合框架篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/collection.html" target="_blank" rel="noopener noreferrer">面渣逆袭 Java 并发编程篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/jvm.html" target="_blank" rel="noopener noreferrer">面渣逆袭 JVM 篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/spring.html" target="_blank" rel="noopener noreferrer">面渣逆袭 Spring 篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/redis.html" target="_blank" rel="noopener noreferrer">面渣逆袭 Redis 篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/mybatis.html" target="_blank" rel="noopener noreferrer">面渣逆袭 MyBatis 篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/mysql.html" target="_blank" rel="noopener noreferrer">面渣逆袭 MySQL 篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/os.html" target="_blank" rel="noopener noreferrer">面渣逆袭操作系统篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/network.html" target="_blank" rel="noopener noreferrer">面渣逆袭计算机网络篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/rocketmq.html" target="_blank" rel="noopener noreferrer">面渣逆袭 RocketMQ 篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/fenbushi.html" target="_blank" rel="noopener noreferrer">面渣逆袭分布式篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/weifuwu.html" target="_blank" rel="noopener noreferrer">面渣逆袭微服务篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/shejimoshi.html" target="_blank" rel="noopener noreferrer">面渣逆袭设计模式篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/linux.html" target="_blank" rel="noopener noreferrer">面渣逆袭 Linux 篇 👍</a></li></ul><hr><p>GitHub 上标星 10000+ 的开源知识库《<a href="https://github.com/itwanger/toBeBetterJavaer" target="_blank" rel="noopener noreferrer">二哥的 Java 进阶之路</a>》第一版 PDF 终于来了！包括 Java 基础语法、数组&amp;字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM 等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳：<a href="https://javabetter.cn/overview/" target="_blank" rel="noopener noreferrer">太赞了，GitHub 上标星 10000+ 的 Java 教程</a></p><p>微信搜 <strong>沉默王二</strong> 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 <strong>222</strong> 即可免费领取。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',118),r=[n];function o(s,d){return a(),i("div",null,r)}const c=e(l,[["render",o],["__file","linux.html.vue"]]),p=JSON.parse('{"path":"/sidebar/sanfene/linux.html","title":"Linux面试题，1道Linux八股文（1万字2张手绘图），面渣逆袭必看👍","lang":"zh-CN","frontmatter":{"title":"Linux面试题，1道Linux八股文（1万字2张手绘图），面渣逆袭必看👍","shortTitle":"面渣逆袭-Linux","description":"下载次数超 1 万次，1 万字 2 张手绘图，详解 2 道 Linux 面试高频题（让天下没有难背的八股），面渣背会这些 Linux 八股文，这次吊打面试官，我觉得稳了（手动 dog）。","author":"沉默王二","date":"2024-12-01T00:00:00.000Z","category":["面渣逆袭"],"tag":["面渣逆袭"],"head":[["meta",{"name":"keywords","content":"Linux面试题,Linux,linux,面试题,八股文"}],["meta",{"property":"og:url","content":"https://javabetter.cn/sidebar/sanfene/linux.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"Linux面试题，1道Linux八股文（1万字2张手绘图），面渣逆袭必看👍"}],["meta",{"property":"og:description","content":"下载次数超 1 万次，1 万字 2 张手绘图，详解 2 道 Linux 面试高频题（让天下没有难背的八股），面渣背会这些 Linux 八股文，这次吊打面试官，我觉得稳了（手动 dog）。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.tobebetterjavaer.com/stutymore/linux-20241225092615.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-25T03:19:05.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"面渣逆袭"}],["meta",{"property":"article:published_time","content":"2024-12-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-25T03:19:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux面试题，1道Linux八股文（1万字2张手绘图），面渣逆袭必看👍\\",\\"image\\":[\\"https://cdn.tobebetterjavaer.com/stutymore/linux-20241225092615.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/linux-20241223162812.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/linux-20241223163021.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/linux-20240813114745.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/linux-20240813115642.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/linux-vip-20240214205642.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/linux-vip-20240214205700.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/linux-20241223161926.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/linux-20240902112732.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png\\"],\\"datePublished\\":\\"2024-12-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-25T03:19:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\"}]}"]]},"headers":[{"level":2,"title":"1. Linux 常用命令","slug":"_1-linux-常用命令","link":"#_1-linux-常用命令","children":[{"level":3,"title":"文件操作的命令有哪些？","slug":"文件操作的命令有哪些","link":"#文件操作的命令有哪些","children":[]},{"level":3,"title":"系统管理的命令有哪些？","slug":"系统管理的命令有哪些","link":"#系统管理的命令有哪些","children":[]},{"level":3,"title":"网络管理的命令有哪些？","slug":"网络管理的命令有哪些","link":"#网络管理的命令有哪些","children":[]},{"level":3,"title":"压缩和解压的命令有哪些？","slug":"压缩和解压的命令有哪些","link":"#压缩和解压的命令有哪些","children":[]},{"level":3,"title":"查找文件的命令有哪些？","slug":"查找文件的命令有哪些","link":"#查找文件的命令有哪些","children":[]}]},{"level":2,"title":"2. Linux 系统管理","slug":"_2-linux-系统管理","link":"#_2-linux-系统管理","children":[{"level":3,"title":"用户和用户组有什么区别？","slug":"用户和用户组有什么区别","link":"#用户和用户组有什么区别","children":[]},{"level":3,"title":"如何用linux命令去查找某个qps?","slug":"如何用linux命令去查找某个qps","link":"#如何用linux命令去查找某个qps","children":[]}]},{"level":2,"title":"3. Git 常用命令","slug":"_3-git-常用命令","link":"#_3-git-常用命令","children":[{"level":3,"title":"Git 常用命令有哪些？","slug":"git-常用命令有哪些","link":"#git-常用命令有哪些","children":[]}]}],"git":{"createdTime":1710556126000,"updatedTime":1735096745000,"contributors":[{"name":"沉默王二","email":"www.qing_gee@163.com","commits":7}]},"readingTime":{"minutes":13.09,"words":3926},"filePathRelative":"sidebar/sanfene/linux.md","localizedDate":"2024年12月1日","excerpt":"<h2>1. Linux 常用命令</h2>\\n<p>推荐阅读：<a href=\\"https://javabetter.cn/pdf/linux.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">常用高频 Linux 速查备忘手册</a></p>\\n<p>我自己常用的 Linux 命令有：</p>\\n<ul>\\n<li>top 用来查看系统资源</li>\\n<li><code>ps -ef | grep java</code> 查看 Java 进程</li>\\n<li><code>netstat</code> 查看网络连接</li>\\n<li>ping 测试网络连通性</li>\\n<li>find 查找文件</li>\\n<li>chmod 修改文件权限</li>\\n<li>kill 终止进程</li>\\n<li>df 查看磁盘空间</li>\\n<li>mkdir 创建目录、rm 删除文件、cp 复制文件、mv 移动文件</li>\\n<li>zip 压缩文件、unzip 解压文件等等这些。</li>\\n</ul>"}');export{c as comp,p as data};
