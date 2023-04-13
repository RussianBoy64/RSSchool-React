import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { setCharacterInfo } from 'redux/reducers/searchSlice';

import CharacterCard from 'components/CharacterCard';

const SpikeSpiegel = {
  mal_id: 1,
  url: 'https://myanimelist.net/character/1/Spike_Spiegel',
  images: {
    jpg: {
      image_url: 'https://cdn.myanimelist.net/images/characters/4/50197.jpg',
    },
    webp: {
      image_url: 'https://cdn.myanimelist.net/images/characters/4/50197.webp',
      small_image_url: 'https://cdn.myanimelist.net/images/characters/4/50197t.webp',
    },
  },
  name: 'Spike Spiegel',
  name_kanji: 'スパイク・スピーゲル',
  nicknames: [],
  about: `"Birthdate: June 26, 2044
  Height: 185 cm (6' 1")
  Weight: 70 kg (155 lbs)
  Blood type: O
  Planet of Origin: Mars
  Spike Spiegel is a tall and lean 27-year-old bounty hunter born on Mars. The inspiration for Spike is found in martial artist Bruce Lee who uses the martial arts style of Jeet Kune Do as depicted in Session 8, "Waltz For Venus". He has fluffy, dark green hair (which is inspired by Yusaku Matsuda's) and reddish brown eyes, one of which is artificial and lighter than the other. He is usually dressed in a blue leisure suit, with a yellow shirt and Lupin III inspired boots. A flashback in Session 6 revealed it was his fully functioning right eye which was surgically replaced by the cybernetic one (although Spike himself may not have conscious recollection of the procedure since he claims to have lost his natural eye in an "accident"). One theory is that his natural eye may have been lost during the pre-series massacre in which he supposedly "died". The purpose of this cybernetic eye is never explicitly stated, though it apparently gives him exceptional hand-eye coordination - particularly with firearms (Spike's gun of choice is a Jericho 941, as seen throughout the series). In the first episode, when facing a bounty-head using Red Eye, Spike mocks him, calling his moves "too slow". At first, this seems like posturing on Spike's part, but even with his senses and reflexes accelerated to superhuman levels by the drug, the bounty cannot even touch Spike. A recurring device throughout the entire show is a closeup on Spike's fully-natural left eye before dissolving to a flashback of his life as part of the syndicate. As said by Spike himself in the last episode, his right eye "only sees the present" and his left eye "only sees the past." Spike often has a bent cigarette between his lips, sometimes despite rain or "No Smoking" signs."`,
  favorites: 44812,
};

it('ProductCard should render', () => {
  render(
    <Provider store={store}>
      <CharacterCard showCharacterModal={setCharacterInfo} character={SpikeSpiegel} />
    </Provider>
  );

  expect(screen.getByText(/Spike Spiegel/)).toBeInTheDocument();
  expect(screen.getByText(/44812/)).toBeInTheDocument();
});
