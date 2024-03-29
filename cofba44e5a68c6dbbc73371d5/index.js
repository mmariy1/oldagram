const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        description: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        description: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        description: "gm friends! which coin are YOU stacking up today??\n post below and WAGMI!",
        likes: 152
    }
]

function createButton(imageSrc, altText, buttonClass, iconClass) {
    const button = document.createElement("button");
    const icon = document.createElement("img");
    icon.src = imageSrc;
    icon.alt = altText;
    icon.classList.add(iconClass);
    button.appendChild(icon);
    button.classList.add(buttonClass);
    return button;
}

function renderPosts() {
    const postsContainer = document.getElementById("posts-container");
    
    posts.forEach(post => {
        const postWrapperDiv = document.createElement("div");
        postWrapperDiv.classList.add("post-wrapper");
        
        const avatarElement = document.createElement("img");
        avatarElement.classList.add("avatar");
        avatarElement.src = post.avatar;
        avatarElement.alt = `${post.name}'s avatar`;
        postWrapperDiv.appendChild(avatarElement);
        
        const nameLocationDiv = document.createElement("div");
        nameLocationDiv.classList.add("name-location");
        
        const nameElement = document.createElement("p");
        nameElement.classList.add("name");
        nameElement.textContent = post.name;
        nameLocationDiv.appendChild(nameElement);
        
        const locationElement = document.createElement("p");
        locationElement.classList.add("location");
        locationElement.textContent = post.location;
        nameLocationDiv.appendChild(locationElement);
        
        postWrapperDiv.appendChild(nameLocationDiv);
        
        const postElement = document.createElement("section");
        postElement.classList.add("post");
        
        const postImageElement = document.createElement("img");
        postImageElement.src = post.post;
        postImageElement.classList.add("post-image");
        postImageElement.alt = `${post.name}'s post`;
        postElement.appendChild(postImageElement);
        
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");

        const likeButton = createButton("images/icon-heart.png", "Like", "like", "like-icon");
        const commentButton = createButton("images/icon-comment.png", "Comment", "comment", "comment-icon");
        const dmButton = createButton("images/icon-dm.png", "DM", "dm", "dm-icon");

        buttonsDiv.appendChild(likeButton);
        buttonsDiv.appendChild(commentButton);
        buttonsDiv.appendChild(dmButton);

        postElement.appendChild(buttonsDiv);
        
        const likesElement = document.createElement("p");
        likesElement.classList.add("likes");
        likesElement.textContent = `${post.likes} likes`;
        postElement.appendChild(likesElement);
        
        const usernameElement = document.createElement("p");
        usernameElement.classList.add("username");
        usernameElement.textContent = post.username;
        
        const postDescriptionElement = document.createElement("p");
        postDescriptionElement.classList.add("post-description");
        postDescriptionElement.textContent = post.description;
        
        const usernameDescriptionDiv = document.createElement("div");
        usernameDescriptionDiv.classList.add("username-description");
        usernameDescriptionDiv.appendChild(usernameElement);
        usernameDescriptionDiv.appendChild(postDescriptionElement);
        
        postElement.appendChild(usernameDescriptionDiv);
        
        const fullPostDiv = document.createElement("div");
        fullPostDiv.classList.add("full-post");
        fullPostDiv.appendChild(postWrapperDiv);
        fullPostDiv.appendChild(postElement);
        
        postsContainer.appendChild(fullPostDiv);
        
        likeButton.addEventListener("click", function() {
            likesElement.textContent = `${post.likes += 1} likes`;
        });
        
        postImageElement.addEventListener("dblclick", function(){
            likesElement.textContent = `${post.likes += 1} likes`;
        });
    });
}

renderPosts();





