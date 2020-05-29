import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() items : any[];
  @Input() selection : any | any[];
  @Input() selectionMode : 'single' | 'multiple' = 'multiple';
  @Input() label : string | ((any) => string);

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
        if (event.ctrlKey && this.selection == item) {
            this.selection = null;
        } else {
          this.selection = item;
        }
        break;
      }
    }
  }

}