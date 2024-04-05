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
  showEmptyMessage: boolean;
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

  increaseOrdecreaseRange(increase: boolean) {
    const currentStep = this.utilService.steps.getValue();
    let value;
    if (increase) {
      value = currentStep == 1 ? currentStep * 10 : currentStep + 10;
    } else {
      value = currentStep == 10 ? currentStep / 10 : currentStep - 10;
      if (value < 1) {
        value = 1;
      }
    }
    const calculateMaxRange = this.utilService.timeLineList.getValue();
    const maxRange = calculateMaxRange[calculateMaxRange.length - 1];
    const minRange = calculateMaxRange[0];
    
    if(minRange+value > maxRange){
      return
    }
    if (value >= 1) {
      this.utilService.steps.next(value);
      this.changeTimeline();
    }
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
    this.showEmptyMessage = false;
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
    if (searchResult.length) {
      this.timeLine =
        searchResult && searchResult.map((event: any) => event.date);
      this.utilService.timeLineList.next(this.timeLine);
      this.showEmptyMessage = false;
    } else {
      this.showEmptyMessage = false;
      this.timeLine = this.utilService.generateTimelineByRangeAndSteps(
        2000,
        2090
      );
      this.utilService.timeLineList.next(this.timeLine);
    }
  }
}
