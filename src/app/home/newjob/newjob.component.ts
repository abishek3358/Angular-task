import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { LoginserviceService } from 'src/app/loginservice.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-newjob',
  templateUrl: './newjob.component.html',
  styleUrls: ['./newjob.component.scss']
})
export class NewjobComponent implements OnInit {
  jobForm!: FormGroup;
  validation: boolean = false;
  cities: any;
  jobId: any;
  resp: any;
  update: any;
  constructor(
    private formBuilder: FormBuilder,
    private service: LoginserviceService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }
  get f() {
    return this.jobForm.controls;
  }
  ngOnInit(): void {
    this.jobForm = this.formBuilder.group({
      id: [null],
      jobTitle: ['', Validators.required],
      department: ['', Validators.required],
      jobType: ['', Validators.required],
      jobLocationId: ['', Validators.required],
      jobDescription: ['', Validators.required],
      jobQualification: ['', Validators.required],
      jobHighlights: ['', Validators.required],
      jobResponsibilities: ['', Validators.required],
      status: ['INACTIVE']

    })

    this.cityGet();

    this.jobId = this.activeRoute.snapshot.params['id'];
    if (this.jobId) {
      this.service.getById(this.jobId).subscribe(
        res => {
          console.log(res)
          this.resp = res.data;
          this.jobForm.patchValue({
            id: this.resp.id,
            jobTitle: this.resp.jobTitle,
            department: this.resp.department,
            jobType: this.resp.jobType,
            jobLocationId: this.resp.jobLocationId,
            jobDescription: this.resp.jobDescription,
            jobQualification: this.resp.jobQualification,
            jobHighlights: this.resp.jobHighlights,
            jobResponsibilities: this.resp.jobResponsibilities,
            status: 'INACTIVE'
          })
        }
      )
    }
  }
  cityGet(){
    this.service.cityGet().subscribe(
      res => {
        this.cities = res.data;
      }
    )
  }
  newjobForm() {
    this.validation = true;
    if (this.jobForm.invalid) {
      return;
    }
    else if (this.jobId) {
      this.service.updateJob(this.jobForm.value).subscribe(
        res => {
        }
      )
      this.route.navigate(['/home/jobpage']);
    }
    else {
      this.service.createJob(this.jobForm.value).pipe(first()).subscribe(
        res => {
        }
      )
      this.route.navigate(['/home/jobpage']);
    }
  }
}
