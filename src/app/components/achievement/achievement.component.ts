import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-achievement',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.scss'
})
export class AchievementComponent {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() completitionInfo: string = '';
  @Input() value: number = 0
  @Input() target: number = 0
  @Input() stars: number = 0;

  isCompleted(): boolean {
    return this.value >= this.target;
  }

  getStarsBackground(): string {
    switch (this.stars) {
        case 1:
            return 'url("../../../assets/stars-1.png")';
        case 2:
            return 'url("../../../assets/stars-2.png")';
        case 3:
            return 'url("../../../assets/stars-3.png")';
        case 0:
            return 'url("../../../assets/stars-0.png")';
        default:
            return 'url("../../../assets/stars-0.png")';
    }
}

}
