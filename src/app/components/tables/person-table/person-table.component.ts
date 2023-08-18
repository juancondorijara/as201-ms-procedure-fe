import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/components/toast.service';
import { IPerson } from 'src/app/services/models/person.model';
import { PersonService } from 'src/app/services/person.service';
import Swal from 'sweetalert2';
import { PersonFormComponent } from '../../forms/person-form/person-form.component';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.css']
})
export class PersonTableComponent implements OnInit {

  @ViewChild('status') status!: ElementRef;
  selectedStatus: number | undefined;

  persons: IPerson[] = [];
  data!: PersonFormComponent;
  activeStatus: boolean = true;

  actualPage = 1;
  pageSize = 10;

  constructor(
    private personService: PersonService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.showAllPersons();
  }

  statusSelected(): void {
    this.selectedStatus = this.status.nativeElement.value;
    if (this.selectedStatus == 1) {
      this.ngOnInit();
    }
    if (this.selectedStatus == 2) {
      this.activeStatus = true;
      this.showPersonsByStatus(true);
    }
    if (this.selectedStatus == 3) {
      this.activeStatus = false;
      this.showPersonsByStatus(false);
    }
  }

  showAllPersons(): void {
    this.personService.listAll().subscribe(
      (rest: any) => {
        this.persons = rest;
        console.log("Mostrando a todas las personas: ", rest);
      }
    );
  }

  showPersonsByStatus(status: boolean) {
    this.personService.listByStatus(status).subscribe(
      (rest: any) => {
        this.persons = rest;
        console.log("Mostrando datos por estado: ", rest);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deletePerson(id: number) {
    Swal.fire(
      {
        position: 'top-end',
        icon: 'success',
        title: 'El dato ha sido eliminado',
        showConfirmButton: false,
        timer: 1500
      }
    ).then(
      (result) => {
        if (result.isConfirmed) {
          this.personService.deleteById(id).subscribe(
            data => {
              console.log(data);
            },
            err => {
              console.log(err);
            }
          );
        }
      }
    );
  }

  restorePerson(id: number) {
    this.personService.restoreById(id).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();
      },
      err => {
        console.log(err);
      }
    );
  }

  openModal() {
    this.modalService.open(PersonFormComponent,{centered: true, backdrop: 'static'});
  }

  openEditModal(data: any) {
    this.modalService.open(PersonFormComponent, {centered: true, backdrop: 'static'});
    this.personService.personSelected = data;
    // this.personService.personSelected = data;
    // modalRef.componentInstance.dataBack = this.personService.personSelected;
    // modalRef.result.then(
    //   (result) => {
    //     if (result) {
    //       console.log(result);
    //     }
    //   }
    // );
  }

  // showStandard() {
	// 	this.toastService.show(
  //     'Esto es una notificación sencilla',
  //     {
  //       delay: 5000,
  //       autohide: true
  //     }
  //   );
	// }

  // showDeleteNotification() {
  //   this.toastService.show(
  //     'El usuario ha sido eliminado con éxito',
  //     {
  //       classname: 'bg-danger text-light',
  //       delay: 5000,
  //       autohide: false,
  //       headertext: 'Eliminado!!!'
  //     }
  //   );
  // }
}
