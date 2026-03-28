import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBoxAlignTopRight = themed(memo(function (props) {
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
      d: "M19 11.01h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 15.01v-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 20.01v-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 20.01v-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 20.01v-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 4.01v-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 20.01v-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 15.01v-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 9.01v-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 4.01v-.01",
      stroke: color
    })]
  });
}));
export { IconBoxAlignTopRight };
