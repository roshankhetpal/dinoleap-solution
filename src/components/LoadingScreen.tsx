import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/images/logo/DinoLeap-logo.svg";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState("Initializing");

    const loadingStages = [
        "Initializing",
        "Loading assets",
        "Preparing experience",
        "Almost ready",
        "Let's go!"
    ];

    useEffect(() => {
        // Simulate loading progress
        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + Math.random() * 8 + 2;
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 600);
                    return 100;
                }
                return next;
            });
        }, 120);

        return () => clearInterval(timer);
    }, [onComplete]);

    // Update loading text based on progress
    useEffect(() => {
        const stageIndex = Math.min(
            Math.floor(progress / 25),
            loadingStages.length - 1
        );
        setLoadingText(loadingStages[stageIndex]);
    }, [progress]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f0a1a] to-[#0a0f0f]" />
            
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/30 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Animated rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[1, 2, 3].map((ring) => (
                    <motion.div
                        key={ring}
                        className="absolute border border-primary/10 rounded-full"
                        style={{
                            width: `${150 + ring * 80}px`,
                            height: `${150 + ring * 80}px`,
                        }}
                        animate={{
                            rotate: ring % 2 === 0 ? 360 : -360,
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            rotate: {
                                duration: 20 + ring * 5,
                                repeat: Infinity,
                                ease: "linear",
                            },
                            scale: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        }}
                    />
                ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Logo container with glow effects */}
                <div className="relative mb-10">
                    {/* Outer glow */}
                    <motion.div
                        className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.6, 0.3],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    
                    {/* Inner glow */}
                    <motion.div
                        className="absolute -inset-4 bg-primary/30 rounded-full blur-2xl"
                        animate={{
                            scale: [1.1, 1, 1.1],
                            opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 200, 
                            damping: 15,
                            duration: 0.8 
                        }}
                        className="relative"
                    >
                        <motion.img 
                            src={Logo} 
                            alt="DinoLeap Logo" 
                            className="w-28 h-28 sm:w-36 sm:h-36 object-contain drop-shadow-[0_0_30px_rgba(0,230,209,0.4)]"
                            animate={{
                                filter: [
                                    "drop-shadow(0 0 20px rgba(0,230,209,0.3))",
                                    "drop-shadow(0 0 40px rgba(0,230,209,0.6))",
                                    "drop-shadow(0 0 20px rgba(0,230,209,0.3))",
                                ],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>
                </div>

                {/* Brand name */}
                <motion.h1
                    className="text-2xl sm:text-3xl font-bold mb-8 tracking-wider"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <span className="bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        DinoLeap
                    </span>
                </motion.h1>

                {/* Progress bar container */}
                <motion.div
                    className="w-72 sm:w-80"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    {/* Progress bar background */}
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
                        {/* Progress fill */}
                        <motion.div
                            className="h-full relative"
                            style={{ width: `${progress}%` }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                        >
                            {/* Gradient fill */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-cyan-400" />
                            
                            {/* Animated shimmer */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                            
                            {/* Glowing tip */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full blur-sm" />
                        </motion.div>
                    </div>

                    {/* Progress info */}
                    <div className="flex justify-between items-center mt-4">
                        <motion.span
                            className="text-xs text-muted-foreground uppercase tracking-[0.2em]"
                            key={loadingText}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {loadingText}
                        </motion.span>
                        <span className="text-sm font-mono text-primary font-medium">
                            {Math.round(progress)}%
                        </span>
                    </div>
                </motion.div>

                {/* Decorative dots */}
                <motion.div
                    className="flex gap-2 mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 bg-primary/50 rounded-full"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
