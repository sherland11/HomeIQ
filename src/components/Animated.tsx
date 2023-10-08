'use client'
import { animated, useInView } from "@react-spring/web";

export default function Animated({ children }: { children: React.ReactNode }) {
    const [ref, springs] = useInView(
        () => ({
            from: {
              opacity: 0,
              y: -10,
            },
            to: {
              opacity: 1,
              y: 0,
            }
          }),
          {
            rootMargin: '-20% 0%'
          }
      );

    return (
        <animated.div style={springs} ref={ref}>
            {children}
        </animated.div>
    )
}