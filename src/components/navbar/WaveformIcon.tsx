import React from 'react';

const WaveformIcon: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
    // Base heights for 7 bars, generating a central peak effect
    const baseBarHeights = [10, 18, 26, 34, 26, 18, 10]; 

    return (
        <div className="relative w-[42px] h-[42px] flex items-center justify-center">
            {/* Outer gradient ring */}
            <div
                className="absolute w-[42px] h-[42px] rounded-full"
                style={{
                    background: 'linear-gradient(135deg, #f97316, #c45a00)',
                    mask: 'radial-gradient(circle at center, transparent 38%, black 45%)',
                    WebkitMask: 'radial-gradient(circle at center, transparent 38%, black 45%)'
                }}
            ></div>
            {/* Inner waveform bars container */}
            <div className="relative z-10 flex items-end justify-center h-[36px] w-[36px] gap-[2px]">
                {baseBarHeights.map((baseHeight, i) => (
                    <div
                        key={i}
                        className={`absolute bottom-0 w-[4px] rounded-t-full transition-all duration-500 ease-out`}
                        style={{
                            left: `${4 + i * (4 + 2)}px`, // Position bars evenly
                            height: `${baseHeight}px`,
                            background: 'linear-gradient(to top, #f97316, #ea8c00)', // Warm orange-gold gradient
                            // 3D metallic depth and warm inner glow
                            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.4), inset 0 -1px 2px rgba(0,0,0,0.5), 0 0 5px rgba(240,160,96,0.6)',
                            animation: isHovered ? `waveform-grow-${i} 0.5s ease-out forwards` : 'none'
                        } as React.CSSProperties}
                    ></div>
                ))}
            </div>
            {/* Styles for waveform bar animation */}
            <style jsx>{`
                @keyframes waveform-grow-0 { 0% { height: ${baseBarHeights[0]}px; } 50% { height: ${baseBarHeights[0] + 10}px; filter: brightness(1.2); } 100% { height: ${baseBarHeights[0]}px; filter: brightness(1); } }
                @keyframes waveform-grow-1 { 0% { height: ${baseBarHeights[1]}px; } 50% { height: ${baseBarHeights[1] + 10}px; filter: brightness(1.2); } 100% { height: ${baseBarHeights[1]}px; filter: brightness(1); } }
                @keyframes waveform-grow-2 { 0% { height: ${baseBarHeights[2]}px; } 50% { height: ${baseBarHeights[2] + 10}px; filter: brightness(1.2); } 100% { height: ${baseBarHeights[2]}px; filter: brightness(1); } }
                @keyframes waveform-grow-3 { 0% { height: ${baseBarHeights[3]}px; } 50% { height: ${baseBarHeights[3] + 10}px; filter: brightness(1.2); } 100% { height: ${baseBarHeights[3]}px; filter: brightness(1); } }
                @keyframes waveform-grow-4 { 0% { height: ${baseBarHeights[4]}px; } 50% { height: ${baseBarHeights[4] + 10}px; filter: brightness(1.2); } 100% { height: ${baseBarHeights[4]}px; filter: brightness(1); } }
                @keyframes waveform-grow-5 { 0% { height: ${baseBarHeights[5]}px; } 50% { height: ${baseBarHeights[5] + 10}px; filter: brightness(1.2); } 100% { height: ${baseBarHeights[5]}px; filter: brightness(1); } }
                @keyframes waveform-grow-6 { 0% { height: ${baseBarHeights[6]}px; } 50% { height: ${baseBarHeights[6] + 10}px; filter: brightness(1.2); } 100% { height: ${baseBarHeights[6]}px; filter: brightness(1); } }
            `}</style>
        </div>
    );
};

export default WaveformIcon;