import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconExposurePlus1 = themed(memo(function (props) {
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
      d: "M3 12h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 9v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 19v-14l-4 4",
      stroke: color
    })]
  });
}));
export { IconExposurePlus1 };
