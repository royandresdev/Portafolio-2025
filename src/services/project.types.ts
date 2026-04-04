export interface Project {
  created_at: string;
  description: string;
  id: number;
  image: string;
  linkDemo: string;
  linkFigma: string | null;
  linkRepo: string;
  name: string;
  technologies: string[];
}
