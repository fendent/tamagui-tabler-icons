import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconFilePercentFilled = themed(/* @__PURE__ */memo(function (props) {
  var {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */_jsx(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    ...otherProps,
    children: /* @__PURE__ */_jsx(Path, {
      d: "M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm2.01 14h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m.697 -3.707a1 1 0 0 0 -1.414 0l-4 4a1 1 0 0 0 1.414 1.414l4 -4a1 1 0 0 0 0 -1.414m-4.697 -.293h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m4.989 -9.001l4.001 4.001h-4z"
    })
  });
}));
export { IconFilePercentFilled };
