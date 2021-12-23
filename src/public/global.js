import storage from "./storage";
import colors from "./colors";
import styles from "./styles";
import {
  screenW,
  screenH,
  scaleSize,
  scaleHeight,
  onePixel,
} from "./ScreenUtil";
global.screenW = screenW;
global.screenH = screenH;
global.scaleSize = scaleSize;
global.scaleHeight = scaleHeight;
global.onePixel = onePixel;

global.colors = colors;
global.styles = styles;
global.storage = storage;
global.loginState = true;

//用户登录状态
storage
  .load({
    key: "loginState",
  })
  .then((ret) => {
    global.loginState = true;
  })
  .catch(() => {
    global.loginState = null;
  });
