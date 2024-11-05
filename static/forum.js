document.addEventListener("DOMContentLoaded", function () {
    const newTopicButton = document.getElementById("new-topic-button");
    const topicsList = document.getElementById("topics-list");

    // Event listener to add a new topic
    newTopicButton.addEventListener("click", function () {
        const topicTitle = prompt("Введите заголовок вашей темы:");
        const topicDescription = prompt("Введите описание вашей темы:");

        if (topicTitle && topicDescription) {
            const newTopic = document.createElement("div");
            newTopic.classList.add("topic");
            newTopic.innerHTML = `
                <h3>${topicTitle}</h3>
                <p>Автор: Вы</p>
                <p>Описание: ${topicDescription}</p>
                <div class="topic-interaction">
                    <button class="vote-up">&#9650; Поддержать</button>
                    <button class="vote-down">&#9660; Не поддерживать</button>
                    <span class="votes-count">Голосов: 0</span>
                    <button class="comment-button">Комментарий</button>
                </div>
                <div class="comments"></div>
            `;
            topicsList.appendChild(newTopic);
        }
    });

    // Event delegation for voting and commenting
    topicsList.addEventListener("click", function (event) {
        if (event.target.classList.contains("vote-up")) {
            const votesCount = event.target.nextElementSibling.nextElementSibling;
            let votes = parseInt(votesCount.textContent.split(": ")[1]);
            votes++;
            votesCount.textContent = `Голосов: ${votes}`;
        } else if (event.target.classList.contains("vote-down")) {
            const votesCount = event.target.nextElementSibling;
            let votes = parseInt(votesCount.textContent.split(": ")[1]);
            votes--;
            votesCount.textContent = `Голосов: ${votes}`;
        } else if (event.target.classList.contains("comment-button")) {
            const commentText = prompt("Введите ваш комментарий:");
            if (commentText) {
                const commentsSection = event.target.parentElement.nextElementSibling;
                const newComment = document.createElement("p");
                newComment.innerHTML = `<strong>Вы:</strong> ${commentText}`;
                commentsSection.appendChild(newComment);
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const newTopicButton = document.getElementById("new-topic-button");

    newTopicButton.addEventListener("click", () => {
        // Перенаправляем пользователя на страницу для создания новой темы
        window.location.href = "red-forum.html";
    });
});
