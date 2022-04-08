import { Component, OnInit } from '@angular/core';
import { Poll } from 'src/app/models/poll.model';
import { PollsService } from 'src/app/services/polls.service';

@Component({
  selector: 'app-atsakymai',
  templateUrl: './atsakymai.component.html',
  styleUrls: ['./atsakymai.component.css']
})
export class AtsakymaiComponent implements OnInit {

  // susikuriu kintamaji
  public pollsAnswers:Poll[]=[];
  public isLoading=true;
// issikvieciu objekta su servicais
  constructor(private pollsService:PollsService) { }

  ngOnInit(): void {

   this.isLoading=true; 
   //iskvieciu is http objekta, get metoda ir metodas grazins observable(t.y. f-jos bus vykdomos tik tada kai bus persiusti duomenys)
   this.pollsService.getPolls()
   //su metodu subscribe, galima ivykdyti funkcijas kai duomenys bus gauti

   .subscribe(
     //lamda israiska kur bus talpinami duomnys kai bus persiusti
     (response)=>{

      // *ngFor metodui, kur html naudosiu,  kintamuosius prisiskiriu
    this.pollsAnswers=response;
    this.isLoading=false;

     }
   );

    
 
  }

}
