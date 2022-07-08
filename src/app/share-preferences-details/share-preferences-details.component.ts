import { Component, Input, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

export interface fileData {
  name: string;
}

const ELEMENT_DATA: fileData[] = [
];


@Component({
  selector: 'app-share-preferences-details',
  templateUrl: './share-preferences-details.component.html',
  styleUrls: ['./share-preferences-details.component.css']
})
export class SharePreferencesDetailsComponent implements OnInit {
  @Input() dataSource:fileData[] ;

  favoritepreference: string;
  preferences: string[] = ['Share Via mail', 'Get Link'];


  from_emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  mailBodyFormControl = new FormControl('', [Validators.required]);

  displayedColumns: string[] = [ 'name'];
  constructor() { }

  ngOnInit(): void {
    var file =this.dataSource;
  }

}
