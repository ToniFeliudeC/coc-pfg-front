import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-troop-icon',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './troop-icon.component.html',
  styleUrl: './troop-icon.component.scss'
})
export class TroopIconComponent {
  @Input() name: string = 'empty';
  @Input() level: number = 0;

  getImgName(): string {
    let imgName = '';
    for (let i = 0; i < this.name.length; i++) {
      if (this.name[i] == " ") {
        imgName += "_";
      } else {
        imgName += this.name[i];
      }
    }
    imgName += '.png'

    return imgName;
  }

  getStyles() {
    return {
      'background-image': `url('../../../assets/troops/icons/${this.getImgName()}')`,
    };
  }

}
