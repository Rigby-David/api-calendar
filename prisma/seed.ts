/* eslint-disable quotes */
import { Quote } from '../src/types';
import { prisma } from '../src/utils/db.server';

async function seed() {
  await Promise.all(
    getQuotes().map((quote) => {
      return prisma.quotes.create({
        data: {
          film: quote.film,
          author: quote.author,
          quote: quote.quote,
        },
      });
    }),
  );
}

seed();
// {film: 'Die Hard', author: '', quote: ''}
function getQuotes(): Array<Quote> {
  return [
    {
      film: 'Die Hard',
      author: 'John McClane',
      quote: "Come out to the coast, we'll get together, have a few laughs..",
    },
    {
      film: 'Die Hard',
      author: 'Hans Gruber',
      quote: 'Now I have a machine gun. Ho ho ho.',
    },
    {
      film: 'Die Hard',
      author: 'John and Hans',
      quote:
        'Hans: This time John Wayne does not walk off into the sunset with Grace Kelly. John: That was Gary Cooper, jerk',
    },
    {
      film: 'Die Hard',
      author: 'John McClane',
      quote: 'Welcome to the party, pal!',
    },
    {
      film: 'Die Hard',
      author: 'John and Hans',
      quote:
        "John: You'd have made a pretty good cowboy yourself, Hans. Hans: Oh, yes. What was it you said to me before? Yippee-ki-yay.",
    },
    {
      film: 'Die Hard',
      author: 'Dwayne T. Robinson',
      quote: "We're gonna need some more FBI guys, I guess.",
    },
    {
      film: 'Die Hard',
      author: 'Hans Gruber',
      quote:
        'And when Alexander saw the breadth of his domain, he wept, for there were no more worlds to conquer." Benefits of a classical education.',
    },
    {
      film: 'Die Hard',
      author: 'Hans Gruber',
      quote:
        "I am an exceptional thief, Mrs. McClane. And since I'm moving up to kidnapping, you should be more polite.",
    },
    {
      film: 'Die Hard',
      author: 'John McClane',
      quote: "Who's driving this car, Stevie Wonder?",
    },
    {
      film: 'Die Hard',
      author: 'John McClane',
      quote: "Drop it, jerk. It's the police",
    },
    {
      film: 'Die Hard',
      author: 'John McClane',
      quote: 'Now I know what a TV dinner feels like.',
    },
    {
      film: 'Die Hard',
      author: 'Theo',
      quote:
        'All right, listen up guys. Twas the night before Christmas, and all through the house, not a creature was stirring, except... the four assholes coming in the rear in standard two-by-two cover formation.',
    },
    {
      film: 'Die Hard',
      author: 'John McClane',
      quote:
        "You jerk, I'm gonna kill you! I'm gonna cook you, and I'm gonna eat you!",
    },
    {
      film: 'Die Hard',
      author: 'John McClane',
      quote: 'Geronimo, jerks!',
    },
    {
      film: 'Die Hard',
      author: 'John McClane',
      quote: 'Happy trails, Hans',
    },
    {
      film: 'Die Hard',
      author: 'Hans Gruber',
      quote:
        "I'm going to count to three, there will not be a four. Give me the code.",
    },
    {
      film: 'Con Air',
      author: 'Cameron Poe',
      quote: 'Put... the bunny... back... in the box.',
    },
    {
      film: 'Die Hard 2',
      author: 'John McClane',
      quote: 'Take the Twinkie out of your mouth and grab a pencil, will ya?',
    },
    {
      film: 'Die Hard',
      author: 'John McClane',
      quote:
        'Nine million terrorists in the world and I gotta kill one with feet smaller than my sister.',
    },
    {
      film: 'Die Hard',
      author: 'Hans Gruber',
      quote:
        "When they touch down, we'll blow the roof, they'll spend a month sifting through rubble, and by the time they figure out what went wrong, we'll be sitting on a beach, earning twenty percent.",
    },
    {
      film: 'Die Hard',
      author: 'Hans Gruber',
      quote:
        'The circuits that cannot be cut are cut automatically in response to a terrorist incident. You asked for miracles, Theo, I give you the F.B.I.',
    },
    {
      film: 'Die Hard',
      author: 'Hans Gruber',
      quote: '*Shoot* the *glass!*',
    },
    {
      film: 'Die Hard',
      author: 'Hans Gruber',
      quote: 'Yippie-ki-yay, Mother-----',
    },
    {
      film: 'Die Hard',
      author: 'Harry Potter',
      quote: 'Happy Christmas, Harry!',
    },
  ];
}

export { seed };
