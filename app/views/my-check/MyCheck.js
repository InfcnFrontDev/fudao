import React, {PureComponent} from "react";
import {ScrollView, DatePickerAndrofield} from "react-native";
import {connect} from "react-redux";
import {ListItem, Body, Right, View, Text, Icon} from "native-base";
import {Container, Content, Separator,Header} from "../../components/index";
import {updateUserCheck} from "../../actions/user";
import {dialogs,toast} from "../../utils/index";

const groups = [
	{
		title: '基本信息',
		tableName:'userInformation',
		items: [
			{
				title: '身高',
				field: 'tops',
				type: 'input',
				limit:'number'
			},
			{
				title: '体重',
				field: 'weight',
				type: 'input',
				limit:'number'
			},
			{
				title: '体重指数',
				field: 'bmi',
				type: 'input',
				limit:'number'
			},
			{
				title: '舒张压/收缩压',
				field: 'blood_pressure',
				type: 'input',
				limit:'percent'
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
				limit:'number'
			},
			{
				title: '谷草转氨酶',
				field: 'ast',
				type: 'input',
				limit:'number'
			},
			{
				title: 'AST/ALT',
				field: 'ast_alt',
				type: 'input',
				limit:'number'
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
				limit:'number'
			},
			{
				title: '甲胎蛋白',
				field: 'afp',
				type: 'input',
				limit:'number'
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
				limit:'number'
			},
			{
				title: 'PH',
				field: 'ph',
				type: 'input',
				limit:'number'
			},
			{
				title: '葡萄糖',
				field: 'glucose',
                type: 'singleChoice',
                items: [
                    '阴性', '阳性'
                ],
				limit:'yinx_yangx'
			},
			{
				title: '酮体',
				field: 'ketone',
                type: 'singleChoice',
                items: [
                    '阴性', '阳性'
                ],
				limit:'yinx_yangx'
			},
			{
				title: '胆红素',
				field: 'bilirubin',
                type: 'singleChoice',
                items: [
                    '阴性', '阳性'
                ],
				limit:'yinx_yangx'
			},
			{
				title: '尿胆原',
				field: 'urinary_bladder',
                type: 'singleChoice',
                items: [
                    '阴性', '阳性'
                ],
				limit:'yinx_yangx'
			},
			{
				title: '潜血',
				field: 'occult_blood',
                type: 'singleChoice',
                items: [
                    '阴性', '阳性'
                ],
				limit:'yinx_yangx'
			},
			{
				title: '尿蛋白',
				field: 'urine_protein',
                type: 'singleChoice',
                items: [
                    '阴性', '阳性'
                ],
				limit:'yinx_yangx'
			},
			{
				title: '亚硝酸盐',
				field: 'nitrite',
                type: 'singleChoice',
                items: [
                    '阴性', '阳性'
                ],
				limit:'yinx_yangx'
			},
			{
				title: '白细胞',
				field: 'white_blood_cellwhite_blood_cell',
                type: 'singleChoice',
                items: [
                    '阴性', '阳性'
                ],
				limit:'yinx_yangx'
			},
			{
				title: '抗坏血栓VC',
				field: 'anti_thrombosis_vc',
                type: 'singleChoice',
                items: [
                    '阴性', '阳性'
                ],
				limit:'yinx_yangx'
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
				limit:'text'
			},
			{
				title: '外耳',
				field: 'external_ear',
				type: 'input',
				limit:'text'
			},
			{
				title: '外耳道',
				field: 'external_auditory_canal',
				type: 'input',
				limit:'text'
			},
			{
				title: '鼓膜',
				field: 'eardrum',
				type: 'input',
				limit:'text'
			},
			{
				title: '外鼻',
				field: 'external_nose',
				type: 'input',
				limit:'text'
			},
			{
				title: '鼻腔',
				field: 'nasal_cavity',
				type: 'input',
				limit:'text'
			},
			{
				title: '咽',
				field: 'pharynx',
				type: 'input',
				limit:'text'
			},
			{
				title: '喉',
				field: 'throat',
				type: 'input',
				limit:'text'
			},
			{
				title: '其他',
				field: 'other',
				type: 'input',
				limit:'text'
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
				limit:'number'
			},
			{
				title: '左眼矫正视力',
				field: 'left_eye',
				type: 'input',
				limit:'number'
			},
			{
				title: '辨色力',
				field: 'color',
                type: 'singleChoice',
                items: [
                    '正常', '色弱','色盲'
                ],
				limit:'zc_sr_sm'
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
				limit:'number'
			},
			{
				title: '淋巴细胞比率(LYM%)',
				field: 'lym_ratio',
				type: 'input',
				limit:'number'
			},
			{
				title: '单核细胞比率(MONO%)',
				field: 'mono_ratio',
				type: 'input',
				limit:'number'
			},
			{
				title: '中性粒细胞比率',
				field: 'gra_ratio',
				type: 'input',
				limit:'number'
			},
			{
				title: '淋巴细胞(LYM)',
				field: 'lym',
				type: 'input',
				limit:'number'
			},
			{
				title: '单核细胞数(MONO)',
				field: 'mono',
				type: 'input',
				limit:'number'
			},
			{
				title: '中性粒细胞(NEUT)',
				field: 'neut',
				type: 'input',
				limit:'number'
			},
			{
				title: '红细胞(RBC)',
				field: 'rbc',
				type: 'input',
				limit:'number'
			},
			{
				title: '红细胞压积(HCT)',
				field: 'hct',
				type: 'input',
				limit:'number'
			},
			{
				title: '平均红细胞体积(MCV)',
				field: 'mcv',
				type: 'input',
				limit:'number'
			},
			{
				title: '红细胞分布宽度(RDW-CV)',
				field: 'rdw_cv',
				type: 'input',
				limit:'number'
			},
			{
				title: '红细胞分布宽度（RDW-SD）',
				field: 'rdw_sd',
				type: 'input',
				limit:'number'
			},
			{
				title: '血红蛋白（HGB）',
				field: 'hgb',
				type: 'input',
				limit:'number'
			},
			{
				title: '平均血红蛋白浓度（MCHC)',
				field: 'mchc',
				type: 'input',
				limit:'number'
			},
			{
				title: '平均血红蛋白含量（MCH）',
				field: 'mch',
				type: 'input',
				limit:'number'
			},
			{
				title: '血小板计数（PLT）',
				field: 'plt',
				type: 'input',
				limit:'number'
			},
			{
				title: '平均血小板体积（MPV)',
				field: 'mpv',
				type: 'input',
				limit:'number'
			},
			{
				title: '血小板压积（PCT）',
				field: 'pct',
				type: 'input',
				limit:'number'
			},
			{
				title: '血小板平均宽度（PDW）',
				field: 'pdw',
				type: 'input',
				limit:'number'
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
				limit:'text'
			},
			{
				title: '口舌',
				field: 'tongue',
				type: 'input',
				limit:'text'
			},
			{
				title: '唇腭',
				field: 'chune',
				type: 'input',
				limit:'text'
			},
			{
				title: '口腔黏膜',
				field: 'oral_mucosa',
				type: 'input',
				limit:'text'
			},
			{
				title: '口腔其他',
				field: 'other',
				type: 'input',
				limit:'text'
			},
			{
				title: '牙齿',
				field: 'tooth',
				type: 'input',
				limit:'text'
			},
			{
				title: '缺失',
				field: 'missing',
				type: 'input',
				limit:'text'
			},
			{
				title: '龋齿',
				field: 'caries',
				type: 'input',
				limit:'text'
			},
			{
				title: '牙周',
				field: 'periodontal',
				type: 'input',
				limit:'text'
			},
			{
				title: '颞下颚关节',
				field: 'temporomandibular_joint',
				type: 'input',
				limit:'text'
			},
			{
				title: '腮腺',
				field: 'parotfield',
				type: 'input',
				limit:'text'
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
				limit:'text'
			},
			{
				title: '胆',
				field: 'bravery',
				type: 'input',
				limit:'text'
			},
			{
				title: '胰',
				field: 'pancreatic',
				type: 'input',
				limit:'text'
			},
			{
				title: '脾',
				field: 'spleen',
				type: 'input',
				limit:'text'
			},
			{
				title: '双肾',
				field: 'kfieldneys',
				type: 'input',
				limit:'text'
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
				limit:'text'
			},
			{
				title: '心率',
				field: 'heart_rate',
				type: 'input',
				limit:'number'
			},
			{
				title: '心音',
				field: 'heart_sound',
				type: 'input',
				limit:'text'
			},
			{
				title: '心界',
				field: 'of_heart',
				type: 'input',
				limit:'text'
			},
			{
				title: '肺',
				field: 'lung',
				type: 'input',
				limit:'text'
			},
			{
				title: '腹部',
				field: 'abdomen',
				type: 'input',
				limit:'text'
			},
			{
				title: '肝脏',
				field: 'liver',
				type: 'input',
				limit:'text'
			},
			{
				title: '胆',
				field: 'bravery',
				type: 'input',
				limit:'text'
			},
			{
				title: '脾脏',
				field: 'spleen',
				type: 'input',
				limit:'text'
			},
			{
				title: '精神及神经',
				field: 'mental_and_neurological',
				type: 'input',
				limit:'text'
			},
			{
				title: '腱反射',
				field: 'tendon_reflexes',
				type: 'input',
				limit:'text'
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
				limit:'number'
			},
			{
				title: '心律',
				field: 'heart_lv',
                type: 'singleChoice',
                items: [
                    '正常', '异常'
                ],
				limit:'zc_yc'
			},
			{
				title: 'P波',
				field: 'p_wave',
                type: 'singleChoice',
                items: [
                    '正常', '异常'
                ],
				limit:'zc_yc'
			},
			{
				title: 'P-R周期',
				field: 'p_r_cycle',
                type: 'singleChoice',
                items: [
                    '正常', '异常'
                ],
				limit:'zc_yc'
			},
			{
				title: 'QRS',
				field: 'qrs',
                type: 'singleChoice',
                items: [
                    '正常', '异常'
                ],
				limit:'zc_yc'
			},
			{
				title: 'ST段',
				field: 'st',
                type: 'singleChoice',
                items: [
                    '正常', '异常'
                ],
				limit:'zc_yc'
			},
			{
				title: 'T波',
				field: 't_wave',
                type: 'singleChoice',
                items: [
                    '正常', '异常'
                ],
				limit:'zc_yc'
			},
			{
				title: '电轴',
				field: 'axis',
                type: 'singleChoice',
                items: [
                    '正常', '异常'
                ],
				limit:'zc_yc'
			},
			{
				title: '节律',
				field: 'rhythm',
                type: 'singleChoice',
                items: [
                    '齐', '不齐'
                ],
				limit:'qi_bqi'
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
				limit:'text'
			},
			{
				title: '皮肤',
				field: 'skin',
				type: 'input',
				limit:'text'
			},
			{
				title: '浅表淋巴结',
				field: 'superficial_lymph_nodes',
				type: 'input',
				limit:'text'
			},
			{
				title: '甲状腺',
				field: 'thyrofield',
				type: 'input',
				limit:'text'
			},
			{
				title: '乳房',
				field: 'breast',
				type: 'input',
				limit:'text'
			},
			{
				title: '脊柱',
				field: 'spine',
				type: 'input',
				limit:'text'
			},
			{
				title: '四肢关节',
				field: 'limbs',
				type: 'input',
				limit:'text'
			},
			{
				title: '肛门',
				field: 'anus',
				type: 'input',
				limit:'text'
			},
			{
				title: '直肠指诊',
				field: 'digital_rectal_examination',
				type: 'input',
				limit:'text'
			},
			{
				title: '外科其他',
				field: 'other',
				type: 'input',
				limit:'text'
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
				limit:'number'
			},
			{
				title: '甘油三酯',
				field: 'triglycerfielde',
				type: 'input',
				limit:'number'
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
				limit:'number'
			},
			{
				title: '尿酸',
				field: 'uric_acfield',
				type: 'input',
				limit:'number'
			},
			{
				title: '尿素氮',
				field: 'urea_nitrogen',
				type: 'input',
				limit:'number'
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
				limit:'number'
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
				limit:'text'
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
				limit:'text'
			},
			{
				title: '右乳灰影颜色',
				field: 'right_breast_color',
				type: 'input',
				limit:'text'
			},
			{
				title: '右乳灰影边界',
				field: 'right_breast_border',
				type: 'input',
				limit:'text'
			},
			{
				title: '右乳灰影位置',
				field: 'right_breast_position',
				type: 'input',
				limit:'text'
			},
			{
				title: '右乳灰影压痛',
				field: 'right_breast_tenderness',
				type: 'input',
				limit:'text'
			},
			{
				title: '右乳血管',
				field: 'right_breast_vascular',
				type: 'input',
				limit:'text'
			},
			{
				title: '右乳头形状',
				field: 'right_breast_shape',
				type: 'input',
				limit:'text'
			},
			{
				title: '右乳头泌液',
				field: 'right_breast_exudate',
				type: 'input',
				limit:'text'
			},
			{
				title: '左乳',
				field: 'left_breast',
				type: 'input',
				limit:'text'
			},
			{
				title: '左乳灰影颜色',
				field: 'left_breast_color',
				type: 'input',
				limit:'text'
			},
			{
				title: '左乳灰影边界',
				field: 'left_breast_border',
				type: 'input',
				limit:'text'
			},
			{
				title: '左乳灰影位置',
				field: 'left_breast_position',
				type: 'input',
				limit:'text'
			},
			{
				title: '左乳灰影压痛',
				field: 'left_breast_tenderness',
				type: 'input',
				limit:'text'
			},
			{
				title: '左乳血管',
				field: 'left_breast_vascular',
				type: 'input',
				limit:'text'
			},
			{
				title: '左乳头形状',
				field: 'left_breast_shape',
				type: 'input',
				limit:'text'
			},
			{
				title: '左乳头泌液',
				field: 'left_breast_exudate',
				type: 'input',
				limit:'text'
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
					<ScrollView removeClippedSubviews={true}>
						{groups.map(group => this.renderGroup(group))}
					</ScrollView>
				</Content>
			</Container>
		);
	}

	renderGroup(group) {

		return (
			<View key={group.title} style={{overflow:'hidden'}}>
				<Separator title={group.title}/>
				<View>
					{group.items.map(item => this.renderItem(item,group))}
				</View>
			</View>
		)
	}

	renderItem(item,group) {
        let {loginUser} = this.props;
        let tab = loginUser[group.tableName];
        let text = '';
        if (tab != undefined) {
            switch(item.limit){
                case ("zc_yc"):
                    if (tab[item.field] == 0) {
                        text = (
                            "正常"
                        )
                    } else {
                        text = (
                            "异常"
                        )
                    }
                    break;
                case ("zc_sr_sm"):
                    if (tab[item.field] == 0) {
                        text = (
                            "正常"
                        )
                    } else if (tab[item.field] == 1) {
                        text = (
                            "色弱"
                        )
                    } else {
                        text = (
                            "色盲"
                        )
                    }
                    break;
                case ("qi_bqi"):
                    if (tab[item.field] == 0) {
                        text = (
                            "齐"
                        )
                    } else {
                        text = (
                            "不齐"
                        )
                    };
                    break;
                case ("yinx_yangx"):
                    if (tab[item.field] == 0) {
                        text = (
                            "阴性"
                        )
                    } else {
                        text = (
                            "阳性"
                        )
                    };
                    break;
                default:
                    text = (
                        tab[item.field]
                    )
            }
        }
            return (
                <ListItem key={item.title} icon onPress={() => this.editItem(item, group)}>
                    <Body>
                    <Text>{item.title}</Text>
                    </Body>
                    <Right>
                        <Text note>{text}</Text>
                        <Icon active name="ios-arrow-forward"/>
                    </Right>
                </ListItem>
            )
    }
	editItem(item,group) {

		let {dispatch, loginUser} = this.props;
        let tab=loginUser[group.tableName];

		 if (item.type == 'input') {
			dialogs.showDialog({
				title: item.title,
				input: {
					hint: item.title,
					prefill:"",
					allowEmptyInput: false,
					keyboardType:'numeric',
					maxLength: 10,
					callback: (id, text) => this._yanzheng(loginUser.appid, item.field, group.tableName,id,item.limit)
				}
			});

		}else if (item.type == 'singleChoice') {
            let selectedIndex = 0;
			let index='';
            try {
                let value = tab[item.field];
                selectedIndex = _.isNumber(value) ? value : 0;
            } catch (e) {
            }

            dialogs.showDialog({
                title: item.title,
                items: item.items,
                selectedIndex: selectedIndex,
                itemsCallbackSingleChoice: (id, text) => dispatch(updateUserCheck(loginUser.appid, item.field, group.tableName, id,item.limit))
            })
        }
	}
	_yanzheng(appid,field,tableName,id,limit){
        let {dispatch} = this.props;
	    if(limit=='number'){
            if(this.reg("^[0-9]*$",id)){
                 dispatch(updateUserCheck(appid,field,tableName,id))
            }else{
                toast.show("请输入数字")
            }
        }else if(limit=='text'){
            dispatch(updateUserCheck(appid,field,tableName,id))
        }else if(limit=='percent'){
            this.reg("^[0-9]*\/[0-9]*$",id)
            if(this.reg("^[0-9]*\/[0-9]*$",id)){
                dispatch(updateUserCheck(appid,field,tableName,id))
            }else{
                toast.show("请输入,高压/低压")
            }
        }

    }
    reg(zhengze,value){
        var re =new RegExp(zhengze);
        var result=  re.test(value);
        if(!result){
            return false;
        }else{
            return true ;
        }
    }
}

const styles = {
	content: {backgroundColor: '#FFF'}
};

const mapStateToProps = state => ({
	loginUser: state.user.loginUser
});
export default connect(mapStateToProps)(MyCheck);
