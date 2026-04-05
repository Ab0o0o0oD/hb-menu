export const RestaurantSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    'name': 'Hungry Birds Restaurant',
    '@id': 'https://hungry-birds.no',
    'url': 'https://hungry-birds.no',
    'telephone': '+4792244972',
    'image': 'https://hungry-birds.no/logo.png',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Storgata 53 D',
      'addressLocality': 'Oslo',
      'postalCode': '0182',
      'addressCountry': 'NO',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 59.913,
      'longitude': 10.757,
    },
    'servesCuisine': ['Syrian', 'Middle Eastern', 'Halal'],
    'menu': 'https://hungry-birds.no/menu',
    'acceptsReservations': 'false',
    'priceRange': '$$',
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '11:00',
        'closes': '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Saturday', 'Sunday'],
        'opens': '12:00',
        'closes': '22:00',
      },
    ],
    'sameAs': [
      'https://www.facebook.com/profile.php?id=100091118036830',
      'https://www.tiktok.com/@hungry.birds.rest3',
      'https://www.instagram.com/hung.rybirdsrestaurant/',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
