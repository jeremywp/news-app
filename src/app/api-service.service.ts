import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private topURL = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=bd8960afdf9948aaa291d793d20c2915';

  constructor(private http: HttpClient) { }

  getTopNews(){
    console.log(this.http.get(this.topURL));
    return this.http.get(this.topURL);
  }
}


/*import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Player} from './player';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private courseURL = 'https://golf-courses-api.herokuapp.com/courses';
  private courseID = null;
  teeID = null;
  players: Player[];
  numPlayers: number;

  constructor(
    private http: HttpClient,
    ) {
    this.players = [];
  }

  getAPI(){
    return this.http.get(this.courseURL)
  }

  getCourseData(){
    return this.http.get(this.courseURL + "/" + this.courseID);
  }

  setCourseID(courseID){
    this.courseID = courseID;
  }
}
*/
