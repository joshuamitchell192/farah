import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatSnackBar} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import * as dataFile from './data.json';


export interface ContactDialogueData {
  name : string;
  email : string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name : string;
  email : string;
  subject: string;
  message: string;

  emailValidator = new FormControl('', [Validators.required, Validators.email]);

  constructor(public dialog: MatDialog) {  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactDialog, {
      width: '400px',
      data: {name: this.name, email: this.email, subject: this.subject, message: this.message}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result.name;
      this.email = result.email;
      this.subject = result.subject;
      this.message = result.message;
    });
  }

  getErrorMessage() {
    return this.emailValidator.hasError('required') ? 'You must enter a value' :
        this.emailValidator.hasError('email') ? 'Not a valid email' :
            '';
  }

}


@Component({
  selector : 'contact-dialog',
  templateUrl : './ContactDialog.html',
})
export class ContactDialog {
  constructor (public dialogRef: MatDialogRef<ContactDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ContactDialogueData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  printData () {
    console.log("Saving user details...\n" +"Name " + this.data.name + "\nEmail " + this.data.email + "\nSubject "  + this.data.subject + "\nMessage \n" + this.data.message);
  }

  storeData () {
    //dataFile = JSON.parse(dataFile)
    //dataFile.push({Name:this.data.name, Email:this.data.email, Subject: this.data.subject, Message: this.data.message})

  }
}

