import React from 'react';
import Navigation from 'react-toolbox/lib/navigation';

export default class TestActionPanel extends React.Component {


    render() {
        // let {children} = this.props;
        const actions = [
            { label: 'Transaction', raised: true, icon: 'add'},
            { label: 'Location', raised: true, accent: true, icon: 'room'}
        ];

        return (
            <Navigation type="horizontal" actions={actions} />
        )
    }
}
