import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        With <b>CanvasPainter</b>, you just create shapes and draw them on a canvas with a few lines of code.
        It's quick, straightforward, and hassle-free.
      </>
    ),
  },
  {
    title: 'Automatic Updates',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <b>CanvasPainter</b> takes care of redrawing for you. When you make changes to shapes,
        the canvas detects them and updates automatically - no need for manual redraws.
      </>
    ),
  },
  {
    title: 'Shape Manipulation',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        With <b>CanvasPainter</b>, resizing, rotating, and moving shapes is a breeze.
        You can easily adjust your shapes with intuitive controls, making it simple to create dynamic and interactive designs.
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

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
