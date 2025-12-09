import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [arReady, setArReady] = useState(false);
  const [targetFound, setTargetFound] = useState(false);

  useEffect(() => {
    // Access A-Frame elements
    // We select specifically the element with the mindar-image-target attribute
    const sceneEl = document.querySelector('a-scene');
    const targetEl = document.querySelector('a-entity[mindar-image-target]');

    // Event Handlers
    const onArReady = () => {
      console.log("MindAR is ready");
      setArReady(true);
    };

    const onTargetFound = () => {
      console.log("Target found");
      setTargetFound(true);
    };

    const onTargetLost = () => {
      console.log("Target lost");
      setTargetFound(false);
    };

    // Attach Listeners
    if (sceneEl) {
      sceneEl.addEventListener('arReady', onArReady);
    }
    if (targetEl) {
      targetEl.addEventListener('targetFound', onTargetFound);
      targetEl.addEventListener('targetLost', onTargetLost);
    }

    // Cleanup listeners on unmount
    return () => {
      if (sceneEl) sceneEl.removeEventListener('arReady', onArReady);
      if (targetEl) {
        targetEl.removeEventListener('targetFound', onTargetFound);
        targetEl.removeEventListener('targetLost', onTargetLost);
      }
    };
  }, []);

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '24px',
      boxSizing: 'border-box',
      position: 'relative'
    }}>
      {/* CSS Animations */}
      <style>{`
        @keyframes scan {
          0% { top: 10%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 90%; opacity: 0; }
        }
        @keyframes popIn {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>

      {/* Top Status Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'auto'
      }}>
        <div style={{
          background: 'rgba(20, 20, 20, 0.8)',
          backdropFilter: 'blur(8px)',
          padding: '12px 24px',
          borderRadius: '30px',
          color: '#fff',
          fontWeight: 600,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          fontSize: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: arReady ? '#4caf50' : '#ff9800',
            boxShadow: arReady ? '0 0 8px #4caf50' : 'none',
            transition: 'background-color 0.3s ease'
          }} />
          {arReady ? 'AR Camera Active' : 'Initializing...'}
        </div>
      </div>

      {/* Scanning Overlay (Reticle) - Visible when AR is ready but target is not found */}
      {arReady && !targetFound && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60vw',
          height: '60vw', // Square reticle
          maxWidth: '300px',
          maxHeight: '300px',
          border: '2px solid rgba(255, 255, 255, 0.5)',
          borderRadius: '24px',
          // Use box-shadow to darken the area outside the reticle
          boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.4)', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none'
        }}>
          <div style={{
            color: 'rgba(255, 255, 255, 0.9)',
            marginTop: '16px',
            textAlign: 'center',
            fontSize: '14px',
            fontWeight: 500,
            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}>
            Point camera at image
          </div>
          
          {/* Scanning Animation Line */}
          <div style={{
            width: '100%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #4caf50, transparent)',
            position: 'absolute',
            animation: 'scan 2s infinite ease-in-out'
          }} />
        </div>
      )}

      {/* Bottom Information - Shows when target is found */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '20px',
        pointerEvents: 'auto'
      }}>
        {targetFound && (
          <div style={{
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '16px',
            textAlign: 'center',
            boxShadow: '0 10px 25px rgba(99, 102, 241, 0.5)',
            fontWeight: 'bold',
            animation: 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}>
            Target Detected!
          </div>
        )}
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}