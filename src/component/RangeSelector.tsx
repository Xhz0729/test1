import React from 'react';

interface RangeSelectorProps {
  range: string;
  setRange: (value: string) => void;
}

const RangeSelector: React.FC<RangeSelectorProps> = ({ range, setRange }) => {
  return (
    <section className="range">
      <label htmlFor="numberRange">Please choose the range of the number:</label>
      <select
        id="numberRange"
        value={range}
        onChange={(e) => setRange(e.target.value)}
      >
        <option value="0-100">0~100</option>
        <option value="100-1000">100~1000</option>
        <option value="1000-5000">1000~5000</option>
        <option value="5000-10000">5000~10000</option>
      </select>
    </section>
  );
};

export default RangeSelector;
