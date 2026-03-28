import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSunset2Filled = themed(memo(function (props) {
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
      d: "M4 12a1 1 0 0 1 0 2h-1a1 1 0 0 1 0 -2z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 12a1 1 0 0 1 0 2h-1a1 1 0 0 1 0 -2z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.307 5.893l.7 .7a1 1 0 0 1 -1.414 1.414l-.7 -.7a1 1 0 0 1 1.414 -1.414"
    }), /* @__PURE__ */jsx(Path, {
      d: "M19.107 5.893a1 1 0 0 1 0 1.414l-.7 .7a1 1 0 0 1 -1.414 -1.414l.7 -.7a1 1 0 0 1 1.414 0"
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3a1 1 0 0 1 1 1v1a1 1 0 0 1 -2 0v-1a1 1 0 0 1 1 -1"
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 16h18a1 1 0 0 1 0 2h-18a1 1 0 0 1 0 -2"
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 8a5 5 0 0 1 4.583 7.002h-9.166a5 5 0 0 1 4.583 -7.002"
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 19a1 1 0 0 1 0 2h-5a1 1 0 0 1 0 -2z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 19a1 1 0 0 1 0 2h-1a1 1 0 0 1 0 -2z"
    })]
  });
}));
export { IconSunset2Filled };
