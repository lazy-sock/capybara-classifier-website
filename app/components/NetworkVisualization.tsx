import React, { useState } from "react";

const NetworkVisualization: React.FC = () => {
  // State to track which node is being hovered
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const probablities = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 0.1, 0.2];

  const layer_labels = [
    "Input",
    "ResNet50",
    "ResNet50",
    "ResNet50",
    "ResNet50",
    "ResNet50",
    "Attention 1",
    "Attention 2",
    "Global Average Pooling",
    "Feature Enhancement",
    "Feature Enhancement",
    "Output",
  ];

  const layers = [
    // Layer 1 (Input - RGB channels)
    [
      { id: "input_red", label: "R" },
      { id: "input_green", label: "G" },
      { id: "input_blue", label: "B" },
    ],

    // Layer 2 (ResNet50 Initial Conv + Pool)
    [
      { id: "conv1_1", label: "Conv1_1" },
      { id: "conv1_2", label: "Conv1_2" },
      { id: "conv1_3", label: "Conv1_3" },
      { id: "conv1_4", label: "Conv1_4" },
      { id: "conv1_5", label: "Conv1_5" },
      { id: "conv1_6", label: "Conv1_6" },
      { id: "conv1_7", label: "Conv1_7" },
      { id: "conv1_8", label: "Conv1_8" },
    ],

    // Layer 3 (ResNet50 Layer1 - 56x56x256)
    [
      { id: "layer1_1", label: "L1_1" },
      { id: "layer1_2", label: "L1_2" },
      { id: "layer1_3", label: "L1_3" },
      { id: "layer1_4", label: "L1_4" },
      { id: "layer1_5", label: "L1_5" },
      { id: "layer1_6", label: "L1_6" },
      { id: "layer1_7", label: "L1_7" },
      { id: "layer1_8", label: "L1_8" },
    ],

    // Layer 4 (ResNet50 Layer2 - 28x28x512)
    [
      { id: "layer2_1", label: "L2_1" },
      { id: "layer2_2", label: "L2_2" },
      { id: "layer2_3", label: "L2_3" },
      { id: "layer2_4", label: "L2_4" },
      { id: "layer2_5", label: "L2_5" },
      { id: "layer2_6", label: "L2_6" },
      { id: "layer2_7", label: "L2_7" },
      { id: "layer2_8", label: "L2_8" },
    ],

    // Layer 5 (ResNet50 Layer3 - 14x14x1024)
    [
      { id: "layer3_1", label: "L3_1" },
      { id: "layer3_2", label: "L3_2" },
      { id: "layer3_3", label: "L3_3" },
      { id: "layer3_4", label: "L3_4" },
      { id: "layer3_5", label: "L3_5" },
      { id: "layer3_6", label: "L3_6" },
      { id: "layer3_7", label: "L3_7" },
      { id: "layer3_8", label: "L3_8" },
    ],

    // Layer 6 (ResNet50 Layer4 - 7x7x2048)
    [
      { id: "layer4_1", label: "L4_1" },
      { id: "layer4_2", label: "L4_2" },
      { id: "layer4_3", label: "L4_3" },
      { id: "layer4_4", label: "L4_4" },
      { id: "layer4_5", label: "L4_5" },
      { id: "layer4_6", label: "L4_6" },
      { id: "layer4_7", label: "L4_7" },
      { id: "layer4_8", label: "L4_8" },
    ],

    // Layer 7 (Attention Module 1)
    [
      { id: "att1_1", label: "Att1_1" },
      { id: "att1_2", label: "Att1_2" },
      { id: "att1_3", label: "Att1_3" },
      { id: "att1_4", label: "Att1_4" },
      { id: "att1_5", label: "Att1_5" },
      { id: "att1_6", label: "Att1_6" },
      { id: "att1_7", label: "Att1_7" },
      { id: "att1_8", label: "Att1_8" },
    ],

    // Layer 8 (Attention Module 2)
    [
      { id: "att2_1", label: "Att2_1" },
      { id: "att2_2", label: "Att2_2" },
      { id: "att2_3", label: "Att2_3" },
      { id: "att2_4", label: "Att2_4" },
      { id: "att2_5", label: "Att2_5" },
      { id: "att2_6", label: "Att2_6" },
      { id: "att2_7", label: "Att2_7" },
      { id: "att2_8", label: "Att2_8" },
    ],

    // Layer 9 (Global Average Pooling)
    [
      { id: "gap_1", label: "GAP_1" },
      { id: "gap_2", label: "GAP_2" },
      { id: "gap_3", label: "GAP_3" },
      { id: "gap_4", label: "GAP_4" },
      { id: "gap_5", label: "GAP_5" },
      { id: "gap_6", label: "GAP_6" },
      { id: "gap_7", label: "GAP_7" },
      { id: "gap_8", label: "GAP_8" },
    ],

    // Layer 10 (Feature Enhancement - First Linear Layer 2048->1024)
    [
      { id: "enh1_1", label: "E1_1" },
      { id: "enh1_2", label: "E1_2" },
      { id: "enh1_3", label: "E1_3" },
      { id: "enh1_4", label: "E1_4" },
      { id: "enh1_5", label: "E1_5" },
      { id: "enh1_6", label: "E1_6" },
    ],

    // Layer 11 (Feature Enhancement - Second Linear Layer 1024->512)
    [
      { id: "enh2_1", label: "E2_1" },
      { id: "enh2_2", label: "E2_2" },
      { id: "enh2_3", label: "E2_3" },
      { id: "enh2_4", label: "E2_4" },
    ],

    // Layer 12 (Output - Bird Species Classification)
    [
      { id: "output01", label: "Amsel" },
      { id: "output02", label: "Blaumeise" },
      { id: "output03", label: "Buchfink" },
      { id: "output04", label: "Buntspecht" },
      { id: "output05", label: "Elster" },
      { id: "output06", label: "Feldsperling" },
      { id: "output07", label: "Gimpel" },
      { id: "output08", label: "Kohlmeise" },
      { id: "output09", label: "Rabe" },
      { id: "output10", label: "Rotkehlchen" },
      { id: "output11", label: "Eichhoernchen" },
    ],
  ];

  // 🎨 CUSTOMIZE APPEARANCE HERE:
  const config = {
    layerSpacing: 120, // Distance between layers (vertical)
    nodeSize: 60, // Size of each node/image
    nodeSpacing: 100, // Horizontal spacing between nodes
    curveIntensity: 0.6, // How curved the lines are (0 = straight, 1 = very curved)
    strokeWidth: 2,
    strokeColor: "#AAAAAA",
    strokeOpacity: 0.5,
    highlightColor: "#ca895f", // Color for highlighted curves
    highlightOpacity: 1,
  };

  // Calculate positions for each node
  const getNodePositions = () => {
    const positions: { [key: string]: { x: number; y: number } } = {};

    layers.forEach((layer, layerIndex) => {
      const layerWidth = (layer.length - 1) * config.nodeSpacing;
      const startX = (1200 - layerWidth) / 2; // Center horizontally

      layer.forEach((node, nodeIndex) => {
        positions[node.id] = {
          x: startX + nodeIndex * config.nodeSpacing,
          y: layerIndex * config.layerSpacing + 100,
        };
      });
    });

    return positions;
  };

  // Generate all connections between adjacent layers
  const generateConnections = () => {
    const positions = getNodePositions();
    const connections: any = [];

    for (let layerIndex = 0; layerIndex < layers.length - 1; layerIndex++) {
      const currentLayer = layers[layerIndex];
      const nextLayer = layers[layerIndex + 1];

      // Connect every node in current layer to every node in next layer
      currentLayer.forEach((fromNode) => {
        nextLayer.forEach((toNode) => {
          const from = positions[fromNode.id];
          const to = positions[toNode.id];

          // Calculate control points for curve
          const distance = to.y - from.y;
          const controlOffset = distance * config.curveIntensity;

          connections.push({
            from: fromNode.id,
            to: toNode.id,
            path: `M ${from.x} ${from.y} C ${from.x} ${from.y + controlOffset}, ${to.x} ${to.y - controlOffset}, ${to.x} ${to.y}`,
          });
        });
      });
    }

    return connections;
  };

  const nodePositions = getNodePositions();
  const connections = generateConnections();

  return (
    <div className="mx-auto max-w-6xl">
      <div
        className="relative rounded-lg p-8 shadow-lg"
        style={{ height: "1500px" }}
      >
        {/* SVG for all curves */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          style={{ width: "100%", height: "100%" }}
        >
          {/* Render all connections */}
          {connections.map((connection: any, index: any) => {
            // Check if this connection should be highlighted
            const isHighlighted = hoveredNode === connection.to;

            return (
              <path
                key={`${connection.from}-${connection.to}`}
                d={connection.path}
                stroke={
                  isHighlighted ? config.highlightColor : config.strokeColor
                }
                strokeWidth={config.strokeWidth}
                strokeOpacity={
                  isHighlighted ? config.highlightOpacity : config.strokeOpacity
                }
                fill="none"
                className="transition-all duration-200"
              />
            );
          })}
        </svg>

        {/* Render all nodes */}
        {layers.map((layer, layerIndex) =>
          layer.map((node) => {
            const pos = nodePositions[node.id];
            if (node.id.startsWith("output")) {
              return (
                <div
                  key={node.id}
                  className="bg-primary hover:bg-secondary dark:hover:bg-dark-secondary absolute flex -translate-x-1/2 -translate-y-1/2 transform cursor-pointer flex-col items-center justify-center rounded-2xl text-white shadow-lg transition-colors"
                  style={{
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                    width: `${config.nodeSize + 10}px`,
                    height: `${config.nodeSize + 10}px`,
                  }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div className="text-xs font-bold">{node.label}</div>
                  <div
                    style={{
                      width: probablities[(node.id[7] as any) - 1] * 45,
                    }}
                    className="bg-secondary h-[10px]"
                  ></div>
                </div>
              );
            } else {
              return (
                <div
                  key={node.id}
                  className="bg-primary hover:bg-secondary absolute flex -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-2xl text-white shadow-lg transition-colors"
                  style={{
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                    width: `${config.nodeSize}px`,
                    height: `${config.nodeSize}px`,
                  }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <img
                    src={`/ai_visualization/${node.id}.png`}
                    alt={node.label}
                    className="h-full w-full rounded-xl object-cover"
                  />
                  {/* <span className="text-xs font-bold">{node.label}</span> */}
                </div>
              );
            }
          }),
        )}

        {/* Layer labels */}
        {layers.map((layer, index) => (
          <div
            key={`layer-${index}`}
            className="absolute text-sm font-semibold text-gray-600"
            style={{
              left: "20px",
              top: `${index * config.layerSpacing + 100}px`,
              transform: "translateY(-50%)",
            }}
          >
            {layer_labels[index]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkVisualization;
