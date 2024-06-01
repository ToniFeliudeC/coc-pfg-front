import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coc-table',
  standalone: true,
  imports: [],
  templateUrl: './coc-table.component.html',
  styleUrl: './coc-table.component.scss'
})
export class CocTableComponent {
  @Input() players: any;

  // Función para eliminar el primer carácter del tag
  getTrimmedTag(tag: string): string {
    return tag ? tag.substring(1) : '';
  }
}
