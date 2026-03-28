import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconToiletPaper = themed(memo(function (props) {
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
      d: "M3 10a3 7 0 1 0 6 0a3 7 0 1 0 -6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 10c0 -3.866 -1.343 -7 -3 -7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 3h12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 10v10l-3 -1l-3 2l-3 -3l-3 2v-10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 10h.01",
      stroke: color
    })]
  });
}));
export { IconToiletPaper };
