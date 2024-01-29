import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CommunicationTypes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;
}
