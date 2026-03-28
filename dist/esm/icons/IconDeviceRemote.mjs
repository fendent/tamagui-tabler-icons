import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDeviceRemote = themed(memo(function (props) {
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
      d: "M10 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2l0 -14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 15v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 18v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 18v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 15v.01",
      stroke: color
    })]
  });
}));
export { IconDeviceRemote };
