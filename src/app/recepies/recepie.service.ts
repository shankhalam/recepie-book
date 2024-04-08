import { Injectable } from '@angular/core';
import { Recepie } from './recepie.model';

@Injectable({
  providedIn: 'root'
})
export class RecepieService {

  constructor() { }

  recepies: Recepie []= [
    {
      id: '1',
      title: 'Salad',
      imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2022/11/shutterstock_310087187-750x517.jpg',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      ingredients: ['Vegitables', 'Yoghurt', 'Salt']
    },
    {
      id: '2',
      title: 'Chicken Fry',
      imageUrl: 'https://c.ndtvimg.com/2021-12/0qqp966g_chicken-majestic_625x300_01_December_21.jpg',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      ingredients: ['Chicken', 'Oil']
    }
  ]

  getRecepies(){
    return this.recepies;
  }

  getRecepie(id:string) : Recepie | any{
    return [this.recepies.find(recepie => recepie.id === id)]
  }

  deleteRecepie(id:string) : Recepie | any {
    this.recepies = this.recepies.filter(recepie => {
      return recepie.id !== id;
    })
  }  

}
