import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCarFan3 = themed(memo(function (props) {
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
      d: "M12 12v-9l4.912 1.914a1.7 1.7 0 0 1 .428 2.925l-5.34 4.161",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.044 14.624l-2.044 -2.624h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12h-9l1.914 -4.912a1.7 1.7 0 0 1 2.925 -.428l4.161 5.34",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12v9l-4.912 -1.914a1.7 1.7 0 0 1 -.428 -2.925l5.34 -4.161",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 15.5a.5 .5 0 0 1 .5 -.5h1a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1a.5 .5 0 0 1 -.5 -.5",
      stroke: color
    })]
  });
}));
export { IconCarFan3 };
