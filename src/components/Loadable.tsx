import React, { Suspense, ComponentType } from 'react';
import Loader from './Loader';

interface Component {
  Component: ComponentType<any>;
}

const Loadable =
  ({ Component }: Component) =>
  (props: any) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
