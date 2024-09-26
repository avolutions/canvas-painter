import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    description: (
      <>
        With <b>CanvasPainter.js</b>, you just create shapes and draw them on a canvas with a few lines of code.
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
    description: (
      <>
        <b>CanvasPainter.js</b> takes care of redrawing for you. When you make changes to shapes,
        the canvas detects them and updates automatically - no need for manual redraws.
        <CodeBlock language="javascript">
{`canvas.watch(rectangle);`}
        </CodeBlock >
      </>
    ),
  },
  {
    title: 'Shape Manipulation',
    description: (
      <>
        With <b>CanvasPainter.js</b>, resizing, rotating, and moving shapes is a breeze.
        You can easily adjust your shapes with intuitive controls, making it simple to create dynamic and interactive designs.
        <CodeBlock language="javascript">
{`rectangle.move(10, 10);
rectangle.rotate(45);`}
        </CodeBlock >
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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
