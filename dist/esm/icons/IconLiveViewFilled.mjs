import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconLiveViewFilled = themed(memo(function (props) {
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
      d: "M8 3a1 1 0 1 1 0 2h-2a1 1 0 0 0 -1 1v2a1 1 0 1 1 -2 0v-2a3 3 0 0 1 3 -3z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 15a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 0 2h-2a3 3 0 0 1 -3 -3v-2a1 1 0 0 1 1 -1"
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 3a3 3 0 0 1 3 3v2a1 1 0 0 1 -2 0v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 0 -2z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 15a1 1 0 0 1 1 1v2a3 3 0 0 1 -3 3h-2a1 1 0 0 1 0 -2h2a1 1 0 0 0 1 -1v-2a1 1 0 0 1 1 -1"
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.19 7.214a5 5 0 0 1 1.185 6.27l-.056 .09l-3.484 4.976a1 1 0 0 1 -.077 .103l-.017 .019l-.057 .056l-.012 .013l-.019 .017a1 1 0 0 1 -.096 .073l-.053 .03l-.038 .024l-.011 .005a1 1 0 0 1 -.223 .083l-.045 .008l-.066 .012a1 1 0 0 1 -.242 0l-.061 -.011l-.05 -.01a1 1 0 0 1 -.234 -.087l-.047 -.028l-.044 -.026l-.011 -.008l-.032 -.025l-.053 -.04l-.01 -.01l-.009 -.007l-.034 -.035l-.035 -.034l-.007 -.01l-.01 -.009l-.037 -.05l-.024 -.03l-3.5 -5l-.056 -.089a5 5 0 0 1 7.566 -6.27m-3.191 2.786a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1"
    })]
  });
}));
export { IconLiveViewFilled };
