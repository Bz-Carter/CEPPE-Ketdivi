import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { ContactService } from 'src/app/services/contact.service';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // header variables
  title = 'Contacts';
  subtitle = 'Envoyez nous vos messages par courriel';
  image = 'assets/demos/kindergarten/images/contact.jpg';
  
  form: FormGroup= new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
  });
  cls = '';
  message = '';
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      subject: ['', [Validators.required, Validators.minLength(2)]],
      message: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;
    $("html, body").animate({
      scrollTop: 0
    }, 600);

    if (this.form.invalid) {
      return;
    }
    this.contactService.contact(this.form.getRawValue()).subscribe({
      next: () => {
        this.cls = 'success';
        this.message = 'Votre message a été envoyé!';
        this.submitted = false;
        this.ngOnInit();
      },
      error: () => {
        this.cls = 'danger';
        this.message = 'Une erreur est survenue!';
      }
    });
  }

}
