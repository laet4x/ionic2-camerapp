import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public base64Image: any;
  constructor(public navCtrl: NavController, public camera: Camera) { 
      

  }
    
    
      

    getPicture () {

        const options: CameraOptions = {
          destinationType: this.camera.DestinationType.DATA_URL
        }

        this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
        // Handle error
        }); 
      }    
}
     


  
  



