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

  newPhoto: any = {
    "albumId": 0,
    "id": 0,
    "title": "",
    "url": "",
    "thumbnailUrl": ""
  }

  
  // GET method to fetch all photos from the API endpoint
  getAllPhotos() {
    // Make an HTTP GET request to the specified URL and subscribe to the response.
    // subscribe() is used to handle the asynchronous response from the HTTP request.
    // It takes a callback function that will be executed when the response is received.
    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe((response: any) => {
      this.photosList = response;   // assign the response data to the photosList property
    });
  }

  // POST method to save a new photo to the API endpoint
  onSavePhoto() {
    // Make an HTTP POST request to the specified URL with the newPhoto data and subscribe to the response.
    this.http.post("https://jsonplaceholder.typicode.com/photos", this.newPhoto).subscribe((response: any) => {
      console.log("Photo saved successfully:", response);   // log the response to the console
      this.getAllPhotos();   // refresh the photos list after saving a new photo
    });
  }
}
