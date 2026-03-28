import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMoodCry = themed(memo(function (props) {
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
      d: "M9 10l.01 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 10l.01 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.5 15.25a3.5 3.5 0 0 1 5 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.566 17.606a2 2 0 1 0 2.897 .03l-1.463 -1.636l-1.434 1.606",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20.865 13.517a8.937 8.937 0 0 0 .135 -1.517a9 9 0 1 0 -9 9c.69 0 1.36 -.076 2 -.222",
      stroke: color
    })]
  });
}));
export { IconMoodCry };
