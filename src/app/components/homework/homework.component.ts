import { Component, OnInit } from '@angular/core';
import { HomeworkService } from '../../services/homework.service';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {
  
  homeworkHTML: string;
  constructor(private homeworkService: HomeworkService,
              private route: ActivatedRoute,
              private http: HttpClient) { }
  
  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.http.get('assets/homeworks/' + this.homeworkService.getHomework(id).file, {responseType: 'text'})
        .subscribe(data => this.homeworkHTML = data);
  }
}
