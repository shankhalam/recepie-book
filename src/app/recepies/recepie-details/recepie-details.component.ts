import { Component, OnInit } from '@angular/core';
import { RecepieService } from '../recepie.service';
import { Recepie } from '../recepie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.component.html',
  styleUrls: ['./recepie-details.component.scss'],
})
export class RecepieDetailsComponent  implements OnInit {

  newRecepie : Recepie | any

  constructor(
    private recService: RecepieService, 
    private route:ActivatedRoute, 
    private reRoute:Router,
    private alertctrl: AlertController 
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('recepieId')
    if (id) {
     this.newRecepie =  this.recService.getRecepie(id);
    }
  }

  onDelete() {
    this.alertctrl.create({
      header:"Delete Recepie",
      message: "Are uou sure to delete the recepie",
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: ()=>{
            this.recService.deleteRecepie(this.newRecepie.id)
            this.reRoute.navigate(['/recepies'])
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    })
  }

}
