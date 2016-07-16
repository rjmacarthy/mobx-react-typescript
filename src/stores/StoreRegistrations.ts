import Model from '../stores/Model';
import Base from '../stores/Base';
import { map } from 'lodash';
import BaseStoreRegistrations from './BaseStoreRegistrations';

export default class StoreRegistrations extends BaseStoreRegistrations {
    private static _store: string;
    private static _stores: any = {};

    public static AppyStores(stores: Array<string>): any {
        map(stores, (store) => {
            StoreRegistrations._stores[store] = StoreRegistrations[store];
        });
        return StoreRegistrations._stores;
    }

}