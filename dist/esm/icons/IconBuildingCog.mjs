import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBuildingCog = themed(memo(function (props) {
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
      d: "M3 21h9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 8h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 12h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 16h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 8h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 12h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 21v-16c0 -.53 .211 -1.039 .586 -1.414c.375 -.375 .884 -.586 1.414 -.586h10c.53 0 1.039 .211 1.414 .586c.375 .375 .586 .884 .586 1.414v7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 18c0 .53 .211 1.039 .586 1.414c.375 .375 .884 .586 1.414 .586c.53 0 1.039 -.211 1.414 -.586c.375 -.375 .586 -.884 .586 -1.414c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 14.5v1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 20v1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21.032 16.25l-1.299 .75",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16.27 19l-1.3 .75",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.97 16.25l1.3 .75",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19.733 19l1.3 .75",
      stroke: color
    })]
  });
}));
export { IconBuildingCog };
