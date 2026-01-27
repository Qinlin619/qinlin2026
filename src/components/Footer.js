import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const footerText = {
  en: {
    copyright: `© ${new Date().getFullYear()} Qinlin Liu. All rights reserved.`
  },
  zh: {
    copyright: `© ${new Date().getFullYear()} Qinlin Liu. 保留所有权利。`
  },
  'zh-TW': {
    copyright: `© ${new Date().getFullYear()} Qinlin Liu. 保留所有權利。`
  }
};

function Footer() {
  const { language } = useLanguage();
  const texts = footerText[language] || footerText.en;
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
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-social">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="footer-social-link"
            target={link.name === 'email' || link.name === 'whatsapp' ? '_self' : '_blank'}
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
      <p>{texts.copyright}</p>
    </footer>
  );
}

export default Footer;
