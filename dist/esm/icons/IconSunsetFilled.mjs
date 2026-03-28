import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSunsetFilled = themed(memo(function (props) {
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
      d: "M4 16a1 1 0 0 1 0 2h-1a1 1 0 0 1 0 -2z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 16a1 1 0 0 1 0 2h-1a1 1 0 0 1 0 -2z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.307 9.893l.7 .7a1 1 0 0 1 -1.414 1.414l-.7 -.7a1 1 0 0 1 1.414 -1.414"
    }), /* @__PURE__ */jsx(Path, {
      d: "M19.107 9.893a1 1 0 0 1 0 1.414l-.7 .7a1 1 0 0 1 -1.414 -1.414l.7 -.7a1 1 0 0 1 1.414 0"
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 2a1 1 0 0 1 1 1v3.584l1.293 -1.291a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-3 3a.98 .98 0 0 1 -.767 .293l-.124 -.017l-.127 -.032l-.104 -.04l-.115 -.063a1 1 0 0 1 -.151 -.114l-3.026 -3.027a1 1 0 0 1 1.414 -1.414l1.293 1.292v-3.585a1 1 0 0 1 1 -1"
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 20h18a1 1 0 0 1 0 2h-18a1 1 0 0 1 0 -2"
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12a5 5 0 0 1 4.583 7.002h-9.166a5 5 0 0 1 4.583 -7.002"
    })]
  });
}));
export { IconSunsetFilled };
