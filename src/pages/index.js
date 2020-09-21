import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;
  const socialImage = useStaticQuery(query);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Python & Front End Developer'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Python & Front End Developer'} />
        <meta property="og:image" content={socialImage.file.childImageSharp.fixed.src} />
      </Helmet>
      <App />
    </>
  );
};

const query = graphql`
  query socialImage {
    file(relativePath: { eq: "bogdan-dogaru-web-developer.jpg" }) {
      childImageSharp  {
        fixed(width: 1200, quality: 100) {
          src
        }
      }
    }
  }
`