import PropTypes from 'prop-types';
import { useEffect, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

// ==============================|| NAVIGATION SCROLL TO TOP ||============================== //

interface Props {
  children?: ReactElement;
}
const NavigationScroll = ({ children }: Props) => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return children || null;
};

NavigationScroll.propTypes = {
  children: PropTypes.element
};

export default NavigationScroll;
