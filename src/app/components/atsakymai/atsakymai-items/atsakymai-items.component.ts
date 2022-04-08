import { Component, Input, OnInit } from '@angular/core';
import { PollsService } from 'src/app/services/polls.service';

@Component({
  selector: 'app-atsakymai-items',
  templateUrl: './atsakymai-items.component.html',
  styleUrls: ['./atsakymai-items.component.css']
})
export class AtsakymaiItemsComponent implements OnInit {

  @Input() poll;

  constructor(private pollsService:PollsService) { }

  ngOnInit(): void {
  }

}
