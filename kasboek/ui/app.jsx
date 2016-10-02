import React from 'react';

// ui
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

//
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <AppBar title="kasboek" />
            </MuiThemeProvider>
        )
    }
}
