import React, { Fragment } from 'react';
import AppNav from './routes';
import {Provider as PaperProvider} from "react-native-paper";


const App = () => {
  const ApNav = AppNav();
  return (
    <Fragment>
    <PaperProvider>
    <ApNav />
    </PaperProvider>
   
    </Fragment>
  );
};
export default App;
