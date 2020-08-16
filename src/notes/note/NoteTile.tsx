import './NoteTile.scss';
import React from 'react';
import { Note } from '../entities/note';
import moment from 'moment';

export class NoteTile extends React.Component<NoteTileProps> {
    private readonly BACKGROUND_ALFA: string = '88';
    private readonly DEFAULT_BACKGROUND_COLOR: string = '#aaaaaa';

    private note: Note;
    
    constructor(props: NoteTileProps) {
        super(props);

        this.note = props.note;
    }

    public render(): JSX.Element {
        return (
            <div className="note-tile-container"
                style={{ backgroundColor: this.getBackgroundColor(true) }}
            >
                <div className="note-title"
                    style={{ backgroundColor: this.getBackgroundColor() }}
                >
                    {this.note.title}
                </div>
                <div className="note-body">
                    {this.note.text}
                </div>
                <div className="note-status">
                    {
                        moment(this.note.timestamp).format('DD.MM.YY HH:mm')
                    }
                </div>
            </div>
        );
    }

    private getBackgroundColor(alfa: boolean = false): string {
        const color: string = this.note.color || this.DEFAULT_BACKGROUND_COLOR;
        return alfa ? color + this.BACKGROUND_ALFA : color;
    }
}

interface NoteTileProps {
    note: Note
}
