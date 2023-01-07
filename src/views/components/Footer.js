/* eslint-disable react/prop-types */
import { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='row'>
          <div className='twelve columns'>
            <ul className='copyright'>
              <li>&copy; Mischuk Franco </li>
              <li> 2021 </li>
            </ul>
          </div>
          <div id='go-top'>
            <a className='smoothscroll' title='Back to Top' href='#home'>
              <i className='icon-up-open'></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
