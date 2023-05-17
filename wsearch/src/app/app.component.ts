import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

interface Search {
  title: string;
  snippet: string;
  pageid: number;
 }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages:Search[] = [];

  constructor(private wikipedia: WikipediaService) {}

  onTerm(term:string) {
    this.wikipedia.search(term).subscribe((response) => {
      //observer
      this.pages = response;
    })
  }
}
