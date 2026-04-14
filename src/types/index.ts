export interface Contributor {
  id: string;
  name: string;
  avatar: string;
  amount: number;
  date: string;
}

export interface Update {
  id: string;
  day: number;
  title: string;
  description: string;
  date: string;
}

export interface Tier {
  name: string;
  minAmount: number;
  maxAmount?: number;
  baseReturn: number;
  features: string[];
  popular?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}
