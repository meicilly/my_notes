### <center>1.1 scala的基础</center>
#### 1.1.1 数据类型 描述
    - Byte 8 bit的符号数字，范围-128 -- 127
    - Short 16 bit有符号数字，范围-32768 -- 32767
    - Int 32 bit有符号数字
    - Long 64 bit 有符号数字
    - Float 32 bit IEEE 754单精度浮点数
    - Double 64 bit IEEE 754双精度浮点数
    - Char 16 bit Unicode字符
    - String 字符串
    - Boolean 布尔类型
    - Unit 表示无值和其他语言中void相同
    - Null 空值或者空引用
    - Nothing 所有其他类型的子类型，表示没有值
    - Any 所有类型的超类，任何实例都属于Any类型
    - AnyRef 所有引用类型的超类
    - AnyVal 所有值类型的超类

#### 1.1.2 变量和常量的声明
```scala
   /**
   *定义变量常量
   *变量： 用var定义，可修改
   *常量: 用val定义，不可修改
   */
   var name = "meicilly"
   println(name)
   name = "jack"
   val gender = "m"
```
#### 1.1.3 类和对象
```scala
//创建类
    class Person {
        val name = "meicilly"
        val age = 18
        def sayname() = {
        "my name is " + name
  }
}
//创建对象
    object 变量和常量的声明 {
        def main(args: Array[String]): Unit = {
        var name:String = "meicilly"
        println(name)
        name = "jack"
        println(name)
        val gender = "m"
  }
}
```
#### 1.1.4 if else
```scala
    /*
    *if else
    */
    val age =18
    if (age < 18 ){
      println("no allow")
    }else if (18<=age&&age<=20){
      println("allow with other")
    }else{
      println("allow self")
    }
```
#### 1.1.5 for,while,do...while

- to和until的用法
```scala
    /*
    *to和until
    *1 to 10 返回1到10的Range数组，包含
    *1 until 10 返回1到10 Range数组，不包含10
    */
    println(1 to 10) //Range(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    println(1.to(10)) //Range(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    println(1 to (10,2)) //步长为2,从1开始打印Range(1, 3, 5, 7, 9)
    println(1.to(10,2)) //Range(1, 3, 5, 7, 9)
    println(1 until 10)
    println(1.until(10)) //不包含最后一位数 Range(1, 2, 3, 4, 5, 6, 7, 8, 9)
    println(1 until (10,3)) //Range(1, 4, 7)
```
- for循环
```scala
    for(i <- 1 to 10){
        println(i)
    }
    //for循环中可以加条件判断，可以使用分号隔开，也可以不使用分号
     for(i <- 1 to 10;if(i % 2 == 0);if(i == 4)){
        println(i)
    }
```
::: warning
scala中不能使用count++,count只能使用count = count + 1,count+=1
:::



