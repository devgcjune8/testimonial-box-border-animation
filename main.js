const TESTIMONIAL_WRAPPER = document.querySelector('.testimonial-wrapper')
const TESTIMONIAL_TEXT = document.querySelector('.testimonial-text')
const TESTIMONIAL_USER_IMG = document.querySelector('.user-img')
const TESTIMONIAL_USER_NAME = document.querySelector('.user-name')
const TESTIMONIAL_USER_ROLE = document.querySelector('.user-role')
const LEFT_PROGRESS_BAR = document.querySelector('.left');
const RIGHT_PROGRESS_BAR = document.querySelector('.right')

const TESTIMONIAL_ARRAY_OBJECT = [
    {
        "name": "Farrah Ritchie",
        "position": "Sales Representative",
        "avatar": "https://randomuser.me/api/portraits/women/23.jpg",
        "testimonial": "Sigma is exactly what our business has been lacking."
    },
    {
        "name": "Gita Ziegler",
        "position": "Director",
        "avatar": "https://randomuser.me/api/portraits/women/42.jpg",
        "testimonial": "Thank you for making it painless, pleasant and most of all hassle free! I am so pleased with this product. Thank you so much for your help."
    },
    {
        "name": "Opaline Carter",
        "position": "Senior Dev",
        "avatar": "https://randomuser.me/api/portraits/women/13.jpg",
        "testimonial": "If you aren't sure, always go for Sigma. I can't say enough about Sigma. No matter where you go, Sigma is the coolest, most happening thing around! I love your system."
    },
    {
        "name": "Kane Cook",
        "position": "Writer",
        "avatar": "https://randomuser.me/api/portraits/men/13.jpg",
        "testimonial": "Thank you so much for your help. Just what I was looking for. We've seen amazing results already. I am so pleased with this product."
    },
    {
        "name": "Marilee Lumbargo",
        "position": "Secretary",
        "avatar": "https://randomuser.me/api/portraits/women/18.jpg",
        "testimonial": "No matter where you go, Sigma is the coolest, most happening thing around! Thank you so much for your help. Sigma is great."
    },
    {
        "name": "Ernest Monroe",
        "position": "Consultant",
        "avatar": "https://randomuser.me/api/portraits/men/28.jpg",
        "testimonial": "Best. Product. Ever!"
    },
    {
        "name": "Nancy Cruz",
        "position": "Chief Proctor",
        "avatar": "https://randomuser.me/api/portraits/women/38.jpg",
        "testimonial": "I am really satisfied with my Sigma. I am completely blown away."
    },
    {
        "name": "Verne Maxson",
        "position": "Coach",
        "avatar": "https://randomuser.me/api/portraits/men/30.jpg",
        "testimonial": "Very easy to use. Thanks for the great service. You've saved our business!"
    },
    {
        "name": "Cariotta Tennyson",
        "position": "Housewife",
        "avatar": "https://randomuser.me/api/portraits/women/30.jpg",
        "testimonial": "The service was excellent. Man, this thing is getting better and better as I learn more about it. I didn't even need training."
    },
    {
        "name": "Axle Wheelson",
        "position": "Lender",
        "avatar": "https://randomuser.me/api/portraits/men/40.jpg",
        "testimonial": "Needless to say we are extremely satisfied with the results. I like Sigma more and more each day because it makes my life a lot easier. I wish I would have thought of it first."
    },
    {
        "name": "Elias Via",
        "position": "CEO",
        "avatar": "https://randomuser.me/api/portraits/men/41.jpg",
        "testimonial": "Sigma impressed me on multiple levels."
    },
    {
        "name": "Adina Culkin",
        "position": "Programmer",
        "avatar": "https://randomuser.me/api/portraits/women/21.jpg",
        "testimonial": "I was amazed at the quality of Sigma. We can't understand how we've been living without Sigma. Sigma is exactly what our business has been lacking. I couldn't have asked for more than this."
    },
]


let index = 0;

const changeTestimonial = () => {
    const { name, position, avatar, testimonial } = TESTIMONIAL_ARRAY_OBJECT[index]

    TESTIMONIAL_TEXT.innerHTML = testimonial;
    
    TESTIMONIAL_USER_NAME.innerHTML = name;
    TESTIMONIAL_USER_ROLE.innerHTML = position;
    TESTIMONIAL_USER_IMG.src = avatar;

    index++

    if (index > TESTIMONIAL_ARRAY_OBJECT.length - 1) {
        index = 0
    }
    
}

setInterval(changeTestimonial, 9998)

