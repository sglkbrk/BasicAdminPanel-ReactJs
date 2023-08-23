// import React, { Suspense, ComponentType, ReactNode } from 'react';

// // project imports
// import Loader from './Loader';

// // ==============================|| LOADABLE - LAZY LOADING ||============================== //

// interface T {
//   Component: ReactNode;
// }

// const Loadable =
//   <T extends object>(Component: T) =>
//   (props: T) => (
//     <Suspense fallback={<Loader />}>
//       <Component {...props} />
//     </Suspense>
//   );

// export default Loadable;

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
