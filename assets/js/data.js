const data = [
    {
        img: "./assets/images/y19/pavansai.jpg",
        name: "Pavansai Gontina",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant date: 4/13/2022"
    },
    {
        img: "./assets/images/y19/vamsi.jpg",
        name: "Vamsi Mitra",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant date: 4/18/2022"
    },
    {
        img: "./assets/images/y19/prasanna.jpg",
        name: "Prasanna Swetha",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant date: 4/8/2022"
    },
    {
        img: "./assets/images/y19/srinivas.jpg",
        name: "V Srinivas",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant date: 4/8/2022"
    },
    {
        img: "./assets/images/y19/jithendra.jpg",
        name: "K Jithendra",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant date: 4/8/2022"
    },
    {
        img: "./assets/images/y20/praneeth.jpg",
        name: "R Sai Praneeth",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant date: 5/6/2023"
    },
    {
        img: "./assets/images/y20/anuhya.jpg",
        name: "Anuhya V",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant date: 3/29/2023"
    },
    {
        img: "./assets/images/y20/surya.jpg",
        name: "R A Surya Teja",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant date: 3/8/2023"
    },
    {
        img: "./assets/images/y20/akanksha.jpg",
        name: "Akanksha V A",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant date: 3/17/2023"
    },
    {
        img: "./assets/images/y20/madhu.jpeg",
        name: "V Madhu Preetam",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant date: 3/17/2023"
    },
    {
        img: "./assets/images/y20/jahnavi.jpg",
        name: "K Jahnavi",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant date: 5/6/2023"
    },
    {
        img: "./assets/images/y20/satwika.jpg",
        name: "A Sathwikanjali",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant date: 4/5/2023"
    },
    {
        img: "./assets/images/y21/harika.jpg",
        name: "Y Harika",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant Date: 04/25/2024"
    },
    {
        img: "./assets/images/y21/pavan.png",
        name: "M Pavan Shekar",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant Date: 04/07/2024"
    },
    {
        img: "./assets/images/y21/balaji.jpg",
        name: "D Balaji Reddy",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant Date: 04/08/2024"
    },
    {
        img: "./assets/images/y21/sohan.jpg",
        name: "T Sohan",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant Date: 04/08/2024"
    },
    {
        img: "./assets/images/y21/anjani.jpg",
        name: "K Teja Anjani",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant Date: 04/19/2024"
    },
    {
        img: "./assets/images/y21/bhavagna.jpg",
        name: "G Bhavagna",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant Date: 04/06/2024"
    },
    {
        img: "./assets/images/y21/harsha.jpg",
        name: "M Harsha",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant Date: 04/08/2024"
    },
    {
        img: "./assets/images/y21/jayasai.png",
        name: "P Durga Jayasai",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant Date: 04/07/2024"
    },
    {
        img: "./assets/images/y21/sasi.jpg",
        name: "N Sasi Vivek",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant Date: 04/24/2024"
    },
    {
        img: "./assets/images/y21/revanth.png",
        name: "C Revanth",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant Date: 04/08/2024"
    },
    {
        img: "./assets/images/y21/yamuna.jpg",
        name: "T Yamuna",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant Date: 04/25/2024"
    },
    {
        img: "./assets/images/y21/vijaya.png",
        name: "G Viaya Tejaswari",
        role: "Student",
        title: "TensorFlow Developer",
        grantdate: "Grant Date: 04/08/2024"
    },
];

window.onload = function () {
    const container = document.querySelector('.swiper-wrapper');

    data.map(item => {
        const article = document.createElement('article');
        article.classList.add('tensorflow', 'swiper-slide');

        article.innerHTML = `
            <div class="tensorflow-avatar">
                <img src="${item.img}" alt="${item.name}">
            </div>
            <div class="tensename">
                <h5>${item.name}</h5>
                <img src="./assets/images/tensorflow_developer.png" style="width: 25px; height: 25px; margin-bottom: 4px;">
            </div>
            <div class="tensorflow-info">
                <small>${item.role}</small>
            </div>
            <div class="tensorflow__body">
                <img src="./assets/images/tensorflow-ar21.svg">
                <p>${item.title}</p>
                <small style="color: var(--color-light);">${item.grantdate}</small>
            </div>
        `;

        container.appendChild(article);
    })
}