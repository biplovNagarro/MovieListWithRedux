import React from 'react';
import { View } from 'react-native';
import styles from '../../compStyles/index';

const Card = (props) => {
  return <View style={{ ...styles.cardCont, ...props.style }}>{props.children}</View>;
};

export default Card;