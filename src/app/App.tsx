import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import IPhone1415Pro1 from "../imports/IPhone1415Pro1";
import Frame427321839 from "../imports/Frame427321839";

// Review card data for mobile
const mobileReviews = [
  {
    id: 1,
    text: "Acemyx is a game-changer! The interactive lessons and mock exams made learning fun and effective. Highly recommend for JAMB prep!",
    name: "Ngozi Okeke",
    role: "JAMB Aspirant",
    image: "figma:asset/caa01c45aa0f785b9d8b03c5f3067522c0efe545.png"
  },
  {
    id: 2,
    text: "The AI tutor helped me understand difficult concepts I struggled with for months. My confidence has improved tremendously!",
    name: "Chukwudi Eze",
    role: "WAEC Student",
    image: "figma:asset/caa01c45aa0f785b9d8b03c5f3067522c0efe545.png"
  },
  {
    id: 3,
    text: "Best prep platform I've used! The practice questions are exactly what I needed to ace my Post-UTME. Thank you AcemyX!",
    name: "Amara Nwosu",
    role: "Post-UTME Candidate",
    image: "figma:asset/caa01c45aa0f785b9d8b03c5f3067522c0efe545.png"
  }
];

// Review card data for desktop
const desktopReviews = [
  {
    id: 1,
    text: "Acemyx is a game-changer! The interactive lessons and mock exams made learning fun and effective. Highly recommend for JAMB prep!",
    name: "Ngozi Okeke",
    role: "JAMB Aspirant",
    image: "figma:asset/caa01c45aa0f785b9d8b03c5f3067522c0efe545.png"
  },
  {
    id: 2,
    text: "Thanks to Acemyx, I felt fully prepared for my WAEC exams. The detailed explanations and study guides were invaluable.",
    name: "Aisha Bello",
    role: "Student, UNILORIN",
    image: "figma:asset/6fbd75085c84c90299fa9d8a21a7bcaf3126d410.png"
  },
  {
    id: 3,
    text: "I love how Acemyx adapts to my learning style. The platform is user-friendly, and the content is always up-to-date. A must-have for students!",
    name: "Chidi Obi",
    role: "Student, UNILORIN",
    image: "figma:asset/05be041b58b5e1fe37be4a6bb5a74f76d7c0f06d.png"
  }
];

// Desktop review card component
function DesktopReviewCard({ review, index }: { review: typeof desktopReviews[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px"
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="basis-0 bg-[#fafafa] grow h-[420px] min-h-px min-w-px relative rounded-[24px] shrink-0"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
            className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#5e5e5e] text-[24px] tracking-[-0.3px] w-[min-content]"
          >
            <p className="leading-[32px]">"{review.text}"</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
            className="content-stretch flex gap-[12px] items-center relative shrink-0"
          >
            <div className="relative rounded-[100px] shrink-0 size-[32px]">
              <img 
                alt={review.name} 
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" 
                src={review.image} 
              />
            </div>
            <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-nowrap">
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px] text-black tracking-[-0.3px]">
                <p className="leading-[1.5] text-nowrap">{review.name}</p>
              </div>
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#7c7c7c] text-[14px] tracking-[-0.2px]">
                <p className="leading-[1.5] text-nowrap">{review.role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// Desktop review section with horizontal scroll
function DesktopReviewSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingVisible(true);
        }
      },
      {
        threshold: 0.5
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStartX(e.clientX);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grabbing';
      scrollContainerRef.current.style.userSelect = 'none';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStartX && scrollContainerRef.current) {
      const deltaX = dragStartX - e.clientX;
      scrollContainerRef.current.scrollLeft += deltaX;
      setDragStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setDragStartX(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
      scrollContainerRef.current.style.userSelect = 'auto';
    }
  };

  const handleMouseLeave = () => {
    setDragStartX(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
      scrollContainerRef.current.style.userSelect = 'auto';
    }
  };

  return (
    <div className="absolute top-[2130px] w-full" ref={containerRef}>
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headingVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex flex-col font-['Inter_Tight:Regular',sans-serif] justify-center leading-[0] not-italic text-[#0d114d] text-[40px] text-center mx-auto mb-[48px] w-[720px]"
      >
        <p className="leading-[44px]">Trusted by Students Across Nigeria.</p>
      </motion.div>
      
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide cursor-grab px-[96px]"
        style={{
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch"
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={dragStartX ? handleMouseMove : undefined}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex gap-[8px] pb-4 min-w-max">
          {desktopReviews.map((review, index) => (
            <div key={review.id} className="w-[400px]">
              <DesktopReviewCard review={review} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReviewCard({ review, isActive }: { review: typeof mobileReviews[0]; isActive: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0.7, scale: 0.95 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="bg-[#fafafa] w-full h-[380px] rounded-[24px]"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#5e5e5e] text-[20px] tracking-[-0.3px] w-[min-content]"
          >
            <p className="leading-[28px]">"{review.text}"</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="content-stretch flex gap-[12px] items-center relative shrink-0"
          >
            <div className="relative rounded-[100px] shrink-0 size-[32px]">
              <img 
                alt={review.name} 
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" 
                src={review.image} 
              />
            </div>
            <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-center text-nowrap">
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px] text-black tracking-[-0.3px]">
                <p className="leading-[1.5] text-nowrap">{review.name}</p>
              </div>
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#7c7c7c] text-[14px] tracking-[-0.2px]">
                <p className="leading-[1.5] text-nowrap">{review.role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const headingRef = useRef<HTMLDivElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingVisible(true);
        }
      },
      {
        threshold: 0.5
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  const handleDragEnd = (_: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    
    if (offset < -50 || velocity < -500) {
      // Swiped left - go to next
      if (currentIndex < mobileReviews.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    } else if (offset > 50 || velocity > 500) {
      // Swiped right - go to previous
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  return (
    <div className="absolute left-[23px] right-[23px] top-[2696px]">
      <div className="content-stretch flex flex-col gap-[48px] items-start w-full">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="content-stretch flex flex-col items-start relative shrink-0 w-full"
        >
          <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0d114d] text-[32px] text-center tracking-[-0.96px] w-full">
            <p className="leading-[40px]">Trusted by Students Across Nigeria.</p>
          </div>
        </motion.div>
        
        <div className="w-full relative">
          <div 
            ref={constraintsRef}
            className="w-full overflow-hidden relative h-[380px]"
          >
            <motion.div
              className="flex w-full h-full cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              {mobileReviews.map((review, index) => (
                <div key={review.id} className="min-w-full px-2">
                  <ReviewCard review={review} isActive={index === currentIndex} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-6">
            {mobileReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="transition-all duration-300"
                aria-label={`Go to review ${index + 1}`}
              >
                <motion.div
                  animate={{
                    width: index === currentIndex ? "24px" : "8px",
                    backgroundColor: index === currentIndex ? "#0d114d" : "#d1d5db"
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-[8px] rounded-full"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* Mobile View */}
      <div className="w-full min-h-screen bg-white md:hidden">
        <div className="relative w-[393px] mx-auto">
          {/* Render the imported design but hide the original review section */}
          <div className="relative">
            <IPhone1415Pro1 />
            {/* Overlay to hide original review section */}
            <div className="absolute left-0 right-0 top-[2696px] h-[500px] bg-white" />
          </div>
          
          {/* New animated review section */}
          <ReviewSection />
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block w-full min-h-screen bg-white">
        <div className="relative w-full">
          {/* Render the imported desktop design */}
          <div className="relative">
            <Frame427321839 />
            {/* Overlay to hide original review section */}
            <div className="absolute left-0 right-0 top-[2130px] h-[600px] bg-white z-10" />
          </div>
          
          {/* New animated desktop review section */}
          <DesktopReviewSection />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </>
  );
}