import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTopologyStarRing = themed(memo(function (props) {
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
      d: "M14 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 12h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 12h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13.5 5.5l5 5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.5 13.5l5 5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13.5 18.5l5 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10.5 5.5l-5 5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 6v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 14v4",
      stroke: color
    })]
  });
}));
export { IconTopologyStarRing };
