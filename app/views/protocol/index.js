import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Content, Left, Right, Body, Text, Row, Thumbnail, Col} from "native-base";
import Header from "../../components/header/base";
import styles from "../about/styles";

class Protocol extends Component {

    render() {
        return (
            <Container style={styles.container}>
                <Header title="用户协议"/>
                <Content padder>
                    <Row style={styles.title}>
                       <Text style={styles.titleText}>用户协议</Text>
                    </Row>
                    <Row style={{marginTop:20}}>
                        <Text style={styles.bold}>一、总则
                        </Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 1．1　用户应当同意本协议的条款并按照福道健康环应用程序上的提示完成全部的注册程序。用户在进行注册程序过程中点击"同意"按钮即表示用户与福道健康环公司达成协议，完全接受本协议项下的全部条款。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 1．2　用户注册成功后，福道将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户负责保管；用户应当对以其用户帐号进行的所有活动和事件负法律责任。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 1．3　用户可以使用福道健康环服务，当用户使用福道健康环服务时，用户的使用行为视为其对该服务的服务条款以及福道健康环在该服务中发出的各类公告的同意。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 1．4　福道健康环会员服务协议以及服务条款和公告可由福道公司随时更新，且无需另行通知。您在使用相关服务时,应关注并遵守其所适用的相关条款。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>您在使用福道健康环提供的各项服务之前，应仔细阅读本服务协议。如您不同意本服务协议及/或随时对其的修改，您可以主动取消福道健康环提供的服务；您一旦使用福道健康环服务，即视为您已了解并完全同意本服务协议各项内容，包括福道健康环对服务协议随时所做的任何修改，并成为福道健康环用户。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.bold}>二、注册信息和隐私保护</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 2．1　福道健康环帐号（即福道健康环用户ID）的所有权归福道公司，用户完成注册申请手续后，获得福道健康环帐号的使用权。用户应提供及时、详尽及准确的个人资料（包括性别、出生日期、位置），同时根据对产品功能的需求自愿填写个人健康状况指标（包括但不限于基本身体指标、病史、生活习惯、精神状况、体检信息、通过智能设备获取的身体指标等），并不断更新注册资料，符合及时、详尽准确的要求。所有原始键入的资料将引用为注册资料。如果因注册信息不真实而引起的问题，并对问题发生所带来的后果，福道健康环不负任何责任。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 2．2　用户不应将其帐号、密码转让、出售或出借予他人使用，如果福道健康环发现使用者并非帐号注册者本人，福道健康环有权停止继续服务。如用户发现其帐号遭他人非法使用，应立即通知福道健康环。因黑客行为或用户违反本协议规定导致帐号、密码遭他人非法使用的，由用户本人承担因此导致的损失和一切法律责任，福道健康环不承担任何责任。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 2．3　福道健康环的隐私权保护声明说明了福道健康环如何收集和使用用户信息。您保证已经充分了解并同意福道健康环可以据此处理用户信息。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.bold}>三、使用规则</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 3．1　用户在使用福道健康环服务时，必须遵守中华人民共和国相关法律法规的规定，用户应同意将不会利用本服务进行任何违法或不正当的活动，包括但不限于下列行为∶</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>（1）上载、展示、张贴、传播或以其它方式传送含有下列内容之一的信息：</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 1） 反对宪法所确定的基本原则的；</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 2） 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 3） 损害国家荣誉和利益的；</Text>
                    </Row>
                    <Row>
                            <Text style={styles.desc}>• 4） 煽动民族仇恨、民族歧视、破坏民族团结的；</Text>
                    </Row>
                    <Row>
                            <Text style={styles.desc}>• 5） 破坏国家宗教政策，宣扬邪教和封建迷信的；</Text>
                    </Row>
                    <Row>
                            <Text style={styles.desc}>• 6） 散布谣言，扰乱社会秩序，破坏社会稳定的；</Text>
                    </Row>
                    <Row>
                            <Text style={styles.desc}>• 7） 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</Text>
                    </Row>
                    <Row>
                            <Text style={styles.desc}>• 8） 侮辱或者诽谤他人，侵害他人合法权利的；</Text>
                    </Row>
                    <Row>
                            <Text style={styles.desc}>• 9） 含有虚假、有害、胁迫、侵害他人隐私、骚扰、侵害、中伤、粗俗、猥亵、或其它道德上令人反感的内容；</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}> • 10） 含有中国法律、法规、规章、条例以及任何具有法律效力之规范所限制或禁止的其它内容的；</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• （2）不得为任何非法目的而使用网络服务系统；</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• （3）不利用福道健康环服务从事以下活动：</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 1）未经允许，进入应用程序客户端信息网络或者使用应用程序客户端信息网络资源的；</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 2） 未经允许，对应用程序客户端信息网络功能进行删除、修改或者增加的；</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 3） 未经允许，对进入应用程序客户端信息网络中存储、处理或者传输的数据和应用程序进行删除、修改或者增加的；</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 4） 故意制作、传播计算机病毒等破坏性程序的；</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 5） 其他危害计算机信息网络安全的行为。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 3．2　用户违反本协议或相关的服务条款的规定，导致或产生的任何第三方主张的任何索赔、要求或损失，包括合理的律师费，您同意赔偿福道与合作公司、关联公司，并使之免受损害。对此，福道健康环有权视用户的行为性质，采取包括但不限于删除用户发布信息内容、暂停使用许可、终止服务、限制使用、回收福道健康环帐号、追究法律责任等措施。对恶意注册福道健康环帐号或利用福道健康环帐号进行违法活动、捣乱、骚扰、欺骗、其他用户以及其他违反本协议的行为，福道有权回收其帐号。同时，福道健康环公司会视司法部门的要求，协助调查。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 3．3　用户不得对本服务任何部分或本服务之使用或获得，进行复制、拷贝、出售、转售或用于任何其它商业目的。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 3．4　用户须对自己在使用福道健康环服务过程中的行为承担法律责任。用户承担法律责任的形式包括但不限于：对受到侵害者进行赔偿，以及在福道健康环公司首先承担了因用户行为导致的行政处罚或侵权损害赔偿责任后，用户应给予福道公司等额的赔偿。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.bold}>四、服务内容
                    </Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 4．1　福道健康环服务的具体内容由福道健康环根据实际情况提供，目前包括的服务内容为健康自评、问题发现、常见问题自疗、常见问题专业疗法推荐、养生饮食、起居指导、运动指南、休闲养生、形体自修等。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 4．2　除非本服务协议另有其它明示规定，福道健康环所推出的新版本产品、新功能、新服务，均受到本服务协议之规范。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 4．3　鉴于网络服务的特殊性，用户同意福道健康环有权不经事先通知，随时变更、中断或终止部分或全部的网络服务（包括收费网络服务）。福道健康环不担保网络服务不会中断，对网络服务的及时性、安全性、准确性也都不作担保。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 4．4　福道健康环需要定期或不定期地对提供网络服务的平台或相关的设备进行检修或者维护，如因此类情况而造成网络服务（包括收费网络服务）在合理时间内的中断，福道健康环无需为此承担任何责任。福道健康环保留不经事先通知为维修保养、升级或其它目的暂停本服务任何部分的权利。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 4．5过福道健康环服务取得的任何信息资料取决于用户自己，并由其承担系统受损、资料丢失以及其它任何风险。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 4．6 用户须知：福道健康环提供的各种挖掘推送服务中（包括福道健康环的健康资讯类、专业疗法线下店铺类、生活习惯培养类、养生方法及线下机构类等推送），推送给用户曾经访问过的网站或资源之链接是基于机器算法自动推出，福道健康环不对其内容的有效性、安全性、合法性等做任何担保。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 4．7福道健康环有权于任何时间暂时或永久修改或终止本服务（或其任何部分），而无论其通知与否，福道健康环对用户和任何第三人均无需承担任何责任。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 4．8　终止服务</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 您同意福道健康环得基于其自行之考虑，因任何理由，包含但不限于长时间未使用，或福道健康环认为您已经违反本服务协议的文字及精神，终止您的密码、帐号或本服务之使用（或服务之任何部分），并将您在本服务内任何内容加以移除并删除。您同意依本服务协议任何规定提供之本服务，无需进行事先通知即可中断或终止，您承认并同意，福道健康环可立即关闭或删除您的帐号及您帐号中所有相关信息及文件，及/或禁止继续使用前述文件或本服务。此外，您同意若本服务之使用被中断或终止或您的帐号及相关信息和文件被关闭或删除，福道健康环对您或任何第三人均不承担任何责任。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.bold}>五、知识产权和其他合法权益（包括但不限于名誉权、商誉权）</Text>

                </Row>
                    <Row>
                        <Text style={styles.desc}>• 5．1　用户专属权利</Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• 福道尊重他人知识产权和合法权益，呼吁用户也要同样尊重知识产权和他人合法权益。若您认为您的知识产权或其他合法权益被侵犯，请按照以下说明向福道提供资料∶</Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• 请注意：如果权利通知的陈述失实，权利通知提交者将承担对由此造成的全部法律责任（包括但不限于赔偿各种费用及律师费）。如果上述个人或单位不确定网络上可获取的资料是否侵犯了其知识产权和其他合法权益，福道建议该个人或单位首先咨询专业人士。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>• 为了福道有效处理上述个人或单位的权利通知，请使用以下格式（包括各条款的序号）：</Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• 1. 权利人对涉嫌侵权内容拥有知识产权或其他合法权益和/或依法可以行使知识产权或其他合法权益的权属证明；</Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• 2. 请充分、明确地描述被侵犯了知识产权或其他合法权益的情况并请提供涉嫌侵权的第三方网址（如果有）。</Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• 3. 请指明涉嫌侵权网页的哪些内容侵犯了第2项中列明的权利。</Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• 4. 请提供权利人具体的联络信息，包括姓名、身份证或护照复印件（对自然人）、单位登记证明复印件（对单位）、通信地址、电话号码、传真和电子邮件。</Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• 5. 请提供涉嫌侵权内容在信息网络上的位置（如指明您举报的含有侵权内容的出处，即：指网页地址或网页内的位置）以便我们与您举报的含有侵权内容的网页的所有权人/管理人联系。</Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• 6. 请在权利通知中加入如下关于通知内容真实性的声明： “我保证，本通知中所述信息是充分、真实、准确的，如果本权利通知内容不完全属实，本人将承担由此产生的一切法律责任。” </Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• 7. 请您签署该文件，如果您是依法成立的机构或组织，请您加盖公章。</Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• 请您把以上资料和联络方式书面发往以下地址：　　</Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• 北京市海淀区中关村东路66号1号楼18层2109室，福道时代（北京）健康科技有限公司　健康生态业务部，邮政编码：100190。</Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• 5．2　对于用户通过福道健康环服务（包括但不限于查一查、疗一疗、养一养、修一修、“我”的健康状态监控等）上传到福道网站上可公开获取区域的任何内容，用户同意福道健康环在全世界范围内具有免费的、永久性的、不可撤销的、非独家的和完全再许可的权利和许可，以使用、复制、修改、改编、出版、翻译、据以创作衍生作品、传播、表演和展示此等内容（整体或部分），和/或将此等内容编入当前已知的或以后开发的其他任何形式的作品、媒体或技术中。</Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• 5．3　福道健康环拥有本网站内所有资料的版权。任何被授权的浏览、复制、打印和传播属于本网站内的资料必须符合以下条件：</Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• （1） 所有的资料和图象均以获得信息为目的；</Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• （2） 所有的资料和图象均不得用于商业目的；</Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• （3） 所有的资料、图象及其任何部分都必须包括此版权声明；</Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• （4） 本应用程序（福道健康环）所有的产品、技术与所有程序均属于福道知识产权，在此并未授权。</Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• （5）,“福道健康环”及相关图形等为福道健康环的注册商标。</Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• （6） 未经福道健康环许可，任何人不得擅自（包括但不限于：以非法的方式复制、传播、展示、镜像、上载、下载）使用。否则，福道健康环将依法追究法律责任。</Text>
                </Row>
                    <Row>
                        <Text style={styles.bold}>六、其他
                                </Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• 6．1　本协议的订立、执行和解释及争议的解决均应适用中华人民共和国法律。</Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• 6．2　如双方就本协议内容或其执行发生任何争议，双方应尽量友好协商解决；协商不成时，任何一方均可向北京市海淀区人民法院提起诉讼。</Text>
                </Row>
                    <Row>
                        <Text style={styles.desc}>• 6．3　福道健康环未行使或执行本服务协议任何权利或规定，不构成对前述权利或权利之放弃。</Text>
                </Row>
                    <Row>
                            <Text style={styles.desc}>• 6．4　如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效并且有约束力。</Text>
                    </Row>

                </Content>
            </Container>
        );
    }
}

function bindAction(dispatch) {
    return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(Protocol);