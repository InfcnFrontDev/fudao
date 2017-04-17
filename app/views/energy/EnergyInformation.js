import React, {PureComponent} from "react";
import {View, Image,ScrollView, DeviceEventEmitter,Dimensions,ScrollViewAppRegistry, StyleSheet} from "react-native";
import {connect} from "react-redux";
import {Container, Header, Content, Separator} from "../../components/index";
import {Left, Right, Body, ListItem, Text, Icon,Button,Picker,Radio} from "native-base";
import {theme,request,urls} from '../../utils/index'
import GroupSelectModal from "./components/GroupSelectModal";
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import {toast} from "../../utils/index"

let datas=[
	{
		items: [
			{
				title: "男",
				type: ""
			},
			{
				title: "女",
				type: ""
			}
		],
		name: "性别",
		show_view: 1
	},
	{
		items: [
			{
				title: "阿昌族",
				type: "A"
			},
			{
				title: "白族",
				type: "B"
			},
			{
				title: "保安族",
				type: "B"
			},
			{
				title: "布朗族",
				type: "B"
			},
			{
				title: "布依族",
				type: "B"
			},
			{
				title: "藏族",
				type: "Z"
			},
			{
				title: "朝鲜族",
				type: "C"
			},
			{
				title: "达斡尔族",
				type: "D"
			},
			{
				title: "傣族",
				type: "D"
			},
			{
				title: "德昂族",
				type: "D"
			},
			{
				title: "东乡族",
				type: "D"
			},
			{
				title: "侗族",
				type: "D"
			},
			{
				title: "独龙族",
				type: "D"
			},
			{
				title: "俄罗斯族",
				type: "E"
			},
			{
				title: "鄂伦春族",
				type: "E"
			},
			{
				title: "鄂温克族",
				type: "E"
			},
			{
				title: "高山族",
				type: "G"
			},
			{
				title: "哈尼族",
				type: "H"
			},
			{
				title: "哈萨克族",
				type: "H"
			},
			{
				title: "汉族",
				type: "H"
			},
			{
				title: "赫哲族",
				type: "H"
			},
			{
				title: "回族",
				type: "H"
			},
			{
				title: "基诺族",
				type: "J"
			},
			{
				title: "京族",
				type: "J"
			},
			{
				title: "景颇族",
				type: "J"
			},
			{
				title: "柯尔克孜族",
				type: "K"
			},
			{
				title: "拉祜族",
				type: "L"
			},
			{
				title: "黎族",
				type: "L"
			},
			{
				title: "傈僳族",
				type: "L"
			},
			{
				title: "珞巴族",
				type: "L"
			},
			{
				title: "满族",
				type: "M"
			},
			{
				title: "毛南族",
				type: "M"
			},
			{
				title: "门巴族",
				type: "M"
			},
			{
				title: "蒙古族",
				type: "M"
			},
			{
				title: "苗族",
				type: "M"
			},
			{
				title: "仫佬族",
				type: "M"
			},
			{
				title: "纳西族",
				type: "N"
			},
			{
				title: "怒族",
				type: "N"
			},
			{
				title: "普米族",
				type: "P"
			},
			{
				title: "羌族",
				type: "Q"
			},
			{
				title: "撒拉族",
				type: "S"
			},
			{
				title: "畲族",
				type: "S"
			},
			{
				title: "水族",
				type: "S"
			},
			{
				title: "塔吉克族",
				type: "T"
			},
			{
				title: "塔塔尔族",
				type: "T"
			},
			{
				title: "土家族",
				type: "T"
			},
			{
				title: "土族",
				type: "T"
			},
			{
				title: "佤族",
				type: "W"
			},
			{
				title: "维吾尔族",
				type: "W"
			},
			{
				title: "乌孜别克族",
				type: "W"
			},
			{
				title: "锡伯族",
				type: "X"
			},
			{
				title: "瑶族",
				type: "Y"
			},
			{
				title: "彝族",
				type: "Y"
			},
			{
				title: "仡佬族",
				type: "Y"
			},
			{
				title: "裕固族",
				type: "Y"
			},
			{
				title: "壮族",
				type: "Z"
			}
		],
		name: "民族",
		show_view: 3
	},
	{
		id: "473a39e9-0fba-11e7-9b59-000c293e6828",
		items: [
			{
				title: "安",
				type: "A"
			},
			{
				title: "白",
				type: "B"
			},
			{
				title: "蔡",
				type: "C"
			},
			{
				title: "曹",
				type: "C"
			},
			{
				title: "曾",
				type: "C"
			},
			{
				title: "常",
				type: "C"
			},
			{
				title: "陈",
				type: "C"
			},
			{
				title: "程",
				type: "C"
			},
			{
				title: "崔",
				type: "C"
			},
			{
				title: "戴",
				type: "D"
			},
			{
				title: "邓",
				type: "D"
			},
			{
				title: "丁",
				type: "D"
			},
			{
				title: "董",
				type: "D"
			},
			{
				title: "杜",
				type: "D"
			},
			{
				title: "段",
				type: "D"
			},
			{
				title: "樊",
				type: "F"
			},
			{
				title: "范",
				type: "F"
			},
			{
				title: "方",
				type: "F"
			},
			{
				title: "冯",
				type: "F"
			},
			{
				title: "傅",
				type: "F"
			},
			{
				title: "高",
				type: "G"
			},
			{
				title: "葛",
				type: "G"
			},
			{
				title: "龚",
				type: "G"
			},
			{
				title: "顾",
				type: "G"
			},
			{
				title: "郭",
				type: "G"
			},
			{
				title: "韩",
				type: "H"
			},
			{
				title: "郝",
				type: "H"
			},
			{
				title: "何",
				type: "H"
			},
			{
				title: "贺",
				type: "H"
			},
			{
				title: "洪",
				type: "H"
			},
			{
				title: "侯",
				type: "H"
			},
			{
				title: "胡",
				type: "H"
			},
			{
				title: "黄",
				type: "H"
			},
			{
				title: "贾",
				type: "J"
			},
			{
				title: "江",
				type: "J"
			},
			{
				title: "姜",
				type: "J"
			},
			{
				title: "蒋",
				type: "J"
			},
			{
				title: "金",
				type: "J"
			},
			{
				title: "康",
				type: "J"
			},
			{
				title: "孔",
				type: "K"
			},
			{
				title: "赖",
				type: "L"
			},
			{
				title: "蓝",
				type: "L"
			},
			{
				title: "雷",
				type: "L"
			},
			{
				title: "黎",
				type: "L"
			},
			{
				title: "李",
				type: "L"
			},
			{
				title: "梁",
				type: "L"
			},
			{
				title: "廖",
				type: "L"
			},
			{
				title: "林",
				type: "L"
			},
			{
				title: "刘",
				type: "L"
			},
			{
				title: "龙",
				type: "L"
			},
			{
				title: "卢",
				type: "L"
			},
			{
				title: "鲁",
				type: "L"
			},
			{
				title: "陆",
				type: "L"
			},
			{
				title: "罗",
				type: "L"
			},
			{
				title: "吕",
				type: "L"
			},
			{
				title: "马",
				type: "M"
			},
			{
				title: "毛",
				type: "M"
			},
			{
				title: "孟",
				type: "M"
			},
			{
				title: "莫",
				type: "M"
			},
			{
				title: "倪",
				type: "N"
			},
			{
				title: "聂",
				type: "N"
			},
			{
				title: "牛",
				type: "N"
			},
			{
				title: "潘",
				type: "P"
			},
			{
				title: "庞",
				type: "P"
			},
			{
				title: "彭",
				type: "P"
			},
			{
				title: "齐",
				type: "Q"
			},
			{
				title: "钱",
				type: "Q"
			},
			{
				title: "乔",
				type: "Q"
			},
			{
				title: "秦",
				type: "Q"
			},
			{
				title: "邱",
				type: "Q"
			},
			{
				title: "任",
				type: "R"
			},
			{
				title: "邵",
				type: "S"
			},
			{
				title: "申",
				type: "S"
			},
			{
				title: "沈",
				type: "S"
			},
			{
				title: "施",
				type: "S"
			},
			{
				title: "石",
				type: "S"
			},
			{
				title: "史",
				type: "S"
			},
			{
				title: "宋",
				type: "S"
			},
			{
				title: "苏",
				type: "S"
			},
			{
				title: "孙",
				type: "S"
			},
			{
				title: "谭",
				type: "T"
			},
			{
				title: "汤",
				type: "T"
			},
			{
				title: "唐",
				type: "T"
			},
			{
				title: "陶",
				type: "T"
			},
			{
				title: "田",
				type: "T"
			},
			{
				title: "万",
				type: "W"
			},
			{
				title: "汪",
				type: "W"
			},
			{
				title: "王",
				type: "W"
			},
			{
				title: "韦",
				type: "W"
			},
			{
				title: "魏",
				type: "W"
			},
			{
				title: "温",
				type: "W"
			},
			{
				title: "文",
				type: "W"
			},
			{
				title: "吴",
				type: "W"
			},
			{
				title: "武",
				type: "W"
			},
			{
				title: "夏",
				type: "X"
			},
			{
				title: "向",
				type: "X"
			},
			{
				title: "萧",
				type: "X"
			},
			{
				title: "谢",
				type: "X"
			},
			{
				title: "邢",
				type: "X"
			},
			{
				title: "熊",
				type: "X"
			},
			{
				title: "徐",
				type: "X"
			},
			{
				title: "许",
				type: "X"
			},
			{
				title: "薛",
				type: "X"
			},
			{
				title: "严",
				type: "Y"
			},
			{
				title: "阎",
				type: "Y"
			},
			{
				title: "颜",
				type: "Y"
			},
			{
				title: "杨",
				type: "Y"
			},
			{
				title: "姚",
				type: "Y"
			},
			{
				title: "叶",
				type: "Y"
			},
			{
				title: "易",
				type: "Y"
			},
			{
				title: "殷",
				type: "Y"
			},
			{
				title: "尹",
				type: "Y"
			},
			{
				title: "于",
				type: "Y"
			},
			{
				title: "余",
				type: "Y"
			},
			{
				title: "俞",
				type: "Y"
			},
			{
				title: "袁",
				type: "Y"
			},
			{
				title: "岳",
				type: "Y"
			},
			{
				title: "翟",
				type: "Z"
			},
			{
				title: "张",
				type: "Z"
			},
			{
				title: "章",
				type: "Z"
			},
			{
				title: "赵",
				type: "Z"
			},
			{
				title: "郑",
				type: "Z"
			},
			{
				title: "钟",
				type: "Z"
			},
			{
				title: "周",
				type: "Z"
			},
			{
				title: "朱",
				type: "Z"
			},
			{
				title: "庄",
				type: "Z"
			},
			{
				title: "邹",
				type: "Z"
			}
		],
		name: "姓氏",
		show_view: 3
	},
	{
		id: "473a39f1-0fba-11e7-9b59-000c293e6828",
		items: [
			{
				title: "单身",
				type: ""
			},
			{
				title: "恋爱",
				type: ""
			},
			{
				title: "已婚",
				type: ""
			}
		],
		name: "感情状态",
		show_view: 2
	},
	{
		id: "473a39f9-0fba-11e7-9b59-000c293e6828",
		items: [
			{
				title: "高中",
				type: ""
			},
			{
				title: "本科",
				type: ""
			},
			{
				title: "硕士",
				type: ""
			},
			{
				title: "博士",
				type: ""
			}
		],
		name: "学历",
		show_view: 2
	},
	{
		id: "473a3a01-0fba-11e7-9b59-000c293e6828",
		items: [
			{
				title: "留学",
				type: ""
			},
			{
				title: "一本",
				type: ""
			},
			{
				title: "二本",
				type: ""
			},
			{
				title: "三本",
				type: ""
			},
			{
				title: "专科",
				type: ""
			}
		],
		name: "高校类型",
		show_view: 2
	},
	{
		id: "473a3a09-0fba-11e7-9b59-000c293e6828",
		items: [
			{
				title: "农业",
				type: "农林牧渔业"
			},
			{
				title: "林业",
				type: "农林牧渔业"
			},
			{
				title: "畜牧业",
				type: "农林牧渔业"
			},
			{
				title: "渔业",
				type: "农林牧渔业"
			},
			{
				title: "农林牧渔服务业",
				type: "农林牧渔业"
			},
			{
				title: "煤炭开采和洗选业",
				type: "采矿业"
			},
			{
				title: "石油和天然气开采业",
				type: "采矿业"
			},
			{
				title: "金属矿采选业",
				type: "采矿业"
			},
			{
				title: "非金属矿采选业 ",
				type: "采矿业"
			},
			{
				title: "化学矿采选",
				type: "采矿业"
			},
			{
				title: "其他采矿业 ",
				type: "采矿业"
			},
			{
				title: "农副食品加工业",
				type: "制造业"
			},
			{
				title: "食品饮料制造业",
				type: "制造业"
			},
			{
				title: "烟草制品业",
				type: "制造业"
			},
			{
				title: "纺织及服装鞋帽制造业",
				type: "制造业"
			},
			{
				title: "皮革毛皮羽毛(绒)及其制品业",
				type: "制造业"
			},
			{
				title: "木材加工及木竹藤棕草制品业",
				type: "制造业"
			},
			{
				title: "家具制造业",
				type: "制造业"
			},
			{
				title: "造纸及纸制品业",
				type: "制造业"
			},
			{
				title: "印刷业和记录媒介的复制",
				type: "制造业"
			},
			{
				title: "文教体育用品制造业",
				type: "制造业"
			},
			{
				title: "石油加工炼焦及核燃料加工业",
				type: "制造业"
			},
			{
				title: "化学原料及化学制品制造业",
				type: "制造业"
			},
			{
				title: "医药制造业",
				type: "制造业"
			},
			{
				title: "化学纤维制造业",
				type: "制造业"
			},
			{
				title: "橡胶制品业",
				type: "制造业"
			},
			{
				title: "塑料制品业",
				type: "制造业"
			},
			{
				title: "非金属矿物制品业",
				type: "制造业"
			},
			{
				title: "有色金属冶炼及压延加工业",
				type: "制造业"
			},
			{
				title: "金属制品业",
				type: "制造业"
			},
			{
				title: "设备机械制造业",
				type: "制造业"
			},
			{
				title: "交通运输设备制造业",
				type: "制造业"
			},
			{
				title: "电气机械及器材制造业",
				type: "制造业"
			},
			{
				title: "通信设备计算机及其他电子设备制造业",
				type: "制造业"
			},
			{
				title: "仪器仪表及文化办公用机械制造业",
				type: "制造业"
			},
			{
				title: "工艺品及其他制造业",
				type: "制造业"
			},
			{
				title: "废弃资源和废旧材料回收加工业",
				type: "制造业"
			},
			{
				title: "",
				type: "电力燃气及水的生产和供应业"
			},
			{
				title: "",
				type: "建筑业"
			},
			{
				title: "",
				type: "运输业"
			},
			{
				title: "",
				type: "管道运输业"
			},
			{
				title: "",
				type: "装卸搬运和其他运输服务业"
			},
			{
				title: "",
				type: "仓储业"
			},
			{
				title: "",
				type: "邮政业"
			},
			{
				title: "",
				type: "电信和其他信息传输服务业"
			},
			{
				title: "",
				type: "计算机服务及软件业"
			},
			{
				title: "",
				type: "批发和零售业"
			},
			{
				title: "",
				type: "住宿和餐饮业"
			},
			{
				title: "",
				type: "金融业"
			},
			{
				title: "",
				type: "房地产业"
			},
			{
				title: "",
				type: "租赁和商务服务业"
			},
			{
				title: "",
				type: "科学研究与技术服务业"
			},
			{
				title: "",
				type: "地质勘查业"
			},
			{
				title: "",
				type: "水利、环境和公共设施管理业"
			},
			{
				title: "",
				type: "水利管理业"
			},
			{
				title: "",
				type: "环境和公共设施管理业"
			},
			{
				title: "",
				type: "居民服务和其他服务业"
			},
			{
				title: "",
				type: "教育"
			},
			{
				title: "",
				type: "卫生"
			},
			{
				title: "",
				type: "社会保障业"
			},
			{
				title: "",
				type: "社会福利业"
			},
			{
				title: "",
				type: "新闻出版业"
			},
			{
				title: "",
				type: "广播电视电影和音像业"
			},
			{
				title: "",
				type: "文化艺术业"
			},
			{
				title: "",
				type: "体育"
			},
			{
				title: "",
				type: "娱乐业"
			},
			{
				title: "",
				type: "公共管理和社会组织"
			},
			{
				title: "政治类组织",
				type: "国际组织"
			},
			{
				title: "经济类组织",
				type: "国际组织"
			},
			{
				title: "科技、文化、体育等专业类组织",
				type: "国际组织"
			}
		],
		name: "行业",
		show_view: 3
	},
	{
		id: "473a3a11-0fba-11e7-9b59-000c293e6828",
		items: [
			{
				title: "政府机关及其工作机构负责人",
				type: "企业型"
			},
			{
				title: "司法机关及其工作机构负责人",
				type: "企业型"
			},
			{
				title: "人民代表大会机关及其工作机构负责人",
				type: "企业型"
			},
			{
				title: "街道、乡镇级人大机关及其工作机构负责人",
				type: "企业型"
			},
			{
				title: "中共党组织负责人",
				type: "企业型"
			},
			{
				title: "民主党派组织负责人",
				type: "企业型"
			},
			{
				title: "社会团体组织负责人（各级各类行业、专业协会，民间组织等）",
				type: "企业型"
			},
			{
				title: "工会、共青团、妇联、工商联、组织负责人",
				type: "企业型"
			},
			{
				title: "企业单位及其工作机构负责人",
				type: "企业型"
			},
			{
				title: "事业单位及其工作机构负责人",
				type: "企业型"
			},
			{
				title: "商业工作人员",
				type: "企业型"
			},
			{
				title: "社会科学研究人员",
				type: "研究型"
			},
			{
				title: "自然科学研究人员",
				type: "研究型"
			},
			{
				title: "工程技术人员",
				type: "研究型"
			},
			{
				title: "飞机和船舶技术人员",
				type: "研究型"
			},
			{
				title: "医疗卫生技术人员",
				type: "研究型"
			},
			{
				title: "农林牧副渔技术人员",
				type: "研究型"
			},
			{
				title: "科学技术管理人员",
				type: "研究型"
			},
			{
				title: "经济业务人员",
				type: "研究型"
			},
			{
				title: "体育工作人员",
				type: "研究型"
			},
			{
				title: "政府机关的办事人员",
				type: "常规型"
			},
			{
				title: "司法机关的办事人员",
				type: "常规型"
			},
			{
				title: "中共党的机关的行政办事人员",
				type: "常规型"
			},
			{
				title: "社会团体机构的办事人员",
				type: "常规型"
			},
			{
				title: "行政执行人员和行政业务管理人员",
				type: "常规型"
			},
			{
				title: "行政执行人员和业务管理人员",
				type: "常规型"
			},
			{
				title: "人事行政工作人员",
				type: "常规型"
			},
			{
				title: "文化工作人员",
				type: "常规型"
			},
			{
				title: "文艺工作人员",
				type: "艺术型"
			},
			{
				title: "服务性工作人员",
				type: "现实型"
			},
			{
				title: "生产人员",
				type: "现实型"
			},
			{
				title: "社会工作者",
				type: "社会型"
			},
			{
				title: "法律工作人员",
				type: "社会型"
			},
			{
				title: "教学人员",
				type: "社会型"
			},
			{
				title: "宗教职业者",
				type: "社会型"
			},
			{
				title: "警察",
				type: "社会型"
			},
			{
				title: "军人",
				type: "社会型"
			}
		],
		name: "职业",
		show_view: 3
	},
	{
		id: "473a3a18-0fba-11e7-9b59-000c293e6828",
		items: [
			{
				title: "法学",
				type: ""
			},
			{
				title: "工学",
				type: ""
			},
			{
				title: "公安学",
				type: ""
			},
			{
				title: "国防学",
				type: ""
			},
			{
				title: "教育学",
				type: ""
			},
			{
				title: "经济学",
				type: ""
			},
			{
				title: "军事学",
				type: ""
			},
			{
				title: "理学",
				type: ""
			},
			{
				title: "民族学",
				type: ""
			},
			{
				title: "农学",
				type: ""
			},
			{
				title: "社会学",
				type: ""
			},
			{
				title: "体育学",
				type: ""
			},
			{
				title: "文史学",
				type: ""
			},
			{
				title: "心理学",
				type: ""
			},
			{
				title: "医学",
				type: ""
			},
			{
				title: "艺术类",
				type: ""
			},
			{
				title: "哲学类",
				type: ""
			},
			{
				title: "政治学类",
				type: ""
			}
		],
		name: "专业",
		show_view: 3
	},
	{
		id: "473a3a20-0fba-11e7-9b59-000c293e6828",
		items: [
			{
				title: "佛教",
				type: ""
			},
			{
				title: "基督教",
				type: ""
			},
			{
				title: "伊斯兰教",
				type: ""
			},
			{
				title: "印度教",
				type: ""
			},
			{
				title: "道教",
				type: ""
			},
			{
				title: "无信仰",
				type: ""
			}
		],
		name: "宗教",
		show_view: 2
	},
	{
		id: "473a3a28-0fba-11e7-9b59-000c293e6828",
		items: [
			{
				title: "双亲",
				type: ""
			},
			{
				title: "单亲",
				type: ""
			}
		],
		name: "双亲情况",
		show_view: 1
	},
	{
		id: "473a3a31-0fba-11e7-9b59-000c293e6828",
		items: [
			{
				title: "低收入",
				type: ""
			},
			{
				title: "中产",
				type: ""
			},
			{
				title: "富人",
				type: ""
			}
		],
		name: "家庭情况",
		show_view: 2
	}
]


let getData=[
	{
		"indicator":"性别",
		"value": '女',
	},
	{
		"indicator":"民族",
		"value": '汉',
	},
	{
		"indicator": "姓氏",
		"value": '杨',
	},
	{
		"indicator": "感情状态",
		"value": '恋爱',
	},
	{
		"indicator": "学历",
		"value": '硕士',
	}

	]
/**
 * 我的能量场 > 资料填写
 */
const Item = Picker.Item;
/*let data111 = [
	{
		name: '性别', // 指标名称
		items: [
			'男', '女'
		], // 指标选项
		value: '男',
		type:2
	},
	{
		name: '民族', // 指标名称
		items: [
			'汉', '回'
		], // 指标选项
		value: '汉',
		type:3
	},
	{
		name: '姓氏', // 指标名称
		items: [
			'赵', '钱', '孙', '李', '周', '吴', '郑', '王'
		], // 指标选项
		value: '王',
		type:3
	},
	{
		name: '学历', // 指标名称
		items: [
			'博士', '研究生', '本科', '专科', '高中'
		], // 指标选项
		value: '专科',
		type:1
	},
	{
		name: '高校类型', // 指标名称
		items: [
			'一本', '二本', '三本', '专科'
		], // 指标选项
		value: '一本',
		type:1
	},
	{
		name: '行业', // 指标名称
		items: {
			'农业': [
				'种值', '种值1', '种值2'
			],
			'农业1': [
				'种值', '种值1', '种值2'
			],
			'农业2': [
				'种值', '种值1', '种值2'
			]
		}, // 指标选项, 分组形式
		value: '种值',
		type:3
	},
	{
		name: '职业', // 指标名称
		items: {
			'农业': [
				'种值', '种值1', '种值2'
			],
			'农业1': [
				'种值', '种值1', '种值2'
			],
			'农业2': [
				'种值', '种值1', '种值2'
			]
		}, // 指标选项, 分组形式
		value: '工程师',
		type:3
	},
	{
		name: '专业', // 指标名称
		items: {
			'农业': [
				'种值', '种值1', '种值2'
			],
			'农业1': [
				'种值', '种值1', '种值2'
			],
			'农业2': [
				'种值', '种值1', '种值2'
			]
		}, // 指标选项, 分组形式
		value: '设计',
		type:3
	},
	{
		name: '双亲情况', // 指标名称
		items: [
			'单亲', '双亲'
		], // 指标选项
		value: '双亲',
		type:2
	},
	{
		name: '家庭情况', // 指标名称
		items: [
			'低收入', '中产', '富人'
		], // 指标选项
		value: '低收入',
		type:1
	},
	{
		name: '感情状态', // 指标名称
		items: [
			'单身', '恋爱', '已婚'
		], // 指标选项
		value: '单身',
		type:1
	},
	{
		name: '宗教', // 指标名称
		items: [
			'无信仰','佛教'
		], // 指标选项, 分组形式
		value: '佛教',
		type:1

	},
];*/
class EnergyQuestionnaire extends PureComponent {
	constructor(props){
		 super(props)
		this.select=[];
		 this.state = {
			 selectedItem: undefined,
			 results: {
				 items: []
			 },
			 seleted1:'',
			 selected:this.select,
			 flag:false,
		 }


	}
	componentWillMount(){
		datas.map((item,index)=>{
			this.select[index]={};
			this.select[index].name=item.name
		});
		//获取用户已填写数据
		getData.map((item,index)=>{
			this.select.map((items,indexs)=> {
				if (item.indicator == items.name) {
					this.select[indexs].value = item.value;
				}
			})
		});
		//获取用户已填写数据
		/*request.getJson(urls.apis.ENERGY_GETINFORMATIONRESULT).then((data)=>{
		 data.obj.map((item,index)=>{
			 this.select.map((items,indexs)=> {
				 if (item.indicator == items.name) {
				 this.select[indexs].value = item.value;
			 	}
		 	})
		 });
		},(error)=>{
		})*/

	}

	render() {
        let {selected}=this.state;
		toast.show(JSON.stringify(this.select))
		if(!datas && selected!=[]){
			return (<Container></Container>)
		}else{
			return (
				<Container>
					<Header {...this.props} flag={this.state.flag}/>
					<Content>
						<Separator title={'请填写您的信息'}/>
						<ScrollView>
						{datas.map((item,index)=> this.renderGroup(item,index))}
							<View style={styles.View}>
								<Button style={styles.Btn} onPress={this._submmit.bind(this)}>
									<Text>完整保存</Text>
								</Button>
							</View>
						</ScrollView>
						<GroupSelectModal ref={(e)=>this._groupSelectModal = e}/>

					</Content>
				</Container>
			)
		}
	}
	renderGroup(item,index){
		let {selected}=this.state;
		let num=null;
		if(item.name=="性别"){
			if( this.select[0].value){
				num = this.select[0].value=="男"? 0 :1;
			}
		}else if(item.name=="双亲情况"){
				if( this.select[10].value){
					num = this.select[10].value=="单亲"? 1 :0;
				}
		}
		let ppp=(null);
		if(item.show_view==2){
			ppp=(
			<ListItem style={styles.row}   >
				<Right style={{width:theme.deviceWidth/3*1}}>
					<Text>{item.name+':'}</Text>
				</Right>
				<View style={{width:theme.deviceWidth/3*2,height:20,}} >
					<Picker
						iosHeader="Select one"
						mode="dropdown"
						selectedValue={this.select[index].value}
						onValueChange={(value)=>this.onValueChange(value,index)}
						style={styles.pick}
					>
						{item.items.map((item,index) => this.renderSelectItem(item,index))}
					</Picker>
				</View>
			</ListItem>
				)
		}else if(item.show_view==1){
			ppp=(
				<ListItem style={styles.row}   >
					<Right style={{width:theme.deviceWidth/3*1}}>
						<Text>{item.name+':'}</Text>
					</Right>
					<View style={{width:theme.deviceWidth/3*2}} >
						<RadioGroup
							key={index}
							selectedIndex={num}
							onSelect = {(index,value) => this.onSelect(index, value)}
							style={{flexDirection:'row',alignItems:'center',height:20}} >
							{item.items.map((item,index) => this.renderRadioItem(item,index))}
						</RadioGroup>
					</View>
				</ListItem>
			)
		}else if(item.show_view==3){
			ppp=(
				<ListItem style={styles.row} onPress={() => this.openSelectBox1(index,item)} >
					<Right style={{width:theme.deviceWidth/3*1}}>
						<Text>{selected[index].name+':'}</Text>
					</Right>
					<View style={{width:theme.deviceWidth/3*2}} >
						<View style={{flexDirection:'row',justifyContent:'space-between',flex:1,width:Dimensions.get('window').width/4*3-40}}
						>
							<Left>
								<Text>{this.select[index].value}</Text>
							</Left>
							<Right>
								<Icon active name="ios-arrow-forward"/>
							</Right>
						</View>
					</View>
				</ListItem>
			)
		}
		return(
			<View key={index}>
				{ppp}
			</View>
		)
	}
	openSelectBox1(index,item) {
		this._groupSelectModal.show(item, (rowData) => {
            this.select[index].value=rowData.title;
			this.setState({
				selected: this.select,
				flag:!this.state.flag
			})

		});
	}
	renderRadioItem(item,index) {
		return (
			<RadioButton key={index} value={item.title}>
				<Text>{item.title}</Text>
			</RadioButton>
		)

	}
	renderSelectItem(item,index){
		return (
		<Item label={item.title} key={index} value={item.title}/>
		)
	}
	onSelect(index, value){
		if(value=='男'||value=='女'){
			toast.show(JSON.stringify(index),value)
			this.select[0].value=value
			this.setState({
				selected:this.select
			})
		}else if(value=='单亲'||value=='双亲')

			this.select[10].value=value
			this.setState({
				selected:this.select
			})

	}

	onValueChange (value,index) {
		this.select[index].value=value
		this.setState({
			selected:this.select,
            flag:!this.state.flag
		});
	}
	_submmit(){
		toast.show(JSON.stringify(this.state.selected))
	}

}


const styles = {
	row:{
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center',
		flex:1,
        position:'relative',

	},
	right:{
		flexDirection:'row',
		width:Dimensions.get('window').width/3*2
	},
	View:{
		flexDirection:'row',
		height:80,
		justifyContent:'space-around'
	},
	Btn:{
		marginTop:30,
		width:100,
		height:30,
		justifyContent:'center'
	},
	pick:{
		padding:0,
        top:-14,
	}
};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(EnergyQuestionnaire);
