"use strict";

const btn = document.getElementById("btn");
const emoji = [
    "😉", "🤩", "🤑", "😝", "🤪", "😜", "😛", "🤐", "😑", "😏", "🙄", "😒",
    "🤥", "😮‍💨", "🥺", "😇", "😎", "🥲", "😄", "😈", "😁", "🤭", "😸", "😅",
    "😃", "😆", "🥰", "🥺", "🎃", "💣", "🛎️", "⏰", "🎊", "🎉", "🙊", "🐒",
    "🦍", "🦧", "🐕", "🦝", "🦝", "🦊", "🦣", "🐘", "🦒", "🍋", "🥛",
];

btn.addEventListener("mouseover", () => {
    btn.innerHTML = emoji[Math.floor(Math.random() * emoji.length)];
});