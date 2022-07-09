import { Component, Inject, inject, Input, OnInit, ViewChild } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-mail-preference',
  templateUrl: './mail-preference.component.html',
  styleUrls: ['./mail-preference.component.css']
})
export class MailPreferenceComponent implements OnInit {

  @Input() dataSource:Set<File> ;

  to_emailFormControl = new FormControl('', [ Validators.email]);
  from_emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  mailBodyFormControl = new FormControl('', [Validators.required]);

  public limit=1073741824;
  public progress = 0;

  toEmailsList: Array<string>=[];

  displayedColumns: string[] = [ 'name'];
  constructor(
    @Inject('DocumentManagerService') private documentManagerService,
  )
  {

  }

  ngOnInit(): void {
    this.toEmailsList=[];
  }

  BindToEmails(){
    var emailValue=this.to_emailFormControl.value;
    if(emailValue != undefined)
    {
      var isValid=this.validateEmailPattern(emailValue);
      if(isValid){
        this.toEmailsList.push(emailValue);

        this.to_emailFormControl.setValue('');
      }
    }
  }

  validateEmailPattern(email){
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  removeToEmail(value)
  {
    const index=this.toEmailsList.indexOf(value);

    if(index != -1){
      this.toEmailsList.splice(index,1);
    }
  }

  UploadFiles() {
    var formData = new FormData();
    this.dataSource.forEach(file => {
      formData.append('file', file,file.name);
    });

    this.documentManagerService.uploadFIles('asdsad1232asdasd',formData)
    .subscribe({
      next: (response) => {
        this.progress=Math.round(response['loaded']/response['total'] * 100);
        if(this.progress > 0)
          console.log("file uploaded " + this.progress + " %");
      },
      error: (error) => {console.log(error)},
    });
  }

}
