
import chocolateMilkshake from './Beverages/chocolate_milkshake.jpg';
import cocaCola from './Beverages/coca_cola.jpg';
import heinekenBeer from './Beverages/heineken_beer.jpg';
import lemonade from './Beverages/lemonade.jpg';

import lobsterThermidor from './Meal/lobster_thermidor.jpg';
import mashedPotato from './Meal/mashed-potato.jpg';
import onionRings from './Meal/onion_rings.jpg';
import sirloinSteak from './Meal/sirloin_steak.jpg';

import rawSalmon from './Special/raw_salmon.jpg';
import seaUrchin from './Special/sea_urchin.jpg';

import johnDoe from './Humans/john_doe.jpg';
import janeDoe from './Humans/jane_doe.jpg';
import davidHayter from './Humans/david_hayter.jpg';

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
const shortLoremIpsum = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    "Et netus et malesuada fames ac turpis egestas integer. Cursus turpis massa tincidunt dui."
];

const images = [
    { id: 0, src: chocolateMilkshake, title: 'Chocolate Milkshake', description: loremIpsum, type: 'Beverage', quantity: 0, userReviews: {'John Doe': {review: shortLoremIpsum[0], rating: 5, photo: johnDoe}, 'Jane Doe': {review: shortLoremIpsum[1], rating: 1, photo: janeDoe}, 'David Hayter': {review: shortLoremIpsum[2], rating: 1, photo: davidHayter}}, note : "" },
    { id: 1, src: cocaCola, title: 'Coca Cola', description: loremIpsum, type: 'Beverage', quantity: 0, userReviews: {'John Doe': {review: shortLoremIpsum[2], rating: 4, photo: johnDoe}, 'Jane Doe': {review: shortLoremIpsum[3], rating: 2, photo: janeDoe}}, note : "" },
    { id: 2, src: heinekenBeer, title: 'Beer', description: loremIpsum, type: 'Beverage', quantity: 0, userReviews: {'John Doe': {review: shortLoremIpsum[1], rating: 5, photo: johnDoe}, 'Jane Doe': {review: shortLoremIpsum[2], rating: 5, photo: janeDoe}}, note : "" },
    { id: 3, src: lemonade, title: 'Lemonade', description: loremIpsum, type: 'Beverage', quantity: 0, userReviews: {'John Doe': {review: shortLoremIpsum[3], rating: 2, photo: johnDoe}, 'Jane Doe': {review: shortLoremIpsum[1], rating: 4, photo: janeDoe}}, note : "" },
    { id: 4, src: lobsterThermidor, title: 'Lobster', description: loremIpsum, type: 'Meal', quantity: 0, userReviews: {'John Doe': {review: shortLoremIpsum[0], rating: 3, photo: johnDoe}, 'Jane Doe': {review: shortLoremIpsum[2], rating: 5, photo: janeDoe}}, note : "" },
    { id: 5, src: mashedPotato, title: 'Mashed Potato', description: loremIpsum, type: 'Meal', quantity: 0, userReviews: {'John Doe': {review: shortLoremIpsum[2], rating: 4, photo: johnDoe}, 'Jane Doe': {review: shortLoremIpsum[0], rating: 3, photo: janeDoe}}, note : "" },
    { id: 6, src: onionRings, title: 'Onion Rings', description: loremIpsum, type: 'Meal', quantity: 0, userReviews: {'John Doe': {review: shortLoremIpsum[3], rating: 1, photo: johnDoe}, 'Jane Doe': {review: shortLoremIpsum[0], rating: 5, photo: janeDoe}}, note : "" },
    { id: 7, src: sirloinSteak, title: 'Sirlion Steak', description: loremIpsum, type: 'Meal', quantity: 0, userReviews: {'John Doe': {review: shortLoremIpsum[1], rating: 5, photo: johnDoe}, 'Jane Doe': {review: shortLoremIpsum[1], rating: 5, photo: janeDoe}}, note : "" },
    { id: 8, src: rawSalmon, title: 'Raw Salmon', description: loremIpsum, type: 'Special', quantity: 0, userReviews: {'John Doe': {review: shortLoremIpsum[0], rating: 5, photo: johnDoe}, 'Jane Doe': {review: shortLoremIpsum[0], rating: 5, photo: janeDoe}}, note : "" },
    { id: 9, src: seaUrchin, title: 'Sea Urchin', description: loremIpsum, type: 'Special', quantity: 0, userReviews: {'John Doe': {review: shortLoremIpsum[2], rating: 2, photo: johnDoe}, 'Jane Doe': {review: shortLoremIpsum[1], rating: 5, photo: janeDoe}}, note : "" }
];
  
export default images;