import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconWashTemperature6 = themed(memo(function (props) {
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
      d: "M9 15h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 6l1.721 10.329a2 2 0 0 0 1.973 1.671h10.612a2 2 0 0 0 1.973 -1.671l1.721 -10.329",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 15h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 15h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 12h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 12h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3.486 8.965c.168 .02 .34 .033 .514 .035c.79 .009 1.539 -.178 2 -.5c.461 -.32 1.21 -.507 2 -.5c.79 -.007 1.539 .18 2 .5c.461 .322 1.21 .509 2 .5c.79 .009 1.539 -.178 2 -.5c.461 -.32 1.21 -.507 2 -.5c.79 -.007 1.539 .18 2 .5c.461 .322 1.21 .509 2 .5c.17 0 .339 -.014 .503 -.034",
      stroke: color
    })]
  });
}));
export { IconWashTemperature6 };
