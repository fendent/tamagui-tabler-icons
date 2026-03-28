import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAdjustmentsDown = themed(memo(function (props) {
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
      d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 4v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 12v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13.945 15.53a2 2 0 1 0 -1.945 2.47",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 4v10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 18v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 4v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 9v3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 16v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 19l-3 3l-3 -3",
      stroke: color
    })]
  });
}));
export { IconAdjustmentsDown };
