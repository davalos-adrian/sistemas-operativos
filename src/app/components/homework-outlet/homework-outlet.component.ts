import { Component, OnInit} from '@angular/core';
import { HomeworkService } from '../../services/homework.service';
import { Homework } from '../../models/homework';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homework-outlet',
  templateUrl: './homework-outlet.component.html',
  styleUrls: ['./homework-outlet.component.css']
})
export class HomeworkOutletComponent implements OnInit {
  homeworks: Homework[];

  constructor(private homeworkService: HomeworkService,
              private route: ActivatedRoute,
              private router: Router
  ) {
    route.params.subscribe(val => {
      this.homeworks = this.homeworkService.getHomeworks().filter(element => {
        return element.subject == this.route.snapshot.params.subject;      
      }); 
    });
  }

  ngOnInit(): void {
    
  }

  showHomework(homework: Homework): void {
    this.router.navigate(['/homework', homework.id]);
  }

}
