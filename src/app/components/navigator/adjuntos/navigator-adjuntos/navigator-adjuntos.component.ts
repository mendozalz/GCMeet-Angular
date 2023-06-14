import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-navigator-adjuntos',
  templateUrl: './navigator-adjuntos.component.html',
  styleUrls: ['./navigator-adjuntos.component.css'],
  providers: [MessageService]
})
export class NavigatorAdjuntosComponent {
  
  constructor(private messageService: MessageService) {}

    onUpload(event:any) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }

}
