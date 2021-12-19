"use strict";

const btn = document.getElementById("btn");
const emoji = [
    "😉", "🤩", "🤑", "😝", "🤪", "😜", "😛", "🤐", "😑", "😏", "🙄", "😒",
    "🤥", "😮‍💨", "🥺", "😇", "😎", "🥲", "😄", "😈", "😁", "🤭", "😸", "😅",
    "😃", "😆", "🥰", "🥺", "🎃", "💣", "🛎️", "⏰", "🎊", "🎉", "🙊", "🐒",
    "🦍", "🦧", "🐕", "🦝", "🦝", "🦊", "🦣", "🐘", "🦒", "🍋", "🥛",
];

btn.addEventListener("click", () => {
    btn.innerHTML = emoji[Math.floor(Math.random() * emoji.length)];
});
