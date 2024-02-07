import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Field } from 'src/app/models/field';
import { FieldService } from 'src/app/services/fieldService/field.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.css']
})
export class FieldListComponent {

  
  @Input() fields: Field[] = [];
  @Output() updateFieldEvent = new EventEmitter<Field>();
  @Output() deleteFieldEvent = new EventEmitter<Field>();

  constructor(private serviceField: FieldService) { }

  public getFields() {
    this.serviceField.getFields().subscribe(
      (data: Field[]) => {
        this.fields = data;
      }
    )
  }

  updateField(field: Field) {
    this.updateFieldEvent.emit(field);
  }

  public delete(field: Field) {
    Swal.fire({
      title: `¿Está seguro que desea eliminar el rubro ${field.name}?`,
      text: " Tenga en cuenta que esta acción no podrá deshacerse.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteFieldEvent.emit(field);
      };
    })
  }



}
