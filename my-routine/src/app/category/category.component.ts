import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
 title="Daily "
  categories: Category[]=[
    {id:1, name:"Morning"},
    {id:2, name:"Afternoon"},
    {id:3, name:"Evening"}
    
  ]

  ngOnInit() {
  }

}
