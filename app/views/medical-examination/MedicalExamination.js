import React, {PureComponent} from "react";
import {ScrollView, DatePickerAndrofield, ListView} from "react-native";
import {observer} from "mobx-react/native";
import {ListItem, Body, Right, Text, Icon} from "native-base";
import {Container, Content, Separator, Header, Loading} from "../../components/index";
import medicalExaminationStore from "../../mobx/medicalExaminationStore";
let rowsData = {
		"基本信息": [
			{
				"unit": "mmhg",
				"name": "收缩压/舒张压",
				"inputType": "4",
				"id": "4"
			},
			{
				"unit": "kg/m⌃2",
				"name": "体重指数",
				"inputType": "1",
				"id": "3"
			},
			{
				"unit": "kg",
				"name": "体重",
				"inputType": "1",
				"id": "2"
			},
			{
				"unit": "cm",
				"name": "身高",
				"inputType": "1",
				"id": "1"
			},
			{
				"unit": "U/L",
				"name": "谷丙转氨酶",
				"inputType": "1",
				"id": "5"
			}
		],
		"肝胆功能": [
			{
				"unit":"",
				"name": "AST/ALT",
				"inputType": "1",
				"id": "7"
			},
			{
				"unit": "U/L",
				"name": "谷草转氨酶",
				"inputType": "1",
				"id": "6"
			},
			{
				"unit": "ng/ml",
				"name": "甲胎蛋白（AFP）",
				"inputType": "1",
				"id": "9"
			}
		],
		"肿瘤标志物": [
			{
				"unit": "ng/ml",
				"name": "癌胚抗原（CEA）",
				"inputType": "1",
				"id": "8"
			},
			{
				"unit": "",
				"name": "抗坏血栓VC",
				"inputType": "3",
				"id": "20",
				"items": [
					"阴性",
					"阳性"
				]
			}
		],
		"尿常规": [
			{
				"unit": "",
				"name": "葡萄糖",
				"inputType": "3",
				"id": "12",
				"items": [
					"阴性",
					"阳性"
				]
			},
			{
				"unit": "",
				"name": "尿蛋白",
				"inputType": "3",
				"id": "17",
				"items": [
					"阴性",
					"阳性"
				]
			},
			{
				"unit": "",
				"name": "PH",
				"inputType": "1",
				"id": "11"
			},
			{
				"unit": "",
				"name": "酮体",
				"inputType": "3",
				"id": "13",
				"items": [
					"阴性",
					"阳性"
				]
			},
			{
				"unit": "",
				"name": "比重",
				"inputType": "1",
				"id": "10"
			},
			{
				"unit": "",
				"name": "潜血",
				"inputType": "3",
				"id": "16",
				"items": [
					"阴性",
					"阳性"
				]
			},
			{
				"unit": "",
				"name": "白细胞",
				"inputType": "3",
				"id": "19",
				"items": [
					"阴性",
					"阳性"
				]
			},
			{
				"unit": "",
				"name": "尿胆原",
				"inputType": "3",
				"id": "15",
				"items": [
					"阴性",
					"阳性"
				]
			},
			{
				"unit": "",
				"name": "亚硝酸盐",
				"inputType": "3",
				"id": "18",
				"items": [
					"阴性",
					"阳性"
				]
			},
			{
				"unit": "",
				"name": "胆红素",
				"inputType": "3",
				"id": "14",
				"items": [
					"阴性",
					"阳性"
				]
			},
			{
				"unit": "",
				"name": "咽",
				"inputType": "2",
				"id": "27"
			}
		],
		"耳鼻喉科": [
			{
				"unit": "",
				"name": "外耳道",
				"inputType": "2",
				"id": "23"
			},
			{
				"unit": "",
				"name": "鼻腔",
				"inputType": "2",
				"id": "26"
			},
			{
				"unit": "",
				"name": "外耳",
				"inputType": "2",
				"id": "22"
			},
			{
				"unit": "",
				"name": "其他",
				"inputType": "2",
				"id": "29"
			},
			{
				"unit": "",
				"name": "外鼻",
				"inputType": "2",
				"id": "25"
			},
			{
				"unit": "",
				"name": "听力",
				"inputType": "2",
				"id": "21"
			},
			{
				"unit": "",
				"name": "喉",
				"inputType": "2",
				"id": "28"
			},
			{
				"unit": "",
				"name": "鼓膜",
				"inputType": "2",
				"id": "24"
			},
			{
				"unit": "",
				"name": "辨色力",
				"inputType": "3",
				"id": "32",
				"items": [
					"正常",
					"色弱",
					"色盲"
				]
			}
		],
		"眼科": [
			{
				"unit": "",
				"name": "左眼矫正视力",
				"inputType": "1",
				"id": "31"
			},
			{
				"unit": "",
				"name": "右眼矫正视力",
				"inputType": "1",
				"id": "30"
			},
			{
				"unit": "*10⌃9/L",
				"name": "白细胞（WBC)",
				"inputType": "1",
				"id": "33"
			}
		],
		"血常规": [
			{
				"unit": "g/dL",
				"name": "平均血红蛋白浓度（MCHC)",
				"inputType": "1",
				"id": "46"
			},
			{
				"unit": "%",
				"name": "中性粒细胞比率",
				"inputType": "1",
				"id": "36"
			},
			{
				"unit": "fL",
				"name": "平均红细胞体积(MCV)",
				"inputType": "1",
				"id": "42"
			},
			{
				"unit": "fL",
				"name": "平均血小板体积（MPV)",
				"inputType": "1",
				"id": "49"
			},
			{
				"unit": "*10⌃9/L",
				"name": "中性粒细胞(NEUT)",
				"inputType": "1",
				"id": "39"
			},
			{
				"unit": "g/L",
				"name": "血红蛋白（HGB）",
				"inputType": "1",
				"id": "45"
			},
			{
				"unit": "fL",
				"name": "血小板平均宽度（PDW）",
				"inputType": "1",
				"id": "51"
			},
			{
				"unit": "%",
				"name": "单核细胞比率(MONO%)",
				"inputType": "1",
				"id": "35"
			},
			{
				"unit": "%",
				"name": "红细胞压积(HCT)",
				"inputType": "1",
				"id": "41"
			},
			{
				"unit": "*10⌃9/L",
				"name": "血小板计数（PLT）",
				"inputType": "1",
				"id": "48"
			},
			{
				"unit": "*10⌃9/L",
				"name": "单核细胞数(MONO)",
				"inputType": "1",
				"id": "38"
			},
			{
				"unit": "fL",
				"name": "红细胞分布宽度（RDW-SD",
				"inputType": "1",
				"id": "44"
			},
			{
				"unit": "%",
				"name": "血小板压积（PCT）",
				"inputType": "1",
				"id": "50"
			},
			{
				"unit": "%",
				"name": "淋巴细胞比率(LYM%)",
				"inputType": "1",
				"id": "34"
			},
			{
				"unit": "*10⌃12/L",
				"name": "红细胞(RBC)",
				"inputType": "1",
				"id": "40"
			},
			{
				"unit": "Pq",
				"name": "平均血红蛋白含量（MCH）",
				"inputType": "1",
				"id": "47"
			},
			{
				"unit": "*10⌃9/L",
				"name": "淋巴细胞(LYM)",
				"inputType": "1",
				"id": "37"
			},
			{
				"unit": "%",
				"name": "红细胞分布宽度(RDW-CV)",
				"inputType": "1",
				"id": "43"
			},
			{
				"unit": "",
				"name": "口腔其他",
				"inputType": "2",
				"id": "56"
			}
		],
		"口腔科": [
			{
				"unit": "",
				"name": "腮腺",
				"inputType": "2",
				"id": "62"
			},
			{
				"unit": "",
				"name": "颜面",
				"inputType": "2",
				"id": "52"
			},
			{
				"unit": "",
				"name": "龋齿",
				"inputType": "2",
				"id": "59"
			},
			{
				"unit": "",
				"name": "口腔黏膜",
				"inputType": "2",
				"id": "55"
			},
			{
				"unit": "",
				"name": "颞下颚关节",
				"inputType": "2",
				"id": "61"
			},
			{
				"unit": "",
				"name": "缺失",
				"inputType": "2",
				"id": "58"
			},
			{
				"unit": "",
				"name": "唇腭",
				"inputType": "2",
				"id": "54"
			},
			{
				"unit": "",
				"name": "牙周",
				"inputType": "2",
				"id": "60"
			},
			{
				"unit": "",
				"name": "牙齿",
				"inputType": "2",
				"id": "57"
			},
			{
				"unit": "",
				"name": "口舌",
				"inputType": "2",
				"id": "53"
			},
			{
				"unit": "",
				"name": "胰",
				"inputType": "2",
				"id": "65"
			}
		],
		"CT": [
			{
				"unit": "",
				"name": "胆",
				"inputType": "2",
				"id": "64"
			},
			{
				"unit": "",
				"name": "双肾",
				"inputType": "2",
				"id": "67"
			},
			{
				"unit": "",
				"name": "肝",
				"inputType": "2",
				"id": "63"
			},
			{
				"unit": "",
				"name": "脾",
				"inputType": "2",
				"id": "66"
			},
			{
				"unit": "次/分",
				"name": "心率",
				"inputType": "1",
				"id": "69"
			}
		],
		"内科": [
			{
				"unit": "",
				"name": "胆",
				"inputType": "2",
				"id": "75"
			},
			{
				"unit": "",
				"name": "心界",
				"inputType": "2",
				"id": "71"
			},
			{
				"unit": "",
				"name": "腱反射",
				"inputType": "2",
				"id": "78"
			},
			{
				"unit": "",
				"name": "既往病史",
				"inputType": "2",
				"id": "68"
			},
			{
				"unit": "",
				"name": "肝脏",
				"inputType": "2",
				"id": "74"
			},
			{
				"unit": "",
				"name": "心音",
				"inputType": "2",
				"id": "70"
			},
			{
				"unit": "",
				"name": "精神及神经",
				"inputType": "2",
				"id": "77"
			},
			{
				"unit": "",
				"name": "腹部",
				"inputType": "2",
				"id": "73"
			},
			{
				"unit": "",
				"name": "脾脏",
				"inputType": "2",
				"id": "76"
			},
			{
				"unit": "",
				"name": "肺",
				"inputType": "2",
				"id": "72"
			},
			{
				"unit": "",
				"name": "T波",
				"inputType": "3",
				"id": "85",
				"items": [
					"正常",
					"异常"
				]
			}
		],
		"心电图": [
			{
				"unit": "",
				"name": "P波",
				"inputType": "3",
				"id": "81",
				"items": [
					"正常",
					"异常"
				]
			},
			{
				"unit": "",
				"name": "ST段",
				"inputType": "3",
				"id": "84",
				"items": [
					"正常",
					"异常"
				]
			},
			{
				"unit": "",
				"name": "心律",
				"inputType": "3",
				"id": "80",
				"items": [
					"正常",
					"异常"
				]
			},
			{
				"unit": "",
				"name": "节律",
				"inputType": "3",
				"id": "87",
				"items": [
					"齐",
					"不齐"
				]
			},
			{
				"unit": "",
				"name": "QRS",
				"inputType": "3",
				"id": "83",
				"items": [
					"正常",
					"异常"
				]
			},
			{
				"unit": "",
				"name": "电轴",
				"inputType": "3",
				"id": "86",
				"items": [
					"正常",
					"异常"
				]
			},
			{
				"unit": "",
				"name": "P-R周期",
				"inputType": "3",
				"id": "82",
				"items": [
					"正常",
					"异常"
				]
			},
			{
				"unit": "次/分",
				"name": "心率",
				"inputType": "1",
				"id": "79"
			},
			{
				"unit": "",
				"name": "甲状腺",
				"inputType": "2",
				"id": "91"
			}
		],
		"外科": [
			{
				"unit": "",
				"name": "既往病史",
				"inputType": "2",
				"id": "88"
			},
			{
				"unit": "",
				"name": "四肢关节",
				"inputType": "2",
				"id": "94"
			},
			{
				"unit": "",
				"name": "浅表淋巴结",
				"inputType": "2",
				"id": "90"
			},
			{
				"unit": "",
				"name": "外科其他",
				"inputType": "2",
				"id": "97"
			},
			{
				"unit": "",
				"name": "脊柱",
				"inputType": "2",
				"id": "93"
			},
			{
				"unit": "",
				"name": "直肠指诊",
				"inputType": "2",
				"id": "96"
			},
			{
				"unit": "",
				"name": "乳房",
				"inputType": "2",
				"id": "92"
			},
			{
				"unit": "",
				"name": "皮肤",
				"inputType": "2",
				"id": "89"
			},
			{
				"unit": "",
				"name": "肛门",
				"inputType": "2",
				"id": "95"
			},
			{
				"unit": "mmol/L",
				"name": "总胆固醇",
				"inputType": "1",
				"id": "98"
			}
		],
		"血脂类": [
			{
				"unit": "mmol/L",
				"name": "甘油三酯",
				"inputType": "1",
				"id": "99"
			},
			{
				"unit": "umol/L",
				"name": "肌酐",
				"inputType": "1",
				"id": "100"
			}
		],
		"肾功能": [
			{
				"unit": "mmol/L",
				"name": "尿素氮",
				"inputType": "1",
				"id": "102"
			},
			{
				"unit": "umol/L",
				"name": "尿酸",
				"inputType": "1",
				"id": "101"
			},
			{
				"unit": "mmol/L",
				"name": "空腹血糖",
				"inputType": "1",
				"id": "103"
			}
		],
		"血糖类": [
			{
				"unit": "",
				"name": "右乳灰影颜色",
				"inputType": "2",
				"id": "107",
				"value": "吧"
			}
		],
		"X光": [
			{
				"unit": "",
				"name": "右乳头泌液",
				"inputType": "2",
				"id": "113",
				"value": "你"
			},
			{
				"unit": "",
				"name": "左乳灰影边界",
				"inputType": "2",
				"id": "116",
				"value": "得到"
			},
			{
				"unit": "",
				"name": "右乳",
				"inputType": "2",
				"id": "106",
				"value": "恩恩恩恩"
			},
			{
				"unit": "",
				"name": "右乳头形状",
				"inputType": "2",
				"id": "112",
				"value": "的"
			},
			{
				"unit": "",
				"name": "左乳血管",
				"inputType": "2",
				"id": "119",
				"value": "地"
			},
			{
				"unit": "",
				"name": "右乳灰影位置",
				"inputType": "2",
				"id": "109",
				"value": "左边"
			},
			{
				"unit": "",
				"name": "左乳灰影颜色",
				"inputType": "2",
				"id": "115",
				"value": "别"
			},
			{
				"unit": "",
				"name": "左乳头泌液",
				"inputType": "2",
				"id": "121",
				"value": "恩"
			},
			{
				"unit": "",
				"name": "乳腺远红外线",
				"inputType": "2",
				"id": "105"
			},
			{
				"unit": "",
				"name": "右乳血管",
				"inputType": "2",
				"id": "111",
				"value": "吧发达了"
			},
			{
				"unit": "",
				"name": "左乳灰影压痛",
				"inputType": "2",
				"id": "118",
				"value": "不"
			},
			{
				"unit": "",
				"name": "右乳灰影边界",
				"inputType": "2",
				"id": "108"
			},
			{
				"unit": "",
				"name": "左乳",
				"inputType": "2",
				"id": "114",
				"value": "Bbb"
			},
			{
				"unit": "",
				"name": "左乳头形状",
				"inputType": "2",
				"id": "120",
				"value": "大"
			},
			{
				"unit": "",
				"name": "胸部透视",
				"inputType": "2",
				"id": "104",
				"value": "不"
			},
			{
				"unit": "",
				"name": "右乳灰影压痛",
				"inputType": "2",
				"id": "110",
				"value": "Hhh"
			},
			{
				"unit": "",
				"name": "左乳灰影位置",
				"inputType": "2",
				"id": "117"
			}
		]
	};
let cc={
		"基本信息": [
			{
				"unit": "mmhg",
				"name": "收缩压/舒张压",
				"inputType": "4",
				"id": "4"
			},
			{
				"unit": "kg/m⌃2",
				"name": "体重指数",
				"inputType": "1",
				"id": "3"
			},
			{
				"unit": "kg",
				"name": "体重",
				"inputType": "1",
				"id": "2",
				"value": "50"
			},
			{
				"unit": "cm",
				"name": "身高",
				"inputType": "1",
				"id": "1"
			}
		],
		"肝胆功能": [
			{
				"unit": "U/L",
				"name": "谷草转氨酶",
				"inputType": "1",
				"id": "6"
			},
			{
				"unit": "U/L",
				"name": "谷丙转氨酶",
				"inputType": "1",
				"id": "5"
			},
			{
				"unit": "",
				"name": "AST/ALT",
				"inputType": "1",
				"id": "7"
			}
		],
		"肿瘤标志物": [
			{
				"unit": "ng/ml",
				"name": "甲胎蛋白（AFP）",
				"inputType": "1",
				"id": "9"
			},
			{
				"unit": "ng/ml",
				"name": "癌胚抗原（CEA）",
				"inputType": "1",
				"id": "8"
			}
		],
		"尿常规": [
			{
				"unit": "",
				"name": "胆红素",
				"inputType": "3",
				"id": "14",
				"items": [
					"阴性",
					"阳性"
				]
			},
			{
				"unit": "",
				"name": "抗坏血栓VC",
				"inputType": "3",
				"id": "20",
				"items": [
					"阴性",
					"阳性"
				]
			},
			{
				"unit": "",
				"name": "葡萄糖",
				"inputType": "3",
				"id": "12",
				"items": [
					"阴性",
					"阳性"
				]
			},
			{
				"unit": "",
				"name": "尿蛋白",
				"inputType": "3",
				"id": "17",
				"items": [
					"阴性",
					"阳性"
				]
			},
			{
				"unit": "",
				"name": "PH",
				"inputType": "1",
				"id": "11"
			},
			{
				"unit": "",
				"name": "酮体",
				"inputType": "3",
				"id": "13",
				"items": [
					"阴性",
					"阳性"
				]
			},
			{
				"unit": "",
				"name": "比重",
				"inputType": "1",
				"id": "10"
			},
			{
				"unit": "",
				"name": "潜血",
				"inputType": "3",
				"id": "16",
				"items": [
					"阴性",
					"阳性"
				]
			},
			{
				"unit": "",
				"name": "白细胞",
				"inputType": "3",
				"id": "19",
				"items": [
					"阴性",
					"阳性"
				]
			},
			{
				"unit": "",
				"name": "尿胆原",
				"inputType": "3",
				"id": "15",
				"items": [
					"阴性",
					"阳性"
				]
			},
			{
				"unit": "",
				"name": "亚硝酸盐",
				"inputType": "3",
				"id": "18",
				"items": [
					"阴性",
					"阳性"
				]
			}
		],
		"耳鼻喉科": [
			{
				"unit": "",
				"name": "鼓膜",
				"inputType": "2",
				"id": "24"
			},
			{
				"unit": "",
				"name": "咽",
				"inputType": "2",
				"id": "27"
			},
			{
				"unit": "",
				"name": "外耳道",
				"inputType": "2",
				"id": "23"
			},
			{
				"unit": "",
				"name": "鼻腔",
				"inputType": "2",
				"id": "26"
			},
			{
				"unit": "",
				"name": "外耳",
				"inputType": "2",
				"id": "22"
			},
			{
				"unit": "",
				"name": "其他",
				"inputType": "2",
				"id": "29"
			},
			{
				"unit": "",
				"name": "外鼻",
				"inputType": "2",
				"id": "25"
			},
			{
				"unit": "",
				"name": "听力",
				"inputType": "2",
				"id": "21"
			},
			{
				"unit": "",
				"name": "喉",
				"inputType": "2",
				"id": "28"
			}
		],
		"眼科": [
			{
				"unit": "",
				"name": "右眼矫正视力",
				"inputType": "1",
				"id": "30"
			},
			{
				"unit": "",
				"name": "辨色力",
				"inputType": "3",
				"id": "32",
				"items": [
					"正常",
					"色弱",
					"色盲"
				]
			},
			{
				"unit": "",
				"name": "左眼矫正视力",
				"inputType": "1",
				"id": "31"
			}
		],
		"血常规": [
			{
				"unit": "*10⌃9/L",
				"name": "淋巴细胞(LYM)",
				"inputType": "1",
				"id": "37"
			},
			{
				"unit": "%",
				"name": "红细胞分布宽度(RDW-CV)",
				"inputType": "1",
				"id": "43"
			},
			{
				"unit": "*10⌃9/L",
				"name": "白细胞（WBC)",
				"inputType": "1",
				"id": "33"
			},
			{
				"unit": "g/dL",
				"name": "平均血红蛋白浓度（MCHC)",
				"inputType": "1",
				"id": "46"
			},
			{
				"unit": "%",
				"name": "中性粒细胞比率",
				"inputType": "1",
				"id": "36"
			},
			{
				"unit": "fL",
				"name": "平均红细胞体积(MCV)",
				"inputType": "1",
				"id": "42"
			},
			{
				"unit": "fL",
				"name": "平均血小板体积（MPV)",
				"inputType": "1",
				"id": "49"
			},
			{
				"unit": "*10⌃9/L",
				"name": "中性粒细胞(NEUT)",
				"inputType": "1",
				"id": "39"
			},
			{
				"unit": "g/L",
				"name": "血红蛋白（HGB）",
				"inputType": "1",
				"id": "45"
			},
			{
				"unit": "fL",
				"name": "血小板平均宽度（PDW）",
				"inputType": "1",
				"id": "51"
			},
			{
				"unit": "%",
				"name": "单核细胞比率(MONO%)",
				"inputType": "1",
				"id": "35"
			},
			{
				"unit": "%",
				"name": "红细胞压积(HCT)",
				"inputType": "1",
				"id": "41"
			},
			{
				"unit": "*10⌃9/L",
				"name": "血小板计数（PLT）",
				"inputType": "1",
				"id": "48"
			},
			{
				"unit": "*10⌃9/L",
				"name": "单核细胞数(MONO)",
				"inputType": "1",
				"id": "38"
			},
			{
				"unit": "fL",
				"name": "红细胞分布宽度（RDW-SD",
				"inputType": "1",
				"id": "44"
			},
			{
				"unit": "%",
				"name": "血小板压积（PCT）",
				"inputType": "1",
				"id": "50"
			},
			{
				"unit": "%",
				"name": "淋巴细胞比率(LYM%)",
				"inputType": "1",
				"id": "34"
			},
			{
				"unit": "*10⌃12/L",
				"name": "红细胞(RBC)",
				"inputType": "1",
				"id": "40"
			},
			{
				"unit": "Pq",
				"name": "平均血红蛋白含量（MCH）",
				"inputType": "1",
				"id": "47"
			}
		],
		"口腔科": [
			{
				"unit": "",
				"name": "口舌",
				"inputType": "2",
				"id": "53"
			},
			{
				"unit": "",
				"name": "口腔其他",
				"inputType": "2",
				"id": "56"
			},
			{
				"unit": "",
				"name": "腮腺",
				"inputType": "2",
				"id": "62"
			},
			{
				"unit": "",
				"name": "颜面",
				"inputType": "2",
				"id": "52"
			},
			{
				"unit": "",
				"name": "龋齿",
				"inputType": "2",
				"id": "59"
			},
			{
				"unit": "",
				"name": "口腔黏膜",
				"inputType": "2",
				"id": "55"
			},
			{
				"unit": "",
				"name": "颞下颚关节",
				"inputType": "2",
				"id": "61"
			},
			{
				"unit": "",
				"name": "缺失",
				"inputType": "2",
				"id": "58"
			},
			{
				"unit": "",
				"name": "唇腭",
				"inputType": "2",
				"id": "54"
			},
			{
				"unit": "",
				"name": "牙周",
				"inputType": "2",
				"id": "60"
			},
			{
				"unit": "",
				"name": "牙齿",
				"inputType": "2",
				"id": "57"
			}
		],
		"CT": [
			{
				"unit": "",
				"name": "脾",
				"inputType": "2",
				"id": "66"
			},
			{
				"unit": "",
				"name": "胰",
				"inputType": "2",
				"id": "65"
			},
			{
				"unit": "",
				"name": "胆",
				"inputType": "2",
				"id": "64"
			},
			{
				"unit": "",
				"name": "双肾",
				"inputType": "2",
				"id": "67"
			},
			{
				"unit": "",
				"name": "肝",
				"inputType": "2",
				"id": "63"
			}
		],
		"内科": [
			{
				"unit": "",
				"name": "心音",
				"inputType": "2",
				"id": "70"
			},
			{
				"unit": "",
				"name": "精神及神经",
				"inputType": "2",
				"id": "77"
			},
			{
				"unit": "",
				"name": "腹部",
				"inputType": "2",
				"id": "73"
			},
			{
				"unit": "",
				"name": "脾脏",
				"inputType": "2",
				"id": "76"
			},
			{
				"unit": "",
				"name": "肺",
				"inputType": "2",
				"id": "72"
			},
			{
				"unit": "",
				"name": "既往病史",
				"inputType": "2",
				"id": "68"
			},
			{
				"unit": "次/分",
				"name": "心率",
				"inputType": "1",
				"id": "69"
			},
			{
				"unit": "",
				"name": "胆",
				"inputType": "2",
				"id": "75"
			},
			{
				"unit": "",
				"name": "心界",
				"inputType": "2",
				"id": "71"
			},
			{
				"unit": "",
				"name": "腱反射",
				"inputType": "2",
				"id": "78"
			},
			{
				"unit": "",
				"name": "肝脏",
				"inputType": "2",
				"id": "74"
			}
		],
		"心电图": [
			{
				"unit": "",
				"name": "节律",
				"inputType": "3",
				"id": "87",
				"items": [
					"齐",
					"不齐"
				]
			},
			{
				"unit": "",
				"name": "QRS",
				"inputType": "3",
				"id": "83",
				"items": [
					"正常",
					"异常"
				]
			},
			{
				"unit": "",
				"name": "电轴",
				"inputType": "3",
				"id": "86",
				"items": [
					"正常",
					"异常"
				]
			},
			{
				"unit": "",
				"name": "P-R周期",
				"inputType": "3",
				"id": "82",
				"items": [
					"正常",
					"异常"
				]
			},
			{
				"unit": "次/分",
				"name": "心率",
				"inputType": "1",
				"id": "79"
			},
			{
				"unit": "",
				"name": "T波",
				"inputType": "3",
				"id": "85",
				"items": [
					"正常",
					"异常"
				]
			},
			{
				"unit": "",
				"name": "P波",
				"inputType": "3",
				"id": "81",
				"items": [
					"正常",
					"异常"
				]
			},
			{
				"unit": "",
				"name": "ST段",
				"inputType": "3",
				"id": "84",
				"items": [
					"正常",
					"异常"
				]
			},
			{
				"unit": "",
				"name": "心律",
				"inputType": "3",
				"id": "80",
				"items": [
					"正常",
					"异常"
				]
			}
		],
		"外科": [
			{
				"unit": "",
				"name": "脊柱",
				"inputType": "2",
				"id": "93"
			},
			{
				"unit": "",
				"name": "直肠指诊",
				"inputType": "2",
				"id": "96"
			},
			{
				"unit": "",
				"name": "乳房",
				"inputType": "2",
				"id": "92"
			},
			{
				"unit": "",
				"name": "皮肤",
				"inputType": "2",
				"id": "89"
			},
			{
				"unit": "",
				"name": "肛门",
				"inputType": "2",
				"id": "95"
			},
			{
				"unit": "",
				"name": "甲状腺",
				"inputType": "2",
				"id": "91"
			},
			{
				"unit": "",
				"name": "既往病史",
				"inputType": "2",
				"id": "88"
			},
			{
				"unit": "",
				"name": "四肢关节",
				"inputType": "2",
				"id": "94"
			},
			{
				"unit": "",
				"name": "浅表淋巴结",
				"inputType": "2",
				"id": "90"
			},
			{
				"unit": "",
				"name": "外科其他",
				"inputType": "2",
				"id": "97"
			}
		],
		"血脂类": [
			{
				"unit": "mmol/L",
				"name": "甘油三酯",
				"inputType": "1",
				"id": "99"
			},
			{
				"unit": "mmol/L",
				"name": "总胆固醇",
				"inputType": "1",
				"id": "98"
			}
		],
		"肾功能": [
			{
				"unit": "umol/L",
				"name": "肌酐",
				"inputType": "1",
				"id": "100"
			},
			{
				"unit": "mmol/L",
				"name": "尿素氮",
				"inputType": "1",
				"id": "102"
			},
			{
				"unit": "umol/L",
				"name": "尿酸",
				"inputType": "1",
				"id": "101"
			}
		],
		"血糖类": [
			{
				"unit": "mmol/L",
				"name": "空腹血糖",
				"inputType": "1",
				"id": "103"
			}
		],
		"X光": [
			{
				"unit": "",
				"name": "胸部透视",
				"inputType": "2",
				"id": "104",
				"value": "不"
			},
			{
				"unit": "",
				"name": "右乳灰影压痛",
				"inputType": "2",
				"id": "110",
				"value": "Hhh"
			},
			{
				"unit": "",
				"name": "左乳灰影位置",
				"inputType": "2",
				"id": "117"
			},
			{
				"unit": "",
				"name": "右乳灰影颜色",
				"inputType": "2",
				"id": "107",
				"value": "吧"
			},
			{
				"unit": "",
				"name": "右乳头泌液",
				"inputType": "2",
				"id": "113",
				"value": "你"
			},
			{
				"unit": "",
				"name": "左乳灰影边界",
				"inputType": "2",
				"id": "116",
				"value": "得到"
			},
			{
				"unit": "",
				"name": "右乳",
				"inputType": "2",
				"id": "106",
				"value": "恩恩恩恩"
			},
			{
				"unit": "",
				"name": "右乳头形状",
				"inputType": "2",
				"id": "112",
				"value": "的"
			},
			{
				"unit": "",
				"name": "左乳血管",
				"inputType": "2",
				"id": "119",
				"value": "地"
			},
			{
				"unit": "",
				"name": "右乳灰影位置",
				"inputType": "2",
				"id": "109",
				"value": "左边"
			},
			{
				"unit": "",
				"name": "左乳灰影颜色",
				"inputType": "2",
				"id": "115",
				"value": "别"
			},
			{
				"unit": "",
				"name": "左乳头泌液",
				"inputType": "2",
				"id": "121",
				"value": "恩"
			},
			{
				"unit": "",
				"name": "乳腺远红外线",
				"inputType": "2",
				"id": "105"
			},
			{
				"unit": "",
				"name": "右乳血管",
				"inputType": "2",
				"id": "111",
				"value": "吧发达了"
			},
			{
				"unit": "",
				"name": "左乳灰影压痛",
				"inputType": "2",
				"id": "118",
				"value": "不"
			},
			{
				"unit": "",
				"name": "右乳灰影边界",
				"inputType": "2",
				"id": "108"
			},
			{
				"unit": "",
				"name": "左乳",
				"inputType": "2",
				"id": "114",
				"value": "Bbb"
			},
			{
				"unit": "",
				"name": "左乳头形状",
				"inputType": "2",
				"id": "120",
				"value": "大"
			}
		]
	}
/**
 * 体检信息
 */
@observer
export default class MedicalExamination extends PureComponent {

	state = {
		dataSource: new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2,
			sectionHeaderHasChanged: (section1, section2) => section1 !== section2,
		})
	}
	componentDidMount() {
		medicalExaminationStore.fetchMedicalExaminationList()
	}


	render() {
		const {isFetching, medicalExaminationList} = medicalExaminationStore;
		if(!medicalExaminationList)
			return null;
		return (
			<Container>
				<Header {...this.props}/>
				<Content delay white>
					{!isFetching &&
					<ListView
						dataSource={this.state.dataSource.cloneWithRowsAndSections(medicalExaminationList)}
						renderRow={this._renderRow.bind(this)}
						initialListSize={12}
						pageSize={20}
						renderSectionHeader={this._renderSectionHeader.bind(this)}
						enableEmptySections
					/>
					}
					<Loading isShow={isFetching}/>
				</Content>
			</Container>
		)
	}

	_renderRow(rowData, sectionId, rowId) {
		let {medicalExaminationList} = medicalExaminationStore;
		return (
			<ListItem
				key={rowData.id}
				icon
				onPress={() => this.editItem(rowData, sectionId)}
				last={rowId == medicalExaminationList[sectionId].length - 1}
			>
				<Body>
				<Text style={{fontSize: theme.fontSizeH5}}>{rowData.name}</Text>
				</Body>
				<Right>
					<Text note>{rowData.value}</Text>
					<Icon active name="ios-arrow-forward"/>
				</Right>
			</ListItem>
		)
	}

	_renderSectionHeader(sectionData, sectionID) {
		return (
			<Separator title={sectionID}/>
		)
	}

	editItem(item, group) {
		if(item.items)
			if(item.items[0]=="阴性"){
				item.limit= 'yinx_yangx';
			}else if(item.items[1]=="色弱"){
				item.limit='zc_sr_sm';
			}else if(item.items[1]=="异常"){
				item.limit='zc_yc';
			}else if(item.items[1]=="齐"||item.items[1]=="不齐"){
				item.limit='qi_bqi';
			}
		if (item.inputType =="1") {
			tools.showDialog({
				title: item.name,
				input: {
					hint: item.name,
					prefill: "",
					allowEmptyInput: false,
					keyboardType:'numeric',
					maxLength: 10,
					callback: (id, text) => this._yanzheng(id,item.id, item.inputType)
				}
			});
		}else if (item.inputType =="2") {
			tools.showDialog({
				title: item.name,
				input: {
					hint: item.name,
					prefill: "",
					allowEmptyInput: false,
					keyboardType: 'default',
					maxLength: 10,
					callback: (id, text) => this._yanzheng(id,item.id, item.inputType)
				}
			});
		} else if (item.inputType == "3") {
			let selectedIndex = 0;
			let value = item.value;
			if(value=="阴性"||value=="正常"||value=="齐"){
				selectedIndex=0
			}else if(value=="阳性"||value=="异常"||value=="色弱"||value=="不齐"){
				selectedIndex=1
			}else if(value=="色盲"){
				selectedIndex=2
			}
			tools.showDialog({
				title: item.name,
				items: item.items,
				selectedIndex: selectedIndex,
				itemsCallbackSingleChoice: (id, text) =>  this._singleChoice(id,item.id, item.limit)
			})
		}
	}

	_yanzheng(id,Id,inputType) {
		if (inputType == '1') {
			if (this.reg("^[0-9]*$", id)) {
				medicalExaminationStore.updataMedicalExamination(Id,id);
			} else {
				tools.showToast("请输入数字")
			}
		} else if (inputType == '2') {
			medicalExaminationStore.updataMedicalExamination(Id,id)
		} else if (inputType == '4') {
			this.reg("^[0-9]*\/[0-9]*$", id)
			if (this.reg("^[0-9]*\/[0-9]*$", id)) {
				medicalExaminationStore.updataMedicalExamination(Id,id)
			} else {
				tools.showToast("请输入,高压/低压")
			}
		}

	}
	_singleChoice(id,Id,limit){
		let value;
		if(limit== 'yinx_yangx'){
			if(id==0){
				value="阴性"
			}else{
				value="阳性"
			}
		}else if(limit=='zc_sr_sm'){
			if(id==0){
				value="正常"
			}else if(id==1) {
				value="色弱"
			}else{
				value="色盲"
			}
		}else if(limit=='zc_yc'){
			if(id==0){
				value="正常"
			}else{
				value="异常"
			}
		}else if(limit=='qi_bqi'){
			if(id==0){
				value="齐"
			}else{
				value="不齐"
			}
		}
		medicalExaminationStore.updataMedicalExamination(Id,value)
	}
	reg(zhengze, value) {
		var re = new RegExp(zhengze);
		var result = re.test(value);
		if (!result) {
			return false;
		} else {
			return true;
		}
	}
}

const styles = {};
