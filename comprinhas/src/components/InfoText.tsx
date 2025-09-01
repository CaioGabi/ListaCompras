import React, { FC } from "react";
import { StyleSheet, Text } from 'react-native';

interface InfoTextInterface {
  text: string;
}

const InfoText: FC<InfoTextInterface> = ({ text }) => {
    return (
        <Text style={styles.InfoText}>
            {text}
        </Text>
    );
};

const styles = StyleSheet.create({
  InfoText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#6C757D',
  }
});

export default InfoText;
