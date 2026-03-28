import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconReportSearch = themed(memo(function (props) {
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
      d: "M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 12v-5a2 2 0 0 0 -2 -2h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 11h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 15h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18.5 19.5l2.5 2.5",
      stroke: color
    })]
  });
}));
export { IconReportSearch };
