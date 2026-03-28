import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconFileRss = themed(memo(function (props) {
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
      d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 17a3 3 0 0 0 -3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 17a6 6 0 0 0 -6 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 17h.01",
      stroke: color
    })]
  });
}));
export { IconFileRss };
