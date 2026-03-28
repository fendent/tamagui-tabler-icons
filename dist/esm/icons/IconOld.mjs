import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconOld = themed(memo(function (props) {
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
      d: "M11 21l-1 -4l-2 -3v-6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 14l-1 -3l4 -3l3 2l3 .5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 17l-2 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5",
      stroke: color
    })]
  });
}));
export { IconOld };
