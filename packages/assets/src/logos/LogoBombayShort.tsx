import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 19 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.1457 15.4166C18.1457 11.9583 16.2291 8.9479 13.3958 7.3854C13.7187 6.7604 13.8958 6.06248 13.8958 5.31248C13.8958 3.86457 13.2187 2.61456 12.1562 1.80206C11.1249 0.999981 10.0937 0.499982 8.15617 0.624982C6.19784 0.749982 5.08325 1.9479 5.08325 1.9479C5.03117 1.99998 4.97908 2.05206 4.93742 2.10415C4.44783 2.67706 4.19784 3.37498 4.19784 4.0729C4.18742 4.93748 4.552 5.79165 5.24992 6.40623C5.38533 6.52082 5.52075 6.62498 5.66658 6.70831C5.8645 6.8229 6.1145 6.72915 6.19784 6.52081L6.46867 5.78123L6.49992 5.68748V5.67707C6.44783 5.65623 6.40617 5.6354 6.3645 5.61456C5.6145 5.14581 5.16659 4.27082 5.29159 3.33332C5.33325 3.04165 5.427 2.7604 5.56242 2.52081C5.65617 2.35415 6.47909 1.11456 8.74992 1.31248C9.09367 1.35415 9.46867 1.43748 9.85408 1.59373C10.0312 1.65623 10.1978 1.73956 10.3645 1.83331C10.3749 1.83331 10.3749 1.84373 10.3853 1.84373C11.4062 2.42706 12.0833 3.52081 12.0833 4.77081C12.0833 5.78123 11.7395 6.79165 11.0416 7.40623L11.0312 7.41665C10.927 7.5104 10.8228 7.60415 10.6978 7.6979C10.2916 7.93748 9.802 8.09373 9.32284 8.17707V5.60415C9.32284 5.59373 9.32284 5.58332 9.32284 5.5729V4.34373C9.32284 4.15623 9.19784 3.97915 9.01034 3.92706L7.87492 3.58331V8.2604H6.88534C6.63534 8.2604 6.40617 8.41665 6.31242 8.65623L6.02075 9.4479L7.7395 9.46873C8.82284 9.52081 9.85409 9.73956 10.7812 10.0937C11.0728 10.1979 11.3541 10.3229 11.6249 10.4687C13.0103 11.1979 14.0937 12.4166 14.6562 13.8958C14.927 14.6146 15.0728 15.3854 15.0728 16.1979C15.0728 16.5521 15.0416 16.8854 14.9895 17.2187C14.8957 17.9271 14.6874 18.6146 14.3957 19.2396C13.2707 21.6354 10.8437 23.2916 8.02075 23.2916C6.52075 23.2916 5.12492 22.8229 3.97908 22.0208C3.802 21.8958 3.62492 21.7604 3.45825 21.6146C3.22908 21.4271 3.02075 21.2187 2.82284 21C2.07284 20.1458 1.59367 19.0521 1.59367 17.8646C1.59367 15.2396 3.71867 13.2812 6.34367 13.2812C6.96867 13.2812 7.56242 13.3958 8.10409 13.6146C8.6145 13.8333 9.052 14.1458 9.39575 14.5312C9.76033 15 9.9895 15.5937 9.9895 16.2396C9.9895 16.8646 9.78117 17.4479 9.427 17.9062C8.96867 18.4375 8.31242 18.5104 8.01033 18.5208C7.6145 18.5104 7.27075 18.4271 7.03117 18.3437C6.83325 18.2708 6.60408 18.3854 6.53117 18.5833L6.35409 19.0625C6.74992 19.2708 7.19784 19.3958 7.66659 19.4375C7.677 19.4375 7.68742 19.4375 7.69783 19.4375C7.7395 19.4375 7.78117 19.4375 7.83325 19.4479C7.85408 19.4479 7.88533 19.4479 7.90617 19.4479C7.91658 19.4479 7.927 19.4479 7.93742 19.4479C7.9895 19.4479 8.04159 19.4479 8.08325 19.4479C8.09367 19.4479 8.09367 19.4479 8.10409 19.4479C8.16659 19.4479 8.22909 19.4375 8.29159 19.4375C10.3541 19.2396 12.0208 17.3229 12.0208 15.1354C12.0208 13.3021 10.8853 11.7291 9.27075 11.0937C9.20825 11.0625 9.14575 11.0416 9.08325 11.0208C8.37492 10.75 7.60408 10.6041 6.79158 10.6041C4.81242 10.6041 3.04159 11.4896 1.85409 12.8854C0.885338 14.0208 0.302002 15.4791 0.302002 17.0833C0.302002 17.1354 0.302002 17.1771 0.302002 17.2291C0.302002 17.2396 0.302002 17.2604 0.302002 17.2708C0.302002 17.3229 0.302006 17.375 0.312422 17.4271C0.312422 17.4271 0.312422 17.4271 0.312422 17.4375C0.322839 17.5625 0.333254 17.6875 0.343671 17.8125C0.739504 21.6562 3.97909 24.6458 7.87492 24.6666V26.2916L9.052 25.9896C9.20825 25.9479 9.32284 25.8021 9.32284 25.6458V24.9166C9.32284 24.8958 9.32284 24.875 9.32284 24.8541V24.75C14.2187 24.5833 18.1457 20.5625 18.1457 15.625C18.1457 15.6041 18.1457 15.5833 18.1457 15.5729C18.1457 15.4791 18.1457 15.4479 18.1457 15.4166Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1={1.41375}
        y1={2.46143}
        x2={15.5513}
        y2={25.1521}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CDAE81" />
        <stop offset={1} stopColor="#B29265" />
      </linearGradient>
    </defs>
  </svg>
);

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};
const LogoBombayShort = styled(Svg)<SvgProps>(
  ({ color, height, width, fontSize, verticalAlign, theme }) => ({
    ...(color && {
      color: themed('color', color)(theme),
    }),
    height,
    width,
    fontSize,
    verticalAlign,
  })
);
LogoBombayShort.defaultProps = {
  verticalAlign: 'middle',
};
export default LogoBombayShort;