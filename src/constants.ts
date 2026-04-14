import { Tier, Update, FAQ } from "./types";

export const TIERS: Tier[] = [
  {
    name: "STARTER",
    minAmount: 5000,
    maxAmount: 25000,
    baseReturn: 10,
    features: ["10% base return", "Profit share bonus", "Regular updates"],
  },
  {
    name: "PARTNER",
    minAmount: 25001,
    maxAmount: 100000,
    baseReturn: 11,
    features: ["11% base return", "Profit share bonus", "Priority updates", "5% service discount"],
    popular: true,
  },
  {
    name: "CHAMPION",
    minAmount: 100001,
    baseReturn: 12,
    features: ["12% base return", "Profit share bonus", "Priority updates", "10% service discount", "Name on website", "Quarterly strategy call"],
  },
];

export const UPDATES: Update[] = [
  {
    id: "1",
    day: 12,
    title: "Hired 2nd technician",
    description: "Rajesh Kumar joined our team, increasing our daily capacity by 5-7 jobs.",
    date: "2026-04-01",
  },
  {
    id: "2",
    day: 15,
    title: "Completed 100 jobs milestone",
    description: "We've successfully served 100 customers since the expansion started.",
    date: "2026-04-04",
  },
  {
    id: "3",
    day: 18,
    title: "Stocked 50 AC spare parts",
    description: "Inventory expanded to reduce procurement delays for AC repairs.",
    date: "2026-04-07",
  },
];

export const FAQS: FAQ[] = [
  {
    question: "Is this legal?",
    answer: "Yes. This is a community-based business expansion model, not a deposit scheme. It is governed by a partnership deed and registered as a legal business entity.",
  },
  {
    question: "What if you don't make enough profit?",
    answer: "The guaranteed 8-12% base return is contractually backed by our existing business assets. The profit share is a bonus based on performance.",
  },
  {
    question: "How do I get my money back?",
    answer: "Returns are processed via bank transfer on day 46 of the cycle, directly to your registered bank account.",
  },
  {
    question: "Can I withdraw early?",
    answer: "Yes, early withdrawal is possible after 30 days with a 5% penalty on the principal amount.",
  },
  {
    question: "What is the minimum contribution?",
    answer: "The minimum contribution starts at ₹5,000 to keep it accessible for the local community.",
  },
  {
    question: "How are the funds used?",
    answer: "Funds are strictly used for hiring technicians, stocking high-demand spare parts, purchasing tools, and local marketing.",
  },
  {
    question: "How do I track my contribution?",
    answer: "Once registered, you'll get access to a personal dashboard showing your contribution, projected returns, and real-time business updates.",
  },
  {
    question: "Is my data secure?",
    answer: "We use industry-standard encryption and secure payment gateways to ensure your personal and financial data is protected.",
  },
];
