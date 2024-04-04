import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { map, of } from 'rxjs';
import { mainConstants } from '../../../constants/main.constants';
import { IdValue, TimeLineRange } from '../../../models/mode.interface';
import { ApiService } from '../../../services/api.service';
import { UtilService } from '../../../services/util.service';
import { SearchBarComponent } from '../../atoms/search-bar/search-bar.component';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [SearchBarComponent, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  timeLineRange: TimeLineRange[] = mainConstants.timeLineRange;
  rangeList: IdValue[] = mainConstants.rangeList;
  timeLine: number[] = [];

  selectedRange: number = 10;
  timeLineRangeValue: string = '2000,2099';
  isCustomStep: boolean;
  customStep: number | null;

  constructor(
    private utilService: UtilService,
    private apiService: ApiService
  ) {}

  ngOnInit() {}

  changeTimeline() {
    const range = this.timeLineRangeValue.split(',');
    this.timeLine = this.utilService.generateTimelineByRangeAndSteps(
      +range[0],
      +range[1]
    );
    this.utilService.timeLineList.next(this.timeLine);
  }

  changeRange() {
    const selectedRange = +this.selectedRange;
    if (selectedRange == 5) {
      this.isCustomStep = true;
    } else {
      this.customStep = null;
      this.isCustomStep = false;
      this.utilService.steps.next(selectedRange);
      this.changeTimeline();
    }
  }

  customStepChange() {
    if (this.customStep) {
      this.utilService.steps.next(this.customStep);
    } else {
      this.utilService.steps.next(10);
    }
    this.changeTimeline();
  }

  onSearch(searchedText: string) {
    if (searchedText == '') {
      return of(false);
    } else {
      return this.apiService.getAllEvents().pipe(
        map((events: any[]) => {
          return events.filter((event) =>
            event.title.toLowerCase().includes(searchedText.toLowerCase())
          );
        })
      );
    }
  }

  onSearchByYear(searchedText: number) {
    if (searchedText) {
      this.utilService.timeLineList.next([+searchedText]);
      return of(true);
    } else {
      return of(false);
    }
  }

  onSearchResultsForYear(searchResult: any) {
    if (searchResult) {
    } else {
      this.timeLine = this.utilService.generateTimelineByRangeAndSteps(
        2000,
        2090
      );
      this.utilService.timeLineList.next(this.timeLine);
    }
  }

  onSearchResults(searchResult: any) {
    if (searchResult) {
      this.timeLine =
        searchResult && searchResult.map((event: any) => event.date);
      this.utilService.timeLineList.next(this.timeLine);
    } else {
      this.timeLine = this.utilService.generateTimelineByRangeAndSteps(
        2000,
        2090
      );
      this.utilService.timeLineList.next(this.timeLine);
    }
  }
}
