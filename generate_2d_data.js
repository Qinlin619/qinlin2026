const fs = require('fs');
const path = require('path');

const publicSideDir = path.join(__dirname, 'public', 'side', '2d design');

function getImagesFromDir(subPath) {
    const fullPath = path.join(publicSideDir, subPath);
    if (!fs.existsSync(fullPath)) return [];
    const files = fs.readdirSync(fullPath)
        .filter(file => /\.(png|jpe?g|gif)$/i.test(file));
        
    files.sort((a, b) => {
        const aIsGif = a.toLowerCase().endsWith('.gif');
        const bIsGif = b.toLowerCase().endsWith('.gif');
        if (aIsGif && !bIsGif) return -1;
        if (!aIsGif && bIsGif) return 1;
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });

    return files.map(file => ({
        type: 'image',
        url: `/side/2d design/${subPath}/${file}`.replace(/\\/g, '/'),
        title: file
    }));
}

const euroStayAnimated = getImagesFromDir('EuroStay/欧壳壳动图表情包设计');
const euroStayStatic = getImagesFromDir('EuroStay/欧壳壳静态表情包设计');

const illustrationDir = getImagesFromDir('画画排版');
const brandDerivatives = getImagesFromDir('品牌衍生设计');

const snake1 = getImagesFromDir('表情包设计/1小小贪吃蛇');
const snake2 = getImagesFromDir('表情包设计/2小小贪吃蛇');
const snake3 = getImagesFromDir('表情包设计/3小小贪吃蛇');
const rabbit = getImagesFromDir('表情包设计/4凹凹凸凸-两只兔子');

const fileContent = `
export const designModalsData = {
  264: {
    en: {
      title: 'EuroStay IP Character Design (28)',
      description: 'EuroStay community mascot stickers (Animated & Static).',
      images: ${JSON.stringify([...euroStayAnimated, ...euroStayStatic], null, 2)}
    },
    zh: {
      title: 'EuroStay IP形象设计 (28)',
      description: '为欧壳壳设计的动图与静态表情包。',
      images: ${JSON.stringify([...euroStayAnimated, ...euroStayStatic], null, 2)}
    }
  },
  265: {
    en: {
      title: 'IP Character Design (63)',
      description: 'A collection of various fun and cute IP character sticker packs.',
      images: ${JSON.stringify([...snake1, ...snake2, ...snake3, ...rabbit], null, 2)}
    },
    zh: {
      title: 'IP形象设计 (63)',
      description: '包含两只兔子、贪吃蛇等多个IP形象设计系列。',
      images: ${JSON.stringify([...snake1, ...snake2, ...snake3, ...rabbit], null, 2)}
    }
  },
  266: {
    en: {
      title: 'Illustrations',
      description: 'Various illustration and layout designs.',
      images: ${JSON.stringify(illustrationDir, null, 2)}
    },
    zh: {
      title: 'Illustrations',
      description: '一系列插画作品。',
      images: ${JSON.stringify(illustrationDir, null, 2)}
    }
  },
  267: {
    en: {
      title: 'Brand Derivatives',
      description: 'Brand derivative designs and illustrations.',
      images: ${JSON.stringify(brandDerivatives, null, 2)}
    },
    zh: {
      title: '品牌衍生设计',
      description: '品牌衍生设计与相关插画。',
      images: ${JSON.stringify(brandDerivatives, null, 2)}
    }
  }
};
`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'designModalsData.js'), fileContent.trim());
console.log('Data generated successfully.');
