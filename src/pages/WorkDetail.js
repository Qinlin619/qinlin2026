import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getWorksListByYear } from '../components/WorkGrid';
import CategoryIcons from '../components/CategoryIcons';

function getYoutubeEmbedUrl(url) {
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();
  const watchMatch = trimmed.match(/(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/);
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
  const shortMatch = trimmed.match(/(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
  return null;
}

const workData = {
  en: {
    8: {
      title: 'EuroStay',
      description: '',
      year: 2026,
      category: 'Group. User Interface. User Experience. Events',
      heroImage: '',
      images: [],
      overview: (
        <>
          <p>
            Project Link:{' '}
            <a
              href="https://www.eurostay.co"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#000', textDecoration: 'underline', wordBreak: 'break-all' }}
            >
              www.eurostay.co
            </a>
          </p>
          <p>
            By visiting this website, you can see all our detailed work. Within the team, I was responsible for the APP's UI/UX design, event planning, user engagement, and partial website construction.
          </p>
        </>
      ),
      overviewExtra: '',
      role: '',
      roleDesc: '',
      process: [],
      insights: [],
      results: ''
    },
    1: {
      title: 'Pixelated Adventures',
      description: 'A board game design offering a novel way for people to share their travel memories.',
      year: 2024,
      category: 'Individual. User Experience. Product',
      heroImage: `${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/0.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/0.png`
      ],
      overview: (
        <>
          <p>Pixelated Adventures - a board game design on my Exploring Interaction course, offering a novel way for people to share their travel memories. I began by examining the challenges of souvenir selection, delving deeper into the inadequacies of traditional storytelling, and exploring innovative methods to enhance these experiences with interactivity and appeal.</p>
          <div className="featured-photos-grid" style={{ marginBottom: '2rem' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <img
                key={num}
                src={`${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/${num}.png`}
                alt={`Pixelated Adventures featured ${num}`}
                className="featured-photo-placeholder"
                style={{ objectFit: 'cover' }}
              />
            ))}
          </div>
          <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a
              href={`${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/Pixelated Adventures.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              Full Project (PDF)
            </a>
          </div>
        </>
      ),
      overviewExtra: '',
      role: 'Designer',
      roleDesc: 'In this project, I was responsible for the complete design process from research and ideation to prototyping and testing, creating an engaging board game experience that transforms how people share travel memories.',
      process: ['Research & Analysis', 'Concept Development', 'Prototyping', 'User Testing', 'Refinement'],
      insights: ['Gamification in Storytelling', 'Physical Product Design', 'User Experience Innovation'],
      results: 'The design successfully transforms traditional travel memory sharing into an interactive and engaging board game experience.'
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
      overview: (
        <>
          <p>E.C.H.O. is a robot in the community that interacts with residents, collects their stories, and records them. With the introduction of ECHO we wanted to ask questions considering the role of the robot (or robots) in the neighbourhoods of the future.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem', alignItems: 'flex-start' }}>
            {[1, 2, 3, 4, 5].map(num => (
              <img
                key={num}
                src={`${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/${num}.${num === 2 || num === 4 ? 'jpeg' : 'png'}`}
                alt={`E.C.H.O. featured ${num}`}
                className="featured-photo-placeholder"
                style={{
                  height: '300px',
                  width: 'auto',
                  aspectRatio: 'auto',
                  maxWidth: '100%'
                }}
              />
            ))}
          </div>
          <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a
              href={`${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/E.C.H.O-poster.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              Project Poster (PDF)
            </a>
            <a
              href="https://www.youtube.com/watch?v=nBapYYWg-BI"
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              Exhibition Video (YouTube)
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/Meet E.C.H.O.mp4`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              Final Project Video (MP4)
            </a>
            <a
              href="https://github.com/Qinlin619/E.C.H.O.git"
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              Source Code (GitHub)
            </a>
          </div>
        </>
      ),
      youtubeUrl: '',
      videoUrl: `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/Meet E.C.H.O.mp4`,
      overviewExtra: '',
      role: 'Designer & Developer',
      roleDesc: 'In this group project, I contributed to the design and development of E.C.H.O., exploring how robots can become part of community life and facilitate social interactions.',
      process: ['Research & Concept', 'Prototyping', 'Development', 'Community Testing', 'Refinement'],
      insights: ['Human-Robot Interaction', 'Community Engagement', 'AI in Social Context'],
      results: 'The project successfully explores the potential role of robots as community members and raises important questions about future neighborhoods.'
    },
    3: {
      title: 'Lambanana Tour',
      description: 'A guide map and souvenir for the Museum of Liverpool designed to encourage children to be more active and knowledgeable when visiting.',
      year: 2023,
      category: 'Individual. Child Play. Museum',
      heroImage: `${process.env.PUBLIC_URL}/work/2023/1LambananaTour/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2023/1LambananaTour/1.png`
      ],
      overview: (
        <>
          <p>Created as a specialized guide for the Museum of Liverpool, the Lambanana Tour project aimed to gamify the museum experience for children. The illustrated map and interactive souvenir set encourage young visitors to explore specific exhibits and engage with Liverpool's rich history in a playful, memorable way.</p>
          <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a
              href={`${process.env.PUBLIC_URL}/work/2023/1LambananaTour/LambananaTour.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              Project Details (PDF)
            </a>
          </div>
        </>
      ),
      overviewExtra: '',
      role: 'Project Designer & Illustrator',
      roleDesc: 'Responsible for the entire design cycle, from initial research on child-museum interaction to the final illustration and production of the physical guide materials.',
      process: ['Museum Context Research', 'Child Engagement Study', 'Illustration & Map Design', 'Prototyping'],
      insights: ['Gamification in Education', 'Visual Communication for Children', 'Public Space Navigation'],
      results: 'The final guide received positive feedback from museum educators for its ability to hold children\'s attention and facilitate deeper learning.'
    },
    4: {
      title: 'Lemur Go',
      description: 'A device designed for people to interact remotely with lemurs in the zoo, helping animals during lockdowns and assisting zoos recoup financial losses.',
      year: 2023,
      category: 'Individual. Well-being. Zoo. Installation',
      heroImage: `${process.env.PUBLIC_URL}/work/2023/2LemurGo/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2023/2LemurGo/1.png`
      ],
      overview: (
        <>
          <p>Lemur Go is a telepresence installation designed to bridge the gap between people and zoo animals during periods of isolation. The system allows remote users to interact with lemurs through digital interfaces, providing mental stimulation for the animals and a unique conservation-focused experience for the users.</p>
          <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a
              href={`${process.env.PUBLIC_URL}/work/2023/2LemurGo/LemurGo.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              Project Details (PDF)
            </a>
          </div>
        </>
      ),
      overviewExtra: '',
      role: 'Lead Designer & Researcher',
      roleDesc: 'Led the research into animal-computer interaction (ACI) and developed the hardware/software prototype for the remote engagement system.',
      process: ['ACI Research', 'System Architecture', 'Installation Prototyping', 'User Interaction Design'],
      insights: ['Non-Human User Experience', 'Remote Presence Technology', 'Animal Enrichment'],
      results: 'Successfully demonstrated how remote technology can support animal welfare and zoo sustainability in crisis conditions.'
    },
    5: {
      title: 'Doozi',
      description: 'A set of wheelchair accessories for children with disabilities, featuring a domino cart for multi-skill learning and a musical puzzle carpet for interactive entertainment.',
      year: 2022,
      category: 'Group. Well-being. Child Play. Programming',
      heroImage: `${process.env.PUBLIC_URL}/work/2022/1Doozi/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2022/1Doozi/1.png`
      ],
      overview: (
        <>
          <p>Doozi is an innovative set of wheelchair accessories designed specifically for children with physical disabilities. The project includes a robotic domino-laying cart that helps children practice motor skills and spatial reasoning, and a musical puzzle carpet that provides tactile and auditory feedback. Our goal was to transform the wheelchair from just a mobility aid into a platform for play and social integration.</p>
          <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a
              href={`${process.env.PUBLIC_URL}/work/2022/1Doozi/Doozi.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              Project Details (PDF)
            </a>
          </div>
        </>
      ),
      overviewExtra: '',
      role: 'Interaction Designer & Developer',
      roleDesc: 'Led the interaction design and programmed the robotic components, ensuring the technology was accessible, safe, and engaging for children with varying levels of mobility.',
      process: ['Inclusive Design Research', 'Electronic Prototyping', 'User Interaction Logic', 'Co-design with Children'],
      insights: ['Designing for Accessibility', 'Play as Therapy', 'Assistive Robotics Interaction'],
      results: 'A working prototype that demonstrated the potential of "playful rehabilitation," received warmly by special education specialists.'
    },
    6: {
      title: 'Happy Little Pill',
      description: 'An inclusive banded pill box designed for elderly people with Alzheimer\'s to help them with daily medication needs, raising awareness of the importance of inclusive design.',
      year: 2022,
      category: 'Group. Well-being. User Experience. User Interface',
      heroImage: `${process.env.PUBLIC_URL}/work/2022/2HappyLittlePill/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2022/2HappyLittlePill/1.png`
      ],
      overview: (
        <>
          <p>Happy Little Pill is an inclusive medication management system specifically designed for elderly individuals living with Alzheimer's. The product utilizes tactile and visual cues (color-coding and embossed patterns) to help users identify their medication schedule independently, reducing the anxiety and risk associated with daily pill intake.</p>
          <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a
              href={`${process.env.PUBLIC_URL}/work/2022/2HappyLittlePill/HappyLittlePill.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              Project Details (PDF)
            </a>
          </div>
        </>
      ),
      overviewExtra: 'The project emphasizes "Dignity in Design," focusing on how everyday objects can be modified to empower those with cognitive impairments.',
      role: 'UX Designer & Visual Designer',
      roleDesc: 'Conducted user journey mapping for elderly patients and designed the visual language and tactile feedback system for the pill box and companion app interface.',
      process: ['Elderly User Research', 'Ergonomic Testing', 'High-fidelity UI Design', 'Tactile Feedback Prototyping'],
      insights: ['Cognitive Load Management', 'Inclusive Design Principles', 'Health & Well-being UX'],
      results: 'A highly intuitive design that significantly reduced medication errors in simulated user testing environments.'
    },
    7: {
      title: 'Atag Induction Hob',
      description: 'Redesign the Atag Induction Hob for enhanced usability, targeting a dependable and convenient cooking experience at home.',
      year: 2024,
      category: 'Group. User Interface. User Experience. Redesign',
      heroImage: `${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/1.png`
      ],
      overview: (
        <>
          <p>The project focuses on redesigning the interface and physical interaction of the Atag induction hob to reduce cognitive load and improve user safety. We analyzed user pain points in modern kitchens and proposed a more intuitive layout and feedback system.</p>
          <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a
              href={`${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/AtagInductionHob-report.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              Project Report (PDF)
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/poster.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              Project Poster (PDF)
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/UxadFinalPrototype.mp4`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              Final Prototype (Video)
            </a>
          </div>
        </>
      ),
      overviewExtra: '',
      role: 'UX/UI Designer',
      roleDesc: 'Responsible for user research, prototype design, and usability testing, ensuring a seamless bridge between user needs and technical functionality.',
      process: ['Requirement Analysis', 'User Journey Mapping', 'Interaction Prototyping', 'Usability Testing', 'Final Refinement'],
      insights: ['Intuitive Interaction Design', 'Safety in Home Appliances', 'Human-Centered Ergonomics'],
      results: 'The redesigned hob proved to be significantly more intuitive in user tests, reducing operational errors and enhancing the overall cooking experience.'
    },
    14: {
      title: 'Intimate Relationship',
      description: 'An immersive experience exploring Klimt\'s "The Kiss" using graphic processing technology.',
      year: 2024,
      category: 'Individual. Digital Artwork. Programming Modelling',
      heroImage: '',
      images: [],
      overview: (
        <>
          <p>This project is an immersive digital reinterpretation of Gustav Klimt's masterpiece "The Kiss". By utilizing advanced graphic processing and 3D modeling, we decomposed the original painting into layered textures and patterns, allowing viewers to "step inside" the artwork and experience the intimacy of the moment from a new perspective.</p>
          <div className="work-detail-iframe-container" style={{ margin: '2rem 0', width: '100%', aspectRatio: '16/9' }}>
            <iframe
              src="https://editor.p5js.org/Qinlin619/full/RqFTk8dEs"
              style={{ width: '100%', height: '100%', border: 'none' }}
              title="Intimate Relationship Interactive"
            />
          </div>
        </>
      ),
      overviewExtra: 'The project focuses on how digital technology can enhance our emotional connection to classical art, transforming a 2D surface into a 3D space of sensory experience.',
      role: 'Digital Artist & Developer',
      roleDesc: 'Responsible for the entire creative and technical process, including digital asset creation, shader programming, and interactive environment design.',
      process: ['Artistic Analysis', 'Digital Layering', '3D Scene Reconstruction', 'Interactive Shader Design'],
      insights: ['Digitalizing Classical Art', 'Spatial Storytelling', 'Emotional Computing'],
      results: 'A compelling immersive installation that offers a modern perspective on one of Art Nouveau\'s most iconic works.'
    },
    11: {
      title: 'Cobrush',
      description: 'A collaborative system that enables humans and robots to paint together through multi-turn interactions.',
      year: 2025,
      category: 'Group. Human-Computer Interaction. Programming',
      heroImage: `${process.env.PUBLIC_URL}/work/2025/Cobrush/1.png`,
      youtubeUrl: '',
      images: [
        `${process.env.PUBLIC_URL}/work/2025/Cobrush/2.JPEG`,
        `${process.env.PUBLIC_URL}/work/2025/Cobrush/1.png`,
        `${process.env.PUBLIC_URL}/work/2025/Cobrush/6.JPEG`
      ],
      overview: (
        <>
          <p>With the rapid advancement of generative AI, digital image generation has become highly automated. While efficiency increases, bodily engagement and sensory interaction diminish, leaving people more detached and often relegated to passive oversight. This shift has motivated the development of painting robots that reintroduce physical action and shared control between humans and machines. However, most existing systems prioritize single-turn output quality and overlook process-oriented aspects such as rhythm, control, and interaction. To bridge this gap, we propose CoBrush, which combines generative AI with robotic arms to enable human painters and AI to interact on a physical canvas. A user study demonstrates that CoBrush improved users’ sense of control by predicting and decomposing the painting process, enhanced creative engagement with human-like gestures and brushstroke expressions, and provided greater artistic satisfaction via an interactive, embodied co-creation experience.</p>
          <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a
              href={`${process.env.PUBLIC_URL}/work/2025/Cobrush/FinalReport.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              Final Report (PDF)
            </a>
          </div>
        </>
      ),
      overviewExtra: '',
      role: 'Designer & Developer',
      roleDesc: 'In this team project, I contributed to the design and development of the collaborative painting system, focusing on interaction design and multi-turn dialogue between user and robot.',
      process: ['Research & Concept', 'Interaction Design', 'Prototyping', 'Robot Integration', 'User Testing'],
      insights: ['Human-Robot Collaboration', 'Creative AI', 'Multi-turn Interaction'],
      results: 'The system successfully enables co-creative painting sessions between humans and robots, opening possibilities for collaborative art and assistive creativity.'
    }
  },
  zh: {
    8: {
      title: 'EuroStay',
      description: '',
      year: 2026,
      category: '团队. 用户界面. 用户体验. 活动',
      heroImage: '',
      images: [],
      overview: (
        <>
          <p>
            附上链接：{' '}
            <a
              href="https://www.eurostay.co"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#000', textDecoration: 'underline', wordBreak: 'break-all' }}
            >
              www.eurostay.co
            </a>
          </p>
          <p>
            点击这个网站你可以看到所有我们详细的工作，我在团队里负责APP的UIUX设计,活动策划,对接用户和部分网站搭建的工作
          </p>
        </>
      ),
      overviewExtra: '',
      role: '',
      roleDesc: '',
      process: [],
      insights: [],
      results: ''
    },
    1: {
      title: 'Pixelated Adventures',
      description: '一款桌面实体互动游戏，为人们分享旅行回忆提供了一种新颖的方式。',
      year: 2024,
      category: '个人项目. 用户体验. 产品',
      heroImage: `${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/0.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/0.png`
      ],
      overview: (
        <>
          <p>Pixelated Adventures - 我在探索交互课程中设计的桌面实体互动游戏，为人们分享旅行回忆提供了一种新颖的方式。我从研究纪念品选择的挑战开始，深入探讨传统叙事的不足，并探索创新方法，通过互动性和吸引力来增强这些体验。</p>
          <div className="featured-photos-grid" style={{ marginBottom: '2rem' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <img
                key={num}
                src={`${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/${num}.png`}
                alt={`Pixelated Adventures featured ${num}`}
                className="featured-photo-placeholder"
                style={{ objectFit: 'cover' }}
              />
            ))}
          </div>
          <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a
              href={`${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/Pixelated Adventures.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              查看完整项目 (PDF)
            </a>
          </div>
        </>
      ),
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
      overview: (
        <>
          <p>E.C.H.O.是一个社区机器人，与居民互动、收集他们的故事并记录下来。通过引入ECHO，我们想要探讨机器人在未来社区中的角色。</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem', alignItems: 'flex-start' }}>
            {[1, 2, 3, 4, 5].map(num => (
              <img
                key={num}
                src={`${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/${num}.${num === 2 || num === 4 ? 'jpeg' : 'png'}`}
                alt={`E.C.H.O. 精选照片 ${num}`}
                className="featured-photo-placeholder"
                style={{
                  height: '300px',
                  width: 'auto',
                  aspectRatio: 'auto',
                  maxWidth: '100%'
                }}
              />
            ))}
          </div>
          <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a
              href={`${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/E.C.H.O-poster.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              项目海报 (PDF)
            </a>
            <a
              href="https://www.youtube.com/watch?v=nBapYYWg-BI"
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              展览视频 (YouTube)
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/Meet E.C.H.O.mp4`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              最终成品视频 (MP4)
            </a>
            <a
              href="https://github.com/Qinlin619/E.C.H.O.git"
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              项目代码库 (GitHub)
            </a>
          </div>
        </>
      ),
      youtubeUrl: '',
      videoUrl: `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/Meet E.C.H.O.mp4`,
      overviewExtra: '',
      role: '设计师 & 开发者',
      roleDesc: '在这个团队项目中，我参与了E.C.H.O.的设计和开发，探索机器人如何成为社区生活的一部分并促进社交互动。',
      process: ['研究与概念', '原型制作', '开发实现', '社区测试', '优化改进'],
      insights: ['人机交互', '社区参与', 'AI在社会场景中的应用'],
      results: '该项目成功探索了机器人作为社区成员的潜在角色，并提出了关于未来社区的重要问题。'
    },
    3: {
      title: 'Lambanana Tour',
      description: '为利物浦博物馆设计的导览地图和纪念品，鼓励儿童在参观博物馆时更加积极和知识丰富。',
      year: 2023,
      category: '个人项目. 儿童游戏. 博物馆',
      heroImage: `${process.env.PUBLIC_URL}/work/2023/1LambananaTour/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2023/1LambananaTour/1.png`
      ],
      overview: (
        <>
          <p>该项目是为利物浦博物馆专门设计的导览系统，旨在平衡儿童的娱乐性与教育性。通过插画地图和互动纪念品，鼓励年轻观众探索特定展品，以一种游戏化且难忘的方式了解利物浦丰富的历史。</p>
          <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a
              href={`${process.env.PUBLIC_URL}/work/2023/1LambananaTour/LambananaTour.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              作品详情 (PDF)
            </a>
          </div>
        </>
      ),
      overviewExtra: '',
      role: '项目设计师 & 插画师',
      roleDesc: '负责整个设计周期，从最初关于儿童与博物馆互动的研究，到最终插画绘制及实体导览材料的制作。',
      process: ['博物馆语境研究', '儿童参与度研究', '插画与地图设计', '原型制作'],
      insights: ['教育游戏化', '面向儿童的视觉传达', '公共空间导航'],
      results: '最终的导览系统获得了博物馆教育人员的积极反馈，认为其能有效吸引儿童注意力并促进更深入的学习。'
    },
    4: {
      title: 'Lemur Go',
      description: '为人们设计的远程与动物园狐猴互动的装置，帮助封锁期间的动物，并协助动物园挽回部分财务损失。',
      year: 2023,
      category: '个人项目. 健康福祉. 动物园. 装置',
      heroImage: `${process.env.PUBLIC_URL}/work/2023/2LemurGo/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2023/2LemurGo/1.png`
      ],
      overview: (
        <>
          <p>Lemur Go 是一项远程呈现装置，旨在疫情隔离期间搭建人与动物园动物之间的桥梁。该系统允许远程用户通过数字界面与狐猴进行交互，为动物提供心理刺激，同时也为用户提供独特的以保护为导向的体验。</p>
          <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a
              href={`${process.env.PUBLIC_URL}/work/2023/2LemurGo/LemurGo.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              作品详情 (PDF)
            </a>
          </div>
        </>
      ),
      overviewExtra: '',
      role: '主设计师 & 研究员',
      roleDesc: '领导了动物与计算机交互 (ACI) 的研究，并开发了远程参与系统的硬件和软件原型。',
      process: ['ACI 研究', '系统架构', '装置原型制作', '用户交互设计'],
      insights: ['非人类用户体验', '远程呈现技术', '动物行为丰富化'],
      results: '成功展示了远程技术如何在危机条件下支持动物福利和动物园的可持续发展。'
    },
    5: {
      title: 'Doozi',
      description: '为残疾儿童设计的一套轮椅配件，包括用于多技能学习的多功能小车和用于交互娱乐的音乐解谜地毯。',
      year: 2022,
      category: '团队项目. 健康福祉. 儿童游戏. 编程',
      heroImage: `${process.env.PUBLIC_URL}/work/2022/1Doozi/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2022/1Doozi/1.png`
      ],
      overview: (
        <>
          <p>Doozi 是一套专门为肢体残疾儿童设计的创新轮椅配件。该项目包括一个能自动摆放多米诺骨牌的机器人小车（帮助儿童锻炼运动技能和空间推理能力），以及一个提供触觉 and 听觉反馈的音乐解谜地毯。我们的目标是将轮椅从单纯的移动辅助工具转变为一个促进玩耍和社交融合的平台。</p>
          <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a
              href={`${process.env.PUBLIC_URL}/work/2022/1Doozi/Doozi.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              作品详情 (PDF)
            </a>
          </div>
        </>
      ),
      overviewExtra: '',
      role: '交互设计师 & 开发者',
      roleDesc: '领导了交互设计并编写了机器人组件的程序，确保技术方案对于不同运动能力等级的儿童都是无障碍、安全且有趣的。',
      process: ['包容性设计研究', '电子原型制作', '用户交互逻辑', '儿童参与式设计'],
      insights: ['为无障碍而设计', '玩耍即治疗', '辅助机器人交互'],
      results: '一个展示了“趣味康复”潜力的可工作原型，受到了特殊教育专家的好评。'
    },
    6: {
      title: 'Happy Little Pill',
      description: '一款为阿兹海默症老年人设计的包容性药盒，帮助其日常生活中的服药需求，提高人们对包容性设计重要性的认识。',
      year: 2022,
      category: '团队项目. 健康福祉. 用户体验. 用户界面',
      heroImage: `${process.env.PUBLIC_URL}/work/2022/2HappyLittlePill/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2022/2HappyLittlePill/1.png`
      ],
      overview: (
        <>
          <p>Happy Little Pill 是一款专为阿兹海默症老年患者设计的包容性药物管理系统。该产品利用触觉和视觉提示（色彩编码和浮雕图案）帮助用户独立识别服药时间表，减少日常服药带来的焦虑 and 风险。</p>
          <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a
              href={`${process.env.PUBLIC_URL}/work/2022/2HappyLittlePill/HappyLittlePill.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              作品详情 (PDF)
            </a>
          </div>
        </>
      ),
      overviewExtra: '该项目强调“尊严设计”，关注如何通过改造日常物品来赋能认知障碍群体。',
      role: 'UX 设计师 & 视觉设计师',
      roleDesc: '为老年患者进行了用户旅程映射，并为药盒以及配套 App 界面设计了视觉语言 and 触觉反馈系统。',
      process: ['老年用户研究', '人机工程学测试', '高保真 UI 设计', '触觉反馈原型制作'],
      insights: ['认知负荷管理', '包容性设计原则', '数字健康与福祉 UX'],
      results: '一种高度直觉化的设计，在模拟用户测试环境中显著降低了服药错误率。'
    },
    7: {
      title: 'Atag Induction Hob',
      description: '重新设计Atag感应炉，提升可用性，旨在提供可靠且便捷的家庭烹饪体验。',
      year: 2024,
      category: '团队. 用户界面. 用户体验. 重新设计',
      heroImage: `${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/1.png`
      ],
      overview: (
        <>
          <p>该项目专注于重新设计 Atag 感应炉的界面和物理交互，以降低用户的认知负荷并提高安全性。我们分析了现代厨房中的用户痛点，并提出了更直观的布局和反馈系统。</p>
          <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a
              href={`${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/AtagInductionHob-report.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              项目报告 (PDF)
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/poster.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              项目海报 (PDF)
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/UxadFinalPrototype.mp4`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              最终原型演示 (视频)
            </a>
          </div>
        </>
      ),
      overviewExtra: '',
      role: 'UX/UI 设计师',
      roleDesc: '负责用户研究、原型设计、可用性测试，确保在用户需求与技术功能之间建立无缝衔接。',
      process: ['需求分析', '用户旅程图', '交互原型设计', '可用性测试', '最终优化'],
      insights: ['直观交互设计', '家电安全性', '以人为本的工效学设计'],
      results: '重新设计的感应炉在用户测试中被证明更为直观，显著减少了操作错误，提升了整体烹饪体验。'
    },
    14: {
      title: 'Intimate Relationship',
      description: '使用图形处理技术探索克林姆特《吻》的沉浸式体验。',
      year: 2024,
      category: '个人项目. 数字化艺术. 编程建模',
      heroImage: '',
      images: [],
      overview: (
        <>
          <p>该项目是对古斯塔夫·克林姆特名作《吻》的沉浸式数字化重新诠释。通过利用先进的图形处理 and 3D 建模技术，我们将原作分解为多层纹理和图案，使观众能够“走进”作品内部，从全新的视角体验瞬间的亲密感。</p>
          <div className="work-detail-iframe-container" style={{ margin: '2rem 0', width: '100%', aspectRatio: '16/9' }}>
            <iframe
              src="https://editor.p5js.org/Qinlin619/full/RqFTk8dEs"
              style={{ width: '100%', height: '100%', border: 'none' }}
              title="Intimate Relationship Interactive"
            />
          </div>
        </>
      ),
      overviewExtra: '项目重点探讨了数字技术如何增强我们与古典艺术的情感联系，将 2D 平面转化为感官体验的 3D 空间。',
      role: '数字艺术家 & 开发者',
      roleDesc: '负责整个创意和技术过程，包括数字资产创建、着色器编程以及交互式环境设计。',
      process: ['艺术分析', '数字分层', '3D 场景重建', '交互式着色器设计'],
      insights: ['古典艺术数字化', '空间叙事', '情感计算'],
      results: '一个引人入胜的沉浸式装置，为工艺美术运动最具标志性的作品之一提供了现代视角。'
    },
    11: {
      title: 'Cobrush',
      description: '一个让人和机器人能够通过多轮交互一起画画的协同系统。',
      year: 2025,
      category: '团队. 人机交互. 编程',
      heroImage: `${process.env.PUBLIC_URL}/work/2025/Cobrush/1.png`,
      youtubeUrl: '',
      images: [
        `${process.env.PUBLIC_URL}/work/2025/Cobrush/2.JPEG`,
        `${process.env.PUBLIC_URL}/work/2025/Cobrush/1.png`,
        `${process.env.PUBLIC_URL}/work/2025/Cobrush/6.JPEG`
      ],
      overview: (
        <>
          <p>随着生成式人工智能的飞速发展，数字图像生成已经高度自动化。虽然效率有所提高，但身体参与感和感官交互却在减少，使人们感到疏离，往往只能处于被动监督的状态。这种转变促使了绘画机器人的发展，它们重新引入了身体动作以及人机之间的共享控制。然而，大多数现有系统优先考虑单次输出的质量，而忽视了节奏、控制和交互等面向过程的方面。为了弥补这一差距，我们提出了 CoBrush，它将生成式 AI 与机械臂相结合，使人类画家 and AI 能够物理画布上进行交互。一项用户研究表明，CoBrush 通过预测和分解绘画过程，提高了用户的控制感；通过类人姿态 and 笔触表达，增强了创作参与感；并通过交互式、具身化的共同创作体验，提供了更高的艺术满意度。</p>
          <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a
              href={`${process.env.PUBLIC_URL}/work/2025/Cobrush/FinalReport.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              最终报告 (PDF)
            </a>
          </div>
        </>
      ),
      overviewExtra: '',
      role: '设计师 & 开发者',
      roleDesc: '在这个团队项目中，我参与了协同绘画系统的设计与开发，侧重交互设计与用户和机器人之间的多轮对话。',
      process: ['研究与概念', '交互设计', '原型制作', '机器人集成', '用户测试'],
      insights: ['人机协同创作', '创意 AI', '多轮交互'],
      results: '系统成功实现了人与机器人的共同绘画会话，为协同艺术与辅助创作提供了可能。'
    }
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
    featuredPhotos: 'Featured Photos',
    moreProjects: 'More Projects',
    prevProject: 'Previous project',
    nextProject: 'Next project',
    notFound: 'Project Not Found',
    notFoundDesc: 'Under construction.',
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
    featuredPhotos: '精选照片',
    moreProjects: '更多作品',
    prevProject: '上一个项目',
    nextProject: '下一个项目',
    notFound: '项目未找到',
    notFoundDesc: '正在建设中',
    loading: '加载中',
    loadingDesc: '项目内容正在准备中。'
  }
};

function WorkDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const work = workData[language]?.[parseInt(id, 10)] || workData.en[parseInt(id, 10)];
  const labels = sectionLabels[language] || sectionLabels.en;
  const [activeImage, setActiveImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const worksList = useMemo(() => getWorksListByYear(language), [language]);
  const otherProjects = useMemo(() => {
    const currentId = parseInt(id, 10);
    return worksList.filter((w) => w.id !== currentId);
  }, [language, id, worksList]);

  const workFromList = useMemo(() => {
    if (work) return null;
    return worksList.find((w) => w.id === parseInt(id, 10)) || null;
  }, [work, worksList, id]);

  const currentIndex = useMemo(() => worksList.findIndex((w) => w.id === parseInt(id, 10)), [worksList, id]);
  const prevProject = currentIndex > 0 ? worksList[currentIndex - 1] : null;
  const nextProject = currentIndex >= 0 && currentIndex < worksList.length - 1 ? worksList[currentIndex + 1] : null;

  const moreScrollRef = useRef(null);
  const ARROW_SCROLL = 600;

  const scrollBy = useCallback((delta) => {
    const el = moreScrollRef.current;
    if (!el) return;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, [id, language]);

  const moreSection = (
    <section className="work-detail-more work-detail-more-desktop" aria-label={labels.moreProjects}>
      <h2 className="work-detail-more-title">{labels.moreProjects}</h2>
      <div className="work-detail-more-row">
        <button type="button" className="work-detail-more-arrow work-detail-more-arrow-left" aria-label="Previous" onClick={() => scrollBy(-ARROW_SCROLL)} />
        <div className="work-detail-more-scroll-wrap">
          <div className="work-detail-more-scroll" ref={moreScrollRef}>
            <div className="work-detail-more-list">
              {otherProjects.map((w) => (
                <Link key={w.id} to={`/work/${w.id}`} className="work-detail-more-item">
                  <div className="work-detail-more-item-image-wrap">
                    <img src={w.image} alt={w.title} className="work-detail-more-item-image" />
                    <div className="work-detail-more-item-overlay" aria-hidden />
                    <div className="work-detail-more-item-caption">
                      <span className="work-detail-more-item-title">{w.title}</span>
                      <span className="work-detail-more-item-year">{w.year}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <button type="button" className="work-detail-more-arrow work-detail-more-arrow-right" aria-label="Next" onClick={() => scrollBy(ARROW_SCROLL)} />
      </div>
    </section>
  );

  const prevNextSection = (prevProject || nextProject) ? (
    <nav className="work-detail-prev-next" aria-label="Previous / Next project">
      <div className="work-detail-prev-next-inner">
        {prevProject ? (
          <Link to={`/work/${prevProject.id}`} className="work-detail-prev-next-link work-detail-prev-next-prev">
            ← {labels.prevProject}
          </Link>
        ) : (
          <span className="work-detail-prev-next-link work-detail-prev-next-prev work-detail-prev-next-placeholder" aria-hidden />
        )}
        {nextProject ? (
          <Link to={`/work/${nextProject.id}`} className="work-detail-prev-next-link work-detail-prev-next-next">
            {labels.nextProject} →
          </Link>
        ) : (
          <span className="work-detail-prev-next-link work-detail-prev-next-next work-detail-prev-next-placeholder" aria-hidden />
        )}
      </div>
    </nav>
  ) : null;

  if (!work) {
    const notFoundTitle = workFromList ? workFromList.title : labels.notFound;
    return (
      <>
        <div className="page-content work-detail-loading">
          <h1>{notFoundTitle}</h1>
          <p>{labels.notFoundDesc}</p>
          <Link to="/">{labels.back}</Link>
        </div>
        {moreSection}
        {prevNextSection}
      </>
    );
  }

  const bannerImages = work.images && work.images.length > 0 ? work.images : (work.heroImage ? [work.heroImage] : []);

  return (
    <>
      <div className={`page-content work-detail ${isVisible ? 'visible' : ''}`}>
        {bannerImages.length > 0 && (
          <div className={`work-detail-banner ${bannerImages.length === 1 ? 'is-single' : ''}`} aria-hidden>
            {bannerImages.map((src, i) => (
              <img key={i} src={src} alt="" />
            ))}
          </div>
        )}
        <header className="work-detail-header">
          <Link to="/" className="work-detail-back">{labels.back}</Link>
          <div className="work-meta">
            <span className="work-year">{work.year}</span>
            {work.category && (
              <CategoryIcons category={work.category} className="work-category-tags" />
            )}
          </div>
          <h1 className="work-detail-title">{work.title}</h1>
          <p className="work-description">{work.description}</p>
        </header>
        {(work.youtubeUrl && getYoutubeEmbedUrl(work.youtubeUrl)) ? (
          <div className="work-detail-video-wrap">
            <div className="work-detail-video">
              <iframe
                title={work.title}
                src={getYoutubeEmbedUrl(work.youtubeUrl)}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ) : (work.videoUrl && (
          <div className="work-detail-video-wrap">
            <div className="work-detail-video">
              <video
                src={work.videoUrl}
                controls
                style={{ width: '100%', height: '100%', display: 'block' }}
              />
            </div>
          </div>
        ))}
        <div className="work-content">
          <section className="work-section-block">
            {parseInt(id, 10) !== 8 && <h2>{labels.overview}</h2>}
            <div className="text-content">
              {typeof work.overview === 'string' ? <p>{work.overview}</p> : work.overview}
              {work.overviewExtra && <p>{work.overviewExtra}</p>}
            </div>
          </section>
          {work.role && (
            <section className="work-section-block">
              <h2>{labels.role}</h2>
              <div className="role-content">
                <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{work.role}</p>
                <p className="text-content">{work.roleDesc}</p>
              </div>
            </section>
          )}

          {work.insights && work.insights.length > 0 && (
            <section className="work-section-block">
              <h2>{labels.insights}</h2>
              <div className="insights-grid">
                {work.insights.map((item, idx) => (
                  <div key={idx} className="insight-card">{item}</div>
                ))}
              </div>
            </section>
          )}


        </div>
      </div>
      {moreSection}
      {prevNextSection}
    </>
  );
}

export default WorkDetail;
