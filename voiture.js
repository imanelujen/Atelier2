

class Voiture{
    model ;
    marque ;
    annee;
    type;
    carburant ;
    constructor(model,marque,annee,type,carburant){
         this.model=model ;
         this.marque=marque ;
         this.annee=annee ;
         this.type=type ;
         this.carburant=carburant ;
    }

    info(){
        return "V:{model :"+this.model+", marque : "+this.marque+", d'annee :"+this.annee+", type :"+this.type+", carburant :"+this.carburant+"}";
    }
 
    static compare(cmp1,cmp2){
           let date = cmp1.annee-cmp2.annee;
           return date;
    }

}

class Hundai extends Voiture{
    serie; hybride;
    constructor(model,marque,annee,type,carburant,serie,hybride){
     super(model,marque,annee,type,carburant);
     this.serie=serie;
     this.hybride=hybride;
    }

   // override 
    info(){
       // return "la voiture est de model :"+this.model+" du marque : "+this.marque+" d'anne :"+this.annee+"du type :"+this.type+" carburant"+this.carburant +"et serie "+this.serie+" hybride : "+this.hybride;
       return super.info()+"et serie "+this.serie+" hybride : "+this.hybride;
    }
    alarmer(){
        return "Alarmer HYndai : "+this.model+"et "+this.serie ;
    }
}
class Ford extends Voiture{
    constructor(model,marque,annee,type,carburant,options){
        super(model,marque,annee,type,carburant);
        this.options=options;
       }
   
      // override 
       info(){
          // return "la voiture est de model :"+this.model+" du marque : "+this.marque+" d'anne :"+this.annee+"du type :"+this.type+" carburant"+this.carburant +"et serie "+this.serie+" hybride : "+this.hybride;
          return super.info()+"et options :"+this.options.join(", ");
       }   
}
const Voitures = [
    new Voiture("mercedes e","Mercedes",2004,"sport","gasoil"),
    new Voiture("BMW g","BMW",2025,"sport","gasoil"),
    new Voiture("Honda","h",2015,"classe","essence"),
    new Hundai("BMW g","BMW",2010,"sport","gasoil","A9E12",true),
    new Ford("focus","h",1996,"classe","essence",["climatise","automatiques"])
] ;

Voitures.sort(Voiture.compare);
for(i in Voitures){
console.log(Voitures[i].info());
}

