import { Carousel } from '@heathmont/moon-core-tw';
import {
  ControlsChevronLeft,
  ControlsChevronRight,
} from '@heathmont/moon-icons-tw';

const Example = () => {
  const items = Array.from({ length: 5 }, (index) => index);
  return (
    <Carousel step={1} selectedIndex={1} className="w-[320px]">
      <Carousel.LeftArrow>
        <ControlsChevronLeft />
      </Carousel.LeftArrow>
      <Carousel.Reel>
        {items.map((_, index) => (
          <Carousel.Item key={index} className="w-80 h-48">
            {index}
          </Carousel.Item>
        ))}
      </Carousel.Reel>
      <Carousel.RightArrow>
        <ControlsChevronRight />
      </Carousel.RightArrow>
      <Carousel.Indicators />
    </Carousel>
  );
};

export default Example;
