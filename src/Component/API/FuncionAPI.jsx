import { createContext, useState } from "react";
export const store= createContext();
const FunctionAPI=(props)=>{
    const [data,setdata]=useState([
        {
        id: 1,
        catagory:"HOME1",
        Title: "Amarkantak intro",
        Blog: "Arranged at an elevation of 1065 mt. at the gathering purpose of the Vindhya and the Satpura mountain ranges among sylvan surroundings, Amarkantak is an incredible pioneer community for the Hindus, and is the wellspring of the waterways Narmada and Sone.While the Narmada streams Westwards from Amarkantak, the Sone streams towards the East. Amarkantak is surely honored by Nature. Sacred lakes, grandiose slopes, forested surroundings, amazingly delightful waterfalls and a constantly infesting quality of tranquility make Amarkantak a much looked for after end of the line for the religious-minded and for the nature-darling.Among all the sacrosanct streams of India, the Narmada possesses an extraordinary spot. Legend has it that Lord Shiva favored Narmada with one of a kind cleansing forces. Though to sanitize himself, an aficionado requires to take one dunk in the Holy Ganga,",
        image: 'https://www.outlookindia.com/outlooktraveller/public/uploads/2017/03/Amarkantak1-1024x683.jpg',
          
    },
    {
        id: 150,
        catagory:"HOME1",
        Title: "Bandhavgarh National park",
        Blog: "Just as our elephant started on its jaunty walk through the marshes, the nascent rays of the sun broke through the morning mist illuminating the beels scattered across the wetland in a golden glow. And there it was…standing tall and proud next to a much wallowed beel was our first rhinoceros, giving us an annoyed look at having walked in on him during his breakfast. Our mahout moved the elephant closer to enable us to get a better look. We were so close now we could see the veins on his face and admire its formidable horn. Its back was slick with mud from its last wallow, and cattle egrets were having a ball hunting for treasure in the mud clots formed on its corrugated grey hide. The eye contact with us lasted a while in which my Nikon D7100 DSLR kept buzzing nonstop, till the rhino lost interest and resumed its meal….what a magnificent creature! There are about 3500 Great Indian One Horned Rhinoceros left in the wild today, of which Kaziranga harbors a staggering 2500, a figure that we totally believed after being overwhelmed by the sheer numbers of Rhinos that we saw over the next few days.",
        image: 'https://experiencesandobservationsblog.files.wordpress.com/2017/06/kalit-156.jpg',
          
    },
    {
        id: 151,
        catagory:"HOME1",
        Title: "Bandhavgarh National park",
        Blog: "Just as our elephant started on its jaunty walk through the marshes, the nascent rays of the sun broke through the morning mist illuminating the beels scattered across the wetland in a golden glow. And there it was…standing tall and proud next to a much wallowed beel was our first rhinoceros, giving us an annoyed look at having walked in on him during his breakfast. Our mahout moved the elephant closer to enable us to get a better look. We were so close now we could see the veins on his face and admire its formidable horn. Its back was slick with mud from its last wallow, and cattle egrets were having a ball hunting for treasure in the mud clots formed on its corrugated grey hide. The eye contact with us lasted a while in which my Nikon D7100 DSLR kept buzzing nonstop, till the rhino lost interest and resumed its meal….what a magnificent creature! There are about 3500 Great Indian One Horned Rhinoceros left in the wild today, of which Kaziranga harbors a staggering 2500, a figure that we totally believed after being overwhelmed by the sheer numbers of Rhinos that we saw over the next few days.",
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTHa572g2prwQktVHA1YEvYLr8jUfzjeffiB2DXUguB86_4cSuHkUvveag1MWFCEWqVFqDJALyxMYfs4LfkxglBgw',
          
    },
    {
        id: 150,
        catagory:"HOME1",
        Title: "Bandhavgarh National park",
        Blog: "Just as our elephant started on its jaunty walk through the marshes, the nascent rays of the sun broke through the morning mist illuminating the beels scattered across the wetland in a golden glow. And there it was…standing tall and proud next to a much wallowed beel was our first rhinoceros, giving us an annoyed look at having walked in on him during his breakfast. Our mahout moved the elephant closer to enable us to get a better look. We were so close now we could see the veins on his face and admire its formidable horn. Its back was slick with mud from its last wallow, and cattle egrets were having a ball hunting for treasure in the mud clots formed on its corrugated grey hide. The eye contact with us lasted a while in which my Nikon D7100 DSLR kept buzzing nonstop, till the rhino lost interest and resumed its meal….what a magnificent creature! There are about 3500 Great Indian One Horned Rhinoceros left in the wild today, of which Kaziranga harbors a staggering 2500, a figure that we totally believed after being overwhelmed by the sheer numbers of Rhinos that we saw over the next few days.",
        image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT8PszwA3TPZy2fhuGQi1StUn_up7StxtjtZzAhZdLudlzxttSxQyRSmvZpASVYQelRMi5x0xbxmOPa3rm_bIk7Ow',
          
    },
    {
        id: 150,
        catagory:"HOME1",
        Title: "Bandhavgarh National park",
        Blog: "Just as our elephant started on its jaunty walk through the marshes, the nascent rays of the sun broke through the morning mist illuminating the beels scattered across the wetland in a golden glow. And there it was…standing tall and proud next to a much wallowed beel was our first rhinoceros, giving us an annoyed look at having walked in on him during his breakfast. Our mahout moved the elephant closer to enable us to get a better look. We were so close now we could see the veins on his face and admire its formidable horn. Its back was slick with mud from its last wallow, and cattle egrets were having a ball hunting for treasure in the mud clots formed on its corrugated grey hide. The eye contact with us lasted a while in which my Nikon D7100 DSLR kept buzzing nonstop, till the rhino lost interest and resumed its meal….what a magnificent creature! There are about 3500 Great Indian One Horned Rhinoceros left in the wild today, of which Kaziranga harbors a staggering 2500, a figure that we totally believed after being overwhelmed by the sheer numbers of Rhinos that we saw over the next few days.",
        image: 'https://experiencesandobservationsblog.files.wordpress.com/2017/06/kalit-156.jpg',
          
    },
    {
        id: 2,
        catagory: "HOME1",
        class: "",
        Title: "A.Amarkantak Begining /traveling",
        Blog: "Arranged at an elevation of 1065 mt. at the gathering purpose of the Vindhya and the Satpura mountain ranges among sylvan surroundings, Amarkantak is an incredible pioneer community for the Hindus, and is the wellspring of the waterways Narmada and Sone.While the Narmada streams Westwards from Amarkantak, the Sone streams towards the East. Amarkantak is surely honored by Nature. Sacred lakes, grandiose slopes, forested surroundings, amazingly delightful waterfalls and a constantly infesting quality of tranquility make Amarkantak a much looked for after end of the line for the religious-minded and for the nature-darling.Among all the sacrosanct streams of India, the Narmada possesses an extraordinary spot. Legend has it that Lord Shiva favored Narmada with one of a kind cleansing forces. Though to sanitize himself, an aficionado requires to take one dunk in the Holy Ganga,",
        image: "https://classyindia.files.wordpress.com/2015/01/e343b-amarkantak.jpg",
         
    },
    {
        id: 3,
        catagory: "HOME2",
        Title: "BOLLYwood news wedding/bollywood ",
        Blog: "It is, as they say in Bollywood, a “family entertainer”. The elements are all there: A stunning location (the Suryagarh Palace in Jaisalmer), gorgeous clothes (by Manish Malhotra who has reportedly made a whopping 150 outfits for the happy couple, just for the occasion) and, of course, the boy-meets-girl-meets-parivar story. No doubt Karan Johar, who arrived at the venue a couple of days ago (we are told) has choreographed the elaborate sangeet, as he usually does, and the internet will be flooded with carefully directed “candid” photos of the newly-weds — so beautiful and obviously in love that they might as well be the poster of a movie called Sid Kiara Di Wedding.",
        image: "https://images.indianexpress.com/2023/02/Sidharth-Malhotra-1200-1.jpeg",
        
    },
    {
        id: 4,
        catagory: "HOME",
        Title: "Food news/health",
        Blog: "The bottom line: Americans eat too much and exercise too little. And the calories we consume usually aren’t from nutritious, low-cal, high-fiber foods such as fruits and vegetables, or whole grains, or from healthy proteins like lean meat and low-fat dairy foods.",
        image: "https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0",
        
    },
    {
        id: 5,
        catagory: "HOME",
        Title: "Teh crisis",
        Blog: "when you visit a website that requires you to log in, and you choose to connect with a Google or Facebook account, you’re utilising an API. That click of a button that links your existing account on one platform with a new account on another is enabled by an API. They spring into action whenever one type of work interacts with another, working to bridge that gap. APIs are the overlooked and under-praised army that keeps the internet as we know it going.",
        image: "https://i.guim.co.uk/img/media/71787554583655149422797a44430da33a4b7c7e/0_376_5730_3438/master/5730.jpg?width=620&quality=45&dpr=2&s=none",
           
    },
    {
        id: 6,
        catagory: "HOME",
        Title: " ADANI blogs",
        Blog: "Everything will be fine, give us a week, Modi ji [Prime Minister Narendra Modi] will not allow even a kharonch [nick] on his person. His image will be intact,” emphasises a Bharatiya Janata Party (BJP) leader considered a resource person for the party’s brass.Keeping the popular idea of Modi as upright, selfless and dedicated to the ‘nation first’ motto is paramount for the BJP as election after election rolls in before the battle of 2024. As the Centre embarks on institutional damage-control to restore investors’ confidence and steady the market, the BJP leader claims, You will see the results in seven days.",
        image: "https://static.toiimg.com/thumb/width-800,height-450,imgsize-50598,msid-97644083/97644083.jpg",
         
    },
    {
        id: 7,
        catagory: "HOME",
        Title: "WORK AND LIFE REPORTAGE",
        Blog: "When food delivery aggregator Zomato introduced a paid period leave policy in 2020, rider Nisha Shetty was used to zipping around in her scooty through rain, hail and shine. Besides the vagaries of weather, she had to navigate dimly lit express highways and deserted residential colonies till about 1am in the Badlapur area near Thane",
        image: "https://static.toiimg.com/thumb/width-800,height-450,imgsize-66660,msid-97645181/97645181.jpg",
          
    },
    {
        id: 8,
        catagory: "HOME",
        Title: "Apple Watch Series 7",
        Blog: "On Independence Day 2022, American analytics company Gallup published the results of its survey in India. “Economic pain uneven in India’s Muslim and Hindu populations,” it said. It’s nothing that we don’t already know.",
        image: "https://static.toiimg.com/thumb/width-800,height-450,imgsize-93350,msid-97646528/97646528.jpg",
         
    },
    {
        id: 9,
        catagory: "HOME",
        Title: "",
        Blog: "Jabalpur is a place where you have so much variety to eat. From the best dosa to momos. Chocolate sandwich to an over spiced pav bhaji. From pasta to pizza. We have so many varieties that we often get confused what to eat. And Jabalpurwala is here to help you again. We are providing you with the list of best fast food Jabalpur offers us to eat.",
        image: "https://jabalpurwala.com/wp-content/uploads/2017/12/Dahi_Bhalla_Puri_Recipe-1.jpg",
        
    },
    {
        id: 10,
        catagory: "HOME",
        Title: "Apple Watch Series 2",
        Blog: "How can we forget the most loving food in this world. Pizza always tops the list worldwide. Be it friendship day, a small get together or movie night with friends the best way to make it more enjoyable is to order a pizza. We have dominos and pizza hut which offers a different kind of pizza. But if you want to enjoy a pizza without burning a hole in your pocket then Govinda’s pizza just beside the civic centre chowpati won’t disappoint you.",
        image: "https://img.grouponcdn.com/deal/8DDtq5XRzVnLXEUnPHPd/p2-2048x1229/v1/c700x420.jpg",
        
    },
    {
        id: 11,
        catagory: "Accessories",
        Title: "Apple AirPods Max",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-hero-select-202011_FMT_WHH?wid=607&hei=556&fmt=jpeg&qlt=90&.v=1633623988000",
        price: "₹15,000",
        oPrice: "₹17,500"   
    },
    {
        id: 12,
        catagory: "Accessories",
        Title: "Apple AirPods ",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://rukminim1.flixcart.com/image/612/612/kigbjbk0-0/headphone/n/z/m/mgyl3hn-a-apple-original-imafy8wb7tuduaf2.jpeg?q=70",
        price: "₹13,000",
        oPrice: "₹16,499"   
    },
    {
        id: 13,
        catagory: "Accessories",
        Title: "boAt Rockers 255 CSK",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/51hC6pU-gsL._SY355_.jpg",
        price: "₹1,200",
        oPrice: "₹1,499"   
    },
    {
        id: 14,
        catagory: "Accessories",
        Title: "boAt Rockers 450 Iron Man",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/71PBWIL5H3L._SL1500_.jpg",
        price: "₹1,500",
        oPrice: "₹1,799"   
    },
    {
        id: 15,
        catagory: "Accessories",
        Title: "boAt Rockers 450 Black Panther",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://infiswap.com/wp-content/uploads/2022/04/boAt-Rockerz-450-Black-panther-1.jpg",
        price: "₹1,500",
        oPrice: "₹1,700"   
    },
    {
        id: 16,
        catagory: "Accessories",
        Title: "boAt Rockers 450 Pro",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://rukminim1.flixcart.com/image/416/416/kmccosw0/headphone/9/h/j/rockerz-450-pro-boat-original-imagf9gyd4u6w85z.jpeg?q=70",
        price: "₹1,300",
        oPrice: "₹1,450"   
    },
    {
        id: 17,
        catagory: "Accessories",
        Title: "boAt Wave Lite",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/41qAgAkiXjL.jpg",
        price: "₹1,200",
        oPrice: "₹1,300"   
    },
    {
        id: 18,
        catagory: "Accessories",
        Title: "SanDisk 32GB 2.0",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://n2.sdlcdn.com/imgs/i/6/1/SanDisk-Cruzer-Blade-USB-Flash-1040103-1-79003.jpg",
        price: "₹499",
        oPrice: "₹600"   
    },
    {
        id: 19,
        catagory: "Accessories",
        Title: "SanDisk 32GB 3.0",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/71bV203ASmL._SL1500_.jpg",
        price: "₹800",
        oPrice: "₹999"   
    },
    {
        id: 20,
        catagory: "Accessories",
        Title: "HP 32GB 3.0",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/61aflcZgumL._SL1400_.jpg",
        price: "₹1,000",
        oPrice: "₹1,200"   
    },
    {
        id: 21,
        catagory: "Accessories",
        Title: "HP 34GB 3.0",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/61xNG4wjOuL._SL1400_.jpg",
        price: "₹1,200",
        oPrice: "₹1,499"   
    },
    {
        id: 22,
        catagory: "Accessories",
        Title: "Jebra Microsoft",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://www.onedirect.co.uk/media/catalog/product/cache/2/image/600x/75fe832f739e7581346979d1fbb4a3c8/g/n/gnevol30dm-2.jpg",
        price: "₹55,00",
        oPrice: "₹6,499"   
    },
    {
        id: 23,
        catagory: "Accessories",
        Title: "Mi Powerbank 20000mAh",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/71lVwl3q-kL._SL1500_.jpg",
        price: "₹1,100",
        oPrice: "₹1,700"   
    },
    {
        id: 24,
        catagory: "Accessories",
        Title: "Sony 10000mAh Powerbank ",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://www.brandedcorporategift.com/ecommerce/upload/images/edit/6121-2017-08-30.jpg",
        price: "₹1,300",
        oPrice: "₹1,699"   
    },
    {
        id: 425,
        catagory: "Hollywood1",
        Title: "James Cameron doesn't have many regrets",
        Blog: "James Cameron doesn't have many regrets -- after all, he has now directed three of the four highest-grossing films of all time. But if he could go back and remake Titanic the film that started his record streak 25 years ago and is being re-released in theaters Friday, there is one thing he would change.<br />Based on what I know today, I would have made the raft smaller, so there's no doubt!\"said Cameron .Such is the film's enduring popularity, even a quarter of a century later debates and theories continue to swirl around the fate of Leonardo DiCaprio's lead character.",
        image: "https://c.ndtvimg.com/2023-02/0kcec388_titanic-_625x300_09_February_23.jpg",
        price: "₹22,000",
        oPrice: "₹23,900"

    },
    {
        id: 426,
        catagory: "Hollywood1",
        Title: "Leonardo DiCaprio is in the headlines for his dating life",
        Blog: "Washington:\n Leonardo DiCaprio is in the headlines for his dating life again! The 48-year-old is now being linked with a 19-year-old model -- but sources have told the US-based media house Page Six that the two aren\'t even dating.\n According to Page Six, the \'Titanic\' star was pictured seated next to model Eden Polani at a music event, fueling the unsubstantiated relationship rumours.\n However, sources denied the rumours while speaking to Page Six - \"There is zero truth to this. He was seated next to (Eden Polani) at a music party, along with many other people.\" ",
        image: "https://c.ndtvimg.com/2023-02/tag2tbho_leonardo_625x300_08_February_23.jpg",
        price: "₹22,000",
        oPrice: "₹23,900"

    },
    {
        id: 427,
        catagory: "Hollywood1",
        Title: "Prayanka chopras new loveAgain cameo with Nick jonsawa",
        Blog: "Just a week ago, Priyanka Chopra Jonas had promised new reveals from her most anticipated romantic film, Love Again. The international superstar kicked off this year’s Valentine’s Day celebrations by dropping the trailer of Love Again, out in theatres on May 12, and starring Sam Heughan and Celine Dion.\n Priyanka Chopra Jonas always has put India on the global map and is big on supporting representation of Indian films on the international platform.",
        image: "https://images.firstpost.com/wp-content/uploads/2023/02/loveagain.jpg?impolicy=website&width=640&height=363",
        price: "₹22,000",
        oPrice: "₹23,900"

    },
    {
        id: 428,
        catagory: "Hollywood1",
        Title: "Rihanna Net Worth",
        Blog: "Rihanna Net Worth: Rihanna is a renowned public figure all across the world. She is highly known for her singing skills. She has delivered multiple hit songs in such a long career of her. Apart from this, she has also acted in certain movies. Talking about her net worth after this magnificent singing career, then as of now her net worth is expected to be about 1.7 billion dollars. And this enormous wealth makes her one of the richest singers in the industry. Talking about the current scenario in the Hollywood music industry, many new singers have done their debut in the music industry but when it is about Rihanna, then she has a special place in the music industry. Starting from scratch, Rihanna has achieved the success she can boast about today.",
        image: "https://imgk.timesnownews.com/story/who_is_rihanna.png?tr=w-600,h-450,fo-auto",
        price: "₹22,000",
        oPrice: "₹23,900"

    },
    {
        id: 429,
        catagory: "Hollywood1",
        Title: "the Rap-God  Eminem ",
        Blog: "Those who are Eminem's fans have heard all his songs, understand the references, and even may remember the lyrics. While the singer has given many timeless hits, one can agree that Eminem's Rap God is above all the songs. The rapper sings extremely fast in the song and has time and again been hailed for his skills. A recent video of Eminem shared on Reddit shows him singing Rap God during a live performance. This video has left many amazed with his ability to speak fast.  \n One person in the Reddit comments wrote, \" Who would have thought 20+ years ago that this dude would become one of the most beloved celebrities and still relevant, popular, and good at the age of 50? His career is older than many of his fans, and it just keeps getting older. My son is listening to his new music at the same age as I was when I first listened to it. That is mind-blowing to me.\" A second person said, \"Damn, he talks faster than l can listen.\" A third user wrote, \"Eminem is probably the only guy I've ever seen declaring himself a god, and everyone just went \"Yeah, that seems about right.",
        image: "https://images.hindustantimes.com/img/2022/11/16/550x309/eminem_bf723cd6-33e4-11e7-b30b-76e7402dac55_1668596639667_1668596639667.jpg",
        price: "₹22,000",
        oPrice: "₹23,900"

    },
    {
        id: 26,
        catagory: "Hollywood",
        Title: "OnePlus 10 Pro",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/61mIUCd-37L._SL1500_.jpg",
        price: "₹19,500",
        oPrice: "₹21,000"

    },
    {
        id: 27,
        catagory: "Hollywood",
        Title: "OnePlus 10 R",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/716uVx3Wr5L._AC_SS450_.jpg",
        price: "₹35,000",
        oPrice: "₹38,499"

    },
    {
        id: 28,
        catagory: "Hollywood",
        Title: "OnePlus Nord 2T",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/617MPEZB5mL._SL1500_.jpg",
        price: "₹16,500",
        oPrice: "₹19,000"

    },
    {
        id: 29,
        catagory: "Hollywood",
        Title: "OnePlus Nord CE 2",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/619n6kxuGsL._SL1500_.jpg",
        price: "₹23,500",
        oPrice: "₹25,500"

    },
    {
        id: 30,
        catagory: "Hollywood",
        Title: "Redmi Note 9 Pro",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://i01.appmifile.com/webfile/globalimg/in/cms/A0F36EF9-A32C-FF2F-E2D5-1FE5124589C2.jpg",
        price: "₹12,500",
        oPrice: "₹13,500"
    },
    {
        id: 31,
        catagory: "Hollywood",
        Title: "Redmi Note 10 Lite",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://i02.appmifile.com/644_operator_in/30/09/2021/71bceaa70d1b789429e32134dc332adb.jpg",
        price: "₹14,500",
        oPrice: "₹16,000"
    },
    {
        id: 32,
        catagory: "Hollywood",
        Title: "Redmi Note 10 Prime",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/817clKAKcqL._SL1500_.jpg",
        price: "₹16,000",
        oPrice: "₹17,500"
    },
    {
        id: 33,
        catagory: "Hollywood",
        Title: "Redmi Note 11 Pro",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/717DeSsnXpL._SL1500_.jpg",
        price: "₹17000",
        oPrice: "₹19,500"
    },
    {
        id: 34,
        catagory: "Hollywood",
        Title: "Redmi Note 11",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/81zLNgcvlaL._AC_SS450_.jpg",
        price: "₹23500",
        oPrice: "₹25,500"
    },
    {
        id: 35,
        catagory: "Hollywood",
        Title: "Samsung Galaxy A13 ",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/81i1A1MgXBL._SL1500_.jpg",
        price: "₹14500",
        oPrice: "₹16,499"
    },
    {
        id: 36,
        catagory: "Hollywood",
        Title: "Samsung Galaxy S20",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/71RxOftVoQL._AC_SS450_.jpg",
        price: "₹20500",
        oPrice: "₹21,000"
    },
    {
        id: 37,
        catagory: "Hollywood",
        Title: "Asus Zenfone 8",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://dlcdnwebimgs.asus.com/gain/c05b6491-6d2b-48f0-81f0-d268840208d6/",
        price: "₹15500",
        oPrice: "₹17,000"
    },
    {
        id: 38,
        catagory: "Hollywood",
        Title: "Asus Zenfone 7",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://dlcdnwebimgs.asus.com/gain/aefee30c-d71b-46ce-9c28-5cf6daf80a03/",
        price: "₹15999",
        oPrice: "₹17,499"
    },
    {
        id: 39,
        catagory: "Hollywood",
        Title: "Google Pixel 4 XL",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/71oTy+incwL._SL1500_.jpg",
        price: "₹16000",
        oPrice: "₹18,000"
    },
    {
        id: 40,
        catagory: "Hollywood",
        Title:   "Google Pixel 5",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_Teaser_Google_Pixel_5.jpg",
        price: "₹17000",
        oPrice: "₹19,500"
    },
    {
        id: 41,
        catagory: "Bollywood",
        Title: "Pathan ",
        Blog: "Shah Rukh Khan's Pathaan has currently made ₹ 430.25 crore at the Indian box office and will overtake the lifetime collection of KGF: Chapter 2 (Hindi) at the end of today's business, reports trade analyst Taran Adarsh. Pathaan collected ₹ 7.50 crore on Day 14 – producers Yash Raj Films have reduced weekday ticket prices as the film's second week winds down. Once Pathaan pushes the Hindi version of KGF: Chapter 2 to third spot, it will Bollywood's second highest earner after the Hindi dub of Baahubali: The Conclusion. Pathaan, co-starring Deepika Padukone and John Abraham, opened in cinemas across the world on January 25.",
        image: "https://c.ndtvimg.com/2023-01/fnl793f_pathaan_625x300_29_January_23.jpg",
        price: "₹98,000",
        oPrice: "₹1,02,499"   
    },
    {
        id: 42,
        catagory: "Bollywood",
        Title: "bollywood masala",
        Blog: "She further extended the caption and involved everyone associated with the making of film.Over the last few months of working on this incredible story written by the maverick Ritesh Shah,Sanjana said.I have been reminded every day why I do what I do.Aniruddha Roy Chowdhury - thank you for making me fall in love with life, and with performing, in a way, I had never known before. Everything was great, but it just got a whole lot better with you holding my hand every step of the way. You are my greatest gift, she further added",
        image: "https://media5.bollywoodhungama.in/wp-content/uploads/2023/01/Sajana-Feature.jpg",
          
    },
    {
        id: 43,
        catagory: "Bollywood",
        Title: "Kiara sids wedding",
        Blog: "It's almost shaadi time for Sidharth Malhotra and Kiara Advani! The much-in-love couple is all set to tie the knot on February 7. Their pre-wedding functions are going on in full swing at the Suryagarh Palace in Jaisalmer, Rajasthan. The guests have already arrived at the venue, and preparations for the grand nuptials are in full swing. The soon-to-be-wed couple never really opened up about their relationship, but their outings and social media PDA spoke volumes about their love for each other. Ahead of the grand wedding, let's take a look at five times Sidharth Malhotra and Kiara Advani proved they are made for each other.",
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202302/ezgif-2-925ce20194_1-sixteen_nine.jpg?VersionId=f7AoReKvIoAwIRHr7mnz8bqD4UvizE8k&size=690:388",
        price: "₹68,000",
        oPrice: "₹75,499"   
    },
     {
        id: 45,
        catagory: "Bollywood",
        Title: "bhuvan bam new updates",
        Blog: "Famous YouTuber and now an actor, Bhuvan Bam is one of the most-loved content creators in India. While he is also the OG of Youtubers in this country, many feel that it is Bhvan’s hard work and success which have opened doors for all the content creators out there. As of now, he has over 25 million subscribers on YouTube and slowly and steadily, he is growing as an actor. The YouTuber made his acting debut on OTT with Taaza Khabar, which received a positive response from the audience.",
        image: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/10/bhuvan-bam-reveals-singing-in-bars-before-youtube-fame-001.jpg"
        ,oPrice: "₹95,499"   
    },
    // {
    //     id: 46,
    //     catagory: "Bollywood",
    //     Title: "",
    //     Blog: "Critic ReviewUser Review When the director is old-school (as in 1989 onwards) with a commitment to storytelling, his songs will be a reflection of how music has always been used for a movie story. It is thus designed, created and recorded with songs tailored to the film’s needs and singers fitting the song’s needs. And Uunchai is no exception.Amit Trivedi gets into the kind of high mode and mood that we last heard from him in Queen (2014), Fitoor (2016) and AndhaDhun (2018) to fashion an all-good score with some exceptional songwriting by lyricist Irshad Kamil. How lyrics can be inspired, simple yet trendy and very meaningful with some ingenious touches is proved in this album. Indeed, Irshad is the twinkling star of this album.more, the excel",
    //     image: "https://stat5.bollywoodhungama.in/wp-content/uploads/2022/11/Uunchai-1-3-306x393.jpg",
    //     price: "₹82,000",
    //     oPrice: "₹92,499"   
    // },
    // {
    //     id: 47,
    //     catagory: "Bollywood",
    //     Title: "Prabhash new goals",
    //     Blog: "Bollywood star Sanjay Dutt has always been a talented actor, who has delivered many powerful performances in his career. The actor made quite a name for himself as an antagonist in Bollywood. Earlier, he was seen in the main antagonist role in several Hindi movies.",
    //     image: "https://d1vzdswwroofzl.cloudfront.net/wp-content/uploads/2022/11/Bollywood-Star-for-Prabhas-Next-2.jpg",
    //     price: "₹78,000",
    //     oPrice: "₹85,499"   
    // },
    // {
    //     id: 48,
    //     catagory: "Bollywood",
    //     Title: "remember first love story ",
    //     Blog: " His chocolaty looks were so popular that upon his debut with Love Story, Kumar Gaurav was dubbed 'Chocolate Kumar' by the film media. He was one of the leading young romantic heroes in the 80s  Ever since he crooned Papa Kehte Hain in his debut film Qayamat Se Qayamat Tak, Aamir Khan was heralded as the 'next chocolate hero' of Hindi cinema, a tag he carried for years",
    //     image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2023/02/09/2571679-screenshot-2023-02-09-132627.png",
    //     price: "₹75,000",
    //     oPrice: "₹82,499"   
    // },
    {
        id: 49,
        catagory: "Traveling",
        Title: "Manali",
        Blog: "With spectacular valleys, breathtaking views, snowcapped mountains, and lush forests of oak, deodar, and pine, Manali is a magical hill station at the northern end of Kullu valley in Himachal Pradesh. Gifted to the world by the mighty Himalayas, it is known to be one of the most popular destinations for Honeymooners. Manali offers magnificent views of the Pir Panjal and the Dhauladhar ranges, covered in a thick blanket of snow for most of the year.\n Over the last few years, Manali has evolved into a place loved by young people looking for more extended stays. With ambient cafes, good wifi availability, small eateries, and convenient shops, Old Manali is among the favorite neighborhood for such people. In addition, many homestays and hostels offer dorm beds for cheap for longer durations. ",
        image: "https://www.holidify.com/images/bgImages/MANALI.jpg",
        price: "₹98,000",
        oPrice: "₹1,02,499"   
    },
    {
        id: 50,
        catagory: "Traveling",
        Title: "Ladakh",
        Blog: "Ladakh is a union territory in the Kashmir region of India. Formerly falling in the state of Jammu & Kashmir, Ladakh was administered a union territory on 31st October 2019. Extending from the Siachen Glacier to the main Great Himalayas, Ladakh is a land like no other. Dominated by dramatic landscapes, Ladakh is known as the world's coldest desert.Stunning Gompas (Tibetan Buddhist monasteries), fluttering prayer flags, whitewashed stupas, Ladakh is a riot of intricate murals and red-robed monks. It is said that only in Ladakh can a man sitting in the sun with his feet in the shade suffer from sunstroke and frostbite at the same time. With a culture similar to Tibetan culture, the people of Ladakh are friendly and welcoming to tourists.",
        image: "https://www.holidify.com/images/bgImages/LADAKH.jpg",
        price: "₹92,000",
        oPrice: "₹99,000"   
    },
    {
        id: 51,
        catagory: "Traveling",
        Title: "Karnataka coorg",
        Blog: "Located amidst imposing mountains in Karnataka with a perpetually misty landscape, Coorg is a popular coffee producing hill station. It is popular for its beautiful green hills and the streams cutting right through them. It also stands as a popular destination because of its culture and people. The Kodavas, a local clan specializing in martial arts, are especially notable for their keen hospitality. Coorg, officially known as Kodagu, is the most affluent hill station in Karnataka. It is well known for its breathtakingly exotic scenery and lush greenery. Forest covered hills, spice and coffee plantations only add to the landscape. Madikeri is the region's centre point with all transportation for getting around starting from here. On a visit to Coorg, cover the beautiful towns like Virajpet, Kushalnagar, Gonikoppal, Pollibetta, and Somwarpet, and experience the beautiful concept of \"homestays\" to make your experience more memorable! ",
        image: "https://www.holidify.com/images/bgImages/COORG.jpg",
        price: "₹82,000",
        oPrice: "₹85,999"   
    },
    {
        id: 52,
        catagory:"Traveling",
        Title: "Amarkantak Tourism",
        Blog: "Amarkantak Tourism'\n' Amarkantak, also known as \"Teerthraj\" (the king of pilgrimages) is located amidst the Vindhya and Satpura mountain ranges in Madhya Pradesh. Situated at an altitude of 1065 meters, Amarkantak is a hill station that offers visitors some of the most exquisite temples that one will ever see. The Narmada river, one of Indias Holy Rivers, originates from Amarkantak rendering this place special. Apart from being the birthplace for the river Narmada, Amarkantak also serves as the confluence point for the rivers Narmada, Sone and Johila. The dense forests of Amarkantak have plants rich in medicinal properties, making it significant from the ecological point of view. It is believed that the mystic poet, Sant Kabir, meditated here on Kabir Chabutra. Amarkantak is known for its rich cultural heritage. ",
        image: "https://www.holidify.com/images/bgImages/AMARKANTAK.jpg",
        price: "₹95,499",
        oPrice: "₹99,000"   
    },
    {
        id: 53,
        catagory: "Food",
        Title: "Patis",
        Blog: "It is basically a bun loaded with tasty as well as healthy fillings and a lot of cheese. Veggies are steamed and are dressed with lettuce, onions, and tomatoes. One can also use meat to make a non-veg burger. Other substitutes like soya beans and hara bhara kababs can also be used if you love a lot of green veggies in your food. You can also add a soya cutlet if you like a soya meal.It is basically a bun loaded with tasty as well as healthy fillings and a lot of cheese. Veggies are steamed and are dressed with lettuce, onions, and tomatoes. One can also use meat to make a non-veg burger. Other substitutes like soya beans and hara bhara kababs can also be used if you love a lot of green veggies in your food. You can also add a soya cutlet if you like a soya meal.",
        image: "https://i0.wp.com/news.jugaadin.com/wp-content/uploads/2020/07/patties.jpg?w=500&ssl=1",
        price: "₹68,000",
        oPrice: "₹72,999"   
    },
    {
        id: 54,
        catagory: "Food",
        Title: "Manchurian",
        Blog: "The word \"Manchurian\" means native or inhabitant of Manchuria (around northeast China), but the dish is basically a creation of Chinese restaurants in India, and bears little resemblance to traditional Manchu cuisine or Northeastern Chinese cuisine.[4] It is said to have been invented in 1975 by Nelson Wang, a cook at the Cricket Club of India in Mumbai, when a customer asked him to create a new dish, different from what was available on the menu.[5] Wang described his invention process as starting from the basic ingredients of an Indian dish, namely chopped garlic, ginger, and green chilis, but next, instead of adding garam masala, he put in soy sauce, followed by cornstarch and the chicken itself.[6] A popular vegetarian variant replaces chicken with cauliflower,[3] and is commonly known as gobi manchurian. Other vegetarian variants include mushroom, baby corn, and veggie ball Manchurian.[citation needed]",
        image: "https://i0.wp.com/news.jugaadin.com/wp-content/uploads/2020/07/manchurian.jpg?w=336&ssl=1",
        price: "₹92,000",
        oPrice: "₹99,000"   
    },
    {
        id: 55,
        catagory: "Food",
        Title: "Pasta",
        Blog: "It is basically a bun loaded with tasty as well as healthy fillings and a lot of cheese. Veggies are steamed and are dressed with lettuce, onions, and tomatoes. One can also use meat to make a non-veg burger. Other substitutes like soya beans and hara bhara kababs can also be used if you love a lot of green veggies in your food. You can also add a soya cutlet if you like a soya meal.\It is basically a bun loaded with tasty as well as healthy fillings and a lot of cheese. Veggies are steamed and are dressed with lettuce, onions, and tomatoes. One can also use meat to make a non-veg burger. Other substitutes like soya beans and hara bhara kababs can also be used if you love a lot of green veggies in your food. You can also add a soya cutlet if you like a soya meal.",
        image: "https://i0.wp.com/news.jugaadin.com/wp-content/uploads/2020/07/pasta.jpg?resize=683%2C1024&ssl=1",
        price: "₹62,000",
        oPrice: "₹65,999"   
    },
    {
        id: 56,
        catagory: "Food",
        Title: "Biryani",
        Blog: "Biryani is a South Asian mixed rice dish with its origins in the Indian subcontinent. It is made with Indian spices, rice, and meat (chicken, beef, goat, pork, or fish), and sometimes, in some vegetarian versions, with vegetables such as potatoes, carrots, or green peas. Biryani is typically cooked in a special type of pot called a biryani handi, where the rice and meat are layered, and then cooked over a slow fire. \nThere are many regional variations of biryani in India, each with its unique blend of spices and cooking techniques. Some of the most popular types of biryani include Hyderabadi Biryani, Lucknowi Biryani, Calcutta Biryani, and Sindhi Biryani.",
        image: "https://i0.wp.com/news.jugaadin.com/wp-content/uploads/2020/07/butter-chicken.jpg?resize=503%2C379&ssl=1",
        price: "₹55,499",
        oPrice: "₹60,000"   
    },
    {
        id: 57,
        catagory: "laptop",
        Title: "Lenevo Yoga C930",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://cdn.vox-cdn.com/thumbor/hGJBYTqCwxAFU4c3XHf8giClI3A=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/12565155/vpavic_180712_2898_yoga_c930_0078.jpg",
        price: "₹48,000",
        oPrice: "₹49,499"   
    },
    {
        id: 58,
        catagory: "laptop",
        Title: "Lenevo ThinkPad X1",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/71krmFgx5pL._SL1500_.jpg",
        price: "₹72,000",
        oPrice: "₹79,000"   
    },
    {
        id: 59,
        catagory: "laptop",
        Title: "Dell Latitute 13",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/13-3320/media-gallery/peripherals_laptop_latitude_3320_gallery_1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3337&hei=2417&qlt=100,0&resMode=sharp2&size=3337,2417",
        price: "₹42,000",
        oPrice: "₹45,999"   
    },
    {
        id: 60,
        catagory: "laptop",
        Title: "Dell Inspiron 7620",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://cdn1.smartprix.com/rx-iXMi3TNHD-w1200-h1200/XMi3TNHD.jpg",
        price: "₹55,499",
        oPrice: "₹59,000"   
    },
    {
        id: 61,
        catagory: "Ipad",
        Title: "Ipad Air 5th Gen",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://img.poorvika.com/cdn-cgi/image/width=450,height=450,quality=75/1600_JPG/Tabs/Apple/Apple-IPad-Air-10-9-Inch-WiFi%20-Cellular-64GB-Space-Grey-MYGW2HNA-4th-Generation/Apple-IPad-Air-10-9-Inch-WiFi-Cellular-64GB-Space-Grey-MYGW2HNA-4th-Generation.jpg",
        price: "₹54,900",
        oPrice: "₹56,900"
    },
    {
        id: 62,
        catagory: "Ipad",
        Title: "Ipad Air A14",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/71SAHzzQqkL._SY450_.jpg",
        price: "₹65,500",
        oPrice: "₹67,900"
    },
    {
        id: 63,
        catagory: "Ipad",
        Title: "Ipad Air 2",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://merchants.infishopper.com/content/images/thumbs/0163509_ipad-air-2-64gb-4g_450.jpeg",
        price: "₹50,500",
        oPrice: "₹60,000"
    },
    {
        id: 64,
        catagory: "Ipad",
        Title: "Ipad Air 3rd Gen",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/61pKdiWVerL._AC_SS450_.jpg",
        price: "58,900",
        oPrice: "₹62,900"
    },
    {
        id: 65,
        catagory: "Ipad",
        Title: "Ipad 11 Pro",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-11-select-202104_GEO_IN_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1617865122000",
        price: "₹60,500",
        oPrice: "₹63,000"
    },
    {
        id: 66,
        catagory: "Ipad",
        Title: "Ipad Pro 10",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647446307-ipad-pro-1647446296.png?crop=1xw:1xh;center,top&resize=480%3A%2A",
        price: "₹75,000",
        oPrice: "₹82,499"
    },
    {
        id: 67,
        catagory: "Ipad",
        Title: "Ipad Pro M1",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://img.poorvika.com/cdn-cgi/image/width=450,height=450,quality=75/1600_JPG/Tabs/Apple/Apple-IPad-Pro-With-Apple-M1-Chip-11-Inch-WiFi-3rd-Generation/Apple-iPad-Pro-With-Apple-M1-Chip-11-Inch-WiFi-128GB-Space-Grey-MHQR3HN-A-3rd-Generation1.jpg",
        price: "₹1,75,500",
        oPrice: "₹1,83,000"
    },
    {
        id: 68,
        catagory: "Ipad",
        Title: "Ipad Pro 10.5 Inch.",
        Blog: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://cdn.alloallo.media/catalog/product/apple/ipad/ipad-pro-10-5-in/ipad-pro-10-5-in-space-gray.jpg",
        price: "₹60000",
        oPrice: "₹67,900"
    }])
    return(
        <store.Provider value={[data,setdata]}>
            {props.children}
        </store.Provider>
    )
}
export default FunctionAPI  