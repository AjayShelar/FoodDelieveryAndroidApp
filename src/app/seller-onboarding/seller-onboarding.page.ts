import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-seller-onboarding',
  templateUrl: './seller-onboarding.page.html',
  styleUrls: ['./seller-onboarding.page.scss'],
})
export class SellerOnboardingPage implements OnInit {
  croppedImagepath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };
  constructor(public formBuilder: FormBuilder
    ,
    public api: ApiService,
    public camera: Camera,
public actionSheetController: ActionSheetController,
public file: File) { }

  ngOnInit() {
  }
  pickImage(sourceType) {
    const options: CameraOptions = {
    quality: 100,
    sourceType: sourceType,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
    }
     this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    // let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
    // Handle error
    });
    }
    async selectImage() {
      const actionSheet = await this.actionSheetController.create({
        header: "Select Image source",
        buttons: [{
          text: 'Load from Library',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
        ]
      });
      await actionSheet.present();
    }
    loadImageFromDevice(event) {

      const file = event.target.files[0];
    
      const reader = new FileReader();
    
      reader.readAsArrayBuffer(file);
    
      reader.onload = () => {
    
        // get the blob of the image:
        let blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);
    
        // create blobURL, such that we could use it in an image element:
        let blobURL: string = URL.createObjectURL(blob);
    
      };
    
      reader.onerror = (error) => {
    
        //handle errors
    
      };
    };
//     save(){

//       this.submitAttempt = true;

//       if(!this.slideOneForm.valid){
//           this.signupSlider.slideTo(0);
//       } 
//       else if(!this.slideTwoForm.valid){
//           this.signupSlider.slideTo(1);
//       }
//       else {
//           console.log("success!")
//           console.log(this.slideOneForm.value);
//           console.log(this.slideTwoForm.value);
//           let product = {
//             "name": this.slideOneForm.value['Name'],
//               "seller_pk": "5d884424-3932-4d62-bf07-2c925fa811b5",
//             "cost": this.slideTwoForm.value['cost'],
//             "product_category": this.slideOneForm.value['category'],
//               "product_sub_category":this.slideOneForm.value['sub_category'],
//               "tags": this.slideTwoForm.value['tags'].split(","),
//             "delivery_type": {
//               "type":this.slideTwoForm.value['delivery_type']
//             },
//             "order_type":{
//               "type": "preorder",
//               "preorder_days": 1
//             },
//             "images": ["image.png", "image.png"]
//           }

//           this.api.createProduct(product).subscribe(data=>{
// console.log(data);
// window.location.reload();
//           });


      // }
}
