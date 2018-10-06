import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() tabs: Array<string>
  @Input() active_tab: string
  @Output() tabbed = new EventEmitter<string>()

  onChangeTab(id: string) {
    this.tabbed.emit(id)
  }
}
