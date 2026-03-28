import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandCinema4d = themed(memo(function (props) {
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
      d: "M9.65 6.956a5.39 5.39 0 0 0 7.494 7.495",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.7 12.137a5.738 5.738 0 1 1 -5.737 -5.737",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.7 12.338v-1.175c0 -.47 .171 -.92 .476 -1.253a1.56 1.56 0 0 1 1.149 -.52c.827 0 1.523 .676 1.62 1.573c.037 .344 .055 .69 .055 1.037",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11.662 6.4h1.175c.47 0 .92 -.176 1.253 -.49c.333 -.314 .52 -.74 .52 -1.184c0 -.852 -.676 -1.57 -1.573 -1.67a9.496 9.496 0 0 0 -1.037 -.056",
      stroke: color
    })]
  });
}));
export { IconBrandCinema4d };
