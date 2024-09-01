export const data = {
  primaryInfo: {
    langs: [
      {
        name: 'RU',
        key: 'ru',
      },
      {
        name: 'EN',
        key: 'en',
      },
    ],
    navigation: [
      {
        name: 'Download',
        anchor: '#download',
      },
      {
        name: 'Warranty',
        anchor: '#warranty',
      },
      {
        name: 'Care',
        anchor: '#care',
      },
      {
        name: 'Cashback',
        anchor: '#cashback',
      },
      {
        name: 'Clients',
        anchor: '#clients',
      },
    ],
  },

  download: {
    title: {
      content: 'Peaceful shopping mindful money',
      priority: 1,
    },
    texts: [
      'See how we can help with making your shopping experience and money management more ZEN.',
    ],
    links: [
      {
        name: 'Apple',
        url: 'https://apple.com',
      },
      {
        name: 'Google',
        url: 'https://google.com',
      },
    ],
    images: {
      source: './assets/images/1.jpg',
      description: 'Bag and device',
    },
  },

  warranty: {
    title: {
      content: '1-year warranty boost',
      priority: 2,
    },
    texts: [
      'ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common.',
      'When you buy any electronics with your ZEN shopping Mastercard, their warranty gets extended by one year. How does it work? It simply does. Automatically.',
    ],
    images: {
      source: './assets/images/2.jpg',
      description: 'Basket',
    },
  },

  care: {
    title:{
      content: 'ZEN Care',
      priority: 2,
    },
    texts: [
      "Shopping online is usually a delightful experience. Until it's not.",
      'Until something you buy, proves to be faulty, missing or a totally wrong item, you’re in for long product return procedures.',
      'But, here comes ZEN Care: a free, built-in shopping protection.',
    ],
    images: {
      source: './assets/images/3.jpg',
      description: 'Card',
    },
  },

  cashback: {
    title: {
      content: 'and cashback!',
      priority: 2,
    },
    texts: [
      'It saves a little bit of money while you’re shopping, but in many cases it takes ages to get anything out of it.',
      'We gave it a thought and made cashback way more friendly.',
      'Up to 14% of what you spend using ZEN Mastercard ® will materialize on your account right after the purchase.',
    ],
    buttonText: 'Order a consultation',
  },

  clients: {
    brands: [
      {
        name: 'Rosegal',
        logo: {
          lightSource: '.assets/brands/light/1.svg',
          darkSource: '.assets/brands/dark/1.svg',
        },
      },
      {
        name: 'Geabest',
        logo: {
          lightSource: '.assets/brands/light/2.svg',
          darkSource: '.assets/brands/dark/2.svg',
        },
      },
      {
        name: 'Allegro',
        logo: {
          lightSource: '.assets/brands/light/3.svg',
          darkSource: '.assets/brands/dark/3.svg',
        },
      },
      {
        name: 'Aliexpress',
        logo: {
          lightSource: '.assets/brands/light/4.svg',
          darkSource: '.assets/brands/dark/4.svg',
        },
      },
      {
        name: 'Booking',
        logo: {
          lightSource: '.assets/brands/light/5.svg',
          darkSource: '.assets/brands/dark/5.svg',
        },
      },
      {
        name: 'Media Markt',
        logo: {
          lightSource: '.assets/brands/light/6.svg',
          darkSource: '.assets/brands/dark/6.svg',
        },
      },
      {
        name: 'Rtv Euro Agd',
        logo: {
          lightSource: '.assets/brands/light/7.svg',
          darkSource: '.assets/brands/dark/7.svg',
        },
      },
      {
        name: 'Groupon',
        logo: {
          lightSource: '.assets/brands/light/8.svg',
          darkSource: '.assets/brands/dark/8.svg',
        },
      },
    ],
  },

  secondaryInfo: {
    categories: [
      {
        name: 'Learn',
        links: [
          {
            url: 'https://example.com',
            content: {
              type: 'text',
              data: 'Help center',
            },
          },
          {
            url: 'https://example.com',
            content: {
              type: 'text',
              data: 'Join ZEN team',
            },
          },
          {
            url: 'https://example.com',
            content: {
              type: 'text',
              data: 'Privacy Policy',
            },
          },
          {
            url: 'https://example.com',
            content: {
              type: 'text',
              data: 'Cookies',
            },
          },
          {
            url: 'https://example.com',
            content: {
              type: 'text',
              data: 'Terms of use',
            },
          },
        ],
      },
      {
        name: 'Discover',
        links: [
          {
            name: 'For developers',
            url: 'https://example.com',
          },
          {
            name: 'Apple Pay',
            url: 'https://example.com',
          },
          {
            name: 'Google Pay',
            url: 'https://example.com',
          },
        ],
      },
      {
        name: 'Offer',
        links: [
          {
            name: 'Business',
            url: 'https://example.com',
          },
          {
            name: 'Personal',
            url: 'https://example.com',
          },
        ],
      },
      {
        name: 'Language',
        links: [
          {
            name: 'English',
            url: 'https://example.com',
          },
          {
            name: 'Polish',
            url: 'https://example.com',
          },
        ],
      },
      {
        name: 'Follow us',
        links: [
          {
            url: 'https://example.com',
            content: {
              type: 'image',
              data: './assets/icon/in.svg',
            },
          },
        ],
      },
      {
        name: 'Contact',
        links: [
          {
            url: 'mailto:https://example.com',
            content: {
              type: 'text',
              data: 'hello@zen.com',
            },
          },
        ],
      },
    ],
    info: {
      texts: [
        'ZEN is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by European Banking Authority for 31 countries.',
        'Registration number of the company 304749651, VAT ID LT100011714916.',
        'License of electronic money institutions number LB000457.',
        'Share capital 2.185.000,00 EUR.',
        'Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania.',
        'Sales Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.',
      ],
      developer: {
        url: 'https://example.com',
        content: {
          type: 'image',
          data: './assets/icon/developer.svg',
        },
      },
    },
  },
};
