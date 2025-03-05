
//class gestion blog 
class Blog {
    constructor(){
        this.users=this.saveblog("users",user);
        this.posts=this.saveblog("posts",Post);
    }
    //convert json to an object
    saveblog(cle,classtype){
    let data= localStorage.getItem(cle);
    if(data){
        const parsedData = JSON.parse(data);
        return parsedData.map(item => classtype.FromJson(item));
        }
    return [];
      }
   // save data  byy converting data to json 
      savedata(cle,data){
        localStorage.setItem(cle,JSON.stringify(data));
       }
   emailExiste(email){
        return this.users.some(user => user.email === email);
   }
    inscription(nom,email,password){
        if(this.emailExiste(email)){
            console.log("wwaaaarning : already email exists");
            return false;
        }
        const newuser= new user(Date.now(),nom,email,password);
        this.users.push(newuser);
        this.savedata("users",this.users);
        console.log("Inscription done ");
        return true;
    }
    connexion(email,password,nom){
        let user=this.users.find(user => user.email ===email && user.password ===btoa(password));
        if(user){
            console.log(`connected !!`);
            return user;
        }else{
            console.log(`Error , Invalid information!!`);
            return null;
        }
        
    }

    newpost(title,Description,nom){
        const author =this.users.find(user =>user.nom === nom );
        if(!author){
            console.log("waaaarning : author not found");
            return null;
        }
        const newpost= new Post(title,Description,author.id);
        this.posts.push(newpost);
        this.savedata("posts",this.posts);
        console.log("post added succusifly",);
        return newpost;
    }
    // listerposts(){
    //     if(this.posts.length === 0){
    //         console.log("no posts are here");
    //         return ;
    //     }
    //     console.log("POSTS List");
    //     this.posts.forEach(post => {
    //              let auteur=this.users.find(user=>user.id === post.writerid)  ;
    //              console.log(`Title : ${post.title} : Author : ${auteur.nom}`); 
    //              console.log(` Description : ${post.Description}`);       
    //     });
    // }
}
//class post
class Post{
    constructor(title,Description,authorid,postid){
          this.title=title;
          this.Description=Description;
          this.authorid=authorid;
          this.postid=postid || Date.now();
    }
    toJson(){
        return {
            title: this.title,
            Description : this.Description,
            authorid: this.authorid,
            postid: this.postid
        };
       }
    static FromJson(jsonstr){
        let obj = (typeof json === "string") ? JSON.parse(json) : json;
        return new Post(obj.title,obj.Description,obj.authorid,obj.postid);
    }
}
//class user

class user{
    constructor(id,nom,email,password){
        this.id = id;
        this.nom = nom;
        this.email = email;
        this.password = btoa(password);
    }

    toJson(){
        return {
            id: this.id,
            nom: this.nom,
            email: this.email,
            password : this.password
        };
       }
       static FromJson(json){
        let obj =(typeof json=== "string") ? JSON.parse(json) : json;
        return new user(obj.nom,obj.email,atob(obj.password));
       }

}
