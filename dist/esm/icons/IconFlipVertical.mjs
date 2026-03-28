import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconFlipVertical = themed(memo(function (props) {
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
      d: "M12 3l0 18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 7l0 10l5 0l-5 -10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 7l0 10l-5 0l5 -10",
      stroke: color
    })]
  });
}));
export { IconFlipVertical };
