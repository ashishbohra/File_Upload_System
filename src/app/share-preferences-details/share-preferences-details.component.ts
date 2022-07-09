import { Component, Input, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-share-preferences-details',
  templateUrl: './share-preferences-details.component.html',
  styleUrls: ['./share-preferences-details.component.css']
})
export class SharePreferencesDetailsComponent implements OnInit {
  @Input() dataSource:Set<File> ;

  favoritepreference: string;
  preferences: string[] = ['Share Via mail', 'Get Link'];


  constructor() { }

  ngOnInit(): void {
  }

}
