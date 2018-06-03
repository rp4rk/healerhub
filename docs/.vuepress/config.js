module.exports = {
  title: 'HealerHub',
  description: 'Collaborative Healing Guides by the World of Warcraft Community',
  evergreen: false,
  themeConfig: {
    lastUpdated: true,
    sidebar: [
      {
        title: 'Discipline Priest',
        children: [
          '/discipline-priest/',
          '/discipline-priest/talents'
        ]
      },
    ]
  }
}
