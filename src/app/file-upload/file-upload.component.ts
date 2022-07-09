import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface fileData {
  name: string;
  size: number;
}

const ELEMENT_DATA: fileData[] = [
];

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})


export class FileUploadComponent implements OnInit {

  @ViewChild('file', { static: false }) file;

  displayedColumns: string[] = [ 'name', 'size','action'];
  dataSource = [...ELEMENT_DATA];

  isMoveToPreferenceSection=false;
  public files: Set<File> = new Set();
  public limit=1073741824;

  constructor( private http: HttpClient) {
  }

  ngOnInit(): void {
  }


  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        this.files.add(files[key]);
      }
    }
    if(this.checkDataSize())
    {
      this.dataSource = [...this.files];
    }
    else{
      this.files.clear();
    }
  }

  RemoveItem(name){
    this.files.forEach(file => {
      if(file.name==name)
      {
        this.files.delete(file);
      }
      this.dataSource = [...this.files];
    });
  }
  checkDataSize(){
    var count=0.
    var allow=true;
    this.files.forEach(file => {
      count=count+file.size;
    });

    if(count > this.limit)
    {
      alert("file size exceeding the max size limit");

      allow=false;
    }
    return allow;
  }

  bytesToSize(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseInt((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
 }

 remainingUploadSize(decimals = 2){
    var bytes=0;
    this.files.forEach(file => {
      bytes=bytes+file.size;
    });
    var bytesRemaining=this.formatSizeUnits(this.limit - bytes);
    return bytesRemaining + ' ' + 'remaining.';

 }

  formatSizeUnits(bytes){
    if      (bytes >= 1073741824) { bytes = parseInt((bytes / 1073741824).toFixed(2)) + " GB"; }
    else if (bytes >= 1048576)    { bytes = parseInt((bytes / 1048576).toFixed(2)) + " MB"; }
    else if (bytes >= 1024)       { bytes = parseInt((bytes / 1024).toFixed(2)) + " KB"; }
    else if (bytes > 1)           { bytes = parseInt(bytes) + " bytes"; }
    else if (bytes == 1)          { bytes = parseInt(bytes) + " byte"; }
    else                          { bytes = "0 bytes"; }
    return bytes ;
  }


  addFiles() {
    if(this.checkDataSize())
    {
      this.file.nativeElement.click();
    }
  }

  moveToPreferencesSection(){
    this.isMoveToPreferenceSection=true;
  }

}
