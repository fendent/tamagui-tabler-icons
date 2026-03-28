import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPhotoCirclePlus = themed(memo(function (props) {
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
      d: "M20.964 12.806a9 9 0 0 0 -8.964 -9.806a9 9 0 0 0 -9 9a9 9 0 0 0 9.397 8.991",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 14l1 -1c.928 -.893 2.072 -.893 3 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 19.33h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 16.33v6",
      stroke: color
    })]
  });
}));
export { IconPhotoCirclePlus };
