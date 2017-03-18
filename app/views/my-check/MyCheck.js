import React, {PureComponent} from "react";
import {ScrollView, DatePickerAndroid} from "react-native";
import {connect} from "react-redux";
import {ListItem, Body, Right, View, Text, Icon} from "native-base";
import {Container, Content, Header, Separator} from "../../components/index";
import {updateUserInfo} from "../../actions/user";
import {dialogs} from "../../utils/index";

const groups = [
	{
		title: '基本信息',
		items: [
			{
				title: '身高',
				id: 'tops',
				type: 'input',
			},
			{
				title: '体重',
				id: 'weight',
				type: 'input',
			},
			{
				title: '体重指数',
				id: 'bmi',
				type: 'input',
			},
			{
				title: '舒张压/收缩压',
				id: 'blood_pressure',
				type: 'input',
			}
		]
	},
	{
		title: '肝胆功能',
		items: [
			{
				title: '谷丙转氨酶',
				id: 'alanine_aminotransferase',
				type: 'input',
			},
			{
				title: '谷草转氨酶',
				id: 'ast',
				type: 'input',
			},
			{
				title: 'AST/ALT',
				id: 'ast_alt',
				type: 'input',
			},
		]
	},
	{
		title: '肿瘤标志物',
		items: [
			{
				title: '癌胚抗原',
				id: 'cea',
				type: 'input',
			},
			{
				title: '甲胎蛋白',
				id: 'afp',
				type: 'input',
			},
		]
	},
	{
		title: '尿常规',
		items: [
			{
				title: '比重',
				id: 'proportion',
				type: 'input',
			},
			{
				title: 'PH',
				id: 'ph',
				type: 'input',
			},
			{
				title: '葡萄糖',
				id: 'glucose',
				type: 'input',
			},
			{
				title: '酮体',
				id: 'ketone',
				type: 'input',
			},
			{
				title: '胆红素',
				id: 'bilirubin',
				type: 'input',
			},
			{
				title: '尿胆原',
				id: 'urinary_bladder',
				type: 'input',
			},
			{
				title: '潜血',
				id: 'occult_blood',
				type: 'input',
			},
			{
				title: '尿蛋白',
				id: 'urine_protein',
				type: 'input',
			},
			{
				title: '亚硝酸盐',
				id: 'nitrite',
				type: 'input',
			},
			{
				title: '白细胞',
				id: 'white_blood_cellwhite_blood_cell',
				type: 'input',
			},
			{
				title: '抗坏血栓VC',
				id: 'anti_thrombosis_vc',
				type: 'input',
			}
		]
	},
	{
		title: '耳鼻喉科',
		items: [
			{
				title: '听力',
				id: 'hearing',
				type: 'input',
			},
			{
				title: '外耳',
				id: 'external_ear',
				type: 'input',
			},
			{
				title: '外耳道',
				id: 'external_auditory_canal',
				type: 'input',
			},
			{
				title: '鼓膜',
				id: 'eardrum',
				type: 'input',
			},
			{
				title: '外鼻',
				id: 'external_nose',
				type: 'input',
			},
			{
				title: '鼻腔',
				id: 'nasal_cavity',
				type: 'input',
			},
			{
				title: '咽',
				id: 'pharynx',
				type: 'input',
			},
			{
				title: '喉',
				id: 'throat',
				type: 'input',
			},
			{
				title: '其他',
				id: 'other',
				type: 'input',
			},
		]
	},
	{
		title: '眼科',
		items: [
			{
				title: '右眼矫正视力',
				id: 'right_eye',
				type: 'input',
			},
			{
				title: '左眼矫正视力',
				id: 'left_eye',
				type: 'input',
			},
			{
				title: '辨色力',
				id: 'color',
				type: 'input',
			}
		]
	},
	{
		title: '血常规',
		items: [
			{
				title: '白细胞（WBC)',
				id: 'wbc',
				type: 'input',
			},
			{
				title: '淋巴细胞比率(LYM%)',
				id: 'lym_ratio',
				type: 'input',
			},
			{
				title: '单核细胞比率(MONO%)',
				id: 'mono_ratio',
				type: 'input',
			},
			{
				title: '中性粒细胞比率',
				id: 'gra_ratio',
				type: 'input',
			},
			{
				title: '淋巴细胞(LYM)',
				id: 'lym',
				type: 'input',
			},
			{
				title: '单核细胞数(MONO)',
				id: 'mono',
				type: 'input',
			},
			{
				title: '中性粒细胞(NEUT)',
				id: 'neut',
				type: 'input',
			},
			{
				title: '红细胞(RBC)',
				id: 'rbc',
				type: 'input',
			},
			{
				title: '红细胞压积(HCT)',
				id: 'hct',
				type: 'input',
			},
			{
				title: '平均红细胞体积(MCV)',
				id: 'mcv',
				type: 'input',
			},
			{
				title: '红细胞分布宽度(RDW-CV)',
				id: 'rdw_cv',
				type: 'input',
			},
			{
				title: '红细胞分布宽度（RDW-SD）',
				id: 'rdw_sd',
				type: 'input',
			},
			{
				title: '血红蛋白（HGB）',
				id: 'hgb',
				type: 'input',
			},
			{
				title: '平均血红蛋白浓度（MCHC)',
				id: 'mchc',
				type: 'input',
			},
			{
				title: '平均血红蛋白含量（MCH）',
				id: 'mch',
				type: 'input',
			},
			{
				title: '血小板计数（PLT）',
				id: 'plt',
				type: 'input',
			},
			{
				title: '平均血小板体积（MPV)',
				id: 'mpv',
				type: 'input',
			},
			{
				title: '血小板压积（PCT）',
				id: 'pct',
				type: 'input',
			},
			{
				title: '血小板平均宽度（PDW）',
				id: 'pdw',
				type: 'input',
			}
		]
	},
	{
		title: '口腔科',
		items: [
			{
				title: '颜面',
				id: 'face',
				type: 'input',
			},
			{
				title: '口舌',
				id: 'tongue',
				type: 'input',
			},
			{
				title: '唇腭',
				id: 'chune',
				type: 'input',
			},
			{
				title: '口腔黏膜',
				id: 'oral_mucosa',
				type: 'input',
			},
			{
				title: '口腔其他',
				id: 'other',
				type: 'input',
			},
			{
				title: '牙齿',
				id: 'tooth',
				type: 'input',
			},
			{
				title: '缺失',
				id: 'missing',
				type: 'input',
			},
			{
				title: '龋齿',
				id: 'caries',
				type: 'input',
			},
			{
				title: '牙周',
				id: 'periodontal',
				type: 'input',
			},
			{
				title: '颞下颚关节',
				id: 'temporomandibular_joint',
				type: 'input',
			},
			{
				title: '腮腺',
				id: 'parotid',
				type: 'input',
			}
		]
	},
	{
		title: 'CT',
		items: [
			{
				title: '肝',
				id: 'liver',
				type: 'input',
			},
			{
				title: '胆',
				id: 'bravery',
				type: 'input',
			},
			{
				title: '胰',
				id: 'pancreatic',
				type: 'input',
			},
			{
				title: '脾',
				id: 'spleen',
				type: 'input',
			},
			{
				title: '双肾',
				id: 'kidneys',
				type: 'input',
			}
		]
	},
	{
		title: '内科',
		items: [
			{
				title: '既往病史',
				id: 'past_history',
				type: 'input',
			},
			{
				title: '心率',
				id: 'heart_rate',
				type: 'input',
			},
			{
				title: '心音',
				id: 'heart_sound',
				type: 'input',
			},
			{
				title: '心界',
				id: 'of_heart',
				type: 'input',
			},
			{
				title: '肺',
				id: 'lung',
				type: 'input',
			},
			{
				title: '腹部',
				id: 'abdomen',
				type: 'input',
			},
			{
				title: '肝脏',
				id: 'liver',
				type: 'input',
			},
			{
				title: '胆',
				id: 'bravery',
				type: 'input',
			},
			{
				title: '脾脏',
				id: 'spleen',
				type: 'input',
			},
			{
				title: '精神及神经',
				id: 'mental_and_neurological',
				type: 'input',
			},
			{
				title: '腱反射',
				id: 'tendon_reflexes',
				type: 'input',
			}
		]
	},
	{
		title: '心电图',
		items: [
			{
				title: '心率',
				id: 'heart_rate',
				type: 'input',
			},
			{
				title: '心律',
				id: 'heart_lv',
				type: 'input',
			},
			{
				title: 'P波',
				id: 'p_wave',
				type: 'input',
			},
			{
				title: 'P-R周期',
				id: 'p_r_cycle',
				type: 'input',
			},
			{
				title: 'QRS',
				id: 'qrs',
				type: 'input',
			},
			{
				title: 'ST段',
				id: 'st',
				type: 'input',
			},
			{
				title: 'T波',
				id: 't_wave',
				type: 'input',
			},
			{
				title: '电轴',
				id: 'axis',
				type: 'input',
			},
			{
				title: '节律',
				id: 'rhythm',
				type: 'input',
			}
		]
	},
	{
		title: '外科',
		items: [
			{
				title: '既往病史',
				id: 'past_history',
				type: 'input',
			},
			{
				title: '皮肤',
				id: 'skin',
				type: 'input',
			},
			{
				title: '浅表淋巴结',
				id: 'superficial_lymph_nodes',
				type: 'input',
			},
			{
				title: '甲状腺',
				id: 'thyroid',
				type: 'input',
			},
			{
				title: '乳房',
				id: 'breast',
				type: 'input',
			},
			{
				title: '脊柱',
				id: 'spine',
				type: 'input',
			},
			{
				title: '四肢关节',
				id: 'limbs',
				type: 'input',
			},
			{
				title: '肛门',
				id: 'anus',
				type: 'input',
			},
			{
				title: '直肠指诊',
				id: 'digital_rectal_examination',
				type: 'input',
			},
			{
				title: '外科其他',
				id: 'other',
				type: 'input',
			}
		]
	},
	{
		title: '血脂类',
		items: [
			{
				title: '总胆固醇',
				id: 'total_cholesterol',
				type: 'input',
			},
			{
				title: '甘油三酯',
				id: 'triglyceride',
				type: 'input',
			}
		]
	},
	{
		title: '肾功能',
		items: [
			{
				title: '肌酐',
				id: 'creatinine',
				type: 'input',
			},
			{
				title: '尿酸',
				id: 'uric_acid',
				type: 'input',
			},
			{
				title: '尿素氮',
				id: 'urea_nitrogen',
				type: 'input',
			}
		]
	},
	{
		title: '血糖类',
		items: [
			{
				title: '空腹血糖',
				id: 'fasting_blood_glucose',
				type: 'input',
			}
		]
	},
	{
		title: 'X光',
		items: [
			{
				title: '胸部透视',
				id: 'chest_fluoroscopy',
				type: 'input',
			}
		]
	},
	{
		title: '乳腺远红外线',
		items: [
			{
				title: '右乳',
				id: 'right_breast_color',
				type: 'input',
			},
			{
				title: '右乳灰影颜色',
				id: 'right_breast_color',
				type: 'input',
			},
			{
				title: '右乳灰影边界',
				id: 'right_breast_border',
				type: 'input',
			},
			{
				title: '右乳灰影位置',
				id: 'right_breast_position',
				type: 'input',
			},
			{
				title: '右乳灰影压痛',
				id: 'right_breast_tenderness',
				type: 'input',
			},
			{
				title: '右乳血管',
				id: 'right_breast_vascular',
				type: 'input',
			},
			{
				title: '右乳头形状',
				id: 'right_breast_shape',
				type: 'input',
			},
			{
				title: '右乳头泌液',
				id: 'right_breast_exudate',
				type: 'input',
			},
			{
				title: '左乳',
				id: 'left_breast',
				type: 'input',
			},
			{
				title: '左乳灰影颜色',
				id: 'left_breast_color',
				type: 'input',
			},
			{
				title: '左乳灰影边界',
				id: 'left_breast_border',
				type: 'input',
			},
			{
				title: '左乳灰影位置',
				id: 'left_breast_position',
				type: 'input',
			},
			{
				title: '左乳灰影压痛',
				id: 'left_breast_tenderness',
				type: 'input',
			},
			{
				title: '左乳血管',
				id: 'left_breast_vascular',
				type: 'input',
			},
			{
				title: '左乳头形状',
				id: 'left_breast_shape',
				type: 'input',
			},
			{
				title: '左乳头泌液',
				id: 'left_breast_exudate',
				type: 'input',
			}
		]
	}
];

/**
 * 我的体检信息
 */
class MyCheck extends PureComponent {

	state = {}

	render() {
		let {loginUser} = this.props;
		return (
			<Container>
				<Header {...this.props}/>
				<Content style={styles.content}>
					<ScrollView>
						{groups.map(group => this.renderGroup(group))}
					</ScrollView>
				</Content>
			</Container>
		);
	}

	renderGroup(group) {
		return (
			<View key={group.title}>
				<Separator title={group.title}/>
				<View>
					{group.items.map(item => this.renderItem(item))}
				</View>
			</View>
		)
	}

	renderItem(item) {
		let {loginUser} = this.props;
		return (
			<ListItem key={item.title} icon onPress={() => this.editItem(item)}>
				<Body>
				<Text>{item.title}</Text>
				</Body>
				<Right>
					<Text note>{loginUser[item.id]}</Text>
					<Icon active name="ios-arrow-forward"/>
				</Right>
			</ListItem>
		)
	}

	editItem(item) {
		let {dispatch, loginUser} = this.props;
		 if (item.type == 'input') {
			dialogs.showDialog({
				title: item.title,
				input: {
					hint: item.title,
					prefill: '',
					allowEmptyInput: false,
					maxLength: 10,
					callback: (id, text) => dispatch(updateUserInfo(loginUser.appid, item.id, id))
				}
			});

		}
	}


	substr(str) {
		if (str == '0')
			str = '男';
		if (str == '1')
			str = '女';
		if (str.length > 10)
			str = str.substr(0, 10) + '...';

		return str
	}
}

const styles = {
	content: {backgroundColor: '#FFF'},
}

const mapStateToProps = state => ({
	loginUser: state.user.loginUser
});
export default connect(mapStateToProps)(MyCheck);
