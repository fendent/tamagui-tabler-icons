import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBuildingAirport = themed(memo(function (props) {
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
      d: "M3.59 7h8.82a1 1 0 0 1 .902 1.433l-1.44 3a1 1 0 0 1 -.901 .567h-5.942a1 1 0 0 1 -.901 -.567l-1.44 -3a1 1 0 0 1 .901 -1.433",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 7l-.78 -2.342a.5 .5 0 0 1 .473 -.658h4.612a.5 .5 0 0 1 .475 .658l-.78 2.342",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 2v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 12v9h4v-9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 21h18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 5h-6l-1 -1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 3l2 2l-2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 17h7a2 2 0 0 1 2 2v2",
      stroke: color
    })]
  });
}));
export { IconBuildingAirport };
