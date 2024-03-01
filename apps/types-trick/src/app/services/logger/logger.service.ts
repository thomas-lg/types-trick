import { Injectable } from '@angular/core';

@Injectable()
export abstract class LoggerService {
  abstract log(message: string): void;
}

@Injectable()
export class EvenBetterLogger extends LoggerService {
  log(message: string) {
    console.log(`🏗 Message from EvenBetterLogger is ${message}`);
  }
}

@Injectable()
export class MinimalLogger extends LoggerService {
  log(message: string) {
    console.log(message);
  }
}
