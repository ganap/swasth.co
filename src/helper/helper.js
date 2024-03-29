import graphql_endpoint from '../aws-appsync-url'
import {cloudinary} from "./CLImage";

export const getProgramName = name => name ? name?.split(" ")?.join("-")?.toLowerCase() : "";

export const getImage = img => {
  return graphql_endpoint.BUCKET_URL+img;
};


export function getCloudIDFromImageName(image, source, type = 'lessons') {
  let path = '';
  if (image) {
    let n = image.lastIndexOf('.');
    path =
        `${source?.toLowerCase()}/${
            cloudinaryPaths[source?.toLowerCase()]?.[type]
        }` + image.slice(0, n);
  }
  return path;
}

export const jsonStr = (obj) => {
  return obj
      ? JSON.parse(
          obj.replace(/(\w+:)|(\w+ :)/g, function (matchedStr) {
            return '"' + matchedStr.substring(0, matchedStr.length - 1) + '":';
          }),
      )
      : '';
};

export const getParseDetails = (details) => {
  let temp = typeof details === 'string' ? JSON.parse(details) : details || {};
  return typeof temp === 'string' ? jsonStr(temp) : temp;
};
export const groupName = "dbt-coach-users";

export const cloudinaryPaths = {
  dbt: {
    exercises: 'png/exercises/',
    lessons: 'png/lessons/',
  },
  cbt: {
    exercises: 'png/exercises/',
    lessons: 'png/lessons/',
  },
  act: {
    exercises: 'exercises/',
    lessons: 'lessons/',
  },
  bodhi: {
    activities: 'activities/',
    lessons: 'lessons/',
    tracks: 'tracks/',
    community: 'community/',
    assessments: 'assessments/',
    tools: 'tools/',
    characters: 'characters/',
  },
  coaching:{
    png: 'png/',
    programs: 'png/programs/',
    experts: 'png/experts/',
    organizations: 'png/organizations/',
  }
};

export const home =[
  {
    comment:'I have spent years in talk therapy and when my friend suggested to try an alternate approach, I was skeptical at first. But I think you guys really saved my life.'
  },
  {
    comment:'I love the way I can share everything with my therapist and have access to evidence based treatment.'
  },
  {
    comment:'A great way to document symptoms and moods as well as great help to cope in crisis!!! Easier than always carrying my notebook from treatment. Love the simplicity and focus question!!!'
  },
  {
  comment:'Definitely saved my life. I couldn\'t afford or had access to a therapist in my town.'
  },
  {
    comment:'Amazing! This app has been more useful to me than therapy has, it has so many great resources and the in crisis survival list, the checkin feature is very useful. ive just started using the diary option but ive found it incredibly useful. Also, the ability to track moods and activities are great. Love the meditations too.. Could give 10 stars :)'
  },
  {
    comment:'Thank you I\'ve needed DBT my whole life and finding DBT meetings isn\'t as common and easy as you might think. Haveing DBT in my pocket when ever I need it is just what I\'ve been looking for. Thank you for taking the time to create this app you\'ve probably helped more ppl than you know.'
  }
];
export const dbtcoach=[
  {
    name:'ASHLEY GANTT',
    comment:'Wow! They have create a video for every skill. It is very easy to follow. I am learning DBT on my own and found this lot more easier than reading the manual and learning on the internet. Also I can access from anywhere. I don’t know all aspects of DBT yet , but I am sure this App will take me all the way there. Great job and thanks for saving my life. My nearest DBT Therapist is 100+ miles away'
  }, {
    name:' MAGGIE SMITH',
    comment: 'Very useful. I wish this was in German. But the videos make it great. Diary card design is great. Love the meditations. An all in one great app.'
  }, {
    name:' RICKY3816',
    comment:'I just downloaded this app because I was recently diagnosed with borderline personality disorder. I like the detailed explanations of skills and practice ideas. Also how easy it is to do my diary card entries. My therapist also loves the format of the diary card report'
  }, {
    name:'DANIEL SMITH',
    comment:'The breadth of knowledge in this app is astounding. You don’t need to carry a 10 lb book, but can do everything at your fingertips from anywhere. The diary card design is awesome. Love the summary - especially diary card streak. And love the achievements section. Still looking into other areas..'
  }, {
    name:'CHERYL ATWOOD',
    comment: 'Visually appealing at the same time very comprehensive. This is the best DBT app and may be mental health app on playstore. I don’t need to download multiple apps for diary card, meditations and crisis list etc.'
  }, {
    name:'ESTHER B',
    comment:'I  love this app. Just started exploring and cant believe how pleased I am. I have been looking for an app like this for a while. Thanks developer! If there was an option to give more than 5 stars, I would give 10.'
  }, {
    name:' JACKSEAGER224221',
    comment:'Thank you for building a beautiful and complete app that covers everything in DBT. Love the design. A lot of thought has been put into this app. I love that I can customize my Diary Card skills and targets. Further, statistics, graphs and streak keeps me grounded with DBT Skills. There are so many coach, anyone serious about keeping on track with DBT skills should use this app.'
  }, {
    name:' STEVEN BLANK507',
    comment:'Very professional looking app. Covers everything about DBT. I am going to use meditations from here I think. I am already paying 10$ for a meditation app. This has it all.. Havent spent much time exploring the details of DBT but so far really like it.'
  }, {
    name:' ALIX NEWMAN',
    comment:'The app is fairly comprehensive. Seems like the developer has really understood DBT therapy, groups and what is involved with it. I was skeptical at first, but as I dug into it I realized how much detailed this is. I love the design. There\'s so much info packed in such a small form factor.'
  }, {
    name:'NICOLA M672',
    comment:'Excellent! This will be my go to app for DBT from now on. Have been frustrated with low usability of existing apps on playstore. There is so much detail in this. A skills group member told me today that I can do my worksheets on this app. Wow! I didn’t even realize that and I was still amazed by the ap'
  }, {
    name:'KENDRA JACKSON57',
    comment:'WOW! Excellent app! I had been struggling to practice DBT because I didn\'t always have a pen & paper on hand... Since I DO always have my device handy, this will improve tremendously my use of daily Diary cards. Further the content is so rich. I am a visual person - so the videos are perfect. There are so many coach, I am just in love with it.'
  },
];
export const dbtdaily=[
  {
    name:' EMMA G',
    comment:'Love it! This is my goto app for all things DBT and meditation and when I am in a crisis. One suggestion is if you can include urge surfing ability in the app. Then I wouldn’t use any other app for mental health'
  }, {
    name:' HOLT D',
    comment: 'This app is simple and easy to record entries and journal. Also love the skill explanations and practice ideas. Love the reminders feature where I can create custom reminders for anything. The affirmations also get me going in the morning. Also the fact that I can do my diary card entries and learn skills using multiple devices and be all automatically synced to the same account is fabulous.'
  }, {
    name:'TOM WYATT',
    comment:'I just downloaded this app because I was recently diagnosed with borderline personality disorder. I like the detailed explanations of skills and practice ideas. Also how easy it is to do my diary card entries. My therapist also loves the format of the diary card report'
  }, {
    name:' GERALDINE P',
    comment:'Very intuitive. I love the way all the screens are laid out and how easily I can add and update my own skills, crisis items etc. One thing I would suggest is to add the fb and Google sign ups. It\'s a bit hard to signup with verification code etc..'
  }, {
    name:' LISA SWAPP',
    comment: 'This is by far the best dbt app out there. These diary cards help me and my therapist keep account of what\'s going on with me.'
  }, {
    name:'A GOOGLE USER',
    comment: 'I love this app. I used the DBT 911 dairy card app before and now I feel that is so clunky. The skill detail and practice ideas are so well done. Love it. Also crisis management list awesome. I can see how I used this item before and now that is great. This is my new favorite app.'
  }, {
    name:'A GOOGLE USER',
    comment:'Thank you. I\'ve needed DBT my whole life and finding DBT meeting isn\'t as common and easy as you might think. Having DBT in my pocket whenever i need it is just what I\'ve been looking for. Thank you for taking the time to create thia app you\'ve probably helped than you know.'
  }, {
    name:' A GOOGLE USER',
    comment:'Super amazing app, the design is really easy to navigate and there\'s so much important detail that makes the app my favorite. The support team answered me within a few minutes and fixed the issue I had with my subscription within less than a day:) super helpful'
  }, {
    name:' IQBAL KHARAL',
    comment:'Amazing! This app has been more useful to me than therapy has, it has so many great resources and the in crisis survival list, the checkin feature is very useful. ive just started using the diary option but ive found it incredibly useful. Also, the ability to track moods and activities are great. Love the meditations too.. Could give 10 stars :)'
  }, {
    name:' A GOOGLE USER',
    comment:'Simple and user friendly, logs the data with helpful reminders This has a lot of good stuff in it, The summary is awesome. I can find pattens on my behavior and see how my skills are helping me over time. DBT\'ers gotto have this app. And make sure you upgrade to get the summary'
  }, {
    name:' PETER JHON',
    comment:'Beautiful app! would give a 10 if it was possible. Love it! Finally someone who knows DBT seems like has designed and built the app. I have everything about DBT on my phone. Enough of lugging around the 3 lb manual and forgetting it at work or home. Also just set up the Alexa skill. Wow! I am hooked...'
  }, {
    name:' CARRY MINATI',
    comment:'Excellent I\'ve studied DBT for years and this is a great little tool to have with you to help you when you are going through though times.'
  },
];
export const lifeCoach=[
  {
    name:'Sophia',
    comment:'I was expecting a session with Sarah where she would advise me directions to take to make my life happy. She instead taught me how to choose my own directions and grow as a person for unlimited happiness. I discovered the need to set goals, achieve them and celebrate. Since taking coaching sessions, I have gone back to music playing, studying, meeting new people, contacting old friends. It has also helped me strengthen relationships with my family.'
  }, {
    name:'Emma',
    comment: 'Thanks for your email summary of our session. I must admit, I was quite exhausted after our meeting. I thought it would be very rational, focused on sharing information, but it was quite the contrary. I was still shaken the whole day. I noticed that something was happening to me inside. My head was spinning. I didn’t expect it to happen so fast. I realize I am in a very fortunate situation and I will try to make the best out of it. Thanks again for your time, knowledge, insights and inspiration! It has really added value to my life.'
  }, {
    name:' Jacob',
    comment:'Doing life coaching has allowed me to take control of my life – I decide what I want and when. When I focus on something I want, I program myself to choose what happens. When you leave what happens in life to chance, you give away your power to have what you want in life. I’ve realised that I am blessed with abundant resources for achieving my goals. I need to reward myself for working hard towards my goals. The skills I’ve gained from coaching have allowed me to take control of my life and develop a leadership mentality and be able to guide other people to realise their goals.'
  }, {
    name:'Daniel',
    comment:'From our first meeting Sarah really made me think about what it was I wanted to do, structuring my goals in a way that I’d never thought of before, helping me focus on the things that really mattered to me and how I could achieve them, ultimately finding the right job for me. The weekly sessions reignited a dwindling self-belief and hunger that inspired me to get back on track and find the job I wanted. I had decided to change career path completely, which in itself was totally overwhelming in the fact that I simply didn’t know what to do or how to go about it. Sarah’s pragmatic take on things was a massive help.'
  }, {
    name:'Lisa',
    comment: 'As a result of the coaching with Sarah I have been able to become more organised, with a positive outlook, seriously cut down my alcohol intake and exercise more. These changes have had a major impact on my life and the people around me. When I launch into the next project in my life I will definitely be giving Sarah a call. It was cheaper than gym membership and with much more benefit.'
  }, {
    name:'Esther',
    comment:'When I started with Coach Michele, I did not know anything about coaching.  I called her because she helped a friend of mine make a career transition that was perfect for her and I had the opportunity to make a change and did not know where to start.    '
  }, {
    name:'Jack',
    comment:'Life Coaching with Michele changed my life. I was at a standstill for over 10 years working a Corporate job I didnt like. After 1 month of working with her I found a school to attend, my confidence increased in making a decision and I was able to move forward. I ended taking the package from Corporate and now I have the job of my dreams. I am a Holistic Health Counselor. I see clients privately and I do cooking classes and seminars. I never imagined what working with Michele would have done. A great experience but also a necessary one to make things happen in my life. I cannot thank her enough.    '
  }
];


export const expertsData = [{
  name:"Dr. Dennis Tirch",
  img:"tirch_profile.jpg",
  description:"Dr Dennis Tirch founded the USA’s Center for Compassion Focused Therapy and is current President of The Compassionate Mind Foundation USA. He is in demand for international workshops and invited speeches.",
  expertise: "Founder of The Center for Compassion Focused Therapy",
  "slug":"dennis-tirch"
},{
  name:"Dr. Philip Zimbardo",
  img:"philip_profile.jpg",
  description:"Dr Philip Zimbardo is one of the most well known psychologists of the second half of the twentieth century. Best known for the Stanford Prison Experiment of 1971, his research has covered the psychology of evil, cult behavior, shyness and heroism.",
  expertise: "Emeritus Professor of Psychology at Stanford University and President of the Heroic Imagination Project",
  "slug":"philip-zimbardo"
},{
  name:"Deirdre Fay",
  img:"d-fay_profile.jpg",
  description:"Deirdre Fay, MSW, works with people who have had crummy histories to develop an inner platform to get their needs met and have success in all areas of life.  With over 30 years of experience as a psychotherapist and educator, Deirdre brings together modern science with ancient wisdom traditions in exploring the Transformational Journey of life.",
  expertise: "Psychotherapist and Educator and Founder of Becoming Safely Embodied skills groups",
  "slug":"deirdre-fay"
},{
  name:"Dr. Tiffany Loggins",
  img:"tiffny_loggins_profile.jpg",
  description:"Tiffany Loggins, Psy.D. is a licensed psychologist and mental health wellness speaker. She specializes in minority stress within BIPoC (Black, Indigenous, & People of Color) communities, emotional resilience, and eating disorders.",
  expertise: "Doctor of Psychology, Counseling Psychology",
  "slug":"tiffany-loggins-psyd"
},{
  name:"Dr Stan Steindl",
  img:"stan-profile.jpg",
  description:"Dr Stan Steindl is an Australian clinical psychologist with over 20 years experience as a therapist, supervisor, trainer and researcher. He is passionate about motivational interviewing and compassion focused therapy and presents on these topics around the world.",
  expertise: "Director of Psychology Consultants Pvt Ltd and Adjunct Associate Professor at School of Psychology, University of Queensland",
  "slug":"stan-steindl"
},{
  name:"Dr. Yotam Heineberg",
  img:"yotam_profile.jpg",
  description:"After completing his doctorate at PGSP-Stanford Consortium, he did his post-doctoral training and acted as a healthcare Fellow at Stanford University (CCARE) where he developed various programs focused on resilience, team building and compassion.",
  expertise: "Clinical psychologist and a clinical faculty member at Palo Alto University",
  "slug":"yotam-heineberg"

},{
  name:"Tara Deliberto, PhD",
  img:"tara-profile.jpg",
  description:"Tara Deliberto, PhD, is a clinical psychologist and the primary author of the book Treating Eating Disorders in Adolescents, published by New Harbinger.  Dr. Deliberto currently maintains a private practice while providing education about body image and eating disorders. She also serves as a senior advisor at Equip, an innovate health company.",
  expertise: "Founder and Director of Integrated Treatment LLC,  author of Treating Eating Disorders in Adolescents, consultant at Equip Health, founder and former director of New York Presbyterian Hospital’s Eating Disorders Partial Hospitalization Program, former assistant professor at Weill Cornell Medicine",
  "slug":"tara-deliberto"
}
];

export const colors = ["blue-tag","pink-tag","purple-tag"];
export const initialBlogsCount = 6;


export const CONTENT_PATH = 'https://d2ot3z5xcrn0h2.cloudfront.net/';

export const getCoachingVideo = (filename) => {
    return `${CONTENT_PATH}videos/coaching/${filename}`;
};

export const getInitials = word => {
    const fullWords = word && word?.split(' ');
    const initials = fullWords?.shift()?.charAt(0) + fullWords?.pop()?.charAt(0);
    return initials?.toUpperCase();
};

export const getCLImageUrl = (image,source,type,noOtions = false) => {
  const img = getCloudIDFromImageName(
      image,
      source,
      type,
  );
  let opts = {};
  Object.assign(
      opts,
      {
        crop: 'fill',
        gravity: 'face',
        format: 'jpg',
        quality: 100,
        secure: true,
      },
  );
  if(!noOtions) {
      opts.width = 1200;
      opts.height = 800;
  }
  return cloudinary.url(img, opts);
};
