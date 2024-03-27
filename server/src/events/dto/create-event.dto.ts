

export class CreateEventDto {

    start: {
        timezone: string;
        utc: string; 
    };

    end: {
        timezone: string;
        utc: string; 
    };

    currency: string;
    
    name: {
        html: string; 
    };
}
