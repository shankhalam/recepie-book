import { Component, OnInit } from '@angular/core';
import { RecepieService } from '../recepie.service';
import { Recepie } from '../recepie.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.component.html',
  styleUrls: ['./recepie-details.component.scss'],
})
export class RecepieDetailsComponent  implements OnInit {

  recepie: Recepie[] = []
  constructor(private recService: RecepieService, private route:ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('recepieId')
    if (id) {
     this.recepie =  this.recService.getRecepie(id)
     console.log(this.recepie)
    }
  }

}
