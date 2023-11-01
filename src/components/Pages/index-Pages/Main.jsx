import React from 'react';
import { View } from 'react-native';
import AppBar from '../../Organisms/index-AppBar/AppBar.jsx';
import RepositoryList from '../../Organisms/index-RepositoryList/RepositoryList.jsx';
import Footer from '../../Organisms/index-Footer/Footer.jsx'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <RepositoryList />
      <Footer />
    </View>
  );
};

export default Main;
