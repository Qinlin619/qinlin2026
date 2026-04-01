import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const cvData = {
  en: {
    title: 'CV',
    name: 'Qinlin Liu',
    role: '',
    personalInfo: {
      email: 'qinlinliu619@gmail.com',
      phone: '+31 617785667'
    },
    intro: 'As a designer, I have a passion for gaming and aspire to gamify my designs, aiming to make each of my projects both entertaining and meaningful. I am eager to create engaging websites that enhance user experience or captivate customers\' attention. Moreover, I have a keen interest in emerging technologies, such as artificial intelligence, and hope to continuously learn and integrate new skills into my work. My future design endeavors strive to be more human-centered, sustainable, and technologically innovative.',
    honorsAwards: [
      {
        dates: '2026',
        title: 'Mobile World Congress (MWC) Barcelona 2026',
        achievement: 'Awarded Bronze Place'
      }
    ],
    workHistory: [
      {
        dates: '2024.06 - Present',
        role: 'Co-Founder & UI/UX Lead',
        company: 'EuroStay',
        description: [
          '0-to-1 Product Framework: Architected and built the complete app framework and web ecosystem from scratch, scaling to 10,000+ active users within months.',
          'User Research & Conversion: Iterated the UI/UX architecture based on extensive user research and A/B testing, resulting in a 80% increase in member conversion rates.',
          'Agile Design-to-Dev: Translated complex business logic into high-fidelity wireframes, rapid prototypes, and component-based design systems, ensuring seamless handoff to engineering.'
        ]
      },
      {
        dates: '2024.08 - 2025.02',
        role: 'UX Design Intern',
        company: 'Signify Netherlands B.V. (Philips Hue & WiZ)',
        description: [
          'Data-Driven Global Updates: Spearheaded global UI updates for the WiZ brand website, analyzing 50,000+ user data points to optimize landing page hierarchy and increase visual credibility.',
          'Design System Expansion: Expanded and maintained scalable component-based UI design systems in Figma, delivering templates that accelerated cross-functional workflows by 30%.',
          'Performance Marketing & Assets: Synthesized market user data to create high-conversion motion designs and high-fidelity UI assets, bridging premium brand storytelling with measurable engagement.'
        ]
      },
      {
        dates: '2025.10 - 2026.01',
        role: 'AI Interface Designer & System Developer',
        company: 'Hong Kong University of Science and Technology (HKUST)',
        description: [
          'Human-AI Interaction: Led the UI/UX design for "CoBrush," an advanced AI human-robot collaborative system, focusing on making complex AI logic intuitive for human operators.',
          'Interactive Frontend for AI: Developed the operational logic and real-time data-to-UI mapping for AI-driven workspaces, ensuring high-performance and smooth user flow optimization.'
        ]
      },
      {
        dates: '2024-8 - 2025-12',
        role: 'Green Team IDE Organiser',
        company: 'Delft University of Technology',
        description: 'Serve as a brand ambassador, event organizer, and produce various types of visual content.'
      },
      {
        dates: '2024-10 - 2024-12',
        role: 'Business Assistant (International & Offline Operations)',
        company: 'Suzhou Biyi Network Technology Co.',
        description: 'Supported overseas partnership coordination, contributing to collaborations with four offline retail stores and one supply chain partner.'
      },
      {
        dates: '2023-12 - 2024-2',
        role: 'Student Assistant',
        company: 'Delft University of Technology',
        description: 'Assist with data analysis, classification, and documentation at the Delft Health Initiative.'
      },
      {
        dates: '2023-10 - 2023-10',
        role: 'Student Assistant',
        company: 'Dutch Design Week',
        description: 'Guided visitors and explained seven AI-focused design projects at a TU Delft exhibition.'
      },
      {
        dates: '2022-3 - 2023-10, 2024-6 - 2024-10',
        role: 'Product Designer (E-commerce & IP Design)',
        company: 'Suzhou Biyi Network Technology Co.',
        description: [
          'Designed product packaging, promotional graphics, and Taobao e-commerce assets aligned with brand and campaign requirements.',
          'Developed product merchandise and IP-based visual designs, ensuring consistency across online and physical touchpoints.'
        ]
      }
    ],
    education: [
      {
        dates: '2023.09 - 2025.11',
        degree: 'Design for Interaction, Master of Science | GPA: 8.2/10',
        university: 'Delft University of Technology (TU Delft)'
      },
      {
        dates: '2020.09 - 2022.07',
        degree: 'Industrial Design, Bachelor of Engineering | GPA: 3.64/4.0',
        university: 'University of Liverpool'
      },
      {
        dates: '2018.09 - 2020.07',
        degree: 'Industrial Design, Bachelor of Engineering',
        university: 'Xi\'an Jiaotong-Liverpool University'
      }
    ],
    skills: [
      'UX/UI Design: Product Strategy, User-Centered Design, Wireframing, Rapid Prototyping, Design Systems, Responsive Interfaces, Usability Testing, Gamification',
      'Visual & Marketing: Digital Marketing Assets, Campaign Visuals, Brand Identity, Motion Design, Presentation Templates',
      'Tools & Tech: Figma (Expert), Adobe Creative Suite, Framer, Webflow, HTML/CSS, React.js (Concepts), 3D Modeling'
    ],
    languages: [
      { name: 'Mandarin', level: 'Native / C2' },
      { name: 'Cantonese', level: 'Fluent / C1' },
      { name: 'English', level: 'Fluent / C1' },
      { name: 'Shaodong Dialect (Hunan)', level: 'Native' },
      { name: 'Spanish', level: 'Intermediate / A2' },
      { name: 'Dutch', level: 'Beginner / A1' },
      { name: 'Japanese', level: 'Beginner / A1' }
    ],
    hobbies: [
      'Drawing',
      'Musical Instruments',
      'Movies',
      'Reading',
      'Travel',
      'Gaming (600+ titles on Steam/Epic/Mobile/Web; passionate about unique interactions and visually stunning puzzle games)'
    ],
    sections: {
      personalInfo: 'Personal Information',
      honorsAwards: 'Honors & Awards',
      workHistory: 'Work History',
      education: 'Education',
      skills: 'Skills',
      languages: 'Languages',
      hobbies: 'Hobby/Interest',
      contact: 'CONTACT',
      cv: 'CV',
      viewDownload: 'Download'
    }
  },
  zh: {
    title: '简历',
    name: 'Qinlin Liu',
    role: '用户体验设计师',
    personalInfo: {
      email: 'qinlinliu619@gmail.com',
      phone: '+31 617785667'
    },
    intro: '作为一名设计师，我对游戏充满热情，并希望将游戏化融入我的设计中，旨在让我的每个项目既有趣又有意义。我渴望创建能够增强用户体验或吸引客户注意的引人入胜的网站。此外，我对新兴技术（如人工智能）有浓厚的兴趣，希望不断学习并将新技能融入我的工作中。我未来的设计努力将更加以人为本、可持续和技术创新。',
    honorsAwards: [
      {
        dates: '2026',
        title: '世界移动通信大会 (MWC) 巴塞罗那 2026',
        achievement: '荣获铜奖'
      }
    ],
    workHistory: [
      {
        dates: '2024.06 - 至今',
        role: '联合创始人 & UI/UX 设计主管',
        company: 'EuroStay',
        description: [
          '0到1产品架构：从零开始构建了完整的应用框架和网页生态系统，在数月内扩大至 10,000+ 活跃用户。',
          '用户研究与转化：基于广泛的用户研究和 A/B 测试迭代 UI/UX 架构，使会员转化率提高了 80%。',
          '敏捷设计到开发：将复杂的业务逻辑转化为高保真原型和基于组件的设计系统，确保与工程团队的无缝对接。'
        ]
      },
      {
        dates: '2024.08 - 2025.02',
        role: 'UX 设计实习生',
        company: 'Signify Netherlands B.V. (Philips Hue & WiZ)',
        description: [
          '数据驱动的全球更新：领导了 WiZ 品牌网站的全球 UI 更新，分析了 50,000+ 用户数据点以优化落地页层级。',
          '设计系统扩展：在 Figma 中维护和扩展了可扩展的 UI 设计系统，使跨职能工作流程效率提升 30%。',
          '性能营销与资产：综合市场用户数据创建高转化率的动态设计和高保真 UI 资产。'
        ]
      },
      {
        dates: '2025.10 - 2026.01',
        role: 'AI 界面设计师 & 系统开发',
        company: '香港科技大学 (HKUST)',
        description: [
          '人机 AI 交互：主导了 "CoBrush" 系统的 UI/UX 设计，专注于使复杂的 AI 逻辑对人类操作者变得直观。',
          '面向 AI 的交互式前端：开发了 AI 驱动工作空间的运行逻辑和实时数据到 UI 的映射。'
        ]
      },
      {
        dates: '2024-8 - 2025-12',
        role: 'Green Team IDE 组织者',
        company: '代尔夫特理工大学',
        description: '担任品牌大使、活动组织者，并制作各种类型的视觉内容。'
      },
      {
        dates: '2024-10 - 2024-12',
        role: '商务助理（国际与线下运营）',
        company: '苏州比翼网络科技有限公司',
        description: '支持海外合作伙伴协调，促成与四家线下零售店和一家供应链合作伙伴的合作。'
      },
      {
        dates: '2023-12 - 2024-2',
        role: '学生助理',
        company: '代尔夫特理工大学',
        description: '协助代尔夫特健康倡议的一些文档工作'
      },
      {
        dates: '2023-10 - 2023-10',
        role: '学生助理',
        company: '荷兰设计周',
        description: '负责迎接和引导访客，提供活动信息并确保展览顺利进行'
      },
      {
        dates: '2022-3 - 2023-10, 2024-6 - 2024-10',
        role: '产品设计师（电商与IP设计）',
        company: '苏州比翼网络科技有限公司',
        description: [
          '设计产品包装、促销图形和淘宝电商素材，符合品牌和活动要求。',
          '开发产品周边和基于IP的视觉设计，确保线上和线下触点的一致性。'
        ]
      }
    ],
    education: [
      {
        dates: '2023.09 - 2025.11',
        degree: '交互设计，理学硕士 | GPA: 8.2/10',
        university: '代尔夫特理工大学 (TU Delft)'
      },
      {
        dates: '2020.09 - 2022.07',
        degree: '工业设计，工程学士 | GPA: 3.64/4.0',
        university: '利物浦大学'
      },
      {
        dates: '2018.09 - 2020.07',
        degree: '工业设计，工程学士',
        university: '西交利物浦大学'
      }
    ],
    skills: [
      'UX/UI 设计: 产品策略, 以用户为中心的设计, 线框图, 快速原型, 设计系统, 响应式界面, 可用性测试, 游戏化设计',
      '视觉与营销: 数字营销资产, 活动视觉, 品牌识别, 动效设计, 演示模板',
      '工具与技术: Figma (专家), Adobe Creative Suite, Framer, Webflow, HTML/CSS, React.js (概念), 3D 建模'
    ],
    languages: [
      { name: '普通话', level: '母语 / C2' },
      { name: '粤语', level: '精通 / C1' },
      { name: '英语', level: '精通 / C1' },
      { name: '湖南邵东话', level: '母语' },
      { name: '西班牙语', level: '中级 / A2' },
      { name: '荷兰语', level: '初级 / A1' },
      { name: '日语', level: '初级 / A1' }
    ],
    projects: [
      {
        dates: '2025',
        title: 'Atag 电磁灶再设计',
        company: 'UX/UI 设计师',
        link: 'https://qinlin619.github.io/qinlin2026/work/7',
        description: [
          '以用户为中心的再设计：领导了端到端的用户研究、快速原型设计和可用性测试，将用户需求与技术功能相连接。',
          '交互策略：重新设计了数字界面和物理触点以减轻认知负荷，强调人机工程学和直观的安全特性。',
          '文档与交付物：生成了从洞察到执行的完整设计报告和具有视觉冲击力的海报。'
        ]
      }
    ],
    hobbies: [
      '绘画',
      '乐器',
      '电影',
      '看书',
      '旅行',
      '玩游戏 (Steam/Epic/手机/网页游戏共 600+；热爱体验各种交互与画风精良的解谜游戏)'
    ],
    sections: {
      personalInfo: '个人信息',
      honorsAwards: '荣誉与奖项',
      workHistory: '工作经历',
      education: '教育背景',
      skills: '技能',
      languages: '语言评价',
      hobbies: '兴趣爱好',
      contact: 'CONTACT',
      cv: 'CV',
      viewDownload: '下载'
    }
  },

};

function CV() {
  const { language } = useLanguage();
  const data = cvData[language] || cvData.en;
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [copyToastMessage, setCopyToastMessage] = useState('');

  const copyToClipboard = (text, message) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyToastMessage(message);
      setShowCopyToast(true);
      setTimeout(() => {
        setShowCopyToast(false);
      }, 2000);
    }).catch(() => {
      // 如果复制失败，使用备用方法
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopyToastMessage(message);
      setShowCopyToast(true);
      setTimeout(() => {
        setShowCopyToast(false);
      }, 2000);
    });
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = 'qinlinliu619@gmail.com';
    const message = language === 'zh'
      ? `已复制邮件地址 ${email}`
      : `Email address copied ${email}`;
    copyToClipboard(email, message);
  };

  return (
    <div className="page-content cv-page">
      <div className="cv-top-header">
        <h1>{data.name}</h1>
        <div className="cv-header-links">
          <div className="cv-header-link-item">
            <span className="cv-header-link-label">{data.sections.contact}:</span>
            <a
              href="#"
              className="cv-header-email-link"
              onClick={handleEmailClick}
            >
              {data.personalInfo.email}
            </a>
          </div>
          <div className="cv-header-link-item">
            <span className="cv-header-link-label">{data.sections.cv}:</span>
            <a href={`${process.env.PUBLIC_URL}/CV_Qinlin_Liu.pdf?v=${new Date().getTime()}`} className="cv-header-download-link" download>
              {data.sections.viewDownload}
            </a>
          </div>
        </div>
      </div>

      <section className="cv-section">
        <h2>{data.sections.honorsAwards}</h2>
        {data.honorsAwards.map((award, index) => (
          <div key={index} className="cv-item">
            <div className="cv-item-header">
              <strong>{award.title}</strong>
              <span className="cv-dates">{award.dates}</span>
            </div>
            <p className="cv-company">{award.achievement}</p>
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2>{data.sections.education}</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="cv-item">
            <div className="cv-item-header">
              <strong>{edu.degree}</strong>
              <span className="cv-dates">{edu.dates}</span>
            </div>
            <p className="cv-company">{edu.university}</p>
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2>{data.sections.workHistory}</h2>
        {data.workHistory.map((work, index) => (
          <div key={index} className="cv-item">
            <div className="cv-item-header">
              <strong>{work.role}</strong>
              <span className="cv-dates">{work.dates}</span>
            </div>
            <p className="cv-company">{work.company}</p>
            {Array.isArray(work.description) ? (
              <p>
                {work.description.map((item, idx) => (
                  <React.Fragment key={idx}>
                    - {item}
                    {idx < work.description.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            ) : (
              <p>{work.description}</p>
            )}
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2>{data.sections.skills}</h2>
        <ul className="cv-list">
          {data.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="cv-section">
        <h2>{data.sections.languages}</h2>
        <ul className="cv-list">
          {data.languages.map((lang, index) => (
            <li key={index}>{lang.name} - {lang.level}</li>
          ))}
        </ul>
      </section>

      <section className="cv-section">
        <h2>{data.sections.hobbies}</h2>
        <ul className="cv-list">
          {data.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </section>

      {showCopyToast && (
        <div className="copy-toast">
          {copyToastMessage}
        </div>
      )}
    </div>
  );
}

export default CV;
