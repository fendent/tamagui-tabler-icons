import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandFinder = themed(memo(function (props) {
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
      d: "M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 8v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 8v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.5 4c-.654 1.486 -1.26 3.443 -1.5 9h2.5c-.19 2.867 .094 5.024 .5 7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 15.5c3.667 2 6.333 2 10 0",
      stroke: color
    })]
  });
}));
export { IconBrandFinder };
