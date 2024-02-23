(()=>{
    
    /* 泛型是什么？解决什么问题？ */
    //需求

    //定义一个泛型接口
    interface IBaseCRUD<T> {
        data:Array<T>;
        add:(t:T)=>T;
        getUserId:(id:number)=>T
    }
    class User {
        id?:number;  //?代表可有可无
        name:string;
        age:number;
        constructor(name:string,age:number) {
            this.name=name
            this.age=age
        }
    }
    class UserCRUD implements IBaseCRUD<User>{
        //定义一个数组
        data:Array<User> = [];
        add(user:User):User {
            user.id = Math.round(Math.random()*1000000)
            this.data.push(user);
            return user;
        }
        getUserId(id:number):User{
            return this.data.find(item=>item.id===id);
        }
    }

    const userCrud =new UserCRUD();
    userCrud.add(new User("frank3",70));
    const {id}=userCrud.add(new User("frank5",50));
    console.log(userCrud.getUserId(id))

})()