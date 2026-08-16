"use client";

import {
  FaUser,
  FaServer,
  FaDatabase,
  FaRobot,
  FaBrain,
  FaCode,
} from "react-icons/fa";

const nodes = [
  {
    id: "input",
    title: "User Input",
    subtitle: "Request",
    icon: FaUser,
    type: "input",
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "Orchestration",
    icon: FaServer,
    type: "backend",
  },
  {
    id: "rag",
    title: "RAG",
    subtitle: "Retrieval",
    icon: FaDatabase,
    type: "ai",
  },
  {
    id: "agents",
    title: "AI Agents",
    subtitle: "Tools & Logic",
    icon: FaRobot,
    type: "ai",
  },
  {
    id: "llm",
    title: "LLM",
    subtitle: "Reasoning",
    icon: FaBrain,
    type: "llm",
  },
  {
    id: "application",
    title: "Application",
    subtitle: "Response",
    icon: FaCode,
    type: "output",
  },
];

export default function AIArchitecture() {
  return (
    <div className="ai-architecture">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
            Live System
          </p>

          <p className="mt-1 text-sm font-medium text-slate-400">
            AI Application Pipeline
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="ai-live-dot" />

          <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-400/80">
            Processing
          </span>
        </div>
      </div>

      {/* Pipeline */}
      <div className="ai-pipeline">
        {nodes.map((node, index) => {
          const Icon = node.icon;

          return (
            <div key={node.id} className="ai-pipeline-step">
              <div
                className={`ai-pipeline-node ai-node-${node.type}`}
              >
                <div className="ai-pipeline-icon">
                  <Icon />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    {node.title}
                  </p>

                  <p className="mt-0.5 text-[9px] uppercase tracking-[0.12em] text-slate-600">
                    {node.subtitle}
                  </p>
                </div>

                <span className="ai-node-status" />
              </div>

              {index !== nodes.length - 1 && (
                <div className="ai-connection">
                  <div className="ai-connection-line" />

                  <span
                    className={`ai-data-packet packet-${index}`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Processing information */}
      <div className="mt-5 grid grid-cols-3 gap-2">
        <div className="ai-metric">
          <span>RETRIEVAL</span>
          <strong>ACTIVE</strong>
        </div>

        <div className="ai-metric">
          <span>AGENTS</span>
          <strong>READY</strong>
        </div>

        <div className="ai-metric">
          <span>LLM</span>
          <strong>ONLINE</strong>
        </div>
      </div>
    </div>
  );
}