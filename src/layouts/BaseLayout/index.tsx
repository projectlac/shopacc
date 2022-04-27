import { FC, ReactNode, useState } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import HeaderHome from 'src/components/Header/HeaderHome';

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderHome />
      {children || <Outlet />}
    </>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node
};

export default BaseLayout;
