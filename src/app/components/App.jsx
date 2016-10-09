import React from 'react';

// ui
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

// click fix thingie
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import s from "app/components/App.css";

export default class App extends React.Component {
    render() {
        let {children} = this.props;
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div className={s.foobar}>
                    <AppBar title="kasboek" />
                    <div>{children}</div>
                </div>
            </MuiThemeProvider>
        )
    }
}
