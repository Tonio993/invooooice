import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() items : any[];
  @Input() selection : any | any[];
  @Input() selectionMode : 'single' | 'multiple' = 'single';
  @Input() label : string | ((any) => string);

  private selectionIndex: number | number[];
  private lastIndex: number = -1;

  constructor() { }

  ngOnInit() {
    if (this.selectionMode === 'multiple' && this.selection == null) {
      this.selection = [];
    }
  }

  private getLabel(item : any) : string {
    if (typeof this.label === 'string') {
      return item[this.label];
    } else if (typeof this.label === 'function') {
      return this.label(item);
    }
  }

  private isActive(item : any) : boolean {
    if (this.selection instanceof Array) {
      return this.selection.indexOf(item) !== -1;
    } else {
      return this.selection === item;
    }
  }

  private select(index : number, event : MouseEvent) : void {
    const item = this.items[index];
    switch(this.selectionMode) {
      case 'single': {
        this.selection = event.ctrlKey && this.selection == item ? null : item;
        break;
      }
      case 'multiple': {
        if (!event.ctrlKey && !event.shiftKey) {
          this.selection = [item];
          this.lastIndex = index;
        } else if (!event.shiftKey) {
          const selectedIndex = this.selection.indexOf(item);
          this.lastIndex = index;
          if (selectedIndex != -1) {
            this.selection.splice(selectedIndex, 1);
          } else {
            this.selection.push(item);
          }
        } else if (!event.ctrlKey) {
          if (this.lastIndex == -1) {
            this.selection = [item];
            this.lastIndex = index;
          } else {
            const indexFrom = this.lastIndex < index ? this.lastIndex : index;
            const indexTo = this.lastIndex > index ? this.lastIndex : index;
            this.selection = this.items.slice(indexFrom, indexTo + 1);
          }
        } else {

        }
      }
    }
  }

}