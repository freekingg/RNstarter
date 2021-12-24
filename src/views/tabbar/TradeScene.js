import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Box, Center } from "native-base";

function TradeScreen() {
  return (
    <Center flex={1} px="3">
      <Box
        width="90%"
        bg="primary.500"
        p="4"
        shadow={2}
        _text={{
          fontSize: "md",
          fontWeight: "bold",
          color: "white",
        }}
      >
        This is a Trade
      </Box>
    </Center>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

export default TradeScreen;
