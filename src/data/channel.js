// https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCA698bls2pjQyiqP9N-iaeg&key=[YOUR_API_KEY]
export const CHANNEL_DATA = {
  kind: 'youtube#channelListResponse',
  etag: 'eSpKrf8xPSJdCEzuAgWGoI9Wot0',
  pageInfo: {
    totalResults: 1,
    resultsPerPage: 1,
  },
  items: [
    {
      kind: 'youtube#channel',
      etag: 'WBFOz5eiMycolNzxpL0sDqzuIEY',
      id: 'UCA698bls2pjQyiqP9N-iaeg',
      snippet: {
        title: 'Pokémon GO',
        description:
          'Welcome to the official Pokémon GO YouTube page.  \n\nNow’s your chance to discover and capture the Pokémon all around you—so get your shoes on, step outside, and explore the world with Pokémon GO. You’ll join one of three teams and battle for the ownership of Gyms with your Pokémon at your side.\n\nSubscribe to this channel to stay updated on everything that’s happening in the world of Pokémon GO including game updates, training videos, community stories and upcoming events.  \n\nIt’s time to get moving—your real-life adventures await. Get up and GO!\n\n© 2016-2017 Niantic, Inc. © 2016-2017 Pokémon. © 1995-2017 Nintendo/Creatures Inc./GAME FREAK inc.',
        customUrl: 'pokemongo',
        publishedAt: '2016-02-11T22:29:59Z',
        thumbnails: {
          default: {
            url:
              'https://yt3.ggpht.com/a/AATXAJxz6LadbKZEWkXRf_AytQV2yJI_wf3TyA5wnw=s88-c-k-c0xffffffff-no-rj-mo',
            width: 88,
            height: 88,
          },
          medium: {
            url:
              'https://yt3.ggpht.com/a/AATXAJxz6LadbKZEWkXRf_AytQV2yJI_wf3TyA5wnw=s240-c-k-c0xffffffff-no-rj-mo',
            width: 240,
            height: 240,
          },
          high: {
            url:
              'https://yt3.ggpht.com/a/AATXAJxz6LadbKZEWkXRf_AytQV2yJI_wf3TyA5wnw=s800-c-k-c0xffffffff-no-rj-mo',
            width: 800,
            height: 800,
          },
        },
        localized: {
          title: 'Pokémon GO',
          description:
            'Welcome to the official Pokémon GO YouTube page.  \n\nNow’s your chance to discover and capture the Pokémon all around you—so get your shoes on, step outside, and explore the world with Pokémon GO. You’ll join one of three teams and battle for the ownership of Gyms with your Pokémon at your side.\n\nSubscribe to this channel to stay updated on everything that’s happening in the world of Pokémon GO including game updates, training videos, community stories and upcoming events.  \n\nIt’s time to get moving—your real-life adventures await. Get up and GO!\n\n© 2016-2017 Niantic, Inc. © 2016-2017 Pokémon. © 1995-2017 Nintendo/Creatures Inc./GAME FREAK inc.',
        },
      },
      contentDetails: {
        relatedPlaylists: {
          likes: '',
          favorites: '',
          uploads: 'UUA698bls2pjQyiqP9N-iaeg',
          watchHistory: 'HL',
          watchLater: 'WL',
        },
      },
      statistics: {
        viewCount: '65185504',
        commentCount: '0',
        subscriberCount: '559000',
        hiddenSubscriberCount: false,
        videoCount: '72',
      },
    },
  ],
};
