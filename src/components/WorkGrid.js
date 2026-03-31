import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import WorkCard from './WorkCard';

export const getYearLabel = (year) => String(year);

const works = {
  en: [
    {
      id: 8,
      title: 'EuroStay',
      description: "World's #1 Chinese backpacker community in Europe",
      year: 2026,
      image: `${process.env.PUBLIC_URL}/work/2026/1.png`,
      category: 'Group. UI. UX. Events',
      evaluation: 'Connect people. Explore life. Unlock possibilities.',
      rating: 6
    },
    {
      id: 261,
      title: 'Flavorblocks',
      description: 'A small game designed for my parents to pass the time.',
      year: 2026,
      image: `${process.env.PUBLIC_URL}/side/GameDesign-Flavorblocks/1.png`,
      category: 'Individual. Game Design',
      evaluation: 'Designed for my parents to pass the time. Taste life.',
      rating: 6
    },
    {
      id: 262,
      title: 'Color&Color',
      description: 'A simple "match" game featuring socks, planned to evolve into various derivative matching games.',
      year: 2026,
      image: `${process.env.PUBLIC_URL}/side/GameDesign-Color&Color/1.png`,
      category: 'Individual. Game Design',
      evaluation: 'A simple "match" game featuring socks. Fun and colorful!',
      rating: 6
    },
    {
      id: 11,
      title: 'Cobrush',
      description: 'A collaborative system that enables humans and robots to paint together through multi-turn interactions.',
      year: 2025,
      image: `${process.env.PUBLIC_URL}/work/2025/Cobrush/1.png`,
      category: 'Group. HCI. Programming',
      evaluation: 'The project with the highest workload and longest duration. What a TUD graduation project......Owes me a software engineering degree.',
      rating: 6
    },
    {
      id: 1,
      title: 'Pixelated Adventures',
      description: 'A board game design offering a novel way for people to share their travel memories.',
      year: 2024,
      image: `${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/1.png`,
      category: 'Individual. UX. Product',
      evaluation: 'The electronic version is launched. An addictive social game.',
      rating: 6
    },
    {
      id: 2,
      title: 'E.C.H.O.',
      description: 'Explores the role of robots in future neighborhoods.',
      year: 2024,
      image: `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/1.png`,
      category: 'Group. Programming. Artificial Intelligence. Product',
      evaluation: 'A very challenging project, but we completed it very well!',
      rating: 5.5
    },
    {
      id: 7,
      title: 'Atag Induction Hob',
      description: 'Redesign the Atag Induction Hob for enhanced usability, targeting a dependable and convenient cooking experience at home.',
      year: 2024,
      image: `${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/1.png`,
      category: 'Group. UI. UX. Redesign',
      evaluation: 'Very harmonious group collaboration, UX research is very organized.',
      rating: 6
    },
    {
      id: 14,
      title: 'Intimate Relationship',
      description: 'An immersive experience exploring Klimt\'s "The Kiss" using graphic processing technology.',
      year: 2024,
      image: `${process.env.PUBLIC_URL}/work/2024/4IntimateRelationship/1.png`,
      category: 'Individual. Digital Artwork. Programming Modelling',
      evaluation: 'Could be made more complex and interesting',
      rating: 5
    },
    {
      id: 3,
      title: 'Lambanana Tour',
      description: 'A guide map and souvenir for the Museum of Liverpool designed to encourage children to be more active and knowledgeable when visiting.',
      year: 2023,
      image: `${process.env.PUBLIC_URL}/work/2023/1LambananaTour/1.png`,
      category: 'Individual. Child Play. Museum',
      evaluation: 'Most museums are boring; I hope to gamify all museums.',
      rating: 6
    },
    {
      id: 263,
      title: 'Blender',
      description: 'A collection of 3D modeling experiments in Blender.',
      year: 2023,
      image: `${process.env.PUBLIC_URL}/side/blender/5.png`,
      category: 'Individual. 3D Modelling. Design',
      evaluation: 'Blender is a powerful tool. I love the process of creating 3D worlds.',
      rating: 6
    },
    {
      id: 4,
      title: 'Lemur Go',
      description: 'A device designed for people to interact remotely with lemurs in the zoo, helping animals during lockdowns and assisting zoos recoup financial losses.',
      year: 2023,
      image: `${process.env.PUBLIC_URL}/work/2023/2LemurGo/1.png`,
      category: 'Individual. Well-being. Zoo. Installation',
      evaluation: "Oh~ Come and play with these lovely creatures for a while.",
      rating: 6
    },
    {
      id: 5,
      title: 'Doozi',
      description: 'A set of wheelchair accessories for children with disabilities, featuring a domino cart for multi-skill learning and a musical puzzle carpet for interactive entertainment.',
      year: 2022,
      image: `${process.env.PUBLIC_URL}/work/2022/1Doozi/1.png`,
      category: 'Group. Well-being. Child Play. Programming',
      evaluation: 'I took this more seriously than my undergraduate graduation project; awarded myself a mechanical engineering degree.',
      rating: 6
    },
    {
      id: 6,
      title: 'Happy Little Pill',
      description: 'An inclusive banded pill box designed for elderly people with Alzheimer\'s to help them with daily medication needs, raising awareness of the importance of inclusive design.',
      year: 2022,
      image: `${process.env.PUBLIC_URL}/work/2022/2HappyLittlePill/1.png`,
      category: 'Group. Well-being. UX. UI',
      evaluation: 'Is there anything I cannot do?',
      rating: 6
    },
    {
      id: 15,
      title: 'Bottle Opener',
      description: 'Exploring the fusion of Art Deco and compact kitchenware.',
      year: 2021,
      image: `${process.env.PUBLIC_URL}/work/2021/1Bottle Opener/1.png`,
      category: 'Individual. Product Design',
      evaluation: 'I really like this design approach, with a specific design style as a reference.',
      rating: 5
    },
    {
      id: 21,
      title: 'Pizza Box',
      description: 'Product packaging design.',
      year: 2021,
      image: `${process.env.PUBLIC_URL}/work/2021/2PizzaBox/1.png`,
      category: 'Individual. Product Packaging Design',
      evaluation: 'Although UX research was difficult during the pandemic, I love my unconventional thinking and hands-on ability at that time.',
      rating: 4
    },
    {
      id: 22,
      title: 'Bike Refurbishment',
      description: 'Helping improve children\'s bike learning experience.',
      year: 2021,
      image: `${process.env.PUBLIC_URL}/work/2021/3Bike/1.png`,
      category: 'Group. Product Design. Child Play',
      evaluation: 'A super memorable and perfect group collaboration. Team formation was wonderful. Our first real-world project together.',
      rating: 6
    },
    {
      id: 16,
      title: 'Calorie Calculator',
      description: 'A web tool to support people on their weight-loss journey.',
      year: 2020,
      image: `${process.env.PUBLIC_URL}/work/2020/1CalorieCalculator/1.png`,
      category: 'Individual. Web Design',
      evaluation: 'A very casual website design, just for calculating calories... Surprised this project was allowed to get marks, though I do like that gradient color.',
      rating: 2
    },
    {
      id: 20,
      title: 'Chair Modelling',
      description: 'Unleash imagination and practice modelling skills.',
      year: 2020,
      image: `${process.env.PUBLIC_URL}/work/2020/2Chair/1.jpg`,
      category: 'Individual. Modelling',
      evaluation: 'I love modelling and Creo, but remember: NEVER save your work while in the sketch interface......',
      rating: 6
    },
    {
      id: 17,
      title: 'Hammer',
      description: 'Engineering drawings and model making.',
      year: 2019,
      image: `${process.env.PUBLIC_URL}/work/2019/1Hammer/1(1).jpg`,
      category: 'Individual. Industrial Design',
      evaluation: 'Yay! First place in engineering drawings and second in model making! So happy to become a teaching case with my best friend. Even happier to see another friend\'s 5/100 marks hammer hhh.',
      rating: 6
    },
    {
      id: 18,
      title: 'Superman',
      description: 'Load-bearing cardboard chair challenge.',
      year: 2019,
      image: `${process.env.PUBLIC_URL}/work/2019/2Superman/1.jpg`,
      category: 'Group. Industrial Design',
      evaluation: 'Underestimated the load-bearing capacity of two cardboards, but did a deep dive into structural design.',
      rating: 5
    },
    {
      id: 19,
      title: 'Banana Skateboard',
      description: 'Physical measurement and 3D modeling of a chosen vehicle (skateboard).',
      year: 2019,
      image: `${process.env.PUBLIC_URL}/work/2019/3BananaBorad/1.png`,
      category: 'Individual. Modelling. Industrial Design',
      evaluation: 'I will remember the time spent painstakingly measuring with a ruler and hand-crafting the skateboard model. The curves of the bearings are so beautiful.',
      rating: 5.5
    },
  ],
  zh: [
    {
      id: 8,
      title: '欧洲换宿EuroStay',
      description: '世界第一的欧洲华人背包客社区',
      year: 2026,
      image: `${process.env.PUBLIC_URL}/work/2026/1.png`,
      category: '团队. UI. UX. 活动',
      evaluation: '链接，探索，解锁生活的可能性',
      rating: 6
    },
    {
      id: 261,
      title: 'Flavorblocks',
      description: '想为爸爸妈妈设计一些打磨时间的小游戏。',
      year: 2026,
      image: `${process.env.PUBLIC_URL}/side/GameDesign-Flavorblocks/1.png`,
      category: '个人项目. 游戏设计',
      evaluation: '为爸爸妈妈设计的小游戏，很有趣。',
      rating: 6
    },
    {
      id: 262,
      title: 'Color&Color',
      description: '想做一个袜子对对碰的小游戏，这个是简易版本的match，之后会做很多衍生的match。',
      year: 2026,
      image: `${process.env.PUBLIC_URL}/side/GameDesign-Color&Color/1.png`,
      category: '个人项目. 游戏设计',
      evaluation: '很有意思的小项目。',
      rating: 6
    },
    {
      id: 11,
      title: 'Cobrush',
      description: '一个让人和机械臂能够通过多轮交互一起绘画的协同系统',
      year: 2025,
      image: `${process.env.PUBLIC_URL}/work/2025/Cobrush/1.png`,
      category: '团队. HCI. 编程',
      evaluation: '工作量最大周期最长的一个项目，不愧是TUD的毕设，欠我一个软件工程师学位',
      rating: 6
    },
    {
      id: 1,
      title: '像素大冒险',
      description: '一款桌面实体互动游戏，为人们分享旅行回忆提供了一种新颖的方式。',
      year: 2024,
      image: `${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/0.png`,
      category: '个人项目. UX. 产品',
      evaluation: '最终落地电子版，玩不厌的社交破冰游戏',
      rating: 6
    },
    {
      id: 2,
      title: 'E.C.H.O.',
      description: '探索机器人在未来社区中的角色。',
      year: 2024,
      image: `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/1.png`,
      category: '团队. 程序设计. 人工智能. 产品',
      evaluation: '很具挑战的项目，但我们完成得很好！',
      rating: 5.5
    },
    {
      id: 7,
      title: 'Atag 电磁灶设计',
      description: '重新设计Atag感应炉，提升可用性，旨在提供可靠且便捷的家庭烹饪体验。',
      year: 2024,
      image: `${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/1.png`,
      category: '团队. UI. UX. 重新设计',
      evaluation: '很和谐的小组合作，UX研究非常有条理',
      rating: 6
    },
    {
      id: 14,
      title: '沉浸式艺术：《吻》',
      description: '使用图形处理技术探索克林姆特《吻》的沉浸式体验。',
      year: 2024,
      image: `${process.env.PUBLIC_URL}/work/2024/4IntimateRelationship/1.png`,
      category: '个人项目. 数字艺术. 建模',
      evaluation: '可以做得再复杂有趣一点',
      rating: 5
    },
    {
      id: 3,
      title: 'Lambanana Tour',
      description: '为利物浦博物馆设计的导览地图和纪念品，鼓励儿童在参观博物馆时更加积极和知识丰富。',
      year: 2023,
      image: `${process.env.PUBLIC_URL}/work/2023/1LambananaTour/1.png`,
      category: '个人项目. 儿童游戏. 博物馆',
      evaluation: '大多数的博物馆都很无聊，希望能游戏化所有博物馆',
      rating: 6
    },
    {
      id: 263,
      title: 'Blender',
      description: '在 Blender 中进行的一系列 3D 建模实验。',
      year: 2023,
      image: `${process.env.PUBLIC_URL}/side/blender/5.png`,
      category: '个人项目. 3D 建模. 设计',
      evaluation: 'Blender 是一个非常强大的工具，我喜欢创造 3D 世界的过程。',
      rating: 6
    },
    {
      id: 4,
      title: 'Lemur Go',
      description: '为人们设计的远程与动物园狐猴互动的装置，帮助封锁期间的动物，并协助动物园挽回部分财务损失。',
      year: 2023,
      image: `${process.env.PUBLIC_URL}/work/2023/2LemurGo/1.png`,
      category: '个人项目. 健康福祉. 动物园. 装置',
      evaluation: '哦~快来跟这些可爱的生物们玩一会儿',
      rating: 6
    },
    {
      id: 5,
      title: 'Doozi',
      description: '为残疾儿童设计的轮椅配件套装，包含多技能学习骨牌推车和互动音乐拼图地毯。',
      year: 2022,
      image: `${process.env.PUBLIC_URL}/work/2022/1Doozi/1.png`,
      category: '团队. 健康福祉. 儿童游戏. 编程',
      evaluation: '这个做得比本科毕设还认真，奖励自己一个机械工程学位',
      rating: 6
    },
    {
      id: 6,
      title: '快乐小药盒',
      description: '为患有阿尔茨海默症的老年人设计的包容性带状药盒，帮助他们满足日常用药需求，提高对包容性设计重要性的认识。',
      year: 2022,
      image: `${process.env.PUBLIC_URL}/work/2022/2HappyLittlePill/1.png`,
      category: '团队. 健康福祉. UX. UI',
      evaluation: '还有什么我不会的？',
      rating: 6
    },
    {
      id: 15,
      title: '开瓶器',
      description: '探索经典艺术风格与小型厨具的结合',
      year: 2021,
      image: `${process.env.PUBLIC_URL}/work/2021/1Bottle Opener/1.png`,
      category: '个人项目. 产品设计',
      evaluation: '很喜欢这种设计思路，有一个设计风格作参考',
      rating: 5
    },
    {
      id: 21,
      title: '披萨盒',
      description: '产品包装设计。',
      year: 2021,
      image: `${process.env.PUBLIC_URL}/work/2021/2PizzaBox/1.png`,
      category: '个人项目. 产品包装设计',
      evaluation: '虽然疫情期间用研不方便做，但是喜欢当时自己的跳脱思维和动手能力',
      rating: 4
    },
    {
      id: 22,
      title: '单车改造',
      description: '帮助提升儿童学车体验。',
      year: 2021,
      image: `${process.env.PUBLIC_URL}/work/2021/3Bike/1.png`,
      category: '团队. 产品设计. 儿童游戏',
      evaluation: '超级难忘完美的一次小组合作，自由组队实在是太美妙了，一起完成的人生中第一个落地项目',
      rating: 6
    },
    {
      id: 16,
      title: '卡路里计算器',
      description: '为减重人群做一点小贡献。',
      year: 2020,
      image: `${process.env.PUBLIC_URL}/work/2020/1CalorieCalculator/1.png`,
      category: '个人项目. 网页设计',
      evaluation: '很随意的一个网站设计，居然计算卡路里......这种作品居然被允许得分，虽然我喜欢这个渐变色',
      rating: 2
    },
    {
      id: 20,
      title: '椅子建模',
      description: '释放想象力，练习建模能力',
      year: 2020,
      image: `${process.env.PUBLIC_URL}/work/2020/2Chair/1.jpg`,
      category: '个人项目. 建模',
      evaluation: '喜欢建模，喜欢Creo但是记得一定不要在草稿界面保存作品......',
      rating: 6
    },
    {
      id: 17,
      title: 'Hammer',
      description: '画工程图和制作模型',
      year: 2019,
      image: `${process.env.PUBLIC_URL}/work/2019/1Hammer/1(1).jpg`,
      category: '单人项目. 工业设计',
      evaluation: '耶图纸得分第一模型得分第二！跟好朋友一起成为教学案例非常开心，看到另一个好朋友5/100分的锤子我更开心了hhh',
      rating: 6
    },
    {
      id: 18,
      title: 'Superman',
      description: '承重纸板椅子挑战',
      year: 2019,
      image: `${process.env.PUBLIC_URL}/work/2019/2Superman/1.jpg`,
      category: '团队. 工业设计',
      evaluation: '低估了两个纸板的承重能力，但是狠狠地研究了一下承重结构',
      rating: 5
    },
    {
      id: 19,
      title: '香蕉滑板',
      description: '选一个交通工具进行实物测量和建模',
      year: 2019,
      image: `${process.env.PUBLIC_URL}/work/2019/3BananaBorad/1.png`,
      category: '个人项目. 建模. 工业设计',
      evaluation: '会记得用尺子辛辛苦苦测量，手搓轮滑模型的时光，原来轴承的曲面那么美',
      rating: 5.5
    },
  ],
};

// 按年份分组
const groupByYear = (list) => {
  const grouped = list.reduce((acc, work) => {
    const year = work.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(work);
    return acc;
  }, {});

  // Sort works within each year by rating (most stars first)
  Object.keys(grouped).forEach(year => {
    grouped[year].sort((a, b) => (b.rating || 0) - (a.rating || 0));
  });

  return grouped;
};

export const getYears = (lang) => {
  const list = works[lang] || works.en;
  return Object.keys(groupByYear(list)).sort((a, b) => Number(b) - Number(a));
};

/** All works for current language, sorted by year descending (newest first). */
export const getWorksListByYear = (lang) => {
  const list = works[lang] || works.en;
  return [...list].sort((a, b) => {
    if (Number(b.year) !== Number(a.year)) {
      return Number(b.year) - Number(a.year);
    }
    return (b.rating || 0) - (a.rating || 0);
  });
};

function WorkGrid() {
  const { language } = useLanguage();
  const [selectedGame, setSelectedGame] = useState(null);

  const worksList = works[language] || works.en;
  const worksByYear = groupByYear(worksList);
  const years = Object.keys(worksByYear).sort((a, b) => Number(b) - Number(a));
  const allWorks = years.flatMap(year => worksByYear[year]);

  const gameModalsData = {
    261: {
      en: {
        title: 'Flavorblocks',
        description: 'A small game designed for my parents to pass the time.',
        link: { text: 'Play Game: ', url: 'https://qinlin619.github.io/FlavorBlocks/' },
        images: [1, 2, 3, 4, 5].map(n => ({ type: 'image', url: `/side/GameDesign-Flavorblocks/${n}.png`, title: `Screenshot ${n}` }))
      },
      zh: {
        title: 'Flavorblocks',
        description: '想为爸爸妈妈设计一些打磨时间的小游戏。',
        link: { text: '游玩链接：', url: 'https://qinlin619.github.io/FlavorBlocks/' },
        images: [1, 2, 3, 4, 5].map(n => ({ type: 'image', url: `/side/GameDesign-Flavorblocks/${n}.png`, title: `截图 ${n}` }))
      }
    },
    262: {
      en: {
        title: 'Color&Color',
        description: 'A simple "match" game featuring socks, planned to evolve into various derivative matching games.',
        link: { text: 'Play Game: ', url: 'https://qinlin619.github.io/Color-Color/' },
        images: [1, 2, 3, 4].map(n => ({ type: 'image', url: `/side/GameDesign-Color&Color/${n}.png`, title: `Screenshot ${n}` }))
      },
      zh: {
        title: 'Color&Color',
        description: '想做一个袜子对对碰的小游戏，这个是简易版本的match，之后会做很多衍生的match。',
        link: { text: '游玩链接：', url: 'https://qinlin619.github.io/Color-Color/' },
        images: [1, 2, 3, 4].map(n => ({ type: 'image', url: `/side/GameDesign-Color&Color/${n}.png`, title: `截图 ${n}` }))
      }
    },
    263: {
      en: {
        title: 'Blender',
        description: 'A collection of 3D modeling experiments in Blender.',
        images: [
          { type: 'image', url: '/side/blender/1.png', title: 'Modelling Practice 1' },
          { type: 'image', url: '/side/blender/2.png', title: 'Modelling Practice 2' },
          { type: 'image', url: '/side/blender/3.jpg', title: 'Modelling Practice 3' },
          { type: 'image', url: '/side/blender/4.png', title: 'Modelling Practice 4' },
          { type: 'image', url: '/side/blender/5.png', title: 'Modelling Practice 5' },
          { type: 'image', url: '/side/blender/6.png', title: 'Modelling Practice 6' },
          { type: 'image', url: '/side/blender/7.jpg', title: 'Modelling Practice 7' }
        ]
      },
      zh: {
        title: 'Blender',
        description: '在 Blender 中进行的一系列 3D 建模实验。',
        images: [
          { type: 'image', url: '/side/blender/1.png', title: '建模练习 1' },
          { type: 'image', url: '/side/blender/2.png', title: '建模练习 2' },
          { type: 'image', url: '/side/blender/3.jpg', title: '建模练习 3' },
          { type: 'image', url: '/side/blender/4.png', title: '建模练习 4' },
          { type: 'image', url: '/side/blender/5.png', title: '建模练习 5' },
          { type: 'image', url: '/side/blender/6.png', title: '建模练习 6' },
          { type: 'image', url: '/side/blender/7.jpg', title: '建模练习 7' }
        ]
      }
    }
  };

  const openGameModal = (work) => {
    const data = gameModalsData[work.id]?.[language] || gameModalsData[work.id]?.en;
    if (data) {
      setSelectedGame(data);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeGameModal = () => {
    setSelectedGame(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="work-section" style={{ position: 'relative' }}>
      <div className="work-grid flat-grid">
        {allWorks.map((work, index) => {
          const isFirstOfYear = index === 0 || allWorks[index - 1].year !== work.year;
          const isGame = work.id === 261 || work.id === 262 || work.id === 263;

          return (
            <div
              key={work.id}
              id={isFirstOfYear ? `work-year-${work.year}` : undefined}
              className="work-card-wrapper"
              style={{ position: 'relative', scrollMarginTop: isFirstOfYear ? '8rem' : undefined }}
            >
              <div className="work-year-indicator">
                {work.year}
              </div>
              <WorkCard 
                work={work} 
                onCardClick={isGame ? openGameModal : undefined}
              />
            </div>
          );
        })}
      </div>

      {selectedGame && (
        <div className="side-modal-overlay" onClick={closeGameModal}>
          <div className="side-modal-content" onClick={e => e.stopPropagation()}>
            <button className="side-modal-close" onClick={closeGameModal}>&times;</button>
            <div className="side-modal-header">
              <h2>{selectedGame.title}</h2>
              <p>{selectedGame.description}</p>
              {selectedGame.link && (
                <p style={{ marginTop: '1rem' }}>
                  <a
                    href={selectedGame.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#000', textDecoration: 'underline' }}
                  >
                    {selectedGame.link.text}{selectedGame.link.url}
                  </a>
                </p>
              )}
            </div>
            <div className="side-modal-gallery">
              {selectedGame.images.map((item, index) => (
                <div key={index} className="side-modal-item">
                  {item.type === 'image' ? (
                    <img src={`${process.env.PUBLIC_URL}${item.url}`} alt={item.title} />
                  ) : (
                    <video src={`${process.env.PUBLIC_URL}${item.url}`} controls />
                  )}
                  <p className="side-modal-item-title">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default WorkGrid;
