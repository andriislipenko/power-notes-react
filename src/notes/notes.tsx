import React from 'react';
import axios from 'axios';
import { rootUrl } from '../core/app-settings';
import { Note } from './entities/note';
import { NoteTile } from './note/note-tile';

export class Notes extends React.Component<NotesProps, NotesState> {
    constructor(props: NotesProps) {
        super(props);

        this.state = {
            notes: []
        }
    }

    public componentDidMount(): void {
        this.getNotes();
    }

    public render(): JSX.Element | null {
        const notes: Note[] = this.state.notes;

        if (!notes || !notes.length) {
            return null;
        }

        const notesList: JSX.Element[] = notes.map((note: Note) => {
            return <NoteTile note={note} key={note.id}/>;
        });

        return (
            <div>
                {notesList}
            </div>
        );
    }

    private getNotes(): void {
        const url: string = `${rootUrl}/notes`;

        axios.get(url)
            .then((resp) => {
                this.setState({
                    notes: resp.data
                })
            })
    }
}

interface NotesProps {}

interface NotesState {
    notes: Note[];
}
