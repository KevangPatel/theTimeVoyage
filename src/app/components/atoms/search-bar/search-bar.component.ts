import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  @Input() placeholder: string;
  @Input() inputType: string;
  @Input() searchMethod: (searchedText: any) => any;
  @Output() searchResults: EventEmitter<any> = new EventEmitter<any>();

  searchValue: string;
  searchTectChanges: Subject<any> = new Subject<any>();

  constructor() {
    this.searchTectChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((searchedText) => this.searchMethod(searchedText))
      )
      .subscribe(
        (searchedText) => this.searchResults.emit(searchedText),
        (error) => {
          console.log(error);
        }
      );
  }

  onSearchTextChange(searchedText: string) {
    this.searchTectChanges.next(searchedText);
  }
}
