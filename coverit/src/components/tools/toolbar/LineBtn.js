import React, {Component} from 'react';

class LineBtn extends Component {

  constructor(props){
    super(props);
    this.state = {
      isActive : false;
    }
  }
  render() {
    return (
        <div className='Toolbar-btn btn-line'>
          <button className='btn-line'>

          </button>

        </div>
    );
  }
}

export default LineBtn;