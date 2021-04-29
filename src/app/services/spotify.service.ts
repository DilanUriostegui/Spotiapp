import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) {
    console.log('Spotify serve listo');
   }

   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBz-CqjyCje8AVHp7v2-jsuW_bIaaE24qVxXMdRahmS6pupIDBYhxRQYl6d2sNOCdecpUG9mupyaRURcxg'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
     

   }
}
