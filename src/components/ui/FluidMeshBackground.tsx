
import React from 'react';

const FluidMeshBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden bg-background">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                {/* Blob 1: Primary Blue - Top Left */}
                <div
                    className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/40 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob-1"
                />

                {/* Blob 2: Accent Cyan - Top Right */}
                <div
                    className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-accent/40 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob-2"
                />

                {/* Blob 3: Neon Purple - Bottom Left */}
                <div
                    className="absolute bottom-[-20%] left-[-20%] w-[60vw] h-[60vw] bg-[#7d2ae8]/30 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob-3"
                />

                {/* Blob 4: Bright Cyan - Bottom Right */}
                <div
                    className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#00E6D1]/30 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob-4"
                />

                {/* Blob 5: Center Glow */}
                <div
                    className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] bg-primary/30 rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-blob-5"
                />

                {/* Interactive Highlight Layer (optional overlay) */}
                <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
            </div>
        </div>
    );
};

export default FluidMeshBackground;
