import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconLayoutBoardFilled = themed(memo(function (props) {
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
      d: "M5 3h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-2a2 2 0 0 1 2 -2"
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 3h5a2 2 0 0 1 2 2v8a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-9a1 1 0 0 1 1 -1"
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 16h6a1 1 0 0 1 1 1v2a2 2 0 0 1 -2 2h-5a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 10h6a1 1 0 0 1 1 1v9a1 1 0 0 1 -1 1h-5a2 2 0 0 1 -2 -2v-8a1 1 0 0 1 1 -1"
    })]
  });
}));
export { IconLayoutBoardFilled };
