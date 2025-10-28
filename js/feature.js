const headerIds = ["home", "about", "contact"];

headerIds.forEach(headerId => {
    const link = document.getElementById(headerId);
    if (link) {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            if (headerId === "home") {
                window.location.href="../html/home.html";
            } if (headerId === "about") {
                window.location.href="../html/about.html";
            } if (headerId === "contact") {
                window.location.href="../html/contact.html";
            }
        })
    }
})