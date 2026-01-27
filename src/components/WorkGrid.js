import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import WorkCard from './WorkCard';

const works = {
  en: [
    {
      id: 8,
      title: 'loading',
      description: 'loading',
      year: 2026,
      image: 'https://via.placeholder.com/800x600/e5e5e5/e5e5e5',
      category: 'loading'
    },
    {
      id: 9,
      title: 'loading',
      description: 'loading',
      year: 2026,
      image: 'https://via.placeholder.com/800x600/e8e8e8/e8e8e8',
      category: 'loading'
    },
    {
      id: 10,
      title: 'loading',
      description: 'loading',
      year: 2026,
      image: 'https://via.placeholder.com/800x600/f0f0f0/f0f0f0',
      category: 'loading'
    },
    {
      id: 11,
      title: 'loading',
      description: 'loading',
      year: 2025,
      image: 'https://via.placeholder.com/800x600/d8d8d8/d8d8d8',
      category: 'loading'
    },
    {
      id: 12,
      title: 'loading',
      description: 'loading',
      year: 2025,
      image: 'https://via.placeholder.com/800x600/f5f5f5/f5f5f5',
      category: 'loading'
    },
    {
      id: 13,
      title: 'loading',
      description: 'loading',
      year: 2025,
      image: 'https://via.placeholder.com/800x600/e5e5e5/e5e5e5',
      category: 'loading'
    },
    {
      id: 1,
      title: 'Pixelated Adventures',
      description: 'A board game design offering a novel way for people to share their travel memories.',
      year: 2024,
      image: `${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/1.png`,
      category: 'Individual. User Experience. Product'
    },
    {
      id: 2,
      title: 'E.C.H.O.',
      description: 'Explores the role of robots in future neighborhoods.',
      year: 2024,
      image: `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/1.png`,
      category: 'Group. Programming. Artificial Intelligence. Product'
    },
    {
      id: 7,
      title: 'Atag Induction Hob',
      description: 'Redesign the Atag Induction Hob for enhanced usability, targeting a dependable and convenient cooking experience at home.',
      year: 2024,
      image: `${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/1.png`,
      category: 'Group. User Interface. User Experience. Redesign'
    },
    {
      id: 14,
      title: 'Intimate relationship',
      description: 'An immersive experience exploring Klimt\'s "The Kiss" using graphic processing technology.',
      year: 2024,
      image: `${process.env.PUBLIC_URL}/work/2024/4IntimateRelationship/1.png`,
      category: 'Individual. Digital Artwork. Programming Modelling'
    },
    {
      id: 3,
      title: 'Lambanana Tour',
      description: 'A guide map and souvenir for the Museum of Liverpool designed to encourage children to be more active and knowledgeable when visiting.',
      year: 2023,
      image: `${process.env.PUBLIC_URL}/work/2023/1LambananaTour/1.png`,
      category: 'Individual. Child Play. Museum. User Experience. User Interface'
    },
    {
      id: 4,
      title: 'Lemur Go',
      description: 'A device designed for people to interact remotely with lemurs in the zoo, helping animals during lockdowns and assisting zoos recoup financial losses.',
      year: 2023,
      image: `${process.env.PUBLIC_URL}/work/2023/2LemurGo/1.png`,
      category: 'Individual. Well-being. Zoo. Installation'
    },
    {
      id: 5,
      title: 'Doozi',
      description: 'A set of wheelchair accessories for children with disabilities, featuring a domino cart for multi-skill learning and a musical puzzle carpet for interactive entertainment.',
      year: 2022,
      image: `${process.env.PUBLIC_URL}/work/2022/1Doozi/1.png`,
      category: 'Group. Well-being. Child Play. User Experience. User Interface. Programming'
    },
    {
      id: 6,
      title: 'Happy Little Pill',
      description: 'An inclusive banded pill box designed for elderly people with Alzheimer\'s to help them with daily medication needs, raising awareness of the importance of inclusive design.',
      year: 2022,
      image: `${process.env.PUBLIC_URL}/work/2022/2HappyLittlePill/1.png`,
      category: 'Group. Well-being. User Experience. User Interface'
    },
  ],
  zh: [
    {
      id: 8,
      title: 'loading',
      description: 'loading',
      year: 2026,
      image: 'https://via.placeholder.com/800x600/e5e5e5/e5e5e5',
      category: 'loading'
    },
    {
      id: 9,
      title: 'loading',
      description: 'loading',
      year: 2026,
      image: 'https://via.placeholder.com/800x600/e8e8e8/e8e8e8',
      category: 'loading'
    },
    {
      id: 10,
      title: 'loading',
      description: 'loading',
      year: 2026,
      image: 'https://via.placeholder.com/800x600/f0f0f0/f0f0f0',
      category: 'loading'
    },
    {
      id: 11,
      title: 'loading',
      description: 'loading',
      year: 2025,
      image: 'https://via.placeholder.com/800x600/d8d8d8/d8d8d8',
      category: 'loading'
    },
    {
      id: 12,
      title: 'loading',
      description: 'loading',
      year: 2025,
      image: 'https://via.placeholder.com/800x600/f5f5f5/f5f5f5',
      category: 'loading'
    },
    {
      id: 13,
      title: 'loading',
      description: 'loading',
      year: 2025,
      image: 'https://via.placeholder.com/800x600/e5e5e5/e5e5e5',
      category: 'loading'
    },
    {
      id: 1,
      title: 'Pixelated Adventures',
      description: '一款棋盤遊戲設計，為人們分享旅行回憶提供了一種新穎的方式。',
      year: 2024,
      image: `${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/1.png`,
      category: '個人專案. 用戶體驗. 產品'
    },
    {
      id: 2,
      title: 'E.C.H.O.',
      description: '探索機器人在未來社區中的角色。',
      year: 2024,
      image: `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/1.png`,
      category: '團隊. 程式設計. 人工智慧. 產品'
    },
    {
      id: 7,
      title: 'Atag Induction Hob',
      description: '重新設計Atag感應爐，提升可用性，旨在提供可靠且便捷的家庭烹飪體驗。',
      year: 2024,
      image: `${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/1.png`,
      category: '團隊. 用戶界面. 用戶體驗. 重新設計'
    },
    {
      id: 14,
      title: 'Intimate relationship',
      description: '使用圖形處理技術探索克林姆特《吻》的沉浸式體驗。',
      year: 2024,
      image: `${process.env.PUBLIC_URL}/work/2024/4IntimateRelationship/1.png`,
      category: '個人專案. 數位藝術. 程式設計建模'
    },
    {
      id: 3,
      title: 'Lambanana Tour',
      description: '為利物浦博物館設計的導覽地圖和紀念品，鼓勵兒童在參觀博物館時更加積極和知識豐富。',
      year: 2023,
      image: `${process.env.PUBLIC_URL}/work/2023/1LambananaTour/1.png`,
      category: '個人專案. 兒童遊戲. 博物館. 用戶體驗. 用戶界面'
    },
    {
      id: 4,
      title: 'Lemur Go',
      description: '為人們設計的遠程與動物園狐猴互動的裝置，幫助封鎖期間的動物，並協助動物園挽回部分財務損失。',
      year: 2023,
      image: `${process.env.PUBLIC_URL}/work/2023/2LemurGo/1.png`,
      category: '個人專案. 健康福祉. 動物園. 裝置'
    },
    {
      id: 5,
      title: 'Doozi',
      description: '為殘疾兒童設計的輪椅配件套組，包含多技能學習骨牌推車和互動音樂拼圖地毯。',
      year: 2022,
      image: `${process.env.PUBLIC_URL}/work/2022/1Doozi/1.png`,
      category: '團隊. 健康福祉. 兒童遊戲. 用戶體驗. 用戶界面. 程式設計'
    },
    {
      id: 6,
      title: 'Happy Little Pill',
      description: '為患有阿爾茨海默症的老年人設計的包容性帶狀藥盒，幫助他們滿足日常用藥需求，提高對包容性設計重要性的認識。',
      year: 2022,
      image: `${process.env.PUBLIC_URL}/work/2022/2HappyLittlePill/1.png`,
      category: '團隊. 健康福祉. 用戶體驗. 用戶界面'
    },
  ],
  'zh-TW': [
    {
      id: 8,
      title: 'loading',
      description: 'loading',
      year: 2026,
      image: 'https://via.placeholder.com/800x600/e5e5e5/e5e5e5',
      category: 'loading'
    },
    {
      id: 9,
      title: 'loading',
      description: 'loading',
      year: 2026,
      image: 'https://via.placeholder.com/800x600/e8e8e8/e8e8e8',
      category: 'loading'
    },
    {
      id: 10,
      title: 'loading',
      description: 'loading',
      year: 2026,
      image: 'https://via.placeholder.com/800x600/f0f0f0/f0f0f0',
      category: 'loading'
    },
    {
      id: 11,
      title: 'loading',
      description: 'loading',
      year: 2025,
      image: 'https://via.placeholder.com/800x600/d8d8d8/d8d8d8',
      category: 'loading'
    },
    {
      id: 12,
      title: 'loading',
      description: 'loading',
      year: 2025,
      image: 'https://via.placeholder.com/800x600/f5f5f5/f5f5f5',
      category: 'loading'
    },
    {
      id: 13,
      title: 'loading',
      description: 'loading',
      year: 2025,
      image: 'https://via.placeholder.com/800x600/e5e5e5/e5e5e5',
      category: 'loading'
    },
    {
      id: 1,
      title: 'Pixelated Adventures',
      description: '一款棋盘游戏设计，为人们分享旅行回忆提供了一种新颖的方式。',
      year: 2024,
      image: `${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/1.png`,
      category: '个人项目. 用户体验. 产品'
    },
    {
      id: 2,
      title: 'E.C.H.O.',
      description: '探索机器人在未来社区中的角色。',
      year: 2024,
      image: `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/1.png`,
      category: '团队. 编程. 人工智能. 产品'
    },
    {
      id: 7,
      title: 'Atag Induction Hob',
      description: '重新设计Atag感应炉，提升可用性，旨在提供可靠且便捷的家庭烹饪体验。',
      year: 2024,
      image: `${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/1.png`,
      category: '团队. 用户界面. 用户体验. 重新设计'
    },
    {
      id: 14,
      title: 'Intimate relationship',
      description: '使用图形处理技术探索克林姆特《吻》的沉浸式体验。',
      year: 2024,
      image: `${process.env.PUBLIC_URL}/work/2024/4IntimateRelationship/1.png`,
      category: '个人项目. 数字艺术. 编程建模'
    },
    {
      id: 3,
      title: 'Lambanana Tour',
      description: '为利物浦博物馆设计的导览地图和纪念品，鼓励儿童在参观博物馆时更加积极和知识丰富。',
      year: 2023,
      image: `${process.env.PUBLIC_URL}/work/2023/1LambananaTour/1.png`,
      category: '个人项目. 儿童游戏. 博物馆. 用户体验. 用户界面'
    },
    {
      id: 4,
      title: 'Lemur Go',
      description: '为人们设计的远程与动物园狐猴互动的装置，帮助封锁期间的动物，并协助动物园挽回部分财务损失。',
      year: 2023,
      image: `${process.env.PUBLIC_URL}/work/2023/2LemurGo/1.png`,
      category: '个人项目. 健康福祉. 动物园. 装置'
    },
    {
      id: 5,
      title: 'Doozi',
      description: '为残疾儿童设计的轮椅配件套组，包含多技能学习骨牌推车和互动音乐拼图地毯。',
      year: 2022,
      image: `${process.env.PUBLIC_URL}/work/2022/1Doozi/1.png`,
      category: '团队. 健康福祉. 儿童游戏. 用户体验. 用户界面. 编程'
    },
    {
      id: 6,
      title: 'Happy Little Pill',
      description: '为患有阿尔茨海默症的老年人设计的包容性带状药盒，帮助他们满足日常用药需求，提高对包容性设计重要性的认识。',
      year: 2022,
      image: `${process.env.PUBLIC_URL}/work/2022/2HappyLittlePill/1.png`,
      category: '团队. 健康福祉. 用户体验. 用户界面'
    },
  ]
};

// 按年份分组
const groupByYear = (works) => {
  return works.reduce((acc, work) => {
    const year = work.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(work);
    return acc;
  }, {});
};

function WorkGrid() {
  const { language } = useLanguage();
  const worksList = works[language] || works.en;
  const worksByYear = groupByYear(worksList);
  const years = Object.keys(worksByYear).sort((a, b) => b - a);

  const getYearLabel = (year) => {
    const yearNum = parseInt(year, 10);
    if (yearNum === 2026) {
      if (language === 'zh') return '2026 进行中';
      if (language === 'zh-TW') return '2026 進行中';
      return '2026 and ongoing';
    }
    return year;
  };

  return (
    <section className="work-section">
      {years.map(year => (
        <div key={year} className="work-year-group">
          <h2 className="work-year-title">{getYearLabel(year)}</h2>
          <div className="work-grid">
            {worksByYear[year].map(work => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default WorkGrid;
