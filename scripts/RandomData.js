function generateRandomWorkshops(numWorkshops) {
  const workshopNames = [
    'Photography Basics',
    'Advanced Pottery',
    'Painting with Watercolors',
    'Creative Writing',
    'Web Design Fundamentals',
  ];
  const instructorNames = [
    'Alex Johnson',
    'Jamie Smith',
    'Chris Lee',
    'Morgan Taylor',
    'Jordan Banks',
  ];

  // Helper function to generate a random date within the next year
  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  // Helper function to generate a random boolean
  function randomBoolean() {
    return Math.random() < 0.5;
  }

  // Helper function to generate a random ID
  function generateRandomID() {
    return Math.floor(Math.random() * Date.now());
  }

  const workshops = [];

  for (let i = 0; i < numWorkshops; i++) {
    const workshop = {
      id: generateRandomID(), // Generate a random ID for each workshop
      workshopName:
        workshopNames[Math.floor(Math.random() * workshopNames.length)],
      instructorName:
        instructorNames[Math.floor(Math.random() * instructorNames.length)],
      date: randomDate(
        new Date(),
        new Date(new Date().setFullYear(new Date().getFullYear() + 1))
      ).toLocaleDateString(),
      isFavorite: randomBoolean(),
    };
    workshops.push(workshop);
  }

  return workshops;
}

// Generate an array of 5 random workshops
const randomWorkshops = generateRandomWorkshops(10);
const randomWorkshopsCarousel = generateRandomWorkshops(15);
console.log(randomWorkshops);
