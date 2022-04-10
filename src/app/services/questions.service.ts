import { HttpClient, HttpHeaders } from '@angular/common/http';
import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import {Questions} from '../models/questions.model';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  public questionsQ: Questions[]=[
    // {id:2, query:"testas"}
  ];

  constructor(private http:HttpClient) { }

  public getQuestions(){

    return this.http.get<Questions[]>("http://localhost:8080/questions/")

      }
    
  public addQuestions(id, query){
    return this.http.post("http://localhost:8080/questions/",{
        query:query
      
    });


  }


}