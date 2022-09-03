import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Section } from 'src/app/interfaces/section';
import { PublicSectionService } from 'src/app/services/publicSection.service';
import { ImageService } from 'src/app/services/image.service';
import { ChildService } from 'src/app/services/child.service';
import Swal from 'sweetalert2';


declare var $: any;

@Component({
  selector: 'app-pregistration',
  templateUrl: './pregistration.component.html',
  styleUrls: ['./pregistration.component.css']
})
export class PregistrationComponent implements OnInit {
  sections: Section[] = [];
  status = false;
  step1: FormGroup = new FormGroup({
    child_image: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    birthday: new FormControl(''),
    birthplace: new FormControl(''),
    level: new FormControl(''),
    gender: new FormControl(''),
    father_name: new FormControl(''),
    father_job: new FormControl(''),
    father_nationality: new FormControl(''),
    mother_name: new FormControl(''),
    mother_job: new FormControl(''),
    mother_nationality: new FormControl(''),
    child_paper: new FormControl(''),
  });
  step2: FormGroup = new FormGroup({
    brother_count: new FormControl(''),
    sister_count: new FormControl(''),
    child_position: new FormControl(''),
    others_children: new FormControl(''),
  });
  step3: FormGroup = new FormGroup({
    blood_type: new FormControl(''),
    transfusion: new FormControl(''),
    weight: new FormControl(''),
    height: new FormControl(''),
    allergies: new FormControl(''),
    diabeteique: new FormControl(''),
    asthmatique: new FormControl(''),
    drepanocytaire: new FormControl(''),
    churigies: new FormControl(''),
    autres_maladies: new FormControl(''),
    suivie_pediatre: new FormControl(''),
    pediatre_name: new FormControl(''),
    pediatre_phone: new FormControl(''),
    go_to_hospital: new FormControl(''),
    clinqual_name: new FormControl(''),
    clinqual_street: new FormControl(''),
    clinqual_phone: new FormControl(''),
    carnet_vaccination: new FormControl(''),

  });
  step4: FormGroup = new FormGroup({
    session1: new FormControl(''),
    etablissement1: new FormControl(''),
    classe1: new FormControl(''),
    session2: new FormControl(''),
    etablissement2: new FormControl(''),
    classe2: new FormControl(''),
    session3: new FormControl(''),
    etablissement3: new FormControl(''),
    classe3: new FormControl(''), 
  });

  step5: FormGroup = new FormGroup({
    tutor_type: new FormControl(''),
    tutor_name: new FormControl(''),
    tutor_street: new FormControl(''),
    tutor_job: new FormControl(''),
    tutor_phone: new FormControl(''),
    tutor_email: new FormControl(''),
    tutor_cni: new FormControl(''),
  });

  thank = false;
  accept_hospital = false;
  doctor = true;
  data: any;
  dada: any;
  form1: any;
  form2: any;
  form3: any;
  form4: any;
  form5: any;
  submitted = false;
  submitted2 = false;
  submitted3 = false;
  submitted4 = false;
  submitted5 = false;
  constructor(
    private formBuilder: FormBuilder, 
    private publicSectionService: PublicSectionService,
    private imageService: ImageService,
    private childService: ChildService,
    private router: Router
  ) {
    this.publicSectionService.all().subscribe((res: any) => {
      this.sections = res.data;
    });
  }

  ngOnInit(): void {
    
    $.getScript('assets/wizard/js/jquery-3.3.1.min.js');
    $.getScript('assets/wizard/js/bootstrap.min.js');
    $.getScript('assets/wizard/js/popper.min.js');
    $.getScript('assets/wizard/js/owl.carousel.min.js');
    $.getScript('assets/wizard/js/form-step.js');
    $.getScript('assets/wizard/js/jquery.validate.min.js');
    $.getScript('assets/wizard/js/validate.js');
    $.getScript('assets/wizard/js/contact.js');
    $.getScript('assets/wizard/js/main.js');
    $.getScript('assets/wizard/js/slick.min.js');
    $.getScript('assets/wizard/js/switch.js');
   
    this.step1 = this.formBuilder.group(
      {
        child_image: ['', [Validators.required, Validators.minLength(2)]],
        first_name: ['', [Validators.required, Validators.minLength(2)]],
        last_name: ['', [Validators.required, Validators.minLength(2)]],
        birthday: ['', [Validators.required, Validators.minLength(2)]],
        birthplace: ['', [Validators.required, Validators.minLength(2)]],
        gender: ['', [Validators.required, Validators.minLength(2)]],
        level: ['', [Validators.required, Validators.minLength(2)]],
        father_name: ['', [Validators.required, Validators.minLength(4)]],
        father_nationality: ['', [Validators.required, Validators.minLength(2)]],
        father_job: ['', [Validators.required, Validators.minLength(3)]],
        mother_name: ['', [Validators.required, Validators.minLength(4)]],
        mother_nationality: ['', [Validators.required, Validators.minLength(2)]],
        mother_job: ['', [Validators.required, Validators.minLength(3)]],
        child_paper: ['', [Validators.required, Validators.minLength(2)]]
      }
    );

    this.step2 = this.formBuilder.group({
      brother_count: 0,
      sister_count: 0,
      child_position: 0,
      others_children: ''
    });

    this.step3 = this.formBuilder.group(
      {
        blood_type: ['', [Validators.required]],
        transfusion: ['', [Validators.required]],
        weight: ['', [Validators.required]],
        height: ['', [Validators.required]],
        allergies: '',
        diabeteique: ['', [Validators.required]],
        asthmatique: ['', [Validators.required]],
        drepanocytaire: ['', [Validators.required]],
        churigies: ['', [Validators.required]],
        autres_maladies: ['', [Validators.required]],
        suivie_pediatre: ['', [Validators.required]],
        pediatre_name: '',
        pediatre_phone: '',
        go_to_hospital: ['', [Validators.required]],
        clincal_name: '',
        clinqual_street: '',
        clincal_phone: '',
        carnet_vaccination: ['', [Validators.required]],
      }
    );

    this.step4 = this.formBuilder.group({
      session1: '',
      etablissement1: '', 
      classe1: '',
      session2: '',
      etablissement2: '',
      classe2: '',
      session3: '',
      etablissement3: '',
      classe3: '',
    });

    this.step5 = this.formBuilder.group({
      tutor_type: ['', [Validators.required, Validators.minLength(2)]],
      tutor_name: ['', [Validators.required, Validators.minLength(3)]],
      tutor_street: ['', [Validators.required, Validators.minLength(2)]],
      tutor_job: ['', [Validators.required, Validators.minLength(2)]],
      tutor_phone: ['', [Validators.required, Validators.minLength(2)]],
      tutor_email: ['', [Validators.required, Validators.minLength(2)]],
      tutor_cni: ['', [Validators.required, Validators.minLength(2)]],
    });
    
  }

  noHospital() {
    this.accept_hospital = false;
  }
  yesHospital() {
    this.accept_hospital = true;
  }
  yesDoctor() {
    this.doctor = true;
  }
  noDoctor() {
    this.doctor = false;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.step1.controls;
  }
  get f3(): { [key: string]: AbstractControl } {
    return this.step3.controls;
  }

  get f5(): { [key: string]: AbstractControl } {
    return this.step5.controls;
  }

  onStep1(): void {
    this.submitted = true;
    if (this.step1.invalid) {
      this.status = false;
      $("html, body").animate({
        scrollTop: 0
    }, 600);
      return;
    }
    this.status = true;
    this.form1 = this.step1.getRawValue();
    // console.log(JSON.stringify(this.form1, null, 2));
  }
  onStep2(): void {
    this.submitted2 = true;
    this.status = true;
    this.form2 = this.step2.getRawValue();
    // console.log(JSON.stringify(this.form2, null, 2));
  }
  onStep3(): void {
    this.submitted3 = true;
    if (this.step3.invalid) {
        this.status = false;
        $("html, body").animate({
          scrollTop: 0
      }, 600);
        return;
    }
    this.status = true;
    this.form3 = this.step3.getRawValue();
  }

  onStep4(): void {
    this.submitted4 = true;
    this.status = true;
    this.form4 = this.step4.getRawValue();
  }

  onStep5(): void {
    this.submitted5 = true;
    if (this.step5.invalid) {
        this.status = false;
        $("html, body").animate({
          scrollTop: 0
      }, 600);
        return;
    }
    this.status = true;
    this.form5 = this.step5.getRawValue();
    this.submit();
  }

  submit() {
    Swal.fire({
      title: 'Voulez-vous vraiment enregistrer?',
      text: 'Vous êtes sur le point de valider les renseignements!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: 'Oui, valider!',
      cancelButtonText: 'Non, verifier',
    }).then((result) => {
      if (result.value) {
        this.data = {
          code: this.form1.code,
          child_image: this.form1.child_image,
          first_name: this.form1.first_name,
          last_name: this.form1.last_name,
          birthday: this.form1.birthday,
          birthplace: this.form1.birthplace,
          gender: this.form1.gender,
          level: this.form1.level,
          father_name: this.form1.father_name,
          father_nationality: this.form1.father_nationality,
          father_job: this.form1.father_job,
          mother_name: this.form1.mother_name,
          mother_nationality: this.form1.mother_nationality,
          mother_job: this.form1.mother_job,
          child_paper: this.form1.child_paper,
          brother_count: this.form2.brother_count,
          sister_count: this.form2.sister_count,
          child_position: this.form2.child_position,
          others_children: this.form2.others_children,
          blood_type: this.form3.blood_type,
          transfusion: this.form3.transfusion,
          weight: this.form3.weight,
          height: this.form3.height,
          allergies: this.form3.allergies,
          diabeteique: this.form3.diabeteique,
          asthmatique: this.form3.asthmatique,
          drepanocytaire: this.form3.drepanocytaire,
          churigies: this.form3.churigies,
          autres_maladies: this.form3.autres_maladies,
          suivie_pediatre: this.form3.suivie_pediatre,
          pediatre_name: this.form3.pediatre_name,
          pediatre_phone: this.form3.pediatre_phone,
          go_to_hospital: this.form3.go_to_hospital,
          clinqual_name: this.form3.clinqual_name,
          clinqual_street: this.form3.clinqual_street,
          clinqual_phone: this.form3.clinqual_phone,
          carnet_vaccination: this.form3.carnet_vaccination,
          session1: this.form4.session1,
          etablissement1: this.form4.etablissement1, 
          classe1: this.form4.classe1,
          session2: this.form4.session2,
          etablissement2: this.form4.etablissement2,
          classe2: this.form4.classe2,
          session3: this.form4.session3,
          etablissement3: this.form4.etablissement3,
          classe3: this.form4.classe3,
          tutor_type: this.form5.tutor_type,
          tutor_name: this.form5.tutor_name,
          tutor_street: this.form5.tutor_street,
          tutor_job: this.form5.tutor_job,
          tutor_phone: this.form5.tutor_phone,
          tutor_email: this.form5.tutor_email,
          tutor_cni: this.form5.tutor_cni,
        }
        this.childService.create(this.data).subscribe((res: any) => {
          this.thank = true;
          this.dada = res.data;

        });
        Swal.fire(
          'Félicitation!',
          `Préinsciption effectuée avec succès!`,
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Annulé', 'La préinscription n\'a pas été validée! :)', 'error');
      }
    });
    
  }

  // submit() {
  //   const formData = this.form.getRawValue();

  //   const data = {
  //     name: formData.name,
  //     image: formData.image,
  //     alt: formData.alt,
  //     owner: this.owner,
  //   };
  // }

  upload(files: FileList) {
    const file = files.item(0);

    const data = new FormData();
    data.append('child_image', file!);

    this.imageService.childImageUpload(data).subscribe((res: any) => {
      this.step1.patchValue({
        child_image: res.url,
      });
    });
  }
  paperUpload(files: FileList) {
    const file = files.item(0);

    const data = new FormData();
    data.append('child_paper', file!);

    this.imageService.childPaperUpload(data).subscribe((res: any) => {
      this.step1.patchValue({
        child_paper: res.url,
      });
    });
  }
  vaccinationUpload(files: FileList) {
    const file = files.item(0);

    const data = new FormData();
    data.append('carnet_vaccination', file!);

    this.imageService.vaccinationRecordUpload(data).subscribe((res: any) => {
      this.step3.patchValue({
        carnet_vaccination: res.url,
      });
    });
  }
  cniUpload(files: FileList) {
    const file = files.item(0);

    const data = new FormData();
    data.append('tutor_cni', file!);

    this.imageService.tutorsCNIUpload(data).subscribe((res: any) => {
      this.step5.patchValue({
        tutor_cni: res.url,
      });
    });
  }
}
