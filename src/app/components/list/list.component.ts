import { Component, ElementRef, Input, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { PollsService } from 'src/app/services/polls.service';
import { QuestionsService } from 'src/app/services/questions.service';
import { Router } from '@angular/router';
import { Questions } from 'src/app/models/questions.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public name=null;
  public quary=null;
  public questionsQ:Questions[]=[];

  trackByItems(index: number, questions: Questions): number { return questions.id; }
  
  // susikuriu objekta ir issikviciu services
  constructor(
    private pollsService:PollsService, 
    private router:Router,
    private questionsService:QuestionsService 
    ) { }


  ngOnInit(): void {
    
    this.questionsService.getQuestions()
    .subscribe(
      (response)=>{
        this.questionsQ=response;
      }
    )
  }

  reloadCurrentPage() {
    window.location.reload();
   }

  public onSubmit(form){
    let values=form.form.value;
    // siunciu i servisa ir susidedu duomenis, duomenis gaunu ngForm pagalba
    this.pollsService.addPoll(
      null,
      values.name,
      values.surname,
      values.email,
      values.phone, 
      values.radio1, 
      values.radio2, 
      values.radio3)
    .subscribe(
      (response)=>{
        this.router.navigate(['/atsakymai']);
      }
    );
    

  }

}
