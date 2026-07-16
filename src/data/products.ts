export interface Product {
  id: string;
  name: string;
  formula: string;
  cas: string;
  category: "chemicals" | "metal-powders" | "metal-ingots";
  form: string;
  subtitle: string;
  overview: string;
  technicalSpecs: { label: string; value: string }[];
  keyApplications: string[];
  packaging: string;
  purityGrades: string[];
  industries: string[];
  imageUrl: string;
}

export const productCategories = [
  { id: "metal-ingots", name: "Metal Ingots" },
  { id: "metal-powders", name: "Metal Powders" },
  { id: "chemicals", name: "Chemicals" },
];

export const products: Product[] = [

  // ─── METAL INGOTS ────────────────────────────────────────────────────────────

  // PAGE 3
  {
    id: "zinc-ingot-primary",
    name: "Zinc Ingots — Primary (SHG)",
    formula: "Zn",
    cas: "CAS 7440-66-6",
    category: "metal-ingots",
    form: "IS 209 / LME Standard",
    subtitle: "CAS 7440-66-6 | Purity: ≥99.995%",
    imageUrl: "/product/p_zinc_ingot_primary.jpg",
    overview:
      "Shree Gopala Sanwaria Chemicals supplies Special High Grade (SHG) Primary Zinc Ingots conforming to IS 209 and LME specifications. Sourced from certified primary smelters, these ingots deliver exceptional purity for critical galvanizing, die-casting, and alloying applications across India and export markets.",
    technicalSpecs: [
      { label: "Zn Content",   value: "≥99.995%" },
      { label: "Lead (Pb)",    value: "≤0.003%" },
      { label: "Iron (Fe)",    value: "≤0.002%" },
      { label: "Cadmium (Cd)", value: "≤0.001%" },
      { label: "Copper (Cu)",  value: "≤0.001%" },
      { label: "Weight/ingot", value: "18 – 25 kg" },
      { label: "Standard",     value: "IS 209 / LME" },
    ],
    keyApplications: [
      "Hot-dip galvanizing of steel structures, pipes & sheets",
      "Die-casting of automotive & electrical components",
      "Zinc alloy production (brass, bronze, zamak)",
      "Battery anode & zinc-air cell manufacturing",
      "Chemical manufacturing feedstock (ZnCl2, ZnO)",
      "Anti-corrosion primers and protective coatings",
      "Export supply to galvanizing plants in Middle East & SE Asia",
      "Zinc salt & chemical intermediate manufacturing",
    ],
    purityGrades: ["SHG Grade (≥99.995%)", "IS 209 / LME Standard"],
    industries: ["Galvanizing", "Die-Casting", "Automotive", "Chemical Industry", "Battery Manufacturing"],
    packaging: "25 kg ingots in 1 MT strapped lifts  20-ft / 40-ft containers  Min order: 5 MT",
  },

  // PAGE 4
  {
    id: "zinc-ingot-secondary",
    name: "Zinc Ingots — Secondary (Remelt)",
    formula: "Zn",
    cas: "CAS 7440-66-6",
    category: "metal-ingots",
    form: "Secondary / Remelt Grade",
    subtitle: "CAS 7440-66-6 | Purity: 98.0 – 99.5%",
    imageUrl: "/product/p_zinc_ingot_secondary.jpg",
    overview:
      "Our Secondary / Remelt Zinc Ingots are produced from recycled zinc scrap through a controlled remelt and refining process. They offer a cost-effective alternative to primary zinc for die-casting, galvanizing additions, and brass production where ultra-high purity is not required.",
    technicalSpecs: [
      { label: "Zn Content",      value: "98.0 – 99.5%" },
      { label: "Lead (Pb)",       value: "≤0.5%" },
      { label: "Iron (Fe)",       value: "≤0.05%" },
      { label: "Aluminium (Al)",  value: "≤0.05%" },
      { label: "Weight/ingot",    value: "18 – 25 kg" },
      { label: "Grade",           value: "Secondary / Remelt" },
      { label: "Origin",          value: "Recycled zinc scrap" },
    ],
    keyApplications: [
      "Secondary die-casting for non-critical components",
      "Galvanizing bath kettle additions",
      "Brass & bronze alloy production",
      "Zinc-based sacrificial anode manufacture",
      "Foundry alloying and metallurgical use",
      "Cost-optimised industrial applications",
      "Remelt & refinery operations",
      "Zinc dross and skimmings processing",
    ],
    purityGrades: ["Secondary Grade: 98.0 – 99.5%", "Recycled zinc scrap origin"],
    industries: ["Galvanizing", "Die-Casting", "Alloy Manufacturing", "Chemical Industry"],
    packaging: "25 kg ingots in ~1 MT lifts  Flexible lots from 5 MT  FCL/LCL shipping available",
  },

  // PAGE 5
  {
    id: "aluminium-ingot-secondary",
    name: "Aluminium Ingots (Secondary)",
    formula: "Al",
    cas: "CAS 7429-90-5",
    category: "metal-ingots",
    form: "LM2, LM4, LM6, ADC-12",
    subtitle: "CAS 7429-90-5 | Grades: LM2, LM4, LM6, ADC-12",
    imageUrl: "/product/p_aluminium_ingot_secondary.jpg",
    overview:
      "We supply secondary Aluminium Ingots (Al ≥98%) conforming to IS 617 and international alloy specifications (LM-series, ADC-12). Our ingots are widely used by die-casters, foundries, and re-rollers across India, offering consistent chemistry and reliable supply.",
    technicalSpecs: [
      { label: "Al Content (Secondary)", value: "≥98.0%" },
      { label: "Si content",             value: "Up to 12% (alloy grades)" },
      { label: "Fe",                      value: "≤0.8%" },
      { label: "Grades",                  value: "LM2, LM4, LM6, ADC-12" },
      { label: "Weight/ingot",            value: "18 – 25 kg" },
      { label: "Standard",                value: "IS 617 / BIS" },
      { label: "Origin",                  value: "Secondary / Remelt" },
    ],
    keyApplications: [
      "Pressure die-casting (automotive parts)",
      "Gravity & sand casting for engineering components",
      "Re-rolling into sheets, foils, and strips",
      "Electrical conductor alloy manufacturing",
      "Construction and architectural extrusions",
      "Heat exchanger and cookware manufacture",
      "Automotive & two-wheeler alloy wheels",
      "Export supply to foundries in South Asia",
    ],
    purityGrades: ["LM2 Grade", "LM4 Grade", "LM6 Grade", "ADC-12 Grade"],
    industries: ["Die-Casting", "Automotive", "Electrical", "Construction", "Industrial Manufacturing"],
    packaging: "7–8 kg T-bar ingots in 1 MT bundled lifts  FCL/LCL shipments  Min order: 5 MT",
  },

  // PAGE 6
  {
    id: "brass-ingot-primary",
    name: "Brass Ingots — Primary",
    formula: "Cu+Zn",
    cas: "IS 319 / IS 291",
    category: "metal-ingots",
    form: "LG2 / LG3 / IS 319 Grade",
    subtitle: "Cu: 58–63% | Zn: Balance | IS 319 / IS 291",
    imageUrl: "/product/p_brass_ingot_primary.jpg",
    overview:
      "Shree Gopala Sanwaria Chemicals supplies Primary Brass Ingots conforming to IS 319 and IS 291 specifications. With copper content of 58–63% and balance zinc, these ingots offer excellent machinability, corrosion resistance, and castability for precision engineering and decorative applications.",
    technicalSpecs: [
      { label: "Cu Content",   value: "58 – 63%" },
      { label: "Zn Content",   value: "Balance (37–42%)" },
      { label: "Pb",           value: "≤3.5%" },
      { label: "Fe",           value: "≤0.30%" },
      { label: "Sn",           value: "≤0.50%" },
      { label: "Grade",        value: "LG2 / LG3 / IS 319" },
      { label: "Weight/ingot", value: "18 – 25 kg" },
    ],
    keyApplications: [
      "Plumbing fittings, valves & taps (IS 319 grade)",
      "Electrical connectors, terminals & switchgear parts",
      "Precision turned components & fasteners",
      "Architectural & decorative hardware",
      "Bearing bushes, thrust washers & bearing cages",
      "Hydraulic & pneumatic valve bodies",
      "Musical instruments & medallions",
      "Export quality sanitary fittings",
    ],
    purityGrades: ["LG2 Grade", "LG3 Grade", "IS 319 Grade"],
    industries: ["Electrical", "Precision Engineering", "Construction", "Plumbing", "Automotive"],
    packaging: "6–8 kg ingots in ~1 MT bundled lifts  Min order: 3 MT  FCL/LCL available",
  },

  // PAGE 7
  {
    id: "brass-ingot-secondary",
    name: "Brass Ingots — Secondary",
    formula: "Cu+Zn",
    cas: "Recycled Grade",
    category: "metal-ingots",
    form: "Secondary / Remelt Grade",
    subtitle: "Cu: 55–62% | Zn: 35–42% | Recycled Grade",
    imageUrl: "/product/p_brass_ingot_secondary.jpg",
    overview:
      "Our Secondary Brass Ingots are produced from high-grade recycled brass scrap through controlled melting and refining. They offer a cost-effective solution for die-casting and non-critical applications where primary-grade chemistry is not essential.",
    technicalSpecs: [
      { label: "Cu Content",   value: "55 – 62%" },
      { label: "Zn Content",   value: "35 – 42%" },
      { label: "Pb",           value: "≤4.0%" },
      { label: "Fe",           value: "≤0.50%" },
      { label: "Grade",        value: "Secondary / Remelt" },
      { label: "Origin",       value: "Recycled brass scrap" },
      { label: "Weight/ingot", value: "18 – 25 kg" },
    ],
    keyApplications: [
      "Die-casting of non-critical brass components",
      "Decorative castings & gift articles",
      "Furniture fittings & hardware",
      "Automotive brass parts (non-precision)",
      "Industrial casting & foundry use",
      "Lamp bases and decorative metal items",
      "Cost-optimised plumbing accessories",
      "Secondary remelt and refinery operations",
    ],
    purityGrades: ["Secondary / Remelt Grade", "Cu: 55–62%", "Zn: 35–42%"],
    industries: ["Die-Casting", "Decorative Hardware", "Construction", "Plumbing", "Industrial Manufacturing"],
    packaging: "6–8 kg ingots in ~1 MT bundled lifts  Min order: 3 MT  Flexible lot sizes",
  },

  // PAGE 8
  {
    id: "copper-ingot-secondary",
    name: "Copper Ingots — Secondary",
    formula: "Cu",
    cas: "CAS 7440-50-8",
    category: "metal-ingots",
    form: "Secondary / Remelt Grade",
    subtitle: "CAS 7440-50-8 | Cu ≥98.5% | Recycled Grade",
    imageUrl: "/product/p_copper_ingot_secondary.jpg",
    overview:
      "SGSC supplies Secondary Copper Ingots (Cu ≥98.5%) produced from high-purity copper scrap and cathode remelt. Our copper ingots are widely used by wire drawers, alloy manufacturers, and electrical equipment producers, offering reliable chemistry and consistent physical properties at competitive pricing.",
    technicalSpecs: [
      { label: "Cu Content",   value: "≥98.5%" },
      { label: "Pb",           value: "≤0.05%" },
      { label: "Fe",           value: "≤0.05%" },
      { label: "Sn",           value: "≤0.05%" },
      { label: "Grade",        value: "Secondary / Remelt" },
      { label: "Weight/ingot", value: "18 – 25 kg" },
      { label: "Origin",       value: "Copper scrap / cathode remelt" },
    ],
    keyApplications: [
      "Wire drawing & electrical cable manufacturing",
      "Electrical windings, motors & transformers",
      "Plumbing pipes, fittings & heat exchangers",
      "Copper alloy & brass production",
      "Printed circuit board & electronics manufacturing",
      "Renewable energy — solar & EV applications",
      "Industrial machinery & equipment",
      "Architectural copper cladding & roofing",
    ],
    purityGrades: ["Secondary Grade: Cu ≥98.5%", "Copper scrap / cathode remelt origin"],
    industries: ["Electrical", "Plumbing", "Alloy Manufacturing", "Electronics", "Renewable Energy"],
    packaging: "5–10 kg ingots in ~1 MT bundled lifts  Min order: 3 MT  FCL/LCL available",
  },

  // ─── METAL POWDERS ───────────────────────────────────────────────────────────

  // PAGE 10
  {
    id: "zinc-dust",
    name: "Zinc Powder (Zinc Dust)",
    formula: "Zn",
    cas: "CAS 7440-66-6",
    category: "metal-powders",
    form: "All Mesh: 100, 200, 325, 500",
    subtitle: "CAS 7440-66-6 | All mesh: 100, 200, 325, 500",
    imageUrl: "/product/p_zinc_dust.jpg",
    overview:
      "SGSC supplies Zinc Powder / Zinc Dust in all standard mesh sizes — 100, 200, 325, and 500 mesh — in Primary (≥99.9% Zn) and Secondary grades. Secondary grade: Metallic Zn ≥91%, Total Zn ≥95%. Used across paints, chemicals, pharmaceuticals, and hydrometallurgical processes.",
    technicalSpecs: [
      { label: "Primary grade (Metallic Zn)", value: "≥99.9%" },
      { label: "Secondary — Metallic Zn",     value: "≥91.0%" },
      { label: "Secondary — Total Zn",         value: "≥95.0%" },
      { label: "Available mesh",               value: "100 / 200 / 325 / 500" },
      { label: "Particle size",                value: "45 µm – 150 µm" },
      { label: "Apparent density",             value: "2.5 – 3.5 g/cc" },
      { label: "Moisture",                     value: "≤0.05%" },
    ],
    keyApplications: [
      "Zinc-rich anti-corrosion paints & epoxy primers",
      "Chemical synthesis as a reducing agent",
      "Pharmaceutical & nutritional intermediates",
      "Galvanic / sacrificial cathodic protection",
      "Cementation process in hydrometallurgy",
      "Pyrotechnics and specialty chemical reactions",
      "Electronic & automotive coating formulations",
      "Dental cement and healthcare applications",
    ],
    purityGrades: ["Primary Grade: ≥99.9% Metallic Zn", "Secondary — Metallic Zn ≥91%", "Secondary — Total Zn ≥95%"],
    industries: ["Galvanizing", "Battery Manufacturing", "Paints & Coatings", "Chemical Industry", "Mining", "Pharmaceuticals"],
    packaging: "25 kg HDPE bags with inner PE liner  50 kg steel drums  Palletised  Min order: 500 kg",
  },

  // ─── CHEMICALS ──────────────────────────────────────────────────────────────

  // PAGE 12
  {
    id: "zinc-chloride",
    name: "Zinc Chloride",
    formula: "ZnCl₂",
    cas: "CAS 7646-85-7",
    category: "chemicals",
    form: "White Solid / 50% Liquid",
    subtitle: "CAS 7646-85-7 | Formula: ZnCl₂",
    imageUrl: "/product/p_zinc_chloride.jpg",
    overview:
      "Zinc Chloride is a white deliquescent solid manufactured by dissolving zinc metal or zinc oxide in hydrochloric acid. SGSC produces high-purity anhydrous and liquid grades used as a flux in galvanizing, a catalyst in organic synthesis, and as a wood preservative.",
    technicalSpecs: [
      { label: "ZnCl₂ Assay",  value: "≥98.0% (anhydrous)" },
      { label: "Zn content",   value: "≥47.0%" },
      { label: "Iron (Fe)",    value: "≤0.001%" },
      { label: "Lead (Pb)",    value: "≤0.001%" },
      { label: "Sulphate",     value: "≤0.01%" },
      { label: "pH (5% soln)", value: "4.0 – 6.0" },
      { label: "Form",         value: "White solid / 50% liquid" },
    ],
    keyApplications: [
      "Galvanizing flux (prevents oxide formation on steel)",
      "Textile processing, sizing & mercerizing",
      "Paper & pulp manufacturing auxiliary",
      "Catalyst in Friedel-Crafts organic synthesis",
      "Wood preservation & fire retardant treatment",
      "Dry cell / Leclanche battery electrolyte",
      "Soldering flux for electronics & PCB assembly",
      "Water purification and disinfection agent",
    ],
    purityGrades: ["Anhydrous Grade (≥98.0%)", "50% Liquid Solution", "Industrial Grade"],
    industries: ["Galvanizing", "Chemical Synthesis", "Textile", "Battery Manufacturing", "Wood Preservation", "Electronics"],
    packaging: "50 kg HDPE bags  250 kg drums  IBC tankers (liquid grade)  Bulk on request",
  },

  // PAGE 13
  {
    id: "zinc-sulphate",
    name: "Zinc Sulphate",
    formula: "ZnSO₄",
    cas: "CAS 7446-20-0 (Mono) | 7446-19-7 (Hepta)",
    category: "chemicals",
    form: "White Crystalline Powder",
    subtitle: "CAS 7446-20-0 (Mono) | 7446-19-7 (Hepta)",
    imageUrl: "/product/p_zinc_sulphate.jpg",
    overview:
      "SGSC manufactures Zinc Sulphate Monohydrate (ZnSO₄·H₂O, Zn ≥33%) and Heptahydrate (ZnSO₄·7H₂O, Zn ≥21%). The world's most consumed zinc salt — essential in agriculture, rayon manufacturing, and electroplating.",
    technicalSpecs: [
      { label: "Monohydrate (ZnSO₄·H₂O) — Zn", value: "≥33.0%" },
      { label: "Heptahydrate (ZnSO₄·7H₂O) — Zn", value: "≥21.0%" },
      { label: "Assay",        value: "≥98.0%" },
      { label: "Iron (Fe)",    value: "≤0.002%" },
      { label: "Lead (Pb)",    value: "≤0.001%" },
      { label: "Heavy metals", value: "≤0.001%" },
      { label: "Appearance",   value: "White crystalline powder" },
    ],
    keyApplications: [
      "Zinc micronutrient fertiliser — soil and foliar spray",
      "Animal & poultry feed supplement",
      "Rayon / viscose fibre coagulation bath",
      "Electroplating & galvanising bath additive",
      "Pharmaceutical zinc supplement formulations",
      "Textile dyeing & printing mordant",
      "Micronutrient in animal nutrition (cattle, sheep)",
      "Zinc supplement in aquaculture & fish feeds",
    ],
    purityGrades: ["Monohydrate Grade (ZnSO₄·H₂O)", "Heptahydrate Grade (ZnSO₄·7H₂O)"],
    industries: ["Agriculture", "Animal Feed", "Pharmaceuticals", "Water Treatment", "Electroplating", "Textile"],
    packaging: "50 kg HDPE bags with inner PE liner  500 kg / 1000 kg jumbo bags  Min order: 1 MT",
  },

  // PAGE 14
  {
    id: "zinc-oxide",
    name: "Zinc Oxide",
    formula: "ZnO",
    cas: "CAS 1314-13-2",
    category: "chemicals",
    form: "White Powder",
    subtitle: "CAS 1314-13-2 | Formula: ZnO",
    imageUrl: "/product/p_zinc_oxide.jpg",
    overview:
      "Zinc Oxide is a versatile white powder manufactured via the French (indirect) process. SGSC's ZnO is used across rubber vulcanization, ceramics, paints, cosmetics, and pharmaceuticals. Available in standard and high-surface-area grades per specification.",
    technicalSpecs: [
      { label: "ZnO Content",     value: "≥99.5%" },
      { label: "Lead (Pb)",       value: "≤0.001%" },
      { label: "Cadmium (Cd)",    value: "≤0.001%" },
      { label: "Iron (Fe)",       value: "≤0.003%" },
      { label: "Loss on ignition", value: "≤0.5%" },
      { label: "Oil absorption",  value: "12 – 18 g/100g" },
      { label: "Process",         value: "French / Direct process" },
    ],
    keyApplications: [
      "Rubber vulcanization activator (accelerates cure)",
      "Paints & coatings as a UV stabiliser",
      "Ceramics, glazes & glass manufacturing",
      "Cosmetics & sunscreen (UV filter / SPF boost)",
      "Pharmaceutical & medicinal topical creams",
      "Animal feed micronutrient (EU E6 additive)",
      "Electrical varistor (surge protection) components",
      "Concrete & cement additive / accelerator",
    ],
    purityGrades: ["Standard Grade (ZnO ≥99.5%)", "High Surface Area Grade", "French / Direct Process"],
    industries: ["Rubber & Tyre", "Ceramics & Glass", "Pharmaceuticals", "Paints & Coatings", "Agriculture", "Construction"],
    packaging: "25 kg multi-wall paper bags  50 kg HDPE bags  1 MT bulk bags  Min order: 500 kg",
  },

  // PAGE 19
  {
    id: "zinc-flux",
    name: "Zinc Flux — Powder & Liquid",
    formula: "ZnCl₂·2NH₄Cl",
    cas: "CAS 14639-97-5",
    category: "chemicals",
    form: "Dry Powder & Liquid Solution",
    subtitle: "CAS 14639-97-5 | Formula: ZnCl₂·2NH₄Cl",
    imageUrl: "/product/p_zinc_flux.jpg",
    overview:
      "Zinc Flux (Zinc Ammonium Chloride) is a critical pre-treatment chemical used in hot-dip galvanizing to remove residual oxides from steel surfaces, ensuring optimal adhesion of the zinc coating. SGSC supplies high-purity flux in dry powder form and ready-to-use liquid solution for galvanizing plants across India.",
    technicalSpecs: [
      { label: "Assay (ZnCl₂·2NH₄Cl)", value: "≥98.0%" },
      { label: "ZnCl₂ content",         value: "56 – 60%" },
      { label: "NH₄Cl content",         value: "40 – 44%" },
      { label: "Fe content",            value: "≤0.001%" },
      { label: "Available forms",       value: "Dry Powder & Liquid Solution" },
      { label: "pH (10% solution)",     value: "3.5 – 4.5" },
      { label: "Grade",                 value: "Galvanizing / Industrial" },
    ],
    keyApplications: [
      "Pre-flux bath in hot-dip galvanizing plants",
      "Flux additive in batch galvanizing operations",
      "Surface cleaning & oxide removal on steel",
      "Continuous galvanizing line flux treatment",
      "Zinc alloy coating pre-treatment",
      "Soldering flux in electronics & plumbing",
      "Metallurgical flux in foundry operations",
      "Tin plating and electroplating auxiliary",
    ],
    purityGrades: ["Galvanizing / Industrial Grade", "Dry Powder Form", "Liquid Solution Form"],
    industries: ["Galvanizing", "Steel Manufacturing", "Construction", "Wire Industry", "Electronics"],
    packaging: "50 kg HDPE bags  25 kg bags  1000 L IBC liquid solution  Min order: 500 kg",
  },

  // PAGE 20
  {
    id: "ammonium-chloride",
    name: "Ammonium Chloride",
    formula: "NH₄Cl",
    cas: "CAS 12125-02-9",
    category: "chemicals",
    form: "White Crystalline Powder",
    subtitle: "CAS 12125-02-9 | Formula: NH₄Cl",
    imageUrl: "/product/p_ammonium_chloride.jpg",
    overview:
      "Ammonium Chloride (Sal Ammoniac) is a white crystalline inorganic salt with diverse industrial applications. SGSC supplies technical and industrial grades used as a galvanizing flux component, nitrogen fertiliser, and chemical intermediate across multiple sectors including metals, agriculture, and pharmaceuticals.",
    technicalSpecs: [
      { label: "NH₄Cl Assay",    value: "≥99.5%" },
      { label: "Moisture",       value: "≤0.5%" },
      { label: "Fe",             value: "≤0.001%" },
      { label: "Heavy metals",   value: "≤0.001%" },
      { label: "Appearance",     value: "White crystalline powder" },
      { label: "pH (5% solution)", value: "4.5 – 5.5" },
      { label: "Grade",          value: "Technical / Industrial / Agriculture" },
    ],
    keyApplications: [
      "Galvanizing & tinning flux (key ingredient)",
      "Nitrogen source in NPK fertilisers & agriculture",
      "Electroplating bath additive",
      "Dry cell / Leclanche battery electrolyte",
      "Pharmaceutical & veterinary preparations",
      "Food additive (E510) in bread & yeast activation",
      "Textile dyeing & leather tanning auxiliary",
      "Fire extinguishing compound & safety matches",
    ],
    purityGrades: ["Technical Grade", "Industrial Grade", "Agriculture Grade"],
    industries: ["Agriculture", "Battery Manufacturing", "Metal Finishing", "Textile", "Pharmaceuticals", "Food Industry"],
    packaging: "50 kg HDPE bags  25 kg bags  500 kg jumbo bags  Min order: 500 kg",
  },

  // PAGE 21
  {
    id: "zinc-stearate",
    name: "Zinc Stearate",
    formula: "Zn(C₁₈H₃₅O₂)₂",
    cas: "CAS 557-05-1",
    category: "chemicals",
    form: "Fine White Powder",
    subtitle: "CAS 557-05-1 | Formula: Zn(C₁₈H₃₅O₂)₂",
    imageUrl: "/product/p_zinc_stearate.jpg",
    overview:
      "Zinc Stearate is a fine white powder — the zinc salt of stearic acid — widely used as a release agent, lubricant, and stabiliser. SGSC supplies high-purity Zinc Stearate for rubber, plastics, cosmetics, paints, and pharmaceutical applications, with consistent particle size and low heavy-metal content.",
    technicalSpecs: [
      { label: "Zn content",        value: "10.0 – 11.0%" },
      { label: "Free acid",         value: "≤0.5%" },
      { label: "Moisture",          value: "≤1.0%" },
      { label: "Melting point",     value: "118 – 125°C" },
      { label: "Appearance",        value: "Fine white powder" },
      { label: "Fineness (100 mesh)", value: "≥99%" },
      { label: "Grade",             value: "Rubber / Plastic / Cosmetic" },
    ],
    keyApplications: [
      "Rubber processing — activator & release agent",
      "PVC & plastic stabiliser (heat & light)",
      "Cosmetics — talcum powder & pressed powders",
      "Paint & coatings — flatting/matting agent",
      "Pharmaceutical tablet lubricant & coating aid",
      "Polyurethane foam processing & release",
      "Paper sizing & surface conditioning agent",
      "Construction — waterproofing & concrete release",
    ],
    purityGrades: ["Rubber Grade", "Plastic Grade", "Cosmetic Grade"],
    industries: ["Rubber & Plastics", "Cosmetics", "Paints & Coatings", "Pharmaceuticals", "Construction", "Paper"],
    packaging: "25 kg HDPE bags with PE liner  20 kg craft paper bags  Min order: 250 kg",
  },

  // PAGE 22
  {
    id: "zinc-active-oxide",
    name: "Zinc Active Oxide",
    formula: "ZnO*",
    cas: "CAS 1314-13-2",
    category: "chemicals",
    form: "Fine White Fluffy Powder",
    subtitle: "CAS 1314-13-2 | Active ZnO | High Surface Area",
    imageUrl: "/product/p_zinc_active_oxide.jpg",
    overview:
      "Zinc Active Oxide (Active ZnO) is a specially manufactured high-surface-area grade of zinc oxide produced via the wet chemical / French process. Its superior reactivity and surface area make it the preferred choice for rubber vulcanisation, premium paints, and pharmaceutical applications requiring fast dissolution and high bioavailability.",
    technicalSpecs: [
      { label: "ZnO Assay",      value: "≥99.7%" },
      { label: "BET Surface Area", value: "40 – 60 m²/g" },
      { label: "Pb content",     value: "≤0.001%" },
      { label: "Fe content",     value: "≤0.003%" },
      { label: "Moisture",       value: "≤0.3%" },
      { label: "Appearance",     value: "Fine white fluffy powder" },
      { label: "Grade",          value: "Active / French Process" },
    ],
    keyApplications: [
      "Premium rubber vulcanisation activator",
      "High-performance tyre compounding",
      "Specialty paints, UV-protective coatings",
      "Pharmaceutical ZnO creams & ointments",
      "Cosmetics — sunscreen & zinc supplements",
      "Ceramic glaze and specialty glass",
      "Adhesives, sealants & elastomers",
      "Electronics — varistors & piezoelectrics",
    ],
    purityGrades: ["Active / French Process Grade", "ZnO ≥99.7%", "BET Surface Area: 40–60 m²/g"],
    industries: ["Rubber & Tyre", "Pharmaceuticals", "Paints & Coatings", "Cosmetics", "Electronics", "Ceramics"],
    packaging: "25 kg HDPE bags with PE inner liner  50 kg paper bags  Min order: 250 kg",
  },

  // PAGE 15
  {
    id: "copper-sulphate",
    name: "Copper Sulphate",
    formula: "CuSO₄",
    cas: "CAS 7758-99-8",
    category: "chemicals",
    form: "Blue Crystals / Powder",
    subtitle: "CAS 7758-99-8 | Formula: CuSO₄·5H₂O",
    imageUrl: "/product/p_copper_sulphate.jpg",
    overview:
      "Copper Sulphate Pentahydrate (Blue Vitriol) is a striking blue crystalline solid with widespread applications in agriculture, electroplating, water treatment, and fungicide formulations. SGSC supplies both technical and agriculture-grade material.",
    technicalSpecs: [
      { label: "CuSO₄·5H₂O Assay", value: "≥98.0%" },
      { label: "Cu content",        value: "≥25.0%" },
      { label: "Iron (Fe)",         value: "≤0.005%" },
      { label: "Insolubles",        value: "≤0.05%" },
      { label: "pH (5% soln)",      value: "3.5 – 4.5" },
      { label: "Appearance",        value: "Blue crystals/powder" },
      { label: "Grade",             value: "Technical & Agriculture" },
    ],
    keyApplications: [
      "Agriculture — Bordeaux mixture & fungicide sprays",
      "Electroplating & copper refining bath additive",
      "Water treatment & algae / microbial control",
      "Veterinary medicine — footbaths for livestock",
      "Pigment, dye & printing ink manufacturing",
      "CCA wood preservation treatment",
      "Swimming pool & water body algae control",
      "Mineral supplement in animal & poultry feed",
    ],
    purityGrades: ["Technical Grade", "Agriculture Grade"],
    industries: ["Agriculture", "Electroplating", "Water Treatment", "Veterinary", "Paints & Coatings", "Animal Feed"],
    packaging: "50 kg HDPE bags  25 kg bags  250 kg drums  Min order: 500 kg",
  },

  // PAGE 16
  {
    id: "manganese-sulphate",
    name: "Manganese Sulphate",
    formula: "MnSO₄",
    cas: "CAS 10034-96-5",
    category: "chemicals",
    form: "Pale Pink Powder",
    subtitle: "CAS 10034-96-5 | Formula: MnSO₄·H₂O",
    imageUrl: "/product/p_manganese_sulphate.jpg",
    overview:
      "Manganese Sulphate Monohydrate is a pale pink crystalline powder used as a micronutrient fertiliser, animal feed additive, and in electrolytic manganese dioxide (EMD) production for batteries. SGSC supplies high-purity grades for agricultural and industrial use.",
    technicalSpecs: [
      { label: "MnSO₄·H₂O Assay", value: "≥98.0%" },
      { label: "Mn content",       value: "≥31.8%" },
      { label: "Iron (Fe)",        value: "≤0.003%" },
      { label: "Heavy metals",     value: "≤0.001%" },
      { label: "Appearance",       value: "Pale pink powder" },
      { label: "pH (5% soln)",     value: "4.5 – 6.5" },
      { label: "Grade",            value: "Technical & Agriculture" },
    ],
    keyApplications: [
      "Micronutrient fertiliser for Mn-deficient soils",
      "Animal & poultry feed supplement",
      "Electrolytic manganese dioxide (EMD) for batteries",
      "Ceramic glaze colourant",
      "Textile dyeing auxiliary",
      "Chemical catalyst and process intermediate",
      "Li-ion battery cathode material (NMC precursor)",
      "Boron-Manganese micronutrient blend formulations",
    ],
    purityGrades: ["Technical Grade", "Agriculture Grade"],
    industries: ["Agriculture", "Animal Feed", "Ceramics", "Textile", "Chemical Processing", "Battery Manufacturing"],
    packaging: "50 kg HDPE bags  25 kg bags  500 kg / 1000 kg jumbo bags  Min order: 500 kg",
  },

  // PAGE 17
  {
    id: "ferrous-sulphate",
    name: "Ferrous Sulphate (Iron Sulphate)",
    formula: "FeSO₄",
    cas: "CAS 7782-63-0",
    category: "chemicals",
    form: "Pale Green Crystals",
    subtitle: "CAS 7782-63-0 | Formula: FeSO₄·7H₂O",
    imageUrl: "/product/p_ferrous_sulphate.jpg",
    overview:
      "Ferrous Sulphate Heptahydrate (Green Vitriol) is a pale green crystalline solid produced as a by-product of industrial processes. Widely used in water treatment, cement colouring, plant nutrition, and as a reducing agent in chemical synthesis.",
    technicalSpecs: [
      { label: "FeSO₄·7H₂O Assay",  value: "≥98.0%" },
      { label: "Fe content",         value: "≥20.0%" },
      { label: "Free acid (H₂SO₄)", value: "≤0.3%" },
      { label: "Heavy metals",       value: "≤0.002%" },
      { label: "Appearance",         value: "Pale green crystals" },
      { label: "Grade",              value: "Technical & Agriculture" },
      { label: "Solubility",         value: "~26 g/100 ml at 20°C" },
    ],
    keyApplications: [
      "Water & effluent treatment (phosphate removal)",
      "Cement & concrete colouring agent",
      "Iron micronutrient for plants (chlorosis treatment)",
      "Reducing agent in organic & inorganic synthesis",
      "Haematite / iron oxide pigment production",
      "Dietary iron supplement formulations",
      "Soil pH correction (acidifying agent)",
      "Drinking water purification auxiliary",
    ],
    purityGrades: ["Technical Grade", "Agriculture Grade"],
    industries: ["Construction", "Chemical Processing", "Pharmaceuticals", "Water Treatment", "Agriculture"],
    packaging: "50 kg HDPE bags  25 kg bags  500 kg jumbo bags  Min order: 500 kg",
  },

  // PAGE 18
  {
    id: "magnesium-sulphate",
    name: "Magnesium Sulphate",
    formula: "MgSO₄",
    cas: "CAS 10034-99-8",
    category: "chemicals",
    form: "White Crystals / Powder",
    subtitle: "CAS 10034-99-8 | Formula: MgSO₄·7H₂O",
    imageUrl: "/product/p_magnesium_sulphate.jpg",
    overview:
      "Magnesium Sulphate Heptahydrate (Epsom Salt) is a white crystalline product used in agriculture as an Mg and S source, in the textile and paper industries, as a pharmaceutical laxative, and in bath salts. SGSC supplies technical and agricultural grades.",
    technicalSpecs: [
      { label: "MgSO₄·7H₂O Assay", value: "≥99.0%" },
      { label: "Mg content",        value: "≥9.8%" },
      { label: "Iron (Fe)",         value: "≤0.002%" },
      { label: "Heavy metals",      value: "≤0.001%" },
      { label: "Appearance",        value: "White crystals/powder" },
      { label: "Grade",             value: "Technical & Agriculture" },
      { label: "Solubility",        value: "~71 g/100 ml at 20°C" },
    ],
    keyApplications: [
      "Magnesium micronutrient fertiliser (soil & foliar)",
      "Pharmaceutical laxative & IV infusion",
      "Textile processing & fabric printing",
      "Paper & pulp manufacturing additive",
      "Bath salts, cosmetics & personal care",
      "Fireproofing & construction materials",
      "Concrete / cement admixture",
      "Swimming pool & water body pH stabiliser",
    ],
    purityGrades: ["Technical Grade", "Agriculture Grade"],
    industries: ["Pharmaceuticals", "Textile", "Paper & Pulp", "Cosmetics", "Construction", "Agriculture"],
    packaging: "50 kg HDPE bags  25 kg bags  1 MT bulk bags  IBC on request  Min order: 500 kg",
  },

  // PAGE 23
  {
    id: "aluminium-sulphate",
    name: "Aluminium Sulphate",
    formula: "Al₂(SO₄)₃",
    cas: "CAS 10043-01-3",
    category: "chemicals",
    form: "Slabs, Lumps, Crystals & Powder",
    subtitle: "CAS 10043-01-3 | Formula: Al2(SO4)3·16H2O",
    imageUrl: "/product/p_aluminium_sulphate.png",
    overview:
      "Aluminium Sulphate (Alum) is a white crystalline solid supplied by SGSC in Non-Ferric and Ferric grades conforming to IS 260. The industry-standard coagulant for water & effluent treatment, it is also widely used in paper sizing, textile dyeing, and tanning. Available as slabs, lumps, crystals, and powder.",
    technicalSpecs: [
      { label: "Al2O3 — Non-Ferric grade", value: "≥ 16.0%" },
      { label: "Al2O3 — Ferric grade",     value: "≥ 15.0%" },
      { label: "Iron (Fe2O3) — Non-Ferric", value: "≤ 0.01%" },
      { label: "Water insolubles",         value: "≤ 0.5%" },
      { label: "pH (5% soln)",             value: "2.5 – 3.5" },
      { label: "Forms",                    value: "Slabs, lumps, crystals & powder" },
      { label: "Standard",                 value: "IS 260 / Water Treatment Grade" },
    ],
    keyApplications: [
      "Drinking water & municipal treatment coagulant",
      "Effluent & sewage treatment plants (ETP / STP)",
      "Paper & pulp — rosin sizing & retention aid",
      "Textile dyeing & printing mordant",
      "Fire extinguisher foam & fireproofing compounds",
      "Leather tanning & hide processing auxiliary",
      "Soil pH correction & horticulture applications",
      "Pigment, lake colour & dye manufacturing",
    ],
    purityGrades: ["Non-Ferric Grade (Al2O3 ≥ 16.0%)", "Ferric Grade (Al2O3 ≥ 15.0%)"],
    industries: ["Water Treatment", "Paper & Pulp", "Textile", "Leather", "Agriculture", "Chemical Manufacturing"],
    packaging: "50 kg HDPE bags • 25 kg bags • 500 kg / 1000 kg jumbo bags • Min order: 1 MT",
  },

  // PAGE 24
  {
    id: "zinc-phosphate",
    name: "Zinc Phosphate",
    formula: "Zn₃(PO₄)₂",
    cas: "CAS 7779-90-0",
    category: "chemicals",
    form: "White Crystalline Powder",
    subtitle: "CAS 7779-90-0 | Formula: Zn3(PO4)2",
    imageUrl: "/product/Zinc_phosphate.png",
    overview:
      "Zinc Phosphate is a fine white crystalline powder produced by reacting zinc oxide with phosphoric acid. It is prized as a non-toxic, low-hazard anti-corrosive pigment and is the industry-standard conversion coating for steel surface pre-treatment. SGSC supplies high-purity Zinc Phosphate for paints, coatings, and metal pre-treatment applications.",
    technicalSpecs: [
      { label: "Zn3(PO4)2 Assay",   value: "≥ 98.0%" },
      { label: "Zn content",         value: "≥ 40.0%" },
      { label: "P2O5 content",       value: "≥ 30.0%" },
      { label: "Lead (Pb)",          value: "≤ 0.005%" },
      { label: "Water solubles",     value: "≤ 0.5%" },
      { label: "Appearance",         value: "White crystalline powder" },
      { label: "Grade",              value: "Anti-corrosive Pigment / Industrial" },
    ],
    keyApplications: [
      "Anti-corrosive pigment in primers & industrial paints",
      "Phosphate conversion coating for steel pre-treatment",
      "Automotive & appliance metal pre-treatment",
      "Non-toxic replacement for lead & chromate pigments",
      "Powder coating & electro-deposition primers",
      "Marine & protective coating formulations",
      "Corrosion resistance for fasteners & hardware",
      "Anti-rust coatings for pipelines & structural steel",
    ],
    purityGrades: ["Anti-corrosive Pigment Grade", "Industrial Grade"],
    industries: ["Paints & Coatings", "Automotive", "Steel Manufacturing", "Metal Finishing"],
    packaging: "25 kg HDPE bags with inner PE liner • 50 kg drums • 500 kg jumbo bags • Min order: 500 kg",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
