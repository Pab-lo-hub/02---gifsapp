import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'mzzcZfioZ6dDyoWlBVpR2m49Bco5AE5T';
  private _historial: string[] = [];

  public resultados: any[] = [];

  get historial() {

    return [...this._historial];
  }

  constructor(private http: HttpClient) { }

  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase()
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
    }
    this._historial = this._historial.splice(0, 10);

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=mzzcZfioZ6dDyoWlBVpR2m49Bco5AE5T&q=${ query }&limit=10`)
      .subscribe((resp: any) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });

  }

}
