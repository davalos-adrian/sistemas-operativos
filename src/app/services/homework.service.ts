import { Injectable } from '@angular/core';
import { Homework } from '../models/homework';
import HOMEWORKS from '../../assets/homeworks.json';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {
  
  homeworks: Homework[] = HOMEWORKS;

  constructor() { }

  getHomeworks(): Homework[] {
    return this.homeworks;
  }

  getHomework(id: number): Homework {
    return this.homeworks.find(element => element.id == id);
  } 
}
