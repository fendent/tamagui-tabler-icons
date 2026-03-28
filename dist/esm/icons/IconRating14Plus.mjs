import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconRating14Plus = themed(memo(function (props) {
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
      d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 15v-6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.5 12h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 10.5v3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.5 15v-6m-2.5 0v4h3",
      stroke: color
    })]
  });
}));
export { IconRating14Plus };
