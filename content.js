// Created by @Cheesecake2960

let blockedUsers = [];
let infomationAdded = false

chrome.storage.local.get(['BlockedUsers']).then((result) => {
    blockedUsers = result.BlockedUsers;
});

window.addEventListener("load",main);

function main(){
    if (!infomationAdded){
        try{
            let infomationDiv = document.createElement("div");
            infomationDiv.style.margin = "15px";
            infomationDiv.style.textAlign = "center"
            document.getElementById("bottom-row").appendChild(infomationDiv);

            let infomationTitle = document.createElement("h3");
            infomationTitle.style.margin = "5px"
            infomationTitle.textContent = "拡張機能の開発にご協力ください";
            infomationDiv.appendChild(infomationTitle);

            let linkContents = document.createElement("div");
            linkContents.style.justifyContent = "center"
            infomationDiv.appendChild(linkContents);

            let githubLinkButton = document.createElement("a");
            githubLinkButton.style.borderRadius = "20px";
            githubLinkButton.style.border = "none";
            githubLinkButton.style.padding = "5px";
            githubLinkButton.style.background = "rgba(0,0,0,0.05)";
            githubLinkButton.style.margin = "10px";
            githubLinkButton.style.textDecoration = "none";
            githubLinkButton.style.color = "black";
            githubLinkButton.textContent = "Github - 開発";
            githubLinkButton.href = "https://github.com/Cheesecake2960/Comment-Blocker/";
            linkContents.appendChild(githubLinkButton);

            let patreonLinkButton = document.createElement("a");
            patreonLinkButton.style.borderRadius = "20px";
            patreonLinkButton.style.border = "none";
            patreonLinkButton.style.padding = "5px";
            patreonLinkButton.style.background = "rgba(0,0,0,0.05)";
            patreonLinkButton.style.margin = "10px";
            patreonLinkButton.style.textDecoration = "none";
            patreonLinkButton.style.color = "black";
            patreonLinkButton.textContent = "Patreon - 寄付";
            patreonLinkButton.href = "https://www.patreon.com/c/commentblocker/";
            linkContents.appendChild(patreonLinkButton);

            let createdByCheesecake = document.createElement("p");
            createdByCheesecake.style.margin = "5px"
            createdByCheesecake.textContent = "Created by @Cheesecake2960";
            infomationDiv.appendChild(createdByCheesecake);
        
            infomationAdded = true;
        }catch{}
    }

    blockedUsers.forEach(usr =>{
        if (decodeURI(location.href).includes(usr)){
            window.history.back();
        };

        document.querySelectorAll("ytd-comment-thread-renderer,ytd-comment-view-model").forEach(c => {
            if (
                c.querySelector("#author-text > span").textContent.includes(usr) || c.querySelector("#content-text > span").textContent.includes(usr)
            ){
                c.style.display = "none";
            };
        });
    });
};

setInterval(main,1000);