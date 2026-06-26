const demoPapers = [
  {
    name: "現代日本語における敬語体系の変化.txt",
    type: "paper",
    language: "ja",
    text: "摘要：本稿は現代日本語の敬語体系、尊敬語、謙譲語、丁寧語の再編を対象とする。方法：大学生の会話データを分析し、敬語使用の社会言語学的変化と待遇表現の機能を論じる。結論：敬語体系は固定的な分類ではなく、場面と人間関係によって再編される。",
  },
  {
    name: "日本語教育とコミュニケーション研究.md",
    type: "book",
    language: "ja",
    text: "第一章 日本語教育の制度史：学校教育と教材の変遷を扱う。\n第二章 学習者の発話分析：誤用と訂正フィードバックを検討する。\n第三章 敬語指導と待遇表現：学習者が尊敬語、謙譲語、丁寧語をどのように習得するかを授業観察と作文資料から分析する。\n第四章 異文化コミュニケーション：ポライトネス理論と教室活動を扱う。",
  },
  {
    name: "平安文学に見る宮廷儀礼と語り.txt",
    type: "paper",
    language: "ja",
    text: "本稿は平安文学における宮廷儀礼、和歌、物語構造を中心に考察する。登場人物の発話には敬語が見られるが、本稿の主題は儀礼空間と叙述技法であり、敬語体系そのものの分析ではない。",
  },
  {
    name: "ビジネスメールのポライトネスと依頼表現.txt",
    type: "paper",
    language: "ja",
    text: "日本企業のビジネスメールを資料として、依頼表現、断り表現、敬語、ポライトネス・ストラテジーを分析する。職場における待遇表現の選択要因を示すため、依頼場面と上下関係を比較する。",
  },
  {
    name: "朝日新聞：接客現場で変わる敬語表現.txt",
    type: "news",
    language: "ja",
    text: "記事は小売店と飲食店の接客現場で使われる敬語表現の変化を報じる。専門研究ではないが、若年層スタッフの言い換え、過剰敬語、顧客との距離感について事例を示す。",
  },
  {
    name: "若者言葉とSNSコミュニケーション.txt",
    type: "paper",
    language: "ja",
    text: "若者言葉、SNS、絵文字、略語の機能を考察する。敬語の使用頻度にも触れるが、中心課題はオンライン上の親密性表現と新語の拡散である。",
  },
  {
    name: "扫描版会议报告_敬语教育案例.pdf",
    type: "image",
    language: "ja",
    text: "",
    ocrNote: "扫描型 PDF 会提交后端进行 OCR、全文读取和模型筛选。",
  },
];

const statusMap = {
  keep: { label: "核心可用", list: "keepList", count: "keepCount" },
  maybe: { label: "局部可用/模型分析", list: "maybeList", count: "maybeCount" },
  reject: { label: "不建议使用", list: "rejectList", count: "rejectCount" },
};

const INTERNAL_ANALYZE_ENDPOINT = "/api/analyze";
const MODEL_ENGINE_NAME = "DeepSeek";

const outputLanguages = [
  "中文",
  "桑戈语",
  "英语",
  "俄语",
  "德语",
  "法语",
  "西班牙语",
  "阿拉伯语",
  "日语",
  "波斯语",
  "朝鲜语",
  "菲律宾语",
  "梵语巴利语",
  "印度尼西亚语",
  "印地语",
  "柬埔寨语",
  "老挝语",
  "缅甸语",
  "马来语",
  "蒙古语",
  "僧伽罗语",
  "泰语",
  "乌尔都语",
  "希伯来语",
  "越南语",
  "豪萨语",
  "斯瓦希里语",
  "阿尔巴尼亚语",
  "保加利亚语",
  "波兰语",
  "捷克语",
  "斯洛伐克语",
  "罗马尼亚语",
  "葡萄牙语",
  "瑞典语",
  "塞尔维亚语",
  "土耳其语",
  "希腊语",
  "匈牙利语",
  "意大利语",
  "泰米尔语",
  "普什图语",
  "世界语",
  "孟加拉语",
  "尼泊尔语",
  "克罗地亚语",
  "荷兰语",
  "芬兰语",
  "乌克兰语",
  "挪威语",
  "丹麦语",
  "冰岛语",
  "爱尔兰语",
  "拉脱维亚语",
  "立陶宛语",
  "斯洛文尼亚语",
  "爱沙尼亚语",
  "马耳他语",
  "哈萨克语",
  "乌兹别克语",
  "祖鲁语",
  "拉丁语",
  "阿姆哈拉语",
  "吉尔吉斯语",
  "索马里语",
  "土库曼语",
  "加泰罗尼亚语",
  "约鲁巴语",
  "亚美尼亚语",
  "马达加斯加语",
  "格鲁吉亚语",
  "阿塞拜疆语",
  "阿非利卡语",
  "马其顿语",
  "塔吉克语",
  "茨瓦纳语",
  "恩德贝莱语",
  "科摩罗语",
  "克里奥尔语",
  "绍纳语",
  "提格雷尼亚语",
  "白俄罗斯语",
  "毛利语",
  "汤加语",
  "萨摩亚语",
  "库尔德语",
  "比斯拉马语",
  "达里语",
  "德顿语",
  "迪维希语",
  "斐济语",
  "库克群岛毛利语",
  "隆迪语",
  "卢森堡语",
  "卢旺达语",
  "纽埃语",
  "皮金语",
  "切瓦语",
  "塞苏陀语",
  "塔玛齐格特语",
  "爪哇语",
  "旁遮普语",
];

const state = {
  papers: [],
  results: [],
  selectedId: null,
  activeView: "screening",
  fileListExpanded: false,
  engineMode: "unknown",
  analysisError: "",
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const elements = {
  fileInput: $("#fileInput"),
  dropZone: $("#dropZone"),
  fileStack: $("#fileStack"),
  fileCount: $("#fileCount"),
  toggleFiles: $("#toggleFiles"),
  clearFiles: $("#clearFiles"),
  keywordInput: $("#keywordInput"),
  keywordMode: $("#keywordMode"),
  materialType: $("#materialType"),
  outputLanguage: $("#outputLanguage"),
  modelStatus: $("#modelStatus"),
  intentInput: $("#intentInput"),
  pasteInput: $("#pasteInput"),
  thresholdInput: $("#thresholdInput"),
  thresholdValue: $("#thresholdValue"),
  analyzeButton: $("#analyzeButton"),
  loadDemo: $("#loadDemo"),
  copyReport: $("#copyReport"),
  refreshExport: $("#refreshExport"),
  exportBox: $("#exportBox"),
  boardSummary: $("#boardSummary"),
  hitRate: $("#hitRate"),
  inspectorBody: $("#inspectorBody"),
};

function normalize(text) {
  return (text || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function splitTerms(text) {
  return normalize(text)
    .split(/[,\s，、;；/]+/)
    .map((term) => term.trim())
    .filter((term) => term.length > 1);
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function deriveTitle(name) {
  return name.replace(/\.(txt|md|csv|pdf|doc|docx|png|jpg|jpeg|webp|tif|tiff)$/i, "").replaceAll("_", " ");
}

function typeLabel(type) {
  return {
    paper: "论文/期刊",
    book: "专著/编著",
    news: "新闻/报纸",
    report: "报告",
    image: "图片/扫描件",
    snippet: "文字片段",
    mixed: "混合材料",
  }[type] || "材料";
}

function expandConceptTerms(rawTerms) {
  const conceptMap = [
    {
      keys: [
        "文学理论",
        "文學理論",
        "literary theory",
        "literary theories",
        "文艺理论",
        "文藝理論",
        "literary criticism",
        "critical theory",
        "narratology",
        "叙事学",
        "structuralism",
        "结构主义",
        "post-structuralism",
        "后结构主义",
        "deconstruction",
        "解构主义",
        "formalism",
        "形式主义",
        "feminism",
        "女性主义",
        "女权主义",
        "marxism",
        "马克思主义",
        "psychoanalysis",
        "精神分析",
        "postcolonial",
        "后殖民",
      ],
      terms: [
        "文学理论",
        "文艺理论",
        "文学批评",
        "literary theory",
        "literary criticism",
        "critical theory",
        "narratology",
        "structuralism",
        "post-structuralism",
        "deconstruction",
        "formalism",
        "new criticism",
        "feminism",
        "marxism",
        "psychoanalysis",
        "postcolonial",
        "reader-response",
        "reception aesthetics",
        "叙事学",
        "结构主义",
        "后结构主义",
        "解构主义",
        "形式主义",
        "新批评",
        "女性主义",
        "女权主义",
        "马克思主义",
        "精神分析",
        "后殖民",
        "接受美学",
      ],
    },
    {
      keys: ["敬语", "敬語", "keigo", "honorific", "honorifics"],
      terms: [
        "敬语",
        "敬語",
        "keigo",
        "honorific",
        "honorifics",
        "politeness",
        "待遇",
        "待遇表現",
        "尊敬語",
        "謙譲語",
        "丁寧語",
        "ポライトネス",
      ],
    },
  ];
  const normalized = rawTerms.map(normalize);
  const expanded = [...rawTerms];

  conceptMap.forEach((entry) => {
    if (entry.keys.some((key) => normalized.includes(normalize(key)))) {
      expanded.push(...entry.terms);
    }
  });

  return unique(expanded);
}

function outputLanguageName() {
  return elements.outputLanguage.value || "中文";
}

function populateOutputLanguages() {
  elements.outputLanguage.innerHTML = outputLanguages.map((language) => `<option value="${escapeHtml(language)}">${escapeHtml(language)}</option>`).join("");
  elements.outputLanguage.value = "中文";
}

function getActiveRules() {
  return $$(".rule-check")
    .filter((input) => input.checked)
    .map((input) => input.value);
}

function getRequirementModel() {
  const keywordTerms = splitTerms(elements.keywordInput.value);
  const intentTerms = splitTerms(elements.intentInput.value);
  const exactTerms = unique(keywordTerms);
  const conceptualTerms = expandConceptTerms([...keywordTerms, ...intentTerms]);
  const keywordMode = elements.keywordMode.value;
  const activeTopicTerms = keywordMode === "exact" ? exactTerms : conceptualTerms;

  return {
    keywordTerms,
    exactTerms,
    directTopicTerms: activeTopicTerms,
    intentSignals: unique([...intentTerms, ...activeTopicTerms]),
    keywordMode,
    activeRules: getActiveRules(),
    threshold: Number(elements.thresholdInput.value),
    materialType: elements.materialType.value,
    outputLanguage: outputLanguageName(),
  };
}

function splitSegments(paper) {
  if (!paper.text) {
    return [
      {
        label: "模型全文分析",
        text: paper.ocrNote || "该材料将由模型读取全文、抽取文字并生成内容概述。",
      },
    ];
  }

  const roughParts = paper.text
    .split(/(?=第[一二三四五六七八九十\d]+[章节節])|(?=chapter\s+\d+)|\n{2,}/i)
    .map((part) => part.trim())
    .filter(Boolean);

  if (roughParts.length <= 1) {
    return [{ label: "全文/摘要", text: paper.text.trim() }];
  }

  return roughParts.map((part, index) => {
    const firstLine = part.split(/[：:\n。]/)[0].trim();
    return {
      label: firstLine.length > 4 && firstLine.length < 36 ? firstLine : `片段 ${index + 1}`,
      text: part,
    };
  });
}

function detectLanguage(text, fallback) {
  if (/[ぁ-んァ-ン一-龯]/.test(text) && /[ぁ-んァ-ン]/.test(text)) return "日文";
  if (/[\u4e00-\u9fff]/.test(text)) return "中文";
  if (/[a-z]{4,}/i.test(text)) return "英文/拉丁字母";
  return fallback === "multi" ? "未判定" : fallback;
}

function ensurePastedMaterial() {
  const text = elements.pasteInput.value.trim();
  if (!text) return;
  const existing = state.papers.find((paper) => paper.id === "pasted-material");
  const paper = {
    id: "pasted-material",
    name: "用户粘贴材料片段",
    title: "用户粘贴材料片段",
    text,
    type: "snippet",
    language: "auto",
    source: "直接粘贴",
  };
  if (existing) Object.assign(existing, paper);
  else state.papers.unshift(paper);
}

async function analyze() {
  if (!state.papers.length && !elements.pasteInput.value.trim()) {
    toast("请先上传文献或粘贴材料");
    return;
  }

  ensurePastedMaterial();
  const model = getRequirementModel();
  state.analysisError = "";
  state.results = [];
  state.selectedId = null;
  elements.modelStatus.textContent = "分析中";
  elements.analyzeButton.disabled = true;

  try {
    const backendResult = await analyzeWithDeepSeekBackend(model);
    state.results = backendResult.results;
    state.engineMode = backendResult.engineMode;
    elements.modelStatus.textContent = "已完成";
  } catch (error) {
    console.warn(error);
    state.engineMode = "error";
    state.analysisError = error.message || "后端分析失败，请检查 DeepSeek Key 和部署日志。";
    state.results = [];
    elements.modelStatus.textContent = "未完成";
    toast("分析失败，请检查服务配置");
  } finally {
    elements.analyzeButton.disabled = false;
  }

  state.selectedId = state.results[0]?.id || null;
  renderFiles();
  renderResults();
  renderInspector();
  renderExport();
}

async function analyzeWithDeepSeekBackend(model) {
  const form = new FormData();
  form.append(
    "request",
    JSON.stringify({
      keyword: elements.keywordInput.value,
      keywordMode: model.keywordMode,
      outputLanguage: model.outputLanguage,
      materialType: model.materialType,
      intent: elements.intentInput.value,
      rules: model.activeRules,
      threshold: model.threshold,
      modelPreference: MODEL_ENGINE_NAME,
      instructions:
        "Read every uploaded file completely. For PDFs/images, extract text internally. Translate concepts across languages automatically. Return only final user-facing literature evaluation in the requested output language; do not expose technical extraction states.",
    }),
  );

  state.papers.forEach((paper, index) => {
    const meta = {
      id: paper.id,
      title: paper.title,
      type: paper.type,
      source: paper.source,
      pastedText: paper.id === "pasted-material" ? paper.text : "",
    };
    form.append(`metadata_${index}`, JSON.stringify(meta));
    if (paper.file) form.append("files", paper.file, paper.name);
  });

  const response = await fetch(INTERNAL_ANALYZE_ENDPOINT, { method: "POST", body: form });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || `后端返回 ${response.status}`);
  const results = Array.isArray(payload.results) ? payload.results : [];
  if (!results.length) throw new Error("DeepSeek backend returned no results");

  return {
    engineMode: payload.engineMode || "deepseek",
    results: results.map(normalizeProxyResult).sort((a, b) => b.score - a.score),
  };
}

function normalizeProxyResult(result, index) {
  const sourcePaper = state.papers.find((paper) => paper.id === result.id) || state.papers[index] || {};
  const status = ["keep", "maybe", "reject"].includes(result.status) ? result.status : "maybe";
  return {
    ...sourcePaper,
    id: result.id || sourcePaper.id || `model-${index}`,
    title: result.title || sourcePaper.title || `材料 ${index + 1}`,
    score: Number(result.score) || 60,
    status,
    tags: Array.isArray(result.tags) && result.tags.length ? result.tags : [typeLabel(sourcePaper.type)],
    segments: Array.isArray(result.segments) && result.segments.length ? result.segments : [{ label: "全文判断", score: Number(result.score) || 60, text: "" }],
    bestSegment: result.bestSegment || { label: "全文判断", score: Number(result.score) || 60 },
    contentSummary: result.contentSummary || result.summary || "该材料已由后端完成读取和相关性判断。",
    usableScope: result.usableScope || "后端已返回整体可用性判断，具体引用范围需结合原文页码复核。",
    selectionReason: result.selectionReason || result.reason || "该判断来自后端模型对材料正文和用户筛选要求的综合分析。",
    limitations: result.limitations || "使用前仍需核对出版信息、页码和引用格式。",
    reason: result.reason || result.selectionReason || "模型返回了筛选判断。",
  };
}

function renderFiles() {
  elements.fileCount.textContent = `${state.papers.length} 条`;
  elements.toggleFiles.textContent = state.fileListExpanded ? "收起列表" : "展开全部";

  if (!state.papers.length) {
    elements.fileStack.innerHTML = `<div class="empty-state">还没有加入材料。</div>`;
    return;
  }

  const visiblePapers = state.fileListExpanded ? state.papers : state.papers.slice(0, 7);
  elements.fileStack.innerHTML = visiblePapers
    .map(
      (paper) => `
        <div class="file-chip" data-id="${paper.id}">
          <span title="${escapeHtml(paper.name)}">${escapeHtml(paper.name)}</span>
          <small>${escapeHtml(paper.source || typeLabel(paper.type))}</small>
          <button class="remove-file" type="button" aria-label="删除 ${escapeHtml(paper.name)}" title="删除">×</button>
        </div>
      `,
    )
    .join("");

  if (!state.fileListExpanded && state.papers.length > 7) {
    elements.fileStack.insertAdjacentHTML("beforeend", `<div class="file-chip is-more"><span>还有 ${state.papers.length - 7} 条未显示</span><small>点“展开全部”查看</small></div>`);
  }

  $$(".remove-file").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      removePaper(button.closest(".file-chip").dataset.id);
    });
  });
}

function removePaper(id) {
  state.papers = state.papers.filter((paper) => paper.id !== id);
  state.results = state.results.filter((paper) => paper.id !== id);
  if (state.selectedId === id) state.selectedId = state.results[0]?.id || null;
  renderFiles();
  renderResults();
  renderInspector();
  renderExport();
  toast("已删除该材料");
}

function clearPapers() {
  state.papers = [];
  state.results = [];
  state.selectedId = null;
  state.fileListExpanded = false;
  state.analysisError = "";
  renderFiles();
  renderResults();
  renderInspector();
  renderExport();
  toast("材料列表已清空");
}

function emptyColumnText(status) {
  if (status === "keep") return "整篇或主体章节都能支撑论文主题的材料会出现在这里。";
  if (status === "maybe") return "只有某章、某节、某段可用，或证据边界需要限定的材料会放在这里。";
  return "仅背景提及、主题偏离或证据不足的材料会放在这里。";
}

function renderResults() {
  const grouped = { keep: [], maybe: [], reject: [] };
  state.results.forEach((paper) => grouped[paper.status].push(paper));

  Object.entries(statusMap).forEach(([status, config]) => {
    const list = $(`#${config.list}`);
    const count = $(`#${config.count}`);
    count.textContent = grouped[status].length;

    if (!grouped[status].length) {
      list.innerHTML = `<div class="empty-state">${state.analysisError ? escapeHtml(state.analysisError) : emptyColumnText(status)}</div>`;
      return;
    }

    list.innerHTML = grouped[status].map(renderPaperCard).join("");
  });

  $$(".paper-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedId = card.dataset.id;
      renderResults();
      renderInspector();
    });
  });

  const usable = grouped.keep.length + grouped.maybe.length;
  elements.hitRate.textContent = state.results.length ? `${usable}/${state.results.length}` : "--";
  elements.boardSummary.textContent = state.analysisError
    ? `未生成筛选结论：${state.analysisError}`
    : state.results.length
    ? `已筛选 ${state.results.length} 条材料：核心可用 ${grouped.keep.length}，局部可用 ${grouped.maybe.length}，不建议使用 ${grouped.reject.length}。当前阈值为 ${elements.thresholdInput.value}，阈值越高越严格。`
    : "载入示例或上传材料后，系统会定位整篇、章节或段落层面的可用性，并给出学术化理由。";
}

function extractionLabel(paper) {
  if (paper.text) return `${paper.text.length} 字符线索`;
  if (paper.file) return "后端全文解析";
  return "文本材料";
}

function renderPaperCard(paper) {
  return `
    <article class="paper-card ${paper.id === state.selectedId ? "is-selected" : ""}" data-id="${paper.id}" tabindex="0">
      <div class="paper-topline">
        <h2 class="paper-title">${escapeHtml(paper.title)}</h2>
        <span class="score-pill">${paper.score}</span>
      </div>
      <p class="paper-meta">${escapeHtml(typeLabel(paper.type))} · 原文${escapeHtml(detectLanguage(`${paper.title} ${paper.text}`, paper.language))} · 输出${escapeHtml(outputLanguageName())} · ${escapeHtml(extractionLabel(paper))}</p>
      <div class="score-track" aria-hidden="true"><div class="score-fill" style="--score:${paper.score}%"></div></div>
      <p class="paper-section">${escapeHtml(paper.usableScope)}</p>
      <p class="reason">${escapeHtml(paper.reason)}</p>
      <div class="tags">${paper.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
    </article>
  `;
}

function renderInspector() {
  const paper = state.results.find((item) => item.id === state.selectedId);

  if (!paper) {
    elements.inspectorBody.className = "inspector-body empty";
    elements.inspectorBody.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h10" /></svg>
      <p>点击任意材料查看内容概述、可用范围和选用依据。</p>
    `;
    return;
  }

  elements.inspectorBody.className = "inspector-body";
  elements.inspectorBody.innerHTML = `
    <h2>${escapeHtml(paper.title)}</h2>
    <div class="verdict ${paper.status}">
      <span>${statusMap[paper.status].label}</span>
      <strong>${paper.score}/100</strong>
    </div>
    <div class="explain-block">
      <h3>内容概述</h3>
      <p>${escapeHtml(paper.contentSummary)}</p>
    </div>
    <div class="explain-block">
      <h3>可用范围</h3>
      <p>${escapeHtml(paper.usableScope)}</p>
    </div>
    <div class="explain-block">
      <h3>选用或不选用原因</h3>
      <p>${escapeHtml(paper.selectionReason)}</p>
    </div>
    <div class="explain-block">
      <h3>使用限制</h3>
      <p>${escapeHtml(paper.limitations)}</p>
    </div>
    <div class="explain-block">
      <h3>片段评分</h3>
      <ul>${paper.segments
        .slice()
        .sort((a, b) => b.score - a.score)
        .slice(0, 4)
        .map((segment) => `<li>${escapeHtml(segment.label)}：${segment.score}/100</li>`)
        .join("")}</ul>
    </div>
  `;
}

async function readFiles(files) {
  const loaded = await Promise.all(
    Array.from(files).map(async (file, index) => {
      const extension = file.name.split(".").pop()?.toLowerCase();
      const canReadText = ["txt", "md", "csv"].includes(extension);
      const imageLike = ["png", "jpg", "jpeg", "webp", "tif", "tiff"].includes(extension);
      const officeLike = ["pdf", "doc", "docx"].includes(extension);
      let text = "";

      if (canReadText) {
        text = await file.text();
      }

      const inferredType = imageLike ? "image" : elements.materialType.value === "mixed" ? (officeLike ? "mixed" : "paper") : elements.materialType.value;
      return {
        id: `file-${Date.now()}-${index}-${Math.random().toString(16).slice(2)}`,
        file,
        name: file.name,
        title: deriveTitle(file.name),
        text,
        type: inferredType,
        language: "auto",
        source: canReadText ? extension.toUpperCase() : imageLike || officeLike ? "后端解析" : "后端解析",
        ocrNote: imageLike || officeLike ? "该材料会提交后端进行正文抽取、OCR 和模型分析。" : "",
      };
    }),
  );

  state.papers = [...state.papers, ...loaded];
  renderFiles();
  toast(`已加入 ${loaded.length} 条材料`);
}

function loadDemo() {
  state.papers = demoPapers.map((paper, index) => ({
    id: `demo-${index}`,
    name: paper.name,
    title: deriveTitle(paper.name),
    text: paper.text,
    type: paper.type,
    language: paper.language,
    source: typeLabel(paper.type),
    ocrNote: paper.ocrNote || "",
  }));
  state.results = [];
  state.selectedId = null;
  renderFiles();
  renderResults();
  renderInspector();
  renderExport();
}

function makeReport() {
  if (!state.results.length) return "";
  const header = `输出语言：${outputLanguageName()}
关键词匹配方式：${elements.keywordMode.options[elements.keywordMode.selectedIndex].text}
说明：以下结果由后端模型依据用户筛选要求、材料正文和可识别片段生成。
`;

  const body = state.results
    .map((paper, index) => {
      return `${index + 1}. ${paper.title}
判断：${statusMap[paper.status].label}（${paper.score}/100）
材料类型：${typeLabel(paper.type)}
内容概述：${paper.contentSummary}
可用范围：${paper.usableScope}
选用/不选用原因：${paper.selectionReason}
使用限制：${paper.limitations}`;
    })
    .join("\n\n");
  return `${header}\n${body}`;
}

function renderExport() {
  if (!elements.exportBox) return;
  elements.exportBox.value = makeReport();
}

function copyReport() {
  const report = makeReport();
  if (!report) {
    toast("还没有筛选报告");
    return;
  }

  navigator.clipboard
    .writeText(report)
    .then(() => toast("筛选报告已复制"))
    .catch(() => toast("复制失败，可在导出页手动复制"));
}

function switchView(view) {
  state.activeView = view;
  $$(".nav-item").forEach((button) => button.classList.toggle("is-active", button.dataset.view === view));
  $$(".view-screen").forEach((screen) => screen.classList.toggle("is-active", screen.id === `${view}View`));
  if (view === "export") renderExport();
}

function toast(message) {
  const existing = $(".toast");
  existing?.remove();

  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  document.body.appendChild(node);

  window.requestAnimationFrame(() => node.classList.add("is-visible"));
  window.setTimeout(() => node.classList.remove("is-visible"), 1800);
  window.setTimeout(() => node.remove(), 2200);
}

elements.thresholdInput.addEventListener("input", () => {
  elements.thresholdValue.textContent = elements.thresholdInput.value;
});

elements.fileInput.addEventListener("change", (event) => {
  readFiles(event.target.files);
  event.target.value = "";
});

["dragenter", "dragover"].forEach((eventName) => {
  elements.dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    elements.dropZone.classList.add("is-dragging");
  });
});

["dragleave", "drop"].forEach((eventName) => {
  elements.dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    elements.dropZone.classList.remove("is-dragging");
  });
});

elements.dropZone.addEventListener("drop", (event) => {
  readFiles(event.dataTransfer.files);
});

elements.analyzeButton.addEventListener("click", analyze);
elements.loadDemo.addEventListener("click", () => {
  loadDemo();
  analyze();
});
elements.copyReport.addEventListener("click", copyReport);
elements.toggleFiles.addEventListener("click", () => {
  state.fileListExpanded = !state.fileListExpanded;
  renderFiles();
});
elements.clearFiles.addEventListener("click", clearPapers);
elements.refreshExport.addEventListener("click", () => {
  renderExport();
  toast("导出文本已生成");
});
$$(".nav-item").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

populateOutputLanguages();
renderFiles();
renderResults();
renderInspector();
renderExport();
