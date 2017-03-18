import React, {PureComponent} from "react";
import {ScrollView, DatePickerAndrofield} from "react-native";
import {connect} from "react-redux";
import {ListItem, Body, Right, View, Text, Icon} from "native-base";
import {Container, Content, Separator} from "../../components/index";
import Header from "../../components/header/BaseHeader";
import {updateUserCheck} from "../../actions/user";
import {dialogs} from "../../utils/index";
import _ from "lodash";

const groups = [
	{
		title: '基本信息',
		tableName:'userInformation',
		items: [
			{
				title: '身高',
				field: 'tops',
				type: 'input',
			},
			{
				title: '体重',
				field: 'weight',
				type: 'input',
			},
			{
				title: '体重指数',
				field: 'bmi',
				type: 'input',
			},
			{
				title: '舒张压/收缩压',
				field: 'blood_pressure',
				type: 'input',
			}
		]
	},
	{
		title: '肝胆功能',
		tableName:'liverAndGallbladder',
		items: [
			{
				title: '谷丙转氨酶',
				field: 'alanine_aminotransferase',
				type: 'input',
			},
			{
				title: '谷草转氨酶',
				field: 'ast',
				type: 'input',
			},
			{
				title: 'AST/ALT',
				field: 'ast_alt',
				type: 'input',
			},
		]
	},
	{
		title: '肿瘤标志物',
		tableName:'tumorMarker',
		items: [
			{
				title: '癌胚抗原',
				field: 'cea',
				type: 'input',
			},
			{
				title: '甲胎蛋白',
				field: 'afp',
				type: 'input',
			},
		]
	},
	{
		title: '尿常规',
		tableName:'urineRoutine',
		items: [
			{
				title: '比重',
				field: 'proportion',
				type: 'input',
			},
			{
				title: 'PH',
				field: 'ph',
				type: 'input',
			},
			{
				title: '葡萄糖',
				field: 'glucose',
                type: 'singleChoice',
                items: [
                    '阴性', '阳性'
                ],
			},
			{
				title: '酮体',
				field: 'ketone',
                type: 'singleChoice',
                items: [
                    '阴性', '阳性'
                ],
			},
			{
				title: '胆红素',
				field: 'bilirubin',
                type: 'singleChoice',
                items: [
                    '阴性', '阳性'
                ],
			},
			{
				title: '尿胆原',
				field: 'urinary_bladder',
                type: 'singleChoice',
                items: [
                    '阴性', '阳性'
                ],
			},
			{
				title: '潜血',
				field: 'occult_blood',
                type: 'singleChoice',
                items: [
                    '阴性', '阳性'
                ],
			},
			{
				title: '尿蛋白',
				field: 'urine_protein',
                type: 'singleChoice',
                items: [
                    '阴性', '阳性'
                ],
			},
			{
				title: '亚硝酸盐',
				field: 'nitrite',
                type: 'singleChoice',
                items: [
                    '阴性', '阳性'
                ],
			},
			{
				title: '白细胞',
				field: 'white_blood_cellwhite_blood_cell',
                type: 'singleChoice',
                items: [
                    '阴性', '阳性'
                ],
			},
			{
				title: '抗坏血栓VC',
				field: 'anti_thrombosis_vc',
                type: 'singleChoice',
                items: [
                    '阴性', '阳性'
                ],
			}
		]
	},
	{
		title: '耳鼻喉科',
		tableName:'otolaryngology',
		items: [
			{
				title: '听力',
				field: 'hearing',
				type: 'input',
			},
			{
				title: '外耳',
				field: 'external_ear',
				type: 'input',
			},
			{
				title: '外耳道',
				field: 'external_auditory_canal',
				type: 'input',
			},
			{
				title: '鼓膜',
				field: 'eardrum',
				type: 'input',
			},
			{
				title: '外鼻',
				field: 'external_nose',
				type: 'input',
			},
			{
				title: '鼻腔',
				field: 'nasal_cavity',
				type: 'input',
			},
			{
				title: '咽',
				field: 'pharynx',
				type: 'input',
			},
			{
				title: '喉',
				field: 'throat',
				type: 'input',
			},
			{
				title: '其他',
				field: 'other',
				type: 'input',
			},
		]
	},
	{
		title: '眼科',
		tableName:'ophthalmology',
		items: [
			{
				title: '右眼矫正视力',
				field: 'right_eye',
				type: 'input',
			},
			{
				title: '左眼矫正视力',
				field: 'left_eye',
				type: 'input',
			},
			{
				title: '辨色力',
				field: 'color',
                type: 'singleChoice',
                items: [
                    '正常', '色弱','色盲'
                ],
			}
		]
	},
	{
		title: '血常规',
		tableName:'routineBloodTest',
		items: [
			{
				title: '白细胞（WBC)',
				field: 'wbc',
				type: 'input',
			},
			{
				title: '淋巴细胞比率(LYM%)',
				field: 'lym_ratio',
				type: 'input',
			},
			{
				title: '单核细胞比率(MONO%)',
				field: 'mono_ratio',
				type: 'input',
			},
			{
				title: '中性粒细胞比率',
				field: 'gra_ratio',
				type: 'input',
			},
			{
				title: '淋巴细胞(LYM)',
				field: 'lym',
				type: 'input',
			},
			{
				title: '单核细胞数(MONO)',
				field: 'mono',
				type: 'input',
			},
			{
				title: '中性粒细胞(NEUT)',
				field: 'neut',
				type: 'input',
			},
			{
				title: '红细胞(RBC)',
				field: 'rbc',
				type: 'input',
			},
			{
				title: '红细胞压积(HCT)',
				field: 'hct',
				type: 'input',
			},
			{
				title: '平均红细胞体积(MCV)',
				field: 'mcv',
				type: 'input',
			},
			{
				title: '红细胞分布宽度(RDW-CV)',
				field: 'rdw_cv',
				type: 'input',
			},
			{
				title: '红细胞分布宽度（RDW-SD）',
				field: 'rdw_sd',
				type: 'input',
			},
			{
				title: '血红蛋白（HGB）',
				field: 'hgb',
				type: 'input',
			},
			{
				title: '平均血红蛋白浓度（MCHC)',
				field: 'mchc',
				type: 'input',
			},
			{
				title: '平均血红蛋白含量（MCH）',
				field: 'mch',
				type: 'input',
			},
			{
				title: '血小板计数（PLT）',
				field: 'plt',
				type: 'input',
			},
			{
				title: '平均血小板体积（MPV)',
				field: 'mpv',
				type: 'input',
			},
			{
				title: '血小板压积（PCT）',
				field: 'pct',
				type: 'input',
			},
			{
				title: '血小板平均宽度（PDW）',
				field: 'pdw',
				type: 'input',
			}
		]
	},
	{
		title: '口腔科',
		tableName:'dentalDepartment',
		items: [
			{
				title: '颜面',
				field: 'face',
				type: 'input',
			},
			{
				title: '口舌',
				field: 'tongue',
				type: 'input',
			},
			{
				title: '唇腭',
				field: 'chune',
				type: 'input',
			},
			{
				title: '口腔黏膜',
				field: 'oral_mucosa',
				type: 'input',
			},
			{
				title: '口腔其他',
				field: 'other',
				type: 'input',
			},
			{
				title: '牙齿',
				field: 'tooth',
				type: 'input',
			},
			{
				title: '缺失',
				field: 'missing',
				type: 'input',
			},
			{
				title: '龋齿',
				field: 'caries',
				type: 'input',
			},
			{
				title: '牙周',
				field: 'periodontal',
				type: 'input',
			},
			{
				title: '颞下颚关节',
				field: 'temporomandibular_joint',
				type: 'input',
			},
			{
				title: '腮腺',
				field: 'parotfield',
				type: 'input',
			}
		]
	},
	{
		title: 'CT',
		tableName:'ct',
		items: [
			{
				title: '肝',
				field: 'liver',
				type: 'input',
			},
			{
				title: '胆',
				field: 'bravery',
				type: 'input',
			},
			{
				title: '胰',
				field: 'pancreatic',
				type: 'input',
			},
			{
				title: '脾',
				field: 'spleen',
				type: 'input',
			},
			{
				title: '双肾',
				field: 'kfieldneys',
				type: 'input',
			}
		]
	},
	{
		title: '内科',
		tableName:'medicalDepartment',
		items: [
			{
				title: '既往病史',
				field: 'past_history',
				type: 'input',
			},
			{
				title: '心率',
				field: 'heart_rate',
				type: 'input',
			},
			{
				title: '心音',
				field: 'heart_sound',
				type: 'input',
			},
			{
				title: '心界',
				field: 'of_heart',
				type: 'input',
			},
			{
				title: '肺',
				field: 'lung',
				type: 'input',
			},
			{
				title: '腹部',
				field: 'abdomen',
				type: 'input',
			},
			{
				title: '肝脏',
				field: 'liver',
				type: 'input',
			},
			{
				title: '胆',
				field: 'bravery',
				type: 'input',
			},
			{
				title: '脾脏',
				field: 'spleen',
				type: 'input',
			},
			{
				title: '精神及神经',
				field: 'mental_and_neurological',
				type: 'input',
			},
			{
				title: '腱反射',
				field: 'tendon_reflexes',
				type: 'input',
			}
		]
	},
	{
		title: '心电图',
		tableName:'ecg',
		items: [
			{
				title: '心率',
				field: 'heart_rate',
				type: 'input',
			},
			{
				title: '心律',
				field: 'heart_lv',
                type: 'singleChoice',
                items: [
                    '正常', '异常'
                ],
			},
			{
				title: 'P波',
				field: 'p_wave',
                type: 'singleChoice',
                items: [
                    '正常', '异常'
                ],
			},
			{
				title: 'P-R周期',
				field: 'p_r_cycle',
                type: 'singleChoice',
                items: [
                    '正常', '异常'
                ],
			},
			{
				title: 'QRS',
				field: 'qrs',
                type: 'singleChoice',
                items: [
                    '正常', '异常'
                ],
			},
			{
				title: 'ST段',
				field: 'st',
                type: 'singleChoice',
                items: [
                    '正常', '异常'
                ],
			},
			{
				title: 'T波',
				field: 't_wave',
                type: 'singleChoice',
                items: [
                    '正常', '异常'
                ],
			},
			{
				title: '电轴',
				field: 'axis',
                type: 'singleChoice',
                items: [
                    '正常', '异常'
                ],
			},
			{
				title: '节律',
				field: 'rhythm',
                type: 'singleChoice',
                items: [
                    '齐', '不齐'
                ],
			}
		]
	},
	{
		title: '外科',
		tableName:'surgical',
		items: [
			{
				title: '既往病史',
				field: 'past_history',
				type: 'input',
			},
			{
				title: '皮肤',
				field: 'skin',
				type: 'input',
			},
			{
				title: '浅表淋巴结',
				field: 'superficial_lymph_nodes',
				type: 'input',
			},
			{
				title: '甲状腺',
				field: 'thyrofield',
				type: 'input',
			},
			{
				title: '乳房',
				field: 'breast',
				type: 'input',
			},
			{
				title: '脊柱',
				field: 'spine',
				type: 'input',
			},
			{
				title: '四肢关节',
				field: 'limbs',
				type: 'input',
			},
			{
				title: '肛门',
				field: 'anus',
				type: 'input',
			},
			{
				title: '直肠指诊',
				field: 'digital_rectal_examination',
				type: 'input',
			},
			{
				title: '外科其他',
				field: 'other',
				type: 'input',
			}
		]
	},
	{
		title: '血脂类',
		tableName:'lipfieldClass',
		items: [
			{
				title: '总胆固醇',
				field: 'total_cholesterol',
				type: 'input',
			},
			{
				title: '甘油三酯',
				field: 'triglycerfielde',
				type: 'input',
			}
		]
	},
	{
		title: '肾功能',
		tableName:'renalFunction',
		items: [
			{
				title: '肌酐',
				field: 'creatinine',
				type: 'input',
			},
			{
				title: '尿酸',
				field: 'uric_acfield',
				type: 'input',
			},
			{
				title: '尿素氮',
				field: 'urea_nitrogen',
				type: 'input',
			}
		]
	},
	{
		title: '血糖类',
		tableName:'bloodGlucose',
		items: [
			{
				title: '空腹血糖',
				field: 'fasting_blood_glucose',
				type: 'input',
			}
		]
	},
	{
		title: 'X光',
		tableName:'xray',
		items: [
			{
				title: '胸部透视',
				field: 'chest_fluoroscopy',
				type: 'input',
			}
		]
	},
	{
		title: '乳腺远红外线',
		tableName:'breastFarInfrared',
		items: [
			{
				title: '右乳',
				field: 'right_breast_color',
				type: 'input',
			},
			{
				title: '右乳灰影颜色',
				field: 'right_breast_color',
				type: 'input',
			},
			{
				title: '右乳灰影边界',
				field: 'right_breast_border',
				type: 'input',
			},
			{
				title: '右乳灰影位置',
				field: 'right_breast_position',
				type: 'input',
			},
			{
				title: '右乳灰影压痛',
				field: 'right_breast_tenderness',
				type: 'input',
			},
			{
				title: '右乳血管',
				field: 'right_breast_vascular',
				type: 'input',
			},
			{
				title: '右乳头形状',
				field: 'right_breast_shape',
				type: 'input',
			},
			{
				title: '右乳头泌液',
				field: 'right_breast_exudate',
				type: 'input',
			},
			{
				title: '左乳',
				field: 'left_breast',
				type: 'input',
			},
			{
				title: '左乳灰影颜色',
				field: 'left_breast_color',
				type: 'input',
			},
			{
				title: '左乳灰影边界',
				field: 'left_breast_border',
				type: 'input',
			},
			{
				title: '左乳灰影位置',
				field: 'left_breast_position',
				type: 'input',
			},
			{
				title: '左乳灰影压痛',
				field: 'left_breast_tenderness',
				type: 'input',
			},
			{
				title: '左乳血管',
				field: 'left_breast_vascular',
				type: 'input',
			},
			{
				title: '左乳头形状',
				field: 'left_breast_shape',
				type: 'input',
			},
			{
				title: '左乳头泌液',
				field: 'left_breast_exudate',
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
					{group.items.map(item => this.renderItem(item,group))}
				</View>
			</View>
		)
	}

	renderItem(item,group) {
		let {loginUser} = this.props;
		return (
			<ListItem key={item.title} icon onPress={() => this.editItem(item,group)}>
				<Body>
				<Text>{item.title}</Text>
				</Body>
				<Right>
					<Text note>{loginUser[item.field]}</Text>
					<Icon active name="ios-arrow-forward"/>
				</Right>
			</ListItem>
		)
	}

	editItem(item,group) {
		let {dispatch, loginUser} = this.props;
		 if (item.type == 'input') {
			dialogs.showDialog({
				title: item.title,
				input: {
					hint: item.title,
					prefill:loginUser[item.field],
					allowEmptyInput: false,
					maxLength: 10,
					callback: (id, text) => dispatch(updateUserCheck(loginUser.appid, item.field, group.tableName, id))
				}
			});

		}else if (item.type == 'singleChoice') {
            let selectedIndex = 0;

            try {
                let value = loginUser[item.field];
                selectedIndex = _.isNumber(value) ? value : 0;
            } catch (e) {
            }

            dialogs.showDialog({
                title: item.title,
                items: item.items,
                selectedIndex: selectedIndex,
                itemsCallbackSingleChoice: (id, text) => dispatch(updateUserCheck(loginUser.appid, item.field, group.tableName, id))
            })
        }
	}

}

const styles = {
	content: {backgroundColor: '#FFF'},
}

const mapStateToProps = state => ({
	loginUser: state.user.loginUser
});
export default connect(mapStateToProps)(MyCheck);
