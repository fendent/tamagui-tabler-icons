import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPasswordFingerprint = themed(memo(function (props) {
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
      d: "M17 8c.788 1 1 2 1 3v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 11c0 -1.578 1.343 -3 3 -3s3 1.422 3 3v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 11v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 12v-1.397c-.006 -1.999 1.136 -3.849 2.993 -4.85a6.385 6.385 0 0 1 6.007 -.005",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 17v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 20l4 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 18l4 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 17v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 20l4 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 18l4 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 17v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 20l4 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 18l4 2",
      stroke: color
    })]
  });
}));
export { IconPasswordFingerprint };
