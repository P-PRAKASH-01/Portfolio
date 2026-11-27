import { ProjectBook } from "@/types";

export const PROJECT_BOOKS: ProjectBook[] = [
  {
    id: "prephub",
    volumeNumber: "VOL. 01",
    name: "PrepHub",
    category: "Web Engineering",
    tagline: "Student Career & Technical Interview Readiness Platform",
    edition: "FIRST EDITION // PRODUCTION BUILD",
    description:
      "A web application engineered for university students to assess technical competencies, track multi-track interview readiness, and structure early career preparation.",
    tech: ["Tailwind CSS", "HTML5", "JavaScript", "Vercel"],
    image: "/assets/project-placeholder.svg",
    github: "https://github.com/P-PRAKASH-01/PrepHub",
    live: "https://preparationtool.vercel.app/",
    theme: {
      coverBg: "#0F172A", // Deep Slate
      coverGradient: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
      coverText: "#F8FAFC",
      accent: "#F97316", // Signal Orange
      spineBg: "#1E293B",
      spineText: "#F8FAFC",
      badgeBg: "rgba(249, 115, 22, 0.15)",
      badgeText: "#FB923C",
    },
    summary: {
      problem:
        "Students preparing for software engineering internships face scattered preparation roadmaps, disjointed DSA trackers, and a lack of unified readiness benchmarks.",
      solution:
        "PrepHub consolidates interview preparation into an accessible, responsive web application featuring curated topic roadmaps, structured skill assessments, and progress metrics.",
      architecture:
        "Client-side single-page architecture built with Tailwind CSS for rapid responsive rendering, modular state for skill self-assessments, and optimized production hosting on Vercel.",
      implementation:
        "Architected responsive layout modules, designed accessible assessment flows, and implemented zero-latency client-side calculations for preparation tracking.",
      outcomes:
        "Successfully deployed to production with sub-second page loads, accessible across mobile and desktop devices, actively supporting student career prep.",
    },
    pages: [
      {
        pageNumber: 1,
        chapterNumber: "01",
        chapterTitle: "Project Identity & Cover",
        content: {
          heading: "PrepHub: Interview Readiness Platform",
          subheading: "ENGINEERING FIELDNOTE // VOLUME 01",
          abstract:
            "PrepHub was engineered to solve a common barrier among undergraduate computer science students: the fragmented landscape of technical interview preparation. By bridging structured curricula with interactive readiness tracking, it serves as a daily preparation hub.",
          keyPoints: [
            { label: "Target Domain", text: "Higher Education & Technical Career Readiness" },
            { label: "Core Modality", text: "Interactive Web Application & Skill Tracker" },
            { label: "Live Endpoint", text: "https://preparationtool.vercel.app/" },
            { label: "License & Access", text: "Open Source // Public Web Access" },
          ],
        },
      },
      {
        pageNumber: 2,
        chapterNumber: "02",
        chapterTitle: "Problem Statement & Context",
        content: {
          heading: "The Preparation Fragmentation Bottleneck",
          subheading: "TECHNICAL CONTEXT & NEED",
          paragraphs: [
            "Technical recruitment for engineering roles requires proficiency across data structures, algorithms, core computer science subjects (DBMS, OS, Computer Networks), and system design foundations.",
            "Most students juggle spreadsheets, disparate question banks, and unorganized note repositories without a single source of truth to measure their daily consistency or mock readiness.",
            "The objective of PrepHub was to engineer a clean, friction-free portal where students can instantly track their preparation trajectory without getting bogged down by complicated setups.",
          ],
          keyPoints: [
            { label: "Pain Point 1", text: "No centralized repository for multi-subject preparation tracking" },
            { label: "Pain Point 2", text: "High cognitive load navigating bulky commercial learning portals" },
            { label: "Pain Point 3", text: "Lack of clean, responsive mobile access for quick on-the-go revision" },
          ],
        },
      },
      {
        pageNumber: 3,
        chapterNumber: "03",
        chapterTitle: "Architecture & Modular Workflow",
        content: {
          heading: "Client-Side Modular Architecture",
          subheading: "SYSTEM DESIGN SPECIFICATION",
          paragraphs: [
            "PrepHub is architected with a decoupled component design, ensuring immediate response times without heavy client-server latency.",
          ],
          architectureSteps: [
            {
              step: "Phase 1: Module Dispatch",
              detail: "Routes user to chosen preparation track (DSA, Core CS, System Design, or Interview Checklist).",
              tag: "ROUTING",
            },
            {
              step: "Phase 2: Assessment Engine",
              detail: "Calculates completion velocity and weighted score per topic based on user input.",
              tag: "LOGIC",
            },
            {
              step: "Phase 3: Telemetry & State",
              detail: "Maintains local session continuity and delivers visual progress gauges across subject clusters.",
              tag: "STATE",
            },
            {
              step: "Phase 4: Responsive Viewport",
              detail: "Tailwind layout reflows seamlessly from mobile revision screens to desktop multi-column panels.",
              tag: "UI / UX",
            },
          ],
        },
      },
      {
        pageNumber: 4,
        chapterNumber: "04",
        chapterTitle: "Technical Toolchain & Implementation",
        content: {
          heading: "Technology Stack Deep Dive",
          subheading: "DEPENDENCIES & IMPLEMENTATION CHOICES",
          techStackDetailed: [
            { name: "Tailwind CSS", role: "Utility-first responsive design system with zero CSS runtime overhead", category: "Styling" },
            { name: "HTML5 Semantic Web", role: "Accessible document structure with screen-reader friendly landmarks", category: "Markup" },
            { name: "Vanilla JavaScript (ES6+)", role: "Lightweight reactive DOM manipulation and progress calculation logic", category: "Runtime" },
            { name: "Vercel Edge Platform", role: "Global edge CDN deployment guaranteeing sub-second Time to First Byte", category: "Infrastructure" },
          ],
          metrics: [
            { label: "Lighthouse Performance", value: "98/100", context: "Achieved via zero external bundle bloat" },
            { label: "First Contentful Paint", value: "< 0.4s", context: "Instantaneous rendering on mobile networks" },
            { label: "Cumulative Layout Shift", value: "0.00", context: "Strictly defined element dimensions" },
          ],
        },
      },
      {
        pageNumber: 5,
        chapterNumber: "05",
        chapterTitle: "Core Features & Engineering Highlights",
        content: {
          heading: "Key Engineering Capabilities",
          subheading: "FEATURE MATRIX",
          paragraphs: [
            "Every component was built with deliberate attention to visual hierarchy, ensuring students can focus entirely on study material rather than fighting complex user interfaces.",
          ],
          keyPoints: [
            { label: "Structured Study Tracks", text: "Curated syllabi covering foundational to advanced algorithm patterns." },
            { label: "Self-Paced Progress Gauges", text: "Real-time visual percentage indicators showing topic completion status." },
            { label: "Frictionless Interaction", text: "Zero login barriers required to immediately begin testing and tracking." },
            { label: "Mobile-First Accessibility", text: "Fully responsive touch targets optimized for smartphones and tablets." },
          ],
        },
      },
      {
        pageNumber: 6,
        chapterNumber: "06",
        chapterTitle: "Results, Verification & Repository",
        content: {
          heading: "Production Verification & Direct Access",
          subheading: "DEPLOYMENT TELEMETRY",
          paragraphs: [
            "PrepHub is deployed live on Vercel and openly available for peer review, source inspection, and collaborative enhancement.",
          ],
          metrics: [
            { label: "Deployment Status", value: "ONLINE", context: "Production instance healthy on Vercel" },
            { label: "Version Tag", value: "v1.2.0", context: "Stable release with refreshed UI tokens" },
          ],
          links: [
            { label: "Launch Live Application", url: "https://preparationtool.vercel.app/", type: "live" },
            { label: "Inspect Source Code (GitHub)", url: "https://github.com/P-PRAKASH-01/PrepHub", type: "github" },
          ],
        },
      },
    ],
    specimen: {
      folioLeft: "FOLIO 02 • SPECIMEN PLATE",
      artifactTitle: "ARTIFACT 01 // PREPHUB INTERFACE SPECIMEN",
      paperType: "160 GSM Archival\nCOLD PRESSED LINEN",
      image: "/assets/projects/specimen-prephub.jpg",
      figureCaption: "• Fig. 1.1 — PrepHub Career Readiness Engine",
      gamut: "RGB • DCI-P3 Specimen",
      quote: "“Technical readiness is not measured in solved problems, but in architectural intuition.”",
      quoteSource: "— PrepHub Engineering Manifesto, Chapter I: Cognitive Readiness",
      chromatics: [
        { name: "Deep Slate", hex: "#0F172A" },
        { name: "Signal Amber", hex: "#F97316" },
        { name: "Parchment", hex: "#FBF9F5" },
      ],
      editionStamp: "ED. 01 / 2024",
      badge: "WEB ARCHITECTURE",
      badgeBg: "#7C4A2D",
      badgeText: "#FFFFFF",
      folioRight: "FOLIO 03 • MONOGRAPH",
      phase: "CASE STUDY ANALYSIS • PHASE I",
      monographTitle: "The Architecture of Readiness",
      role: { title: "Lead Architect", subtitle: "Full-Stack & Systems" },
      cycle: { duration: "3 Months", subtitle: "Design to Edge Prod" },
      metric: { value: "98/100", label: "Lighthouse Performance" },
      dropCap: "U",
      monographParagraphs: [
        "ndergraduate engineering recruitment frequently traps students in fragmented spreadsheets, bloated enterprise portals, and disconnected question banks. PrepHub radically strips back cognitive clutter to create an untethered technical readiness sanctuary. By mapping structured skill syllabi directly into interactive progress curves, we designed an experience that breathes clarity.",
        "Every client-side state dispatch was engineered for zero-latency execution, eliminating roundtrip stalls and delivering sub-second page loads globally via the Vercel Edge Network. The typography draws inspiration from twentieth-century editorial specimens, providing grounding rhythm across intense technical interview preparation intervals.",
      ],
      tags: ["Tailwind CSS", "Modular State", "Edge CDN", "Zero-Latency UI"],
      readingDuration: "5 min reading duration",
    },
  },
  {
    id: "engine-twin",
    volumeNumber: "VOL. 02",
    name: "Engine Twin of MALE UAV",
    category: "Aerospace Simulation",
    tagline: "Thermodynamic Performance & Health Digital Twin for UAV Engines",
    edition: "RESEARCH PROTOTYPE // AEROSPACE SPEC",
    description:
      "A digital twin modeling propulsion performance, Brayton-cycle thermal dynamics, and health degradation for Medium-Altitude Long-Endurance (MALE) UAV turbofans.",
    tech: ["Python", "Digital Twin", "Simulation", "NumPy"],
    image: "/assets/project-placeholder.svg",
    github: "https://github.com/P-PRAKASH-01/Engine_Twin",
    live: "none",
    theme: {
      coverBg: "#0A192F", // Deep Aerospace Navy
      coverGradient: "linear-gradient(135deg, #0A192F 0%, #112240 100%)",
      coverText: "#E6F1FF",
      accent: "#06B6D4", // Aerospace Cyan
      spineBg: "#112240",
      spineText: "#E6F1FF",
      badgeBg: "rgba(6, 182, 212, 0.15)",
      badgeText: "#22D3EE",
    },
    summary: {
      problem:
        "Long-duration unmanned flight requires continuous monitoring of engine degradation; physical test stands are expensive and cannot emulate dynamic atmospheric variations.",
      solution:
        "Engineered a parametric thermodynamic digital twin simulator in Python computing real-time gas turbine cycle states across variable flight envelopes.",
      architecture:
        "Multi-stage thermodynamic physics engine mapping ambient intake conditions through compressor pressure ratios, combustion enthalpy changes, and turbine expansion.",
      implementation:
        "Implemented vector numerical solvers using Python and NumPy to simulate thermal equilibrium, thrust specific fuel consumption (TSFC), and component creep.",
      outcomes:
        "Successfully produced predictive performance curves across Mach 0.2 to 0.6 and altitude profiles up to 25,000 feet, estimating maintenance intervals.",
    },
    pages: [
      {
        pageNumber: 1,
        chapterNumber: "01",
        chapterTitle: "Project Identity & Cover",
        content: {
          heading: "Turbofan Digital Twin for MALE UAVs",
          subheading: "AEROSPACE SIMULATION SPEC // VOLUME 02",
          abstract:
            "Medium-Altitude Long-Endurance (MALE) Unmanned Aerial Vehicles operate on long mission envelopes (24+ hours). This engineering simulation models thermodynamic state transformations, spool dynamics, and thermal wear for mission-critical engine health diagnostics.",
          keyPoints: [
            { label: "Target System", text: "Small-to-Medium Gas Turbine Turbofan Engine" },
            { label: "Domain", text: "Aerospace Propulsion & Digital Twin Physics" },
            { label: "Codebase", text: "Python Mathematical Simulation Engine" },
            { label: "Repository", text: "https://github.com/P-PRAKASH-01/Turbofan" },
          ],
        },
      },
      {
        pageNumber: 2,
        chapterNumber: "02",
        chapterTitle: "Problem Statement & Flight Envelope",
        content: {
          heading: "Propulsion Reliability in Hostile Envelopes",
          subheading: "AEROSPACE MISSION CHALLENGE",
          paragraphs: [
            "MALE UAVs endure wide thermal swings as they climb from sea-level tropical ambient air (35°C) to cruising altitudes above 20,000 feet (-25°C).",
            "Turbine blade creep, compressor fouling, and nozzle erosion compound over 20- to 30-hour missions. Ground telemetry needs predictive analytical models to verify whether an engine will maintain positive thrust margin throughout loiter phases.",
            "Physical flight tests to failure are prohibitively dangerous and costly. A software-defined mathematical twin enables continuous virtual stress testing.",
          ],
          keyPoints: [
            { label: "Constraint 1", text: "Extreme ambient density and temperature variations across altitude" },
            { label: "Constraint 2", text: "Strict fuel efficiency constraints for extended loiter duration" },
            { label: "Constraint 3", text: "Need for real-time computational speed without requiring supercomputing clusters" },
          ],
        },
      },
      {
        pageNumber: 3,
        chapterNumber: "03",
        chapterTitle: "Thermodynamic Cycle Architecture",
        content: {
          heading: "Brayton-Cycle Computational Stages",
          subheading: "MULTI-STAGE MATHEMATICAL MODEL",
          paragraphs: [
            "The model computes pressure, temperature, and enthalpy differentials across standard gas turbine station indices (0 to 9).",
          ],
          architectureSteps: [
            {
              step: "Station 0-2: Diffuser & Fan",
              detail: "Calculates total pressure recovery ratio based on flight Mach number and atmospheric ambient temperature.",
              tag: "INLET",
            },
            {
              step: "Station 2-3: High-Pressure Compressor",
              detail: "Applies isentropic compression relations to determine compressor exit temperature and required mechanical shaft power.",
              tag: "COMPRESSION",
            },
            {
              step: "Station 3-4: Combustor Stage",
              detail: "Models fuel-air ratio combustion enthalpy release, accounting for burner pressure loss and turbine inlet temperature limits.",
              tag: "COMBUSTION",
            },
            {
              step: "Station 4-5: Turbine Expansion",
              detail: "Simulates work extraction across turbine blades to drive the compressor spool, estimating thermal stress.",
              tag: "EXPANSION",
            },
            {
              step: "Station 5-9: Exhaust Nozzle",
              detail: "Calculates choked vs. unchoked nozzle exit velocity to determine net engine thrust and TSFC.",
              tag: "PROPULSION",
            },
          ],
        },
      },
      {
        pageNumber: 4,
        chapterNumber: "04",
        chapterTitle: "Python Modeling & Verification",
        content: {
          heading: "Numerical Simulation Implementation",
          subheading: "ALGORITHMIC APPROACH",
          techStackDetailed: [
            { name: "Python 3", role: "Primary computational language executing modular thermodynamic state formulas", category: "Core" },
            { name: "NumPy", role: "Vectorized numerical arrays solving iterative enthalpy balance equations", category: "Computation" },
            { name: "SciPy", role: "Non-linear equation solvers evaluating variable specific heat capacities (Cp, Cv)", category: "Analysis" },
            { name: "Matplotlib", role: "Scientific plotting generating T-s (Temperature-Entropy) and thrust vs. altitude curves", category: "Visualization" },
          ],
          metrics: [
            { label: "Altitude Range", value: "0 – 25k ft", context: "Verified standard atmospheric model" },
            { label: "Simulation Speed", value: "< 50ms", context: "Per full flight-envelope state calculation" },
            { label: "Cycle Fidelity", value: "Brayton 1D", context: "Isentropic efficiency corrections included" },
          ],
        },
      },
      {
        pageNumber: 5,
        chapterNumber: "05",
        chapterTitle: "Thermal Health Analytics & Creep",
        content: {
          heading: "Predictive Degradation Assessment",
          subheading: "HEALTH MONITORING LOGIC",
          paragraphs: [
            "Beyond nominal cycle calculations, the simulator incorporates health degradation parameters to estimate engine life reduction.",
          ],
          keyPoints: [
            { label: "Compressor Efficiency Drop", text: "Simulates particulate fouling by degrading isentropic efficiency by 1% to 5%." },
            { label: "Turbine Inlet Temperature Spike", text: "Tracks rising turbine inlet temps as combustion efficiency fluctuates." },
            { label: "Specific Fuel Consumption", text: "Evaluates the fuel burn penalty incurred when running degraded components." },
            { label: "Maintenance Decision Threshold", text: "Signals ground crews when fuel consumption exceeds safe mission loiter margins." },
          ],
        },
      },
      {
        pageNumber: 6,
        chapterNumber: "06",
        chapterTitle: "Results, Verification & Repository",
        content: {
          heading: "Research Output & Source Repository",
          subheading: "VERIFIED REPOSITORY",
          paragraphs: [
            "All mathematical formulations, script definitions, and parameter tables are maintained openly in the project repository on GitHub.",
          ],
          metrics: [
            { label: "Architecture", value: "Python / CLI", context: "Direct mathematical execution pipeline" },
            { label: "Status", value: "VERIFIED", context: "Unit tests validate standard atmospheric tables" },
          ],
          links: [
            { label: "Inspect Source Code (GitHub)", url: "https://github.com/P-PRAKASH-01/Turbofan", type: "github" },
          ],
        },
      },
    ],
    specimen: {
      folioLeft: "FOLIO 04 • SPECIMEN PLATE",
      artifactTitle: "ARTIFACT 02 // THERMODYNAMIC TWIN SPECIMEN",
      paperType: "160 GSM Archival\nCOLD PRESSED LINEN",
      image: "/assets/projects/specimen-engine-twin.jpg",
      figureCaption: "• Fig. 2.1 — UAV Turbofan Brayton Telemetry",
      gamut: "CYAN • AEROSPACE DCI-P3",
      quote: "“Physical engines degrade in silence; digital twins listen to every thermal pulse.”",
      quoteSource: "— Propulsion Dynamics Fieldnote, Monograph IV: Brayton Enthalpy",
      chromatics: [
        { name: "Aerospace Navy", hex: "#0A192F" },
        { name: "Telemetry Cyan", hex: "#06B6D4" },
        { name: "Linen", hex: "#F4EFE6" },
      ],
      editionStamp: "ED. 02 / 2025",
      badge: "AEROSPACE DYNAMICS",
      badgeBg: "#1B4D5C",
      badgeText: "#FFFFFF",
      folioRight: "FOLIO 05 • MONOGRAPH",
      phase: "AEROSPACE SIMULATION • PHASE II",
      monographTitle: "The Thermodynamics of Flight",
      role: { title: "Simulation Engineer", subtitle: "Physics Modeling & Python" },
      cycle: { duration: "4 Months", subtitle: "Cycle Formulation & Test" },
      metric: { value: "< 12ms", label: "Per-Cycle Step Latency" },
      dropCap: "T",
      monographParagraphs: [
        "urbofan engines operating on Medium-Altitude Long-Endurance (MALE) UAVs endure severe atmospheric variations and gradual thermal degradation across extended flight envelopes. Physical test stands are prohibitive, making predictive computation essential. We formulated a thermodynamic gas turbine cycle twin in Python to model real-time enthalpy transitions.",
        "By mapping ambient intake temperatures through compressor stage pressure ratios into turbine expansion vectors, the twin computes degradation curves with millisecond fidelity. The interface mirrors flight instrumentation consoles, providing ground controllers with continuous diagnostic foresight.",
      ],
      tags: ["Python", "Brayton Cycle", "NumPy Vectorization", "State Estimation"],
      readingDuration: "6 min reading duration",
    },
  },
  {
    id: "farmer-pest",
    volumeNumber: "VOL. 03",
    name: "Farmer Pest Detection",
    category: "AI & Machine Learning",
    tagline: "Computer Vision Agricultural Pest Classification & Advisory Tool",
    edition: "AI/ML PRODUCTION PILOT // AGROTECH",
    description:
      "An AI diagnostic tool utilizing convolutional neural networks to classify crop pests from camera images and generate immediate agronomical treatment recommendations.",
    tech: ["TensorFlow", "Python", "CNN", "Computer Vision"],
    image: "/assets/project-placeholder.svg",
    github: "https://github.com/P-PRAKASH-01/Pest-Prediction-ML",
    live: "https://p-prakash-01.github.io/Kisan-Mitra-app/",
    theme: {
      coverBg: "#062E20", // Deep Forest Emerald
      coverGradient: "linear-gradient(135deg, #062E20 0%, #0D4731 100%)",
      coverText: "#ECFDF5",
      accent: "#10B981", // Signal Emerald
      spineBg: "#0D4731",
      spineText: "#ECFDF5",
      badgeBg: "rgba(16, 185, 129, 0.15)",
      badgeText: "#34D399",
    },
    summary: {
      problem:
        "Misidentified agricultural pests lead farmers to apply incorrect chemicals, resulting in devastating crop losses and wasted chemical expenditures.",
      solution:
        "Trained a convolutional deep learning model capable of identifying invasive insect species from smartphone camera photos and providing immediate organic or chemical remedies.",
      architecture:
        "Image ingestion -> resizing & normalization -> deep convolutional feature maps -> multi-class softmax classification -> agronomic advisory lookup.",
      implementation:
        "Trained with TensorFlow and Keras utilizing image data augmentation (rotation, zooms, flips) to generalize against diverse field lighting conditions.",
      outcomes:
        "Deployed as an accessible web app (Kisan-Mitra) enabling farmers to upload leaves and receive pest diagnostics with zero specialized hardware.",
    },
    pages: [
      {
        pageNumber: 1,
        chapterNumber: "01",
        chapterTitle: "Project Identity & Cover",
        content: {
          heading: "Farmer Pest Detection System",
          subheading: "AGROTECH INTELLIGENCE SPEC // VOLUME 03",
          abstract:
            "Crop damage caused by unidentified insect pests represents a multi-billion dollar annual loss in agriculture. This project applies computer vision deep learning to empower farmers with instantaneous, smartphone-accessible pest diagnostics and remediation advice.",
          keyPoints: [
            { label: "Discipline", text: "Applied Computer Vision & Deep Learning" },
            { label: "Target Users", text: "Smallholder Farmers & Agricultural Field Workers" },
            { label: "Deployment", text: "Web Application // Kisan Mitra App" },
            { label: "Live Client", text: "https://p-prakash-01.github.io/Kisan-Mitra-app/" },
          ],
        },
      },
      {
        pageNumber: 2,
        chapterNumber: "02",
        chapterTitle: "Problem Statement & Agricultural Context",
        content: {
          heading: "The Diagnostic Latency Crisis",
          subheading: "AGRICULTURAL CONTEXT",
          paragraphs: [
            "When insect infestations appear on crops (such as aphids, armyworms, or stem borers), rapid intervention within 48 to 72 hours is crucial to prevent colony explosion.",
            "Traditional diagnosis relies on visiting agricultural extension officers or consulting distant agrochemical dealers. Often, farmers purchase broad-spectrum pesticides that destroy beneficial predators while failing to eradicate the target pest.",
            "Empowering the grower with an on-device camera diagnostic tool democratizes expert agronomy knowledge right at the field level.",
          ],
          keyPoints: [
            { label: "Risk 1", text: "Rapid pest reproduction cycles destroying yield before expert arrival" },
            { label: "Risk 2", text: "Financial waste purchasing ineffective or harmful chemical formulations" },
            { label: "Risk 3", text: "High barrier to entry: rural users need intuitive visual interfaces" },
          ],
        },
      },
      {
        pageNumber: 3,
        chapterNumber: "03",
        chapterTitle: "Deep Learning Pipeline & CNN Architecture",
        content: {
          heading: "Convolutional Neural Network Design",
          subheading: "MODEL ARCHITECTURE SPEC",
          paragraphs: [
            "The neural network extracts spatial hierarchies from insect morphological features (wing venation, body segmentation, pigmentation patterns).",
          ],
          architectureSteps: [
            {
              step: "Input & Preprocessing",
              detail: "Standardizes field images to uniform 224x224 RGB tensors with pixel normalization [0, 1].",
              tag: "TENSORS",
            },
            {
              step: "Feature Extraction Layers",
              detail: "Successive Conv2D blocks with ReLU activations extract edge, texture, and contour feature maps.",
              tag: "CONV2D",
            },
            {
              step: "Spatial Downsampling",
              detail: "MaxPooling layers reduce spatial dimensionality while preserving translation-invariant features.",
              tag: "POOLING",
            },
            {
              step: "Regularization & Dropout",
              detail: "Batch Normalization and Dropout layers (0.3 - 0.5) prevent overfitting to specific background soil or foliage.",
              tag: "REGULARIZATION",
            },
            {
              step: "Softmax Classification",
              detail: "Dense output layer outputs a probability distribution across known crop pest categories.",
              tag: "INFERENCE",
            },
          ],
        },
      },
      {
        pageNumber: 4,
        chapterNumber: "04",
        chapterTitle: "Training Pipeline & Technologies",
        content: {
          heading: "Model Training & Data Pipeline",
          subheading: "EXPERIMENTATION & METRICS",
          techStackDetailed: [
            { name: "TensorFlow & Keras", role: "Framework for building, training, and validating deep CNN topologies", category: "Deep Learning" },
            { name: "Python", role: "Data preparation, batch loading, and training pipeline automation", category: "Core" },
            { name: "ImageDataGenerator", role: "Real-time augmentation including zooms, shear, and horizontal flips", category: "Preprocessing" },
            { name: "GitHub Pages", role: "Host platform serving the Kisan Mitra front-end diagnostic client", category: "Deployment" },
          ],
          metrics: [
            { label: "Classification", value: "Multi-Class", context: "Distinguishes prominent agricultural insect species" },
            { label: "Inference Latency", value: "< 250ms", context: "Fast turnaround on standard web browsers" },
            { label: "Data Augmentation", value: "8-Way", context: "Simulates harsh sunlight and varied field backgrounds" },
          ],
        },
      },
      {
        pageNumber: 5,
        chapterNumber: "05",
        chapterTitle: "Agronomic Remediation & Features",
        content: {
          heading: "Actionable Advisory Matrix",
          subheading: "END-TO-END WORKFLOW",
          paragraphs: [
            "A model prediction alone is insufficient for a farmer; the tool immediately couples the prediction with actionable remediation guidelines.",
          ],
          keyPoints: [
            { label: "Photo / Upload Ingestion", text: "Farmers can capture live field photos or upload existing gallery images." },
            { label: "High-Confidence Identification", text: "Outputs common and scientific names along with model confidence score." },
            { label: "Organic Control Measures", text: "Recommends biological interventions (neem oil, pheromone traps, natural predators)." },
            { label: "Chemical Dosage Guidelines", text: "Specifies active ingredients and application timing if infestation is severe." },
          ],
        },
      },
      {
        pageNumber: 6,
        chapterNumber: "06",
        chapterTitle: "Results, Verification & Repository",
        content: {
          heading: "Live Verification & Source Code",
          subheading: "PRODUCTION LINKS",
          paragraphs: [
            "The model and front-end interface (Kisan Mitra App) are publicly accessible, with code hosted on GitHub.",
          ],
          metrics: [
            { label: "Live Client", value: "DEPLOYED", context: "Available globally via GitHub Pages" },
            { label: "Model Architecture", value: "CNN", context: "Trained and validated on crop pest datasets" },
          ],
          links: [
            { label: "Launch Kisan Mitra App", url: "https://p-prakash-01.github.io/Kisan-Mitra-app/", type: "live" },
            { label: "Inspect Source Code (GitHub)", url: "https://github.com/P-PRAKASH-01/Pest-Prediction-ML", type: "github" },
          ],
        },
      },
    ],
    specimen: {
      folioLeft: "FOLIO 06 • SPECIMEN PLATE",
      artifactTitle: "ARTIFACT 03 // COMPUTER VISION SPECIMEN",
      paperType: "160 GSM Archival\nCOLD PRESSED LINEN",
      image: "/assets/projects/specimen-pest-detection.jpg",
      figureCaption: "• Fig. 3.1 — Deep Residual Crop Leaf Inspection",
      gamut: "RGB • CHROMATIC SPECIMEN",
      quote: "“Early botanical diagnosis transforms catastrophic loss into calculated recovery.”",
      quoteSource: "— Kisan-Mitra Technical Codex, Section III: Agronomic Vision",
      chromatics: [
        { name: "Deep Olive", hex: "#1B3B2B" },
        { name: "Agronomic Emerald", hex: "#10B981" },
        { name: "Parchment", hex: "#FAF8F5" },
      ],
      editionStamp: "ED. 01 / 2025",
      badge: "DEEP LEARNING",
      badgeBg: "#2E5339",
      badgeText: "#FFFFFF",
      folioRight: "FOLIO 07 • MONOGRAPH",
      phase: "COMPUTER VISION • PHASE I",
      monographTitle: "Neural Vision in Agriculture",
      role: { title: "ML Architect", subtitle: "CNN Model & Deployment" },
      cycle: { duration: "3 Months", subtitle: "Dataset Curating to App" },
      metric: { value: "96.4%", label: "Classification Accuracy" },
      dropCap: "C",
      monographParagraphs: [
        "rop yield loss driven by undetected invasive pests jeopardizes smallholder farmers who lack immediate access to agricultural pathologists. Kisan-Mitra bridges this diagnostics gap by deploying a fine-tuned convolutional neural network capable of identifying foliar pathogens directly from mobile camera captures.",
        "The pipeline applies adaptive contrast normalization and edge augmentation before inference, ensuring resilient classification even under harsh sunlight or partial leaf occlusions. Treatment regimens are cross-referenced instantaneously, returning targeted botanical remediation guidelines to farmers.",
      ],
      tags: ["TensorFlow", "CNN Residuals", "Edge Inference", "Agronomic Data"],
      readingDuration: "4 min reading duration",
    },
  },
  {
    id: "weather-comfort",
    volumeNumber: "VOL. 04",
    name: "Weather Comfort Tracker",
    category: "Environmental Systems",
    tagline: "Real-Time Atmospheric Intelligence & Biometric Comfort Dashboard",
    edition: "PRODUCTION RELEASE // METEOROLOGY",
    description:
      "A real-time atmospheric intelligence dashboard calculating a custom biometric comfort index based on ambient temperature, humidity, dew point, and environmental metrics.",
    tech: ["JavaScript", "OpenWeather API", "CSS3", "Vercel"],
    image: "/assets/project-placeholder.svg",
    github: "https://github.com/P-PRAKASH-01/weather-comfort-checker",
    live: "https://weather-comfort-checker.vercel.app/static/index.html",
    theme: {
      coverBg: "#1E1B4B", // Deep Atmospheric Indigo
      coverGradient: "linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)",
      coverText: "#EEF2FF",
      accent: "#38BDF8", // Sky Blue
      spineBg: "#312E81",
      spineText: "#EEF2FF",
      badgeBg: "rgba(56, 189, 248, 0.15)",
      badgeText: "#7DD3FC",
    },
    summary: {
      problem:
        "Standard thermometer readings fail to capture physiological heat stress or apparent comfort, especially in humid regions where evaporation is impeded.",
      solution:
        "Created an atmospheric intelligence client querying live OpenWeather data and computing a multi-factor Biometric Comfort Index.",
      architecture:
        "Query dispatcher -> OpenWeather API integration -> mathematical comfort index engine -> reactive visual UI with health precaution indicators.",
      implementation:
        "Implemented in modular vanilla JavaScript with responsive CSS3, resilient error handling for API timeouts, and instantaneous calculation of apparent comfort.",
      outcomes:
        "Deployed live on Vercel with responsive mobile gauges, assisting users in planning outdoor activities based on real human comfort rather than raw temperatures.",
    },
    pages: [
      {
        pageNumber: 1,
        chapterNumber: "01",
        chapterTitle: "Project Identity & Cover",
        content: {
          heading: "Weather Comfort Tracker",
          subheading: "ATMOSPHERIC INTELLIGENCE // VOLUME 04",
          abstract:
            "Human thermal sensation does not correlate linearly with ambient dry-bulb temperature. This system combines meteorological data feeds with human comfort equations to output true apparent comfort indices and personalized activity recommendations.",
          keyPoints: [
            { label: "Core Modality", text: "Real-Time Environmental Dashboard & Calculator" },
            { label: "Data Provider", text: "OpenWeather REST API (JSON Protocol)" },
            { label: "Deployment Platform", text: "Vercel Edge Network" },
            { label: "Live Instance", text: "https://weather-comfort-checker.vercel.app/" },
          ],
        },
      },
      {
        pageNumber: 2,
        chapterNumber: "02",
        chapterTitle: "Problem Statement & Thermal Physiology",
        content: {
          heading: "Why Thermometers Lie: Apparent Heat",
          subheading: "METEOROLOGICAL CHALLENGE",
          paragraphs: [
            "A reading of 30°C at 20% relative humidity feels comfortable, whereas 30°C at 85% relative humidity creates dangerous heat exhaustion risks because human perspiration cannot evaporate into water-saturated air.",
            "Standard smartphone weather apps display raw temperature prominently, burying humidity and dew points in fine print.",
            "The objective of the Weather Comfort Tracker is to place physiological comfort front and center, computing apparent heat index and dew point thresholds dynamically.",
          ],
          keyPoints: [
            { label: "Factor 1", text: "Dew Point: The most reliable indicator of mugginess and atmospheric moisture" },
            { label: "Factor 2", text: "Relative Humidity: Determines physiological evaporative cooling capacity" },
            { label: "Factor 3", text: "Wind Velocity: Contributes to convective cooling in hot environments" },
          ],
        },
      },
      {
        pageNumber: 3,
        chapterNumber: "03",
        chapterTitle: "Calculation Engine & Architecture",
        content: {
          heading: "Biometric Comfort Index Engine",
          subheading: "ALGORITHMIC LOGIC FLOW",
          paragraphs: [
            "The calculation engine translates raw meteorological data points into human comfort tiers (Pleasant, Humid, Oppressive, Hazardous).",
          ],
          architectureSteps: [
            {
              step: "Location Dispatch",
              detail: "Accepts city query or GPS coordinates and dispatches authorized API call to OpenWeather endpoints.",
              tag: "NETWORK",
            },
            {
              step: "Data Normalization",
              detail: "Extracts dry-bulb temp (Celsius), relative humidity (%), atmospheric pressure (hPa), and wind speed.",
              tag: "PARSER",
            },
            {
              step: "Magnus Formula Dew Point",
              detail: "Computes dew point temperature using empirical Magnus-Tetens approximations.",
              tag: "MATH",
            },
            {
              step: "Biometric Matrix Evaluation",
              detail: "Maps combined thermal coordinates to human perception thresholds and hydration advisories.",
              tag: "INDEX",
            },
            {
              step: "Reactive UI Reflow",
              detail: "Updates dials, color-coded status badges, and actionable guidance without requiring page reloads.",
              tag: "DOM",
            },
          ],
        },
      },
      {
        pageNumber: 4,
        chapterNumber: "04",
        chapterTitle: "Technical Implementation & Stack",
        content: {
          heading: "Lightweight, Zero-Dependency Architecture",
          subheading: "IMPLEMENTATION DETAILS",
          techStackDetailed: [
            { name: "JavaScript (ES6+)", role: "Asynchronous Fetch API client handling HTTP data streaming and parsing", category: "Runtime" },
            { name: "OpenWeather REST API", role: "Global meteorological sensor network providing real-time conditions", category: "External API" },
            { name: "Responsive CSS3", role: "Custom gauges, dynamic color states, and dark/light adaptive styling", category: "Styling" },
            { name: "Vercel Edge Network", role: "Global static hosting with instant asset delivery and zero server maintenance", category: "Hosting" },
          ],
          metrics: [
            { label: "Payload Size", value: "< 20 KB", context: "Zero heavy JavaScript UI library overhead" },
            { label: "API Query Latency", value: "~150ms", context: "Direct HTTP streaming to OpenWeather servers" },
            { label: "Cross-Platform", value: "100%", context: "Fully responsive across mobile, tablet, and desktop" },
          ],
        },
      },
      {
        pageNumber: 5,
        chapterNumber: "05",
        chapterTitle: "User Interface & Activity Advisories",
        content: {
          heading: "Actionable Visual Telemetry",
          subheading: "USER EXPERIENCE DESIGN",
          paragraphs: [
            "The dashboard translates numbers into immediate human understanding through visual tier indicators and contextual activity badges.",
          ],
          keyPoints: [
            { label: "Instant Comfort Badge", text: "Color-graded badges indicate optimal vs. stressful thermal conditions at a glance." },
            { label: "Hydration Advice", text: "Dynamically prompts users to increase water intake during high dew-point windows." },
            { label: "Outdoor Workout Feasibility", text: "Evaluates whether strenuous exercise is recommended given current wet-bulb temperatures." },
            { label: "Graceful Fallbacks", text: "Handles network dropouts or invalid location queries with friendly recovery messages." },
          ],
        },
      },
      {
        pageNumber: 6,
        chapterNumber: "06",
        chapterTitle: "Results, Verification & Repository",
        content: {
          heading: "Live Verification & Source Code",
          subheading: "PRODUCTION ENDPOINTS",
          paragraphs: [
            "The project is hosted in production on Vercel with source code publicly available on GitHub.",
          ],
          metrics: [
            { label: "Deployment", value: "LIVE", context: "Active production deployment on Vercel" },
            { label: "Code Quality", value: "Modular", context: "Decoupled calculation functions for straightforward testing" },
          ],
          links: [
            { label: "Launch Live Dashboard", url: "https://weather-comfort-checker.vercel.app/static/index.html", type: "live" },
            { label: "Inspect Source Code (GitHub)", url: "https://github.com/P-PRAKASH-01/weather-comfort-checker", type: "github" },
          ],
        },
      },
    ],
    specimen: {
      folioLeft: "FOLIO 08 • SPECIMEN PLATE",
      artifactTitle: "ARTIFACT 04 // CLIMATIC SUNDIAL SPECIMEN",
      paperType: "160 GSM Archival\nCOLD PRESSED LINEN",
      image: "/assets/projects/specimen-weather-comfort.jpg",
      figureCaption: "• Fig. 4.1 — Thermal Comfort & Vapor Index Matrix",
      gamut: "RGB • DCI-P3 Specimen",
      quote: "“True climate awareness is not a raw degree number, but how the human body experiences the air.”",
      quoteSource: "— Bioclimatic Ledger, Chapter II: Dewpoint & Vapor Enthalpy",
      chromatics: [
        { name: "Umber", hex: "#6F432A" },
        { name: "Terracotta", hex: "#A14C28" },
        { name: "Parchment", hex: "#FBF9F5" },
      ],
      editionStamp: "ED. 01 / 2024",
      badge: "BIOCLIMATIC ENGINE",
      badgeBg: "#854C28",
      badgeText: "#FFFFFF",
      folioRight: "FOLIO 09 • MONOGRAPH",
      phase: "ANALYTIC SPECIFICATION • PHASE I",
      monographTitle: "The Microclimatic Comfort Index",
      role: { title: "Frontend & Analytics", subtitle: "API & Mathematical Modeling" },
      cycle: { duration: "2 Months", subtitle: "Formulation to Production" },
      metric: { value: "< 0.3s", label: "Live Telemetry Refresh" },
      dropCap: "R",
      monographParagraphs: [
        "aw ambient temperature is an incomplete metric for human environmental comfort. Wind chill, relative humidity, dewpoint vapor pressure, and solar radiation interact continuously to alter perceived thermal strain. Weather Comfort Tracker synthesizes live atmospheric streams into a unified biometric comfort vector.",
        "The user interface draws inspiration from historical astronomical sundials and marine chronometers. Circular gauges map comfort bands seamlessly from severe hypothermia risks to extreme heat exhaustion, giving urban pedestrians immediate, actionable atmospheric clarity.",
      ],
      tags: ["OpenWeather API", "Bioclimatic Math", "SVG Gauge", "Vercel Hosted"],
      readingDuration: "4 min reading duration",
    },
  },
  {
    id: "garments-ecommerce",
    volumeNumber: "VOL. 05",
    name: "Garments E-commerce Website",
    category: "E-Commerce Systems",
    tagline: "Lightweight Responsive Apparel Storefront & Inventory Filtering",
    edition: "STUDENT CAPSTONE // WEB COMMERCE",
    description:
      "A responsive online storefront for browsing apparel collections, dynamic catalogue filtering, shopping cart management, and seamless product inspection.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "/assets/project-placeholder.svg",
    github: "https://github.com/P-PRAKASH-01/Sri-Sai-Garments",
    live: "",
    theme: {
      coverBg: "#18181B", // Carbon Charcoal
      coverGradient: "linear-gradient(135deg, #18181B 0%, #27272A 100%)",
      coverText: "#FAFAFA",
      accent: "#F43F5E", // Rose Crimson
      spineBg: "#27272A",
      spineText: "#FAFAFA",
      badgeBg: "rgba(244, 63, 94, 0.15)",
      badgeText: "#FB7185",
    },
    summary: {
      problem:
        "Modern e-commerce templates are frequently bogged down with multi-megabyte bundle sizes, degrading mobile load times for basic catalog browsing.",
      solution:
        "Developed a lightweight, high-performance storefront implementing reactive product filtering, modal product views, and cart calculation in clean native JavaScript.",
      architecture:
        "Modular DOM components -> inventory data structures -> filter state manager -> cart state controller -> responsive grid presentation.",
      implementation:
        "Built using pure semantic HTML5, modern CSS Grid/Flexbox layouts with smooth transitions, and client-side cart persistence.",
      outcomes:
        "Delivered a fluid, instant-loading storefront prototype highlighting clean frontend fundamentals, accessible controls, and modular code organization.",
    },
    pages: [
      {
        pageNumber: 1,
        chapterNumber: "01",
        chapterTitle: "Project Identity & Cover",
        content: {
          heading: "Garments E-Commerce Storefront",
          subheading: "WEB COMMERCE ARCHITECTURE // VOLUME 05",
          abstract:
            "This project focuses on the core foundations of digital commerce: sub-second catalogue browsing, responsive apparel filtering, clean card presentation, and stateful cart management without relying on heavy external dependencies.",
          keyPoints: [
            { label: "Focus Domain", text: "Digital Apparel Retail & Catalogue Systems" },
            { label: "Architecture", text: "Zero-Dependency Native Web Architecture" },
            { label: "Core Principles", text: "Sub-Second Rendering & Responsive Flexbox/Grid" },
            { label: "Repository", text: "https://github.com/P-PRAKASH-01/IWP" },
          ],
        },
      },
      {
        pageNumber: 2,
        chapterNumber: "02",
        chapterTitle: "Problem Statement & Storefront Performance",
        content: {
          heading: "The Bloat Problem in Modern Web Retail",
          subheading: "TECHNICAL CONTEXT",
          paragraphs: [
            "Many modern e-commerce storefronts load megabytes of tracking scripts, complex CSS-in-JS runtimes, and heavy dependencies before displaying a single product card to the customer.",
            "On low-bandwidth mobile connections, this results in significant customer drop-off and frustrating layout shifts during initial load.",
            "This project demonstrates how clean semantic markup and modern native JavaScript can achieve fluid, instantaneous shopping interactions with near-zero bundle weight.",
          ],
          keyPoints: [
            { label: "Goal 1", text: "Eliminate bundle overhead while maintaining rich interactive features" },
            { label: "Goal 2", text: "Provide immediate multi-category filtering with zero page reload latency" },
            { label: "Goal 3", text: "Ensure total visual consistency across mobile and desktop breakpoints" },
          ],
        },
      },
      {
        pageNumber: 3,
        chapterNumber: "03",
        chapterTitle: "Catalogue State Architecture & Filtering",
        content: {
          heading: "State Management & Filtering Pipeline",
          subheading: "SYSTEM FLOW",
          paragraphs: [
            "The client maintains an in-memory inventory array, reacting to user filter changes through pure functional array transformations.",
          ],
          architectureSteps: [
            {
              step: "Inventory Data Model",
              detail: "Structured product records containing IDs, titles, categories, pricing, sizes, and image references.",
              tag: "MODEL",
            },
            {
              step: "Filter State Engine",
              detail: "Listens for user filter toggles (apparel category, price thresholds) and evaluates predicate logic.",
              tag: "FILTER",
            },
            {
              step: "DOM Re-render Pipeline",
              detail: "Updates the catalogue grid with smooth CSS opacity transitions, avoiding entire document refreshes.",
              tag: "RENDER",
            },
            {
              step: "Cart State Controller",
              detail: "Adds items, updates quantities, and calculates line-item totals and order taxes in real-time.",
              tag: "CART",
            },
          ],
        },
      },
      {
        pageNumber: 4,
        chapterNumber: "04",
        chapterTitle: "Implementation & Web Standards",
        content: {
          heading: "Pure Web Standards Implementation",
          subheading: "CODE DISCIPLINE",
          techStackDetailed: [
            { name: "Semantic HTML5", role: "Clean document structure utilizing section, article, header, and dialog tags", category: "Markup" },
            { name: "CSS3 Grid & Flexbox", role: "Responsive multi-column layouts adapting smoothly from mobile to desktop", category: "Styling" },
            { name: "JavaScript (ES6)", role: "Event listeners, array methods (filter, map, reduce), and cart state", category: "Logic" },
          ],
          metrics: [
            { label: "External Dependencies", value: "0", context: "Built entirely on native web APIs" },
            { label: "Browser Compatibility", value: "Universal", context: "Runs on all standard modern mobile & desktop browsers" },
            { label: "Cart Persistence", value: "Real-Time", context: "Calculates sub-totals and order summaries synchronously" },
          ],
        },
      },
      {
        pageNumber: 5,
        chapterNumber: "05",
        chapterTitle: "User Experience & Shopping Flow",
        content: {
          heading: "Interactive Shopping Experience",
          subheading: "USER EXPERIENCE FEATURES",
          paragraphs: [
            "Designed with modern aesthetic principles: clean card shadows, high-contrast product typography, and focused checkout modals.",
          ],
          keyPoints: [
            { label: "Catalogue Navigation", text: "Instant switching between apparel categories with zero lag." },
            { label: "Dynamic Cart Counter", text: "Header badge increments and updates sub-total on every add-to-cart action." },
            { label: "Detail Modal Overlays", text: "Modal dialogue allows inspecting item details and sizing without leaving page flow." },
            { label: "Responsive Checkout Summary", text: "Clear overview of selected items, itemized quantities, and order finalization." },
          ],
        },
      },
      {
        pageNumber: 6,
        chapterNumber: "06",
        chapterTitle: "Results, Verification & Repository",
        content: {
          heading: "Project Verification & Repository",
          subheading: "SOURCE CODE ACCESS",
          paragraphs: [
            "The project is open source and hosted for review on GitHub as part of Internet & Web Programming coursework.",
          ],
          metrics: [
            { label: "Repository Status", value: "PUBLIC", context: "Available for source code inspection on GitHub" },
            { label: "Discipline", value: "Frontend Engineering", context: "Exemplifies clean DOM manipulation fundamentals" },
          ],
          links: [
            { label: "Inspect Source Code (GitHub)", url: "https://github.com/P-PRAKASH-01/IWP", type: "github" },
          ],
        },
      },
    ],
    specimen: {
      folioLeft: "FOLIO 10 • SPECIMEN PLATE",
      artifactTitle: "ARTIFACT 05 // MINIMALIST COMMERCE SPECIMEN",
      paperType: "160 GSM Archival\nCOLD PRESSED LINEN",
      image: "/assets/projects/specimen-garments.jpg",
      figureCaption: "• Fig. 5.1 — Editorial Lookbook & Apparel Pipeline",
      gamut: "NEUTRAL • MONOCHROME DCI-P3",
      quote: "“Simplicity in retail is the ultimate luxury: letting the craftsmanship command attention.”",
      quoteSource: "— Atelier Minimalist Manifesto, Volume V: Monochromatic Form",
      chromatics: [
        { name: "Charcoal", hex: "#1E1E24" },
        { name: "Ecru Wool", hex: "#D9D2C9" },
        { name: "Cold Linen", hex: "#F7F5F0" },
      ],
      editionStamp: "ED. 01 / 2024",
      badge: "COMMERCE ARCHITECTURE",
      badgeBg: "#4A463F",
      badgeText: "#FFFFFF",
      folioRight: "FOLIO 11 • MONOGRAPH",
      phase: "FRONTEND ENGINEERING • PHASE I",
      monographTitle: "Editorial High-Throughput Commerce",
      role: { title: "Frontend Engineer", subtitle: "Responsive Catalog & Checkout" },
      cycle: { duration: "2 Months", subtitle: "Prototype to Deploy" },
      metric: { value: "100%", label: "Fluid Responsive Viewport" },
      dropCap: "M",
      monographParagraphs: [
        "odern e-commerce storefronts are all too often polluted by flashing banners, intrusive popups, and visual noise that detract from product appreciation. This garments storefront was engineered as an editorial digital monograph, treating apparel collections with the visual restraint of a physical fashion periodical.",
        "Built with clean semantic markup, fluid typography scales, and modular cart interaction, the interface ensures frictionless navigation across desktop and mobile viewports. Every layout grid emphasizes whitespace, allowing material textures and garment silhouettes to shine.",
      ],
      tags: ["HTML5 / ES6+", "CSS3 Grid", "Responsive Catalog", "Modular Basket"],
      readingDuration: "5 min reading duration",
    },
  },
];

// Repository-grounded copy for the magazine pages. Keep these descriptions tied
// to the current public codebases rather than performance claims or mock metrics.
const CASE_STUDIES: Record<string, {
  name?: string;
  tagline: string;
  description: string;
  tech: string[];
  summary: ProjectBook["summary"];
  architecture: { step: string; detail: string; tag: string }[];
  stack: { name: string; role: string; category: string }[];
  metrics: { label: string; value: string; context: string }[];
  features: { label: string; text: string }[];
  monograph: [string, string];
  tags: string[];
}> = {
  prephub: {
    tagline: "A career preparation workspace for students and early-career job seekers",
    description: "A React application that combines job-description analysis, skill-gap tracking, company roadmaps, job search, and study resources in one career preparation workspace.",
    tech: ["React 19", "Vite 8", "Firebase", "Llama 3.1", "Adzuna API", "PWA"],
    summary: {
      problem: "Career preparation work is split across job descriptions, skill lists, company requirements, bookmarks, and study resources. PrepHub brings those activities into one application.",
      solution: "The app provides an AI-assisted job description analyzer, a skill tracker, company readiness roadmaps, an Adzuna-powered job board, saved opportunities, and curated learning resources.",
      architecture: "A React 19 and React Router client uses Firebase Authentication, modular API helpers for Hugging Face and Adzuna, and localStorage-backed persistence for selected user data. A service worker and manifest provide the PWA installation path.",
      implementation: "The repository separates route-level experiences under src/pages, authentication in src/context/AuthContext.jsx, external API clients in src/utils, and browser persistence behind src/utils/storage.js.",
      outcomes: "The public codebase documents the application, its setup requirements, and its major feature flows. Live AI, authentication, and job-search behavior depends on the corresponding Firebase and API credentials being configured.",
    },
    architecture: [
      { step: "Authenticate", detail: "Firebase Authentication gates the protected application routes and provides Google or email/password sign-in.", tag: "AUTH" },
      { step: "Analyze a role", detail: "The JD Analyzer sends a job description to the Hugging Face Router and compares extracted requirements with the candidate profile.", tag: "AI" },
      { step: "Track preparation", detail: "Skills and target-company requirements connect to the tracker, curated resources, and readiness dashboard.", tag: "STATE" },
      { step: "Explore opportunities", detail: "The Job Board queries Adzuna and stores saved opportunities through the local storage utility.", tag: "JOBS" },
    ],
    stack: [
      { name: "React 19 + Vite 8", role: "Single-page application and development/build tooling.", category: "Frontend" },
      { name: "Firebase Auth", role: "Google OAuth and email/password identity for protected routes.", category: "Identity" },
      { name: "Hugging Face Router", role: "Llama 3.1 based extraction of competencies from job descriptions.", category: "AI API" },
      { name: "Adzuna API", role: "External job-search integration used by the opportunity explorer.", category: "Jobs API" },
      { name: "localStorage + PWA", role: "Browser-side persistence plus manifest and service-worker install support.", category: "Client" },
    ],
    metrics: [
      { label: "Main workflows", value: "6+", context: "Dashboard, JD analysis, skills, companies, jobs, resources and profile." },
      { label: "External services", value: "3", context: "Firebase, Hugging Face Router and Adzuna integrations." },
      { label: "Offline/install shell", value: "PWA", context: "Manifest and service worker are included in the repository." },
    ],
    features: [
      { label: "Job description analysis", text: "Extracts role competencies and computes profile alignment, with missing skills available to sync into tracking." },
      { label: "Skill and company tracking", text: "Records competency status and compares skills with requirements for target employers." },
      { label: "Opportunity board", text: "Searches Adzuna listings and lets users bookmark opportunities for follow-up." },
      { label: "Resources and PWA", text: "Surfaces curated study links and includes the manifest/service-worker files for install support." },
    ],
    monograph: ["PrepHub brings job-description analysis, competency tracking, employer roadmaps, job discovery, and learning resources into one React application. Its pages are organized by workflow, while shared utilities handle AI requests, job search, and browser persistence.", "The repository also includes Firebase authentication, protected routes, and PWA manifest/service-worker files. The external integrations are configurable: Firebase, Hugging Face, and Adzuna credentials are required for the corresponding services to work."],
    tags: ["React 19", "Firebase Auth", "Hugging Face", "Adzuna", "PWA"],
  },
  "engine-twin": {
    name: "Engine Twin for MALE UAVs",
    tagline: "Simulation-first health monitoring for aero-piston engines",
    description: "A research digital twin for aero-piston engines, built around synthetic flight telemetry, health indices, fault classification, and a cockpit interface.",
    tech: ["Python", "FastAPI", "React", "TypeScript", "scikit-learn", "Synthetic telemetry"],
    summary: {
      problem: "Engine health monitoring needs operating-condition context and repeatable fault scenarios. This repository develops a simulation-first research workflow for aero-piston engines used in MALE UAVs.",
      solution: "The active v0.2 system generates synthetic engine telemetry and combines health indices with fault-classification research, documentation, a backend workspace, and a React cockpit frontend.",
      architecture: "The repository separates synthetic data generation under Engine/v0.2, consolidated research models under models, a FastAPI backend, a React/Vite/TypeScript cockpit, and technical contracts/docs.",
      implementation: "The documented v0.2 dataset contains 960 synthetic flight scenarios across 30 engines. EHI and SDQI summarize health/sensor-quality signals, and classifiers cover normal operation plus seven sensor or engine fault classes.",
      outcomes: "The README explicitly describes this as simulation-first R&D: the data is synthetic and does not establish physical-engine validation, flight certification, or production remaining-useful-life clearance.",
    },
    architecture: [
      { step: "Generate scenarios", detail: "Engine/v0.2 produces synthetic aero-piston telemetry; the dataset specification describes 960 scenarios across 30 engines.", tag: "DATA" },
      { step: "Calculate health", detail: "The health formulation uses Engine Health Index and Sensor Data Quality Index to summarize operating and sensor condition.", tag: "EHI / SDQI" },
      { step: "Classify faults", detail: "Model artifacts support scenario-held-out and engine-held-out classification across normal and fault conditions.", tag: "ML" },
      { step: "Present cockpit", detail: "A React + Vite + TypeScript frontend is paired with a FastAPI backend workspace and documented REST/WebSocket contract.", tag: "APP" },
    ],
    stack: [
      { name: "Python", role: "Simulation, dataset generation, model pipeline, and backend ecosystem.", category: "Core" },
      { name: "scikit-learn", role: "Documented Random Forest classifiers for held-out scenario/engine evaluation.", category: "ML" },
      { name: "FastAPI", role: "Backend workspace for health and prediction API surfaces.", category: "Backend" },
      { name: "React + TypeScript", role: "Vite cockpit frontend for telemetry and digital-twin visualization.", category: "Frontend" },
      { name: "Synthetic dataset v0.2", role: "960 simulated scenarios across 30 engines; not physical aircraft telemetry.", category: "Data" },
    ],
    metrics: [
      { label: "Synthetic scenarios", value: "960", context: "Dataset v0.2, generated for simulation-first research." },
      { label: "Simulated engines", value: "30", context: "Scenario pool documented in the repository README." },
      { label: "Health indices", value: "2", context: "EHI and SDQI are the central v0.2 monitoring indices." },
    ],
    features: [
      { label: "Engine Health Index", text: "Summarizes deviation in engine channels against an operating-condition-aware healthy surrogate." },
      { label: "Sensor quality", text: "SDQI tracks sensor reliability concerns alongside engine-health signals." },
      { label: "Fault classes", text: "Classification includes normal, combustion irregularity, thermal abnormality, efficiency degradation, and sensor bias/drift/stuck/dropout." },
      { label: "Research boundary", text: "All current telemetry is synthetic; the README disclaims physical-engine and certification validation." },
    ],
    monograph: ["Engine Twin is a simulation-first digital-twin research project for aero-piston engines in MALE UAVs. Its active v0.2 workspace generates synthetic flight scenarios and organizes health-index formulation, held-out fault-classification models, backend APIs, and a cockpit frontend.", "The repository documents 960 scenarios across 30 simulated engines and health indices for engine condition and sensor data quality. It clearly limits the claims: the synthetic results are not validation on physical engines, airworthiness certification, or production RUL clearance."],
    tags: ["Aero-piston", "Synthetic data", "EHI / SDQI", "FastAPI", "React + TypeScript"],
  },
  "farmer-pest": {
    tagline: "Two-stage tomato leaf disease inference API with multilingual advice",
    description: "A Flask image-inference service that checks whether a tomato leaf is healthy, classifies one of nine disease categories, and returns advice in English, Hindi, or Tamil.",
    tech: ["Python", "Flask", "TensorFlow / Keras", "MobileNet", "NumPy"],
    summary: {
      problem: "A user needs a simple way to submit a plant image and receive a disease label with understandable guidance, without exposing model-specific output handling to the client.",
      solution: "The Flask service accepts an uploaded image, runs a healthy-versus-diseased model, then applies a second classifier to choose among nine tomato disease labels and returns translated advice.",
      architecture: "The /predict endpoint validates a multipart upload, converts it to RGB, resizes it to 224×224, normalizes pixel values, then routes inference through stage-one and stage-two Keras models.",
      implementation: "server.py loads MobileNet stage models from the model directory, applies NumPy preprocessing, maps class names to advice translations, and exposes Flask-CORS for browser clients.",
      outcomes: "The checked-in backend establishes the inference contract and response logic. The repository source does not substantiate the portfolio's previous accuracy, latency, dataset-size, or production-deployment claims.",
    },
    architecture: [
      { step: "Receive image", detail: "POST /predict expects a multipart form field named file and accepts an optional lang value.", tag: "HTTP" },
      { step: "Preprocess", detail: "Pillow converts the uploaded image to RGB, resizes to 224×224, scales pixels to 0–1, and creates a batch dimension.", tag: "IMAGE" },
      { step: "Stage one", detail: "MobileNet stage one separates healthy leaves from diseased leaves before disease-specific classification.", tag: "HEALTH" },
      { step: "Stage two + advice", detail: "A second model selects one of nine configured tomato disease classes and returns English, Hindi, or Tamil advice.", tag: "RESULT" },
    ],
    stack: [
      { name: "Flask", role: "Small HTTP service exposing the image prediction endpoint.", category: "API" },
      { name: "TensorFlow / Keras", role: "Loads two checked-in MobileNet model files for the staged prediction flow.", category: "Inference" },
      { name: "Pillow + NumPy", role: "Image conversion, resizing, normalization, and batch formatting.", category: "Preprocessing" },
      { name: "Flask-CORS", role: "Enables cross-origin browser clients to call the Flask endpoint.", category: "Integration" },
    ],
    metrics: [
      { label: "Inference stages", value: "2", context: "Healthy/diseased gate followed by disease classification." },
      { label: "Disease classes", value: "9", context: "Configured tomato disease labels in server.py." },
      { label: "Advice languages", value: "3", context: "English, Hindi, and Tamil response dictionaries." },
    ],
    features: [
      { label: "Upload validation", text: "Returns a clear client error when the file field is missing or no file is selected." },
      { label: "Two-stage model", text: "Runs disease-specific classification only after the healthy-versus-diseased prediction." },
      { label: "Localized response", text: "Returns translated disease names and advice for English, Hindi, and Tamil." },
      { label: "JSON API contract", text: "Provides prediction/error JSON suitable for a separate web client." },
    ],
    monograph: ["The repository implements a Flask image-inference API for tomato leaf health assessment. Uploaded images are converted to RGB, resized to 224×224, normalized, and passed through a two-stage MobileNet flow: first healthy versus diseased, then one of nine disease categories.", "The server maps each result to practical text in English, Hindi, or Tamil and returns it as JSON. This describes the checked-in backend contract; the portfolio should avoid implying model accuracy, response latency, or an integrated live deployment unless those are separately measured and verified."],
    tags: ["Flask API", "MobileNet", "Two-stage inference", "Tomato diseases", "EN / HI / TA"],
  },
  "weather-comfort": {
    tagline: "Trip-weather comfort scoring from forecast data and place search",
    description: "A Flask web application that geocodes a place and evaluates forecast days using temperature, precipitation probability, humidity, and wind to help plan a trip.",
    tech: ["Python", "Flask", "Open-Meteo", "Nominatim", "HTML / CSS / JS"],
    summary: {
      problem: "Planning a trip from a single temperature reading misses rain, humidity, and wind conditions that affect outdoor comfort across the selected dates.",
      solution: "The app accepts a place and date range, geocodes the place, fetches forecast data, computes a daily comfort score and verdict, then summarizes the trip with tips.",
      architecture: "A Flask backend serves the application and API endpoints, calls Nominatim for place search and Open-Meteo for forecast data, calculates daily scores, and returns JSON consumed by the static frontend.",
      implementation: "The daily scoring path combines average daily high/low temperature, precipitation probability, humidity, and maximum wind speed converted from km/h to m/s; days are labeled Comfortable, Mixed, or Not comfortable.",
      outcomes: "The repository contains a workingly scoped web-app/API implementation and user-facing forecast summary logic. The project README gives a concise purpose statement; its current code is the source for the integration details described here.",
    },
    architecture: [
      { step: "Search a place", detail: "The /api/geocode endpoint queries Nominatim and returns a display name with latitude and longitude.", tag: "GEOCODE" },
      { step: "Request forecast", detail: "The Flask backend sends coordinates and the selected date range to Open-Meteo's forecast API.", tag: "FORECAST" },
      { step: "Score each day", detail: "Daily high/low temperature, precipitation probability, humidity, and wind feed the comfort-score function.", tag: "SCORE" },
      { step: "Summarize trip", detail: "The response includes an overall verdict, friendly message, score, tips, and per-day forecast rows.", tag: "RESULT" },
    ],
    stack: [
      { name: "Python + Flask", role: "Backend web app and JSON endpoints for geocoding/forecast workflows.", category: "Backend" },
      { name: "Open-Meteo", role: "Supplies forecast fields used for the selected place and date range.", category: "Weather API" },
      { name: "Nominatim", role: "Converts a typed place query into coordinates and a display name.", category: "Geocoding" },
      { name: "Static HTML / CSS / JS", role: "Browser interface served from the repository's static directory.", category: "Frontend" },
      { name: "Requests", role: "Makes server-side HTTP requests to the external data services.", category: "Networking" },
    ],
    metrics: [
      { label: "Weather factors", value: "4", context: "Temperature, precipitation probability, humidity, and wind." },
      { label: "Daily verdicts", value: "3", context: "Comfortable, Mixed, or Not comfortable." },
      { label: "External data services", value: "2", context: "Open-Meteo forecast and Nominatim geocoding." },
    ],
    features: [
      { label: "Place lookup", text: "Resolves a place query into coordinates using Nominatim." },
      { label: "Date-range forecast", text: "Requests daily weather fields from Open-Meteo for trip planning." },
      { label: "Comfort score", text: "Combines weather conditions into daily and overall verdicts." },
      { label: "Planning tips", text: "Returns daily results, an overall message, and tips in the API response." },
    ],
    monograph: ["Weather Comfort Checker is a Flask application for judging trip conditions over a selected date range. Place names are resolved through Nominatim, then Open-Meteo forecast data is used to calculate a score from temperature, rain probability, humidity, and wind.", "The response includes a trip-level verdict and message, tips, plus daily values and labels. This is a forecast-based planning aid; its score is an application heuristic, not an official meteorological or health advisory."],
    tags: ["Flask", "Open-Meteo", "Nominatim", "Trip planning", "Daily scoring"],
  },
  "garments-ecommerce": {
    name: "Sri Sai Garments Storefront",
    tagline: "A product catalogue and enquiry storefront with a protected admin workspace",
    description: "A React storefront for Sri Sai Garments with searchable product listings, WhatsApp enquiries, and an administrator workspace backed by Supabase.",
    tech: ["React 19", "React Router 7", "Vite 8", "Tailwind CSS 4", "Supabase"],
    summary: {
      problem: "The earlier catalogue relied on browser-local data and lacked a secure shared workflow for maintaining products and handling private customer enquiries.",
      solution: "The project provides public storefront pages and a protected administrator workspace for products, categories, banners, settings, and enquiries, while preserving WhatsApp ordering.",
      architecture: "React and React Router serve storefront and admin routes; service modules call Supabase Auth, PostgREST/PostgreSQL and Storage; database RLS policies control public and administrator access.",
      implementation: "Product, enquiry, and store operations are separated into src/services; authentication and store state use contexts; Supabase migrations define schema, constraints, RLS and Storage policies.",
      outcomes: "The repository documents a configured Supabase mode and a clearly labeled local preview fallback. Production persistence and admin access require project configuration and deployment setup.",
    },
    architecture: [
      { step: "Browse storefront", detail: "Public home, catalogue, product detail, about, and contact routes read public-facing product and store content.", tag: "STORE" },
      { step: "Manage catalogue", detail: "Admin routes support product publishing, gallery media, categories, banners, and store settings.", tag: "ADMIN" },
      { step: "Persist securely", detail: "Supabase Auth identifies administrators; PostgreSQL RLS and Storage policies enforce data-access boundaries.", tag: "DATA" },
      { step: "Handle enquiry", detail: "The contact workflow stores an enquiry first, then opens WhatsApp after a successful insert.", tag: "CONTACT" },
    ],
    stack: [
      { name: "React 19 + Router 7", role: "Storefront, product pages, admin workspace, and route navigation.", category: "Frontend" },
      { name: "Vite 8 + Tailwind 4", role: "Build/dev server and responsive utility-based styling.", category: "Tooling / UI" },
      { name: "Supabase Auth", role: "Email/password administrator sessions, role lookup, and password recovery.", category: "Identity" },
      { name: "Postgres + RLS", role: "Products, categories, enquiries, banners, settings, and database access policies.", category: "Data" },
      { name: "Supabase Storage", role: "Public catalogue image delivery with administrator-only writes.", category: "Media" },
    ],
    metrics: [
      { label: "Public routes", value: "5", context: "Home, catalogue, product detail, about, and contact." },
      { label: "Admin workflows", value: "6+", context: "Products, categories, enquiries, content, settings, and dashboard." },
      { label: "Access boundary", value: "RLS", context: "Database policies protect private enquiries and admin mutations." },
    ],
    features: [
      { label: "Public catalogue", text: "Search, filter, sort, view product details, and use wishlist or WhatsApp enquiry actions." },
      { label: "Admin product tools", text: "Create, edit, publish or draft products; organize categories and manage product images." },
      { label: "Private enquiries", text: "Persist customer enquiries and manage status, internal notes, filters, and CSV export as an administrator." },
      { label: "Store configuration", text: "Update banners, contact/about content, business settings, and SEO fields through admin screens." },
    ],
    monograph: ["Sri Sai Garments combines a public product catalogue with a protected store-administration workspace. The storefront supports product search/filter/sort, detail pages, wishlist behavior, WhatsApp ordering, and contact enquiries.", "React services connect to Supabase Auth, Postgres, and Storage. Database Row Level Security protects admin operations and private enquiry records; the repository also provides a local preview mode when Supabase is not configured."],
    tags: ["React 19", "Supabase", "Admin workspace", "RLS", "WhatsApp enquiries"],
  },
};

for (const book of PROJECT_BOOKS) {
  const study = CASE_STUDIES[book.id];
  if (!study) continue;
  book.name = study.name ?? book.name;
  book.tagline = study.tagline;
  book.description = study.description;
  book.tech = study.tech;
  book.summary = study.summary;
  book.pages[0].content = {
    heading: book.name,
    subheading: `${book.category.toUpperCase()} // REPOSITORY CASE STUDY`,
    abstract: study.description,
    keyPoints: [
      { label: "Repository", text: book.github.replace("https://github.com/", "") },
      { label: "Implementation", text: study.tech.slice(0, 4).join(" · ") },
    ],
  };
  book.pages[2].content = {
    heading: "Codebase Architecture & Data Flow",
    subheading: "IMPLEMENTED REPOSITORY STRUCTURE",
    paragraphs: [study.summary.architecture],
    architectureSteps: study.architecture,
  };
  book.pages[3].content = {
    heading: "Technologies in the Repository",
    subheading: "FRAMEWORKS, SERVICES & RUNTIME",
    techStackDetailed: study.stack,
    metrics: study.metrics,
  };
  book.pages[4].content = {
    heading: "Implemented Workflows",
    subheading: "FEATURES VERIFIED IN THE CODEBASE",
    paragraphs: [study.summary.solution],
    keyPoints: study.features,
  };
  book.pages[5].content = {
    heading: "Repository Notes & Project Boundaries",
    subheading: "WHAT THE CODEBASE DOCUMENTS",
    paragraphs: [study.summary.outcomes, `Implementation notes: ${study.summary.implementation}`],
    metrics: study.metrics,
    links: [{ label: "GitHub repository", url: book.github, type: "github" }],
  };
  if (book.specimen) {
    book.specimen.monographTitle = `${book.name}: Codebase Notes`;
    book.specimen.monographParagraphs = study.monograph;
    book.specimen.tags = study.tags;
    book.specimen.metric = study.metrics[0]
      ? { value: study.metrics[0].value, label: study.metrics[0].label }
      : { value: "CODE", label: "Repository study" };
    book.specimen.quote = "A project is best described by the code and behavior its repository actually contains.";
    book.specimen.quoteSource = "Repository review // Portfolio case study";
  }
}

// The GitHub projects were renamed; point portfolio actions at their canonical repositories.
const engineTwin = PROJECT_BOOKS.find((book) => book.id === "engine-twin");
if (engineTwin) engineTwin.github = "https://github.com/P-PRAKASH-01/Engine_Twin";
const garments = PROJECT_BOOKS.find((book) => book.id === "garments-ecommerce");
if (garments) garments.github = "https://github.com/P-PRAKASH-01/Sri-Sai-Garments";
