import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandMinecraft = themed(memo(function (props) {
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
      d: "M21 16.008v-8.018a1.98 1.98 0 0 0 -1 -1.717l-7 -4.008a2.016 2.016 0 0 0 -2 0l-7 4.008c-.619 .355 -1 1.01 -1 1.718v8.018c0 .709 .381 1.363 1 1.717l7 4.008c.62 .354 1.38 .354 2 0l7 -4.008c.619 -.355 1 -1.01 1 -1.718",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 22v-10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12l8.73 -5.04",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3.27 6.96l8.73 5.04",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 17l3.003 -1.668m3 -1.667l2.997 -1.665m-9 5l-9 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 17l3 -1.67v-3l-3 1.67l0 3",
      stroke: color
    })]
  });
}));
export { IconBrandMinecraft };
