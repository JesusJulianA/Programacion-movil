import React from 'react';
import { View } from 'react-native';
import AppBar from '../Organisms/AppBar.jsx';
import RepositoryList from '../Organisms/RepositoryList.jsx';
import Footer from '../Organisms/Footer.jsx'

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
