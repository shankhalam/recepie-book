import { Component, OnInit } from '@angular/core';
import { RecepieService } from './recepie.service';
import { Recepie } from './recepie.model';
import { RecepieDetailsComponent } from './recepie-details/recepie-details.component';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.scss'],
})
export class RecepiesComponent  implements OnInit {

  recepies: Recepie[] = []
  constructor(private recService: RecepieService) { }

  ngOnInit() {
    this.recepies = this.recService.getRecepies()
  }


}
