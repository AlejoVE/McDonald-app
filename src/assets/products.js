import boss from '../assets/images/boss-burger.jpeg';
import aless from '../assets/images/aless-burger.jpeg';
import leny from '../assets/images/leny-burger.jpeg';
import phil from '../assets/images/phil-burger.jpeg';
import bold from '../assets/images/bold-burger.jpeg';
import rafaelo from '../assets/images/rafaelo-burger.jpeg';
import eiffel from '../assets/images/eiffel-burger.jpeg';

export const products = [
	{
		id: 1,
		name: "Tibus' Boss Burger",
		description:
			'Big burger with 2x beef, barbecue sauce, cheese, pickle, onion & salat.',
		price: 4.8,
		discount: 20,
		size: 'Big',
		Weight: '500g',
		prepareTimeMinutes: 8,
		img: boss,
	},
	{
		id: 2,
		name: "Leny's Crunchy Bicky",
		description:
			'Medium burger with 1x beef, triple bycky sauce, cheese, pickle, fried onion & salat.',
		price: 4.15,
		discount: 0,
		size: 'Medium',
		Weight: '370g',
		prepareTimeMinutes: 5,
		img: leny,
	},
	{
		id: 3,
		name: "The Phil's O'sophy",
		description:
			'Medium burger with 1x beef, bacon, triple ketchup sauce, cheese, salat.',
		price: 4,
		discount: 0,
		size: 'Medium',
		Weight: '380g',
		prepareTimeMinutes: 6,
		img: phil,
	},
	{
		id: 4,
		name: 'Aless double steak appartment',
		description:
			'Big burger with 2x beef, bacon, andalouse sauce, onion, salat',
		price: 4.6,
		discount: 10,
		size: 'Big',
		Weight: '425g',
		prepareTimeMinutes: 8,
		img: aless,
	},
	{
		id: 5,
		name: 'The "Bald & bold"',
		description: 'Big burger with 3x beef, pickle sauce, fried onion, salat.',
		price: 5,
		discount: 33,
		size: 'Big',
		Weight: '475g',
		prepareTimeMinutes: 8,
		img: bold,
	},
	{
		id: 6,
		name: 'The Rafaëlo (kid burger)',
		description:
			'Small burger with 1x beef, cheese, ketchup sauce, pickle, salat.',
		price: 2,
		discount: 0,
		size: 'Small',
		Weight: '175g',
		prepareTimeMinutes: 3,
		img: rafaelo,
	},
	{
		id: 7,
		name: 'The "Eiffel Tour Burjer"',
		description:
			'Medium burger with 2x beef, camembert cheese, tartare & wine sauce, pickle, salat.',
		price: 4.33,
		discount: 15,
		size: 'Medium',
		Weight: '250g',
		prepareTimeMinutes: 6,
		img: eiffel,
	},
];
