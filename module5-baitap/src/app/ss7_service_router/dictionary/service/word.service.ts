import {Injectable} from '@angular/core';
import {Word} from '../../model/word';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  wordList: Word [] = [
    {
      id: 1,
      word: 'Secretary',
      mean: 'Thư ký'
    },
    {
      id: 2,
      word: 'Doctor',
      mean: 'Bác sĩ'
    },
    {
      id: 3,
      word: 'Teacher',
      mean: 'Giáo viên'
    },
    {
      id: 4,
      word: 'Repairman',
      mean: 'Thợ sửa chữa'
    },
    {
      id: 5,
      word: 'Expert',
      mean: 'Chuyên viên'
    }
  ];

  constructor() {
  }

  findAll(): Word[] {
    return this.wordList;
  }

  findById(id: number): Word {
    return this.wordList.filter(word => word.id === id)[0];
  }
}
