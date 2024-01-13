import { Controller, Get } from '@nestjs/common';
import { infoResponseI } from './app.types';

@Controller()
export class AppController {
  constructor() {}

  @Get('/')
  info(): infoResponseI {
    return {
      version: 0.1,
      descriptoion: `'${process.env.PROJECT_NAME}' project providing posibility connect Teachers(Coaches) and Students each other in World Wide Web`,
    };
  }
}
