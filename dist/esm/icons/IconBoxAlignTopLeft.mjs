import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBoxAlignTopLeft = themed(memo(function (props) {
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
      d: "M11 5v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 4h-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 4h-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 9h-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 15h-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 15h-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 20h-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 20h-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 20h-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 20h-.01",
      stroke: color
    })]
  });
}));
export { IconBoxAlignTopLeft };
