import _ from 'lodash';
import { NgModule } from '@angular/core';

@NgModule({})
export class ArrayHelper {
	toggleArrayElement(item, array): void {
		var idx = _.indexOf(array, item);
		if (idx !== -1) {
			array.splice(idx, 1);
		} else {
			array.push(item);
		}
	}
}
