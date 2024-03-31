export class CreateEventDto {
  event: {
    name: {
      html: string;
    };
    start: {
      timezone: string;
      utc: Date;
    };
    end: {
      timezone: string;
      utc: Date;
    };
    currency: string;
  };
}
