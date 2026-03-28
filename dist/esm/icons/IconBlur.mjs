import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBlur = themed(memo(function (props) {
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
      d: "M12 21a9.01 9.01 0 0 0 2.32 -.302a9 9 0 0 0 1.74 -16.733a9 9 0 1 0 -4.06 17.035",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3v17",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12h9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 9h8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 6h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 18h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 15h8",
      stroke: color
    })]
  });
}));
export { IconBlur };
