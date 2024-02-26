export const stateFacts = [
  "New York State is home to 58 species of wild orchids.",
  "The Adirondack Park is larger than Yellowstone, Everglades, Glacier, and Grand Canyon National Park combined.",
  "The first capital of the United States was New York City.",
  "New York City used to be called New Amsterdam.",
  "New York is the second-largest producer of maple syrup in the US.",
];

export const cityFacts = {
  albany: [
    "Herman Melville, author of Moby-Dick, attended Albany Academy and Albany Classical School. <a href='/sources.html'><sup>[1]</sup></a>",
    "Albany is the birthplace of the first plastic billiard ball. <a href='/sources.html' aria-label='go to page sources'><sup>[2]</sup></a>",
    "Albany is named for the Duke of Albany. <a href='/sources.html' aria-label='go to page sources'><sup>[3]</sup></a>",
  ],
  syracuse: [
    "Syracuse is home to one of the largest malls in the United States - Destiny USA <a href='/sources.html' aria-label='go to page sources'><sup>[4]</sup></a>",
    "National Geographic's Green Guide named Syracuse 'One of America's Top 20 Green Cities' <a href='/sources.html' aria-label='go to page sources'><sup>[5]</sup></a>",
    "Syracuse is home to The Great New York State Fair, which was started in 1841 <a href='/sources.html' aria-label='go to page sources'><sup>[6]</sup></a>",
  ],
  ["alexandria-bay"]: [
    "Alexandria Bay boasts the magnificent Boldt Castle, a construction initiated in 1900 on Heart Island by George C. Boldt. <a href='/sources.html' aria-label='go to page sources'><sup>[7]</sup></a>",
    "The Thousand Islands region, including Alexandria Bay, is famous for its unique 'Thousand Islands Dressing' <a href='/sources.html' aria-label='go to page sources'><sup>[8]</sup></a>",
    "Alexandria Bay is a key gateway to the Thousand Islands, a sprawling archipelago in the Saint Lawrence River",
  ],
};

// This function grabs a random index in an array, used to get a random fact
export const getRandomFact = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
