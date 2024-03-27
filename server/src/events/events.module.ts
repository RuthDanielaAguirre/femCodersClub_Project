import { Module } from '@nestjs/common';
import { EventbriteService } from './events.service';
import { EventsController } from './events.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    })
  ],
  controllers: [EventsController],
  providers: [EventbriteService],
})
export class EventsModule {}





// @Module({
//   imports: [
//     HttpModule.registerAsync({
  //useFactory: async (consigService: ConfigService) => ({
//       timeout: configService.get('HTTP_TIMEOUT'),
//       maxRedirects: configService.get('HTTP_MAX_REDIRECTS')
//     })
//})
//   ],
//   controllers: [EventsController],
//   providers: [EventsService],
// })
// export class EventsModule {}