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
    workHistory: [
      {
        dates: '2024-4 - Present',
        role: 'Co-Founder',
        company: 'EuroStay',
        description: 'Lead UI/UX design initiatives and manage event operations. Create user-centered design solutions, conduct user research, and design intuitive interfaces. Plan and execute events, coordinate logistics, and ensure seamless user experiences across digital and physical touchpoints.'
      },
      {
        dates: '2025-10 - 2026-01',
        role: 'Research Assistant',
        company: 'Hong Kong University of Science and Technology, Division of Arts and Machine Creativity',
        description: [
          'System Development: Developed CoBrush, a human-robot collaborative painting system based on the 7-DOF Franka robotic arm.',
          'Installation Exhibition: Responsible for the execution and management of large-scale public events, ensuring smooth and real-time collaborative creation and performance during the Hong Kong Artificial Intelligence Arts Festival and the "2025 Winter Concert" organized by the Hong Kong University of Science and Technology Philharmonic Orchestra.'
        ]
      },
      {
        dates: '2024-8 - 2025-11-14',
        role: 'Green Team IDE Organiser',
        company: 'Delft University of Technology',
        description: 'Serve as a brand ambassador, event organizer, and produce various types of visual content.'
      },
      {
        dates: '2024-8 - 2025-2',
        role: 'Philips Hue & WiZ Visual Merchandising/Design Intern',
        company: 'Signify Netherlands B.V.',
        description: [
          'Design user-centered digital experiences for brands such as Philips Hue and WiZ across web and in-store touchpoints, translating brand values into intuitive UX and refined UI.',
          'Analyze UX research reports, user feedback, and marketing performance data to identify insights and inform experience optimization and design decisions.',
          'Contribute to the development and maintenance of a global design system by aligning interaction patterns, visual language, and usability standards across regions.',
          'Create, iterate, and refine UI assets, motion, and visual content for multiple digital platforms.'
        ]
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
        description: 'Assist with data analysis, classification, and documentation at the Delft Health Initiative, supporting the structuring of health-related datasets and information systems to enable clearer insights and more efficient knowledge sharing.'
      },
      {
        dates: '2023-10 - 2023-10',
        role: 'Student Assistant',
        company: 'Dutch Design Week',
        description: 'Guided visitors and explained seven AI-focused design projects at a TU Delft exhibition with 100,000+ total attendees.'
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
        dates: '2023-9 - 2025-11',
        degree: 'Design for Interaction, Master of Science',
        university: 'Delft University of Technology'
      },
      {
        dates: '2020-9 - 2022-7',
        degree: 'Industrial Design, Bachelor of Engineering',
        university: 'University of Liverpool'
      },
      {
        dates: '2018-9 - 2020-7',
        degree: 'Industrial Design, Bachelor of Engineering',
        university: 'Xi\'an Jiaotong-Liverpool University'
      }
    ],
    skills: [
      'Prompt Engineering',
      'UI/UX Design',
      'Human-Computer Interaction',
      'Programming',
      'Data Analysis',
      'Communication Skill',
      'MS office',
      'Adobe family',
      '3D Modeling',
      'Video Editing'
    ],
    languages: [
      { name: 'Mandarin', level: 'C2' },
      { name: 'Cantonese', level: 'C1' },
      { name: 'English', level: 'C1' },
      { name: 'Shaodong Dialect (Hunan)', level: 'C1' },
      { name: 'Dutch', level: 'A1' },
      { name: 'Japanese', level: 'A1' },
      { name: 'Spanish', level: 'A1' }
    ],
    hobbies: [
      'Drawing',
      'Musical Instruments',
      'Game design',
      'Movies',
      'Reading',
      'Travel'
    ],
    sections: {
      personalInfo: 'Personal Information',
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
    workHistory: [
      {
        dates: '2024-4 - 至今',
        role: '联合创始人',
        company: 'EuroStay',
        description: '负责UI/UX设计工作和活动运营管理。创建以用户为中心的设计方案，进行用户研究，设计直观的界面。策划和执行活动，协调活动流程，确保数字和实体触点的无缝用户体验。'
      },
      {
        dates: '2025-10 - 2026-01',
        role: '研究助理',
        company: '香港科技大学，艺术与机器创造学部 (Division of Arts and Machine Creativity)',
        description: [
          '系统开发：基于 7 自由度 Franka 机械臂开发了人机协作绘画系统 CoBrush。',
          '装置展览：负责大型公共活动的执行与管理，确保在香港人工智能艺术节以及香港科技大学管弦乐团主办的“2025冬季音乐会”期间，协作创作与表演的流畅性与实时性。'
        ]
      },
      {
        dates: '2024-8 - 2025-11-14',
        role: 'Green Team IDE 组织者',
        company: '代尔夫特理工大学',
        description: '担任品牌大使、活动组织者，并制作各种类型的视觉内容。'
      },
      {
        dates: '2024-8 - 2025-2',
        role: 'Philips Hue & WiZ 视觉营销/设计实习生',
        company: 'Signify Netherlands B.V.',
        description: '为Philips Hue和WiZ等品牌创建创新的设计和内容，包括在线和店内营销材料。确保全球一致的品牌体验。编辑用于各种用途的图像和视频，并通过结构化的项目管理帮助团队成员实现他们的想法。'
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
        dates: '2023-9 - 2025-11',
        degree: '交互设计，理学硕士',
        university: '代尔夫特理工大学'
      },
      {
        dates: '2020-9 - 2022-7',
        degree: '工业设计，工程学士',
        university: '利物浦大学'
      },
      {
        dates: '2018-9 - 2020-7',
        degree: '工业设计，工程学士',
        university: '西交利物浦大学'
      }
    ],
    skills: [
      '很会prompt',
      'UI/UX设计',
      '人机交互',
      '编程',
      '数据分析',
      '沟通技能',
      'MS office',
      'Adobe系列',
      '建模',
      '剪辑'
    ],
    languages: [
      { name: '普通话', level: 'C2' },
      { name: '粤语', level: 'C1' },
      { name: '英语', level: 'C1' },
      { name: '湖南邵东话', level: 'C1' },
      { name: '荷兰语', level: 'A1' },
      { name: '日语', level: 'A1' },
      { name: '西班牙语', level: 'A1' }
    ],
    hobbies: [
      '绘画',
      '乐器',
      '游戏设计',
      '电影',
      '看书',
      '旅行'
    ],
    sections: {
      personalInfo: '个人信息',
      workHistory: '工作经历',
      education: '教育背景',
      skills: '技能',
      languages: '语言',
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
      <div className="cv-header">
        <h1>{data.name}</h1>
      </div>

      <section className="cv-section">
        <h2>{data.sections.personalInfo}</h2>
        <p>
          <strong>Email:</strong> {data.personalInfo.email}<br />
          <strong>Phone:</strong> {data.personalInfo.phone}
        </p>
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

      <div className="cv-footer">
        <div className="cv-footer-section">
          <h3 className="cv-footer-title">{data.sections.contact}</h3>
          <p className="cv-footer-content">
            <a
              href="#"
              className="cv-footer-email-link"
              onClick={handleEmailClick}
            >
              {data.personalInfo.email}
            </a>
          </p>
        </div>
        <div className="cv-footer-section">
          <h3 className="cv-footer-title">{data.sections.cv}</h3>
          <a href="/CV_Qinlin_Liu.pdf" className="cv-footer-link" download>{data.sections.viewDownload}</a>
        </div>
      </div>
      {showCopyToast && (
        <div className="copy-toast">
          {copyToastMessage}
        </div>
      )}
    </div>
  );
}

export default CV;
