import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconLivePhotoOff = themed(memo(function (props) {
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
      d: "M11.296 11.29a1 1 0 1 0 1.414 1.415",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.473 8.456a5 5 0 1 0 7.076 7.066m1.365 -2.591a5 5 0 0 0 -5.807 -5.851",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.9 20.11v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19.04 17.61v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20.77 14v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20.77 10v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19.04 6.39v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.9 3.89v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.1 3.89v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4.96 6.39v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3.23 10v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3.23 14v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4.96 17.61v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.1 20.11v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 21v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconLivePhotoOff };
