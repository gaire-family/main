export interface Leader {
  id: number;
  name: string;
  title: string;
  tenure: string;
  quote: string;
  imageUrl: string;
}

export const leadershipData: Leader[] = [
  {
    id: 1,
    name: 'Ram Prasad Gaire',
    title: 'President',
    tenure: '2022 - Present',
    quote:
      'Leading with a vision to unite our community and preserve our rich cultural heritage for future generations.',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Shyam Kumar Gaire',
    title: 'Vice President',
    tenure: '2022 - Present',
    quote:
      'Dedicated to fostering a supportive network and creating opportunities for all members to thrive.',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Hari Prasad Gaire',
    title: 'Secretary',
    tenure: '2023 - Present',
    quote:
      'Ensuring transparent communication and efficient organization to serve our community effectively.',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  },
];

// Alternative image options if the above don't work:

export const alternativeImageOptions = {
  // Option 1: Lorem Picsum (random professional images)
  loremPicsum: [
    'https://picsum.photos/seed/leader1/400/400',
    'https://picsum.photos/seed/leader2/400/400',
    'https://picsum.photos/seed/leader3/400/400',
  ],

  // Option 2: UI Avatars (generated avatars based on initials)
  uiAvatars: [
    'https://ui-avatars.com/api/?name=Ram+Prasad+Gaire&size=400&background=0D8ABC&color=fff',
    'https://ui-avatars.com/api/?name=Shyam+Kumar+Gaire&size=400&background=2C3E50&color=fff',
    'https://ui-avatars.com/api/?name=Hari+Prasad+Gaire&size=400&background=27AE60&color=fff',
  ],

  // Option 3: Pravatar (random avatar service)
  pravatar: [
    'https://i.pravatar.cc/400?img=12',
    'https://i.pravatar.cc/400?img=13',
    'https://i.pravatar.cc/400?img=14',
  ],

  // Option 4: DiceBear avatars (customizable avatar API)
  dicebear: [
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Ram&backgroundColor=b6e3f4',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Shyam&backgroundColor=c0aede',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Hari&backgroundColor=d1d4f9',
  ],
};

// Example of how to use with fallback:
export const leadershipDataWithFallback: Leader[] = leadershipData.map(
  (leader, index) => ({
    ...leader,
    imageUrl: leader.imageUrl || alternativeImageOptions.uiAvatars[index],
  })
);
