import React, { useState, useRef } from 'react';
import {
  Heart,
  Briefcase,
  Home,
  Calendar,
  Users,
  Sparkles,
  TreePine,
} from 'lucide-react';

// TypeScript Interfaces
interface FamilyMember {
  id: string;
  name: string;
  generation: number;
  parentId?: string;
  spouseId?: string;
  spouseName?: string;
  location?: string;
  occupation?: string;
  birthYear?: number;
  children?: string[];
  x?: number;
  y?: number;
}

// Enhanced Family Data
const familyData: FamilyMember[] = [
  {
    id: '1',
    name: 'Bhim Bahadur Gaire',
    generation: 1,
    spouseName: 'Maya Devi Gaire',
    birthYear: 1940,
    children: ['2', '3', '4'],
    location: 'Baglung, Nepal (Origin)',
  },
  {
    id: '2',
    name: 'Ram Prasad Gaire',
    generation: 2,
    parentId: '1',
    spouseName: 'Kamala Gaire',
    location: 'London, UK',
    occupation: 'Civil Engineer',
    birthYear: 1965,
    children: ['5', '6', '7'],
  },
  {
    id: '3',
    name: 'Shyam Kumar Gaire',
    generation: 2,
    parentId: '1',
    spouseName: 'Radha Gaire',
    location: 'Manchester, UK',
    occupation: 'Medical Doctor',
    birthYear: 1968,
    children: ['8', '9'],
  },
  {
    id: '4',
    name: 'Hari Prasad Gaire',
    generation: 2,
    parentId: '1',
    spouseName: 'Sunita Gaire',
    location: 'Birmingham, UK',
    occupation: 'Business Owner',
    birthYear: 1970,
    children: ['10'],
  },
  {
    id: '5',
    name: 'Gita Gaire',
    generation: 3,
    parentId: '2',
    location: 'London, UK',
    occupation: 'Teacher',
    birthYear: 1990,
  },
  {
    id: '6',
    name: 'Sita Gaire',
    generation: 3,
    parentId: '2',
    spouseName: 'Rajan Sharma',
    location: 'Birmingham, UK',
    occupation: 'NHS Nurse',
    birthYear: 1992,
    children: ['11', '12'],
  },
  {
    id: '7',
    name: 'Arjun Gaire',
    generation: 3,
    parentId: '2',
    location: 'London, UK',
    occupation: 'Software Engineer',
    birthYear: 1995,
  },
  {
    id: '8',
    name: 'Anita Gaire',
    generation: 3,
    parentId: '3',
    spouseName: 'David Smith',
    location: 'Manchester, UK',
    occupation: 'Architect',
    birthYear: 1993,
  },
  {
    id: '9',
    name: 'Bikash Gaire',
    generation: 3,
    parentId: '3',
    spouseName: 'Priya Thapa',
    location: 'Leeds, UK',
    occupation: 'Restaurant Owner',
    birthYear: 1996,
    children: ['13'],
  },
  {
    id: '10',
    name: 'Manish Gaire',
    generation: 3,
    parentId: '4',
    location: 'Birmingham, UK',
    occupation: 'Medical Student',
    birthYear: 1998,
  },
  {
    id: '11',
    name: 'Aarav Sharma-Gaire',
    generation: 4,
    parentId: '6',
    location: 'Birmingham, UK',
    birthYear: 2020,
  },
  {
    id: '12',
    name: 'Aanya Sharma-Gaire',
    generation: 4,
    parentId: '6',
    location: 'Birmingham, UK',
    birthYear: 2022,
  },
  {
    id: '13',
    name: 'Nirvan Gaire',
    generation: 4,
    parentId: '9',
    location: 'Leeds, UK',
    birthYear: 2023,
  },
];

const FamilyTreePage: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Calculate tree layout
  const calculateTreeLayout = () => {
    const layout = [...familyData];
    const generations = Array.from(
      new Set(layout.map((m) => m.generation))
    ).sort();

    generations.forEach((gen, genIndex) => {
      const membersInGen = layout.filter((m) => m.generation === gen);
      const yPosition = 200 + genIndex * 280;

      // Calculate x positions to spread branches
      membersInGen.forEach((member, index) => {
        const spacing = gen === 1 ? 0 : gen === 2 ? 400 : 250;
        const totalWidth = (membersInGen.length - 1) * spacing;
        const startX = 800 - totalWidth / 2;
        member.x = startX + index * spacing;
        member.y = yPosition;
      });
    });

    return layout;
  };

  const treeLayout = calculateTreeLayout();

  const drawTreeBranch = (parent: FamilyMember, child: FamilyMember) => {
    if (!parent.x || !parent.y || !child.x || !child.y) return null;

    const controlPoint1Y = parent.y + 100;
    const controlPoint2Y = child.y - 100;

    return (
      <g key={`branch-${parent.id}-${child.id}`}>
        {/* Tree branch path */}
        <path
          d={`M ${parent.x} ${parent.y + 60} 
              C ${parent.x} ${controlPoint1Y}, 
                ${child.x} ${controlPoint2Y}, 
                ${child.x} ${child.y - 60}`}
          stroke="url(#woodGradient)"
          strokeWidth="8"
          fill="none"
          className="tree-branch"
        />
        {/* Decorative leaves */}
        <circle
          cx={parent.x}
          cy={parent.y + 100}
          r="4"
          fill="#228B22"
          opacity="0.6"
        />
        <circle
          cx={child.x}
          cy={child.y - 100}
          r="4"
          fill="#228B22"
          opacity="0.6"
        />
      </g>
    );
  };

  const getMemberById = (id: string) => treeLayout.find((m) => m.id === id);

  return (
    <div className="family-tree-page">
      <div className="tree-hero">
        <h1>Our Family Tree</h1>
        <p>From the roots in Baglung to branches across the UK</p>
        <div className="tree-stats">
          <div className="stat-item">
            <Sparkles size={20} />
            <span>{familyData.length} Members</span>
          </div>
          <div className="stat-item">
            <TreePine size={20} />
            <span>4 Generations</span>
          </div>
          <div className="stat-item">
            <Home size={20} />
            <span>6 UK Cities</span>
          </div>
        </div>
      </div>

      <div className="tree-container">
        <svg
          ref={svgRef}
          width="1600"
          height="1200"
          viewBox="0 0 1600 1200"
          className="family-tree-svg"
        >
          <defs>
            {/* Wood texture gradient */}
            <linearGradient id="woodGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: '#8B4513', stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: '#A0522D', stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: '#8B4513', stopOpacity: 1 }}
              />
            </linearGradient>

            {/* Leaf pattern */}
            <pattern
              id="leafPattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="25" cy="25" r="20" fill="#228B22" opacity="0.1" />
              <circle cx="75" cy="75" r="15" fill="#32CD32" opacity="0.1" />
              <circle cx="75" cy="25" r="18" fill="#228B22" opacity="0.1" />
              <circle cx="25" cy="75" r="22" fill="#32CD32" opacity="0.1" />
            </pattern>
          </defs>

          {/* Background decoration */}
          <rect width="1600" height="1200" fill="url(#leafPattern)" />

          {/* Tree trunk base */}
          <rect
            x="780"
            y="150"
            width="40"
            height="1000"
            fill="url(#woodGradient)"
            opacity="0.3"
            rx="20"
          />

          {/* Draw branches */}
          <g className="branches">
            {treeLayout.map((member) => {
              if (member.children) {
                return member.children.map((childId) => {
                  const child = getMemberById(childId);
                  if (child) return drawTreeBranch(member, child);
                  return null;
                });
              }
              return null;
            })}
          </g>

          {/* Draw family members */}
          <g className="members">
            {treeLayout.map((member) => {
              if (!member.x || !member.y) return null;
              const isSelected = selectedMember === member.id;
              const isHovered = hoveredMember === member.id;

              return (
                <g
                  key={member.id}
                  className={`member-node ${isSelected ? 'selected' : ''} ${
                    isHovered ? 'hovered' : ''
                  }`}
                  onMouseEnter={() => setHoveredMember(member.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                  onClick={() =>
                    setSelectedMember(isSelected ? null : member.id)
                  }
                  style={{ cursor: 'pointer' }}
                >
                  {/* Glow effect */}
                  {(isSelected || isHovered) && (
                    <circle
                      cx={member.x}
                      cy={member.y}
                      r="80"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="2"
                      opacity="0.5"
                      className="glow-effect"
                    />
                  )}

                  {/* Member card background */}
                  <rect
                    x={member.x - 120}
                    y={member.y - 60}
                    width="240"
                    height="120"
                    rx="15"
                    fill="white"
                    stroke={isSelected ? '#c8102e' : '#ddd'}
                    strokeWidth={isSelected ? '3' : '2'}
                    filter="url(#shadow)"
                    className="member-card-bg"
                  />

                  {/* Generation badge */}
                  <circle
                    cx={member.x - 100}
                    cy={member.y - 40}
                    r="15"
                    fill="#c8102e"
                  />
                  <text
                    x={member.x - 100}
                    y={member.y - 35}
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    G{member.generation}
                  </text>

                  {/* Member name */}
                  <text
                    x={member.x}
                    y={member.y - 20}
                    textAnchor="middle"
                    className="member-name"
                    fontSize="16"
                    fontWeight="bold"
                    fill="#1a1a1a"
                  >
                    {member.name}
                  </text>

                  {/* Spouse in brackets */}
                  {member.spouseName && (
                    <text
                      x={member.x}
                      y={member.y}
                      textAnchor="middle"
                      fontSize="14"
                      fill="#c8102e"
                      fontStyle="italic"
                    >
                      [ ♥ {member.spouseName} ]
                    </text>
                  )}

                  {/* Birth year */}
                  <text
                    x={member.x}
                    y={member.y + 20}
                    textAnchor="middle"
                    fontSize="12"
                    fill="#666"
                  >
                    b. {member.birthYear}
                  </text>

                  {/* Location */}
                  <text
                    x={member.x}
                    y={member.y + 40}
                    textAnchor="middle"
                    fontSize="11"
                    fill="#003893"
                  >
                    📍 {member.location}
                  </text>
                </g>
              );
            })}
          </g>

          {/* Shadow filter */}
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="2" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.2" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* Selected member details panel */}
        {selectedMember && (
          <div className="member-details-panel">
            {(() => {
              const member = getMemberById(selectedMember);
              if (!member) return null;

              return (
                <>
                  <h3>{member.name}</h3>
                  <div className="detail-grid">
                    {member.spouseName && (
                      <div className="detail-item">
                        <Heart size={16} />
                        <span>
                          Married to: <strong>{member.spouseName}</strong>
                        </span>
                      </div>
                    )}
                    {member.occupation && (
                      <div className="detail-item">
                        <Briefcase size={16} />
                        <span>{member.occupation}</span>
                      </div>
                    )}
                    <div className="detail-item">
                      <Home size={16} />
                      <span>{member.location}</span>
                    </div>
                    <div className="detail-item">
                      <Calendar size={16} />
                      <span>Born: {member.birthYear}</span>
                    </div>
                    {member.children && (
                      <div className="detail-item">
                        <Users size={16} />
                        <span>{member.children.length} children</span>
                      </div>
                    )}
                  </div>
                  <button
                    className="close-details"
                    onClick={() => setSelectedMember(null)}
                  >
                    Close Details
                  </button>
                </>
              );
            })()}
          </div>
        )}
      </div>

      {/* Tree Legend */}
      <div className="tree-legend">
        <h3>Family Tree Guide</h3>
        <div className="legend-items">
          <div className="legend-item">
            <div
              className="legend-color"
              style={{ background: '#c8102e' }}
            ></div>
            <span>Generation Number</span>
          </div>
          <div className="legend-item">
            <span style={{ color: '#c8102e' }}>[ ♥ Name ]</span>
            <span>Spouse</span>
          </div>
          <div className="legend-item">
            <span>📍</span>
            <span>Current Location</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyTreePage;
