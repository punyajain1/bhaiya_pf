export interface Project {
  title: string;
  slug: string;
  period: string;
  description: string;
  longDescription: string[];
  features: string[];
  technologies: string[];
  thumbnail?: string;
  images?: string[];
  links: {
    visit?: string;
    source?: string;
  };
}

export const projects: Project[] = [
  {
    title: "Pulse – AI Healthcare Assistant App",
    slug: "pulse",
    period: "April 2025 – Present",
    description: "An AI-powered mobile platform powering users to interact with a virtual doctor for symptom triage, diagnostics, medical report analysis and storage, and ordering medicines from nearby pharmacies via integrated APIs.",
    longDescription: [
      "Developed an AI-powered mobile platform powering users to interact with a virtual doctor for symptom triage, diagnostics, medical report analysis and storage, and ordering medicines from nearby pharmacies via integrated APIs."
    ],
    features: [
      "AI-powered virtual doctor consultation",
      "Symptom triage and diagnostics",
      "Medical report analysis and storage",
      "Medicine ordering from nearby pharmacies",
      "Integrated pharmacy APIs"
    ],
    technologies: ["React Native", "AI/ML", "API Integration", "Mobile Development"],
    thumbnail: "/thumbnails/Pulss.png",
    links: {
      visit: "",
      source: ""
    }
  },
  {
    title: "Thunder Wallet – Unified Digital Payments App",
    slug: "thunder-wallet",
    period: "October 2021 – January 2022",
    description: "A gas-less, non-custodial wallet with email-based accounts via Privy, unifying UPI, bank, and stablecoin payments, allowing global bill pay, dApp usage (Aave, Uniswap), and DeFi income—via a single mobile interface.",
    longDescription: [
      "Developed a gas-less, non-custodial wallet with email-based accounts via Privy, unifying UPI, bank, and stablecoin payments, allowing global bill pay, dApp usage (Aave, Uniswap), and DeFi income—via a single mobile interface.",
      "Won Best UI/UX Award for innovative design and user experience."
    ],
    features: [
      "Gas-less, non-custodial wallet",
      "Email-based account creation via Privy",
      "Unified UPI, bank, and stablecoin payments",
      "Global bill payment functionality",
      "dApp integration (Aave, Uniswap)",
      "DeFi income generation",
      "Single mobile interface"
    ],
    technologies: ["React Native", "Blockchain", "Privy", "Web3", "DeFi", "UPI Integration"],
    thumbnail: "/thumbnails/ThunderWallet.png",
    links: {
      visit: "",
      source: ""
    }
  }
];
