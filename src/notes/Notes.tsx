import './Notes.scss';
import React from 'react';
import axios from 'axios';
import { rootUrl } from '../core/app-settings';
import { Note } from './entities/note';
import { NoteTile } from './note/NoteTile';
import { ControlBar } from './control-bar/ControlBar';

export class Notes extends React.Component<NotesProps, NotesState> {
    constructor(props: NotesProps) {
        super(props);

        this.state = {
            notes: []
        }

        this.getNotes = this.getNotes.bind(this);
    }

    public componentDidMount(): void {
        this.getNotes();
    }

    public render(): JSX.Element | null {
        const notes: Note[] = this.state.notes;

        const notesList: JSX.Element[] = notes.map((note: Note) => {
            return <NoteTile note={note} key={note.id}/>;
        });

        return (
            <>
                <ControlBar onSearch={this.getNotes}/>
                <div className="notes-container">
                    {notesList}
                </div>
            </>
        );
    }

    private getNotes(title: string = ''): void {
        let url: string = `${rootUrl}/notes`;

        if (title) {
            url += `?title=${title}`;
        }

        axios.get(url)
            .then((resp) => {
                this.setState({
                    notes: resp.data
                });
            });
    }
}

interface NotesProps {}

interface NotesState {
    notes: Note[];
}
