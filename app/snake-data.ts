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
    id: "orthriophis-taeniurus", name: "黑眉锦蛇", latin: "Orthriophis taeniurus", family: "游蛇科", risk: "无毒", toxicity: "无毒", venomClass: "none",
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
    id: "orientocoluber-spinalis", name: "白条锦蛇", latin: "Orientocoluber spinalis", family: "游蛇科", risk: "无毒", toxicity: "无毒", venomClass: "none",
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
];

export const venomFilters = ["全部", "神经毒", "血液/细胞毒", "混合毒素", "肌毒", "后沟牙", "无毒"] as const;

