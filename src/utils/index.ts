import { ComponentType } from 'react'
// type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
// 索引类型查询操作符:keyof T,T上已知公共属性集合
// 例如T:{ name:string,age:number },那么keyof T = 'name' | 'age'
// 索引访问操作符:例如 T[P],其实返回的是name或者age的类型

// 拆包类型
// type Exclude<T, U> = T extends U ? never : T
// never:永不存在的值的类型
// Exclude<T, U> -- 从T中剔除可以赋值给U的类型。相当于差值  type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"
// Extract<T, U> -- 提取T中可以赋值给U的类型。相当于共有的值
// NonNullable<T> -- 从T中剔除null和undefined。
// ReturnType<T> -- 获取函数返回值类型。
// InstanceType<T> -- 获取构造函数类型的实例类型。
declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

//映射类型
/* type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}
type Partial<T> = {
    [P in keyof T]?: T[P];
} */

export const withDefaultProps = <P extends object, DP extends Partial<P> = Partial<P>>(defaultProps: DP, Cmp: ComponentType<P>) => {
  // 由于DP是可选参数，P中剔除掉DP就是所有必选参数集合了
  type RequiredType = Omit<P, keyof DP>
  type Props = Partial<DP> & Required<RequiredType>
  Cmp.defaultProps = defaultProps
  return (Cmp as ComponentType<any>) as ComponentType<Props>
}
// const withDefaultProps: <P extends object, DP extends Partial<P> = Partial<P>>(defaultProps: DP, Cmp: ComponentType<P>) => ComponentType<Props>

// 交叉类型(&)
// 联合类型(|)

// 用户自定义的类型保护
// 在这个例子里， pet is Fish就是类型谓词,parameterName必须是来自于当前函数签名里的一个参数名。
export const isFunction = <T extends Function>(value: any): value is T => {
  return typeof value === 'function'
}
