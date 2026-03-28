import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconWorldMinus = themed(memo(function (props) {
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
      d: "M20.483 15.006a9 9 0 1 0 -7.958 5.978",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3.6 9h16.8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3.6 15h16.8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11.5 3a17 17 0 0 0 0 18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.5 3a16.94 16.94 0 0 1 2.307 12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 19h6",
      stroke: color
    })]
  });
}));
export { IconWorldMinus };
