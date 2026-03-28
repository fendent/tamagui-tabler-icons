import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconScale = themed(memo(function (props) {
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
      d: "M7 20l10 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 6l6 -1l6 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3l0 17",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 12l-3 -6l-3 6a3 3 0 0 0 6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 12l-3 -6l-3 6a3 3 0 0 0 6 0",
      stroke: color
    })]
  });
}));
export { IconScale };
