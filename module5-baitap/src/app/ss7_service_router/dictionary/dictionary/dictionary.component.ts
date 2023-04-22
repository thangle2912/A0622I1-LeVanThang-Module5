import {Component, OnInit} from '@angular/core';
import {Word} from '../../model/word';
import {WordService} from '../service/word.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  wordList: Word [];

  constructor(private wordService: WordService) {
  }

  ngOnInit(): void {
    this.wordList = this.wordService.findAll();
  }

}
