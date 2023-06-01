import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mycontact } from 'src/models/mycontact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {
groups:any = []
contact:Mycontact ={}
  constructor(private api:ApiService,private addContactRouter:Router){
    this.contact.groupId ='Select A Group'

  }
  ngOnInit(): void {
    this.api.allGroups()
    .subscribe((result:any)=>{
      console.log(result);
      this.groups =result
      
    })
  }

// addContact
addContact(contact:any){
this.api.addContact(contact)
.subscribe((data:any)=>{
  alert('New contact added successfully')
  // redirect to all contact page
  this.addContactRouter.navigateByUrl('')
  
})
}

  
}
