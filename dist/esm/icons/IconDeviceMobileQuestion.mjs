import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDeviceMobileQuestion = themed(memo(function (props) {
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
      d: "M15 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 22v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 4h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 17v.01",
      stroke: color
    })]
  });
}));
export { IconDeviceMobileQuestion };
