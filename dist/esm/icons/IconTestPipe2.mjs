import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTestPipe2 = themed(memo(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: [/* @__PURE__ */jsx(Path, {
      d: "M15 3v15a3 3 0 0 1 -6 0v-15",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 12h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 3h8",
      stroke: color
    })]
  });
}));
export { IconTestPipe2 };
