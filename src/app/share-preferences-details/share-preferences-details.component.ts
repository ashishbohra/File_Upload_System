import { Component, Input, OnInit } from '@angular/core';

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

  displayedColumns: string[] = [ 'name'];
  constructor() { }

  ngOnInit(): void {
    var file =this.dataSource;
  }

}
