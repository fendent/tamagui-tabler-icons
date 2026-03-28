import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandYahoo = themed(memo(function (props) {
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
      d: "M3 6l5 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 18l7 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4.5 6l5.5 7v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 13l6 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.5 8l5 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 11l0 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 18l0 .01",
      stroke: color
    })]
  });
}));
export { IconBrandYahoo };
