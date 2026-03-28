import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconRotate3d = themed(memo(function (props) {
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
      d: "M12 3a7 7 0 0 1 7 7v4l-3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 11l-3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 15.5l-5 -3l5 -3l5 3v5.5l-5 3l0 -5.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12.5v5.5l5 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 15.545l5 -3.03",
      stroke: color
    })]
  });
}));
export { IconRotate3d };
