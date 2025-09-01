import React, { FC } from "react";
import { StyleSheet, Text } from 'react-native';

interface ButtonTextInterface {
  text: string;
}

const ButtonText: FC<ButtonTextInterface> = ({ text }) => {
    return (
        <Text style={styles.ButtonText}>
            {text}
        </Text>
    );
};

const styles = StyleSheet.create({
  ButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8
  }
});

export default ButtonText;
