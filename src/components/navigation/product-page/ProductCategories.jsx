import { useState, useEffect, useRef } from 'react';
import './ProductCategories.scss';

const ProductCategories = ({ onCategoryChange, onPageChange }) => {
  const [selected, setSelected] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({});
  const segmentRefs = useRef([]);

  const segments = [
    { id: 'men', label: "MEN'S" },
    { id: 'women', label: "WOMEN'S" },
    { id: 'kid', label: "KID'S" },
  ];

  useEffect(() => {
    const updateSlider = () => {
      const activeSegment = segmentRefs.current[selected];
      if (activeSegment) {
        setSliderStyle({
          width: `${activeSegment.offsetWidth}px`,
          transform: `translateX(${activeSegment.offsetLeft - 4}px)`,
        });
      }
    };

    updateSlider();
    window.addEventListener('resize', updateSlider);
    return () => window.removeEventListener('resize', updateSlider);
  }, [selected]);

  return (
    <div className="segmented-control">
      <div className="segmented-control__slider" style={sliderStyle} />
      {segments.map((segment, index) => (
        <button
          key={segment.id}
          ref={(el) => (segmentRefs.current[index] = el)}
          className={`segment ${selected === index ? 'active' : ''}`}
          onClick={() => {
            setSelected(index);
            // console.log(segment.id);
            onCategoryChange(segment.id);
            onPageChange(1);
          }}>
          {segment.label}
        </button>
      ))}
    </div>
  );
};

export default ProductCategories;
