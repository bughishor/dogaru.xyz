import React from 'react';
import { Container } from 'react-bootstrap';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const FooterLogo = () => {
	const logoImage = useStaticQuery(query);

  return (
    <div className="footer-logo">
      <Container>
				<Img alt='Bogdan Dogaru Web Developer Logo' fixed={logoImage.file.childImageSharp.fixed} imgStyle={{ objectFit: "contain" }}/>
      </Container>
    </div>
  );
};

export default FooterLogo;

const query = graphql`
  query logoImage {
    file(relativePath: { eq: "bogdan-dogaru-logo.png" }) {
      childImageSharp  {
        fixed(width: 350, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`