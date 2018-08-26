browser.menus.create({
    id: 'Translate-word',
    title: 'Translate %s',
    contexts: ['selection'],
    command: '_execute_page_action'
});

browser.menus.onClicked.addListener((info, tab) => {
    browser.tabs.create({
        url: `http://www.wordreference.com/enfr/${info.selectionText}`
    });
});
