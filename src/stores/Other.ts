import {observable} from 'mobx';
import Base from './Base';
import IOther from '../abstractions/IOther';

export default class Other extends Base implements IOther {
    @observable name = "Richard";

    constructor() {
        super();
    }

    public SetName (name : string) : void {
        this.name = name;
    }
}
