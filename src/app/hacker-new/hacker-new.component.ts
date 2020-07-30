import { Component, OnInit } from '@angular/core';
import {IArticle} from "./IArticle/iArticle";

@Component({
  selector: 'app-hacker-new',
  templateUrl: './hacker-new.component.html',
  styleUrls: ['./hacker-new.component.css']
})
export class HackerNewComponent implements OnInit {

  articles: IArticle[] = [
    {
      title: 'Nhóm chuyên gia chứng minh ta có thể nhìn vào bóng đèn cũng nghe trộm được người khác đang nói gì',
      url: 'https://genk.vn/nhom-chuyen-gia-chung-minh-ta-co-the-nhin-vao-bong-den-cung-nghe-trom-duoc-nguoi-khac-dang-noi-gi-20200730174830439.chn'
    },
    {
      title: 'Quân đội Mỹ sắp trang bị bộ giáp \'siêu nhân\' giúp người mặc khỏe gấp 10 lần so với người thường',
      url: 'https://genk.vn/quan-doi-my-sap-trang-bi-bo-giap-sieu-nhan-giup-nguoi-mac-khoe-gap-10-lan-so-voi-nguoi-thuong-20200730155803674.chn'
    },
    {
      title: 'Lý giải vì sao witcher lại sử dụng kiếm bạc để chiến đấu với quái vật dưới góc nhìn khoa học',
      url: 'https://genk.vn/ly-giai-vi-sao-witcher-lai-su-dung-kiem-bac-de-chien-dau-voi-quai-vat-duoi-goc-nhin-khoa-hoc-20200729172207111.chn'
    },
    {
      title: 'Google sẽ tự động backup smartphone của bạn miễn phí',
      url: 'https://genk.vn/google-se-tu-dong-backup-smartphone-cua-ban-mien-phi-20200730104025986.chn'
    }
  ]

  newArticle: IArticle ={
    title: '',
    url: ''
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.articles)
  }

  createNewArticle(): IArticle[] {
    this.newArticle.title = document.getElementById('article-title').value;
    this.newArticle.url = document.getElementById('article-url').value;
    this.articles.push(this.newArticle);
    return this.articles;
  }


}
