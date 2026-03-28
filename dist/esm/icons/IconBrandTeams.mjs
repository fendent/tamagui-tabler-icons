import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandTeams = themed(memo(function (props) {
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
      d: "M3 7h10v10h-10l0 -10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 10h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 10v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.104 17c.47 2.274 2.483 4 4.896 4a5 5 0 0 0 5 -5v-7h-5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 18a4 4 0 0 0 4 -4v-5h-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13.003 8.83a3 3 0 1 0 -1.833 -1.833",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.83 8.36a2.5 2.5 0 1 0 .594 -4.117",
      stroke: color
    })]
  });
}));
export { IconBrandTeams };
