export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  deliverables: string[];
  typicalTimeline: string;
  accent: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Renovations' | 'Steel Fabrication' | 'Property Maintenance' | 'Plumbing & Electrical';
  location: string;
  description: string;
  scopeSummary: string;
  keyDeliverables: string[];
  duration: string;
  completionDate: string;
}

export interface SuburbArea {
  name: string;
  region: 'Johannesburg South' | 'Alberton' | 'Ekurhuleni';
  emergencyResponse: string;
}

export const COMPANY_INFO = {
  name: "YEPI Construction & Maintenance",
  legalName: "YEPI Construction & Maintenance (Pty) Ltd",
  tagline: "Build · Manage · Maintain",
  concept: "Industrial Precision Meets Premium Property Care",
  phone: "076 835 3490",
  formattedPhone: "+27 76 835 3490",
  telLink: "tel:0768353490",
  whatsappNumber: "27768353490",
  whatsappBaseUrl: "https://wa.me/27768353490",
  serviceAreasSummary: "Johannesburg South · Alberton · Ekurhuleni",
  operatingHours: "Monday – Saturday: 07:00 – 17:30",
  emergencyAvailability: "24/7 Emergency Call-outs for urgent plumbing and electrical failures",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "construction-renovations",
    title: "Construction & Renovations",
    shortDescription: "From property improvements to larger construction projects, explore solutions tailored to your building needs.",
    fullDescription: "Comprehensive building works, internal and external remodeling, structural alterations, wall removals, extensions, and modern interior renovations for residential and light commercial properties.",
    category: "Building & Remodeling",
    deliverables: [
      "Residential extensions and structural remodeling",
      "Kitchen and bathroom complete overhauls",
      "Brickwork, plastering, screeding, and foundations",
      "Patios, braai rooms, and boundary walls"
    ],
    typicalTimeline: "1 to 6 weeks depending on project scope",
    accent: "#D9A441"
  },
  {
    id: "project-management",
    title: "Construction & Project Management",
    shortDescription: "Bring planning, budgeting and site coordination together through a more organized project process.",
    fullDescription: "End-to-end site oversight that eliminates the chaos of managing multiple independent sub-contractors. We coordinate material procurement, trade scheduling, quality assurance, and site safety.",
    category: "Management & Coordination",
    deliverables: [
      "Milestone-based scheduling and site supervision",
      "Material quality verification and cost control",
      "Coordination of specialized trades (electrical, plumbing, masonry)",
      "Transparent progress updates and final snagging walkthrough"
    ],
    typicalTimeline: "Duration of the building contract",
    accent: "#25292D"
  },
  {
    id: "property-maintenance",
    title: "Property Maintenance",
    shortDescription: "Manage ongoing property upkeep with one point of contact for a range of maintenance requirements.",
    fullDescription: "Proactive and reactive maintenance services for homeowners, landlords, estate managers, and commercial premises. Prevent minor property defects from escalating into costly repairs.",
    category: "Care & Upkeep",
    deliverables: [
      "Roof leak repairs, gutter maintenance, and waterproofing",
      "Interior & exterior painting and damp proofing",
      "Fascia boards, paving repairs, and tile restoration",
      "Routine rental turnover property refresh"
    ],
    typicalTimeline: "1 to 3 days for standard maintenance runs",
    accent: "#D9A441"
  },
  {
    id: "plumbing",
    title: "Plumbing",
    shortDescription: "Get assistance with leaks, geysers, blockages and other plumbing requirements.",
    fullDescription: "Dependable sanitary and water supply solutions including burst pipe emergencies, geyser replacements, pipe rerouting, drain unclogging, valve maintenance, and bathroom fixture installation.",
    category: "Sanitary & Water",
    deliverables: [
      "Burst pipes, leak detection, and pressure valve replacement",
      "Standard and solar geyser repairs and installation",
      "Drain unblocking and waste pipe repairs",
      "New tapware, shower systems, and toilet installations"
    ],
    typicalTimeline: "Same-day emergency response; 1-2 days for full installs",
    accent: "#1E3A8A"
  },
  {
    id: "electrical",
    title: "Electrical",
    shortDescription: "Explore electrical fault-finding, wiring and related maintenance services.",
    fullDescription: "Safe and compliant electrical maintenance for homes and commercial facilities. We troubleshoot persistent tripping, rewire faulty circuits, install distribution boards, and fit modern lighting.",
    category: "Power & Systems",
    deliverables: [
      "Fault finding and circuit breaker tripping diagnosis",
      "Distribution board (DB) upgrades and neat rewiring",
      "Indoor and outdoor security lighting and power points",
      "Backup power and inverter changeover switch wiring"
    ],
    typicalTimeline: "Same-day troubleshooting; 1-3 days for DB overhauls",
    accent: "#B45309"
  },
  {
    id: "welding-steel",
    title: "Welding & Steel Fabrication",
    shortDescription: "Explore gates, steel fabrication, structural repairs and custom braai stands.",
    fullDescription: "Custom metalwork crafted with structural precision. From heavy-duty South African braai stands designed for longevity to secure driveway gates, burglar bars, steel pergolas, and reinforcement repairs.",
    category: "Fabrication & Metalwork",
    deliverables: [
      "Custom freestanding and built-in braai stands with adjustable grills",
      "Driveway sliding/swing gates and pedestrian security gates",
      "Burglar bars, steel window fixtures, and perimeter spikes",
      "Structural steel beam reinforcement and onsite welding repairs"
    ],
    typicalTimeline: "3 to 10 working days for custom fabrication",
    accent: "#D9A441"
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Contemporary Kitchen & Living Space Renovation",
    category: "Renovations",
    location: "Glenvista, Johannesburg South",
    description: "Complete internal renovation transforming an outdated 1990s layout into an open-plan kitchen and dining hall with custom quartz countertops, recessed LED ceiling work, and porcelain tiling.",
    scopeSummary: "Full internal strip-out, structural lintel installation, plumbing relocation, modern tiling, and custom kitchen joinery coordination.",
    keyDeliverables: [
      "Non-load bearing wall removal for open-plan flow",
      "Full plumbing rerouting for center island sink",
      "Heavy-duty porcelain floor tiling (75m²)",
      "Screeding and pristine plaster finish"
    ],
    duration: "3 Weeks",
    completionDate: "Recent Project"
  },
  {
    id: "proj-2",
    title: "Heavy-Duty Custom Braai Stand & Steel Pergola",
    category: "Steel Fabrication",
    location: "New Redruth, Alberton",
    description: "Bespoke 4mm heavy-gauge steel built-in braai unit with crank-wheel height-adjustable stainless steel grill, ember maker, warming drawers, and integrated timber storage pergola.",
    scopeSummary: "Custom CAD detailing, laser-cut steel framing, MIG welding, heat-resistant powder coating, and on-site patio structural anchoring.",
    keyDeliverables: [
      "4mm mild steel main chamber with heat shields",
      "Smooth crank-wheel stainless steel grilling rack",
      "Precision MIG welded joints and matte black finish",
      "Weather-treated patio support bracket fabrication"
    ],
    duration: "8 Days",
    completionDate: "Recent Project"
  },
  {
    id: "proj-3",
    title: "Boundary Security Wall & Motorized Steel Gate",
    category: "Renovations",
    location: "Meyersdal, Alberton",
    description: "Construction of a 38-meter plastered brick perimeter wall with damp-proof coursing, paired with a custom-fabricated horizontal slat steel sliding gate and automation rack.",
    scopeSummary: "Trench foundation excavation, reinforced concrete footing, bricklaying, smooth plaster finish, electrical power conduit, and gate installation.",
    keyDeliverables: [
      "Reinforced concrete strip foundations",
      "Double-brick cavity masonry with clean coping",
      "Custom anti-lift steel sliding gate (5m opening)",
      "Heavy-duty track installation and motor conduit"
    ],
    duration: "2.5 Weeks",
    completionDate: "Recent Project"
  },
  {
    id: "proj-4",
    title: "Geyser Overhaul & High-Pressure Plumbing Reroute",
    category: "Plumbing & Electrical",
    location: "Mondeor, Johannesburg South",
    description: "Emergency replacement of a ruptured 200L ceiling geyser with new energy-efficient pressure control valves, drip tray overflow piping, and upgraded copper reticulation.",
    scopeSummary: "Emergency water isolation, ceiling reinforcement, safe removal of burst geyser, installation of SABS-approved 200L geyser, and vacuum breaker overhaul.",
    keyDeliverables: [
      "Rapid water containment and structural inspection",
      "Class 600kPa pressure control valve replacement",
      "Neat copper pipe brazing and drip tray venting",
      "Electrical isolator switch certification"
    ],
    duration: "Same-Day Handover",
    completionDate: "Recent Project"
  },
  {
    id: "proj-5",
    title: "Residential DB Board Upgrade & Circuit Segregation",
    category: "Plumbing & Electrical",
    location: "Brackendowns, Alberton",
    description: "Complete renewal of an aged electrical distribution board experiencing persistent earth leakage faults, introducing dedicated breaker circuits for heavy kitchen appliances.",
    scopeSummary: "System fault-finding, installation of a modern 24-way modular enclosure, surge protection unit, and clean circuit identification labeling.",
    keyDeliverables: [
      "Systematic circuit insulation resistance testing",
      "Modern DIN-rail distribution board install",
      "Integrated Class II lightning/surge arrestor",
      "Clear circuit directory and test certificate"
    ],
    duration: "1 Day",
    completionDate: "Recent Project"
  },
  {
    id: "proj-6",
    title: "Multi-Unit Property Waterproofing & Exterior Painting",
    category: "Property Maintenance",
    location: "Turffontein, Johannesburg South",
    description: "Comprehensive maintenance on a multi-tenant residential property featuring parapet wall acrylic waterproofing, hairline crack repair, and dual-coat weather-shield paint application.",
    scopeSummary: "High-pressure wash, crack chase-out and flexible elastomeric filling, membrane-reinforced parapet sealing, and exterior color-matched coating.",
    keyDeliverables: [
      "Parapet wall fiber-mesh membrane waterproofing",
      "Gutter realignment and downpipe clearing",
      "Substrate sealing and premium textured topcoat",
      "Window frame silicone weather-sealing"
    ],
    duration: "10 Days",
    completionDate: "Recent Project"
  }
];

export const SUBURB_AREAS: SuburbArea[] = [
  { name: "Alberton Central", region: "Alberton", emergencyResponse: "Priority 30-45m" },
  { name: "New Redruth", region: "Alberton", emergencyResponse: "Priority 30-45m" },
  { name: "Meyersdal", region: "Alberton", emergencyResponse: "Priority 30-45m" },
  { name: "Brackendowns", region: "Alberton", emergencyResponse: "Priority 30-45m" },
  { name: "Alberante", region: "Alberton", emergencyResponse: "Priority 30-45m" },
  { name: "Randhart", region: "Alberton", emergencyResponse: "Priority 30-45m" },
  { name: "Glenvista", region: "Johannesburg South", emergencyResponse: "Priority 30-45m" },
  { name: "Mondeor", region: "Johannesburg South", emergencyResponse: "Priority 30-45m" },
  { name: "Mulbarton", region: "Johannesburg South", emergencyResponse: "Priority 30-45m" },
  { name: "Bassonia", region: "Johannesburg South", emergencyResponse: "Priority 30-45m" },
  { name: "Oakdene", region: "Johannesburg South", emergencyResponse: "Priority 30-45m" },
  { name: "Rosettenville", region: "Johannesburg South", emergencyResponse: "Priority 30-45m" },
  { name: "Turffontein", region: "Johannesburg South", emergencyResponse: "Priority 30-45m" },
  { name: "Meredale", region: "Johannesburg South", emergencyResponse: "Priority 30-45m" },
  { name: "Bedfordview", region: "Ekurhuleni", emergencyResponse: "Scheduled / Priority" },
  { name: "Germiston", region: "Ekurhuleni", emergencyResponse: "Scheduled / Priority" }
];

export const ESTIMATOR_CATEGORIES = [
  {
    id: "renovation",
    label: "Home / Room Renovation",
    description: "Kitchens, bathrooms, floor tiling, wall alterations & plastering",
    baseRateSmall: 18000,
    baseRateMedium: 55000,
    baseRateLarge: 140000,
    unit: "typical scope"
  },
  {
    id: "extension",
    label: "Brickwork & Structural Extension",
    description: "Room additions, patio enclosures, boundary walls & structural work",
    baseRateSmall: 35000,
    baseRateMedium: 95000,
    baseRateLarge: 260000,
    unit: "approx. footprint"
  },
  {
    id: "maintenance",
    label: "Property Maintenance & Painting",
    description: "Roof leak repairs, exterior/interior repainting & crack remediation",
    baseRateSmall: 6500,
    baseRateMedium: 19500,
    baseRateLarge: 48000,
    unit: "surface coverage"
  },
  {
    id: "plumbing",
    label: "Plumbing & Geyser Works",
    description: "Geyser replacements, pipe rerouting, leak repairs & sanitary fittings",
    baseRateSmall: 3200,
    baseRateMedium: 11500,
    baseRateLarge: 29000,
    unit: "installation scope"
  },
  {
    id: "electrical",
    label: "Electrical Faults & DB Upgrades",
    description: "DB board rewiring, circuit troubleshooting, lighting & breaker protection",
    baseRateSmall: 2800,
    baseRateMedium: 8500,
    baseRateLarge: 22000,
    unit: "system size"
  },
  {
    id: "welding",
    label: "Welding & Steel Fabrication",
    description: "Custom braai stands, driveway gates, security bars & steel structures",
    baseRateSmall: 4500,
    baseRateMedium: 14500,
    baseRateLarge: 38000,
    unit: "fabrication spec"
  }
];
