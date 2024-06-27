const projects = [
    {
        title: "PPT Controller using OpenCV",
        videoSrc: "https://www.youtube.com/embed/i5VhAvPZEI0?si=MDy4EzWgSwkwaouq",
        description: "PPT controller using Hand Tracking...",
        link: "prodesc1.html"
    },
    {
        title: "Virtual drums",
        videoSrc: "https://www.youtube.com/embed/NIid2OQdMKA?si=clA6LoxSoE95v2MW",
        description: "Virtual drums is a virtualized instrument...",
        link: "prodesc2.html"
    },
    {
        title: "Mask detection",
        videoSrc: "https://www.youtube.com/embed/gMJlLAQie68?si=P3-WXmaDQmA5a0-Z",
        description: "This is a computer vision project of detecting human face...",
        link: "prodesc3.html"
    },
    {
        title: "Bilingual Chatbot",
        videoSrc: "https://www.youtube.com/embed/vxLrAq70NoE?si=976Qdy0tTUhiEj1X",
        description: "This is a linguistic based chat bot...",
        link: "prodesc4.html"
    },
    {
        title: "Identity Recognition",
        videoSrc: "https://www.youtube.com/embed/GWpicozVyys?si=_5xFLeIbRKHlGyCu",
        description: "Identity Recognition has a vast range...",
        link: "prodesc5.html"
    },
    {
        title: "Smile Detection",
        videoSrc: "https://www.youtube.com/embed/2HOPcBFvzc4?si=UTxdQLizumaMkDD1",
        description: "Emotion detectors are used in many...",
        link: "prodesc6.html"
    },
    {
        title: "Weed Detection In Rice Crop Using R-CNN and OpenCv",
        imageSrc: "./assets/images/Crop.png",
        description: "We all know about the increase...",
        link: "prodesc7.html"
    }
];

const container = document.getElementById('projectsContainer');

projects.forEach(project => {
    const article = document.createElement('article');
    article.classList.add('befblog');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('befblog__Image');
    if (project.videoSrc) {
        const iframe = document.createElement('iframe');
        iframe.src = project.videoSrc;
        iframe.title = project.title;
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;
        imageDiv.appendChild(iframe);
    } else if (project.imageSrc) {
        const img = document.createElement('img');
        img.src = project.imageSrc;
        imageDiv.appendChild(img);
    }

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('befblog__info');

    const title = document.createElement('h4');
    title.textContent = project.title;
    infoDiv.appendChild(title);

    const description = document.createElement('p');
    description.textContent = project.description;
    infoDiv.appendChild(description);

    const link = document.createElement('a');
    link.href = project.link;
    link.classList.add('btn', 'btn-primary');
    link.textContent = 'Description';
    infoDiv.appendChild(link);

    article.appendChild(imageDiv);
    article.appendChild(infoDiv);
    container.appendChild(article);
});