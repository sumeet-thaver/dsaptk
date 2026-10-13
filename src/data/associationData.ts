export interface Objective {
  id: string;
  num: string;
  icon: string;
  title: string;
  text: string;
}

export interface HallOfFameItem {
  id: string;
  title: string;
  tag: string;
  tagType: 'primary' | 'secondary';
  description: string;
  image: string;
  year?: string;
  athlete?: string;
  record?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'swimming' | 'tournament';
  image: string;
  caption: string;
  date: string;
}

export interface NewsArticle {
  id: string;
  source: string;
  title: string;
  summary: string;
  date: string;
  edition: string;
  category: string;
  fullText: string;
  image?: string;
}

export interface OfficeBearer {
  id: string;
  name: string;
  designation: string;
  role: 'President' | 'Secretary' | 'Vice President' | 'Treasurer' | 'Technical' | 'Executive';
  phone?: string;
  email?: string;
  bio: string;
  experience: string;
}

export interface SwimEvent {
  id: string;
  code: string;
  title: string;
  session: string;
  time: string;
  category: 'Sub-Junior' | 'Junior' | 'Senior';
  gender: 'Boys' | 'Girls' | 'Mixed';
  distance: string;
  stroke: string;
  status: 'Open' | 'Qualifying' | 'Finals';
  recordTime: string;
  holder: string;
}

export interface OfficialNotice {
  id: string;
  refNo: string;
  title: string;
  date: string;
  type: 'Circular' | 'Eligibility' | 'Anti-Doping' | 'Affiliation' | 'Trials';
  description: string;
  attachment: string;
  important: boolean;
}

export interface DistrictRecord {
  event: string;
  category: string;
  swimmer: string;
  club: string;
  recordTime: string;
  year: string;
}

// 8 Verbatim Objectives matching charter
export const OBJECTIVES: Objective[] = [
  {
    id: 'obj-1',
    num: '01',
    icon: 'fitness_center',
    title: 'Physical Culture',
    text: 'To organize and promote physical culture in general and by mean of swimming in particular.'
  },
  {
    id: 'obj-2',
    num: '02',
    icon: 'workspace_premium',
    title: 'Standardize Swimming',
    text: 'To organize, promote, encourage, control, popularize and standardize Swimming in the highest tradition of amateur sports.'
  },
  {
    id: 'obj-3',
    num: '03',
    icon: 'trophy',
    title: 'Representation & Participation',
    text: 'To secure and arrange the representation and participation of district the State and other Championships and Tournaments.'
  },
  {
    id: 'obj-4',
    num: '04',
    icon: 'sports',
    title: 'Coaching Schemes',
    text: 'To run coaching schemes.'
  },
  {
    id: 'obj-5',
    num: '05',
    icon: 'volunteer_activism',
    title: 'Financial Assistance',
    text: 'To give and receive financial assistance.'
  },
  {
    id: 'obj-6',
    num: '06',
    icon: 'domain_add',
    title: 'Affiliation of Units',
    text: 'To register and affiliate various units/clubs/institutes in the District.'
  },
  {
    id: 'obj-7',
    num: '07',
    icon: 'hub',
    title: 'Liaison & Communication',
    text: 'To act as liaison and communicating channel between itself, its units/clubs/institutes and other sports organization and the Government.'
  },
  {
    id: 'obj-8',
    num: '08',
    icon: 'military_tech',
    title: 'Mission Fulfillment',
    text: 'To do all other things which may be necessary to promote and organise swimming to achieve its aims and objectives.'
  }
];

// Hall of Fame highlights with genuine photos
export const HALL_OF_FAME_HIGHLIGHTS: HallOfFameItem[] = [
  {
    id: 'hof-1',
    title: 'Association Leadership & Mentors',
    tag: 'Official Delegation',
    tagType: 'primary',
    description: 'District technical team and certified coaches spearheading grassroots swim development.',
    image: 'https://dsaptk.org/images/hall_of_fame_1.png',
    year: '2026',
    athlete: 'Technical Delegation'
  },
  {
    id: 'hof-2',
    title: 'District Championship Trophy Ceremony',
    tag: 'Championship Podium',
    tagType: 'secondary',
    description: 'Felicitation of district record holders and trophy honorees at Municipal Pool Lamini.',
    image: 'https://dsaptk.org/images/hall_of_fame_2.png',
    year: '2025',
    athlete: 'Pathankot Aquatics Contingent'
  },
  {
    id: 'hof-3',
    title: 'Youth Swimmer Felicitation',
    tag: 'Athlete Honor',
    tagType: 'primary',
    description: 'Recognizing standout individual stroke split performances in Punjab state trials.',
    image: 'https://dsaptk.org/images/hall_of_fame_4.png',
    year: '2026',
    athlete: 'Junior State Qualifier'
  },
  {
    id: 'hof-4',
    title: 'State Championship Delegation',
    tag: 'Punjab Aquatics',
    tagType: 'secondary',
    description: 'Special delegation representing Pathankot in state level swimming heats.',
    image: 'https://dsaptk.org/images/hall_of_fame_5.png',
    year: '2025',
    athlete: 'District Squad'
  },
  {
    id: 'hof-5',
    title: 'National Games Record Recognition',
    tag: 'Honor Roll',
    tagType: 'primary',
    description: 'Athletes awarded certificates of merit for exemplary sportsmanship.',
    image: 'https://dsaptk.org/images/hall_of_fame_6.png',
    year: '2026',
    athlete: 'National Trials Qualifiers'
  }
];

// Media Gallery 8 Items
export const MEDIA_GALLERY: GalleryItem[] = [
  {
    id: 'med-1',
    title: 'Poolside Stroke Conditioning',
    category: 'swimming',
    image: 'https://dsaptk.org/images/media-1.jpeg',
    caption: 'Swimmers in active stroke preparation and start mechanics at Lamini Municipal Pool.',
    date: 'August 2026'
  },
  {
    id: 'med-2',
    title: '37th National Games Punjab Squad',
    category: 'tournament',
    image: 'https://dsaptk.org/images/media-5.jpeg',
    caption: 'Punjab Swimming contingent proudly carrying the banner at the National Games.',
    date: 'October 2025'
  },
  {
    id: 'med-3',
    title: 'National Games Delegation',
    category: 'tournament',
    image: 'https://dsaptk.org/images/media-4.jpeg',
    caption: 'Official Pathankot representatives on deck during the National Aquatics meet in Goa.',
    date: 'November 2025'
  },
  {
    id: 'med-4',
    title: 'Get Set Goa Championship Trials',
    category: 'tournament',
    image: 'https://dsaptk.org/images/media-3.jpeg',
    caption: 'District swimmers and coaching faculty in the marshalling arena at Goa trials.',
    date: 'November 2025'
  },
  {
    id: 'med-5',
    title: 'Lamini Aquatics Center Facility',
    category: 'swimming',
    image: 'https://dsaptk.org/images/pool.png',
    caption: 'Crystal-clear 50m racing waters at Municipal Swimming Pool, Lamini, Pathankot.',
    date: 'Season 2026'
  },
  {
    id: 'med-6',
    title: 'District Champions Team Felicitation',
    category: 'tournament',
    image: 'https://dsaptk.org/images/media-6.jpeg',
    caption: 'Trophy ceremony honoring championship winning squad with district dignitaries.',
    date: 'September 2025'
  },
  {
    id: 'med-7',
    title: 'Junior Swimmers Mentorship',
    category: 'swimming',
    image: 'https://dsaptk.org/images/media-8.jpeg',
    caption: 'Grassroots training clinic cultivating stroke mechanics and dive discipline in junior athletes.',
    date: 'July 2026'
  },
  {
    id: 'med-8',
    title: 'Punjab State Aquatic Trials',
    category: 'tournament',
    image: 'https://dsaptk.org/images/image1-22-9-26.jpeg',
    caption: 'Felicitation of medalists in the Punjab State Aquatic qualifying trials.',
    date: 'August 2026'
  }
];

// Press & News
export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    source: 'Dainik Times / Local Daily',
    title: 'District Swimmers Shine in State Tournament Trials',
    summary: 'Special press release highlighting Pathankot athletes winning laurels across 50M and 100M freestyle events.',
    date: '10 September 2026',
    edition: 'District Edition',
    category: 'State Trials',
    image: 'https://dsaptk.org/images/pathankot-new.png',
    fullText: 'Pathankot district witnessed remarkable athletic achievements at the recent Punjab State Aquatic Trials. Swimmers groomed at the Municipal Swimming Pool Lamini swept podium honors in freestyle sprint events, clocking personal best times under the guidance of certified coaches from PDSA. The executive committee extended heartfelt commendations to the coaching staff and parents for fostering high sporting ethics.'
  },
  {
    id: 'news-2',
    source: 'Punjab Kesari Sports',
    title: 'Lamini Municipal Pool Hosts District Aquatics Meet',
    summary: 'Coverage of comprehensive training camps, referee delegations, and young prodigies preparing for National Games.',
    date: '28 August 2026',
    edition: 'State Sports Desk',
    category: 'Facility & Meet',
    image: 'https://dsaptk.org/images/pathankot-new2.png',
    fullText: 'The historic Lamini Municipal Swimming Pool in Pathankot served as the battleground for over 180 competitive swimmers participating in the pre-state qualifying meet. Officials highlighted the facility’s vintage heritage, maintained impeccably since 1980 with modern automated water filtration and anti-wave racing lane ropes.'
  },
  {
    id: 'news-3',
    source: 'The Tribune Sports',
    title: 'PDSA Announces Intensive Summer Aquatic Coaching Schemes',
    summary: 'Annual grassroots coaching program inaugurated with safety certifications and stroke workshops for over 250 youth.',
    date: '15 June 2026',
    edition: 'Regional Edition',
    category: 'Grassroots Program',
    image: 'https://dsaptk.org/images/blog-02.jpg',
    fullText: 'In accordance with Article 04 of its charter, the Pathankot District Swimming Association inaugurated its flagship summer coaching camp at Municipal Pool Lamini. The camp focuses on water safety, introductory stroke mechanics, and talent identification for competitive age-group divisions.'
  },
  {
    id: 'news-4',
    source: 'State Aquatics Bulletin',
    title: 'Pathankot Aquatic Delegation Receives National Championship Honors',
    summary: 'Recognition ceremony held at Municipal Pool honoring outstanding junior and senior swimmers selected for Punjab contingent.',
    date: '22 July 2026',
    edition: 'State Edition',
    category: 'Championship',
    image: 'https://dsaptk.org/images/blog-3.jpg',
    fullText: 'President Deepak Kumar and General Secretary Raman Mahajan felicitated the youth contingent representing Pathankot. The coaching team reported unprecedented sprint times in 50m and 100m heats.'
  }
];

// Office Bearers
export const OFFICE_BEARERS: OfficeBearer[] = [
  {
    id: 'ob-1',
    name: 'Sh. Deepak Kumar',
    designation: 'President',
    role: 'President',
    phone: '+91 98721 03430',
    email: 'president@dsaptk.org',
    bio: 'Guiding the administrative and sports development vision of PDSA for over a decade. Dedicated to expanding Olympic aquatic opportunities for Pathankot youth.',
    experience: 'Over 20 years in Punjab state sports administration'
  },
  {
    id: 'ob-2',
    name: 'Adv. Raman Mahajan',
    designation: 'General Secretary',
    role: 'Secretary',
    phone: '+91 98150 12345',
    email: 'secretary@dsaptk.org',
    bio: 'Overseeing official charters, affiliations with Punjab Swimming Association & Swimming Federation of India, and legal governance.',
    experience: 'Legal consultant and state aquatics referee'
  },
  {
    id: 'ob-3',
    name: 'Sh. Sanjeev Sharma',
    designation: 'Senior Vice President',
    role: 'Vice President',
    phone: '+91 98722 54321',
    bio: 'Responsible for facility liaison with the Municipal Corporation and inter-district tournament logistics.',
    experience: 'Former inter-university aquatic captain'
  },
  {
    id: 'ob-4',
    name: 'Sh. Rajesh Vohra',
    designation: 'Treasurer',
    role: 'Treasurer',
    phone: '+91 94170 98765',
    email: 'treasurer@dsaptk.org',
    bio: 'Managing audited financial operations, equipment procurement, and scholarship grants for underprivileged swimmers.',
    experience: 'Chartered financial specialist and sports philanthropist'
  },
  {
    id: 'ob-5',
    name: 'Coach Harpreet Singh',
    designation: 'Chief Technical Director & Head Coach',
    role: 'Technical',
    phone: '+91 98888 77665',
    email: 'coaching@dsaptk.org',
    bio: 'NIS Patiala certified coach leading morning and evening competitive batches, stroke technique analysis, and state team trials.',
    experience: '15+ years coaching national medalists'
  },
  {
    id: 'ob-6',
    name: 'Sh. Kuldeep Verma',
    designation: 'Joint Secretary (Competitions)',
    role: 'Executive',
    bio: 'Managing meet management systems, electronic touchpads, lane allocations, and judge rosters during district championships.',
    experience: 'Certified FINA Level 1 Technical Official'
  }
];

// Meet Schedule & Event Roster
export const MEET_SCHEDULE: SwimEvent[] = [
  {
    id: 'evt-1',
    code: 'EVT-101',
    title: '50m Freestyle Sprint Heats',
    session: 'Morning (08:30 HRS)',
    time: '08:30 AM',
    category: 'Sub-Junior',
    gender: 'Boys',
    distance: '50m',
    stroke: 'Freestyle',
    status: 'Open',
    recordTime: '28.45s',
    holder: 'Aarav Mahajan (2025)'
  },
  {
    id: 'evt-2',
    code: 'EVT-102',
    title: '50m Freestyle Sprint Heats',
    session: 'Morning (09:00 HRS)',
    time: '09:00 AM',
    category: 'Sub-Junior',
    gender: 'Girls',
    distance: '50m',
    stroke: 'Freestyle',
    status: 'Open',
    recordTime: '30.12s',
    holder: 'Simran Kaur (2025)'
  },
  {
    id: 'evt-3',
    code: 'EVT-103',
    title: '100m Breaststroke Preliminary',
    session: 'Morning (09:45 HRS)',
    time: '09:45 AM',
    category: 'Junior',
    gender: 'Boys',
    distance: '100m',
    stroke: 'Breaststroke',
    status: 'Qualifying',
    recordTime: '1:12.80s',
    holder: 'Rohan Sharma (2024)'
  },
  {
    id: 'evt-4',
    code: 'EVT-104',
    title: '100m Backstroke Preliminary',
    session: 'Morning (10:30 HRS)',
    time: '10:30 AM',
    category: 'Junior',
    gender: 'Girls',
    distance: '100m',
    stroke: 'Backstroke',
    status: 'Qualifying',
    recordTime: '1:16.40s',
    holder: 'Navneet Gill (2025)'
  },
  {
    id: 'evt-5',
    code: 'EVT-105',
    title: '200m Individual Medley (IM) Timed Finals',
    session: 'Afternoon (14:00 HRS)',
    time: '02:00 PM',
    category: 'Senior',
    gender: 'Boys',
    distance: '200m',
    stroke: 'Medley',
    status: 'Finals',
    recordTime: '2:18.90s',
    holder: 'Vikramjit Singh (2024)'
  },
  {
    id: 'evt-6',
    code: 'EVT-106',
    title: '4x50m Freestyle Club Relay Finals',
    session: 'Evening (16:30 HRS)',
    time: '04:30 PM',
    category: 'Senior',
    gender: 'Mixed',
    distance: '4x50m',
    stroke: 'Freestyle',
    status: 'Finals',
    recordTime: '1:49.20s',
    holder: 'Lamini Aquatics Club A (2025)'
  }
];

// Official Notices
export const OFFICIAL_NOTICES: OfficialNotice[] = [
  {
    id: 'not-1',
    refNo: 'PDSA/CIR/2026/08',
    title: 'Annual District Swimming Championship 2026-27 Entry Notification',
    date: '15 September 2026',
    type: 'Circular',
    description: 'All affiliated clubs, schools, and independent registered athletes are hereby invited to submit digital entries for the District Meet at Municipal Pool Lamini on 09 OCT, Friday.',
    attachment: 'Official_Meet_Circular_2026.pdf',
    important: true
  },
  {
    id: 'not-2',
    refNo: 'PDSA/ELIG/2026/04',
    title: 'Age Proof Verification & Punjab Swimming Association ID Mandatory Rule',
    date: '02 September 2026',
    type: 'Eligibility',
    description: 'Municipal Corporation birth certificates or DigiLocker Aadhaar cards must be produced during lane badge issuance. Cutoff date for Sub-Junior division is 01 January 2014.',
    attachment: 'Age_Division_Criteria_PDSA.pdf',
    important: true
  },
  {
    id: 'not-3',
    refNo: 'PDSA/SFI/2026/02',
    title: 'Anti-Doping & Prohibited Substances Compliance Bulletin',
    date: '18 August 2026',
    type: 'Anti-Doping',
    description: 'In accordance with NADA and Swimming Federation of India protocols, strict random sampling may be conducted for Senior event participants.',
    attachment: 'NADA_Aquatics_Code_2026.pdf',
    important: false
  },
  {
    id: 'not-4',
    refNo: 'PDSA/AFF/2026/11',
    title: 'Annual Club Affiliation Renewal & Lifeguard Safety Clearance',
    date: '10 July 2026',
    type: 'Affiliation',
    description: 'Private and institutional swimming pools seeking PDSA sanctioned event trials must renew their annual affiliation certificate with proof of certified life-guards.',
    attachment: 'Affiliation_Renewal_Form.pdf',
    important: false
  }
];

// District Records Archive
export const DISTRICT_RECORDS: DistrictRecord[] = [
  { event: '50m Freestyle', category: 'Senior Men', swimmer: 'Kavish Mahajan', club: 'Lamini Swimming Center', recordTime: '24.88s', year: '2025' },
  { event: '100m Freestyle', category: 'Senior Men', swimmer: 'Kavish Mahajan', club: 'Lamini Swimming Center', recordTime: '55.30s', year: '2025' },
  { event: '50m Freestyle', category: 'Senior Women', swimmer: 'Pooja Sharma', club: 'Model Town Aquatics', recordTime: '28.10s', year: '2024' },
  { event: '50m Butterfly', category: 'Junior Boys', swimmer: 'Harsh Vardhan', club: 'Pathankot Swim Club', recordTime: '27.42s', year: '2026' },
  { event: '100m Breaststroke', category: 'Senior Men', swimmer: 'Gurpreet Singh', club: 'Municipal Pool Lamini', recordTime: '1:09.60s', year: '2025' },
  { event: '100m Backstroke', category: 'Junior Girls', swimmer: 'Ananya Gupta', club: 'St. Paul’s Academy', recordTime: '1:14.25s', year: '2025' },
  { event: '200m Individual Medley', category: 'Senior Men', swimmer: 'Vikramjit Singh', club: 'Lamini Swimming Center', recordTime: '2:18.90s', year: '2024' }
];
