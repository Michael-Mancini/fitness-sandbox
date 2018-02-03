import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-stop-training',
    template: `<h1 mat-dialog-title>Are you sure?</h1>
                <mat-dialog-content>
                    <p>You already got {{ passedData.progress }}%</p>
                </mat-dialog-content>
                <mat-dialog-actions>
                    <button mat-button [mat-dialog-close]="true">Yes</button>
                    <button mat-button [mat-dialog-close]="false">No</button>
                </mat-dialog-actions>`
})
export class StopTrainingComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {}
    /*
        MAT_DIALOG_DATA is a const storing a random number (ID) which allows us to access the data ngMaterial internally stores when we call the open method on the dialog. Similar to sharing data between components using Services, ngMaterial does this internally with the data we pass from the parent current-training component and uses an ID to store it. The ID is a number which is masked with MAT_DIALOG_DATA, a so called token. Pass this to @Inject to give me the data and store it it the passedData property to be used with string interpolation in the template.
    */
}