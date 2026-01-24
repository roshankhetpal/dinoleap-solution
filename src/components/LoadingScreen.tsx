import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/images/logo/DinoLeap-logo.svg";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + Math.random() * 10;
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500); // Wait a bit at 100% before finishing
                    return 100;
                }
                return next;
            });
        }, 150);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="relative">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <img src={Logo} alt="DinoLeap Logo" className="w-24 h-24 sm:w-32 sm:h-32 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
                </motion.div>

                {/* Pulsing glow background behind logo */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/20 rounded-full blur-3xl z-[-1]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="w-64 sm:w-80 h-1.5 bg-secondary/30 rounded-full overflow-hidden relative">
                <motion.div
                    className="h-full bg-gradient-to-r from-primary via-purple-500 to-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                    style={{ backgroundSize: "200% 100%" }}
                />
                {/* Shimmer effect on bar */}
                <motion.div
                    className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                />
            </div>

            <motion.div
                className="mt-4 text-sm font-medium text-muted-foreground flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <span>{Math.round(progress)}%</span>
                <span className="w-1 h-1 bg-primary rounded-full" />
                <span className="uppercase tracking-widest text-xs">Loading Experience</span>
            </motion.div>
        </motion.div>
    );
};

export default LoadingScreen;
