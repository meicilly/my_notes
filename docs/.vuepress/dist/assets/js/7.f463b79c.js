(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{422:function(r,a,t){r.exports=t.p+"assets/img/sparkjiagou.3a3e43e0.png"},440:function(r,a,t){"use strict";t.r(a);var e=t(65),s=Object(e.a)({},(function(){var r=this,a=r.$createElement,e=r._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h3",{attrs:{id:"spark"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spark"}},[r._v("#")]),r._v(" "),e("center",[r._v("spark")])],1),r._v(" "),e("h3",{attrs:{id:"_1-1-spark的运行架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-spark的运行架构"}},[r._v("#")]),r._v(" 1.1 spark的运行架构")]),r._v(" "),e("p",[r._v("Spark框架的核心是一个计算引擎,整体来说,它采用了标准的master-slave结构。\n如图所示，它展示了有个Spark执行时的基本结构。图形中的Driver表示master,负责管理集群中的作业任务调度。图形中的Executor则是slave,负责实际执行任务。\n"),e("img",{attrs:{src:t(422),alt:"spark运行流程图",title:"spark运行架构图"}})]),r._v(" "),e("h3",{attrs:{id:"_1-2-spark的核心组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-spark的核心组件"}},[r._v("#")]),r._v(" 1.2 spark的核心组件")]),r._v(" "),e("h4",{attrs:{id:"_1-2-1-driver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-driver"}},[r._v("#")]),r._v(" 1.2.1 Driver")]),r._v(" "),e("p",[r._v("Spark驱动器节点,用于执行Spark任务中的main方法,负责实际代码的执行工作。Driver在Spark作业执行时主要fuze")]),r._v(" "),e("ul",[e("li",[r._v("将用户程序转换为作业(job)")]),r._v(" "),e("li",[r._v("在Executor之间调度任务(task)")]),r._v(" "),e("li",[r._v("跟踪Executor的执行情况")]),r._v(" "),e("li",[r._v("通过UI展示查询运行情况")])]),r._v(" "),e("p",[r._v("实际上,我们无法准确地描述Driver的定义,因为在整个的编程过程中没有看到任何有关Driver的字眼。所以简单理解,所谓的Driver就是驱使整个应用运用起来的程序,也称为Druver类。")]),r._v(" "),e("h4",{attrs:{id:"_1-2-2-executor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-executor"}},[r._v("#")]),r._v(" 1.2.2 Executor")]),r._v(" "),e("p",[r._v("Spark Executor是集群中工作节点(Worker)中的一个JVM进程")])])}),[],!1,null,null,null);a.default=s.exports}}]);