import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.623 14.623c-2.166 2.167-4.662 3.08-6.863 3.41l-2.61-2.612 2.14-2.138.617.617a.402.402 0 0 0 .286.118.403.403 0 0 0 .285-.689l-.618-.618 1.237-1.237.618.618a.399.399 0 0 0 .57.001.402.402 0 0 0 0-.57l-.618-.62 1.236-1.236.62.619a.401.401 0 0 0 .57-.002.404.404 0 0 0 0-.571l-.618-.618 1.237-1.235.618.618a.402.402 0 0 0 .285.117.403.403 0 0 0 .285-.689l-.618-.617 2.14-2.142 2.615 2.615c-.33 2.2-1.244 4.693-3.413 6.86zM2.665 17.906l1.913-1.914 2.154 2.155a15.16 15.16 0 0 1-4.067-.241zm-.573-.57a15.13 15.13 0 0 1-.243-4.073l2.157 2.159-1.914 1.915zm3.284-11.96c2.167-2.167 4.663-3.08 6.864-3.41l2.61 2.61-2.138 2.141-.62-.618a.404.404 0 0 0-.57.572l.617.618-1.236 1.235-.618-.617a.402.402 0 0 0-.57 0 .402.402 0 0 0 0 .571l.618.617-1.237 1.238-.618-.62a.404.404 0 0 0-.57.57l.617.62-1.236 1.236-.619-.618a.404.404 0 0 0-.57.572l.617.618-2.14 2.14-2.614-2.615c.33-2.198 1.245-4.691 3.413-6.86zm11.96-3.284l-1.914 1.914-2.154-2.155a15.17 15.17 0 0 1 4.068.241zm.572.57c.167.814.378 2.295.243 4.073l-2.157-2.158 1.914-1.914zm.611-.915a.387.387 0 0 0-.1-.165V1.58l-.003-.001a.392.392 0 0 0-.164-.1c-.076-.022-7.804-2.315-13.446 3.326-5.642 5.642-3.349 13.369-3.325 13.447.02.063.054.119.1.164v.002c0 .002.002 0 .003.002.045.045.1.08.164.098.034.011 1.618.482 3.864.48 2.745 0 6.48-.701 9.582-3.804 5.642-5.642 3.349-13.37 3.325-13.447z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconSportsAmericanFootBall = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor }) => [
    {
      verticalAlign: 'middle',
    },
    backgroundColor && {
      backgroundColor,
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    circleColor && {
      circle: {
        fill: circleColor,
      },
    },
  ]
);