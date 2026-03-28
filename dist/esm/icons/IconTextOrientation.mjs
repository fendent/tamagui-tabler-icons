import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTextOrientation = themed(memo(function (props) {
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
      d: "M9 15l-5 -5c-1.367 -1.367 -1.367 -3.633 0 -5s3.633 -1.367 5 0l5 5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.5 11.5l5 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 12l-9 9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 12v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 12h-4",
      stroke: color
    })]
  });
}));
export { IconTextOrientation };
