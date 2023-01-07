/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { className: 'opaque-initial', headerHeight: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  listenScrollEvent = _e => {
    const verticalPosition = window.scrollY;

    if (verticalPosition > 400) {
      this.setState({ className: 'opaque' });
    } else if (verticalPosition === 0) {
      this.setState({ className: 'opaque-initial' });
    } else {
      this.setState({ className: 'hidden' });
    }
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ headerHeight: window.innerHeight });
  }

  render() {
    const { name, occupation, description, city, social = [] } = this.props?.data || {};

    const networks = social.map(({ name, url, faPrefix, faIcon }) => (
      <li key={name}>
        <a href={url}>
          <FontAwesomeIcon icon={[faPrefix, faIcon]} />
        </a>
      </li>
    ));

    return (
      <header id='home' style={{ height: `${this.state.headerHeight}px` }}>
        <nav id='nav-wrap' className={this.state.className}>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a className='mobile-btn' href='#home' title='Hide navigation'>
            Hide navigation
          </a>
          <ul id='nav' className='nav'>
            <li className='current'>
              <a className='smoothscroll' href='#home'>
                Home
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#about'>
                About
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#resume'>
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='banner-name'>I&apos;m {name}.</h1>
            <h3>
              I&apos;m a {city} based <span>{occupation}</span>. {description}
            </h3>
            <hr />
            <ul className='social'>{networks}</ul>
          </div>
        </div>

        <p className='scrolldown'>
          <a className='smoothscroll' href='#about'>
            <i className='icon-down-circle'></i>
          </a>
        </p>
      </header>
    );
  }
}
