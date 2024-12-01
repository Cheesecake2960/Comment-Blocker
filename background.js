chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({"BlockedUsers":["純白の天使ラフレシア","シェリーニキです","シェリーニキ","人生過激派代表サザン"]})
});