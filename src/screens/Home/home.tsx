import React from 'react';
import {SafeAreaView} from 'react-native';
import {Carousel} from '../../components';
import {slides} from '../../utils/constants';
import styles from './styles';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <Carousel slides={slides} />
    </SafeAreaView>
  );
};

export default Home;
