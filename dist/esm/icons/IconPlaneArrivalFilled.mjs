import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPlaneArrivalFilled = themed(memo(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    ...otherProps,
    children: [/* @__PURE__ */jsx(Path, {
      d: "M10.466 2.271l2.898 .777a1 1 0 0 1 .708 .711l1.904 7.235l4.255 1.141a3 3 0 1 1 -1.539 5.799l-14.489 -3.882a1 1 0 0 1 -.72 -.765l-1.347 -6.572a1 1 0 0 1 1.239 -1.167l2.898 .776a1 1 0 0 1 .607 .466l1.207 2.091l1.217 .326l-.098 -5.954a1 1 0 0 1 1.259 -.982"
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 21a1 1 0 0 1 -1 1h-18a1 1 0 0 1 0 -2h18a1 1 0 0 1 1 1"
    })]
  });
}));
export { IconPlaneArrivalFilled };
