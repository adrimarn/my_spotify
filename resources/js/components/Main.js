import React from 'react';
import ReactDOM from 'react-dom'

class Main extends React.Component {
    render() {
        return (
            <div>
                Bonjour {this.props.name}
            </div>
        );
    }
}

ReactDOM.render(
    <Main name="Adrimarn"/>,
    document.getElementById('root')
);
