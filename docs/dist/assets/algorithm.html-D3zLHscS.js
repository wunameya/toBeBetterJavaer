import{_ as e,c as a,o as t,e as i}from"./app-ChTk1xp_.js";const n={},r=i(`<p>说出来还真有点不好意思。上学那时候傻，为了校招，硬着头皮刷《算法导论》、《编程珠玑》，还有 LeetCode，刷了小一年。</p><p>刷着忘着，忘着刷着，不刷怕考到，最后刷的秀发都稀疏了。</p><p>等找到了工作后才恍然大悟，原来当初根本不用那么辛苦。这不，刚好有小伙伴在《<a href="https://javabetter.cn/zhishixingqiu/" target="_blank" rel="noopener noreferrer">二哥的Java进阶之路</a>》知识星球上问我算法的学习路线，我就毫不保留地把我算法方面的学习经验分享出来，希望能给大家一点点启发和帮助。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-59f3bc36-4e6c-48c0-86e5-8afdd6165147.png" alt="算法的学习路线有吗？" tabindex="0" loading="lazy"><figcaption>算法的学习路线有吗？</figcaption></figure><p>我画了一张图，里面几乎涵盖了所有数据结构与算法书籍中都会讲到的知识点。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-220e86a7-fa5d-44a2-a560-3cb6cfa70ad0.png" alt="数据结构与算法知识点思维导图" tabindex="0" loading="lazy"><figcaption>数据结构与算法知识点思维导图</figcaption></figure><p>但讲良心话，对于一个初学者，或者不打算卷算法岗的程序员来说，完全就没必要把思维导图里面的所有知识点都学了，那样就太不高效了。</p><p>我们学习数据结构与算法，也得讲究策略。我的建议是这样的（敲黑板、划重点了啊）：</p><p><strong>7 个数据结构</strong>：</p><ul><li>数组</li><li>链表</li><li>栈</li><li>队列</li><li>哈希表</li><li>二叉树</li><li>堆</li></ul><p><strong>10 个算法</strong>：</p><ul><li>递归</li><li>排序</li><li>二分查找</li><li>搜索</li><li>哈希算法</li><li>贪心算法</li><li>分治算法</li><li>回溯算法</li><li>动态规划</li><li>字符串匹配算法</li></ul><p>这些是学习数据结构与算法时的重点。很多人在第一次接触数据结构与算法这门课时，往往会觉得很抽象，很难搞懂，以至于站在门外徘徊不前。</p><p>其实真正的原因是没有找到好的学习方法，没有抓住学习的重点。相信你认真看完我这条学习路线后，学起来就会有的放矢、事半功倍了。</p><h2 id="一、什么是数据结构" tabindex="-1"><a class="header-anchor" href="#一、什么是数据结构"><span>一、什么是数据结构</span></a></h2><p>数据结构是一种具有一定逻辑关系，在计算机中应用某种存储结构，并且封装了相应操作的数据元素集合。它包含三方面的内容，逻辑关系、存储关系及操作。不同种类的数据结构适合于不同种类的应用，而部分甚至专门用于特定的作业任务。例如，计算机网络依赖于路由表运作，B 树高度适用于数据库的封装。</p><p>简单点说，数据结构就是把一堆数据，按照某种格式揉成一坨。</p><p>大家喜欢吃宫保鸡丁吗？</p><p>反正二哥挺喜欢这道菜的。我就以宫保鸡丁为例，来讲一讲数据结构吧。维基百科上是这样定义的。</p><p>宫保鸡丁（英语：Kung Pao chicken或Kung-Pao Chicken），又称宫爆鸡丁，呈糊辣荔枝味，源于黔菜、流传至鲁而后成于川菜的一道川味名菜。贵州、山东和四川三地对这道菜的做法不完全一样，称呼也有差异。贵州称为糊辣子鸡丁，山东则名为酱爆鸡丁，而四川是以宫保鸡丁为名的。</p><p>来，抽象下宫保鸡丁。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>struct KungPaoChicken {</span></span>
<span class="line"><span>  鸡肉 = []</span></span>
<span class="line"><span>  花生 = []</span></span>
<span class="line"><span>  葱段 = []</span></span>
<span class="line"><span>  花椒 = []</span></span>
<span class="line"><span>  辣椒 = []</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个结构体（struct 是 C 语言中的一个概念）就是一个自定义的数据结构，将很多不同的配料融合在了一起。对于计算机的数据结构来说，只不过是把这些配料换成了基本数据类型。</p><p>抽象完宫保鸡丁再来抽象一下二哥吧。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>class 二哥 {</span></span>
<span class="line"><span>  int age = 18;</span></span>
<span class="line"><span>  double 体重 =  65kg;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  void eat(宫保鸡丁) {</span></span>
<span class="line"><span>    体重 += 1kg;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>伪代码不是很严谨哈，大家理解这个意思就行了。</p><p>说到底，数据结构不过是一种抽象后的封装。像 Java，它之所以流行的一个很重要的原因，就是它提供了多种多样的、方便开发者调用的数据结构，比如说对数组的封装 ArrayList、对链表的封装 LinkedList、对哈希表的封装 HashMap、ConcurrentHashMap 等等。C 语言就没有这些，想用的话，就得自己封装。但 Java 和 C 语言的基本数据类型是一致的，int、float 这些都是相通的。</p><p>对于初学者来说，平常敲代码都是直接去调用数据结构的，是很少去想这些数据结构是怎么实现的。</p><p>当一个初学者向高级程序员迈进的时候，就必须得静下心来，去搞清楚 ArrayList 和 LinkedList 的内部实现，搞清楚之后就会明白，之所以它们在增删改查的时候性能上有差异，就是因为它们的内部使用了不同的数据结构所导致的。</p><p>经典的数据结构与算法都有哪些呢？比如说队列、栈、堆、二分查找、动态规划等等。</p><h2 id="二、什么是算法" tabindex="-1"><a class="header-anchor" href="#二、什么是算法"><span>二、什么是算法</span></a></h2><p>算法就是操作数据的一组方法。数据结构是为算法服务的，而算法想要体现出自己的价值，就必须得有数据结构这个载体。</p><p>它们俩就好像是一对恋人，离开了谁，都会孤单寂寞冷。</p><p>那一些初学者可能会有这样的疑惑：我数学成绩一般，学数据结构与算法会很吃力吗？</p><p>当然了，数据结构和算法离不开一些数学方面的推理和证明，比如说我们在分析某个算法的时间复杂度和空间复杂度时。但这个不需要去担心，只要你能保持高中时期的数学水准，就完全可以学好数据结构与算法。</p><h2 id="三、为什么要学习数据结构和算法" tabindex="-1"><a class="header-anchor" href="#三、为什么要学习数据结构和算法"><span>三、为什么要学习数据结构和算法</span></a></h2><p>你是不是觉得数据结构与算法，跟操作系统、计算机网络一样，都是脱离实际工作的知识，可能除了面试，这辈子都用不着？</p><p>就算不懂数据结构与算法，照样可以把 Java API、开发框架用得飞起？</p><p>首先，面试的确是要考数据结构与算法的。这是很多大厂的筛选要素之一。</p><p>这是因为校招的时候，参加面试的学生大多数都是没有实际项目经验的，公司只能通过考察这些基础知识来筛选。</p><p>大厂不怕你没有项目经验，而怕你没有长期发展的潜力。</p><p>所以，很多参加校招的同学，在面试前都会疯狂刷题的，至少会突击个 100 道左右的题目。</p><p>其次，实际工作当中肯定是会用到的。</p><p>举个例子，存储某个业务数据时，你打算用 ArrayList 还是 LinkedList，它们底层用的是哪种数据结构，增删改查上有哪些优缺点？</p><p>再比如，Redis 中的有序集合是用什么数据结构实现的？为什么要用跳表二不是二叉树呢？</p><p>不懂数据结构和算法，行得通吗？</p><p>还有，掌握了数据结构与算法，对阅读源码会有很大的帮助，因为很多时候，源码当中都会考量到不同数据结构之间的优点和缺点。</p><p>你比如说，HashMap 为什么在链表长度大于 8 的时候将其转为红黑树？为什么不能是二叉树？</p><p>总结一下。</p><p>我们学习数据结构与算法，并不是为了死记硬背几个知识点，我们的目的是建立时间复杂度、空间复杂度的意识，写出高质量的代码，提升编程技能，训练逻辑思维，从而获得更高的薪资回报。</p><p>为什么要学习数据结构与算法，我认为 3 点很重要：</p><p>1、写出性能更佳的代码。 2、算法是求解问题的计算步骤，而程序是用计算机可以理解的语言来描述的算法。 3、长期来看，思考能力是一个人非常重要的核心竞争力，而算法是为数不多能训练思考能力的途径之一。</p><p>是时候提升自己的内功了，这样怼人也会更自信，跳槽也不用畏畏缩缩了。</p><h2 id="四、硬核算法和数据结构学习资料" tabindex="-1"><a class="header-anchor" href="#四、硬核算法和数据结构学习资料"><span>四、硬核算法和数据结构学习资料</span></a></h2><h3 id="_1-视频" tabindex="-1"><a class="header-anchor" href="#_1-视频"><span><strong>1）视频</strong></span></a></h3><p>B 站上浙江大学的一个数据结构课非常不错，很系统很经典。每次看这些大学老师的讲课就越觉得考好大学很重要，很多学校的老师，在讲数据结构和算法的时候，自己都不知道自己在讲什么。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java/yitiaolong-e2812c94-5945-41ad-adcd-4dbb02fae8d5.png" alt="陈越姥姥数据结构课" tabindex="0" loading="lazy"><figcaption>陈越姥姥数据结构课</figcaption></figure><p>不得不说，陈越姥姥等人对数据结构和算法这个领域的知识理解是真的透彻，我在听这个课的时候感觉整个人都通透了。</p><p>视频地址：<a href="https://www.bilibili.com/video/BV1Kb41127fT" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1Kb41127fT</a></p><p>这里还有个同学在 GitHub 上整理这门课程的所有课件和作业，学习 Java 的小伙伴可以尝试用 Java 完成下作业。</p><blockquote><p>GitHub 地址：<a href="https://github.com/CYBruce/DataStructure_Algorithm_ZJU" target="_blank" rel="noopener noreferrer">https://github.com/CYBruce/DataStructure_Algorithm_ZJU</a></p></blockquote><h3 id="_2-书籍" tabindex="-1"><a class="header-anchor" href="#_2-书籍"><span><strong>2）书籍</strong></span></a></h3><p>入门阶段推荐陈小玉老师的《<a href="https://book.douban.com/book/subject/34785269/" target="_blank" rel="noopener noreferrer">趣学数据结构</a>》和《<a href="https://book.douban.com/subject/27109832/" target="_blank" rel="noopener noreferrer">趣学算法</a>》。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-2ac7da9b-e812-49d9-8012-5e2f792f87bf.png" alt="趣学数据结构" tabindex="0" loading="lazy"><figcaption>趣学数据结构</figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-18b8f9d6-cbfa-482f-80a0-57081e3616d8.png" alt="趣学算法" tabindex="0" loading="lazy"><figcaption>趣学算法</figcaption></figure><p>算法领域的经典参考书《<a href="https://book.douban.com/subject/19952400/" target="_blank" rel="noopener noreferrer">算法 4</a>》也非常值得推荐，里面的代码是用 Java 实现的，所以 Java 开发者可以直接选用这本书。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-766885af-dfac-452f-b110-c9ca89a0bb9a.png" alt="算法 4" tabindex="0" loading="lazy"><figcaption>算法 4</figcaption></figure><p>学霸型人才可以直接刷《<a href="https://book.douban.com/subject/20432061/" target="_blank" rel="noopener noreferrer">算法导论</a>》，严谨全面，可以直接拿来作为研究生阶段的算法课程教材。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-fc895095-927c-42a4-a934-f98371a6f376.png" alt="算法导论" tabindex="0" loading="lazy"><figcaption>算法导论</figcaption></figure><h3 id="_3-开源电子书" tabindex="-1"><a class="header-anchor" href="#_3-开源电子书"><span>3）开源电子书</span></a></h3><p>算法方面的开源电子书是真的非常多，这里推荐下《labuladong 的算法小抄》，仓库里面有句话我非常认同——“刷题刷题，刷的是题，培养的是思维”，这个仓库的优势就在于，它的解题思路很完备，我相信可以帮助到不少读者，至少在刷题的时候少走很多弯路。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-d573f369-7dff-47a3-9929-46044e419aa8.png" alt="labuladong 的算法小抄" tabindex="0" loading="lazy"><figcaption>labuladong 的算法小抄</figcaption></figure><blockquote><p>GitHub 地址：<a href="https://github.com/labuladong/fucking-algorithm" target="_blank" rel="noopener noreferrer">https://github.com/labuladong/fucking-algorithm</a></p></blockquote><p>当然了，考虑到有些小伙伴需要 PDF 版的，我也准备好了。直接长按识别/扫描下方二维码，关注后回复 「<strong>刷题</strong>」 下载这份 PDF 吧：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="扫码关注后回复「刷题」关键字" tabindex="0" loading="lazy"><figcaption>扫码关注后回复「刷题」关键字</figcaption></figure><p>除此之外，再给大家推荐三份高质量的刷题笔记，C/C++、Java、Go 版的全有了！同样可以通过上面的方式获取。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-6c0c84be-ba1c-48d0-8ea7-70ef66e04ff2.png" alt="三份高质量的刷题笔记" tabindex="0" loading="lazy"><figcaption>三份高质量的刷题笔记</figcaption></figure><p>以及<a href="https://javabetter.cn/zhishixingqiu/" target="_blank" rel="noopener noreferrer">二哥的 LeetCode 刷题笔记</a>，专门针对星球用户编写的。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/algorithm-20250102104344.png" alt="二哥的 LeetCode 刷题笔记" tabindex="0" loading="lazy"><figcaption>二哥的 LeetCode 刷题笔记</figcaption></figure><h3 id="_4-在线网站" tabindex="-1"><a class="header-anchor" href="#_4-在线网站"><span>4）在线网站</span></a></h3><blockquote><p>LeetCode题库：<a href="https://leetcode-cn.com/problemset/all/" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problemset/all/</a></p></blockquote><p>学习算法的套路非常简单，多看、多练，至于刷题，小伙伴们都知道要刷 LeetCode。只不过 LeetCode 上现在有两千多道题，而且有些题非常难，就算每天刷 10 道，也得刷半年以上。这显然不适合绝大多数的小伙伴，所以我们要找到核心，最重要的题集。</p><p>这里我给大家整理了 100 道面试高频算法题，大多数的小伙伴们按照这个路线去刷就足够应付面试了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-c4d31ba3-6d81-4617-a68b-81d935b2a106.png" alt="100 道面试高频算法题" tabindex="0" loading="lazy"><figcaption>100 道面试高频算法题</figcaption></figure><blockquote><p>VisuAlgo：<a href="https://visualgo.net/zh" target="_blank" rel="noopener noreferrer">https://visualgo.net/zh</a></p></blockquote><p>算法的难点在于，没办法在脑例子抽象出它的步骤，那 VisuAlgo 就是一个非常值得推荐的可视化算法网站。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-b0d17b5d-d13a-46aa-a8b0-6b16772a30a6.png" alt="VisuAlgo" tabindex="0" loading="lazy"><figcaption>VisuAlgo</figcaption></figure><h3 id="_5-付费专栏" tabindex="-1"><a class="header-anchor" href="#_5-付费专栏"><span>5）付费专栏</span></a></h3><p>小争哥在极客时间上开了一门《数据结构与算法之美》的付费专栏，风评非常不错，喜欢的小伙伴可以<a href="http://gk.link/a/11ijz" target="_blank" rel="noopener noreferrer">戳链</a>接去购买。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-705c33b5-b90e-49c7-a3bc-a1f3c4630a66.png" alt="数据结构与算法之美" tabindex="0" loading="lazy"><figcaption>数据结构与算法之美</figcaption></figure><h2 id="五、一点小心得" tabindex="-1"><a class="header-anchor" href="#五、一点小心得"><span>五、一点小心得</span></a></h2><p>最后来分享一些让你事半功倍的学习技巧。</p><h3 id="第一、边学边练" tabindex="-1"><a class="header-anchor" href="#第一、边学边练"><span>第一、边学边练</span></a></h3><p>想一想，上学期间，除了听老师上课，自习外，最多的是什么？</p><p>对了，考试。</p><p>大大小小的考试，可不只是为了检验成绩，而是将你学会的举一反三，将你不会的拉出来吊打，折磨，直到下次考试的时候更进一步。</p><p>其实不只是学数据结构与算法了，学习任何一门其他的课程都一样，只看只听是完全不中用的，至少要做笔记啊，要把作业给交了呀！</p><p>至于刷题嘛，适量即可，不要总去挑战最难的，容易迷茫。</p><h3 id="第二、多交流" tabindex="-1"><a class="header-anchor" href="#第二、多交流"><span>第二、多交流</span></a></h3><p>二哥有个老乡，阿秀，凭借自己的努力考上了研究生，并且在研究生阶段刷了很多题，最终上岸了字节。</p><p>在刷题的过程中，他可不只是自己默默地刷，还结交了很多朋友，看到别人的解法，总是忍不住留言切磋一番，没想到，竟然结识了很多朋友。</p><p>然后大家一起交流互动后，水平都有所提高。思维的碰撞，很重要！</p><h3 id="第三、循序渐进" tabindex="-1"><a class="header-anchor" href="#第三、循序渐进"><span>第三、循序渐进</span></a></h3><p>道理都懂，但最后坚持下来的总是寥寥无几。</p><p>很重要的一个原因就是，很多人急于求成，总想一嘴吃个大胖子，结果呢？</p><p>学习是逆人性的，不然某音可能就不会这么火了，因为刷视频的快感真的是爽的一塌糊涂。</p><p>所以，学习的时候一定要遵循循序渐进这个真理。</p><p>每天学习到一点，每周学习到两点，每个月学习到三点，在学与忘的过程中反复锤炼，聚少成多。久而久之，你就把知识沉淀成自己的啦。</p><p>祝顺利！</p><hr><p>GitHub 上标星 10000+ 的开源知识库《<a href="https://github.com/itwanger/toBeBetterJavaer" target="_blank" rel="noopener noreferrer">二哥的 Java 进阶之路</a>》第一版 PDF 终于来了！包括Java基础语法、数组&amp;字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳：<a href="https://javabetter.cn/overview/" target="_blank" rel="noopener noreferrer">太赞了，GitHub 上标星 10000+ 的 Java 教程</a></p><p>微信搜 <strong>沉默王二</strong> 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 <strong>222</strong> 即可免费领取。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,113),p=[r];function l(o,s){return t(),a("div",null,p)}const g=e(n,[["render",l],["__file","algorithm.html.vue"]]),b=JSON.parse('{"path":"/xuexiluxian/algorithm.html","title":"2025年最值得收藏的数据结构与算法学习路线（🔥）","lang":"zh-CN","frontmatter":{"star":true,"title":"2025年最值得收藏的数据结构与算法学习路线（🔥）","shortTitle":"数据结构与算法学习路线","category":["学习路线"],"tag":["学习路线"],"description":"如何系统地学习数据结构与算法？为了让你对数据结构和算法能有个全面的认识，我画了一张图，里面几乎涵盖了所有数据结构和算法书籍中都会讲到的知识点。","date":"2025-01-01T00:00:00.000Z","head":[["meta",{"name":"keywords","content":"算法,数据结构,学习路线"}],["meta",{"property":"og:url","content":"https://javabetter.cn/xuexiluxian/algorithm.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"2025年最值得收藏的数据结构与算法学习路线（🔥）"}],["meta",{"property":"og:description","content":"如何系统地学习数据结构与算法？为了让你对数据结构和算法能有个全面的认识，我画了一张图，里面几乎涵盖了所有数据结构和算法书籍中都会讲到的知识点。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-59f3bc36-4e6c-48c0-86e5-8afdd6165147.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-02T03:12:44.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"学习路线"}],["meta",{"property":"article:published_time","content":"2025-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-02T03:12:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2025年最值得收藏的数据结构与算法学习路线（🔥）\\",\\"image\\":[\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-59f3bc36-4e6c-48c0-86e5-8afdd6165147.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-220e86a7-fa5d-44a2-a560-3cb6cfa70ad0.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java/yitiaolong-e2812c94-5945-41ad-adcd-4dbb02fae8d5.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-2ac7da9b-e812-49d9-8012-5e2f792f87bf.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-18b8f9d6-cbfa-482f-80a0-57081e3616d8.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-766885af-dfac-452f-b110-c9ca89a0bb9a.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-fc895095-927c-42a4-a934-f98371a6f376.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-d573f369-7dff-47a3-9929-46044e419aa8.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-6c0c84be-ba1c-48d0-8ea7-70ef66e04ff2.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/algorithm-20250102104344.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-c4d31ba3-6d81-4617-a68b-81d935b2a106.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-b0d17b5d-d13a-46aa-a8b0-6b16772a30a6.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/algorithm-705c33b5-b90e-49c7-a3bc-a1f3c4630a66.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png\\"],\\"datePublished\\":\\"2025-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-02T03:12:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"一、什么是数据结构","slug":"一、什么是数据结构","link":"#一、什么是数据结构","children":[]},{"level":2,"title":"二、什么是算法","slug":"二、什么是算法","link":"#二、什么是算法","children":[]},{"level":2,"title":"三、为什么要学习数据结构和算法","slug":"三、为什么要学习数据结构和算法","link":"#三、为什么要学习数据结构和算法","children":[]},{"level":2,"title":"四、硬核算法和数据结构学习资料","slug":"四、硬核算法和数据结构学习资料","link":"#四、硬核算法和数据结构学习资料","children":[{"level":3,"title":"1）视频","slug":"_1-视频","link":"#_1-视频","children":[]},{"level":3,"title":"2）书籍","slug":"_2-书籍","link":"#_2-书籍","children":[]},{"level":3,"title":"3）开源电子书","slug":"_3-开源电子书","link":"#_3-开源电子书","children":[]},{"level":3,"title":"4）在线网站","slug":"_4-在线网站","link":"#_4-在线网站","children":[]},{"level":3,"title":"5）付费专栏","slug":"_5-付费专栏","link":"#_5-付费专栏","children":[]}]},{"level":2,"title":"五、一点小心得","slug":"五、一点小心得","link":"#五、一点小心得","children":[{"level":3,"title":"第一、边学边练","slug":"第一、边学边练","link":"#第一、边学边练","children":[]},{"level":3,"title":"第二、多交流","slug":"第二、多交流","link":"#第二、多交流","children":[]},{"level":3,"title":"第三、循序渐进","slug":"第三、循序渐进","link":"#第三、循序渐进","children":[]}]}],"git":{"createdTime":1648889747000,"updatedTime":1735787564000,"contributors":[{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":12.66,"words":3797},"filePathRelative":"xuexiluxian/algorithm.md","localizedDate":"2025年1月1日","excerpt":"<p>说出来还真有点不好意思。上学那时候傻，为了校招，硬着头皮刷《算法导论》、《编程珠玑》，还有 LeetCode，刷了小一年。</p>\\n<p>刷着忘着，忘着刷着，不刷怕考到，最后刷的秀发都稀疏了。</p>\\n<p>等找到了工作后才恍然大悟，原来当初根本不用那么辛苦。这不，刚好有小伙伴在《<a href=\\"https://javabetter.cn/zhishixingqiu/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">二哥的Java进阶之路</a>》知识星球上问我算法的学习路线，我就毫不保留地把我算法方面的学习经验分享出来，希望能给大家一点点启发和帮助。</p>"}');export{g as comp,b as data};
