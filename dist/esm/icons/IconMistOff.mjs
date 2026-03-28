import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMistOff = themed(memo(function (props) {
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
      d: "M12 5h9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 10h7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 10h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 15h5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 15h1m4 0h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 20h9m4 0h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconMistOff };
