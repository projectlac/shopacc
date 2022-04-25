import React from 'react';
import { Helmet } from 'react-helmet-async';
import ModuleVideo from '../Module/ModuleVideo';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>
      <ModuleVideo />
    </div>
  );
}

export default Home;
