import { HttpClient, HttpHeaders } from '@angular/common/http';
import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import {Poll} from '../models/poll.model';


@Injectable({
  providedIn: 'root'
})
export class PollsService {

// sukuriu masyva su kintamaisiais, testavimui
  public polls: Poll[]=[
    // {id:2, name:"Petras", surname:"Petraitis", email:"petras@one.lt", phone:"+37065558448", radio1:"300nm",radio2:"Elektronas",radio3:"Klintas Eastwoodas"}

  ];

  constructor(private http:HttpClient) { }

  public getPolls(){

    return this.http.get<Poll[]>("http://localhost:8080/customers/")

      }
    
  

  // klase skirta issaugoti ivestiems duomenims is puslapio

  public addPoll(id, name, surname, email, phone, radio1, radio2, radio3){
    return this.http.post("http://localhost:8080/customers/",{
      name:name,
      surname:surname,
      email:email,
      phone:phone,
      radio1:radio1,
      radio2:radio2,
      radio3:radio3
      
    });


  }


}
