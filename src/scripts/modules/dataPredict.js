import { v4 as uuidv4 } from 'uuid'

const dataPredict = [
  {
    id: uuidv4(),
    type: 'work',
    title: 'การงานราบรื่นดี ไม่ค่อยมีอุปสรรค',
    desc: 'การงานราบรื่นดีมาก ไม่ค่อยมีอุปสรรคหรือปัญหาหนักๆ ทุกงานสามารถฝ่าฟันไปได้ดี',
    banner: '/assets/image/share/bnr_share_1.png'
  },
  {
    id: uuidv4(),
    type: 'health',
    title: 'ป่วยกำลังหาย กำลังใจกำลังดี',
    desc: 'สุขภาพใจกำลังดีขึ้น สิ่งที่เคยเครียดหรือกังวล จะเบาลงและหายไปในที่สุด',
    banner: '/assets/image/share/bnr_share_21.png'
  },
  {
    id: uuidv4(),
    type: 'love',
    title: 'อาการไอเกิดจากไวรัส อาการรักเกิดจากคุณ',
    desc: 'ความรักปกติดี ไม่มีเรื่องต้องกังวลใจอะไร ส่วนคนโสด ช่วงนี้เนื้อคู่ยังไม่ปรากฎในเรดาห์ ยังต้อวรอไปก่อน',
    banner: '/assets/image/share/bnr_share_41.png'
  }
]

export default dataPredict
