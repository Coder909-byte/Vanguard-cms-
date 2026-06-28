"use client";
import React from 'react';

export default function OgreError() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 select-none">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-widest drop-shadow-[0_4px_0_rgba(0,0,0,1)]">404</h1>
      
      <svg 
        width="140" 
        height="120" 
        viewBox="0 0 28 24" 
        className="my-6 drop-shadow-[0_4px_0_rgba(0,0,0,0.6)] animate-bounce duration-1000"
        style={{ imageRendering: 'pixelated' }}
      >
        {/* Left Head Skin */}
        <path d="M4 4h6v6H4zM3 5h8v4H3z" fill="#a7f3d0" />
        <path d="M5 6h1v1H5zM8 6h1v1H8z" fill="#ef4444" /> {/* Red eyes */}
        <path d="M4 8h6v1H4z" fill="#064e3b" /> {/* Mouth */}
        
        {/* Right Head Skin */}
        <path d="M16 4h6v6h-6zM15 5h8v4h-8z" fill="#a7f3d0" />
        <path d="M17 6h1v1h-1zM20 6h1v1h-1z" fill="#ef4444" /> {/* Red eyes */}
        <path d="M16 8h6v1h-6z" fill="#064e3b" /> {/* Mouth */}
        
        {/* Linked Ogre Torso & Shoulder Armor */}
        <path d="M5 10h16v8H5z" fill="#86efac" />
        <path d="M3 10h3v4H3zM20 10h4v4h-4z" fill="#b45309" /> {/* Spiked pauldrons */}
        <path d="M4 11h1v1H4zM22 11h1v1h-1z" fill="#f8fafc" /> {/* White spikes */}
        
        {/* Central Skull Belt Buckle */}
        <path d="M11 15h4v4h-4z" fill="#f1f5f9" />
        <path d="M12 16h1v1h-1zM14 16h1v1h-1z" fill="#0f172a" />
      </svg>
      
      <h2 className="text-base md:text-xl text-white font-bold tracking-wider mb-4 uppercase">
        You made the Ogre angry!
      </h2>
      
      <p className="text-[10px] md:text-xs text-zinc-400 tracking-wide max-w-md mx-auto leading-relaxed mb-8 uppercase">
        This room doesn't exist. Turn back before it's too late.
      </p>
      
      <button 
        onClick={() => window.location.href = '/'}
        className="border-[4px] border-double border-zinc-400 bg-zinc-800 hover:bg-zinc-700 hover:border-white text-white text-[11px] font-bold uppercase tracking-widest py-3 px-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all rounded-none"
      >
        Return to Home Page
      </button>
    </div>
  );
}