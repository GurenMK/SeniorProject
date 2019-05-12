import { Component, OnInit } from '@angular/core';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { ImporterFormService } from './importer-form.service';
import { Observable, Subject, of } from 'rxjs';
import { map, takeUntil, filter, shareReplay } from 'rxjs/operators';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { IMPORT_FIELDS, FormGrouper } from './importer-formgroup';

@Component({
    selector: 'importer-form',
    templateUrl: './importer-form.component.html',
    styleUrls: ['./importer-form.component.css']
})
export class ImporterFormComponent implements OnInit {
    pool = [];
    fields: FormGrouper;
    progress$: Observable<number>;
    stop$ = new Subject<void>();
    step = 0;
    form: FormGroup;
    isLoading = false;
    optionsObservable: Observable<any[]>;
    simpleSelectValue: any = null;
    formControlSimple = new FormControl();
    columns: string[] = [];
    data: any;

    get contactControls() { return <FormArray>this.form.get(this.fields.contact.name)[0]; }
    get codeSystemControls() { return this.form.get(this.fields.codeSystem.name); }
    get conceptControls() { return <FormArray>this.codeSystemControls.get(this.fields.codeSystem.group.concept.name); }

    constructor(
        private _imf: ImporterFormService,
        private _fb: FormBuilder
    ) {
        this.fields = IMPORT_FIELDS;
        this.form = this._fb.group(this._imf.getGroup(IMPORT_FIELDS));
    }

    ngOnInit() {

    }

    submit() {
        if (this.form.invalid || this.form.pristine) {
            console.error('form not valids or not touched');
            return;
        }

        console.log(this.form.value);
        this._imf.sendData(this.form.value).subscribe(resp => {
            console.log(resp);
        });
    }

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }

    onFileDrop(e) {
        console.log(e);
        this.pool = e;
    }

    getFormControl(name) {
        let control = this.form.get(name);
        if (!control) {
           control = new FormControl();
           this.form.addControl(name, control);
        }
        return control;
    }

    upload(file) {
        const fileUpload = this._imf.upload(file).pipe(shareReplay(1));
        this.isLoading = true;
        this.progress$ = fileUpload.pipe(
            filter(val => Boolean(val)),
            map(([_, progress]) => progress as number), takeUntil(this.stop$));
        this.progress$.subscribe(val => {
            console.log('Progress Bar: ', val);
        });
        fileUpload.pipe(
            filter(val => Boolean(val)),
            map(([body, _]) => body),
            filter(body => Boolean(body))
        ).subscribe(data => {
        //   console.log(data);
          this.data = data;
          this.isLoading = false;
          this.codeSystemControls.get(this.fields.codeSystem.group.conceptData.name).patchValue(data);
          this.stop$.next();
          this.setStep(1);
          this.setColumns(data);
        });
    }

    setColumns(data) {
        this.columns = Object.keys(data[0]);
    }

    // displayFn = (value: any) => {
    //     return Boolean(value) && typeof value === 'object' ? value.name : value;
    // }

    // onFilter(event) {
    //     console.log(event);
    //     this.optionsObservable = of(this.simpleSelect.filter(item => item.indexOf(event) === 0));
    // }

    // onSelect(event) {
    //     console.log(event);
    // }
}
