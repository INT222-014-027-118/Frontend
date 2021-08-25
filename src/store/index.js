import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    itemTest: [{
        brand: "HP",
        type: "headset",
        name: "H100",
        price: "280",
        colors: [{
          colorId: 1,
          colorName: "Black",
          hexColor: "#000000",
        }, ],
        description: "H100 ได้รับการออกแบบให้มีความแข็งแรงและทนทานซึ่งเหมาะสำหรับอายุการใช้งานที่ยาวนาน\nฟองน้ำรองหูฟังที่สวมใส่สบายและระบายอากาศได้ดีเหมาะสำหรับการเล่นเกมเป็นเวลานาน\nพูดด้วยความมั่นใจว่าไมโครโฟนจะถ่ายทอดเสียงของคุณด้วยความดังและความชัดเจนที่เหมาะสม\nด้วยตัวขับเสียงขนาด 50 มม. H100 มอบประสิทธิภาพที่แข็งแกร่งในการสร้างเสียงความถี่ต่ำและสูง\nสายสัญญาณเสียงหลักได้รับการเสริมสมรรถภาพเพื่อให้ได้คุณภาพที่ยาวนาน",
        id: 1,
      },
      {
        brand: "HP",
        type: "headset",
        name: "H500",
        price: "749",
        colors: [{
            colorId: 1,
            colorName: "Black",
            hexColor: "#000000",
          },
          {
            colorId: 2,
            colorName: "Ivory",
            hexColor: "#fffff0",
          },
          {
            colorId: 3,
            colorName: "Gray79",
            hexColor: "#c9c9c9",
          },
        ],
        description: "ลำโพงขนาด 50มม.ความต้านทานลำโพง 22โอมห์\nUSB LED Backlight. Volume Control\nไมค์โครโฟนตัดสัญญาณเสียงรบกวน\nAudio Jack 3.5มม.\nสายยาว 2.15 เมตร",
        id: 2,
      },
      {
        brand: "HP",
        type: "headset",
        name: "H300",
        price: "625",
        colors: [{
            colorId: 1,
            colorName: "Black",
            hexColor: "#000000",
          },
          {
            colorId: 2,
            colorName: "Ivory",
            hexColor: "#fffff0",
          },
          {
            colorId: 5,
            colorName: "Light blue",
            hexColor: "#57bfff",
          },
        ],
        description: "Headset that uses 4D analog loudspeaker displacement technology to let you feel the sound.\nConvenient Control - Flexible mic for uncompromised vocal clarity.\nVolume control is a wheel design on the back the left ear of Headset.\nActivate the vibration driver by pressing the control button to deliver powerful amplified bass effects.\nThe 3.5mm audio connections allow for multiple device compatibility and quality sound. The USB connection is for powering the LED lighting effects only.",
        id: 3,
      },
      {
        brand: "HP",
        type: "headset",
        name: "H220",
        price: "330",
        colors: [{
            colorId: 1,
            colorName: "Black",
            hexColor: "#000000",
          },
          {
            colorId: 3,
            colorName: "Gray79",
            hexColor: "#c9c9c9",
          },
        ],
        description: "แสงไฟ LED ทำให้คุณโดดเด่นท่ามกลางจากฝูงชน\nที่อุดหูที่เป็นมิตรต่อผิวหนังและระบายอากาศได้ดีเพื่อความสบายที่ยั่งยืน\nไมโครโฟนป้องกันเสียงรบกวนสูงเพื่อป้องกันเสียงรบกวน\n40mm speaker delivers stable and elegant sound\nลำโพง 40 มม. ให้เสียงที่มีเสถียรภาพและหรูหรา",
        id: 4,
      },
      {
        "brand": "HyperX",
        "type": "headset",
        "name": "HyperX Cloud Stinger",
        "price": "1790",
        "colors": [{
          "colorId": 1,
          "colorName": "Black",
          "hexColor": "#000000"
        }],
        "description": "HyperX Cloud Stinger™ คือชุดหูฟังที่เหมาะอย่างยิ่งสำหรับเกมเมอร์ที่กำลังมองหาชุดหูฟังน้ำหนักเบาที่สวมใส่ได้สบาย\nให้คุณภาพเสียงระดับสุดยอดและมีฟังก์ชั่นอำนวยความสะดวกในการใช้งาน\nอุปกรณ์มีน้ำหนักเพียง 275 กรัม\nคล้องคอได้โดยไม่รำคาญ\nที่ครอบหูหมุนได้ 90 องศาเพื่อให้โอบกระชับได้พอดีมากที่สุด\nไดร์เวอร์กำหนดทิศทางขนาด 50 มม. ช่วยกำหนดตำแหน่งเสียงได้โดยตรงไปยังช่องหู ทำให้จ่ายเสียงได้อย่างแม่นยำและมีคุณภาพครบทุกรายละเอียดตามมาตรฐานเกมเมอร์\nสวมใส่ได้สบายเป็นเวลานานขณะเล่นเกม เลือกใช้เมมโมรี่โฟม HyperX ที่มีคุณภาพสูง",
        "id": 5
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    itemTest: state => state.itemTest
  }
})