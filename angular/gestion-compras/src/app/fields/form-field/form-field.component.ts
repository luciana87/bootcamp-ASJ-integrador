import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Field } from 'src/app/models/field';
import { FieldService } from 'src/app/services/fieldService/field.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})

export class FormFieldComponent implements OnInit {

  field: Field = { id: -1, name: '', deleted: false }
  fields: Field[] = [];

  constructor(
    private serviceField: FieldService,
    private router: Router) { }

  ngOnInit(): void {
    this.getFields();
    this.reset();
  }

  public save() {
    if (this.field.id != -1) {
      // Lo actualizo
      this.serviceField.updateField(this.field.id, this.field).subscribe(
        (data: Field) => {
          console.log("Rubro modificado:", data);
          Swal.fire({
            title: "Desea guardar los cambios?",
            showCancelButton: true,
            confirmButtonText: "Guardar",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "El rubro se editó correctamente",
                showConfirmButton: false,
                timer: 900
              });
              this.getFields();
              this.reset();
            }
          });
        }
      );
    } else {
      //Lo creo
      this.serviceField.createField(this.field).subscribe(
        (data) => {
          this.field = data;
          this.field.name = '';
          Swal.fire({
            position: "center",
            icon: "success",
            title: "El rubro se creó correctamente.",
            showConfirmButton: false,
            timer: 900
          });
          this.getFields();
          this.field.name = '';
        }
      )
    }
  }

  public getFields() {
    this.serviceField.getFields().subscribe(
      (data) => {
        this.fields = data;
      }
    )
  }

  public reset() {
    this.field = { id: -1, name: '', deleted: false };
  }

  public updateFieldEvent(field: Field) {
    this.field = field;
  }

  public deleteFieldEvent(field: Field) {
    this.serviceField.delete(field.id).subscribe(
      (data) => {
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El rubro ha sido eliminado.",
          showConfirmButton: false,
          timer: 900
        });
        this.getFields();
      });
  }
}
