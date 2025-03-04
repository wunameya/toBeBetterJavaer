import{_ as a,c as e,o as t,e as n}from"./app-ChTk1xp_.js";const r={},o=n('<p>下面简单分享我认为的<strong>Java 校招生应该具备的专业能力和知识水平</strong>，并附上个人总结的<strong>Java 岗知识点不完全整理以及推荐学习书籍</strong>，供大家参考。</p><h2 id="说点虚的" tabindex="-1"><a class="header-anchor" href="#说点虚的"><span>说点虚的</span></a></h2><p><strong>印象最深刻的三场面试：</strong></p><p><strong>一场是某大厂的非 Java 的后端开发岗</strong></p><p>（我当时的简历几乎全是 Java 相关。）</p><p>面试官上来就问：你认为你对哪方面技术或知识最熟悉，我们就聊聊你最熟悉的。</p><p>（当时就觉得面试官太有水平了:D）</p><p><strong>另一场是某个自动驾驶创业公司</strong></p><p>（面试之前就了解到该公司对于算法水平要求极高，而我的算法水平也仅限于力扣。）</p><p>面试过程中问了一道闻所未闻的 acm 算法题，拿到题目以后毫无思路，于是全程在面试官的引导下一步步解题。</p><p>后来收到 offer 之后才意识到，面试官出题时就没指望面试者能当场解答出来，而是想考察其学习和理解、思考和解决问题的能力。</p><p><strong>最深刻的还属淘系的面试</strong></p><p>比起面试感觉更像是和大牛进行了一场交流；</p><p>比起单方向的提问，面试官更注重双向交流，短短一个多小时却收获颇丰；</p><p>（论大佬的向下兼容性:D）</p><p><strong>我认为这几场面试反映出了面试官或公司对校招同学的一些期望和要求：</strong></p><ol><li>**技术和知识深度：**重点不是写过多少语言，用过多少框架，而是对于接触过的项目，学习过的技术和知识，我们能够达到什么深度。</li><li><strong>主动思考和学习：<strong>在面试中，面试官经常对求职者简历中提到的项目或者相关技术进行提问，也是希望考察求职者在实际学习和工作过程中</strong>发现、思考和解决问题的能力</strong>。都说在日常工作中，程序员们最擅长的事情便是“面向搜索引擎编程”，但在我看来，搜索到答案只是第一步，bug 出现的原因、代码为什么不 work、又为什么最终能 work 更是我们应该深究的问题。</li></ol><h2 id="来点实在的" tabindex="-1"><a class="header-anchor" href="#来点实在的"><span>来点实在的</span></a></h2><p>根据自己的面试经历梳理了一些 Java 岗的知识点，供大家参考。</p><h3 id="java-基础" tabindex="-1"><a class="header-anchor" href="#java-基础"><span>Java 基础</span></a></h3><p>基础语法、面向对象、常用类、继承和多态等基础知识不必多说，可以看《二哥的Java进阶之路》。</p><p><strong>书籍推荐：</strong>《On Java 8》</p><p><strong>强烈推荐大家学习 Java 的过程中多学习和参考 JDK 源码，领会其中精妙的编程思想，JDK 源码和 Java doc 才是最权威的 Java 学习资料。</strong></p><h3 id="多线程" tabindex="-1"><a class="header-anchor" href="#多线程"><span>多线程</span></a></h3><p>很多同学在学校接触到的并发场景可能比较少，所以要更加重视。</p><p>**重点知识：**线程池、volatile 和 synchronized 关键字、各种锁机制、中断、CAS、JUC 并发包（如：ReentrantLock 和 AQS）等</p><p><strong>推荐书籍：</strong>《Java 并发编程的艺术》、《二哥的Java进阶之路》并发编程部分。</p><h3 id="jvm" tabindex="-1"><a class="header-anchor" href="#jvm"><span>JVM</span></a></h3><p>**重点知识：**垃圾回收机制、Java 内存结构、类加载机制、Java 内存模型、JVM 性能调优等</p><p>**书籍推荐：**强推《深入理解 Java 虚拟机》</p><p>（能把这么枯燥的底层知识写的这么清晰有趣，膜拜大佬）</p><h3 id="spring" tabindex="-1"><a class="header-anchor" href="#spring"><span>Spring</span></a></h3><p><strong>强烈推荐阅读 Spring 源码</strong>，如果觉得枯燥可以跟着视频学习。如果时间不足，至少阅读一下 Spring 容器启动和 bean 的实例化、循环依赖等模块的源码，做到真正理解 Spring 框架的思想，也培养自己阅读源码的能力。</p><p>**重点知识：**Spring Bean 的实例化和循环依赖、IOC 思想、AOP 和动态代理、常用注解等</p><p><strong>书籍推荐：</strong>《Spring 技术内幕》</p><h3 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库"><span>数据库</span></a></h3><p>首先系统学习数据库，了解常见的关系型和非关系性数据库，掌握 SQL 语句，重点学习 MySQL。</p><p>**重点知识：**数据结构和索引、锁、事物、日志系统、InnoDB 特性等</p><p><strong>书籍推荐：</strong>《数据库系统概念》、《MySQL 必知必会》</p><h3 id="计算机网络" tabindex="-1"><a class="header-anchor" href="#计算机网络"><span>计算机网络</span></a></h3><p>**重点知识：**HTTP、TCP、IP 等相关知识点</p><p><strong>书籍推荐：</strong>《计算机网络-自顶向下方法》、《图解 HTTP》、《图解 TCP/IP》</p><h3 id="网络编程" tabindex="-1"><a class="header-anchor" href="#网络编程"><span>网络编程</span></a></h3><p>**重点知识：**同步/异步/阻塞/非阻塞/BIO/NIO/AIO、零拷贝、Netty 等</p><p><strong>书籍推荐：</strong>《Netty 权威指南》、《NIO 与 Socket 编程技术指南》</p><h3 id="操作系统" tabindex="-1"><a class="header-anchor" href="#操作系统"><span>操作系统</span></a></h3><p>**重点知识：**进程和线程、进程通信、进程调度、内存管理等；熟练掌握 Linux 命令</p><p><strong>书籍推荐：</strong>《深入理解计算机系统》、《现代操作系统》</p><h3 id="分布式和微服务" tabindex="-1"><a class="header-anchor" href="#分布式和微服务"><span>分布式和微服务</span></a></h3><p>系统学习分布式系统的原理和基本理论，了解 RPC、消息中间件、分布式缓存、注册中心、分布式事物、分布式一致性算法、分布式锁等</p><p>**重点知识：**Redis 及分布式缓存设计、RPC 及 Dubbo 框架、消息队列及 RocketMQ、Paxos、Raft 等分布式一致性算法等</p><h3 id="数据结构与算法" tabindex="-1"><a class="header-anchor" href="#数据结构与算法"><span>数据结构与算法</span></a></h3><p>建议看算法书和刷 leetcode 题并行，注重分类总结。</p><p>**重点知识：**常见数据结构（二叉树、栈和队列、链表等）、排序算法、动态规划、广度及深度优先遍历、回溯等</p><p><strong>书籍推荐：</strong>《剑指 offer》（比较基础）➕《程序员代码面试指南：IT 名企算法与数据结构题目最优解》（牛客上有相应题库）</p><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h3><ol><li>Git、Maven/Gradle 等原理和命令的使用、Docker</li><li>场景题：（所谓面试造火箭）比如如何设计一个秒杀系统，设计一个消息中间件有哪些重点等，主要考察对系统的宏观理解、对基础知识和项目经验的综合运用。</li></ol><blockquote><p>参考链接：<a href="https://www.zhihu.com/question/403508943/answer/2036074069" target="_blank" rel="noopener noreferrer">https://www.zhihu.com/question/403508943/answer/2036074069</a>，整理：沉默王二</p></blockquote><hr><p>GitHub 上标星 10000+ 的开源知识库《<a href="https://github.com/itwanger/toBeBetterJavaer" target="_blank" rel="noopener noreferrer">二哥的 Java 进阶之路</a>》第一版 PDF 终于来了！包括Java基础语法、数组&amp;字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳：<a href="https://javabetter.cn/overview/" target="_blank" rel="noopener noreferrer">太赞了，GitHub 上标星 10000+ 的 Java 教程</a></p><p>微信搜 <strong>沉默王二</strong> 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 <strong>222</strong> 即可免费领取。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',62),p=[o];function s(i,l){return t(),e("div",null,p)}const g=a(r,[["render",s],["__file","xiaozhao-java-should-master.html.vue"]]),c=JSON.parse('{"path":"/xuexijianyi/xiaozhao-java-should-master.html","title":"校招 Java 后端开发应该掌握到什么程度？","lang":"zh-CN","frontmatter":{"title":"校招 Java 后端开发应该掌握到什么程度？","shortTitle":"校招Java后端应该掌握到什么程度?","description":"参加了21届的春招和秋招，拿到过阿里、腾讯、字节等大厂的offer，目前刚刚入职阿里淘系技术（Java后端开…","tag":["学习建议"],"author":"阿里巴巴大淘宝技术","category":["学习建议"],"head":[["meta",{"name":"description","content":"参加了21届的春招和秋招，拿到过阿里、腾讯、字节等大厂的offer，目前刚刚入职阿里淘系技术（Java后端开…"}],["meta",{"name":"keywords","content":"程序员,后端技术,Java,校园招聘,后端工程师"}],["meta",{"property":"og:url","content":"https://javabetter.cn/xuexijianyi/xiaozhao-java-should-master.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"校招 Java 后端开发应该掌握到什么程度？"}],["meta",{"property":"og:description","content":"参加了21届的春招和秋招，拿到过阿里、腾讯、字节等大厂的offer，目前刚刚入职阿里淘系技术（Java后端开…"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-25T09:46:09.000Z"}],["meta",{"property":"article:author","content":"阿里巴巴大淘宝技术"}],["meta",{"property":"article:tag","content":"学习建议"}],["meta",{"property":"article:modified_time","content":"2024-07-25T09:46:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"校招 Java 后端开发应该掌握到什么程度？\\",\\"image\\":[\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png\\"],\\"dateModified\\":\\"2024-07-25T09:46:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"阿里巴巴大淘宝技术\\"}]}"]]},"headers":[{"level":2,"title":"说点虚的","slug":"说点虚的","link":"#说点虚的","children":[]},{"level":2,"title":"来点实在的","slug":"来点实在的","link":"#来点实在的","children":[{"level":3,"title":"Java 基础","slug":"java-基础","link":"#java-基础","children":[]},{"level":3,"title":"多线程","slug":"多线程","link":"#多线程","children":[]},{"level":3,"title":"JVM","slug":"jvm","link":"#jvm","children":[]},{"level":3,"title":"Spring","slug":"spring","link":"#spring","children":[]},{"level":3,"title":"数据库","slug":"数据库","link":"#数据库","children":[]},{"level":3,"title":"计算机网络","slug":"计算机网络","link":"#计算机网络","children":[]},{"level":3,"title":"网络编程","slug":"网络编程","link":"#网络编程","children":[]},{"level":3,"title":"操作系统","slug":"操作系统","link":"#操作系统","children":[]},{"level":3,"title":"分布式和微服务","slug":"分布式和微服务","link":"#分布式和微服务","children":[]},{"level":3,"title":"数据结构与算法","slug":"数据结构与算法","link":"#数据结构与算法","children":[]},{"level":3,"title":"其他","slug":"其他","link":"#其他","children":[]}]}],"git":{"createdTime":1657530885000,"updatedTime":1721900769000,"contributors":[{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":6.03,"words":1810},"filePathRelative":"xuexijianyi/xiaozhao-java-should-master.md","localizedDate":"2022年7月11日","excerpt":"<p>下面简单分享我认为的<strong>Java 校招生应该具备的专业能力和知识水平</strong>，并附上个人总结的<strong>Java 岗知识点不完全整理以及推荐学习书籍</strong>，供大家参考。</p>\\n<h2>说点虚的</h2>\\n<p><strong>印象最深刻的三场面试：</strong></p>\\n<p><strong>一场是某大厂的非 Java 的后端开发岗</strong></p>\\n<p>（我当时的简历几乎全是 Java 相关。）</p>\\n<p>面试官上来就问：你认为你对哪方面技术或知识最熟悉，我们就聊聊你最熟悉的。</p>\\n<p>（当时就觉得面试官太有水平了:D）</p>"}');export{g as comp,c as data};
