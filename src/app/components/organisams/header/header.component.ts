import { Component } from '@angular/core';
import { SearchBarComponent } from '../../atoms/search-bar/search-bar.component';
import { IdValue, TimeLineRange } from '../../../models/mode.interface';
import { mainConstants } from '../../../constants/main.constants';
import { CommonModule } from '@angular/common';
import { UtilService } from '../../../services/util.service';
import { FormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

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
  timeLineRangeValue: string = '2100,2199';
  isCustomStep: boolean;
  customStep: number | null;

  constructor(private utilService: UtilService) {}

  ngOnInit() {}

  changeTimeline() {
    console.log(this.timeLineRangeValue);
    const range = this.timeLineRangeValue.split(',');

    this.timeLine = this.utilService.generateTimelineByRangeAndSteps(
      +range[0],
      +range[1]
    );
    console.log(this.timeLine);
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
      console.log(this.utilService.steps.getValue());
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
}
