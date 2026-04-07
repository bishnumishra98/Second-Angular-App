import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-photos',
  imports: [],
  templateUrl: './photos.html',
  styleUrl: './photos.css',
})
export class Photos {
  photosList: any[] = [];

  // Older method(Dependency Injection): It was used before Angular 16.
  // constructor(private http: HttpClient) {
  // }

  // Introduced from Angular 16, it is a new way to inject dependencies without using constructor.
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllPhotos();   // call the method to fetch photos when the component initializes
  }

  getAllPhotos() {
    // Make an HTTP GET request to the specified URL and subscribe to the response.
    // subscribe() is used to handle the asynchronous response from the HTTP request.
    // It takes a callback function that will be executed when the response is received.
    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe((response: any) => {
      this.photosList = response;   // assign the response data to the photosList property
    });
  }
  
}
