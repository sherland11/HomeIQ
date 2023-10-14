'use client'
import { animated, useInView } from "@react-spring/web";

interface Props {
  children: React.ReactNode
  rootMargin10?: boolean
}

export default function Animated({ children, rootMargin10 = false }: Props) {
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
            rootMargin: rootMargin10 ? '-10% 0%' : '-20% 0%'
          }
      );

    return (
        <animated.div style={springs} ref={ref}>
            {children}
        </animated.div>
    )
}