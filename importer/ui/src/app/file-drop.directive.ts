import { Directive, HostListener, HostBinding, Output, EventEmitter, Input } from '@angular/core';

@Directive({
    selector: '[importerFileDrop]',
})
export class FileDropDirective {
    private _overColor = '#999';
    private _defaultColor = '#eee';
    @HostBinding('style.background') private background = this._defaultColor;

    @Input() accept: string | string[];
    // tslint:disable-next-line:no-output-rename
    @Output('onFileDrop') dropped = new EventEmitter<any>();

    @HostListener('dragover', ['$event']) public onDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        this.background = this._overColor;
        console.log(e);
    }

    @HostListener('dragleave', ['$event']) public onDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();
        this.background = this._defaultColor;
    }

    @HostListener('drop', ['$event']) public onDrop(e) {
        e.preventDefault();
        console.log(e);
        this.background = this._defaultColor;
        const files = e.dataTransfer.files;
        if (this.isAccepted(files)) {
            console.log('in files: ', files);
            this.dropped.emit(files);
        }

        // const files = e.DataTransfers.files;
        console.log('files: ', files);
    }

    isAccepted(files): Boolean {
        if (files.length === 0) {
            console.log('file empty: ', files);
            return false;
        }
        if (!this.accept) {
            console.log('no accept: ', this.accept);
            return true;
        }
        return files.find(file => {
            if (Array.isArray(this.accept)) {
                return !this.accept.includes(file.type);
            }
            return this.accept !== file.type;
        }) ? false : true;
    }
}
