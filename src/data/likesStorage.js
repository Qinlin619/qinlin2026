/**
 * 点赞记录表：谁在什么时候点赞、点了多少次
 * 存于浏览器 localStorage，key: umbrella_likes
 * 每条: { nickname, timestamp, count }（count 默认为 1，旧数据兼容）
 *
 * 如何查看里面的数据：
 * 1. 在浏览器打开你的网站
 * 2. 按 F12 打开开发者工具
 * 3. 切到 Application（应用）→ Storage → Local Storage → 选你的站点地址
 * 4. 找到 key：umbrella_likes，点开即可看到 JSON 数据（可复制）
 * 或在 Console 里输入：JSON.parse(localStorage.getItem('umbrella_likes'))
 */
const LIKES_KEY = 'umbrella_likes';

export function loadLikes() {
  try {
    const raw = localStorage.getItem(LIKES_KEY);
    if (!raw) return [];
    const list = JSON.parse(raw);
    if (!Array.isArray(list)) return [];
    return list.map((entry) => ({
      ...entry,
      count: entry.count == null || entry.count < 1 ? 1 : Math.floor(Number(entry.count)),
    }));
  } catch {
    return [];
  }
}

export function saveLikes(likes) {
  try {
    localStorage.setItem(LIKES_KEY, JSON.stringify(likes));
  } catch (e) {
    console.warn('likes save failed', e);
  }
}

/**
 * 添加一条点赞记录
 * @param {string} nickname - 昵称
 * @param {number} [count=1] - 点赞次数（追加时可为大于 1 的数）
 */
export function addLike(nickname, count = 1) {
  const likes = loadLikes();
  const n = Math.max(1, Math.floor(Number(count)) || 1);
  const entry = {
    nickname: String(nickname).trim(),
    timestamp: Date.now(),
    count: n,
  };
  likes.push(entry);
  saveLikes(likes);
  return likes;
}
