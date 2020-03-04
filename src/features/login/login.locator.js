const config = {
  locator: {
    selectItem: row => {
      return `//html/body/ng-view/section/section/ul/li[${row}]/div/input`;
    },
    btnClear: 'Clear completed',
  },
};

module.exports = {
  config,
  locator: config.locator,
};
