import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowUpTail = themed(memo(function (props) {
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
      d: "M12 18l0 -15",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 6l-3 -3l-3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 21l-3 -3l-3 3",
      stroke: color
    })]
  });
}));
export { IconArrowUpTail };
