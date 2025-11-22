import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

const images = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
];

export const ScrollingShowcase = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
    const x2 = useTransform(scrollYProgress, [0, 1], [-1000, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, -5]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <div ref={containerRef} className="w-full py-32 overflow-hidden bg-black relative perspective-1000">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05),transparent_70%)] pointer-events-none"></div>

            <motion.div
                style={{ opacity, scale }}
                className="text-center mb-20 relative z-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block mb-4"
                >
                    <span className="py-1 px-3 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                        Next-Gen Visuals
                    </span>
                </motion.div>
                <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                    Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-blue-500 animate-pulse">Advanced Intelligence</span>
                </h3>
                <p className="text-blue-200/60 max-w-2xl mx-auto text-lg font-light">
                    Processing visual data at the speed of light. Experience the future of rendering.
                </p>
            </motion.div>

            {/* 3D Tilted Rows */}
            <div className="relative flex flex-col gap-12 rotate-[-2deg] scale-110">
                {/* Row 1 - Left to Right */}
                <motion.div
                    style={{ x: x1, rotateX: 10 }}
                    className="flex gap-8 whitespace-nowrap"
                >
                    {[...images, ...images, ...images].map((src, i) => (
                        <Card key={`row1-${i}`} src={src} index={i} />
                    ))}
                </motion.div>

                {/* Row 2 - Right to Left */}
                <motion.div
                    style={{ x: x2, rotateX: -10 }}
                    className="flex gap-8 whitespace-nowrap"
                >
                    {[...images, ...images, ...images].map((src, i) => (
                        <Card key={`row2-${i}`} src={src} index={i} reverse />
                    ))}
                </motion.div>
            </div>

            {/* Overlay Gradients for smooth fade */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
        </div>
    );
};

const Card = ({ src, index, reverse = false }: { src: string, index: number, reverse?: boolean }) => {
    return (
        <motion.div
            className="relative w-[400px] h-[260px] rounded-3xl overflow-hidden cursor-pointer group perspective-500"
            whileHover={{
                scale: 1.1,
                rotateY: reverse ? -5 : 5,
                zIndex: 50,
                transition: { duration: 0.3 }
            }}
        >
            {/* Holographic Border */}
            <div className="absolute inset-0 p-[1px] rounded-3xl bg-gradient-to-br from-primary/50 via-transparent to-blue-600/50 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-black rounded-3xl"></div>
            </div>

            {/* Image Container */}
            <div className="absolute inset-[1px] rounded-[23px] overflow-hidden bg-gray-900">
                <img
                    src={src}
                    alt="Tech visual"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />

                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none"></div>

                {/* Glitch Overlay on Hover */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 mix-blend-overlay"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80">
                    <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            <span className="text-primary text-xs font-mono tracking-wider">SYSTEM_ACTIVE</span>
                        </div>
                        <h4 className="text-white font-bold text-lg leading-none">Neural Node {index + 1}</h4>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
