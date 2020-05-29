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
  private lastSelected: number = -1;

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

  private select(item : any, event : MouseEvent) : void {
    switch(this.selectionMode) {
      case 'single': {
        this.selection = event.ctrlKey && this.selection == item ? null : item;
        break;
      }
      case 'multiple': {
        if (!event.ctrlKey) {
          this.selection = [item];
        } else {
          const index = this.selection.indexOf(item);
          if (index == -1) {
            this.selection.push(item);
          } else {
            this.selection.splice(index, 1);
          }
        }
      }
    }
  }

}