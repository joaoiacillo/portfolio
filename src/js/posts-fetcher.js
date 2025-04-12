(async function () {
    const spinner = document.getElementById("posts-spinner");
    const list = document.getElementById("posts-list");

    const CACHE_EXPIRES = 1000 * 60 * 15; // 15 minutes

    /**
     * @returns {{ expires: number, posts: [] }}
     */
    const getCache = () => {
        let posts = localStorage.getItem("posts-cache");
        return JSON.parse(posts);
    }

    const setCache = (posts) => {
        localStorage.setItem("posts-cache", JSON.stringify({
            expires: Date.now() + CACHE_EXPIRES,
            data: posts,
        }));
    };

    const fetchPosts = () => fetch("https://dev.to/api/articles?username=iachilo");

    let posts = getCache();

    if (!posts || !posts.data || !posts.expires || posts.expires < Date.now()) {
        console.log("Fetching posts from Forem API.");
        posts = await fetchPosts();
        posts = await posts.json();
        posts = posts.map((post) => ({
            title: post.title,
            url: post.url,
            published_at: post.published_at,
            tags: post.tag_list,
            description: post.description,
            reading_time_minutes: post.reading_time_minutes,
        }));
        setCache(posts);
        posts = getCache();
    }

    spinner.style.display = "none";

    for (let post of posts.data) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = post.url;
        a.target = "_blank";
        a.classList.add("text-decoration-none", "link-light", "d-block", "mb-3", "border", "ps-3", "post");

        const date = document.createElement("small");
        date.classList.add("text-muted");
        date.innerText = new Date(post.published_at).toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        a.appendChild(date);

        const readingTime = document.createElement("small");
        readingTime.classList.add("text-secondary", "fw-bold", "ms-1");
        readingTime.innerText = `🞄 ${post.reading_time_minutes} min de leitura`;
        a.appendChild(readingTime);

        const title = document.createElement("h5");
        title.classList.add("mb-1");
        title.innerText = post.title;
        a.appendChild(title);

        const description = document.createElement("p");
        description.classList.add("mb-1", "post-description", "text-muted", "small");
        description.innerText = post.description;
        a.appendChild(description);

        const tags = document.createElement("p");
        tags.classList.add("mb-1");
        post.tags.forEach((tag) => {
            const tagSpan = document.createElement("span");
            tagSpan.classList.add("badge", "border", "bg-dark", "text-muted", "me-1");
            tagSpan.innerText = tag;
            tags.appendChild(tagSpan);
        });
        a.appendChild(tags);

        li.appendChild(a);
        list.appendChild(li);
    }
})();
