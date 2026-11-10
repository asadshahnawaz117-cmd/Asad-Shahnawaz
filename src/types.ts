export interface Specialty {
  id: string;
  name: string;
  category: 'medicine' | 'surgery' | 'emergency' | 'radiology';
  hours: number;
  casesCount: number;
  questionsCount: number;
  passRate: number;
  image: string;
  isPopular?: boolean;
  description: string;
  modules: string[];
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  hospital: string;
  city: string;
  specialty: string;
  avatar: string;
  quote: string;
}

export interface Testimonial {
  id: string;
  name: string;
  specialty: string;
  rank?: string;
  year: string;
  text: string;
  avatar: string;
  rating: number;
  hospital: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
