import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAirTrafficControl = themed(memo(function (props) {
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
      d: "M11 3h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3v3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.998 6h12.004a2 2 0 0 1 1.916 2.575l-1.8 6a2 2 0 0 1 -1.916 1.425h-8.404a2 2 0 0 1 -1.916 -1.425l-1.8 -6a2 2 0 0 1 1.916 -2.575",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.5 6l1.5 10v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.5 6l-1.5 10v5",
      stroke: color
    })]
  });
}));
export { IconAirTrafficControl };
