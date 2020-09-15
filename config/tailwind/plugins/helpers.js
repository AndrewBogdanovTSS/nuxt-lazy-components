const plugin = require('tailwindcss/plugin')

module.exports = plugin(({addUtilities, addComponents, theme}) => {
  const utilities = {
    '.flex-center': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    '.flex-col-center': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    '.i-flex-center': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    '.break-word': {
      wordBreak: 'break-word'
    },
    '.will-change-opacity': {
      willChange: 'opacity'
    },
    '.flip-x': {
      transform: 'scaleX(-1)'
    },
    '.flip-y': {
      transform: 'scaleY(-1)'
    },
    '.justify-evenly': {
      justifyContent: 'space-evenly'
    },
    '.full': {
      width: '100%',
      height: '100%'
    },
    '.full-cover': {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    '.full-contain': {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    },
    '.top-left': {
      position: 'absolute',
      top: 0,
      left: 0
    },
    '.top-right': {
      position: 'absolute',
      top: 0,
      right: 0
    },
    '.bottom-left': {
      position: 'absolute',
      bottom: 0,
      left: 0
    },
    '.bottom-right': {
      position: 'absolute',
      bottom: 0,
      right: 0
    },
    '.top-left-3': {
      position: 'absolute',
      top: theme('spacing.3'),
      left: theme('spacing.3')
    },
    '.bottom-left-3': {
      position: 'absolute',
      bottom: theme('spacing.3'),
      left: theme('spacing.3')
    },
    '.top-right-3': {
      position: 'absolute',
      top: theme('spacing.3'),
      right: theme('spacing.3')
    },
    '.bottom-right-3': {
      position: 'absolute',
      bottom: theme('spacing.3'),
      right: theme('spacing.3')
    },
    '.col-4': {
      columnCount: '4',
      columnGap: '40px'
    },
    '.content': {
      content: "''"
    }
  }

  const components = {
    '.mode-darken': {
      mixBlendMode: 'darken',
      img: {
        mixBlendMode: 'darken'
      }
    },
    '.scrollbar-hidden': {
      'scrollbar-width': 'none',
      '-ms-overflow-style': 'none',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    }
  }
  addComponents(components, ['responsive'])
  addUtilities(utilities, ['responsive'])
})
