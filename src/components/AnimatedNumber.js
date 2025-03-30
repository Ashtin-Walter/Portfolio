import CountUp from 'react-countup';

export default function AnimatedNumber({ value, duration = 2.5, start = false }) {
    const endValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    const suffix = value.replace(/[0-9]/g, '');

    return (
        <CountUp
            end={endValue}
            duration={duration}
            suffix={suffix}
            separator=""
            start={start ? undefined : 0}
            startOnMount={false}
            redraw={start}
        />
    );
}
