
const Etudiant=new Object();
Etudiant.nom="Imane";
Etudiant.prenom="Chikh";
Etudiant.age=20;
Etudiant.cne="BQ15192007";
Etudiant.etudier=function(){
    return "l'etudiant : "+this.prenom+" ."+this.nom ;
}

console.log(Etudiant);
console.log(Etudiant.etudier());

const Professeur=new Object();
Professeur.nom="wiam";
Professeur.age=20;
Professeur.cin="BQ15192007";
Professeur.enseigner=function(){
    return `le professeur : ${this.nom}`;
}
 const etudiants=[
    {nom : "Imane" ,prenom:"sabri", age:56,cne:"Sw6546654"},
    {nom : "yousra" ,prenom:"porl", age:56,cne:"Sw6546654"},
    {nom : "abort" ,prenom:"aajsn", age:684,cne:"Sw6546654"},
    {nom : "abort" ,prenom:"loop", age:56,cne:"Sw6546654"}
 ];
etudiants.forEach(etudiant =>{
   etudiant.etudier=function(){
    return "l'etudiant : "+this.prenom+" ."+this.nom ;
   };
});
//tri des etudiants 
etudiants.sort((a,b)=>{
  if(a.nom === b.nom){
   return a.prenom.localeCompare(b.prenom);
  }
  return a.nom.localeCompare(b.nom);
});

etudiants.forEach(et => {
   console.log(et.etudier());
});
