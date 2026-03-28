import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandEdge = themed(memo(function (props) {
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
      d: "M20.978 11.372a9 9 0 1 0 -1.593 5.773",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20.978 11.372c.21 2.993 -5.034 2.413 -6.913 1.486c1.392 -1.6 .402 -4.038 -2.274 -3.851c-1.745 .122 -2.927 1.157 -2.784 3.202c.28 3.99 4.444 6.205 10.36 4.79",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3.022 12.628c-.283 -4.043 8.717 -7.228 11.248 -2.688",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.628 20.978c-2.993 .21 -5.162 -4.725 -3.567 -9.748",
      stroke: color
    })]
  });
}));
export { IconBrandEdge };
