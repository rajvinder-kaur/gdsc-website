import React, { useEffect, useState } from 'react'

function ParallaxLayer({depth}) {
    
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffset(window.pageYOffset);
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    const style = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        transform: `translateY(${offset * depth}px)`,
      };
  return (
    <div style={style} className="parallaxLayer">
    </div>
  )
}

export default ParallaxLayer