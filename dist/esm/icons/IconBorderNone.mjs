import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBorderNone = themed(memo(function (props) {
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
      d: "M4 4l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 4l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 4l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 4l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 4l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 8l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 8l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 8l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 12l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 12l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 12l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 16l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 16l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 16l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 20l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 20l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 20l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 20l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 20l0 .01",
      stroke: color
    })]
  });
}));
export { IconBorderNone };
