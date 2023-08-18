import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IPerson } from 'src/app/services/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent implements OnInit, OnDestroy {

  public personForm: FormGroup = new FormGroup({});
  persons: IPerson[] = [];
  person: IPerson = new IPerson();

  password: boolean = true;
  type: boolean = true;
  visible: boolean = false;
  edit: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public personService: PersonService,
    public modalService: NgbModal,
    public activeModalService: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.personForm = this.formBuilder.group(
      {
        id: [''],
        id_type: ['', Validators.required],
        id_number: ['', Validators.required],
        name: ['', Validators.required],
        lastname: ['', Validators.required],
        cellphone: ['', Validators.required],
        email: ['', Validators.required],
        level: [''],
        username: ['', Validators.required],
        password: ['', Validators.required],
        active: ['']
      }
    );
    if (this.personService.personSelected) {
      this.personForm.patchValue(
        {
          id: this.personService.personSelected.id,
          id_type: this.personService.personSelected.id_type,
          id_number: this.personService.personSelected.id_number,
          name: this.personService.personSelected.name,
          lastname: this.personService.personSelected.lastname,
          cellphone: this.personService.personSelected.cellphone,
          email: this.personService.personSelected.email,
          level: this.personService.personSelected.level,
          username: this.personService.personSelected.username,
          password: this.personService.personSelected.password,
          active: this.personService.personSelected.active
        }
      );
    }
  }

  viewPassword() {
    this.visible = !this.visible;
    this.type = !this.type;
  }

  isSelectedToForm() {
    if (this.personService.personSelected) {
      this.updatePerson();
      this.activeModalService.close();
    } else {
      this.savePerson();
      this.activeModalService.close();
    }
  }

  savePerson(): void {
    this.person = { ...this.personForm.value}
    this.personService.create(this.person).subscribe(
      resp => {
        console.log(resp);
        this.edit = true
        this.refresh();
      },
      err => {
        console.log(err);
      }
    );
  }

  updatePerson(): void {
    this.person = { ...this.personForm.value}
    this.personService.update(this.person).subscribe(
      resp => {
        console.log(resp);
        this.edit = true
        this.refresh();
      },
      err => {
        console.log(err);
      }
    );
  }

  refresh() {
    window.location.reload();
  }

  ngOnDestroy(): void {
    this.personService.personSelected = undefined;
  }
}
