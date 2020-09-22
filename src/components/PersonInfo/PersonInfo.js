import React, { Component } from 'react';
import avatar from '../../assets/avatar.jpg';
import Education from '../Education/Education';
import './PersonInfo.css';

export default class PersonInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educations: [
        {
          year: 1990,
          title: 'I was born in Katowice',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.',
        },
        {
          year: 1990,
          title: 'Secondary school specializing in artistic',
          content:
            'Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.',
        },
        {
          year: 1990,
          title: 'First level graduation in Graphic Design',
          content:
            'Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? lusto, quibusdam asperiores underepel lat.',
        },
        {
          year: 1990,
          title: 'Second level graduation in Graphic Design',
          content: 'Ducimus, aliquam tempore autem itaque et accusantium!',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div align="center" className="img">
          <img src={avatar} alt="" />
        </div>
        <div>
          <div className="page">
            <header>
              <h1>HELLO,</h1>
              <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CY</h2>
            </header>
            <div className="line"></div>
            <main>
              <section className="about">
                <h3>ABOUT ME</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellendus, non, dolorem, cumque distinctio magni quam
                  expedita velit laborum sunt amet facere tempora ut fuga
                  aliquam ad asperiores voluptatem dolorum! Quasi.
                </p>
              </section>
              <section className="education">
                <h3>EDUCATION</h3>
                {this.state.educations.map((education, index) => (
                  <Education
                    className="item"
                    key={index.toString()}
                    year={education.year}
                    title={education.title}
                    content={education.content}
                  />
                ))}
              </section>
            </main>
          </div>
        </div>
      </div>
    );
  }
}
