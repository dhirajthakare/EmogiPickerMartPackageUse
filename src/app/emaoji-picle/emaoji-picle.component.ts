import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emaoji-picle',
  templateUrl: './emaoji-picle.component.html',
  styleUrls: ['./emaoji-picle.component.css']
})
export class EmaojiPicleComponent implements OnInit {

  constructor() { }
  sets = [
    'native',
    'google',
    'twitter',
    'facebook',
    'emojione',
    'apple',
    'messenger'
  ];
  set = 'twitter';
  searchBox="hello";
  message = '';
  showEmojiPicker:boolean=false;
  ngOnInit(): void {
  }

  toggleEmojiPicker() {
    console.log(this.showEmojiPicker);
    this.showEmojiPicker = !this.showEmojiPicker;
  }
  addEmoji(event) {
    const message = this.message;
    console.log(event.emoji.native);
    const text = message+event.emoji.native;

    this.message = text;
    // this.showEmojiPicker = false;
  }

  onFocus() {
    console.log('focus');
    this.showEmojiPicker = false;
  }
  onBlur() {
    alert('blur');
  }

  


}
