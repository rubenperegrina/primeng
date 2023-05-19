import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeedDialModule } from 'primeng/speeddial';
import { MenuItem, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-speed-dial',
  standalone: true,
  imports: [CommonModule, SpeedDialModule, ToastModule],
  templateUrl: './speed-dial.component.html',
  styleUrls: ['./speed-dial.component.scss'],
  providers: [MessageService]
})
export default class SpeedDialComponent implements OnInit {
  items!: MenuItem[];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
      this.items = [
          {
              icon: 'pi pi-pencil',
              command: () => {
                  this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
              }
          },
          {
              icon: 'pi pi-refresh',
              command: () => {
                  this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
              }
          },
          {
              icon: 'pi pi-trash',
              command: () => {
                  this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
              }
          },
          {
              icon: 'pi pi-upload',
              routerLink: ['/fileupload']
          },
          {
              icon: 'pi pi-external-link',
              target:'_blank',
              url: 'http://angular.io'
          }
      ];
  }
}
