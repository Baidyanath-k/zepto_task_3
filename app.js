document.addEventListener("DOMContentLoaded", () => {
    const userMenuButton = document.getElementById("user-menu-button");
    const userMenu = document.getElementById("user-menu");
    userMenu.classList.toggle("hidden");

    userMenuButton.addEventListener("click", () => {
        userMenu.classList.toggle("hidden");
        userMenu.classList.toggle("block");
    });

    // Close the menu if clicked outside
    document.addEventListener("click", (event) => {
        if (
            !userMenuButton.contains(event.target) &&
            !userMenu.contains(event.target)
        ) {
            userMenu.classList.add("hidden");
            userMenu.classList.remove("block");
        }
    });
});