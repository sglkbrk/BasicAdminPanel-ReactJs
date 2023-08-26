import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import Authorization from './Authorization';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, Authorization]);
}
