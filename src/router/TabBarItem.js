import React from 'react';
import {Image, StyleSheet} from 'react-native';

const TabBarItem = props => {
  return (
    <Image
      source={props.focused ? props.selectedImage : props.normalImage}
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
  },
});

export default TabBarItem;
