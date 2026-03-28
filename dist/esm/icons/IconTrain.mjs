import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTrain = themed(memo(function (props) {
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
      d: "M21 13c0 -3.87 -3.37 -7 -10 -7h-8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 15h16a2 2 0 0 0 2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 6v5h17.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 11v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 11v-5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 11v-4.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 19h18",
      stroke: color
    })]
  });
}));
export { IconTrain };
