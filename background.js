chrome.commands.onCommand.addListener((command) => {  
  chrome.bookmarks.getTree().then((bookmarks)=>{
    let url = bookmarks[0].children[0].children[parseInt(command)-1].url;
    chrome.tabs.create({ url: url });
  });
});