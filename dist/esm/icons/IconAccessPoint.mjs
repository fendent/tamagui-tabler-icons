import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAccessPoint = themed(memo(function (props) {
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
      d: "M12 12l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.828 9.172a4 4 0 0 1 0 5.656",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.657 6.343a8 8 0 0 1 0 11.314",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.168 14.828a4 4 0 0 1 0 -5.656",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.337 17.657a8 8 0 0 1 0 -11.314",
      stroke: color
    })]
  });
}));
export { IconAccessPoint };
