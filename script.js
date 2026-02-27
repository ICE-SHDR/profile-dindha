function createLove() {
    const love = document.createElement("div");
    love.classList.add("love");
    love.innerHTML = "❤";

    love.style.left = Math.random() * 100 + "vw";
    love.style.bottom = "-20px";
    love.style.animationDuration = (3 + Math.random() * 3) + "s";
    love.style.fontSize = (15 + Math.random() * 20) + "px";

    document.body.appendChild(love);

    setTimeout(() => {
        love.remove();
    }, 6000);
}

setInterval(createLove, 500);