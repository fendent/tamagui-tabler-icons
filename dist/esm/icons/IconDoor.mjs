import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDoor = themed(memo(function (props) {
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
      d: "M14 12v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 21h18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16",
      stroke: color
    })]
  });
}));
export { IconDoor };
