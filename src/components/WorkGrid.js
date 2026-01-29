import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import WorkCard from './WorkCard';

const yearFilterText = {
  en: { label: 'Year', all: 'All' },
  zh: { label: '年份', all: '全部' },
  'zh-TW': { label: '年份', all: '全部' }
};

const works = {
  en: [
    {
      id: 8,
      title: 'EuroStay',
      description: 'loading',
      year: 2026,
      image: `${process.env.PUBLIC_URL}/work/2026/1.png`,
      category: 'User Interface. User Experience. Events'
    },
    {
      id: 11,
      title: 'Cobrush',
      description: 'A collaborative system that enables humans and robots to paint together through multi-turn interactions.',
      year: 2025,
      image: `${process.env.PUBLIC_URL}/work/2025/1.png`,
      category: 'Human-Computer Interaction. Programming'
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
    {
      id: 15,
      title: 'Bottle Opener',
      description: 'Exploring the fusion of Art Deco and compact kitchenware.',
      year: 2021,
      image: `${process.env.PUBLIC_URL}/work/2021/1/1.png`,
      category: 'Individual. Product Design'
    },
    {
      id: 16,
      title: 'Calorie Calculator',
      description: 'A web tool to support people on their weight-loss journey.',
      year: 2020,
      image: `${process.env.PUBLIC_URL}/work/2020/1CalorieCalculator/1.png`,
      category: 'Individual. Web Design'
    },
    {
      id: 20,
      title: 'Chair Modelling',
      description: 'Unleash imagination and practice modelling skills.',
      year: 2020,
      image: `${process.env.PUBLIC_URL}/work/2020/2Chair/1.jpg`,
      category: 'Individual. Modelling'
    },
    {
      id: 17,
      title: 'Hammer',
      description: 'Engineering drawings and model making.',
      year: 2019,
      image: `${process.env.PUBLIC_URL}/work/2019/1Hammer/1(1).jpg`,
      category: 'Individual. Industrial Design'
    },
    {
      id: 18,
      title: 'Superman',
      description: 'Load-bearing cardboard chair challenge.',
      year: 2019,
      image: `${process.env.PUBLIC_URL}/work/2019/2Superman/1.jpg`,
      category: 'Group. Industrial Design'
    },
    {
      id: 19,
      title: 'BananaBoard',
      description: 'loading',
      year: 2019,
      image: `${process.env.PUBLIC_URL}/work/2019/3BananaBorad/1.png`,
      category: 'Individual. Modelling. Industrial Design'
    },
  ],
  zh: [
    {
      id: 8,
      title: 'EuroStay',
      description: 'loading',
      year: 2026,
      image: `${process.env.PUBLIC_URL}/work/2026/1.png`,
      category: '用户界面. 用户体验. 活动'
    },
    {
      id: 11,
      title: 'Cobrush',
      description: '一个让人和机器人能够通过多轮交互一起画画的协同系统',
      year: 2025,
      image: `${process.env.PUBLIC_URL}/work/2025/1.png`,
      category: '人机交互. 编程'
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
    {
      id: 15,
      title: '开瓶器',
      description: '探索经典艺术风格与小型厨具的结合',
      year: 2021,
      image: `${process.env.PUBLIC_URL}/work/2021/1/1.png`,
      category: '个人项目. 产品设计'
    },
    {
      id: 16,
      title: 'Calorie Calculator',
      description: '为减重人群做一点小贡献。',
      year: 2020,
      image: `${process.env.PUBLIC_URL}/work/2020/1CalorieCalculator/1.png`,
      category: '个人项目. 网页设计'
    },
    {
      id: 20,
      title: '椅子建模',
      description: '释放想象力，练习建模能力',
      year: 2020,
      image: `${process.env.PUBLIC_URL}/work/2020/2Chair/1.jpg`,
      category: '个人项目. 建模'
    },
    {
      id: 17,
      title: 'Hammer',
      description: '画工程图和制作模型',
      year: 2019,
      image: `${process.env.PUBLIC_URL}/work/2019/1Hammer/1(1).jpg`,
      category: '单人项目. 工业设计'
    },
    {
      id: 18,
      title: 'Superman',
      description: '承重纸板椅子挑战',
      year: 2019,
      image: `${process.env.PUBLIC_URL}/work/2019/2Superman/1.jpg`,
      category: '团队. 工业设计'
    },
    {
      id: 19,
      title: 'BananaBoard',
      description: 'loading',
      year: 2019,
      image: `${process.env.PUBLIC_URL}/work/2019/3BananaBorad/1.png`,
      category: '个人项目. 建模. 工业设计'
    },
  ],
  'zh-TW': [
    {
      id: 8,
      title: 'EuroStay',
      description: 'loading',
      year: 2026,
      image: `${process.env.PUBLIC_URL}/work/2026/1.png`,
      category: '用戶界面. 用戶體驗. 活動'
    },
    {
      id: 11,
      title: 'Cobrush',
      description: '一個讓人和機器人能夠通過多輪互動一起畫畫的協同系統',
      year: 2025,
      image: `${process.env.PUBLIC_URL}/work/2025/1.png`,
      category: '人機互動. 程式設計'
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
    {
      id: 15,
      title: '開瓶器',
      description: '探索經典藝術風格與小型廚具的結合',
      year: 2021,
      image: `${process.env.PUBLIC_URL}/work/2021/1/1.png`,
      category: '個人專案. 產品設計'
    },
    {
      id: 16,
      title: 'Calorie Calculator',
      description: '為減重人群做一點小貢獻。',
      year: 2020,
      image: `${process.env.PUBLIC_URL}/work/2020/1CalorieCalculator/1.png`,
      category: '個人專案. 網頁設計'
    },
    {
      id: 20,
      title: '椅子建模',
      description: '釋放想像力，練習建模能力',
      year: 2020,
      image: `${process.env.PUBLIC_URL}/work/2020/2Chair/1.jpg`,
      category: '個人專案. 建模'
    },
    {
      id: 17,
      title: 'Hammer',
      description: '畫工程圖和製作模型',
      year: 2019,
      image: `${process.env.PUBLIC_URL}/work/2019/1Hammer/1(1).jpg`,
      category: '個人專案. 工業設計'
    },
    {
      id: 18,
      title: 'Superman',
      description: '承重紙板椅子挑戰',
      year: 2019,
      image: `${process.env.PUBLIC_URL}/work/2019/2Superman/1.jpg`,
      category: '團隊. 工業設計'
    },
    {
      id: 19,
      title: 'BananaBoard',
      description: 'loading',
      year: 2019,
      image: `${process.env.PUBLIC_URL}/work/2019/3BananaBorad/1.png`,
      category: '個人專案. 建模. 工業設計'
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
  const [selectedYear, setSelectedYear] = useState(null);
  const [yearPopupOpen, setYearPopupOpen] = useState(false);
  const [yearPopupClosing, setYearPopupClosing] = useState(false);
  const [yearPopupReady, setYearPopupReady] = useState(false);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    if (yearPopupOpen && !yearPopupClosing) {
      setYearPopupReady(false);
      const t = setTimeout(() => setYearPopupReady(true), 0);
      return () => clearTimeout(t);
    }
    if (!yearPopupOpen) setYearPopupReady(false);
  }, [yearPopupOpen, yearPopupClosing]);

  useEffect(() => () => { if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current); }, []);
  const filterText = yearFilterText[language] || yearFilterText.en;

  const getYearLabel = (year) => {
    const yearNum = parseInt(year, 10);
    if (yearNum === 2026) {
      if (language === 'zh') return '2026 进行中';
      if (language === 'zh-TW') return '2026 進行中';
      return '2026 and ongoing';
    }
    return year;
  };

  const displayYears = selectedYear ? [selectedYear] : years;

  return (
    <section className="work-section">
      <div className="work-year-filter-row">
        <div
          className={`work-year-filter-wrap${yearPopupOpen ? ' work-year-filter-wrap--open' : ''}`}
          onMouseEnter={() => {
            if (closeTimeoutRef.current) { clearTimeout(closeTimeoutRef.current); closeTimeoutRef.current = null; }
            setYearPopupClosing(false);
            setYearPopupOpen(true);
          }}
          onMouseLeave={() => {
            if (!yearPopupOpen) return;
            setYearPopupClosing(true);
            closeTimeoutRef.current = setTimeout(() => {
              setYearPopupOpen(false);
              setYearPopupClosing(false);
              closeTimeoutRef.current = null;
            }, 260);
          }}
        >
        <button type="button" className="work-year-trigger" aria-haspopup="true" aria-expanded={yearPopupOpen}>
          {filterText.label}
        </button>
        {yearPopupOpen && (
          <div
            className={`work-year-popup${yearPopupReady && !yearPopupClosing ? ' work-year-popup--open' : ''}${yearPopupClosing ? ' work-year-popup--closing' : ''}`}
            role="menu"
          >
            <button
              type="button"
              role="menuitem"
              className={!selectedYear ? 'work-year-option active' : 'work-year-option'}
              onClick={() => { setSelectedYear(null); setYearPopupOpen(false); setYearPopupClosing(false); }}
            >
              {filterText.all}
            </button>
            {years.map((y) => (
              <button
                key={y}
                type="button"
                role="menuitem"
                className={selectedYear === y ? 'work-year-option active' : 'work-year-option'}
                onClick={() => { setSelectedYear(y); setYearPopupOpen(false); setYearPopupClosing(false); }}
              >
                {getYearLabel(y)}
              </button>
            ))}
          </div>
        )}
        </div>
      </div>
      {displayYears.map((year) => (
        <div key={year} className="work-year-group">
          <h2 className="work-year-title">{getYearLabel(year)}</h2>
          <div className="work-grid">
            {worksByYear[year].map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default WorkGrid;
