
import React from "react";
import Main from './components/MainComponent';
class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <Main/>
    );
  }
}

export default App;
