### <center>4.1 集合</center>
 Scala的集合有三大类: 序列Seq,集Set,映射Map,所有的集合都扩展自Iterable特质。对于几乎所有的集合类,Scala都同时提供了可变和不可变的版本。
 
#### 4.1.1 数组
1. 不可变数组
    - 基本语法
   ```scala
    object ScalaCollection {
       def main(args: Array[String]): Unit = {
       //定义数组
       val arr01 = new Array[Int](4)
       println(arr01.length)
       // 数组赋值
       // 修改某个元素的值
       arr01(3) = 10
       println(arr01.mkString(","))
       val i = 10
       arr01(i/3) = 20
       arr01.update(0,1)
       println(arr01.mkString(","))
       //普通遍历
       for(i <- arr01){
        println(i)
       }
       //简化遍历
       def printx(elem:Int):Unit = {
         println(elem)
       }
       arr01.foreach(printx)
       arr01.foreach((x)=>{println(x)})_
    }
    }
   ```
   - 基本操作
   ```scala
        object ScalaCollection1 {
        def main(args: Array[String]): Unit = {
        val arr1 = Array(1,2,3,4)
        val arr2 = Array(5,6,7,8)
        // 添加数组元素，创建新数组
        val arr3:Array[Int] = arr1 :+ 5
        println(arr3.mkString(","))
        println(arr1 eq arr3) //false
        val arr4:Array[Int] = arr1 ++: arr2
        println(arr4.mkString(",")) //1,2,3,4,5,6,7,8
        val arr5:Array[Int] = arr1 ++ arr2
        println(arr5.mkString(","))
        //多维数组
        var myMatrix = Array.ofDim[Int](3,3)
        myMatrix.foreach(list => list.foreach(println))
        //合并数组
        val arr6:Array[Int] = Array.concat(arr1,arr2)
        arr6.foreach(println)
        //创建并填充制动数量的数组
        val arr8:Array[Int] = Array.fill[Int](5)(-1)
        arr8.foreach(println) // -1 -1 -1 -1 -1
     }
   ```
2. 可变数组
    - 基本语法
   ```scala
   object ScalaCollection3 {
    def main(args: Array[String]): Unit = {
        val buffer = new ArrayBuffer[Int]
        // 增加数据
        buffer.append(1,2,3,4)
        // 修改数据
        buffer.update(0,5)
        buffer(1) = 6
        // 删除数据
        val i:Int = buffer.remove(2)
        buffer.remove(2,2)
        //查询数据
        println(buffer(3))
        //循环集合
        for(i <- buffer){
          println(i)
        }
      }
    }
   ```
   - 基本操作
   ```scala
     object ScalaCollection4 {
            def main(args: Array[String]): Unit = {
            val buffer1 = ArrayBuffer(1,2,3,4)
            val buffer2 = ArrayBuffer(5,6,7,8)
            val buffer3: ArrayBuffer[Int] = buffer1 += 5
            println(buffer1 eq buffer3)
       }
    }
   ```
