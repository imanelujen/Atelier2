
class Vecteur2D{
     constructor(x=0,y=0){
        this.x=x;this.y=y;
     }
    affiche(){
        console.log(`x : ${this.x} , y: ${this.y}`);
    }
    
    static addition(v1 ,v2){
        return new Vecteur2D(v1.x+v2.x,v1.y+v2.y);
    }
}
//prog principale
 let vect1 = new Vecteur2D();
 vect1.affiche();
 let vect2 = new Vecteur2D(5,6);
 let vect3 = new Vecteur2D(1,2);
 let v4=Vecteur2D.addition(vect2,vect3);
 console.log("apres addition ")
  v4.affiche();
 console.log(vect1);
 console.log(vect2);
vect1.affiche();
vect2.affiche();

 class Rectangle{
    constructor(longueur=5.6,largeur=8.6,nom="rectangle"){
       this.longueur=longueur;
       this.largeur=largeur;
       this.nom=nom;
    }
    affiche(){
      return `le rectangle du L : ${this.longueur} et l: ${this.largeur} `;
    }
    surface(){
        return `la surace est ${this.largeur*this.longueur} m^2`;
    }

 }

 class Carre extends Rectangle{
    constructor(a=5.6,nom="carré"){
      super(a,a);
     this.nom=nom;
    }

 }
 //prog principale
 let r1=new Rectangle(4.2,1.3);
 console.log(r1.affiche());
 console.log(r1.surface());
  
 let c1=new Carre(4.2);
 console.log(c1.affiche());
 console.log(c1.surface());

  class Point{
    constructor(x=0.0,y=0.0){
        this.x=x;
        this.y=y;
    }
    affiche(){
        return `Point : {x :${this.x} ,y: ${this.y} }`;
      }
  }
  //prog principale point
p1=new Point(5,6);
console.log(p1.affiche());
  //class segment
  class Segment{
     constructor(x1,x2,y1,y2){
        this.orig=new Point(x1,y1);
        this.extrem=new Point(x2,y2);
 }
 affiche(){
    return `le segment: origine{ x:${this.orig.x}, y:${this.orig.y}} extrimite{x:${this.extrem.x}, y:${this.extrem.y}}`;
  }
  
  }

 //prog principale
 segment1=new Segment(1,2,3,4);
 console.log(segment1.affiche());