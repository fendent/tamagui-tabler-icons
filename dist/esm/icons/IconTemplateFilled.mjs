import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTemplateFilled = themed(memo(function (props) {
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
      d: "M19 3a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 11a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 11a1 1 0 0 1 0 2h-6a1 1 0 0 1 0 -2z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 15a1 1 0 0 1 0 2h-6a1 1 0 0 1 0 -2z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 19a1 1 0 0 1 0 2h-6a1 1 0 0 1 0 -2z"
    })]
  });
}));
export { IconTemplateFilled };
