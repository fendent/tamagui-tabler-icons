import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconGitCherryPick = themed(memo(function (props) {
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
      d: "M4 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 3v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 15v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 7h2.5l1.5 5l-1.5 5h-2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 12h3",
      stroke: color
    })]
  });
}));
export { IconGitCherryPick };
