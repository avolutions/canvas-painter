import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={useBaseUrl('/img/logo.png')} alt="Logo" className={styles.heroLogo} />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline} 🦥</p>
        <div className={styles.buttons}>
          <Link
            className={`${styles.button} button button--secondary button--lg`}
            to="/docs">
            Getting started
          </Link>
          <Link
            className={`${styles.button} button button--secondary button--lg`}
            to="/demo">
            Demo
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="A simple yet powerful library for drawing basic shapes (rectangles, circles, etc.) on HTML5 Canvas with ease. Perfect for creating 2D graphics in JavaScript projects.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
