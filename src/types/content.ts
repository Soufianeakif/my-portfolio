export type Language = 'eng' | 'fr';

export type Skill = {
  name: string;
  'level-eng': string;
  'level-fr': string;
  icon: string;
  yearsOfExperience: number;
};

export type Project = {
  id: number;
  name: string;
  'description-eng': string;
  'description-fr': string;
  logo: string;
  'link-github'?: string;
  'link-demo'?: string;
  link?: string;
  technologies: string[];
};

export type SocialLink = {
  platform: string;
  url: string;
};

export interface ContentType {
  header: {
    name: string;
    navigation: {
      'title-eng': string;
      'title-fr': string;
      path: string;
    }[];
  };
  hero: {
    'title-eng': string;
    'title-fr': string;
    'subtitle-eng': string;
    'subtitle-fr': string;
    'description-eng': string;
    'description-fr': string;
    cta: {
      text: string;
      link: string;
    }[];
  };
  skills: {
    'Frontend Development': Skill[];
    'Backend Development': Skill[];
    'DevOps & Tools': Skill[];
    'Design & Modeling': Skill[];
    'Methodologies': Skill[];
  };
  about: {
    'title-eng': string;
    'title-fr': string;
    'description-eng': string;
    'description-fr': string;
    image: string;
    'details-eng': string[];
    'details-fr': string[];
  };
  projects: Project[];
  footer: {
    socialLinks: SocialLink[];
    'copyright-eng': string;
    'copyright-fr': string;
  };
}
