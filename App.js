import React, {Fragment} from 'react';
import AppNav from './routes';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  const ApNav = AppNav();
  return (
    <Fragment>
     
        <ApNav />
      
    </Fragment>
  );
};
export default App;
