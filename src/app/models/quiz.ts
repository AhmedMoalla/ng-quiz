import { Question } from './question';

export enum Difficulty {
    Easy = 'Easy',
    Intermediate = 'Intermediate',
    Hard = 'Hard'
}

export interface Quiz {
    id: string;
    title: string;
    iconUrl?: string;
    category?: string;
    description: string;
    questions: Question[];
    difficulty: Difficulty;
}
