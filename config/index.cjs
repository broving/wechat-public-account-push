/* eslint-disable */
const USER_CONFIG = {

  APP_ID: 'wx4abcd005b562ff9f',
  APP_SECRET: '76bd0e40871fadb52e31ce5f668fba24',

  PROVINCE: '江苏',
  CITY: '徐州',

  USERS: [
    {
      ids: ['o-_as6MlbZiv_iGAJc3YoXIiZihU','o-_as6GRDerRVQK3lEEJIjHw0zu4'],
      useTemplateId: 'TtkzHo4_8aZUUGiN5QIl9oDTkJS8OogOEJ3BO67DKfw',    
      
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-12-05' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '1	A0306	o-_as6GRDerRVQK3lEEJIjHw0zu4',
    }
  ],

}

module.exports = USER_CONFIG

