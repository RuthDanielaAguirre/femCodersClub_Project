import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn('increment')
  idEvent: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  eventName: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  eventDescription: string;

  @Column()
  @IsDate()
  @IsNotEmpty()
  eventDate: Date;

  @Column()
  @IsString()
  @IsNotEmpty()
  eventDuration: string;

  @Column()
  @IsNumber()
  @IsNotEmpty()
  eventCapacity: number;

  @Column()
  @IsNumber()
  @IsNotEmpty()
  eventAttendee: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  eventRating: string;
}
