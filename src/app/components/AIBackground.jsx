"use client";

export default function AIBackground() {
  const nodes = [
    { x: "8%", y: "18%", delay: "0s" },
    { x: "22%", y: "38%", delay: "1.5s" },
    { x: "38%", y: "15%", delay: "3s" },
    { x: "52%", y: "32%", delay: "0.8s" },
    { x: "68%", y: "18%", delay: "2.2s" },
    { x: "84%", y: "38%", delay: "1.2s" },
    { x: "15%", y: "65%", delay: "2.8s" },
    { x: "32%", y: "78%", delay: "0.5s" },
    { x: "55%", y: "68%", delay: "3.5s" },
    { x: "73%", y: "76%", delay: "1.8s" },
    { x: "91%", y: "64%", delay: "2.5s" },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* =====================================================
          BASE AMBIENT LIGHT
      ===================================================== */}

      <div className="ai-bg-base" />

      <div className="ai-glow ai-glow-cyan" />

      <div className="ai-glow ai-glow-violet" />

      {/* =====================================================
          TECHNICAL GRID
      ===================================================== */}

      <div className="ai-grid" />

      {/* =====================================================
          NEURAL NETWORK
      ===================================================== */}

      <div className="ai-network">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="ai-line-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#22d3ee"
                stopOpacity="0"
              />

              <stop
                offset="50%"
                stopColor="#22d3ee"
                stopOpacity="0.18"
              />

              <stop
                offset="100%"
                stopColor="#8b5cf6"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          <path
            d="M80 180 L220 380 L380 150 L520 320 L680 180 L840 380"
            className="ai-network-line"
          />

          <path
            d="M150 650 L320 780 L550 680 L730 760 L900 640"
            className="ai-network-line"
          />

          <path
            d="M220 380 L320 780"
            className="ai-network-line"
          />

          <path
            d="M380 150 L550 680"
            className="ai-network-line"
          />

          <path
            d="M520 320 L730 760"
            className="ai-network-line"
          />

          <path
            d="M680 180 L900 640"
            className="ai-network-line"
          />
        </svg>

        {nodes.map((node, index) => (
          <span
            key={index}
            className="ai-node"
            style={{
              left: node.x,
              top: node.y,
              animationDelay: node.delay,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          DATA PARTICLES
      ===================================================== */}

      <div className="ai-particles">
        <span className="ai-particle particle-1" />
        <span className="ai-particle particle-2" />
        <span className="ai-particle particle-3" />
        <span className="ai-particle particle-4" />
        <span className="ai-particle particle-5" />
        <span className="ai-particle particle-6" />
      </div>

      {/* =====================================================
          ORBITAL CORE
      ===================================================== */}

      <div className="ai-orbit-wrapper">
        <div className="ai-orbit orbit-1">
          <span />
        </div>

        <div className="ai-orbit orbit-2">
          <span />
        </div>

        <div className="ai-orbit orbit-3">
          <span />
        </div>

        <div className="ai-core">
          <div className="ai-core-inner" />
        </div>
      </div>

      {/* =====================================================
          VIGNETTE
      ===================================================== */}

      <div className="ai-vignette" />
    </div>
  );
}