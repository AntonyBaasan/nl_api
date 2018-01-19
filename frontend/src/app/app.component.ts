import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  results: string[];

  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('http://localhost:5000/api/values').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
    });
  }
}
