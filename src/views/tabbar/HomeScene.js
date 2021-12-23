import React, { useCallback, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
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
    <View style={styles.container}>
      <Text
        onPress={() => {
          navigation.navigate("signIn");
        }}
      >
        fdafafafadsf
        {JSON.stringify(loginInfo)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  logo: {
    width: scaleSize(200),
    height: scaleSize(60),
  },
});

export default HomeScreen;
