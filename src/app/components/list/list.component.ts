import { Component, ElementRef, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { PollsService } from 'src/app/services/polls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public name=null;
  
  // susikuriu objekta ir issikviciu services
  constructor(private pollsService:PollsService, private router:Router) { }

  ngOnInit(): void {
  }

  reloadCurrentPage() {
    window.location.reload();
   }

  public onSubmit(form){
    let values=form.form.value;
    // siunciu i servisa ir susidedu duomenis, duomenis gaunu ngForm pagalba
    this.pollsService.addPoll(null,values.name,values.surname,values.email,values.phone, values.radio1, values.radio2, values.radio3)
    .subscribe(
      (response)=>{
        this.router.navigate(['/atsakymai']);
      }
    );
    

  }

}
