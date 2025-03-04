import{_ as e,c as a,o as r,e as i}from"./app-ChTk1xp_.js";const t={},n=i('<p>有球友问二哥有没有安卓方面的学习路线，虽然二哥不是一名专业的安卓工程师，曾经也装模作样的学过一段时间的安卓，买过郭霖的《<a href="https://github.com/itwanger/JavaBooks#android" target="_blank" rel="noopener noreferrer">第一行代码安卓</a>》，目前应该已经出到第三版了，在业界还是挺有名望的。</p><p>虽然不是专业的安卓工程师，但给球友提供一份靠谱的学习路线，二哥还是有这个实力的，知道哪里好哪里坏，如果你是新手，那么下面的内容可以帮助你找到学习的线路；如果你是老手，这篇文章列出的内容也可以帮助你查漏补缺。如果各位有什么其他的建议，欢迎留言交流。</p><h2 id="推荐资料" tabindex="-1"><a class="header-anchor" href="#推荐资料"><span>推荐资料</span></a></h2><ul><li>1、<a href="https://github.com/itwanger/JavaBooks#android" target="_blank" rel="noopener noreferrer">第一行代码 Android（书籍）</a></li><li>2、<a href="https://www.androidperformance.com/" target="_blank" rel="noopener noreferrer">Android Tech And Perf（博客）</a></li><li>3、<a href="https://www.bilibili.com/video/BV19U4y1R7zV" target="_blank" rel="noopener noreferrer">2022 最新 Android 基础教程，从开发入门到项目实战（视频）</a></li><li>4、<a href="https://e.jd.com/30816230.html" target="_blank" rel="noopener noreferrer">关注 Android Jetpack开发：原理解析与应用实战（书籍，二哥写过推荐序）</a></li><li>5、<a href="https://e.jd.com/30622790.html" target="_blank" rel="noopener noreferrer">Flutter实战入门（书籍，二哥写过推荐序）</a></li></ul><h2 id="programming" tabindex="-1"><a class="header-anchor" href="#programming"><span>Programming</span></a></h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java"><span>Java</span></a></h3><p>Java 是 Android App 开发默认的语言, Android Framework 也是默认使用 Java 语言，熟练掌握 Java 语言是 Android 开发者的必备技能。</p><p>希望深入 Java 虚拟机的同学，也可以参考下面两本书：</p><ol><li>周志明的<a href="https://book.douban.com/subject/34907497/" target="_blank" rel="noopener noreferrer">《深入理解Java虚拟机（第3版）》</a></li><li>邓老师的 <a href="https://book.douban.com/subject/33390277/" target="_blank" rel="noopener noreferrer">《深入理解Android Java 虚拟机 ART》</a></li></ol><h3 id="kotlin" tabindex="-1"><a class="header-anchor" href="#kotlin"><span>Kotlin</span></a></h3><p>Google 几年前就开始走 “Kotlin First” 的路线，目前很多官方的文档和 Demo 都是使用 Kotlin 语言作为默认，Kotlin 的重要性不言而喻。</p><p>Google 官方也出了个<a href="https://clmirror.storage.googleapis.com/codelabs/java-to-kotlin-zh/index.html#0" target="_blank" rel="noopener noreferrer">“Refactoring to Kotlin”</a>的教程,其介绍如下：</p><blockquote><p>此 Codelab 的适用对象为任何使用 Java 并考虑将其项目迁移到 Kotlin 的开发者。我们将从数个 Java 类入手，引导您使用 IDE 将它们转换为 Kotlin。接着，我们会审视转换后的代码，研究如何加以改善，使其更符合使用习惯，同时避免常见错误</p></blockquote><h3 id="flutter" tabindex="-1"><a class="header-anchor" href="#flutter"><span>Flutter</span></a></h3><p><a href="https://github.com/flutter/flutter" target="_blank" rel="noopener noreferrer">Flutter</a> 作为 Google 的亲儿子，其官方的扶持力度大家有目共睹。</p><p>Flutter 的发展大家可以看一下 Gityuan 的这一篇<a href="http://gityuan.com/flutter/" target="_blank" rel="noopener noreferrer">Flutter 跨平台演进及架构开篇</a>,目前字节跳动的多个 App 已经接入 Flutter 进行混合开发。</p><h2 id="android-studio" tabindex="-1"><a class="header-anchor" href="#android-studio"><span>Android Studio</span></a></h2><h3 id="android-studio-ide-overview" tabindex="-1"><a class="header-anchor" href="#android-studio-ide-overview"><span>Android Studio IDE Overview</span></a></h3><p>Android Studio 作为 Android 默认的开发者工具，目前的版本更新已经解决了诸多之前的性能问题，虽然目前对硬件资源的要求仍然比较高，但是一旦你接受了这个设定，真香预警！</p><p>AS 主要需要熟悉下面几点</p><ol><li>AS 快捷键</li><li>AS 插件</li><li>AS Profile （内存、CPU、IO、NetWork）</li></ol><h3 id="project-structure" tabindex="-1"><a class="header-anchor" href="#project-structure"><span>Project Structure</span></a></h3><p>熟悉各种项目的目录结构，资源文件、Gradle 文件</p><h2 id="android-基础知识" tabindex="-1"><a class="header-anchor" href="#android-基础知识"><span>Android 基础知识</span></a></h2><h3 id="四大组件" tabindex="-1"><a class="header-anchor" href="#四大组件"><span>四大组件</span></a></h3><p>这部分不必做过多的解释，下面列出的就是大家熟悉的 Android 四大组件，Android 开发的基础</p><ol><li>Activity — Activity Lifecycle, Tasks &amp; Back Stack</li><li>Service</li><li>Broadcast Receiver</li><li>Content Provider</li></ol><h3 id="intents" tabindex="-1"><a class="header-anchor" href="#intents"><span>Intents</span></a></h3><ol><li>Types of Intent - Implicit, Explicit</li><li>Intent Filter</li></ol><h3 id="static-user-interface" tabindex="-1"><a class="header-anchor" href="#static-user-interface"><span>Static User Interface</span></a></h3><ol><li>View — Button, ImageView, TextView, EditText, and etc :这是开发中会遇到的常用的组件，许多复杂的布局都是用简单基础的 View 组合而成</li><li>ViewGroup - LinearLayout, RelativeLayout, FrameLayout:三大传统布局，适用于不同的场合</li><li>ConstraintLayout : Google 新推的布局，目前已经取代 RelativeLayout 成为默认的 App 布局，具体使用可以参考<a href="https://developer.android.google.cn/reference/android/support/constraint/ConstraintLayout?hl=zh-cn" target="_blank" rel="noopener noreferrer">官方文档</a></li></ol><h3 id="dynamic-user-interface" tabindex="-1"><a class="header-anchor" href="#dynamic-user-interface"><span>Dynamic User Interface</span></a></h3><ol><li>RecyclerView - 列表类的布局首选控件，性能相对 ListView 要好一些，功能也比 ListView 要多一些</li><li>ViewPager</li><li>Spinner</li></ol><h3 id="customview" tabindex="-1"><a class="header-anchor" href="#customview"><span>CustomView</span></a></h3><p>Android 默认的布局很多时候都没法满足设计的需求，这时候就需要自定义 View，你需要掌握下面几个知识点的使用</p><ol><li>Canvas</li><li>Bitmap</li><li>Paint</li></ol><h3 id="ui-resources" tabindex="-1"><a class="header-anchor" href="#ui-resources"><span>UI Resources</span></a></h3><p>相比 HardCode，使用资源文件会让代码的可修改性更高</p><ol><li>Drawables</li><li>String</li><li>Styles</li></ol><h3 id="fragments" tabindex="-1"><a class="header-anchor" href="#fragments"><span>Fragments</span></a></h3><p>许多人提倡 App 使用 单 Activity + 多个 Fragment 的组合，可见 Fragment 在开发中的重要性，但是 Fragment 的管理又是一门技术，Fragment 的坑，只能在实际开发中慢慢填平了，不过下面的 Fragment 基础还是要牢固</p><ol><li>Fragment Lifecycle</li><li>Fragment Manager</li></ol><h3 id="support-user-interface" tabindex="-1"><a class="header-anchor" href="#support-user-interface"><span>Support User Interface</span></a></h3><p>这里列的同样是一些功能组件，需要知道这是什么东西，基本的用法</p><ol><li>ProgressBar - 进度条</li><li>Dialogs - 弹框</li><li>Toast &amp; Snackbar - 提示</li></ol><h3 id="storage" tabindex="-1"><a class="header-anchor" href="#storage"><span>Storage</span></a></h3><p>App 开发不免要和文件打交道，文件的读写、存储都是必不可少的，下面列出了几种 Android 中存储相关的知识点</p><ol><li>Shared Preferences - 适合存储字段</li><li>File Systems - 文件存储</li><li>Database — RoomDB - 数据库存储，RoomDB 是 Google 新推出的数据库解决方案(在 AndroidX 中)，具体使用可以参考<a href="https://developer.android.google.cn/reference/androidx/room/RoomDatabase.html" target="_blank" rel="noopener noreferrer">官方文档</a></li></ol><h3 id="build" tabindex="-1"><a class="header-anchor" href="#build"><span>Build</span></a></h3><p>Android App 默认使用 Gradle 进行编译，关于 Gradle 的使用必须要熟悉，以及如何区分开发版本和 Release 版本，以及国内特有的多渠道打包技术、以及 ASM 等</p><ol><li>Gradle</li><li>Debug / Release Configuration</li><li>多渠道打包</li><li>ASM</li></ol><h3 id="threading" tabindex="-1"><a class="header-anchor" href="#threading"><span>Threading</span></a></h3><p>理解 Thread 非常重要，Android App 只有一个主线程，其余的我们称之为工作线程，我们的很多工作需要再工作线程和主线程直接切换，如何高效创建和释放线程、线程池、线程间通信、Message-Looper-Handler 模型这些知识点都要了熟于心，另外进阶的话 Binder 通信也是需要掌握的知识</p><ol><li>Threads</li><li>Handler / Looper / Message / MessageQueue</li><li>AIDL / Binder</li></ol><h2 id="debugging" tabindex="-1"><a class="header-anchor" href="#debugging"><span>Debugging</span></a></h2><p>这里列举了一些 Debug 的基本手段，实际开发中遇到具体问题的时候一般都会用到，不过有的可能入手难度要高一些，需要花时间去掌握。Debug 工具除了下面这几个还有很多</p><ol><li>Memory profiling - MAT，AS Memory Profile</li><li>Logging - Log 包含非常丰富的信息，可以帮助我们还原现场</li><li>Systrace - Systrace 工具可以查看一段时间内手机系统各个进程的运行状态，具体使用可以参考我博客的 <a href="https://www.androidperformance.com/2019/05/28/Android-Systrace-About/" target="_blank" rel="noopener noreferrer">Systrace 系列教程</a></li><li>Exceptions - 各种异常，保证程序的健壮性</li><li>Error Handling - Error 是必须要解决的问题，一般会导致 App 直接闪退，需要非常重视</li></ol><h2 id="memory-leak" tabindex="-1"><a class="header-anchor" href="#memory-leak"><span>Memory Leak</span></a></h2><p>内存泄漏是一个很大的专题，包括 Java 内容泄漏和 Native 内存泄漏，涉及的知识点非常多，可以单独拿出来做一个大的知识栈。一般来说， Java 内存泄漏会比较好检测和修复，但是 Native 内存泄漏就会比较难。</p><ol><li>Detecting and Fixing Memory Leaks - 内存泄漏检测和修复，是一个比较大的工程，可以参考 LeakCanary、Matrix 等开源工具</li><li>Context - 使用不当会造成该释放的对象没有释放造成内存泄漏</li><li>Native Memory Leaks</li></ol><h2 id="_3rd-party-library" tabindex="-1"><a class="header-anchor" href="#_3rd-party-library"><span>3rd Party Library</span></a></h2><p>经典的第三方类库，可以大幅节约我们的开发时间</p><ol><li>Image Loading - Glide, Picasso</li><li>Dependency Injection - Dagger</li><li>Networking - Fast Android Networking Library, Retrofit</li><li>MultiThreading - RxJava, Coroutines</li></ol><h2 id="data-format" tabindex="-1"><a class="header-anchor" href="#data-format"><span>Data Format</span></a></h2><p>常见的一些数据保存流格式</p><ol><li>JSON — GSON</li><li>Flat Buffer</li><li>Protocol Buffer</li></ol><h2 id="android-jetpack" tabindex="-1"><a class="header-anchor" href="#android-jetpack"><span>Android Jetpack</span></a></h2><p><a href="https://developer.android.google.cn/jetpack?hl=zh-cn" target="_blank" rel="noopener noreferrer">Jetpack</a> 是 Google 推出的一套库、工具和指南，可帮助开发者更轻松地编写优质应用。这些组件可帮助您遵循最佳做法、让您摆脱编写样板代码的工作并简化复杂任务，以便您将精力集中放在所需的代码上。Jetpack 包含与平台 API 解除捆绑的 androidx.* 软件包库。这意味着，它可以提供向后兼容性，且比 Android 平台的更新频率更高，以此确保您始终可以获取最新且最好的 Jetpack 组件版本。</p><p>这部分推荐一个读者的书《<a href="https://e.jd.com/30816230.html" target="_blank" rel="noopener noreferrer">关注 Android Jetpack开发：原理解析与应用实战</a>》，二哥为此写过推荐语，封面可见。</p><ol><li>Foundation Components — AppCompat, Android KTX, Multidex</li><li>Architecture Components — LiveData, ViewModel, DataBinding, Paging, Work Manager, Navigation</li><li>Behaviour Components - Download Manager, Media Playback, Notification, Permissions, Preference, Sharing, Slice</li><li>UI Component - Animation &amp; Transition, Android Auto, Emoji, Palette, Android TV, Android Wear</li></ol><h2 id="architecture" tabindex="-1"><a class="header-anchor" href="#architecture"><span>Architecture</span></a></h2><p>传统的开发架构，没有绝对的哪个好哪个不好，只有哪个适合哪个不适合，下面三种你都应该知道并有一定的了解</p><ol><li>MVVM - MVVM 是 Model-View-ViewModel的简写。它本质上就是 MVC 的改进版。MVVM 就是将其中的 View 的状态和行为抽象化，让我们将视图 UI 和业务逻辑分开</li><li>MVI ？</li><li>MVP - MVP 从更早的 MVC 框架演变过来，与 MVC 有一定的相似性：Controller/Presenter 负责逻辑的处理，Model 提供数据，View 负责显示</li></ol><h2 id="unit-testing" tabindex="-1"><a class="header-anchor" href="#unit-testing"><span>Unit Testing</span></a></h2><ol><li>Local Unit Testing</li><li>Instrumentation Testing</li></ol><h2 id="firebase" tabindex="-1"><a class="header-anchor" href="#firebase"><span>Firebase</span></a></h2><p>Firebase 国内很多开发者用不到，这里简单看一下即可（说不定哪天国内就可以用了呢）</p><ol><li>FCM</li><li>Crashlytics</li><li>Analytics</li><li>Remote Config</li><li>App Indexing</li><li>Dynamic Link</li></ol><h2 id="security" tabindex="-1"><a class="header-anchor" href="#security"><span>Security</span></a></h2><p>安全方面接触毕竟多的应该是加密、解密、混淆等，毕竟用户数据安全大于一切，不重视这个欧盟会教你做人</p><ol><li>Encrypt / Decrypt</li><li>Proguard</li><li>R8</li></ol><h2 id="app-release" tabindex="-1"><a class="header-anchor" href="#app-release"><span>App Release</span></a></h2><p>应用发布相关的知识，国内还得加上多渠道打包、插件化</p><ol><li>.keystore file</li><li>App Bundle</li><li>Playstore</li><li>多渠道打包</li><li>插件化</li></ol><h2 id="keep-learning-and-improving" tabindex="-1"><a class="header-anchor" href="#keep-learning-and-improving"><span>Keep Learning and Improving</span></a></h2><p>作为一个有进取心的 Android 开发者，拥有自己的技术栈和规划非常重要，技术栈确保你有足够的市场竞争力，从而形成护城河；技术规划则可以给你一个明确的学习目标。卸载抖音、微博、斗鱼、游戏吧，做好一年的规划，<strong>Keep Learning and Improving</strong> ，共勉</p><p>如果你苦于没有好的时间管理方法，可以参考这个视频<a href="https://www.bilibili.com/video/av79348217" target="_blank" rel="noopener noreferrer">我是怎么做周计划 | 生产力提升 | 我的方法</a>,这个是我熟悉的一个大佬的工作学习方法实践，推荐给大家</p><blockquote><p>凡是预则立，不预则废，年度计划太长，日计划又太短。实践下来发现以周为单位做时间管理（时间管理）最靠谱，既考虑了短期又考虑了长期，可以使自己长期坚持做某事，也有一定的时间长度用来甄有价值的事情。</p></blockquote><hr><p>GitHub 上标星 10000+ 的开源知识库《<a href="https://github.com/itwanger/toBeBetterJavaer" target="_blank" rel="noopener noreferrer">二哥的 Java 进阶之路</a>》第一版 PDF 终于来了！包括Java基础语法、数组&amp;字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳：<a href="https://javabetter.cn/overview/" target="_blank" rel="noopener noreferrer">太赞了，GitHub 上标星 10000+ 的 Java 教程</a></p><p>微信搜 <strong>沉默王二</strong> 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 <strong>222</strong> 即可免费领取。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',92),l=[n];function o(d,s){return r(),a("div",null,l)}const c=e(t,[["render",o],["__file","android.html.vue"]]),h=JSON.parse('{"path":"/xuexiluxian/android.html","title":"2025年最新Android安卓学习路线（建议收藏🔥）","lang":"zh-CN","frontmatter":{"title":"2025年最新Android安卓学习路线（建议收藏🔥）","shortTitle":"Android学习路线","description":"Android 安卓学习路线（建议收藏🔥）","date":"2025-01-01T00:00:00.000Z","category":["学习路线"],"tag":["学习路线"],"head":[["meta",{"name":"keywords","content":"Android,Performance,AndroidPerformance,性能,优化,性能优化,Perf,Flutter,Linux,AndroidFramework,Framework,Android Performance,Flutter,Kotlin,Memory,内存,流畅性,卡顿,响应速度,Jank,Smooth,Android Framework,ANR,Crash,Dalvik,ART,Jetpack,Compose"}],["meta",{"property":"og:url","content":"https://javabetter.cn/xuexiluxian/android.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"2025年最新Android安卓学习路线（建议收藏🔥）"}],["meta",{"property":"og:description","content":"Android 安卓学习路线（建议收藏🔥）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-02T03:12:44.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"学习路线"}],["meta",{"property":"article:published_time","content":"2025-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-02T03:12:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2025年最新Android安卓学习路线（建议收藏🔥）\\",\\"image\\":[\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png\\"],\\"datePublished\\":\\"2025-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-02T03:12:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"推荐资料","slug":"推荐资料","link":"#推荐资料","children":[]},{"level":2,"title":"Programming","slug":"programming","link":"#programming","children":[{"level":3,"title":"Java","slug":"java","link":"#java","children":[]},{"level":3,"title":"Kotlin","slug":"kotlin","link":"#kotlin","children":[]},{"level":3,"title":"Flutter","slug":"flutter","link":"#flutter","children":[]}]},{"level":2,"title":"Android Studio","slug":"android-studio","link":"#android-studio","children":[{"level":3,"title":"Android Studio IDE Overview","slug":"android-studio-ide-overview","link":"#android-studio-ide-overview","children":[]},{"level":3,"title":"Project Structure","slug":"project-structure","link":"#project-structure","children":[]}]},{"level":2,"title":"Android 基础知识","slug":"android-基础知识","link":"#android-基础知识","children":[{"level":3,"title":"四大组件","slug":"四大组件","link":"#四大组件","children":[]},{"level":3,"title":"Intents","slug":"intents","link":"#intents","children":[]},{"level":3,"title":"Static User Interface","slug":"static-user-interface","link":"#static-user-interface","children":[]},{"level":3,"title":"Dynamic User Interface","slug":"dynamic-user-interface","link":"#dynamic-user-interface","children":[]},{"level":3,"title":"CustomView","slug":"customview","link":"#customview","children":[]},{"level":3,"title":"UI Resources","slug":"ui-resources","link":"#ui-resources","children":[]},{"level":3,"title":"Fragments","slug":"fragments","link":"#fragments","children":[]},{"level":3,"title":"Support User Interface","slug":"support-user-interface","link":"#support-user-interface","children":[]},{"level":3,"title":"Storage","slug":"storage","link":"#storage","children":[]},{"level":3,"title":"Build","slug":"build","link":"#build","children":[]},{"level":3,"title":"Threading","slug":"threading","link":"#threading","children":[]}]},{"level":2,"title":"Debugging","slug":"debugging","link":"#debugging","children":[]},{"level":2,"title":"Memory Leak","slug":"memory-leak","link":"#memory-leak","children":[]},{"level":2,"title":"3rd Party Library","slug":"_3rd-party-library","link":"#_3rd-party-library","children":[]},{"level":2,"title":"Data Format","slug":"data-format","link":"#data-format","children":[]},{"level":2,"title":"Android Jetpack","slug":"android-jetpack","link":"#android-jetpack","children":[]},{"level":2,"title":"Architecture","slug":"architecture","link":"#architecture","children":[]},{"level":2,"title":"Unit Testing","slug":"unit-testing","link":"#unit-testing","children":[]},{"level":2,"title":"Firebase","slug":"firebase","link":"#firebase","children":[]},{"level":2,"title":"Security","slug":"security","link":"#security","children":[]},{"level":2,"title":"App Release","slug":"app-release","link":"#app-release","children":[]},{"level":2,"title":"Keep Learning and Improving","slug":"keep-learning-and-improving","link":"#keep-learning-and-improving","children":[]}],"git":{"createdTime":1662542946000,"updatedTime":1735787564000,"contributors":[{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":9.55,"words":2866},"filePathRelative":"xuexiluxian/android.md","localizedDate":"2025年1月1日","excerpt":"<p>有球友问二哥有没有安卓方面的学习路线，虽然二哥不是一名专业的安卓工程师，曾经也装模作样的学过一段时间的安卓，买过郭霖的《<a href=\\"https://github.com/itwanger/JavaBooks#android\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">第一行代码安卓</a>》，目前应该已经出到第三版了，在业界还是挺有名望的。</p>\\n<p>虽然不是专业的安卓工程师，但给球友提供一份靠谱的学习路线，二哥还是有这个实力的，知道哪里好哪里坏，如果你是新手，那么下面的内容可以帮助你找到学习的线路；如果你是老手，这篇文章列出的内容也可以帮助你查漏补缺。如果各位有什么其他的建议，欢迎留言交流。</p>"}');export{c as comp,h as data};
