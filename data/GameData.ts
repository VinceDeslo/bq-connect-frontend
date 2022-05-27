export interface Game {
  Name?: string;
  Platform?: string;
  Year_of_release?: number;
  Genre?: string;
  Publisher?: string;
  Na_sales?: number;
  Eu_sales?: number;
  Jp_sales?: number;
  Other_sales?: number;
  Global_sales?: number;
  Critic_score?: null;
  Critic_count?: null;
  User_score?: null;
  User_count?: null;
  Developer?: null;
  Rating?: null;
}

export type GameFields = keyof Game