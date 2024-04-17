import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonComponent } from '@types-trick/ui-components';
import {
  LoggerService,
  MinimalLoggerService,
} from '../../services/logger/logger.service';

@Component({
  selector: 'types-trick-di',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  providers: [
    {
      provide: LoggerService,
      useClass: MinimalLoggerService,
    },
  ],
  templateUrl: './di.component.html',
  styleUrl: './di.component.scss',
})
export class DiComponent {
  private loggerService = inject(LoggerService);

  triggerLog(message: string) {
    this.loggerService.log(message);
  }
}
