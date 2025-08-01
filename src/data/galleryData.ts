export interface Photo {
  id: number;
  imageUrl: string;
  caption: string;
}

export interface Album {
  id: number;
  title: string;
  coverUrl: string;
  photos: Photo[];
}

export const galleryData: Album[] = [
  {
    id: 1,
    title: 'Annual Gathering 2024',
    coverUrl:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&h=600&q=80',
    photos: [
      {
        id: 1,
        imageUrl:
          'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&h=600&q=80',
        caption: 'Group photo at the start of the day.',
      },
      {
        id: 2,
        imageUrl:
          'https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=800&h=600&q=80',
        caption: 'Children enjoying the sack race.',
      },
      {
        id: 3,
        imageUrl:
          'https://images.pexels.com/photos/7686305/pexels-photo-7686305.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        caption: 'A delicious spread of traditional food.',
      },
      {
        id: 4,
        imageUrl:
          'https://images.pexels.com/photos/12919859/pexels-photo-12919859.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        caption: 'Traditional dance performance energizing the crowd.',
      },
      {
        id: 5,
        imageUrl:
          'https://images.pexels.com/photos/19510840/pexels-photo-19510840.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        caption: 'Families bonding during the outdoor picnic.',
      },
      {
        id: 6,
        imageUrl:
          'https://images.pexels.com/photos/7267589/pexels-photo-7267589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        caption: 'Winners receiving medals on the podium.',
      },
    ],
  },
  {
    id: 2,
    title: 'Diwali Celebration 2023',
    coverUrl:
      'https://images.pexels.com/photos/19106126/pexels-photo-19106126.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    photos: [
      {
        id: 1,
        imageUrl:
          'https://images.pexels.com/photos/7686305/pexels-photo-7686305.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        caption: 'Lighting the diyas to welcome the goddess Lakshmi.',
      },
      {
        id: 2,
        imageUrl:
          'https://images.pexels.com/photos/7686305/pexels-photo-7686305.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        caption: 'A vibrant rangoli at the entrance.',
      },
      {
        id: 3,
        imageUrl:
          'https://images.pexels.com/photos/19106126/pexels-photo-19106126.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        caption: 'Fireworks illuminating the Diwali night sky.',
      },
      {
        id: 4,
        imageUrl:
          'https://images.pexels.com/photos/8819258/pexels-photo-8819258.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        caption: 'Assorted festive sweets and offerings.',
      },
      {
        id: 5,
        imageUrl:
          'https://images.pexels.com/photos/7686305/pexels-photo-7686305.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        caption: 'Celebrating with sparklers and smiles.',
      },
    ],
  },
  {
    id: 3,
    title: 'Annual Gathering 2023',
    coverUrl:
      'https://images.pexels.com/photos/6995201/pexels-photo-6995201.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    photos: [
      {
        id: 1,
        imageUrl:
          'https://images.pexels.com/photos/6995201/pexels-photo-6995201.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        caption: 'Volunteers at the local food bank.',
      },
      {
        id: 2,
        imageUrl:
          'https://images.pexels.com/photos/6995201/pexels-photo-6995201.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        caption: 'Packing canned goods for distribution.',
      },
      {
        id: 3,
        imageUrl:
          'https://images.pexels.com/photos/6646862/pexels-photo-6646862.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        caption: 'Volunteer ready with a food-aid box.',
      },
      {
        id: 4,
        imageUrl:
          'https://images.pexels.com/photos/6995215/pexels-photo-6995215.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        caption: 'Team preparing care packages.',
      },
    ],
  },
];
