import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cards-feed',
  templateUrl: './cards-feed.component.html',
  styleUrls: ['./cards-feed.component.scss']
})
export class CardsFeedComponent implements OnInit {
feedObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.feedObservable = this.getCards('/stickers');
  }

  getCards(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();  

}

}
