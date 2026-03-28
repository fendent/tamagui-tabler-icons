import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx } from "react/jsx-runtime";
const IconBrandCake = themed(memo(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */jsx(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: /* @__PURE__ */jsx(Path, {
      d: "M20.84 12c0 2.05 .985 3.225 -.04 5c-1.026 1.775 -2.537 1.51 -4.314 2.534c-1.776 1.026 -2.302 2.466 -4.353 2.466c-2.051 0 -2.576 -1.441 -4.353 -2.466c-1.776 -1.024 -3.288 -.759 -4.314 -2.534c-1.025 -1.775 -.04 -2.95 -.04 -5s-.985 -3.225 .04 -5c1.026 -1.775 2.537 -1.51 4.314 -2.534c1.776 -1.026 2.302 -2.466 4.353 -2.466s2.577 1.441 4.353 2.466c1.776 1.024 3.288 .759 4.313 2.534c1.026 1.775 .04 2.95 .04 5l.001 0",
      stroke: color
    })
  });
}));
export { IconBrandCake };
