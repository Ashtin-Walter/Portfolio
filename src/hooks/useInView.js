import { useState, useEffect, useRef } from 'react';

export default function useInView(options = {}) {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting);
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options]);

    return [ref, isInView];
}
