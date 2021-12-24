import React, { Component } from 'react';

//class component examples
class FirstComponent extends Component { //labeled as default means it's the default component that will be loaded if you import this file into another module, no brackets required
    render() {
      return (
        <div className="FirstComponent">
          FirstComponent
        </div>
      );
    }
  }

  export default FirstComponent;

