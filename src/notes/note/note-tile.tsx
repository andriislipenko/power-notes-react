import React from 'react';
import { Note } from '../entities/note';

export class NoteTile extends React.Component<NoteTileProps> {
    private note: Note;
    
    constructor(props: NoteTileProps) {
        super(props);

        this.note = props.note;
    }

    public render(): JSX.Element {
        return (
            <div>
                {this.note.title}
            </div>
        );
    }
}

interface NoteTileProps {
    note: Note
}
