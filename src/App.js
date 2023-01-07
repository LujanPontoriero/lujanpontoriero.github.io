import React from 'react';
import './App.css';
import { About } from './views/components/About';
import { Footer } from './views/components/Footer';
import { Header } from './views/components/Header';
import { Resume } from './views/components/Resume';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resumeData: {},
    };
  }

  async getResumeData() {
    const resumeData = await (await fetch(`${process.env.PUBLIC_URL}/resumeData.json`)).json();

    this.setState({ resumeData });

    return resumeData;
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    const {
      resumeData: { main: mainData, resume: resumeData },
    } = this.state;

    return (
      <div className='App'>
        <Header data={mainData} />
        <About data={mainData} />
        <Resume data={resumeData} />
        <Footer data={mainData} />
      </div>
    );
  }
}
