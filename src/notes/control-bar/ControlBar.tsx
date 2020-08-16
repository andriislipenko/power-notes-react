import './ControlBar.scss';
import React, { FormEvent } from 'react';

export class ControlBar extends React.Component<ControlBarProps, ControlBarState> {
    private readonly SEARCH_DELAY: number = 300;
    private searchTimerId: number | null = null;

    private currentTerm: string = '';

    constructor(props: ControlBarProps) {
        super(props);

        this.onSearch = this.onSearch.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="control-bar-container">
                <input className="search-input" 
                    type="text" 
                    onInput={this.onSearch}
                    placeholder="Search"
                />
            </div>
        );
    }

    private onSearch(event: FormEvent<HTMLInputElement>): void {
        const term: string = event.currentTarget.value.trim();

        if (term === this.currentTerm) return;

        this.currentTerm = term;

        if (this.searchTimerId) return;
            
        this.searchTimerId = window.setTimeout(() => {
            this.props.onSearch(this.currentTerm);
            this.searchTimerId = null
        }, this.SEARCH_DELAY);
    }
}

interface ControlBarProps {
    onSearch(term: string): void;
}

interface ControlBarState {}
