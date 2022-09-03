import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  @Input() info: any;

  constructor(private router: Router) { }

  //open PDF
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('code');
    });
  }

  ngOnInit(): void {
    $.getScript('assets/thank/assets/js/jquery-3.3.1.min.js');
    $.getScript('assets/thank/assets/js/bootstrap.min.js');
    $.getScript('assets/thank/assets/js/main.js');
    console.log(this.info)
    $("html, body").animate({
      scrollTop: 0
  }, 600);
  }

  toHome() {
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
