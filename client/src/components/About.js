import React, { Component } from 'react';

// import '../stylesheets/about.css';
import styled from 'styled-components';

const Header = styled.h1`padding: 2rem 1rem 0 1rem;`;

const ParagraphWrapper = styled.div`
  padding: 1rem 1rem 2rem 1rem;
  font-size: 1.75rem;
  overflow: auto;
`;

const Image = styled.img`
  width: 100%;
  border: 2px solid lightgray;
  display: inline-block;
  float: ${props => (props.left ? 'left' : 'right')};

  @media only screen and (min-width: 576px) {
    margin: 0 1rem 0 1rem;
    width: 45%;
  }
`;

class About extends Component {
  render() {
    return (
      <div>
        <Header>About Me</Header>
        <ParagraphWrapper>
          <Image left src={`/images/about/wedding.jpg`} alt="author's wedding photo" />
          <p>
            I had a chance to live and study in China for a year. While I was there, there were many things I fell in
            love with. The top two being my future wife and the food. Now being back in the United States it's my
            responsibility to try and recreate the flavors of China.
          </p>
        </ParagraphWrapper>

        <ParagraphWrapper>
          <Image src={`/images/about/dumplings.jpg`} alt="dumplings" />
          <p>
            In addition to food and cooking, another passion I have is programming. Just like it is with food there is a
            rich history and complexity that lies beneath the surface. I thought what better way to share my interests
            than to combine them. I used the skills I obtained in programming to create this site so that I could share
            my passion of both.
          </p>
          <p>
            Feel free to reach out to me if you have any questions about recipes, the site, or anything at all.
            <a href="mailto:Reanyalex@gmail.com?Subject=Food%20Blog" target="_top">
              {' '}
              Reanyalex@gmail.com
            </a>
          </p>
        </ParagraphWrapper>
      </div>
    );
  }
}

export default About;
