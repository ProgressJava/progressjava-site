import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Learn',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Simple explanations and examples that make Java fundamentals click.
      </>
    ),
  },
  {
    title: 'Java Is Moving Fast',
    Svg: require('@site/static/img/fast.svg').default,
    description: (
      <>
        Every 6 months brings new features, we keep you in sync and confident.
      </>
    ),
  },
  {
    title: 'Open Source Forever',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        100% free and community-maintained - contribute, share, and improve together.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">       
        <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        <div className="row" style={{backgroundColor: '#e5e7eb', padding: '2rem 0', margin: '0 -15px'}}>
          <div className="col col--12">
            <div className="text--center padding-horiz--md">
              <Heading as="h2">📘 Learn. Build. Stay Updated.</Heading>
              <div className="margin-top--lg">
                <table style={{margin: '0 auto', textAlign: 'left', maxWidth: '800px', backgroundColor: 'white', borderCollapse: 'collapse'}}>
                  <thead>
                    <tr>
                      <th style={{padding: '8px 16px', borderBottom: '2px solid var(--ifm-color-primary)'}}>Track</th>
                      <th style={{padding: '8px 16px', borderBottom: '2px solid var(--ifm-color-primary)'}}>What you'll find</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{padding: '12px 16px', borderBottom: '1px solid #e0e0e0'}}><strong>Foundations</strong></td>
                      <td style={{padding: '12px 16px', borderBottom: '1px solid #e0e0e0'}}>Core Java concepts explained simply - variables, OOP, collections, exceptions, generics, I/O, and more.</td>
                    </tr>
                    <tr>
                      <td style={{padding: '12px 16px', borderBottom: '1px solid #e0e0e0'}}><strong>Modern Java</strong></td>
                      <td style={{padding: '12px 16px', borderBottom: '1px solid #e0e0e0'}}>The latest features like records, pattern matching, virtual threads, sealed classes, and the FFM API with before/after code samples.</td>
                    </tr>
                    <tr>
                      <td style={{padding: '12px 16px', borderBottom: '1px solid #e0e0e0'}}><strong>Release Updates</strong></td>
                      <td style={{padding: '12px 16px', borderBottom: '1px solid #e0e0e0'}}>Plain-English summaries for every JDK (21, 22, 23 …), with JEP highlights, performance notes, and adoption tips.</td>
                    </tr>
                    <tr>
                      <td style={{padding: '12px 16px', borderBottom: '1px solid #e0e0e0'}}><strong>Hands-On Labs</strong></td>
                      <td style={{padding: '12px 16px', borderBottom: '1px solid #e0e0e0'}}>Mini projects and exercises you can compile, run, and share directly tied to the topics you read.</td>
                    </tr>
                    <tr>
                      <td style={{padding: '12px 16px', borderBottom: '1px solid #e0e0e0'}}><strong>Migration Playbooks</strong></td>
                      <td style={{padding: '12px 16px', borderBottom: '1px solid #e0e0e0'}}>Step-by-step guides to move from Java 8→11→17→21 with confidence.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
