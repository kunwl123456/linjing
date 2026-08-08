export type SymptomItem = { label: string; text: string };

export type Snake = {
  id: string;
  name: string;
  latin: string;
  family: string;
  risk: "高危" | "较高" | "需警惕" | "无毒";
  toxicity: "有毒" | "后沟牙有毒" | "无毒";
  venomClass: "neuro" | "hemo" | "mixed" | "myo" | "rear" | "none";
  venomType: string;
  toxinSystem: string;
  tag: string;
  accent: string;
  provinces: string[];
  note: string;
  symptoms: SymptomItem[];
  medicalNote: string;
};

export type SnakeAppearance = {
  appearance: string;
  distinguishing: string;
  lookalikes: string;
};

const neuroSymptoms: SymptomItem[] = [
  { label: "伤口早期", text: "局部疼痛和肿胀可能很轻，甚至只有麻木或蚁行感；不能因为伤口不痛就认为没有中毒。" },
  { label: "神经表现", text: "可逐渐出现眼睑下垂、复视、视物模糊、声音嘶哑、流涎，以及说话和吞咽困难。" },
  { label: "严重表现", text: "全身肌无力可向呼吸肌麻痹发展，表现为呼吸浅弱、缺氧甚至呼吸停止，但意识可能仍然清楚。" },
];

const hemoSymptoms: SymptomItem[] = [
  { label: "局部损伤", text: "伤口常明显疼痛、进行性肿胀，可出现瘀斑、血疱、水疱、持续渗血和局部组织坏死。" },
  { label: "凝血异常", text: "可能出现牙龈或鼻腔出血、皮肤紫癜、血尿、呕血或便血，实验室可见凝血功能紊乱。" },
  { label: "严重表现", text: "大量失血、溶血或毒素损伤可导致低血压、休克、急性肾损伤、少尿或无尿及多器官功能障碍。" },
];

const cobraSymptoms: SymptomItem[] = [
  { label: "局部损伤", text: "伤处可迅速出现灼痛、红肿、水疱或血疱；细胞毒作用可能造成皮肤、皮下和肌肉组织坏死。" },
  { label: "神经表现", text: "部分患者出现眼睑下垂、复视、说话含糊、吞咽困难和进行性肌无力。" },
  { label: "严重表现", text: "可发生呼吸肌麻痹、循环不稳定、广泛组织坏死和继发感染；伤口严重时可能遗留功能障碍。" },
];

const seaSymptoms: SymptomItem[] = [
  { label: "伤口早期", text: "牙痕细小，局部疼痛和肿胀往往不明显，早期容易被忽视。" },
  { label: "肌肉损伤", text: "数小时内可出现全身肌痛、僵硬、无力、触痛，肌红蛋白尿会使尿液呈茶色或深褐色。" },
  { label: "严重表现", text: "横纹肌溶解可引起高钾血症、心律失常和急性肾损伤；兼有神经毒作用时可出现呼吸无力。" },
];

const rearSymptoms: SymptomItem[] = [
  { label: "伤口表现", text: "可有疼痛、肿胀和持续渗血；后沟牙位置较靠后，长时间咬合可能增加毒液注入。" },
  { label: "凝血异常", text: "可能出现延迟性凝血障碍、皮下瘀斑、牙龈出血、鼻出血、血尿或其他异常出血。" },
  { label: "严重表现", text: "少数严重中毒可发生广泛出血、贫血、低血压或急性肾损伤，需要医院连续监测凝血指标。" },
];

const mildRearSymptoms: SymptomItem[] = [
  { label: "伤口表现", text: "多数咬伤以牙痕、局部疼痛、轻度肿胀或麻木为主；后沟牙位于口腔后方，持续咬合可能增加分泌物进入伤口的机会。" },
  { label: "可能反应", text: "少数人可能出现较明显的局部肿胀、瘀斑、恶心或过敏样反应，但这些蛇目前没有典型的严重全身中毒综合征。" },
  { label: "处理原则", text: "仍应清洗伤口并观察；若肿胀持续扩大、疼痛加重、出现全身不适或蛇种不能确认，应携带远距离照片尽快就医。" },
];

const nonVenomSymptoms: SymptomItem[] = [
  { label: "毒性判断", text: "没有用于向人注入蛇毒的毒牙系统，通常不会产生蛇毒导致的神经、凝血或肌肉中毒综合征。" },
  { label: "咬伤表现", text: "仍可能造成多排浅牙痕、局部疼痛、出血、肿胀或软组织损伤，大型个体咬合可造成较深创口。" },
  { label: "仍需处理", text: "应用流动清水清洁伤口；若伤口较深、持续出血、红肿加重或破伤风免疫不明确，应及时就医。" },
];

export const snakes: Snake[] = [
  {
    id: "deinagkistrodon", name: "尖吻蝮", latin: "Deinagkistrodon acutus", family: "蝰科", risk: "高危", toxicity: "有毒", venomClass: "hemo",
    venomType: "血液毒、凝血毒与细胞毒", toxinSystem: "主要损害凝血系统、血管内皮和局部组织",
    tag: "五步蛇", accent: "#d96545", provinces: ["安徽", "浙江", "江西", "福建", "湖北", "湖南", "广东", "广西", "重庆", "四川", "贵州"],
    note: "多见于丘陵、山地林缘与溪沟附近。民间名称不能用来判断毒性强弱或可行走距离。", symptoms: hemoSymptoms,
    medicalNote: "常见显著肿胀、出血和组织损伤，严重程度与注毒量及救治时间有关。",
  },
  {
    id: "gloydius", name: "短尾蝮", latin: "Gloydius brevicaudus", family: "蝰科", risk: "较高", toxicity: "有毒", venomClass: "hemo",
    venomType: "血液毒与细胞毒为主", toxinSystem: "影响凝血、微循环并造成局部组织损伤",
    tag: "分布较广", accent: "#9d6b49", provinces: ["北京", "天津", "河北", "辽宁", "山东", "河南", "江苏", "安徽", "浙江", "江西", "湖北", "湖南", "陕西", "甘肃"],
    note: "平原、丘陵与农田周边均可能出现，是我国多地较常见的蝮蛇类。", symptoms: hemoSymptoms,
    medicalNote: "局部肿痛较常见，也可能发生凝血异常、循环不稳和肾损伤。",
  },
  {
    id: "naja", name: "舟山眼镜蛇", latin: "Naja atra", family: "眼镜蛇科", risk: "高危", toxicity: "有毒", venomClass: "mixed",
    venomType: "神经毒与细胞毒混合", toxinSystem: "既可阻断神经肌肉传递，也可造成局部细胞坏死",
    tag: "会扩颈", accent: "#313c2e", provinces: ["浙江", "安徽", "江西", "福建", "湖北", "湖南", "广东", "广西", "贵州", "重庆", "四川", "海南"],
    note: "受威胁时可能抬起前身并扩张颈部，但并非所有扩颈的蛇都是眼镜蛇。", symptoms: cobraSymptoms,
    medicalNote: "局部坏死可能比全身神经症状更突出，两类损伤都需要医院评估。",
  },
  {
    id: "ophiophagus", name: "眼镜王蛇", latin: "Ophiophagus hannah", family: "眼镜蛇科", risk: "高危", toxicity: "有毒", venomClass: "mixed",
    venomType: "神经毒为主，兼有细胞毒等作用", toxinSystem: "影响神经肌肉传递；较大的注毒量可造成快速全身中毒",
    tag: "大型毒蛇", accent: "#566145", provinces: ["浙江", "福建", "江西", "湖南", "广东", "广西", "海南", "四川", "贵州", "云南", "西藏"],
    note: "主要栖息于南方山林，是世界上体长最大的毒蛇；遇见时应保持远距离。", symptoms: cobraSymptoms,
    medicalNote: "咬伤可迅速进展为肌无力和呼吸衰竭，任何疑似咬伤都应立即急救转运。",
  },
  {
    id: "bungarus-multi", name: "银环蛇", latin: "Bungarus multicinctus", family: "眼镜蛇科", risk: "高危", toxicity: "有毒", venomClass: "neuro",
    venomType: "强神经毒", toxinSystem: "突触前、突触后神经毒素阻断神经肌肉信号传递",
    tag: "夜行性", accent: "#3c5c68", provinces: ["安徽", "浙江", "江西", "福建", "湖北", "湖南", "广东", "广西", "海南", "贵州", "云南", "四川"],
    note: "夜间活动较多，咬伤早期伤口可能不痛不肿，不能等待明显局部症状。", symptoms: neuroSymptoms,
    medicalNote: "危险核心是迟发或进行性的呼吸肌麻痹，早期看似轻微仍可能快速恶化。",
  },
  {
    id: "bungarus-fasciatus", name: "金环蛇", latin: "Bungarus fasciatus", family: "眼镜蛇科", risk: "高危", toxicity: "有毒", venomClass: "neuro",
    venomType: "神经毒为主", toxinSystem: "阻断神经肌肉传递，引起迟缓性肌麻痹",
    tag: "黑黄环纹", accent: "#d2a83a", provinces: ["福建", "江西", "广东", "广西", "海南", "贵州", "云南"],
    note: "多在南方湿润区域夜间活动，昼间常较隐蔽。环纹不是可靠的单一鉴别依据。", symptoms: neuroSymptoms,
    medicalNote: "局部反应可能轻微，但吞咽、发声和呼吸功能可逐渐受累。",
  },
  {
    id: "trimeresurus", name: "福建竹叶青蛇", latin: "Trimeresurus stejnegeri", family: "蝰科", risk: "较高", toxicity: "有毒", venomClass: "hemo",
    venomType: "血液毒、凝血毒与细胞毒", toxinSystem: "影响凝血和血管，并造成明显局部炎症与组织损伤",
    tag: "树栖型", accent: "#2f7653", provinces: ["安徽", "浙江", "江西", "福建", "湖北", "湖南", "广东", "广西", "贵州", "重庆", "四川", "云南", "台湾"],
    note: "常隐蔽于灌木和低矮枝叶间，绿色保护色明显，夜间活动较多。", symptoms: hemoSymptoms,
    medicalNote: "常以局部剧痛、肿胀和凝血异常为主；严重程度不能只按蛇体大小判断。",
  },
  {
    id: "protobothrops", name: "原矛头蝮", latin: "Protobothrops mucrosquamatus", family: "蝰科", risk: "高危", toxicity: "有毒", venomClass: "hemo",
    venomType: "血液毒与细胞毒为主", toxinSystem: "破坏血管和凝血平衡，并可造成局部坏死",
    tag: "山地常见", accent: "#765c43", provinces: ["浙江", "安徽", "江西", "福建", "湖北", "湖南", "广东", "广西", "海南", "贵州", "重庆", "四川", "云南", "台湾"],
    note: "多活动于山地、林缘及岩石环境，体色和斑纹与背景接近。", symptoms: hemoSymptoms,
    medicalNote: "可能出现显著肿痛、出血、坏死、低血压和急性肾损伤。",
  },
  {
    id: "naja-kaouthia", name: "孟加拉眼镜蛇", latin: "Naja kaouthia", family: "眼镜蛇科", risk: "高危", toxicity: "有毒", venomClass: "mixed",
    venomType: "神经毒与细胞毒混合", toxinSystem: "影响神经肌肉接头，并造成局部组织坏死",
    tag: "单眼斑", accent: "#505140", provinces: ["广西", "云南", "西藏"],
    note: "在我国主要见于西南和南部边境区域；背颈斑纹存在个体差异。", symptoms: cobraSymptoms,
    medicalNote: "可同时发生局部坏死和呼吸肌麻痹，不能仅根据伤口表现判断严重度。",
  },
  {
    id: "white-lipped-pit-viper", name: "白唇竹叶青蛇", latin: "Trimeresurus albolabris", family: "蝰科", risk: "较高", toxicity: "有毒", venomClass: "hemo",
    venomType: "血液毒与细胞毒", toxinSystem: "造成凝血紊乱、血管损伤和局部肿胀",
    tag: "南方树栖", accent: "#4b8b57", provinces: ["福建", "广东", "广西", "海南", "贵州", "云南", "香港", "澳门"],
    note: "常栖息于低海拔灌丛和林缘，夜间在枝叶间活动。", symptoms: hemoSymptoms,
    medicalNote: "局部肿痛可持续进展，并可能出现出血和凝血功能异常。",
  },
  {
    id: "yunnan-pit-viper", name: "云南竹叶青蛇", latin: "Trimeresurus yunnanensis", family: "蝰科", risk: "较高", toxicity: "有毒", venomClass: "hemo",
    venomType: "血液毒与细胞毒", toxinSystem: "主要影响凝血系统和局部组织",
    tag: "西南山地", accent: "#56814d", provinces: ["四川", "云南"],
    note: "主要分布于西南山地林区，分类和分布记录仍会随研究调整。", symptoms: hemoSymptoms,
    medicalNote: "疑似咬伤应监测肿胀进展、出血征象和凝血功能。",
  },
  {
    id: "ovophis", name: "山烙铁头蛇", latin: "Ovophis monticola", family: "蝰科", risk: "较高", toxicity: "有毒", venomClass: "hemo",
    venomType: "血液毒与细胞毒", toxinSystem: "损害凝血、血管与局部软组织",
    tag: "林地伏击", accent: "#6f5d43", provinces: ["西藏", "四川", "云南", "贵州", "广西"],
    note: "常在湿润山地森林地表伏击，体色与落叶环境相近。", symptoms: hemoSymptoms,
    medicalNote: "可见疼痛、肿胀和凝血异常，严重病例可能发生组织坏死和肾损伤。",
  },
  {
    id: "mangshan", name: "莽山原矛头蝮", latin: "Protobothrops mangshanensis", family: "蝰科", risk: "高危", toxicity: "有毒", venomClass: "hemo",
    venomType: "血液毒与细胞毒为主", toxinSystem: "影响凝血、血管和局部组织",
    tag: "狭域分布", accent: "#70753e", provinces: ["湖南", "广东"],
    note: "分布范围狭窄、受保护，不应寻找、围堵或捕捉。", symptoms: hemoSymptoms,
    medicalNote: "资料相对有限，疑似咬伤应按严重蝰蛇咬伤紧急处理。",
  },
  {
    id: "daboia", name: "泰国圆斑蝰", latin: "Daboia siamensis", family: "蝰科", risk: "高危", toxicity: "有毒", venomClass: "hemo",
    venomType: "凝血毒、血液毒与肾毒性作用", toxinSystem: "强烈扰乱凝血，可损伤血管与肾脏",
    tag: "圆斑蝰", accent: "#8c6847", provinces: ["广西", "云南"],
    note: "我国记录主要集中在西南边境部分地区，斑纹明显但不能仅凭图案鉴定。", symptoms: hemoSymptoms,
    medicalNote: "凝血障碍和急性肾损伤风险突出，需要尽早进行血液和肾功能监测。",
  },
  {
    id: "gloydius-intermedius", name: "中介蝮", latin: "Gloydius intermedius", family: "蝰科", risk: "较高", toxicity: "有毒", venomClass: "hemo",
    venomType: "血液毒与细胞毒", toxinSystem: "影响凝血、血管和局部组织",
    tag: "北方蝮蛇", accent: "#8b7a5a", provinces: ["新疆", "青海", "甘肃", "宁夏", "内蒙古", "陕西"],
    note: "主要见于北方和西北部分山地、草原与石质环境。", symptoms: hemoSymptoms,
    medicalNote: "可引起肿痛、出血和全身凝血异常，老幼患者风险更高。",
  },
  {
    id: "gloydius-saxatilis", name: "岩栖蝮", latin: "Gloydius saxatilis", family: "蝰科", risk: "较高", toxicity: "有毒", venomClass: "hemo",
    venomType: "血液毒与细胞毒", toxinSystem: "影响凝血并造成局部组织损伤",
    tag: "东北山地", accent: "#655e55", provinces: ["辽宁", "吉林", "黑龙江"],
    note: "常见于东北山地岩石、林缘及灌丛环境。", symptoms: hemoSymptoms,
    medicalNote: "伤后肿胀和凝血异常可能逐渐进展，需要连续观察而非一次判断。",
  },
  {
    id: "hydrophis-cyanocinctus", name: "青环海蛇", latin: "Hydrophis cyanocinctus", family: "眼镜蛇科", risk: "高危", toxicity: "有毒", venomClass: "myo",
    venomType: "肌毒为主，兼有神经毒", toxinSystem: "破坏横纹肌，并可能影响神经肌肉传递",
    tag: "海生蛇类", accent: "#3d7481", provinces: ["山东", "浙江", "福建", "广东", "广西", "海南", "台湾", "香港"],
    note: "生活于近岸海域和河口，尾部侧扁适于游泳；不要徒手处理渔网中的海蛇。", symptoms: seaSymptoms,
    medicalNote: "伤口可能很轻，但横纹肌溶解、高钾血症和肾损伤可危及生命。",
  },
  {
    id: "hydrophis-curtus", name: "平颏海蛇", latin: "Hydrophis curtus", family: "眼镜蛇科", risk: "高危", toxicity: "有毒", venomClass: "myo",
    venomType: "肌毒为主，兼有神经毒", toxinSystem: "主要损害横纹肌，严重时累及肾脏、心律和呼吸",
    tag: "近岸海蛇", accent: "#557d7f", provinces: ["福建", "广东", "广西", "海南", "台湾", "香港"],
    note: "常见于热带、亚热带近岸水域，渔业作业接触风险高于陆地偶遇。", symptoms: seaSymptoms,
    medicalNote: "肌痛、无力或深色尿出现时已提示全身中毒，应立即急诊处理。",
  },
  {
    id: "rhabdophis-tigrinus", name: "虎斑颈槽蛇", latin: "Rhabdophis tigrinus", family: "水游蛇科", risk: "需警惕", toxicity: "后沟牙有毒", venomClass: "rear",
    venomType: "促凝血/出血性毒素", toxinSystem: "可引发消耗性凝血障碍和异常出血",
    tag: "后沟牙", accent: "#8a7543", provinces: ["黑龙江", "吉林", "辽宁", "内蒙古", "北京", "河北", "山东", "河南", "江苏", "安徽", "浙江", "江西", "湖北", "湖南", "四川"],
    note: "不是传统前沟牙或管牙毒蛇，但后沟牙咬伤仍可能造成严重凝血障碍。", symptoms: rearSymptoms,
    medicalNote: "症状可能延迟出现，不能因早期只有轻微伤口而放弃医学观察。",
  },
  {
    id: "rhabdophis-subminiatus", name: "红脖颈槽蛇", latin: "Rhabdophis subminiatus", family: "水游蛇科", risk: "需警惕", toxicity: "后沟牙有毒", venomClass: "rear",
    venomType: "促凝血/出血性毒素", toxinSystem: "可造成严重凝血因子消耗和全身出血",
    tag: "后沟牙", accent: "#a45c46", provinces: ["浙江", "江西", "福建", "湖北", "湖南", "广东", "广西", "海南", "贵州", "四川", "云南"],
    note: "颈部红色并非始终明显，不应把它当作唯一识别特征。", symptoms: rearSymptoms,
    medicalNote: "被持续咬合后可能发生延迟性严重出血，必须尽快就医并监测凝血。",
  },
  {
    id: "elaphe-carinata", name: "王锦蛇", latin: "Elaphe carinata", family: "游蛇科", risk: "无毒", toxicity: "无毒", venomClass: "none",
    venomType: "无蛇毒注入", toxinSystem: "大型无毒蛇，以缠绕和强力咬合防御",
    tag: "大型无毒蛇", accent: "#8b6b3f", provinces: ["河南", "江苏", "安徽", "浙江", "江西", "福建", "湖北", "湖南", "广东", "广西", "重庆", "四川", "贵州", "云南", "陕西"],
    note: "体型较大、性情警觉，受逼迫时可能连续咬击；无毒不等于适合触摸。", symptoms: nonVenomSymptoms,
    medicalNote: "不会引起蛇毒中毒，但较深咬伤仍需止血、清创和评估破伤风风险。",
  },
  {
    id: "ptyas-dhumnades", name: "乌梢蛇", latin: "Ptyas dhumnades", family: "游蛇科", risk: "无毒", toxicity: "无毒", venomClass: "none",
    venomType: "无蛇毒注入", toxinSystem: "无毒牙系统，主要依靠快速逃逸",
    tag: "行动迅速", accent: "#4a5549", provinces: ["河南", "江苏", "安徽", "浙江", "江西", "福建", "湖北", "湖南", "广东", "广西", "重庆", "四川", "贵州", "云南", "陕西", "甘肃"],
    note: "常见于丘陵、田野和水域附近，通常优先逃离人类。", symptoms: nonVenomSymptoms,
    medicalNote: "无蛇毒中毒风险，但任何野生蛇咬伤仍应妥善清洁并观察伤口。",
  },
  {
    id: "orthriophis-taeniurus", name: "黑眉锦蛇", latin: "Elaphe taeniura", family: "游蛇科", risk: "无毒", toxicity: "无毒", venomClass: "none",
    venomType: "无蛇毒注入", toxinSystem: "无毒牙系统，通过咬合和缠绕捕食",
    tag: "常近人居", accent: "#7a674b", provinces: ["河北", "河南", "山东", "江苏", "安徽", "浙江", "江西", "福建", "湖北", "湖南", "广东", "广西", "海南", "重庆", "四川", "贵州", "云南", "陕西"],
    note: "有时出现在房舍、仓库或农田附近，主要捕食鼠类。", symptoms: nonVenomSymptoms,
    medicalNote: "不会引起蛇毒中毒；不要因其捕鼠习性而徒手抓取。",
  },
  {
    id: "euprepiophis-mandarinus", name: "玉斑锦蛇", latin: "Euprepiophis mandarinus", family: "游蛇科", risk: "无毒", toxicity: "无毒", venomClass: "none",
    venomType: "无蛇毒注入", toxinSystem: "无毒牙系统",
    tag: "斑纹醒目", accent: "#9a5646", provinces: ["北京", "河北", "河南", "山东", "江苏", "安徽", "浙江", "江西", "福建", "湖北", "湖南", "广西", "重庆", "四川", "贵州", "云南", "陕西", "甘肃"],
    note: "红黑黄相间斑纹醒目，常因外形被误认为毒蛇。", symptoms: nonVenomSymptoms,
    medicalNote: "无蛇毒中毒风险，但不建议抓取或依据颜色自行判断其他蛇种。",
  },
  {
    id: "cyclophiops-major", name: "翠青蛇", latin: "Ptyas major", family: "游蛇科", risk: "无毒", toxicity: "无毒", venomClass: "none",
    venomType: "无蛇毒注入", toxinSystem: "无毒牙系统，性情通常较温和",
    tag: "通体绿色", accent: "#4b8d5f", provinces: ["江苏", "安徽", "浙江", "江西", "福建", "湖北", "湖南", "广东", "广西", "海南", "重庆", "四川", "贵州", "云南", "陕西", "甘肃"],
    note: "通体绿色，容易与竹叶青类混淆；体形、头部和鳞片特征需综合判断。", symptoms: nonVenomSymptoms,
    medicalNote: "无蛇毒中毒风险，但仅凭绿色外观不能排除其他有毒蛇。",
  },
  {
    id: "lycodon-rufozonatus", name: "赤链蛇", latin: "Lycodon rufozonatus", family: "游蛇科", risk: "无毒", toxicity: "无毒", venomClass: "none",
    venomType: "无医学显著蛇毒注入", toxinSystem: "通常按无毒蛇处理",
    tag: "红黑环纹", accent: "#9b493d", provinces: ["黑龙江", "吉林", "辽宁", "北京", "河北", "山东", "河南", "江苏", "安徽", "浙江", "江西", "福建", "湖北", "湖南", "广东", "广西", "重庆", "四川", "贵州", "云南", "陕西", "甘肃"],
    note: "红黑相间，夜间活动较多，受刺激时可能防御性咬击。", symptoms: nonVenomSymptoms,
    medicalNote: "一般不造成蛇毒中毒，但伤口仍需清洁和观察。",
  },
  {
    id: "elaphe-dione", name: "白条锦蛇", latin: "Elaphe dione", family: "游蛇科", risk: "无毒", toxicity: "无毒", venomClass: "none",
    venomType: "无蛇毒注入", toxinSystem: "无毒牙系统",
    tag: "北方常见", accent: "#756f62", provinces: ["新疆", "青海", "甘肃", "宁夏", "内蒙古", "黑龙江", "吉林", "辽宁", "北京", "河北", "山西", "山东", "河南", "陕西"],
    note: "在北方草原、农田和山地较常见，背部常有浅色纵纹。", symptoms: nonVenomSymptoms,
    medicalNote: "无蛇毒中毒风险；受惊后仍可能快速咬击。",
  },
  {
    id: "elaphe-bimaculata", name: "双斑锦蛇", latin: "Elaphe bimaculata", family: "游蛇科", risk: "无毒", toxicity: "无毒", venomClass: "none",
    venomType: "无蛇毒注入", toxinSystem: "无毒牙系统",
    tag: "小型锦蛇", accent: "#816854", provinces: ["北京", "河北", "山西", "山东", "河南", "江苏", "安徽", "浙江", "湖北", "四川", "陕西", "甘肃"],
    note: "体型较小，多见于丘陵、田野和灌丛环境。", symptoms: nonVenomSymptoms,
    medicalNote: "不会引起蛇毒中毒，咬伤主要按普通动物咬伤处理。",
  },
  {
    id: "sinomicrurus-macclellandi", name: "中华珊瑚蛇", latin: "Sinomicrurus macclellandi", family: "眼镜蛇科", risk: "高危", toxicity: "有毒", venomClass: "neuro",
    venomType: "神经毒为主", toxinSystem: "可阻断神经肌肉信号传递，局部反应不一定明显",
    tag: "红黑环纹", accent: "#b64b3f", provinces: ["福建", "江西", "湖南", "广东", "广西", "海南", "贵州", "云南", "西藏", "台湾", "香港"],
    note: "体型通常不大且生活隐蔽，但属于眼镜蛇科；鲜艳环纹不能作为可触摸或无害的判断依据。", symptoms: neuroSymptoms,
    medicalNote: "公开病例相对少，但疑似咬伤应按神经毒蛇伤处理，重点监测吞咽和呼吸功能。",
  },
  {
    id: "protobothrops-jerdonii", name: "菜花原矛头蝮", latin: "Protobothrops jerdonii", family: "蝰科", risk: "高危", toxicity: "有毒", venomClass: "hemo",
    venomType: "血液毒、凝血毒与细胞毒", toxinSystem: "损害凝血系统、血管和局部软组织",
    tag: "西南山地", accent: "#78654b", provinces: ["甘肃", "青海", "四川", "云南", "西藏"],
    note: "多见于西南和青藏高原东南缘的山地环境，斑纹与碎石、落叶背景接近。", symptoms: hemoSymptoms,
    medicalNote: "咬伤可出现进行性肿胀、出血和凝血异常，应尽早进行蛇伤专科评估。",
  },
  {
    id: "gloydius-strauchi", name: "高原蝮", latin: "Gloydius strauchi", family: "蝰科", risk: "较高", toxicity: "有毒", venomClass: "hemo",
    venomType: "血液毒与细胞毒为主", toxinSystem: "影响凝血、微循环和局部组织",
    tag: "高海拔", accent: "#716b58", provinces: ["甘肃", "青海", "四川", "云南", "西藏"],
    note: "主要生活在高原草甸、石坡和河谷等环境，相关类群分类和分布仍可能随研究调整。", symptoms: hemoSymptoms,
    medicalNote: "高海拔环境会增加转运难度，疑似咬伤应立即联系急救而不是等待症状。",
  },
  {
    id: "vipera-berus", name: "极北蝰", latin: "Vipera berus", family: "蝰科", risk: "较高", toxicity: "有毒", venomClass: "hemo",
    venomType: "血液毒与细胞毒", toxinSystem: "造成局部组织损伤，并可影响循环和凝血",
    tag: "新疆北部", accent: "#5e5f59", provinces: ["新疆"],
    note: "我国记录主要位于新疆北部，体色变异很大，部分个体可接近全黑。", symptoms: hemoSymptoms,
    medicalNote: "可能发生明显肿胀、低血压和全身反应，儿童及基础疾病患者尤其需要严密观察。",
  },
  {
    id: "laticauda-laticaudata", name: "蓝灰扁尾海蛇", latin: "Laticauda laticaudata", family: "眼镜蛇科", risk: "高危", toxicity: "有毒", venomClass: "myo",
    venomType: "神经毒为主，兼有肌毒作用", toxinSystem: "影响神经肌肉传递并可能损伤横纹肌",
    tag: "两栖海蛇", accent: "#447888", provinces: ["福建", "广东", "海南", "台湾", "香港"],
    note: "具有桨状尾，可上岸休息或产卵；不要在礁石、海滩或渔具中徒手接触。", symptoms: seaSymptoms,
    medicalNote: "伤口可能不明显，但肌无力、呼吸障碍或深色尿均提示需要紧急救治。",
  },
  {
    id: "ahaetulla-prasina", name: "绿瘦蛇", latin: "Ahaetulla prasina", family: "游蛇科", risk: "需警惕", toxicity: "后沟牙有毒", venomClass: "rear",
    venomType: "后沟牙弱毒，局部作用为主", toxinSystem: "主要作用于小型猎物，对人通常仅造成局部反应",
    tag: "极细树栖", accent: "#5d9551", provinces: ["福建", "广东", "广西", "海南", "贵州", "云南", "香港"],
    note: "身体极细、吻部尖长，常静伏于灌木和树枝；不能因为头部狭长就判断为无毒。", symptoms: mildRearSymptoms,
    medicalNote: "严重全身中毒并非常见表现，但持续肿胀、过敏反应或蛇种不明时仍应就医。",
  },
  {
    id: "psammodynastes-pulverulentus", name: "紫沙蛇", latin: "Psammodynastes pulverulentus", family: "水游蛇科", risk: "需警惕", toxicity: "后沟牙有毒", venomClass: "rear",
    venomType: "后沟牙弱毒", toxinSystem: "对小型猎物有效，人被咬后通常以局部症状为主",
    tag: "拟蝰外形", accent: "#806452", provinces: ["浙江", "福建", "江西", "湖南", "广东", "广西", "海南", "贵州", "四川", "云南", "西藏", "香港"],
    note: "头部较宽、体色多变，受威胁时外观容易让人联想到小型蝰蛇。", symptoms: mildRearSymptoms,
    medicalNote: "通常不会造成典型严重蛇毒中毒，但不能在现场仅凭体型小而放松处理。",
  },
  {
    id: "boiga-kraepelini", name: "绞花林蛇", latin: "Boiga kraepelini", family: "游蛇科", risk: "需警惕", toxicity: "后沟牙有毒", venomClass: "rear",
    venomType: "后沟牙弱毒", toxinSystem: "主要用于制服蜥蜴和鸟类，人类咬伤多为局部反应",
    tag: "夜行树栖", accent: "#866b4f", provinces: ["浙江", "安徽", "江西", "福建", "湖南", "广东", "广西", "海南", "贵州", "四川", "云南", "台湾"],
    note: "夜间常在林缘和树上活动，眼较大；被长时间咬住时应避免徒手拉扯。", symptoms: mildRearSymptoms,
    medicalNote: "目前通常视为医学风险较低的后沟牙蛇，但咬伤仍应清洁并观察局部变化。",
  },
  {
    id: "ptyas-mucosa", name: "滑鼠蛇", latin: "Ptyas mucosa", family: "游蛇科", risk: "无毒", toxicity: "无毒", venomClass: "none",
    venomType: "无蛇毒注入", toxinSystem: "大型无毒鼠蛇，依靠速度、咬合和缠压捕食",
    tag: "大型鼠蛇", accent: "#79704f", provinces: ["福建", "江西", "湖南", "广东", "广西", "海南", "四川", "贵州", "云南", "西藏", "香港", "澳门"],
    note: "行动迅速，常活动于农田、村落和水域附近；受逼迫时可能抬起前身并猛烈防御。", symptoms: nonVenomSymptoms,
    medicalNote: "无蛇毒中毒风险，但大型个体咬伤可较深，需清创并评估破伤风免疫。",
  },
  {
    id: "ptyas-korros", name: "灰鼠蛇", latin: "Ptyas korros", family: "游蛇科", risk: "无毒", toxicity: "无毒", venomClass: "none",
    venomType: "无蛇毒注入", toxinSystem: "无毒牙系统，主要捕食鼠类、蛙和蜥蜴",
    tag: "南方常见", accent: "#737b68", provinces: ["浙江", "江西", "福建", "湖南", "广东", "广西", "海南", "贵州", "四川", "云南", "台湾", "香港", "澳门"],
    note: "体形细长、活动迅速，常见于南方农田、林缘和居民点周边。", symptoms: nonVenomSymptoms,
    medicalNote: "不会造成蛇毒中毒；不要因其无毒而追逐或徒手捕捉。",
  },
  {
    id: "elaphe-schrenckii", name: "棕黑锦蛇", latin: "Elaphe schrenckii", family: "游蛇科", risk: "无毒", toxicity: "无毒", venomClass: "none",
    venomType: "无蛇毒注入", toxinSystem: "大型无毒蛇，以鼠类和鸟类为食",
    tag: "东北大型蛇", accent: "#66543e", provinces: ["辽宁", "吉林", "黑龙江"],
    note: "我国主要分布于东北，成体和幼体花纹差异较大，是很适合做年龄变化科普的蛇种。", symptoms: nonVenomSymptoms,
    medicalNote: "无蛇毒中毒风险，但大型个体的防御性咬伤仍可造成较深创口。",
  },
  {
    id: "elaphe-moellendorffi", name: "百花锦蛇", latin: "Elaphe moellendorffi", family: "游蛇科", risk: "无毒", toxicity: "无毒", venomClass: "none",
    venomType: "无蛇毒注入", toxinSystem: "无毒牙系统",
    tag: "两广石山", accent: "#a0604d", provinces: ["广东", "广西"],
    note: "主要见于两广石灰岩山地及附近灌丛，花纹醒目但并不表示有毒。", symptoms: nonVenomSymptoms,
    medicalNote: "不会引起蛇毒中毒；野外观察应避免翻石追赶和干扰隐蔽个体。",
  },
  {
    id: "lycodon-ruhstrati", name: "黑背白环蛇", latin: "Lycodon ruhstrati", family: "游蛇科", risk: "无毒", toxicity: "无毒", venomClass: "none",
    venomType: "无医学显著蛇毒注入", toxinSystem: "无毒牙系统，常捕食壁虎和小型爬行动物",
    tag: "易混银环蛇", accent: "#4f5960", provinces: ["江苏", "安徽", "浙江", "江西", "福建", "湖北", "湖南", "广东", "广西", "海南", "贵州", "四川", "云南", "陕西", "台湾"],
    note: "夜行且常出现在墙边或石缝，黑白花纹容易使人联想到银环蛇。", symptoms: nonVenomSymptoms,
    medicalNote: "本种无毒，但黑白环纹蛇现场误判代价很高，无法确认时应保持距离。",
  },
  {
    id: "lycodon-septentrionalis", name: "白链蛇", latin: "Lycodon septentrionalis", family: "游蛇科", risk: "无毒", toxicity: "无毒", venomClass: "none",
    venomType: "无医学显著蛇毒注入", toxinSystem: "无毒牙系统",
    tag: "山地夜行", accent: "#64665e", provinces: ["江苏", "浙江", "安徽", "江西", "福建", "湖南", "广东", "广西", "海南", "贵州", "重庆", "四川", "云南", "西藏", "甘肃", "台湾"],
    note: "多在夜间活动，身体的浅色横带可能不完整，常与其他白环蛇或银环蛇混淆。", symptoms: nonVenomSymptoms,
    medicalNote: "无蛇毒中毒风险，但公众不应仅凭浅色横带是否闭合来抓取鉴定。",
  },
  {
    id: "pareas-chinensis", name: "中国钝头蛇", latin: "Pareas chinensis", family: "钝头蛇科", risk: "无毒", toxicity: "无毒", venomClass: "none",
    venomType: "无蛇毒注入", toxinSystem: "无毒牙系统，牙齿和颌部适合取食蜗牛与蛞蝓",
    tag: "食蜗牛", accent: "#8b785f", provinces: ["江苏", "浙江", "安徽", "江西", "福建", "湖北", "湖南", "广东", "广西", "重庆", "四川", "贵州", "云南", "陕西", "甘肃"],
    note: "体型小、头钝、眼大，夜间在潮湿林地和灌丛活动，是生态习性很有特色的无毒蛇。", symptoms: nonVenomSymptoms,
    medicalNote: "不会造成蛇毒中毒；观察时不要搬动个体或破坏其潮湿微生境。",
  },
  {
    id: "malayopython-bivittatus", name: "缅甸蟒", latin: "Python bivittatus", family: "蟒科", risk: "无毒", toxicity: "无毒", venomClass: "none",
    venomType: "无蛇毒注入", toxinSystem: "大型缠绕型蛇类，依靠咬合和缠绕制服猎物",
    tag: "国家重点保护", accent: "#9a7654", provinces: ["福建", "广东", "广西", "海南", "云南", "香港"],
    note: "我国野外种群主要位于南方，属于受保护野生动物；大型个体应由专业人员处置。", symptoms: nonVenomSymptoms,
    medicalNote: "没有蛇毒，但大型个体咬合和缠绕可造成严重机械性损伤，切勿靠近围堵。",
  },
  {
    id: "trimerodytes-annularis", name: "水赤链游蛇", latin: "Trimerodytes annularis", family: "水游蛇科", risk: "无毒", toxicity: "无毒", venomClass: "none",
    venomType: "无医学显著蛇毒注入", toxinSystem: "通常按无毒蛇处理，主要捕食鱼和蛙",
    tag: "近水活动", accent: "#74684f", provinces: ["江苏", "安徽", "浙江", "江西", "福建", "湖北", "湖南", "广东", "广西", "海南", "重庆", "四川", "贵州", "云南", "台湾"],
    note: "常活动于池塘、沟渠和稻田附近，棕红色横斑可能使其被误认为其他赤链状蛇。", symptoms: nonVenomSymptoms,
    medicalNote: "通常不导致蛇毒中毒，但水边发现的蛇不应徒手捞取或堵截。",
  },
  {
    id: "orientocoluber-spinalis", name: "黄脊游蛇", latin: "Orientocoluber spinalis", family: "游蛇科", risk: "无毒", toxicity: "无毒", venomClass: "none",
    venomType: "无蛇毒注入", toxinSystem: "无毒牙系统，以蜥蜴等小型动物为食",
    tag: "北方纵纹", accent: "#8c8252", provinces: ["北京", "天津", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "江苏", "山东", "河南", "陕西", "甘肃", "新疆"],
    note: "主要见于北方开阔地、山麓和河床附近，背中线的浅黄色纵纹较醒目。", symptoms: nonVenomSymptoms,
    medicalNote: "无蛇毒中毒风险；与白条锦蛇是不同物种，不能只看一条浅色纵纹命名。",
  },
  {
    id: "achalinus-spinalis", name: "黑脊蛇", latin: "Achalinus spinalis", family: "闪皮蛇科", risk: "无毒", toxicity: "无毒", venomClass: "none",
    venomType: "无蛇毒注入", toxinSystem: "无毒牙系统，穴居并捕食蚯蚓等小型动物",
    tag: "虹彩鳞片", accent: "#555f62", provinces: ["江苏", "浙江", "安徽", "江西", "福建", "湖北", "湖南", "广西", "重庆", "四川", "贵州", "云南", "陕西", "甘肃"],
    note: "常隐藏在湿润土壤、石块和腐殖层下，光照下鳞片可呈虹彩光泽。", symptoms: nonVenomSymptoms,
    medicalNote: "不会造成蛇毒中毒；穴居蛇对环境扰动敏感，发现后不应挖掘追捕。",
  },
];

export const snakeAppearances: Record<string, SnakeAppearance> = {
  deinagkistrodon: {
    appearance: "体形粗壮，头部宽大呈三角形，吻端明显上翘。背部常为棕褐色，左右两列深色三角斑在背中线相接，形成连续的沙漏形或近似 X 形花纹。",
    distinguishing: "上翘的吻端与成对三角斑组合较有代表性；幼体尾尖常较浅或偏黄，但颜色会随年龄、光线和地区变化。",
    lookalikes: "可能与原矛头蝮等褐色蝰蛇混淆。不要依靠“头呈三角形”判断，因为不少无毒蛇受惊时也会把头部压宽。",
  },
  gloydius: {
    appearance: "体形短粗，尾较短，头颈分界明显。背面灰褐至棕褐，通常有两列较大的深色圆斑或椭圆斑，头侧有深色带纹。",
    distinguishing: "整体显得粗短，背斑边缘较深；眼与鼻孔之间可见颊窝，但这一特征不应靠近观察。",
    lookalikes: "与一些带圆斑的锦蛇幼体可能相似。斑纹、头形和颜色均不能单独排除毒蛇。",
  },
  naja: {
    appearance: "成体多为深褐、灰黑或黑色，颈背常见浅色眼镜状或马蹄状斑。幼蛇通常比成体花纹鲜明，可有多条细窄浅色横纹，因此远看可能像黑白环纹蛇。",
    distinguishing: "幼年舟山眼镜蛇的浅色横纹常较不规则，通常不像银环蛇那样形成数量多、较均匀的窄白环；颈部可扩宽，但绝不能靠近或故意刺激它来验证。",
    lookalikes: "最需要与银环蛇区分：银环蛇通常有 31–50 条窄白环、背脊一列鳞片明显扩大而使身体横切面近三角形；幼年眼镜蛇的头颈更宽、花纹变化更大。远距离照片不足时一律按毒蛇处理。",
  },
  ophiophagus: {
    appearance: "体形修长而巨大，头部较长，成体常呈橄榄褐、黄褐或黑褐色，身体可见浅色横带或人字形纹。颈部受威胁时能扩展，但“颈罩”通常比眼镜蛇更窄长。",
    distinguishing: "头顶后部有一对较大的枕鳞，体形和颈罩比例与眼镜蛇不同；幼体黑底配密集浅色横带，外观与成体差异很大。",
    lookalikes: "幼体可能与银环蛇等黑白环纹蛇混淆，成体也可能被误认成大型鼠蛇。体长和是否扩颈都不能作为接近确认的理由。",
  },
  "bungarus-multi": {
    appearance: "身体黑色或蓝黑色、表面光亮，通常有 31–50 条窄白色横环；黑环明显宽于白环。头部多为黑色，和颈部界限不明显，尾短而逐渐变细。",
    distinguishing: "背中线一列鳞片明显扩大，身体横切面近三角形；白环多而窄、排列相对规则。鳞片细节只有安全距离拍摄的清晰照片才可能看清。",
    lookalikes: "可与幼年舟山眼镜蛇及部分白环蛇混淆。幼年眼镜蛇浅带常较不规则且头颈更宽；白环蛇的浅色带常不完整或边缘不齐。但现场无法确认时，黑白环纹蛇一律不要接触。",
  },
  "bungarus-fasciatus": {
    appearance: "黑色与黄色宽环交替，环纹通常绕至腹面。身体横切面明显呈三角形，背脊隆起，头较扁、颈部不明显，尾端短钝。",
    distinguishing: "宽阔的黑黄完整环、突出的背脊和短钝尾组合较醒目；幼体颜色也可能偏奶黄而非鲜黄。",
    lookalikes: "可与具有黄黑花纹的无毒蛇混淆。不要仅凭黄色深浅或环纹数量判断。",
  },
  trimeresurus: {
    appearance: "通常通体绿色，头宽呈三角形，眼后到颈侧可有浅色线；尾端常带红褐色。雌雄和不同地区个体的体侧线颜色可能不同。",
    distinguishing: "绿色身体、较宽头部、红褐尾端和树栖姿态是常见组合，但并非每个个体都全部具备。",
    lookalikes: "与白唇竹叶青蛇、云南竹叶青蛇及无毒的翠青蛇易混。翠青蛇头部更狭长、身体更纤细且没有颊窝；不要靠近查看颊窝或瞳孔。",
  },
  protobothrops: {
    appearance: "体形较粗长，底色黄褐、棕褐或灰褐，背部有一列边缘较深的大型不规则斑，头侧从眼后延伸出深色带。",
    distinguishing: "头部宽大、吻端较尖，背斑常呈不规则菱形或波状连续排列，整体与岩石和落叶背景高度融合。",
    lookalikes: "容易与山烙铁头蛇及其他褐色蝰蛇混淆；准确区分常需鳞片和分布信息，公众不应徒手鉴定。",
  },
  "naja-kaouthia": {
    appearance: "体色变化较大，可为黄褐、橄榄褐到黑色。扩颈时颈背常见单个圆形或单眼镜状浅色斑，部分个体花纹并不典型。",
    distinguishing: "典型个体的单眼状颈斑可与舟山眼镜蛇的双眼镜或马蹄状斑区分，但两者花纹都存在变异。",
    lookalikes: "与舟山眼镜蛇最易混淆，边境地区还可能涉及其他眼镜蛇。仅凭颈斑照片不应作百分之百结论。",
  },
  "white-lipped-pit-viper": {
    appearance: "身体鲜绿至黄绿色，腹面较浅，唇缘常呈白色或淡黄色；部分个体体侧有白色、黄色或红白相间纵线，尾端红褐。",
    distinguishing: "浅色唇缘是常见提示，但性别和地区会影响体侧线；与其他竹叶青类的可靠区分常需要鳞片计数。",
    lookalikes: "可与福建竹叶青蛇、云南竹叶青蛇和翠青蛇混淆。绿色不是物种级鉴别特征。",
  },
  "yunnan-pit-viper": {
    appearance: "小到中型绿色蝰蛇，头部三角形，腹面浅绿，尾部末端常呈红褐色；体侧可能有浅色纵线。",
    distinguishing: "外形与多种竹叶青高度相似，地理位置能提供线索，但不能代替专业的鳞片与遗传鉴定。",
    lookalikes: "与福建竹叶青蛇和白唇竹叶青蛇常难凭普通照片可靠区分，页面不鼓励公众做近距离物种级鉴别。",
  },
  ovophis: {
    appearance: "体形粗壮，底色灰褐、棕褐或红褐，背部有成对或交错的深色块斑，头顶常见箭形或矛形深斑。",
    distinguishing: "花纹破碎、色调暗沉，伏在湿润落叶中很难发现；尾部较短。",
    lookalikes: "与原矛头蝮及其他山地蝰蛇相似。普通远景照片往往不足以可靠区分。",
  },
  mangshan: {
    appearance: "大型粗壮蝰蛇，底色橄榄绿或黄绿色，覆盖黑褐色网状、斑块状花纹；尾端常为明显的浅色或白色。",
    distinguishing: "绿色与黑褐交织的苔藓状花纹和浅色尾端较有特点，头部宽大。",
    lookalikes: "可与某些大型原矛头蝮混淆。该蛇狭域分布且受保护，看到后应远离并避免泄露精确位置。",
  },
  daboia: {
    appearance: "体形十分粗壮，黄褐或灰褐底色上排列三列大型圆形、椭圆形或近菱形深斑，斑块常有浅色外缘。",
    distinguishing: "成串的大型圆斑和粗壮体形较醒目，头部呈宽三角形并带深色纹。",
    lookalikes: "可能与带大型圆斑的无毒蛇或其他蝰蛇混淆。圆斑数量和颜色会有个体差异。",
  },
  "gloydius-intermedius": {
    appearance: "体形短粗，灰褐或黄褐底色，背部有较规则的深褐横斑或椭圆斑，头侧有从眼后向口角延伸的深色带。",
    distinguishing: "外观与多种蝮属蛇极其接近，通常需要结合鳞片、分布和专业测量。",
    lookalikes: "与短尾蝮、岩栖蝮及其他北方蝮蛇难以仅凭颜色区分，应统一保持安全距离。",
  },
  "gloydius-saxatilis": {
    appearance: "体色多为灰褐、棕褐，背部有深色横斑或近方形斑，头部宽、颈细，整体与岩石和枯叶色调接近。",
    distinguishing: "花纹和体色变异较大，专业鉴别需看头鳞、体鳞和分布。",
    lookalikes: "与短尾蝮、中介蝮等蝮属蛇高度相似，公众照片通常只能鉴别到蝮蛇类。",
  },
  "hydrophis-cyanocinctus": {
    appearance: "身体侧扁，通常灰白、灰蓝或淡黄色，具有许多深色横环；腹鳞较陆蛇缩小，尾部明显桨状侧扁。",
    distinguishing: "桨状尾和海生体形是核心特征；深色环可能完整，也可能在腹面中断。",
    lookalikes: "可与其他环纹海蛇混淆。海蛇物种级鉴别较难，渔获中的任何海蛇都不要徒手摘取。",
  },
  "hydrophis-curtus": {
    appearance: "身体粗短而侧扁，头较小，背部灰绿、橄榄或黄褐，常有深色宽横带；尾部呈明显桨状。",
    distinguishing: "相较许多海蛇体形更短粗、腹部较宽，但个体和年龄差异明显。",
    lookalikes: "与多种近岸海蛇相似，不能只按横带宽度鉴别。所有海蛇均应避免接触。",
  },
  "rhabdophis-tigrinus": {
    appearance: "体色多为橄榄绿、灰绿或棕色，体侧排列黑色方斑并夹杂橙红色，颈后可见醒目的黄、橙或红色区域。",
    distinguishing: "颈后彩色区域与棋盘状体斑较典型，但不同地区个体的红色程度差异很大。",
    lookalikes: "可与无毒游蛇混淆，也常被误称为“无毒蛇”。它属于后沟牙有毒蛇，不要用手抓取验证。",
  },
  "rhabdophis-subminiatus": {
    appearance: "背面橄榄褐或灰褐，鳞片间常见黑色纹，颈背两侧有橙红或朱红色斑块，腹面较浅。",
    distinguishing: "红色主要集中在颈部而不是全身；部分个体红斑较暗或不明显。",
    lookalikes: "可能与虎斑颈槽蛇及其他颈槽蛇混淆。红颈不是判断安全与否的可靠单一标准。",
  },
  "elaphe-carinata": {
    appearance: "大型粗壮无毒蛇，背面黄褐、橄榄褐至黑褐，鳞片边缘深，形成网纹；体后段和尾部常有黄黑相间斜纹。",
    distinguishing: "鳞片起棱明显、体形大、网纹感强，受扰时可能抬头、发出气味并迅速咬击。",
    lookalikes: "可能被误认为眼镜王蛇或大型蝰蛇。无毒不等于温顺，不能靠近验证。",
  },
  "ptyas-dhumnades": {
    appearance: "体形细长，成体多呈深橄榄、青灰或黑褐色，腹面较浅；体侧鳞片边缘可形成细密纵纹，尾巴很长。",
    distinguishing: "身体和尾部修长、头部狭长，整体不像蝰蛇那样粗短。幼体花纹可能比成体明显。",
    lookalikes: "可与其他鼠蛇、锦蛇以及深色眼镜蛇混淆。不要依赖“跑得快”或“头不三角”判断无毒。",
  },
  "orthriophis-taeniurus": {
    appearance: "大型修长蛇，黄褐或灰褐底色，头后到身体前段有深色斑，身体后半部常出现明显黑黄纵条，眼后有黑色眉纹。",
    distinguishing: "眼后黑纹与后半身纵条较典型，尾巴细长。",
    lookalikes: "幼体花纹变化较大，可能与其他锦蛇混淆；在阴暗房舍中不要仅凭颜色判断。",
  },
  "euprepiophis-mandarinus": {
    appearance: "体形中等，灰色或黄褐底色上有一系列黑边红褐色的大型鞍状斑，斑块之间常夹浅黄色，头部有对称黑色纹。",
    distinguishing: "黑边鞍斑和头顶对称花纹很醒目，身体不具真正完整的黑白环。",
    lookalikes: "鲜明颜色容易让人联想到毒蛇，也可能与赤链蛇混淆；颜色鲜艳本身不能说明有毒或无毒。",
  },
  "cyclophiops-major": {
    appearance: "身体细长、几乎通体均匀翠绿，腹面黄绿或淡黄色，头部狭长且与颈部过渡平缓，眼较大，尾巴细长。",
    distinguishing: "与竹叶青类相比通常头部更狭长、身体更纤细、尾巴更长，体侧缺少典型红白纵线。",
    lookalikes: "最常与绿色竹叶青类混淆。远距离无法确认头部比例时，应按可能有毒处理，绝不能抓住看瞳孔或颊窝。",
  },
  "lycodon-rufozonatus": {
    appearance: "黑色或深褐底色上有红色、橙红或红褐色横斑，横斑通常不形成像金环蛇那样整齐宽阔的完整环。",
    distinguishing: "红黑相间、身体较圆，头部和颈部区分不强；花纹随地区和年龄变化。",
    lookalikes: "可能与珊瑚蛇类或其他环纹蛇混淆。红黑配色不能用作安全判断。",
  },
  "elaphe-dione": {
    appearance: "体形细长，灰褐或黄褐底色，背部中央通常有一条浅色纵纹，两侧伴深色斑点或短横斑，头后可见深色纹。",
    distinguishing: "贯穿背部的浅色纵纹较典型，尾巴长而尖。",
    lookalikes: "幼体可与其他带纵纹或斑点的锦蛇混淆，通常不会与规则环纹的银环蛇相同。",
  },
  "elaphe-bimaculata": {
    appearance: "小到中型，灰褐或黄褐底色上有两列深褐色椭圆斑或横斑，头部有深色矛形纹，腹面常有黑白斑。",
    distinguishing: "两列背斑和较纤细体形较典型，但幼体斑纹更鲜明。",
    lookalikes: "可与短尾蝮等带圆斑蛇混淆。头形并不可靠，应结合体形、鳞片和专业意见。",
  },
  "sinomicrurus-macclellandi": {
    appearance: "体形细小，头部多为黑色并有浅色横带，身体红褐、橙红或棕红色，排列多条黑色横带；黑带边缘常伴较窄浅色线。",
    distinguishing: "头颈区分不明显、尾较短，环纹组合具有提示性，但不同地区个体的红色深浅和带纹宽度差异明显。",
    lookalikes: "可与赤链蛇、部分小头蛇等红黑斑纹无毒蛇混淆。无法确认的红黑环纹蛇一律不要接触。",
  },
  "protobothrops-jerdonii": {
    appearance: "体形粗壮，底色黄褐、灰褐或橄榄褐，背面排列深色近方形、梯形或交错斑块，头侧有明显深色带。",
    distinguishing: "背斑常让人联想到碎花或菜花图案，头部宽大，体表与高山碎石和落叶环境高度融合。",
    lookalikes: "与高原蝮、山烙铁头蛇及其他褐色蝰蛇相似，普通照片往往不能可靠鉴别到种。",
  },
  "gloydius-strauchi": {
    appearance: "体形短粗，灰褐、棕褐或橄榄色底上排列深色横斑，头顶可有对称斑纹，眼后向口角延伸深色条带。",
    distinguishing: "常见个体色调偏暗，身体适合高原石质背景；可靠区分需要鳞片、地理和分类信息。",
    lookalikes: "与中介蝮及其他蝮属蛇高度相似，不能按海拔或照片背景直接确定物种。",
  },
  "vipera-berus": {
    appearance: "体形较短粗，背部常有连续深色锯齿状纵带，底色可从浅灰、褐色到红褐变化，也有几乎通体黑色的个体。",
    distinguishing: "典型锯齿带较醒目，但黑化个体可能完全看不见；头后常见深色 V 形或 X 形纹。",
    lookalikes: "可与新疆其他蝰蛇以及带锯齿纹的无毒蛇混淆，体色和单一背纹都不是充分证据。",
  },
  "laticauda-laticaudata": {
    appearance: "身体蓝灰或灰白，具有规则的深蓝黑色宽环，头部多为黑色，吻部和上唇可偏黄；尾部明显侧扁呈桨状。",
    distinguishing: "腹部具有较宽腹鳞，能在陆地爬行；桨状尾提示其海生适应，但不能借此与所有海蛇精确分种。",
    lookalikes: "与其他扁尾海蛇和环纹海蛇相似。海边发现的任何黑蓝环纹、桨状尾蛇均应保持距离。",
  },
  "ahaetulla-prasina": {
    appearance: "身体极为细长，通常鲜绿或黄绿色，也有褐色型；吻端尖长，头部呈狭长箭头形，眼大且常见水平瞳孔。",
    distinguishing: "长而尖的吻部、极细身体和树枝状姿态组合明显，受威胁时可能鼓起前段露出鳞间黑白纹。",
    lookalikes: "常与翠青蛇和绿色竹叶青混淆。绿瘦蛇身体更细、吻更尖，但不要靠近查看瞳孔。",
  },
  "psammodynastes-pulverulentus": {
    appearance: "小型蛇，体色可为灰褐、红褐或紫褐，背部有不规则深斑；头部较宽、吻略上翘，眼后常有深色线。",
    distinguishing: "体型虽小却有类似蝰蛇的宽头和短促防御姿态，花纹与落叶背景非常接近。",
    lookalikes: "容易被误认为幼年蝮蛇，也可能与小型无毒游蛇混淆；不要依靠三角头作判断。",
  },
  "boiga-kraepelini": {
    appearance: "体形细长，头大于颈部，眼睛较大；黄褐或灰褐底色上有深色不规则横带，身体后段的带纹常更紧密。",
    distinguishing: "夜行树栖姿态、较大眼睛和细长身体是常见组合，幼体斑纹通常比成体清晰。",
    lookalikes: "可与繁花林蛇以及多种锦蛇幼体混淆，普通照片难以依靠横带数量可靠区分。",
  },
  "ptyas-mucosa": {
    appearance: "大型修长蛇，头部略宽，眼较大；前半身黄褐、橄榄褐或棕色，后半身鳞片边缘常形成深浅相间的网格或横纹。",
    distinguishing: "尾很长、行动迅速，成体后半身常呈明显黑黄网纹；受威胁时可能抬高前身，但不会形成真正颈罩。",
    lookalikes: "抬起前身时可能被误认成眼镜蛇，亦与灰鼠蛇相似。是否扩颈不能作为单一鉴别依据。",
  },
  "ptyas-korros": {
    appearance: "体形细长，背面多为较均匀的橄榄灰、黄褐或棕灰色，鳞片边缘可呈细密暗色网纹，腹面淡黄。",
    distinguishing: "整体颜色比滑鼠蛇更均匀，身体和尾部纤长，眼后有时可见短暗纹。",
    lookalikes: "与滑鼠蛇、乌梢蛇和其他鼠蛇容易混淆，体色受光线影响很大。",
  },
  "elaphe-schrenckii": {
    appearance: "成体大型粗壮，棕黑或黑色背面排列黄色至乳黄色窄横斑；幼体底色较浅、白色横斑和头部浅色纹更加突出。",
    distinguishing: "东北分布、黑黄相间的成体和明显的年龄变色很有特点，腹面常带黑白斑。",
    lookalikes: "幼体与赤峰锦蛇等斑纹锦蛇相似，成体也可能被误认为大型环纹毒蛇。",
  },
  "elaphe-moellendorffi": {
    appearance: "头部常呈红褐色，灰白、淡褐或粉褐底色上排列黑边红褐色大斑，斑块形状复杂而醒目。",
    distinguishing: "大型鞍斑、偏红的头部和两广石灰岩生境可提供线索，身体整体不像真正完整环纹。",
    lookalikes: "可能与玉斑锦蛇及其他花纹锦蛇混淆，可靠鉴别仍需结合头部纹样和鳞片。",
  },
  "lycodon-ruhstrati": {
    appearance: "身体黑色或深褐色，具有数量较多的白色、灰白或淡黄色窄横带；浅带常在体侧分叉、变窄或在腹面中断。",
    distinguishing: "身体横切面通常较圆，背脊中央鳞片不呈银环蛇那样明显扩大的六角形，浅带也常不够整齐。",
    lookalikes: "最重要的是与银环蛇区别。现场看不清背脊鳞和环带是否闭合时，应直接按银环蛇风险处理。",
  },
  "lycodon-septentrionalis": {
    appearance: "体形细长，深褐或黑色背面分布白色至浅黄色横带，横带常在身体前段较明显，头部可有浅色斑。",
    distinguishing: "浅带边缘往往不规则，常不完全包围腹面；不同年龄和地区个体差异较大。",
    lookalikes: "可与黑背白环蛇、银环蛇及其他白环蛇混淆，不能根据环纹不完整就断言无毒。",
  },
  "pareas-chinensis": {
    appearance: "小型细长蛇，头部钝圆、眼睛较大，黄褐至棕褐色身体带有深色斜纹或细横纹，腹面较浅。",
    distinguishing: "头钝、眼大、身体细弱且常在夜间缓慢攀爬；颌部不对称适合从蜗牛壳中取食软体。",
    lookalikes: "与其他钝头蛇外观相近，准确分种常需看鳞片和分布；通常不易与粗壮蝰蛇混同。",
  },
  "malayopython-bivittatus": {
    appearance: "大型粗壮蛇，黄褐或灰褐底色上覆盖一系列黑褐色、浅边的大型云状斑，头顶有明显箭头状深纹。",
    distinguishing: "巨大体型、云状大斑和唇部热感窝组合较典型，幼体也具有相似花纹。",
    lookalikes: "幼体可能与其他大型斑纹蛇混淆；无毒不等于无危险，不能围堵或尝试徒手搬移。",
  },
  "trimerodytes-annularis": {
    appearance: "体形中等，背面棕褐、红褐或橄榄色，排列深色横斑或环状斑，腹面淡黄并常带深色点斑。",
    distinguishing: "常在水边活动，身体较圆长，红褐横斑通常不像赤链蛇那样形成强烈红黑对比。",
    lookalikes: "可与赤链蛇、其他水游蛇以及幼年蝮蛇混淆，水生习性不能证明无毒。",
  },
  "orientocoluber-spinalis": {
    appearance: "体形细长，灰褐、橄榄褐或黄褐色背面中央有一条浅黄至黄白色纵纹，两侧可伴较暗纵线或细斑。",
    distinguishing: "贯穿背中线的黄色细纹较有代表性，头后常见深色纹，尾长而尖。",
    lookalikes: "与白条锦蛇名称容易混淆，但白条锦蛇通常还有多条浅纵纹和不规则黑横斑；不要仅按俗名辨认。",
  },
  "achalinus-spinalis": {
    appearance: "小型细长蛇，背面黑褐、紫褐或深灰，鳞片在光线下呈蓝紫虹彩；背中线常有一条细黑线，腹面较浅。",
    distinguishing: "鳞片颗粒感和虹彩光泽较突出，头部小而与颈部区分不明显，尾部细长。",
    lookalikes: "可与其他脊蛇和小型穴居蛇混淆；光泽受拍摄角度影响，不能作为唯一鉴别点。",
  },
};

export const venomFilters = ["全部", "神经毒", "血液/细胞毒", "混合毒素", "肌毒", "后沟牙", "无毒"] as const;
