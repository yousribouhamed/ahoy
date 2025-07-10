import React from 'react';
import ShinyText from '@/components/ui/shiny-text';

export default function ShinyTextDemo() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black p-8 space-y-8">
            <h1 className="text-4xl font-bold text-white mb-8">Shiny Text Examples</h1>
            
            {/* Basic usage */}
            <div className="text-center">
                <h2 className="text-xl text-gray-300 mb-2">Basic Shiny Text</h2>
                <ShinyText text="Hello, World!" className="text-2xl font-semibold" />
            </div>

            {/* Different speeds */}
            <div className="text-center">
                <h2 className="text-xl text-gray-300 mb-2">Different Speeds</h2>
                <div className="space-y-2">
                    <ShinyText text="Fast Animation" speed={2} className="text-lg" />
                    <ShinyText text="Normal Speed" speed={5} className="text-lg" />
                    <ShinyText text="Slow Animation" speed={8} className="text-lg" />
                </div>
            </div>

            {/* Disabled state */}
            <div className="text-center">
                <h2 className="text-xl text-gray-300 mb-2">Disabled State</h2>
                <ShinyText text="No Animation" disabled={true} className="text-lg" />
            </div>

            {/* Large text */}
            <div className="text-center">
                <h2 className="text-xl text-gray-300 mb-2">Large Text</h2>
                <ShinyText text="BIG SHINY TEXT" className="text-4xl font-bold" speed={4} />
            </div>
        </div>
    );
}
