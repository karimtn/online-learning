import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CourService {

constructor(public _http: Http) { }



//get all courses
getAllCours()
{
  return this._http.get('http://localhost:3000/api/cours/listcours')
  .map(results=>results.json());
}

//get courses by id
getCoursById(id: string) {
  return this._http.get('http://localhost:3000/api/cours/listcours/' + id)
    .map(result => result.json());

}
//get courses by categorie
getCoursByCategorie(name) {
  console.log('test service');
  return this._http.get('http://localhost:3000/api/categories/' + name)
  .map(result => result.json());
 }

}
