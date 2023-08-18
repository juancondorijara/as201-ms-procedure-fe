import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProcedure } from 'src/app/services/models/procedure.model';
import { ProcedureService } from 'src/app/services/procedure.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-procedure-table',
  templateUrl: './procedure-table.component.html',
  styleUrls: ['./procedure-table.component.css']
})
export class ProcedureTableComponent implements OnInit {

  procedures: IProcedure[] = [];
  public procedureForm: FormGroup = new FormGroup({});
  //procedure: procedureModel = new procedureModel();

  //message: string | undefined;
  message: string = 'Corregir el DNI, esta borroso';

  procedure_type_list: number | undefined;
  procedure_phase_id_list: number = 0;

  visible_note: boolean = true;
  visible_documents_attachments: boolean = true;

  visible_lote: boolean = true;
  visible_rejection: boolean = true;
  visible_consolidation: boolean = true;
  visible_consolidation_drive: boolean = true;
  visible_consolidation_ipfs: boolean = true;

  constructor(
    private procedureService: ProcedureService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    //this.procedure_type_list = 1;
    //this.listProcedure();
    this.procedure_phase_id_list = 4;
    this.listProcedureByPhaseId();
  }

  initForm(): void {
    this.procedureForm = this.formBuilder.group(
      {
        id: [''],
        unique_identifier:[''] ,
        procedure_config_id:[''] ,
        phase_id:[''] ,
        person_id:[''] ,
        student_id:[''] ,
        institute_id:[''] ,
        batch: [''] ,
        note:[''],
        institutional_email:['', Validators.required] ,
        message:['', Validators.required]
      }
    );
    if (this.procedureService.procedureSelected) {
      this.procedureForm.patchValue({
          id: this.procedureService.procedureSelected.id,
          procedureConfigId: this.procedureService.procedureSelected.procedureConfigId,
          phaseId: this.procedureService.procedureSelected.phaseId,
          personId: this.procedureService.procedureSelected.personId,
          studentId: this.procedureService.procedureSelected.studentId,
          batch: this.procedureService.procedureSelected.batch,
          note: this.procedureService.procedureSelected.note,
          collaboratorTypeId: this.procedureService.procedureSelected.collaboratorTypeId,
          
          createdDate: this.procedureService.procedureSelected.createdDate,
          modifiedDate: this.procedureService.procedureSelected.modifiedDate,

          active: this.procedureService.procedureSelected.active,
          institutionalEmail: this.procedureService.procedureSelected.institutionalEmail,
          message: this.procedureService.procedureSelected.message
      });
    }
  }

  listProcedure(): void {
    if(this.procedure_type_list == 1){
      this.visible_lote = false;
      this.visible_rejection = true;
      this.listByBatchNull();
    }
    if(this.procedure_type_list == 2){
      this.visible_lote = true;
      this.visible_rejection = false;
      this.listByBatchNotNull();
    }
    if(this.procedure_type_list == 3){
      this.listAll();
    }
  }

  listProcedureByPhaseId(): void {
    if(this.procedure_phase_id_list == 4){
      this.visible_note = true;
      this.visible_documents_attachments = true;

      this.visible_lote = false;
      this.visible_rejection = true;

      this.visible_consolidation = false;
      this.visible_consolidation_drive = false;
      this.visible_consolidation_ipfs = false;

      this.listByPhaseId();
    }
    if(this.procedure_phase_id_list == 5){
      this.visible_note = false;
      this.visible_documents_attachments = false;

      this.visible_lote = true;
      this.visible_rejection = false;

      this.visible_consolidation = true;
      this.visible_consolidation_drive = true;
      this.visible_consolidation_ipfs = false;

      this.listByPhaseId();
    }
    if(this.procedure_phase_id_list == 6){
      this.visible_note = false;
      this.visible_documents_attachments = false;

      this.visible_lote = true;
      this.visible_rejection = false;

      this.visible_consolidation = true;
      this.visible_consolidation_drive = false;
      this.visible_consolidation_ipfs = true;

      this.listByPhaseId();
    }

    if(this.procedure_phase_id_list == 7){
      this.visible_note = false;
      this.visible_documents_attachments = false;

      this.visible_lote = true;
      this.visible_rejection = false;

      this.visible_consolidation = true;
      this.visible_consolidation_drive = false;
      this.visible_consolidation_ipfs = true;

      this.listByPhaseId();
    }
  }

  listAll(): void {
    this.procedureService.listAll().subscribe((rest: any) => {
      this.procedures = rest;
      console.log("procedure", rest);
    })
  }

  //solo mapeo, no lo uso
  listById(): void {
    this.procedureService.listById(13).subscribe((rest: any) => {
      this.procedures = rest;
      console.log("procedure", rest);
    })
  }

  listByBatchNull(): void {
    this.procedureService.listByBatchNull().subscribe((rest: any) => {
      this.procedures = rest;
      console.log("procedure", rest);
    })
  }

  listByBatchNotNull(): void {
    this.procedureService.listByBatchNotNull().subscribe((rest: any) => {
      this.procedures = rest;
      console.log("procedure", rest);
    })
  }

  listByPhaseId(): void {
    this.procedureService.listByPhaseId(this.procedure_phase_id_list).subscribe((rest: any) => {
      this.procedures = rest;
      console.log(rest);
    },
      error => {
        console.log(error)
      }
    );
  }

  notificationByEmail(institutional_email: string | undefined) {
    console.log(institutional_email);
    Swal.fire({
      title: '¿Deseas Rechazar el Procedimiento?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Rechazando...', '', 'success')
        this.procedureService.notificationByEmail(institutional_email).subscribe(rest => {
          console.log(rest);
          this.listByBatchNull();
        }
        );
      }
    })
  }

  notification3(institutional_email: string | undefined) {
    console.log(institutional_email, this.message);
    Swal.fire({
      title: '¿Deseas Rechazar el Procedimiento?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Rechazando...', '', 'success')
        this.procedureService.notification3(institutional_email, this.message).subscribe(rest => {
          console.log(rest);
          //this.listByBatchNull();
          this.procedure_phase_id_list == 4;
          this.listByPhaseId();
        }
        );
      }
    })
  }

  consolidate(id: number | undefined) {
    console.log(id);
    Swal.fire({
      title: '¿Deseas Consolidar el Procedimiento?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Consolidando...', '', 'success')
        this.procedureService.consolidate(id).subscribe(rest => {
          console.log(rest);
          this.listByBatchNull();
        }
        );
      }
    })
  }

  consolidate4(id1: number | undefined, id2: number | undefined, id3: number | undefined) {
    console.log(id1, id2, id3);
    Swal.fire({
      title: '¿Deseas Consolidar los Trámites?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Consolidando...', '', 'success')
        this.procedureService.consolidate4(id1, id2, id3).subscribe(rest => {
          console.log(rest);
          //this.listByBatchNull();
          this.procedure_phase_id_list == 4;
          this.listByPhaseId();
        }
        );
      }
    })
  }

  consolidate5(id1: number | undefined, id2: number | undefined, id3: number | undefined, id4: number | undefined, id5: number | undefined) {
    console.log(id1, id2, id3, id4, id5);
    Swal.fire({
      title: '¿Deseas Aprobar la Resolución de los Trámites?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Aprobando...', '', 'success')
        this.procedureService.consolidate5(id1, id2, id3, id4, id5).subscribe(rest => {
          console.log(rest);
          //this.listByBatchNull();
          this.procedure_phase_id_list == 5;
          this.listByPhaseId();
        }
        );
      }
    })
  }

  consolidate6(id1: number | undefined, id2: number | undefined, id3: number | undefined, id4: number | undefined, id5: number | undefined) {
    console.log(id1, id2, id3, id4, id5);
    Swal.fire({
      title: '¿Deseas Enviar los Trámites al MINEDU?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Enviando...', '', 'success')
        this.procedureService.consolidate6(id1, id2, id3, id4, id5).subscribe(rest => {
          console.log(rest);
          //this.listByBatchNull();
          this.procedure_phase_id_list == 6;
          this.listByPhaseId();
        }
        );
      }
    })
  }

}
