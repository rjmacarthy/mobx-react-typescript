import {observable} from 'mobx';
import Base from './Base';
import IModel from '../abstractions/IModel';

export default class Model extends Base implements IModel {
	@observable timer = 0;

	constructor() {
		super();
	}

	public Up() {
		this.timer = this.timer + 1;
	}

	public Down() {
		this.timer = this.timer + -1;
	}
}
