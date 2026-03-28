import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArtboardOff = themed(memo(function (props) {
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
      d: "M12 8h3a1 1 0 0 1 1 1v3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.716 15.698a1 1 0 0 1 -.716 .302h-6a1 1 0 0 1 -1 -1v-6c0 -.273 .11 -.52 .287 -.7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 8h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 16h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 3v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 3v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 8h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 16h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 20v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 20v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconArtboardOff };
