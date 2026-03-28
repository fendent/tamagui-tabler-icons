import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBasketDiscount = themed(memo(function (props) {
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
      d: "M17 10l-2 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 10l2 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.5 20h-5.256a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.394 2.248",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13.856 13.254a2 2 0 1 0 -1.856 2.746",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 21l5 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 21v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 16v.01",
      stroke: color
    })]
  });
}));
export { IconBasketDiscount };
