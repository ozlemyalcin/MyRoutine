import { Component, OnInit } from '@angular/core';
import { Routine } from './routine';
import {AlertifyService} from '../services/alertify.service'



@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.css']
})
export class RoutineComponent implements OnInit {

  constructor(private alertifyService:AlertifyService) { }

  title=" My Routine"
  filterText=""
  

  routines: Routine[] = [

    {id:1, name: "Out of Bed" ,categoryId:1 ,desc:"lets out of bed ",imageUrl:"https://image.freepik.com/free-vector/alarm-clock-background_1212-457.jpg",score:1},
    {id:2, name: "Cleaning Room" ,categoryId:1 ,desc:"lets  ",imageUrl:"https://image.freepik.com/free-vector/messy-children-room-with-furniture-interior-objects-before-after-cleaning-flat_1284-33253.jpg",score:2},
    {id:3, name: "Homework" ,categoryId:1 ,desc:"lets ",imageUrl:"https://image.freepik.com/free-vector/maths-homework_23-2147532090.jpg",score:3},
    {id:4, name: "Exercising" ,categoryId:1 ,desc:"lets o ",imageUrl:"https://image.freepik.com/free-vector/cute-children-boys-girls-top-yoga-asanas-poses-cartoon-icons-collection-set_1284-8661.jpg",score:2},
    {id:5, name: "Meal time" ,categoryId:2 ,desc:"lets  ",imageUrl:"https://image.freepik.com/free-vector/little-children-eating-healthy-food_29937-6059.jpg",score:2},
    {id:6, name: "Learning time" ,categoryId:2 ,desc:"lets o ",imageUrl:"https://image.freepik.com/free-vector/mom-reading-book-children-home-mother-telling-little-children-fairytale_74855-14458.jpg",score:3},
    {id:7, name: "Quite Time" ,categoryId:2 ,desc:"lets oof bed ",imageUrl:"https://image.freepik.com/free-vector/child-meditating-quietly_7710-64.jpg",score:2},
    {id:8, name: "Journaling" ,categoryId:2 ,desc:"lets ",imageUrl:"https://as1.ftcdn.net/jpg/01/18/61/50/500_F_118615079_CivfAEeB9qAeWOQQgxzyvtnHtjhX2Rg4.jpg",score:2},
    {id:9, name: "Reading" ,categoryId:3 ,desc:"lets out of bed ",imageUrl:"https://image.freepik.com/free-vector/scene-with-many-children-reading-books-home_1308-40674.jpg",score:3},
    {id:10, name: "Meal Time" ,categoryId:3 ,desc:"lets out of bed ",imageUrl:"https://image.freepik.com/free-vector/little-children-eating-healthy-food_29937-6059.jpg",score:2},
    {id:11, name: "Helping" ,categoryId:3 ,desc:"lets out of bed ",imageUrl:"https://image.freepik.com/free-vector/vector-illustration-cartoon-mother-her-two-children-looking-strawberry-plant-raised-garden-bed_283146-126.jpg",score:2},
    {id:12, name: "Family Time" ,categoryId:3 ,desc:"lets out of bed ",imageUrl:"https://image.freepik.com/free-vector/family-enjoying-time-together_52683-37724.jpg",score:1},
    {id:13, name: "Brsuh teeth" ,categoryId:3 ,desc:"lets out of bed ",imageUrl:"https://image.freepik.com/free-vector/teeth-care-set_74855-6676.jpg",score:1},
    {id:14, name: "Ready for Bed" ,categoryId:3 ,desc:"lets out of bed ",imageUrl:"https://image.freepik.com/free-vector/four-scenes-kid-sleeping-bed-night-time_1308-42082.jpg", score:1}
  ]

  ngOnInit() {
  }



addToScore(score){
''
 this.alertifyService.confirm('onfirmmesg','sucess','error')
  
  

}
}