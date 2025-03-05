                     Atelier2    mini rapport
Exercice 1 :
class voiture ,hundai et ford avec les contructeurs des objets et notion d'heritage 
Exercice 2 :
objet native Etudiant et professeur 
avec tri des etudiant utilisant localCompare 
etudiants.sort((a,b)=>{
  if(a.nom === b.nom){
   return a.prenom.localeCompare(b.prenom);
  }
  return a.nom.localeCompare(b.nom);
});


Exercice 4 :
    la classe qui gere tous c'est class blog qui contient les methodes :
            {inscription,connexion,newpost ...} .
	   
creation des class Blog,User,Postes avec les constructeures qui  font initialiser les objets .

avec l'utilisation du toJson() pour convertir un objet en JSON
avec l'utilisation du FromJson() pour convertir du JSON  en objet avec JSON.parse(json)

la gestion des utilisateures et postes dans localstorage avec les deux methodes :
  convertir en object 
    saveblog(cle,classtype){
    let data= localStorage.getItem(cle);
    if(data){
        const parsedData = JSON.parse(data);
        return parsedData.map(item => classtype.FromJson(item));
        }
    return [];
      }

   convertir to JSON 
    savedata(cle,data){localStorage.setItem(cle,JSON.stringify(data));}
	  

la laison du fonction deje definie dans les classes en index.html:
    let user= blog.connexion(email,password)
    let post= blog.newpost(title,Description)
    blog.inscription(nom,email,password)
