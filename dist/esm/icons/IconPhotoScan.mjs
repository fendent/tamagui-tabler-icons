import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPhotoScan = themed(memo(function (props) {
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
      d: "M15 8h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 13l2.644 -2.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 13l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l1.644 1.644",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 8v-2a2 2 0 0 1 2 -2h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 16v2a2 2 0 0 0 2 2h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 4h2a2 2 0 0 1 2 2v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 20h2a2 2 0 0 0 2 -2v-2",
      stroke: color
    })]
  });
}));
export { IconPhotoScan };
