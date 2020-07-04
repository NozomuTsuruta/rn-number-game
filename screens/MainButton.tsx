import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Colors from '../constants/colors';

type Props = {
  children: React.ReactNode;
  onPress: () => void;
};

const MainButton: FC<Props> = ({ children, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 18,
  },
});

export default MainButton;
