export interface Event {
  id: number;
  type: 'upcoming' | 'past';
  title: string;
  date: string;
  location: string;
  description: string;
}

export const eventsData: Event[] = [
  {
    id: 1,
    type: 'upcoming',
    title: 'Annual Summer Picnic',
    date: 'Saturday, 16 August 2025',
    location: 'Heaton Park, Manchester',
    description: 'Join us for a day of fun, food, and family games at our annual summer picnic. A great opportunity to connect with relatives from across the UK.',
  },
  {
    id: 2,
    type: 'upcoming',
    title: 'Dashain & Tihar Celebration',
    date: 'Saturday, 18 October 2025',
    location: 'Community Hall, Birmingham',
    description: 'Celebrate our most important festivals with cultural performances, traditional food, and blessings from the elders.',
  },
  {
    id: 3,
    type: 'past',
    title: 'Charity Fundraiser for Nepal',
    date: 'Friday, 14 March 2025',
    location: 'Online Event',
    description: 'We successfully raised over £5,000 to support educational initiatives in schools in Baglung. Thank you to all who donated and participated.',
  },
  {
    id: 4,
    type: 'past',
    title: 'New Year Gathering 2025',
    date: 'Saturday, 4 January 2025',
    location: 'Everest Inn, London',
    description: 'We welcomed the new year with a wonderful dinner, sharing stories and resolutions for the year ahead. It was a fantastic start to 2025.',
  },
];
