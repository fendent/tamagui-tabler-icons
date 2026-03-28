import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSchemaOff = themed(memo(function (props) {
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
      d: "M6 2h4v4m-4 0h-1v-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 11v-1h5v4h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 18h5v4h-5l0 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 10h5v4h-5l0 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 12h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7.5 7.5v2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7.5 14v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconSchemaOff };
