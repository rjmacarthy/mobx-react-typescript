'use strict';

import * as React from 'react';


interface SubRouteProps {
	route : any;
};

class SubRoute extends React.Component<SubRouteProps, void> {

    constructor(props: any) {
        super(props);
    }

	render(): JSX.Element {
		return (
			<section>
				This is a sub route.
			</section >
		);
	};

}

export default SubRoute;