export abstract class LoggerService {
  abstract log(message: string): void;
}

export class EvenBetterLoggerService extends LoggerService {
  log(message: string) {
    console.log(`🏗 Message from EvenBetterLogger is ${message}`);
  }
}

export class MinimalLoggerService extends LoggerService {
  log(message: string) {
    console.log(message);
  }
}
