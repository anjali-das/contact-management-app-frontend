import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {
// to hold all contact  data from api
allContacts:any =[]
loginDetails:any = []
searchKey:string = ''
  
constructor(private api:ApiService ){
    this.loginDetails= new Date()


  }
  ngOnInit(): void {
  //  to get all contacts
  this.getAllContact()
  }

  // to get all contacts
  getAllContact(){
     // api call to get all contacts
     this.api.allContacts()
     .subscribe((result:any)=>{
       // result is all contacts array from api
       console.log(result);
       this.allContacts = result
       
     })
  }
  // deleteContact
  deleteContact(contactId:any){
    this.api.deleteContact(contactId)
    .subscribe((data:any)=>{
     
      //window.location.reload()
      this.getAllContact()
    })
  }
}
