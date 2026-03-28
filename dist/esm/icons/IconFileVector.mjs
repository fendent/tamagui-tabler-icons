import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconFileVector = themed(memo(function (props) {
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
      d: "M14 3v4a1 1 0 0 0 1 1h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 16.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 12.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.5 15a2.5 2.5 0 0 1 2.5 -2.5h1",
      stroke: color
    })]
  });
}));
export { IconFileVector };
