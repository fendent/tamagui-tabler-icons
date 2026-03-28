import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowDownRhombus = themed(memo(function (props) {
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
      d: "M12 8v13",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 18l-3 3l-3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.5 5.5l-2.5 -2.5l-2.5 2.5l2.5 2.5l2.5 -2.5",
      stroke: color
    })]
  });
}));
export { IconArrowDownRhombus };
