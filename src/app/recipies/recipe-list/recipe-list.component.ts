import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/18/Yummly_logo.png'),
    new Recipe('A Test Recipe2', 'This is a test recipe2', 'https://upload.wikimedia.org/wikipedia/commons/1/18/Yummly_logo.png'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
