import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export interface fileData {
  name: string;
}

const ELEMENT_DATA: fileData[] = [
];

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-share-preferences-details',
  templateUrl: './share-preferences-details.component.html',
  styleUrls: ['./share-preferences-details.component.css']
})
export class SharePreferencesDetailsComponent implements OnInit {
  @Input() dataSource:fileData[] ;

  favoritepreference: string;
  preferences: string[] = ['Share Via mail', 'Get Link'];


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  displayedColumns: string[] = [ 'name'];
  constructor() { }

  ngOnInit(): void {
    var file =this.dataSource;
  }

}
