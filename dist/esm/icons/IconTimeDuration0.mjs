import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTimeDuration0 = themed(memo(function (props) {
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
      d: "M3 12v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 12v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 21v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7.5 4.2v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16.5 4.2v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16.5 19.8v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7.5 19.8v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4.2 16.5v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19.8 16.5v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19.8 7.5v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4.2 7.5v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 11v2a2 2 0 1 0 4 0v-2a2 2 0 1 0 -4 0",
      stroke: color
    })]
  });
}));
export { IconTimeDuration0 };
