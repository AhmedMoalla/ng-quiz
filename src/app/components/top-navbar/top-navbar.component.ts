import { TitleService } from 'src/app/services/title.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  title$: Observable<string>;
  constructor(private titleService: TitleService) { }

  ngOnInit() {
    this.title$ = this.titleService.getTitle();
  }

}
