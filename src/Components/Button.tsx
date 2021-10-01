import React from 'react';
import { 
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

type ButtonProps = TouchableOpacityProps & {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity 
      style={styles.button}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading,
  }
})