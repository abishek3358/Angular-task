import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/loginservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-jobpage',
  templateUrl: './jobpage.component.html',
  styleUrls: ['./jobpage.component.scss']
})
export class JobpageComponent implements OnInit {
  job: any
  tableData: any
  obj: any = {
    pagination: {
      index: 1,
      rowCount: -1,
      searchObj: null,
      sortingObj: null
    }
  }

  constructor(
    private sevice: LoginserviceService,
    private route:Router
  ) { }

  ngOnInit(): void {

    this.sevice.getJob(this.obj).subscribe(
      res => {
        this.tableData = res.data.tableData
      }
    )

  }
  editJob(id:any){
    this.route.navigate(['/home/newjob', id])
  }

}
