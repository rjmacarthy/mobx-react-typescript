'use strict';

import * as React from 'react';
import Model from '../stores/Model';
import {observer} from "mobx-react";

interface IndexProps {
	route : {
		store : {
			Model : Model
		}
	};
};

@observer
class Index extends React.Component<IndexProps, void> {
    public ModelStore: Model = this.props.route.store.Model;

    constructor(props: any) {
        super(props);
    }

	render(): JSX.Element {
		const count = this.ModelStore.timer;
		return (
			<section>
				<p>Welcome to the app!</p>
				<button onClick={this.Up}>+</button>
                <button onClick={this.Down}>+</button>
				<div>
					{count}
				</div>
			</section >
		);
	};

	public Up = () => {
		this.ModelStore.Up();
	}

	public Down = () => {
		this.ModelStore.Down();
	}

}

export default Index;