export class Routine{

   
  
    id:number;
    name:string;
    categoryId:number;
    desc:string;
    imageUrl:string;
    score:number
  
   constructor(id:number, name:string, categoryId:number, desc:string, imageUrl:string, score:number)
   {
    this.id=id;
    this.name=name;
    this.categoryId=categoryId;
    this.desc=desc;
    this.imageUrl=imageUrl;
    this.score=score

   }
  }