let blockedusr = []

function addBlockUser(){
    let newUser = document.querySelector("#blockUserName").value;

    chrome.storage.local.get(['BlockedUsers'], function(result) {
        let blockedUsers = result.BlockedUsers || [];
        blockedUsers.push(newUser);
        chrome.storage.local.set({BlockedUsers: blockedUsers}, function() {
            alert("新しいユーザー名が追加されました:", newUser);
        });
    });
}

document.querySelector('#blockUserButton').addEventListener('click', addBlockUser);