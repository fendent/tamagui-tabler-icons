import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBuildingTunnel = themed(memo(function (props) {
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
      d: "M5 21h14a2 2 0 0 0 2 -2v-7a9 9 0 0 0 -18 0v7a2 2 0 0 0 2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 21v-9a4 4 0 1 1 8 0v9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 17h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 17h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 12h-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 12h-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 6l3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 9l3 -3l-3 3",
      stroke: color
    })]
  });
}));
export { IconBuildingTunnel };
