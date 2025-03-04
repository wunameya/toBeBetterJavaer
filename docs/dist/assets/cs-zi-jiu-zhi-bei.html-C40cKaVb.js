import{_ as e,c as t,o as a,e as r}from"./app-ChTk1xp_.js";const n={},i=r('<h1 id="cs自救指北" tabindex="-1"><a class="header-anchor" href="#cs自救指北"><span>CS自救指北</span></a></h1><h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h3><p>谈到电院计算机系，身边同学的反应大多是“大佬云集”的“最好专业”。从工科平台、电院平台分流的分数看，从转入计算机系的要求上看，以及前一年半大平台培养的学积分来看，计算机系确实如此。在这样的大背景下，不少同学把进入计算机系作为大学前一年半的目标，自认为进入电院计算机系就可以享受最好的教育资源，为未来的发展铺平道路。</p><p>然而，理想很丰满，现实很残酷。当计算机系的同学发现一些专业课老师上课连 PPT 都念不利索；当课程的大作业是脱离课程内容的“空中楼阁”，缺乏有效的指导，不知如何下手时；当一些“大佬”一边在同学面前吐槽老师讲的不行，而一边又向老师反映讲课“太慢了”时，我不由地怀疑：计算机系真的是完美的选择吗？</p><p>一方面，陈旧的课程大纲限制了老师的教学效果，也无法让同学掌握足够的计算机思维和编程能力。另一方面，对实操的轻视，对科研的追求，也加重了价值观的单一和内卷。如何在计算机系通过自学打下扎实的基础，又如何在内卷的氛围中调整心态，这是本篇 CS 自救指北所探讨的两大问题。</p><p>文章标题叫 CS 自救指北，这意味着文中所分享的经验只是我的个人经验，也并不是一条通往“成功”的“捷径”。具体怎么操作，还是要看大家的姿势水平了。</p><p>我是 18 级工科平台分流进入计算机系的学生（非致远工科）。写这篇文章时正值大二下学期。</p><h3 id="课程" tabindex="-1"><a class="header-anchor" href="#课程"><span>课程</span></a></h3><p>前一年半有平台课程序设计 C++，数据结构（3 学分计入成绩，但上 4 学分课时），专业课问题求解与实践（我上的是英文班）。总的来说，这些课程的质量都比较有保证，讲解浅显易懂，课程实践和内容紧密结合。致远工科的同学还有暑假的编程综合实践可以选修。</p><p>大二下总共有五门专业相关的课，分别是计算机科学数学基础、算法与复杂性、计算机系统结构、计算机组成、操作系统。以及一门专业选修课编译原理。这些专业课在我看来存在一些不足之处。</p><p>系统相关课程和实际应用有较大断层。</p><ul><li>操作系统课程重在介绍概念，并不会讲现代操作系统的具体实现。</li><li>计算机组成（披着组成外皮的嵌入式）学 8086 汇编，几十年之前的东西。学这些内容虽然有其价值，但恐怕对现在的计算机系同学帮助不大。</li></ul><p>部分课程的大作业和课程内容有一定距离。</p><ul><li>操作系统（英文班）的课程作业是魔改 Android (Linux) 内核。事实上，整个课程中和 Linux 相关的内容并不多，在实验方面也缺乏指导。一些同学之前根本没有使用过 *nix 系统，在实验环境配置的过程中碰到了很多问题。而实验的内容需要大量阅读 Linux 内核的源代码，在课程之中也缺乏这方面的指导。总的来说，这个项目对于没有接触过内核开发的同学也有一定难度，并且容易写出不安全的代码。</li><li>系统结构（英文班）讲完 MIPS 汇编后，直接用 CS:APP 的 lab 作为大作业。两者差距巨大，课程内容和作业脱节明显。</li></ul><p>就我个人经验而言，这样的课程设计只会让强者更强，弱者更弱。毕竟大佬总能根据已有的知识迅速做完这些大作业，而水平稍差一点的同学会在各种地方卡住。在这样的背景之下，了解如何在 CS 自救就显得尤为重要。</p><h3 id="自救指北" tabindex="-1"><a class="header-anchor" href="#自救指北"><span>自救指北</span></a></h3><h4 id="理解计算机系统" tabindex="-1"><a class="header-anchor" href="#理解计算机系统"><span>理解计算机系统</span></a></h4><p>Matt Might 在 <a href="http://matt.might.net/articles/what-cs-majors-should-know/" target="_blank" rel="noopener noreferrer">What every computer science major should know</a> 中谈到如何学体系结构时，认为 “Computer scientists should understand a computer from the transistors up.” 然而，在我看来，CS 的专业课教学距离这个目标还有一定距离。之前也提到了 CS 一些专业课的现状。在此我给出不同阶段的建议。</p><p><strong>基本认识计算机系统</strong> 大一上学期可以尝试自学 <a href="https://www.nand2tetris.org/" target="_blank" rel="noopener noreferrer">nand2tetris</a>。这门课程难度不大，硬件部分不需要太多的前序知识，软件部分用基本的 C++ 也足够了。在这门课程中，学生需要从电路开始搭建各种硬件模块，组成 CPU；接着手写汇编器、VM 和编译器，在 CPU 上运行自己写的程序。在这一过程中，学生可以了解如何从晶体管一步步造出计算机，对计算机系统有基本的认识。</p><p><strong>深入理解计算机系统</strong> 大一下学期可以开始自学<a href="http://csapp.cs.cmu.edu/" target="_blank" rel="noopener noreferrer">《深入理解计算机系统》</a> (CS:APP)。我推荐英文的第三版（写这篇文章时候的最新版）。书上的内容通俗易懂，辅以课后练习和 lab 可以达到更好的学习效果。CS:APP 涵盖了 CS 某三门专业课的基本内容。2, 3, 6 章的汇编语言、内存层级涵盖了计算机组成的一部分内容。第 4 章 Y86-64 处理器对应计算机系统结构的课程的前半部分。6, 9, 12 章关于虚拟内存和并发编程涵盖了操作系统课程的一部分内容。全书通过对 Intel x86(_64) 架构的案例分析，从底层硬件到上层软件，整体介绍了一个计算机系统。从这个角度来说，大一下开始学习这些内容，不仅可以了解 Intel x86 这一常用的计算机系统，也能弥补专业课和基础课之间的断层。</p><h4 id="多动手" tabindex="-1"><a class="header-anchor" href="#多动手"><span>多动手</span></a></h4><p>一些课程的大作业总体来说难度不大，可以通过下面的方式增强自己的动手能力。下面一些拓展性的项目都是真实的课程大作业，因此也比较容易找到相关的指导和测试框架。这可以大大减少不必要的体力工作，把精力完全放在提升思维水平上。</p><ul><li>数据结构：自己把各种数据结构实现一遍。除此之外，可以试着造一个 B+Tree （<a href="https://github.com/peterzheng98/CS158-DS_Project" target="_blank" rel="noopener noreferrer">2018 工科致远大作业</a>）。</li><li>计算机系统结构：可以通过 C++ 模拟电路的方式做一个功能完全的 MIPS / RISC-V 处理器。（工科致远/ACM 班暑期<a href="https://acm.sjtu.edu.cn/wiki/PPCA_2019" target="_blank" rel="noopener noreferrer">编程综合实践</a>项目）。</li><li>操作系统：可以自己写一个操作系统，比如 JOS（软院大三操作系统课 / <a href="https://pdos.csail.mit.edu/6.828/2019/schedule.html" target="_blank" rel="noopener noreferrer">MIT 6.828</a>），或者 xv6（MIT 6.828）。与此同时可以阅读 <a href="http://pages.cs.wisc.edu/~remzi/OSTEP/" target="_blank" rel="noopener noreferrer">OSTEP</a>。OSTEP 不仅基本涵盖了操作系统课程的内容，还通过案例详细说明了为什么要这么做，不像课程一般泛泛而谈。我看完觉得很有收获。</li></ul><h4 id="编程语言与工具" tabindex="-1"><a class="header-anchor" href="#编程语言与工具"><span>编程语言与工具</span></a></h4><p>我曾遇到过不少计算机相关专业同学的提问：如何学 Python / Java / **** 语言？事实上，编程语言只是一种工具；学习一门语言，只是计算机科学学习过程中的一小部分。更为重要的是：如何运用这门语言解决问题？如何通过编程实践来学习知识、实现自己的 idea？可以说，编程语言、编程工具的掌握是计算机科学学习的基础。我们可以用这些工具来解决课程大作业、工作和科研中碰到的问题。</p><p>我学习一门新编程语言的方法很简单，就是用这门语言实现一个算法或做一个项目。虽然这种学习方法忽视了一门编程语言的语法等细节，但通过项目实践，我可以掌握语言在特定领域的运用。毕竟编程语言是为程序员的需求服务的。</p><p>在 <a href="https://missing.csail.mit.edu/" target="_blank" rel="noopener noreferrer">The Missing Lecture of CS</a> 中可以找到很多 CS 学生常用的工具的教程。通常来说这些工具越用越熟练，在课程的大作业中常常会用到。</p><h3 id="调整心态" tabindex="-1"><a class="header-anchor" href="#调整心态"><span>调整心态</span></a></h3><p>到大二下的时候，你或许会发现身边的同学大多都加入了一个实验室干活。有些同学甚至大二上就已经投出了第一篇 paper。进实验室、保研、出国 PhD，这些选择似乎成为了计算机系同学的唯一出路。在做这些选择之前，不如问问自己：我的目标是什么？</p><p>随着经历的丰富，我渐渐发现自己对科研没有太大的热情。在大二上学期，我也尝试加入了一个实验室。但由于自身水平不够，而大二课程太多，我也没有大量时间能在实验室干活，半年后，我选择了退出。</p><p>我曾经因为自己的高考排名陷入恐惧之中，害怕被同龄人摁在地上摩擦，害怕学不好高数被退学。当我放下对学积分的执念，去追求知识本身带来的快乐时，我的生活又重新焕发了生机。</p><p>我一直在尝试提升自己的知识水平，在学习各种知识的过程中找到自己喜爱的东西。在我看来，一些同学在高考结束后就失去了前进的动力，依然延续着高中的思维，被动地接受知识。</p><p>最后，我想大学生活还是佛系一点好。有人在内卷里失去了自己最宝贵的品质；有人在追随他人的道路上奋力奔跑。不论如何，年轻永远是最宝贵的财富。人生的路很长，我也不过在<a href="https://dev.bbs.sjtu.edu.cn/t/topic/853/28" target="_blank" rel="noopener noreferrer">从一个坑跳到另一个坑</a>。只要把这些过往都当成一份宝贵的经历，便能释然。不去追求成功，而去追求自身的成长，找到自己可以持续投入的东西，这或许是我们大学四年的长久目标。</p>',33),p=[i];function o(s,h){return a(),t("div",null,p)}const c=e(n,[["render",o],["__file","cs-zi-jiu-zhi-bei.html.vue"]]),d=JSON.parse('{"path":"/sidebar/sjtu/fang-tan-ji/ben-ke-sheng-zhuan-ye-jie-shao-todo/cs-zi-jiu-zhi-bei.html","title":"CS自救指北","lang":"zh-CN","frontmatter":{"description":"By CXS(https://github.com/skyzh)","head":[["meta",{"property":"og:url","content":"https://javabetter.cn/sidebar/sjtu/fang-tan-ji/ben-ke-sheng-zhuan-ye-jie-shao-todo/cs-zi-jiu-zhi-bei.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"CS自救指北"}],["meta",{"property":"og:description","content":"By CXS(https://github.com/skyzh)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-28T13:37:17.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:modified_time","content":"2024-11-28T13:37:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CS自救指北\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-28T13:37:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":3,"title":"课程","slug":"课程","link":"#课程","children":[]},{"level":3,"title":"自救指北","slug":"自救指北","link":"#自救指北","children":[]},{"level":3,"title":"调整心态","slug":"调整心态","link":"#调整心态","children":[]}],"git":{"createdTime":1732801037000,"updatedTime":1732801037000,"contributors":[{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":8.98,"words":2693},"filePathRelative":"sidebar/sjtu/fang-tan-ji/ben-ke-sheng-zhuan-ye-jie-shao-todo/cs-zi-jiu-zhi-bei.md","localizedDate":"2024年11月28日","excerpt":"\\n<h3>前言</h3>\\n<p>谈到电院计算机系，身边同学的反应大多是“大佬云集”的“最好专业”。从工科平台、电院平台分流的分数看，从转入计算机系的要求上看，以及前一年半大平台培养的学积分来看，计算机系确实如此。在这样的大背景下，不少同学把进入计算机系作为大学前一年半的目标，自认为进入电院计算机系就可以享受最好的教育资源，为未来的发展铺平道路。</p>\\n<p>然而，理想很丰满，现实很残酷。当计算机系的同学发现一些专业课老师上课连 PPT 都念不利索；当课程的大作业是脱离课程内容的“空中楼阁”，缺乏有效的指导，不知如何下手时；当一些“大佬”一边在同学面前吐槽老师讲的不行，而一边又向老师反映讲课“太慢了”时，我不由地怀疑：计算机系真的是完美的选择吗？</p>"}');export{c as comp,d as data};
