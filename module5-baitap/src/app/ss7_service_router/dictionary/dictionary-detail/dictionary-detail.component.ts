import {Component, OnInit} from '@angular/core';
import {Word} from '../../model/word';
import {ActivatedRoute} from '@angular/router';
import {WordService} from '../service/word.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: Word;

  constructor(private activateRouter: ActivatedRoute,
              private wordService: WordService) {
  }

  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      console.log(id);
      this.word = this.wordService.findById(id);
    });
  }

}
