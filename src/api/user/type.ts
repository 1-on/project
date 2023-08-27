//登录接口需要携带参数ts类型
export interface loginFrom{
    username:string,
    password:string
}

interface dataType{
    token:string
}

//登录接口函数返回对象
export interface loginResponse{
    code:number,
    data:dataType
}
interface userInfo{
    userId:number,
    avatar:string,
    username:string,
    password:string,
    desc:string,
    roles:string[],
    buttons:string[],
    routes:string[],
    token:string

}
interface user{
    checkUser:userInfo
}
//定义服务器返回用户信息相关的数据类型
export interface userResponse{
    code:number,
    data:user
}