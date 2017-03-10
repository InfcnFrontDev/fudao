'use strict';

/**
 * 用户信息
 */
const User = {
    name: 'User',
    properties: {
        id: 'string',// 用户ID
        username: 'string',// 用户名
        password: 'string',// 密码
        name: 'string', // 昵称
        sex: 'string',// 性别
        photo: 'string',// 头像
        phone: {type: 'string', optional: true},// 手机号码
        department: {type: 'string', optional: true},// 部门
        address: {type: 'string', optional: true},// 地址
        sign: {type: 'string', optional: true},// 个性签名
        cover: {type: 'string', optional: true}, // 主页封面
        createTime: 'date'// 创建时间
    }
};

/**
 * 群组信息
 */
const Group = {
    name: 'Group',
    properties: {
        id: 'string',// 群组ID
        name: 'string',// 群组名称
        photo: 'string', // 群组头像
        userId: 'string', // 创建人
        masterId: 'string', // 群主
        createTime: 'string' // 群组
    }
};

/**
 * 群组成员
 */
const GroupMember = {
    name: 'GroupMember',
    properties: {
        id: 'string', // 群组成员ID
        groupId: 'string',// 群组ID
        userId: 'string',// 用户ID
        createTime: 'date' // 加入群的时间
    }
};

/**
 * 我的联系人
 */
const MyContacts = {
    name: 'MyContacts',
    properties: {
        id: 'string', // ID
        userId: 'string', // 用户ID
        joinTime: 'string', // 加为好友的时间
        remark: 'string', // 备注名
        dontAttentionHim: 'string', // 不关注他
        dontLetHimAttention: 'string', // 不让他关注
    }
};

/**
 * 我的群组
 */
const MyGroup = {
    name: 'MyGroup',
    properties: {
        id: 'string', // ID
        groupId: 'string', // 群组ID
        joinTime: 'string', // 加入时间
        myRemarkInGroup: 'string', // 在群中我的备注
    }
};

/**
 * 动态的图片信息
 */
const DynamicPicture = {
    name: 'DynamicPicture',
    properties: {
        id: 'string', // 图片ID
        dynamicId: 'string',// 动态ID
        path: 'string', // 图片路径
    }
};



/**
 * 聊天信息
 */
const Chat = {
    name: 'Chat',
    properties: {
        id: 'string',// 聊天ID
        type: 'string', // 聊天类型， 用户，群组
        userId: 'string', // 用户ID
        groupId: 'string', // 群组ID
        status: 'string', // 状态
    }
};

/**
 * 聊天消息
 */
const ChatMessage = {
    name: 'ChatMessage',
    properties: {
        id: 'string',// 消息ID
        chatId: 'string', // 聊天ID
        userId: 'string',// 发送人
        content: 'string',// 消息内容
        type: 'string',// 消息类型，1文本、2图片、3链接、4视频、5语音
        sendTime: 'date',// 发送时间
        status: 'string',// 消息状态
    }
};

/***************************************************************************/
//以下为已用数据库表
/**
 * 动态信息,已用
 */
 const Dynamic = {
   name: 'Dynamic',
   primaryKey: 'id',
   properties: {
     content: 'string',// 动态内容
     dynamicComments: {type:'list',objectType:'DynamicComment' },
     dynamicImg: {type: 'string', optional: true},
     dynamicPraises:  {type: 'list',objectType:'DynamicPraise' },
     id: 'string',// 动态ID
     nick: 'string', // 发表人
     userId: 'string', // 发表人
     publishTime: 'int',// 发表时间,
     type: 'int',
     show:{type:'bool',optional: true,default:false},
     flag:{type:'bool',optional: true,default:false}
   }
 };

 /**
  * 动态的点赞信息,已用
  */
 const DynamicPraise = {
     name: 'DynamicPraise',
     properties: {
         createTime:'int',
         dynamicId: 'string',
         id: {type:'string',optional: true},
         img:  {type:'string',optional: true},
         userId:'string',
         nick:'string',
     }
 };

/**
 * 动态的评论信息,已用
 */
const DynamicComment = {
    name: 'DynamicComment',
    properties: {
        content: 'string',// 评论内容
        commentTime:'int',
        dynamicId:{type:'string',optional: true},
        id:{type:'string',optional: true},
        img:{type:'string',optional: true},
        nick:'string',
        userId:'string'
    }
};
/**
 * 我的问题,已用
 */
const MyQuestion = {
    name: 'MyQuestionSelected',
    properties: {
        title:'string',
    }
};



module.exports = {
    schema: [Dynamic,DynamicPraise,DynamicComment,MyQuestion],
    schemaVersion: 16,
    migration: () => {
    }
};
