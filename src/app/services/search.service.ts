import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQuerySubject = new BehaviorSubject<string>('');
  searchQuery$ = this.searchQuerySubject.asObservable(); 

  updateSearchQuery(query: string) {
    this.searchQuerySubject.next(query.toLowerCase()); 
  }

  clearSearchQuery() {
    this.searchQuerySubject.next('');
  }
}
