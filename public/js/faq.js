function toggleAnswer(element) {
    // Toggle answer display
    const answer = element.nextElementSibling;
    const icon = element.querySelector(".icon");

    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.textContent = "+";
    } else {
        answer.style.display = "block";
        icon.textContent = "−";
    }
}
