import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconListCheckFilled = themed(memo(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    ...otherProps,
    children: [/* @__PURE__ */jsx(Path, {
      d: "M8.207 3.793a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1 -1.414 0l-1.5 -1.5a1 1 0 0 1 1.414 -1.414l.793 .793l1.793 -1.793a1 1 0 0 1 1.414 0"
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.207 9.793a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1 -1.414 0l-1.5 -1.5a1 1 0 0 1 1.414 -1.414l.793 .793l1.793 -1.793a1 1 0 0 1 1.414 0"
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.207 15.793a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1 -1.414 0l-1.5 -1.5a1 1 0 0 1 1.414 -1.414l.793 .793l1.793 -1.793a1 1 0 0 1 1.414 0"
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 6a1 1 0 0 1 -1 1h-9a1 1 0 0 1 0 -2h9a1 1 0 0 1 1 1"
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 12a1 1 0 0 1 -1 1h-9a1 1 0 0 1 0 -2h9a1 1 0 0 1 1 1"
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 18a1 1 0 0 1 -1 1h-9a1 1 0 0 1 0 -2h9a1 1 0 0 1 1 1"
    })]
  });
}));
export { IconListCheckFilled };
