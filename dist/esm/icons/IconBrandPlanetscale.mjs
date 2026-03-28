import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandPlanetscale = themed(memo(function (props) {
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
      d: "M20.993 11.63a9 9 0 0 1 -9.362 9.362l9.362 -9.362",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3a9.001 9.001 0 0 1 8.166 5.211l-11.955 11.955a9 9 0 0 1 3.789 -17.166",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12l-6 6",
      stroke: color
    })]
  });
}));
export { IconBrandPlanetscale };
