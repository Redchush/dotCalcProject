import React, {Component} from 'react';

class DotBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }

  }


  render() {
    return (
        <div className='Toolbar-btn '>
          <button className='btn-dot'>
          </button>

        </div>
    );
  }
}

export default DotBtn;