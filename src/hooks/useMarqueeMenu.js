import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { closestEdge } from '../utils/menuUtils';

export const useMarqueeMenu = (itemRef, linkRef, marqueeRef, marqueeInnerRef) => {
    const animationDefaults = { duration: 0.6, ease: 'expo' };

    const findClosestEdge = (ev) => {
        if (!itemRef.current) return 'top';
        const x = ev.pageX - itemRef.current.offsetLeft;
        const y = ev.pageY - itemRef.current.offsetTop;
        return closestEdge(x, y, itemRef.current.clientWidth, itemRef.current.clientHeight);
    };

    const mouseEnter = (ev) => {
        const edge = findClosestEdge(ev);

        gsap.timeline({ defaults: animationDefaults })
            .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
            .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
            .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
    };

    const mouseLeave = (ev) => {
        const edge = findClosestEdge(ev);

        gsap.timeline({ defaults: animationDefaults })
            .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
            .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
    };

    useEffect(() => {
        if (!linkRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;

        const linkEl = linkRef.current;
        linkEl.addEventListener('mouseenter', mouseEnter);
        linkEl.addEventListener('mouseleave', mouseLeave);

        return () => {
            linkEl.removeEventListener('mouseenter', mouseEnter);
            linkEl.removeEventListener('mouseleave', mouseLeave);
        };
    }, [linkRef, marqueeRef, marqueeInnerRef, itemRef]);

    return { mouseEnter, mouseLeave };
};
