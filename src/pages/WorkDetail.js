import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const workData = {
  en: {
    1: {
      title: 'Pixelated Adventures',
      description: 'A board game design offering a novel way for people to share their travel memories.',
      year: 2024,
      category: 'Individual. User Experience. Product',
      heroImage: `${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/1.png`
      ],
      overview: 'Pixelated Adventures - a board game design on my Exploring Interaction course, offering a novel way for people to share their travel memories. I began by examining the challenges of souvenir selection, delving deeper into the inadequacies of traditional storytelling, and exploring innovative methods to enhance these experiences with interactivity and appeal.',
      overviewExtra: '',
      role: 'Designer',
      roleDesc: 'In this project, I was responsible for the complete design process from research and ideation to prototyping and testing, creating an engaging board game experience that transforms how people share travel memories.',
      process: ['Research & Analysis', 'Concept Development', 'Prototyping', 'User Testing', 'Refinement'],
      insights: ['Gamification in Storytelling', 'Physical Product Design', 'User Experience Innovation'],
      results: 'The design successfully transforms traditional travel memory sharing into an interactive and engaging board game experience.'
    },
    2: {
      title: 'E.C.H.O.',
      description: 'High-performance mobile shopping experience with integrated payment, recommendation system and real-time inventory management',
      year: 2024,
      category: 'Mobile App',
      heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop'
      ],
      overview: 'An e-commerce app focused on mobile shopping experience, providing smooth shopping flow and personalized recommendations.',
      overviewExtra: 'Through deep understanding of user needs and market trends, we designed and developed a practical and beautiful solution aimed at enhancing user experience and work efficiency.',
      role: 'Mobile Development Lead',
      roleDesc: 'In this project, I was responsible for all aspects from conceptual design to final implementation, ensuring timely delivery and meeting expected goals.',
      process: ['User Research', 'Prototype Design', 'UI/UX Design', 'Development', 'Performance Optimization'],
      insights: ['Mobile Performance Optimization', 'User Experience Design', 'Recommendation Algorithm'],
      results: 'After launch, daily active users increased by 200% and conversion rate improved by 35%.'
    },
    3: {
      title: 'Smart Data Analytics Dashboard',
      description: 'Real-time data visualization platform supporting multi-dimensional analysis and custom reports',
      year: 2023,
      category: 'Data Visualization',
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
      ],
      overview: 'A powerful data visualization platform that helps users quickly understand complex data and make decisions.',
      overviewExtra: 'Through deep understanding of user needs and market trends, we designed and developed a practical and beautiful solution aimed at enhancing user experience and work efficiency.',
      role: 'Frontend Developer',
      roleDesc: 'In this project, I was responsible for all aspects from conceptual design to final implementation, ensuring timely delivery and meeting expected goals.',
      process: ['Data Model Design', 'Visualization Component Development', 'Interaction Design', 'Performance Optimization'],
      insights: ['Data Visualization Best Practices', 'Real-time Data Processing', 'Interaction Design'],
      results: 'The platform helps users save an average of 50% of data analysis time.'
    },
    4: {
      title: 'Collaboration Tool',
      description: 'Team collaboration platform integrating project management, document editing and real-time communication',
      year: 2023,
      category: 'Collaboration',
      heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop'
      ],
      overview: 'A comprehensive team collaboration platform that integrates project management, document collaboration and real-time communication.',
      overviewExtra: 'Through deep understanding of user needs and market trends, we designed and developed a practical and beautiful solution aimed at enhancing user experience and work efficiency.',
      role: 'Product Development Engineer',
      roleDesc: 'In this project, I was responsible for all aspects from conceptual design to final implementation, ensuring timely delivery and meeting expected goals.',
      process: ['Product Planning', 'Feature Design', 'Technology Selection', 'Development', 'User Testing'],
      insights: ['Real-time Collaboration Technology', 'User Experience Design', 'System Architecture'],
      results: 'After launch, team collaboration efficiency improved by 45%.'
    },
    5: {
      title: 'Content Management System',
      description: 'Flexible content management solution supporting multi-site management and custom workflows',
      year: 2022,
      category: 'CMS',
      heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
      ],
      overview: 'A flexible and powerful content management system supporting multi-site management and custom workflows.',
      overviewExtra: 'Through deep understanding of user needs and market trends, we designed and developed a practical and beautiful solution aimed at enhancing user experience and work efficiency.',
      role: 'Backend Developer',
      roleDesc: 'In this project, I was responsible for all aspects from conceptual design to final implementation, ensuring timely delivery and meeting expected goals.',
      process: ['System Architecture Design', 'API Development', 'Database Design', 'Security Implementation'],
      insights: ['System Architecture Design', 'API Design', 'Security'],
      results: 'The system supports over 100 sites running simultaneously with 99.9% stability.'
    },
    6: {
      title: 'Online Education Platform',
      description: 'Interactive learning platform with course management, video streaming and assignment evaluation',
      year: 2022,
      category: 'EdTech',
      heroImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop'
      ],
      overview: 'A fully-featured online education platform providing course management, video streaming and assignment evaluation.',
      overviewExtra: 'Through deep understanding of user needs and market trends, we designed and developed a practical and beautiful solution aimed at enhancing user experience and work efficiency.',
      role: 'Full-stack Developer',
      roleDesc: 'In this project, I was responsible for all aspects from conceptual design to final implementation, ensuring timely delivery and meeting expected goals.',
      process: ['Requirements Research', 'Feature Design', 'Full-stack Development', 'Video Streaming Technology', 'Testing & Optimization'],
      insights: ['Video Streaming Technology', 'User Experience Design', 'Education Technology'],
      results: 'The platform has over 100,000 registered users with a course completion rate of 75%.'
    },
    7: {
      title: 'AI-Powered Design System',
      description: 'Intelligent design system with automated component generation and style consistency tools',
      year: 2024,
      category: 'Design System',
      heroImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop'
      ],
      overview: 'An intelligent design system that leverages AI to automate component generation and maintain style consistency across projects.',
      overviewExtra: 'Through deep understanding of user needs and market trends, we designed and developed a practical and beautiful solution aimed at enhancing user experience and work efficiency.',
      role: 'Design System Lead',
      roleDesc: 'In this project, I was responsible for all aspects from conceptual design to final implementation, ensuring timely delivery and meeting expected goals.',
      process: ['Design Research', 'System Architecture', 'Component Development', 'AI Integration', 'Documentation'],
      insights: ['Design System Best Practices', 'AI in Design', 'Component Reusability'],
      results: 'The design system reduced design time by 60% and improved consistency across all products by 85%.'
    },
  },
  zh: {
    1: {
      title: 'Pixelated Adventures',
      description: '一款棋盘游戏设计，为人们分享旅行回忆提供了一种新颖的方式。',
      year: 2024,
      category: '个人项目. 用户体验. 产品',
      heroImage: `${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/1.png`
      ],
      overview: 'Pixelated Adventures - 我在探索交互课程中设计的棋盘游戏，为人们分享旅行回忆提供了一种新颖的方式。我从研究纪念品选择的挑战开始，深入探讨传统叙事的不足，并探索创新方法，通过互动性和吸引力来增强这些体验。',
      overviewExtra: '',
      role: '设计师',
      roleDesc: '在这个项目中，我负责从研究和构思到原型制作和测试的完整设计过程，创造了一个引人入胜的棋盘游戏体验，改变了人们分享旅行回忆的方式。',
      process: ['研究与分析', '概念开发', '原型制作', '用户测试', '优化改进'],
      insights: ['叙事中的游戏化', '实体产品设计', '用户体验创新'],
      results: '该设计成功地将传统的旅行回忆分享转变为互动且引人入胜的棋盘游戏体验。'
    },
    2: {
      title: 'E.C.H.O.',
      description: '一个社区机器人，与居民互动、收集故事，探索机器人在未来社区中的角色。',
      year: 2024,
      category: '团队. 编程. 人工智能. 产品',
      heroImage: `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/1.png`
      ],
      overview: 'E.C.H.O.是一个社区机器人，与居民互动、收集他们的故事并记录下来。通过引入ECHO，我们想要探讨机器人在未来社区中的角色。',
      overviewExtra: '',
      role: '设计师 & 开发者',
      roleDesc: '在这个团队项目中，我参与了E.C.H.O.的设计和开发，探索机器人如何成为社区生活的一部分并促进社交互动。',
      process: ['研究与概念', '原型制作', '开发实现', '社区测试', '优化改进'],
      insights: ['人机交互', '社区参与', 'AI在社会场景中的应用'],
      results: '该项目成功探索了机器人作为社区成员的潜在角色，并提出了关于未来社区的重要问题。'
    },
    3: {
      title: '智能数据分析仪表板',
      description: '实时数据可视化平台，支持多维度数据分析和自定义报表',
      year: 2023,
      category: '数据可视化',
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
      ],
      overview: '一个强大的数据可视化平台，帮助用户快速理解复杂数据并做出决策。',
      overviewExtra: '通过深入理解用户需求和市场趋势，我们设计并开发了一个既实用又美观的解决方案，旨在提升用户体验和工作效率。',
      role: '前端开发工程师',
      roleDesc: '在这个项目中，我负责从概念设计到最终实现的各个环节，确保项目按时交付并达到预期目标。',
      process: ['数据模型设计', '可视化组件开发', '交互设计', '性能优化'],
      insights: ['数据可视化最佳实践', '实时数据处理', '交互设计'],
      results: '平台帮助用户平均节省50%的数据分析时间。'
    },
    4: {
      title: '协作办公工具',
      description: '团队协作平台，集成项目管理、文档编辑和实时通信功能',
      year: 2023,
      category: '协作工具',
      heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop'
      ],
      overview: '一个全面的团队协作平台，整合了项目管理、文档协作和实时通信功能。',
      overviewExtra: '通过深入理解用户需求和市场趋势，我们设计并开发了一个既实用又美观的解决方案，旨在提升用户体验和工作效率。',
      role: '产品开发工程师',
      roleDesc: '在这个项目中，我负责从概念设计到最终实现的各个环节，确保项目按时交付并达到预期目标。',
      process: ['产品规划', '功能设计', '技术选型', '开发实现', '用户测试'],
      insights: ['实时协作技术', '用户体验设计', '系统架构'],
      results: '平台上线后，团队协作效率提升45%。'
    },
    5: {
      title: '内容管理系统',
      description: '灵活的内容管理解决方案，支持多站点管理和自定义工作流',
      year: 2022,
      category: 'CMS',
      heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
      ],
      overview: '一个灵活强大的内容管理系统，支持多站点管理和自定义工作流。',
      overviewExtra: '通过深入理解用户需求和市场趋势，我们设计并开发了一个既实用又美观的解决方案，旨在提升用户体验和工作效率。',
      role: '后端开发工程师',
      roleDesc: '在这个项目中，我负责从概念设计到最终实现的各个环节，确保项目按时交付并达到预期目标。',
      process: ['系统架构设计', 'API开发', '数据库设计', '安全实现'],
      insights: ['系统架构设计', 'API设计', '安全性'],
      results: '系统支持超过100个站点同时运行，稳定性达到99.9%。'
    },
    6: {
      title: '在线教育平台',
      description: '互动式学习平台，提供课程管理、视频直播和作业评估功能',
      year: 2022,
      category: '教育科技',
      heroImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop'
      ],
      overview: '一个功能完整的在线教育平台，提供课程管理、视频直播和作业评估功能。',
      overviewExtra: '通过深入理解用户需求和市场趋势，我们设计并开发了一个既实用又美观的解决方案，旨在提升用户体验和工作效率。',
      role: '全栈开发工程师',
      roleDesc: '在这个项目中，我负责从概念设计到最终实现的各个环节，确保项目按时交付并达到预期目标。',
      process: ['需求调研', '功能设计', '前后端开发', '视频流技术', '测试优化'],
      insights: ['视频流技术', '用户体验设计', '教育技术'],
      results: '平台注册用户超过10万，课程完成率达到75%。'
    },
    7: {
      title: 'AI驱动设计系统',
      description: '智能设计系统，提供自动化组件生成和样式一致性工具',
      year: 2024,
      category: '设计系统',
      heroImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop'
      ],
      overview: '一个利用AI技术自动生成组件并保持跨项目样式一致性的智能设计系统。',
      overviewExtra: '通过深入理解用户需求和市场趋势，我们设计并开发了一个既实用又美观的解决方案，旨在提升用户体验和工作效率。',
      role: '设计系统负责人',
      roleDesc: '在这个项目中，我负责从概念设计到最终实现的各个环节，确保项目按时交付并达到预期目标。',
      process: ['设计研究', '系统架构', '组件开发', 'AI集成', '文档编写'],
      insights: ['设计系统最佳实践', 'AI在设计中的应用', '组件可复用性'],
      results: '设计系统将设计时间减少60%，产品一致性提升85%。'
    },
  },
  en: {
    1: {
      title: 'Enterprise SaaS Platform',
      description: 'Full-stack enterprise solution providing comprehensive business management tools and data analytics',
      year: 2024,
      category: 'Web Application',
      heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop'
      ],
      overview: 'A full-stack SaaS solution for enterprises, designed to help businesses improve operational efficiency and management capabilities.',
      overviewExtra: 'Through deep understanding of user needs and market trends, we designed and developed a practical and beautiful solution aimed at enhancing user experience and work efficiency.',
      role: 'Full-stack Developer',
      roleDesc: 'In this project, I was responsible for all aspects from conceptual design to final implementation, ensuring timely delivery and meeting expected goals.',
      process: ['Requirements Analysis', 'Architecture Design', 'Frontend Development', 'Backend Development', 'Testing & Deployment'],
      insights: ['User Experience Optimization', 'Performance Enhancement', 'Data Security'],
      results: 'After launch, user satisfaction increased by 40% and system response time decreased by 60%.'
    },
    2: {
      title: 'E.C.H.O.',
      description: 'A community robot that interacts with residents, collects stories, and explores the role of robots in future neighborhoods.',
      year: 2024,
      category: 'Group. Programming. Artificial Intelligence. Product',
      heroImage: `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/1.png`
      ],
      overview: 'E.C.H.O. is a robot in the community that interacts with residents, collects their stories, and records them. With the introduction of ECHO we wanted to ask questions considering the role of the robot (or robots) in the neighbourhoods of the future.',
      overviewExtra: '',
      role: 'Designer & Developer',
      roleDesc: 'In this group project, I contributed to the design and development of E.C.H.O., exploring how robots can become part of community life and facilitate social interactions.',
      process: ['Research & Concept', 'Prototyping', 'Development', 'Community Testing', 'Refinement'],
      insights: ['Human-Robot Interaction', 'Community Engagement', 'AI in Social Context'],
      results: 'The project successfully explores the potential role of robots as community members and raises important questions about future neighborhoods.'
    },
    3: {
      title: 'Smart Data Analytics Dashboard',
      description: 'Real-time data visualization platform supporting multi-dimensional analysis and custom reports',
      year: 2023,
      category: 'Data Visualization',
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
      ],
      overview: 'A powerful data visualization platform that helps users quickly understand complex data and make decisions.',
      overviewExtra: 'Through deep understanding of user needs and market trends, we designed and developed a practical and beautiful solution aimed at enhancing user experience and work efficiency.',
      role: 'Frontend Developer',
      roleDesc: 'In this project, I was responsible for all aspects from conceptual design to final implementation, ensuring timely delivery and meeting expected goals.',
      process: ['Data Model Design', 'Visualization Component Development', 'Interaction Design', 'Performance Optimization'],
      insights: ['Data Visualization Best Practices', 'Real-time Data Processing', 'Interaction Design'],
      results: 'The platform helps users save an average of 50% of data analysis time.'
    },
    4: {
      title: 'Collaboration Tool',
      description: 'Team collaboration platform integrating project management, document editing and real-time communication',
      year: 2023,
      category: 'Collaboration',
      heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop'
      ],
      overview: 'A comprehensive team collaboration platform that integrates project management, document collaboration and real-time communication.',
      overviewExtra: 'Through deep understanding of user needs and market trends, we designed and developed a practical and beautiful solution aimed at enhancing user experience and work efficiency.',
      role: 'Product Development Engineer',
      roleDesc: 'In this project, I was responsible for all aspects from conceptual design to final implementation, ensuring timely delivery and meeting expected goals.',
      process: ['Product Planning', 'Feature Design', 'Technology Selection', 'Development', 'User Testing'],
      insights: ['Real-time Collaboration Technology', 'User Experience Design', 'System Architecture'],
      results: 'After launch, team collaboration efficiency improved by 45%.'
    },
    5: {
      title: 'Content Management System',
      description: 'Flexible content management solution supporting multi-site management and custom workflows',
      year: 2022,
      category: 'CMS',
      heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
      ],
      overview: 'A flexible and powerful content management system supporting multi-site management and custom workflows.',
      overviewExtra: 'Through deep understanding of user needs and market trends, we designed and developed a practical and beautiful solution aimed at enhancing user experience and work efficiency.',
      role: 'Backend Developer',
      roleDesc: 'In this project, I was responsible for all aspects from conceptual design to final implementation, ensuring timely delivery and meeting expected goals.',
      process: ['System Architecture Design', 'API Development', 'Database Design', 'Security Implementation'],
      insights: ['System Architecture Design', 'API Design', 'Security'],
      results: 'The system supports over 100 sites running simultaneously with 99.9% stability.'
    },
    6: {
      title: 'Online Education Platform',
      description: 'Interactive learning platform with course management, video streaming and assignment evaluation',
      year: 2022,
      category: 'EdTech',
      heroImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop'
      ],
      overview: 'A fully-featured online education platform providing course management, video streaming and assignment evaluation.',
      overviewExtra: 'Through deep understanding of user needs and market trends, we designed and developed a practical and beautiful solution aimed at enhancing user experience and work efficiency.',
      role: 'Full-stack Developer',
      roleDesc: 'In this project, I was responsible for all aspects from conceptual design to final implementation, ensuring timely delivery and meeting expected goals.',
      process: ['Requirements Research', 'Feature Design', 'Full-stack Development', 'Video Streaming Technology', 'Testing & Optimization'],
      insights: ['Video Streaming Technology', 'User Experience Design', 'Education Technology'],
      results: 'The platform has over 100,000 registered users with a course completion rate of 75%.'
    },
  },
  'zh-TW': {
    1: {
      title: 'Pixelated Adventures',
      description: '一款棋盤遊戲設計，為人們分享旅行回憶提供了一種新穎的方式。',
      year: 2024,
      category: '個人專案. 用戶體驗. 產品',
      heroImage: `${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/1.png`
      ],
      overview: 'Pixelated Adventures - 我在探索互動課程中設計的棋盤遊戲，為人們分享旅行回憶提供了一種新穎的方式。我從研究紀念品選擇的挑戰開始，深入探討傳統敘事的不足，並探索創新方法，通過互動性和吸引力來增強這些體驗。',
      overviewExtra: '',
      role: '設計師',
      roleDesc: '在這個專案中，我負責從研究和構思到原型製作和測試的完整設計過程，創造了一個引人入勝的棋盤遊戲體驗，改變了人們分享旅行回憶的方式。',
      process: ['研究與分析', '概念開發', '原型製作', '用戶測試', '優化改進'],
      insights: ['敘事中的遊戲化', '實體產品設計', '用戶體驗創新'],
      results: '該設計成功地將傳統的旅行回憶分享轉變為互動且引人入勝的棋盤遊戲體驗。'
    },
    2: {
      title: 'E.C.H.O.',
      description: '一個社區機器人，與居民互動、收集故事，探索機器人在未來社區中的角色。',
      year: 2024,
      category: '團隊. 程式設計. 人工智慧. 產品',
      heroImage: `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/1.png`
      ],
      overview: 'E.C.H.O.是一個社區機器人，與居民互動、收集他們的故事並記錄下來。通過引入ECHO，我們想要探討機器人在未來社區中的角色。',
      overviewExtra: '',
      role: '設計師 & 開發者',
      roleDesc: '在這個團隊專案中，我參與了E.C.H.O.的設計和開發，探索機器人如何成為社區生活的一部分並促進社交互動。',
      process: ['研究與概念', '原型製作', '開發實現', '社區測試', '優化改進'],
      insights: ['人機互動', '社區參與', 'AI在社會場景中的應用'],
      results: '該專案成功探索了機器人作為社區成員的潛在角色，並提出了關於未來社區的重要問題。'
    },
    3: {
      title: '智能數據分析儀表板',
      description: '即時數據可視化平台，支援多維度數據分析和自訂報表',
      year: 2023,
      category: '數據可視化',
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
      ],
      overview: '一個強大的數據可視化平台，幫助用戶快速理解複雜數據並做出決策。',
      overviewExtra: '通過深入理解用戶需求和市場趨勢，我們設計並開發了一個既實用又美觀的解決方案，旨在提升用戶體驗和工作效率。',
      role: '前端開發工程師',
      roleDesc: '在這個專案中，我負責從概念設計到最終實現的各個環節，確保專案按時交付並達到預期目標。',
      process: ['數據模型設計', '可視化組件開發', '互動設計', '效能優化'],
      insights: ['數據可視化最佳實踐', '即時數據處理', '互動設計'],
      results: '平台幫助用戶平均節省50%的數據分析時間。'
    },
    4: {
      title: '協作辦公工具',
      description: '團隊協作平台，整合專案管理、文件編輯和即時通訊功能',
      year: 2023,
      category: '協作工具',
      heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop'
      ],
      overview: '一個全面的團隊協作平台，整合了專案管理、文件協作和即時通訊功能。',
      overviewExtra: '通過深入理解用戶需求和市場趨勢，我們設計並開發了一個既實用又美觀的解決方案，旨在提升用戶體驗和工作效率。',
      role: '產品開發工程師',
      roleDesc: '在這個專案中，我負責從概念設計到最終實現的各個環節，確保專案按時交付並達到預期目標。',
      process: ['產品規劃', '功能設計', '技術選型', '開發實現', '用戶測試'],
      insights: ['即時協作技術', '用戶體驗設計', '系統架構'],
      results: '平台上線後，團隊協作效率提升45%。'
    },
    5: {
      title: '內容管理系統',
      description: '靈活的內容管理解決方案，支援多站點管理和自訂工作流程',
      year: 2022,
      category: 'CMS',
      heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
      ],
      overview: '一個靈活強大的內容管理系統，支援多站點管理和自訂工作流程。',
      overviewExtra: '通過深入理解用戶需求和市場趨勢，我們設計並開發了一個既實用又美觀的解決方案，旨在提升用戶體驗和工作效率。',
      role: '後端開發工程師',
      roleDesc: '在這個專案中，我負責從概念設計到最終實現的各個環節，確保專案按時交付並達到預期目標。',
      process: ['系統架構設計', 'API開發', '數據庫設計', '安全實現'],
      insights: ['系統架構設計', 'API設計', '安全性'],
      results: '系統支援超過100個站點同時運行，穩定性達到99.9%。'
    },
    6: {
      title: '線上教育平台',
      description: '互動式學習平台，提供課程管理、影片直播和作業評估功能',
      year: 2022,
      category: '教育科技',
      heroImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop'
      ],
      overview: '一個功能完整的線上教育平台，提供課程管理、影片直播和作業評估功能。',
      overviewExtra: '通過深入理解用戶需求和市場趨勢，我們設計並開發了一個既實用又美觀的解決方案，旨在提升用戶體驗和工作效率。',
      role: '全棧開發工程師',
      roleDesc: '在這個專案中，我負責從概念設計到最終實現的各個環節，確保專案按時交付並達到預期目標。',
      process: ['需求調研', '功能設計', '前後端開發', '影片流技術', '測試優化'],
      insights: ['影片流技術', '用戶體驗設計', '教育技術'],
      results: '平台註冊用戶超過10萬，課程完成率達到75%。'
    },
    7: {
      title: 'AI驅動設計系統',
      description: '智能設計系統，提供自動化組件生成和樣式一致性工具',
      year: 2024,
      category: '設計系統',
      heroImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop'
      ],
      overview: '一個利用AI技術自動生成組件並保持跨專案樣式一致性的智能設計系統。',
      overviewExtra: '通過深入理解用戶需求和市場趨勢，我們設計並開發了一個既實用又美觀的解決方案，旨在提升用戶體驗和工作效率。',
      role: '設計系統負責人',
      roleDesc: '在這個專案中，我負責從概念設計到最終實現的各個環節，確保專案按時交付並達到預期目標。',
      process: ['設計研究', '系統架構', '組件開發', 'AI整合', '文件編寫'],
      insights: ['設計系統最佳實踐', 'AI在設計中的應用', '組件可復用性'],
      results: '設計系統將設計時間減少60%，產品一致性提升85%。'
    },
  }
};

const sectionLabels = {
  en: {
    back: '← Back to Work',
    overview: 'Project Overview',
    role: 'My Role',
    process: 'Development Process',
    images: 'Project Images',
    insights: 'Key Insights',
    results: 'Project Results',
    notFound: 'Project Not Found',
    notFoundDesc: 'The project you\'re looking for doesn\'t exist.',
    loading: 'Loading',
    loadingDesc: 'Project content is being prepared.'
  },
  zh: {
    back: '← 返回作品',
    overview: '项目概述',
    role: '我的角色',
    process: '开发流程',
    images: '项目图片',
    insights: '关键洞察',
    results: '项目成果',
    notFound: '项目未找到',
    notFoundDesc: '您查找的项目不存在。',
    loading: '加载中',
    loadingDesc: '项目内容正在准备中。'
  },
  'zh-TW': {
    back: '← 返回作品',
    overview: '專案概述',
    role: '我的角色',
    process: '開發流程',
    images: '專案圖片',
    insights: '關鍵洞察',
    results: '專案成果',
    notFound: '專案未找到',
    notFoundDesc: '您查找的專案不存在。',
    loading: '載入中',
    loadingDesc: '專案內容正在準備中。'
  }
};

function WorkDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const work = workData[language]?.[parseInt(id, 10)] || workData.en[parseInt(id, 10)];
  const labels = sectionLabels[language] || sectionLabels.en;
  const [activeImage, setActiveImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [id, language]);

  if (!work) {
    return (
      <div className="page-content work-detail-loading">
        <h1>{labels.notFound}</h1>
        <p>{labels.notFoundDesc}</p>
        <Link to="/">{labels.back}</Link>
      </div>
    );
  }

  return (
    <div className="page-content work-detail-loading">
      <h1>{labels.loading}</h1>
      <p>{labels.loadingDesc}</p>
      <Link to="/">{labels.back}</Link>
    </div>
  );
}

export default WorkDetail;
