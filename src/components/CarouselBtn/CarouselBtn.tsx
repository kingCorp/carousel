import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

type Props = {
  title: string;
  onPress?: (() => void) | undefined;
  disabled?: boolean;
  style?: Object | undefined;
  styleText?: Object | undefined;
};

const CarouselBtn: React.FC<Props> = ({
  title,
  onPress,
  disabled,
  style,
  styleText,
}) => {
  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.btnContainer, style]}
        disabled={disabled}>
        <Text style={styleText}>{title}</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default CarouselBtn;
