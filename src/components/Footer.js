import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { loadLikes, addLike } from '../data/likesStorage';

const footerText = {
  en: {
    copyright: `© ${new Date().getFullYear()} Qinlin Liu. All rights reserved.`,
    likeQuestion: 'Do you like Umbrella\'s website?',
    likeToast: 'Umbrella has received your like ♡',
    likeFormTitle: 'Leave a like',
    nicknamePlaceholder: 'What should I call you?',
    confirmBtn: 'Confirm',
    alreadyLikedTitle: 'You\'ve already liked! Want to add more?',
    addMoreCountPlaceholder: 'How many more? (number)',
    addMoreCountLabel: 'Add how many likes?',
  },
  zh: {
    copyright: `© ${new Date().getFullYear()} Qinlin Liu. 保留所有权利。`,
    likeQuestion: '你喜欢伞伞的网站吗？',
    likeToast: '伞伞已经收到你的喜欢 ♡',
    likeFormTitle: '留下你的喜欢',
    nicknamePlaceholder: '我该怎么称呼你',
    confirmBtn: '确认',
    alreadyLikedTitle: '你已经点过赞了哦，还要点赞吗？',
    addMoreCountPlaceholder: '加几次（填数字）',
    addMoreCountLabel: '再加几次点赞？',
  },
  'zh-TW': {
    copyright: `© ${new Date().getFullYear()} Qinlin Liu. 保留所有權利。`,
    likeQuestion: '你喜歡傘傘的網站嗎？',
    likeToast: '傘傘已經收到你的喜歡 ♡',
    likeFormTitle: '留下你的喜歡',
    nicknamePlaceholder: '我該怎麼稱呼你',
    confirmBtn: '確認',
    alreadyLikedTitle: '你已經點過讚了哦，還要點讚嗎？',
    addMoreCountPlaceholder: '加幾次（填數字）',
    addMoreCountLabel: '再加幾次點讚？',
  }
};

function Footer() {
  const { language } = useLanguage();
  const texts = footerText[language] || footerText.en;
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [copyToastMessage, setCopyToastMessage] = useState('');
  const [likeFormOpen, setLikeFormOpen] = useState(false);
  const [likeFormMode, setLikeFormMode] = useState('first'); // 'first' | 'addMore'
  const [nicknameInput, setNicknameInput] = useState('');
  const [addMoreCount, setAddMoreCount] = useState('1');
  const [showLikeToast, setShowLikeToast] = useState(false);
  const [likes, setLikes] = useState([]);
  const [heartDisabled, setHeartDisabled] = useState(false);

  useEffect(() => {
    setLikes(loadLikes());
  }, []);

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
      : language === 'zh-TW' 
      ? `已複製郵件地址 ${email}` 
      : `Email address copied ${email}`;
    copyToClipboard(email, message);
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const phone = '+31 617785667';
    const message = language === 'zh' 
      ? `已复制电话号码 ${phone}` 
      : language === 'zh-TW' 
      ? `已複製電話號碼 ${phone}` 
      : `Phone number copied ${phone}`;
    copyToClipboard(phone, message);
  };

  const handleWeChatClick = (e) => {
    e.preventDefault();
    const wechatId = 'ss1172503100';
    const message = language === 'zh' 
      ? `已复制微信号 ${wechatId}` 
      : language === 'zh-TW' 
      ? `已複製微信號 ${wechatId}` 
      : `WeChat ID copied ${wechatId}`;
    copyToClipboard(wechatId, message);
  };

  const openLikeForm = () => {
    if (heartDisabled) return;
    setNicknameInput('');
    setAddMoreCount('1');
    setLikeFormMode(likes.length > 0 ? 'addMore' : 'first');
    setLikeFormOpen(true);
  };

  const submitLike = () => {
    const name = nicknameInput.trim();
    if (!name) return;
    if (likeFormMode === 'addMore') {
      const n = Math.max(1, parseInt(addMoreCount, 10) || 1);
      addLike(name, n);
    } else {
      addLike(name, 1);
    }
    setLikes(loadLikes());
    setLikeFormOpen(false);
    setShowLikeToast(true);
    setTimeout(() => setShowLikeToast(false), 2500);
    setHeartDisabled(true);
  };

  // 社交媒体链接
  const socialLinks = [
    { 
      name: 'email', 
      url: 'mailto:qinlinliu619@gmail.com',
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
      onClick: handleEmailClick
    },
    { 
      name: 'instagram', 
      url: 'https://www.instagram.com/umbrella__619?igsh=MXZrZm0ydWE2dHM5YQ%3D%3D&utm_source=qr',
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    },
    { 
      name: 'whatsapp', 
      url: 'https://wa.me/31617785667',
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
      onClick: handleWhatsAppClick
    },
    { 
      name: 'linkedin', 
      url: 'https://www.linkedin.com/in/qinlin-liu-a88635209/',
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><text x="12" y="18" textAnchor="middle" fontSize="23" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" fontWeight="700" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">in</text></svg>
    },
    { 
      name: 'github', 
      url: 'https://github.com/Qinlin619',
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    },
    { 
      name: 'wechat', 
      url: '#',
      svg: <svg width="20" height="20" viewBox="0 0 26 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" transform="scale(1.15, 1) translate(-0.5, 0)"></path><circle cx="9" cy="11.5" r="1"></circle><circle cx="13.5" cy="11.5" r="1"></circle><circle cx="18" cy="11.5" r="1"></circle></svg>,
      onClick: handleWeChatClick
    }
  ];

  const likeIcon = (size = 36) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );

  const addMoreNum = Math.max(1, parseInt(addMoreCount, 10) || 0);
  const canSubmit = !!nicknameInput.trim() && (likeFormMode !== 'addMore' || addMoreNum >= 1);
  const hasLiked = likes.length > 0;

  return (
    <footer className="footer">
      <div className="footer-like-row">
        {!hasLiked && <p className="footer-like-question">{texts.likeQuestion}</p>}
        <div className={`footer-like-heart-wrap${heartDisabled ? ' footer-like-heart-firework' : ''}`}>
          {heartDisabled && (
            <div className="footer-like-fireworks" aria-hidden>
              {[...Array(12)].map((_, i) => (
                <span key={i} className="footer-like-firework-dot" style={{ '--i': i }} />
              ))}
            </div>
          )}
          <button
            type="button"
            className={`footer-like-btn footer-like-btn-big${hasLiked || heartDisabled ? ' footer-like-btn-liked' : ''}${heartDisabled ? ' footer-like-btn-disabled' : ''}`}
            aria-label="like"
            aria-disabled={heartDisabled}
            onClick={openLikeForm}
          >
            {likeIcon(40)}
          </button>
        </div>
      </div>
      <div className="footer-social">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="footer-social-link"
            target={link.name === 'email' || link.name === 'whatsapp' || link.name === 'wechat' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            aria-label={link.name}
            onClick={link.onClick}
          >
            {link.svg}
          </a>
        ))}
      </div>
      {showCopyToast && (
        <div className="copy-toast">
          {copyToastMessage}
        </div>
      )}
      {likeFormOpen && (
        <div className="like-form-backdrop" onClick={() => setLikeFormOpen(false)} role="dialog" aria-modal="true" aria-labelledby="like-form-title">
          <div className="like-form-modal" onClick={(e) => e.stopPropagation()}>
            <h3 id="like-form-title" className="like-form-title">
              {likeFormMode === 'addMore' ? texts.alreadyLikedTitle : texts.likeFormTitle}
            </h3>
            <input
              type="text"
              className="like-form-input"
              placeholder={texts.nicknamePlaceholder}
              value={nicknameInput}
              onChange={(e) => setNicknameInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && canSubmit && submitLike()}
              maxLength={32}
              autoFocus
            />
            {likeFormMode === 'addMore' && (
              <div className="like-form-row">
                <label className="like-form-label">{texts.addMoreCountLabel}</label>
                <input
                  type="number"
                  min={1}
                  max={999}
                  className="like-form-input like-form-input-num"
                  placeholder={texts.addMoreCountPlaceholder}
                  value={addMoreCount}
                  onChange={(e) => setAddMoreCount(e.target.value)}
                />
              </div>
            )}
            <button type="button" className="like-form-submit" disabled={!canSubmit} onClick={submitLike}>
              {texts.confirmBtn}
            </button>
          </div>
        </div>
      )}
      {showLikeToast && (
        <div className="like-popup" role="status" aria-live="polite">
          <p className="like-popup-text">{texts.likeToast}</p>
        </div>
      )}
      <p>{texts.copyright}</p>
    </footer>
  );
}

export default Footer;
