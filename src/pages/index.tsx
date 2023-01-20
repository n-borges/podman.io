import React from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

// import styles from './index.module.css';
/*
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}></div>
      </div>
    </header>
  );
}
*/
export default function Home(): JSX.Element {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <main>
        <p className="font-display text-5xl">This should be Montserrat</p>
        <p className="font-text"> This should be Source Sans Pro</p>
        <p className="font-mono">This should be Source Code Pro</p>
      </main>
    </Layout>
  );
}