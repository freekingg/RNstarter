import React, { useCallback, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { Box, Center } from "native-base";
import { SET_USER_INFO } from "../../store/action/Actions";
import { getUserInfo } from "../../api/user";
import { scaleSize } from "../../public/ScreenUtil";

function HomeScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loginInfo = useSelector((state) => state.login_info);
  const isLogin = useSelector((state) => state.is_login);
  const userInfo = useSelector((state) => state.user_info);

  useFocusEffect(
    useCallback(() => {
      console.log("home on show");
    }, [])
  );

  useEffect(() => {
    if (!isLogin) {
      // getUserInfoApi();
    }
  }, [isLogin]);

  const getUserInfoApi = async () => {
    getUserInfo().then((result) => {
      dispatch(SET_USER_INFO(result));
    });
  };

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
        This is a Home
      </Box>
    </Center>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: scaleSize(200),
    height: scaleSize(60),
  },
});

export default HomeScreen;
