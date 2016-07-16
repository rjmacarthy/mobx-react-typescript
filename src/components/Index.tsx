'use strict';

import * as React from 'react';
import Model from '../stores/Model';
import Other from '../stores/Other';
import {observer} from "mobx-react";

interface IndexProps {
	route : {
		store : {
			Model : Model,
			Other: Other
		}
	};
};

@observer
class Index extends React.Component<IndexProps, void> {
    public ModelStore: Model = this.props.route.store.Model;
    public OtherStore: Other = this.props.route.store.Other;

    constructor(props: any) {
        super(props);
    }

	render(): JSX.Element {
		let count = this.ModelStore.timer;
		return (
			<section>
				<p>Welcome to the app!</p>
				<button onClick={this.Up}>+</button>
                <button onClick={this.Down}>+</button>
				<p>
					The count from model store is: {count}
				</p>
				<br/>
				<div>
					The name from other store is: {this.OtherStore.name}
				</div>
				<div>
					<p>Set a different name</p>
					<button onClick={this.ChangeName}>Change name</button>
				</div>
				<br/>
			</section >
		);
	};

	public Up = () => {
		this.ModelStore.Up();
	}

	public Down = () => {
		this.ModelStore.Down();
	}

	public ChangeName = () => {
		this.OtherStore.SetName("Jimmy");
	}

}

export default Index;