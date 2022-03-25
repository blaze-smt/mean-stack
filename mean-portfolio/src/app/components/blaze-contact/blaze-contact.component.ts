import { Component } from '@angular/core';
import { NgForm }   from '@angular/forms';

@Component({
  selector: 'app-blaze-contact',
  templateUrl: './blaze-contact.component.html',
  styleUrls: ['./blaze-contact.component.css']
})

export class BlazeContactComponent {

  status: boolean = false;

  onSubmit(contactForm: NgForm) {
    console.log("Form Submitted", contactForm.value);
    if(contactForm.form.status === "VALID") {
      this.status = !this.status;
    }
  }

}
