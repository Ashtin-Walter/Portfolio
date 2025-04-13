import React, { memo } from 'react'; // Import memo
import CountUp from 'react-countup';

const AnimatedNumber = memo(function AnimatedNumber({ value, duration = 2.5, start = false }) { // Wrap component with memo
    const endValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    const suffix = value.replace(/[0-9]/g, '');

    return (
        <CountUp
            end={endValue}
            duration={duration}
            suffix={suffix}
            separator=""
            start={start ? undefined : 0} // Use undefined to let CountUp handle default start
            startOnMount={false}
            redraw={start} // Redraw when start becomes true
        />
    );
}); // Close memo wrapper

export default AnimatedNumber;
