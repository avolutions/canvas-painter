import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    imgSrc: require('@site/static/img/canvas1.gif').default,
    description: (
      <>
        With <b>CanvasPainter</b>, you just create shapes and draw them on a canvas with a few lines of code.
        It's quick, straightforward, and hassle-free. Perfect for both beginners and pros.
        <CodeBlock language="javascript">
{`const canvas = new Canvas('myCanvas');
const rectangle = new Rectangle(50, 50, 100, 50);`}
        </CodeBlock >
      </>
    ),
  },
  {
    title: 'Automatic Updates',
    imgSrc: require('@site/static/img/canvas2.gif').default,
    description: (
      <>
        <b>CanvasPainter</b> takes care of redrawing for you. When you make changes to shapes,
        the canvas detects them and updates automatically - no need for manual redraws.
        <CodeBlock language="javascript">
{`canvas.watch(rectangle);`}
        </CodeBlock >
      </>
    ),
  },
  {
    title: 'Shape Manipulation',
    imgSrc: require('@site/static/img/canvas3.gif').default,
    description: (
      <>
        With <b>CanvasPainter</b>, resizing, rotating, and moving shapes is a breeze.
        You can easily adjust your shapes with intuitive controls, making it simple to create dynamic and interactive designs.
        <CodeBlock language="javascript">
{`rectangle.move(10, 10);
rectangle.rotate(45);`}
        </CodeBlock >
      </>
    ),
  },
];

function Feature({title, imgSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureImg} alt={title} />
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
