const psql = require('../psqlAdapter').psql;

const question = {}

question.list_all = async (json) => {
    const ret = {}
    /*let sql = "SELECT Q.question_id, Q.detail, Q.next_question_id, QT.quest_type_id"
        sql += " FROM question Q, question_type QT WHERE Q.quest_type_id = QT.quest_type_id"*/

    let question =

        [{
            "questionId": "40001",
            "detail": "วันนี้เธอเป็นยังไงบ้าง",
            "choices": [
                { "seq": "1", "desc": "อารมณ์ดีมาก", "nextQuestionId": "40002", "choice_score": "0" },
                { "seq": "2", "desc": "อารมณ์ดี", "nextQuestionId": "40002", "choice_score": "0" },
                { "seq": "3", "desc": "รู้สึกเฉยๆ", "nextQuestionId": "40002", "choice_score": "0" },
                { "seq": "4", "desc": "ไม่ค่อยดีเลย", "nextQuestionId": "40002", "choice_score": "0" },
                { "seq": "5", "desc": "รู้สึกเศร้า", "nextQuestionId": "40002", "choice_score": "0" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "40002",
            "detail": "เธอกําลังรู้สึกเศร้าหรือเครียดอยู่ใช่ไหม",
            "choices": [
                { "seq": "1", "desc": "ใช่", "nextQuestionId": "40003", "choice_score": "0" },
                { "seq": "2", "desc": "ไม่ใช่", "nextQuestionId": "40003", "choice_score": "0" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "40003",
            "detail": "เธอกําลังรู้สึกเศร้าหรือเครียดเรื่องอะไรอยู่",
            "choices": [
                { "seq": "1", "desc": "เรื่องเพื่อน", "nextQuestionId": "41001", "choice_score": "0" },
                { "seq": "2", "desc": "เรื่องเรียน", "nextQuestionId": "42001", "choice_score": "0" },
                { "seq": "3", "desc": "เรื่องครอบครัว", "nextQuestionId": "43001", "choice_score": "0" },
                { "seq": "4", "desc": "เรื่องความรัก", "nextQuestionId": "44001", "choice_score": "0" },
                { "seq": "5", "desc": "เรื่องการเงิน", "nextQuestionId": "46001", "choice_score": "0" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "41001",
            "detail": "ตอนนี้ปัญหาเรื่องเพื่อนกระทบต่อจิตใจเธอมากแค่ไหน",
            "choices": [
                { "seq": "1", "desc": "มากที่สุด", "nextQuestionId": "41001", "choice_score": "5" },
                { "seq": "2", "desc": "มาก", "nextQuestionId": "42001", "choice_score": "4" },
                { "seq": "3", "desc": "ปานกลาง", "nextQuestionId": "43001", "choice_score": "3" },
                { "seq": "4", "desc": "น้อย", "nextQuestionId": "44001", "choice_score": "2" },
                { "seq": "5", "desc": "น้อยที่สุด", "nextQuestionId": "46001", "choice_score": "1" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "41002",
            "detail": "เธออยากปรับความเข้าใจกับเพื่อนไหม",
            "choices": [
                { "seq": "1", "desc": "อยากปรับความเข้าใจ", "nextQuestionId": "41003", "choice_score": "1" },
                { "seq": "2", "desc": "ไม่อยากปรับความเข้าใจ", "nextQuestionId": "41003", "choice_score": "5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "41003",
            "detail": "น้องหมีอยากให้เธอลองทบทวนดูว่าจริงๆแล้วปัญหาที่เกิดขึ้นเกิดจากอะไร",
            "choices": [
                { "seq": "1", "desc": "เกิดจากตัวเอง", "nextQuestionId": "41004", "choice_score": "1.5" },
                { "seq": "2", "desc": "เกิดจากคนอื่น", "nextQuestionId": "41004", "choice_score": "5.5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "41004",
            "detail": "ถ้าเธออยากที่จะขอโทษใครสักคน เธออยากแสดงออกทางใดมากกว่ากัน",
            "choices": [
                { "seq": "1", "desc": "แสดงออกแบบทางตรง", "nextQuestionId": "41005", "choice_score": "2" },
                { "seq": "2", "desc": "แสดงออกแบบทางอ้อม", "nextQuestionId": "41005", "choice_score": "6" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "41005",
            "detail": "เธอกล้าที่จะไปปรับความเข้าใจกับเพื่อนก่อนหรือไม่",
            "choices": [
                { "seq": "1", "desc": "กล้าที่จะเข้าหาก่อน", "nextQuestionId": "41006", "choice_score": "2.5" },
                { "seq": "2", "desc": "ไม่กล้าที่จะเข้าหาก่อน", "nextQuestionId": "41006", "choice_score": "6.5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "41006",
            "detail": "เธอยังอยากที่จะรักษาความสัมพันธ์ของการเป็นเพื่อนอยู่ไหม",
            "choices": [
                { "seq": "1", "desc": "อยากเป็นเพื่อนต่อไป", "nextQuestionId": "41007", "choice_score": "3" },
                { "seq": "2", "desc": "ไม่อยากเป็นเพื่อนแล้ว", "nextQuestionId": "41007", "choice_score": "7" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "41007",
            "detail": "เธออยากระบายให้น้องหมีฟังไหม  พิมพ์มาได้เลย น้องหมีจะคอยรับฟังเธอเองแต่ถ้ายังไม่พร้อมสามารถกดถัดไปได้นะ",
            "nextQuestionId": "41008",
            "questionType": "2"
        },

        {
            "questionId": "41008",
            "detail": "เธออาจต้องการใครสักคน ให้น้องหมีอยู่ข้างๆเธอนะ",
            "nextQuestionId": "",
            "questionType": "3"
        },

       

        {
            "questionId": "42001",
            "detail": "ปัญหาเรื่องเรียนกระทบต่อจิตใจเธอมากแค่ไหน",
            "choices": [
                { "seq": "1", "desc": "มากที่สุด", "nextQuestionId": "42002", "choice_score": "5" },
                { "seq": "2", "desc": "มาก", "nextQuestionId": "42002", "choice_score": "4" },
                { "seq": "3", "desc": "ปานกลาง", "nextQuestionId": "42002", "choice_score": "3" },
                { "seq": "4", "desc": "น้อย", "nextQuestionId": "42002", "choice_score": "2" },
                { "seq": "5", "desc": "น้อยที่สุด", "nextQuestionId": "42002", "choice_score": "1" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "42002",
            "detail": "เธอกําลังรู้สึกท้อแท้เรื่องเรียนใช่ไหม",
            "choices": [
                { "seq": "1", "desc": "ใช่ รู้สึกท้อเเท้", "nextQuestionId": "42003", "choice_score": "15" },
                { "seq": "2", "desc": "ไม่ใช่ ไม่ได้รู้สึกท้อเเท้", "nextQuestionId": "42003", "choice_score": "11" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "42003",
            "detail": "สาเหตุมาจากอะไรกันนะ เลือกสิ่งที่ตรงกับเธอมากที่สุด",
            "choices": [
                { "seq": "1", "desc": "ไม่ชอบสิ่งที่เรียนอยู่", "nextQuestionId": "42004", "choice_score": "2" },
                { "seq": "2", "desc": "ผลลัพธ์กับความพยายามสวนทางกัน", "nextQuestionId": "42004", "choice_score": "1" },
                { "seq": "3", "desc": "รู้สึกถึงความกดดันที่มากเกินไป", "nextQuestionId": "42004", "choice_score": "3" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "42004",
            "detail": "เธอมาลองพยายามกันอีกสักครั้งกันไหม",
            "choices": [
                { "seq": "1", "desc": "อยากพยายาม", "nextQuestionId": "42005", "choice_score": "11.5" },
                { "seq": "2", "desc": "ไม่ไหวแล้ว", "nextQuestionId": "42005", "choice_score": "15.5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "42005",
            "detail": "เธอคิดว่าอะไรคือสิ่งที่ทำให้ไม่ชอบในการเรียน",
            "choices": [
                { "seq": "1", "desc": "รู้สึกว่าตัวเองตัดสินใจผิด", "nextQuestionId": "42006", "choice_score": "6" },
                { "seq": "2", "desc": "ไม่ได้กำหนดทางเลือกในการเรียนด้วยตัวเอง", "nextQuestionId": "42006", "choice_score": "5" },
                { "seq": "3", "desc": "เนื้อหาที่เรียนยากเกินไป", "nextQuestionId": "42006", "choice_score": "4" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "42006",
            "detail": "ความรู้สึกกดดันที่เธอกำลังเผชิญอยู่นั้นเกิดมาจากอะไร",
            "choices": [
                { "seq": "1", "desc": "กดดันตนเองมากเกินไป", "nextQuestionId": "41007", "choice_score": "16" },
                { "seq": "2", "desc": "ได้รับความกดดันจากผู้อื่น", "nextQuestionId": "41007", "choice_score": "12" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "42007",
            "detail": "เรื่องที่เธอกังวลในใจตอนนี้ เธอสามารถพิมพ์ลงในกล่องข้อความได้นะ แต่ถ้าไม่พร้อมสามารถกดถัดไปได้นะ",
            "nextQuestionId": "41008",
            "questionType": "2"
        },

        {
            "questionId": "42008",
            "detail": "เธอเก่งมากที่สุดแล้ว ความพยายามของเธอจะไม่สูญเปล่า",
            "nextQuestionId": "",
            "questionType": "3"
        },



        {
            "questionId": "43001",
            "detail": "ปัญหาครอบครัวของเธอกระทบต่อจิตใจเธอแค่ไหน",
            "choices": [
                { "seq": "1", "desc": "มากที่สุด", "nextQuestionId": "43002", "choice_score": "5" },
                { "seq": "2", "desc": "มาก", "nextQuestionId": "43002", "choice_score": "4" },
                { "seq": "3", "desc": "ปานกลาง", "nextQuestionId": "43002", "choice_score": "3" },
                { "seq": "4", "desc": "น้อย", "nextQuestionId": "43002", "choice_score": "2" },
                { "seq": "5", "desc": "น้อยที่สุด", "nextQuestionId": "43002", "choice_score": "1" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "43002",
            "detail": "เธออยากปรับความเข้าใจกับครอบครัวไหม",
            "choices": [
                { "seq": "1", "desc": "อยากปรับความเข้าใจ", "nextQuestionId": "43003", "choice_score": "21" },
                { "seq": "2", "desc": "ไม่อยากปรับความเข้าใจ", "nextQuestionId": "43003", "choice_score": "25" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "43003",
            "detail": "เราอยากให้เธอลองทบทวนดูว่าจริง ๆ แล้วปัญหาที่เกิดขึ้นเกิดจากอะไร",
            "choices": [
                { "seq": "1", "desc": "เกิดจากตัวเอง", "nextQuestionId": "43004", "choice_score": "3" },
                { "seq": "2", "desc": "เกิดจากตัวเองและคนอื่น", "nextQuestionId": "43004", "choice_score": "2" },
                { "seq": "3", "desc": "เกิดจากคนอื่น", "nextQuestionId": "43004", "choice_score": "1" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "43004",
            "detail": "น้องหมีอยากให้เธอได้ลองเลือกวิธีที่เหมาะสมกับเธอมากที่สุด",
            "choices": [
                { "seq": "1", "desc": "หาเวลาพูดคุยกับครอบครัวแบบพร้อมหน้าพร้อมตา", "nextQuestionId": "43005", "choice_score": "7" },
                { "seq": "2", "desc": "ลองแสดงออกทางการกระทำ", "nextQuestionId": "43005", "choice_score": "5" },
                { "seq": "3", "desc": "รอให้เธอและอีกฝ่ายอารมณ์เย็นลงก่อน", "nextQuestionId": "43005", "choice_score": "4" },
                { "seq": "4", "desc": "ลองเป็นฝ่ายที่เข้าไปพูดคุยกับครอบครัวก่อน", "nextQuestionId": "43005", "choice_score": "6" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "43005",
            "detail": "เธอคิดว่าเธอต้องการคนช่วยในการไกล่เกลี่ยปัญหานี้ไหม",
            "choices": [
                { "seq": "1", "desc": "ต้องการคนไกล่เกลี่ย", "nextQuestionId": "43006", "choice_score": "25.5" },
                { "seq": "2", "desc": "ไม่ต้องการคนไกล่เกลี่ย", "nextQuestionId": "43006", "choice_score": "21.5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "43006",
            "detail": "ถ้าเธออยากปรับความเข้าใจกับครอบครัว เธอจะแสดงออกทางใด",
            "choices": [
                { "seq": "1", "desc": "แสดงออกว่าอยากปรับความเข้าใจทางตรง", "nextQuestionId": "43007", "choice_score": "22" },
                { "seq": "2", "desc": "แสดงออกว่าอยากปรับความเข้าใจทางอ้อม", "nextQuestionId": "43007", "choice_score": "26" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "43007",
            "detail": "เธออยากระบายความทุกข์ในใจ ให้น้องหมีฟังไหม พิมพ์มาได้เลยนะ แต่ถ้ายังไม่อยากระบายกดถัดไปได้นะ",
            "nextQuestionId": "43008",
            "questionType": "2"
        },

        {
            "questionId": "43008",
            "detail": "ตอนนี้คุณกำลังหมดกำลังใจในการแก้ปัญหาอยู่รึเปล่า น้องหมีพกกําลังใจมาให้คุณเต็มเลยนะ",
            "nextQuestionId": "",
            "questionType": "3"
        },

      
        {
            "questionId": "44001",
            "detail": "ตอนนี้มีความสัมพันธ์แบบไหน",
            "choices": [
                { "seq": "1", "desc": "toxic", "nextQuestionId": "44002", "choice_score": "41" },
                { "seq": "2", "desc": "healthy", "nextQuestionId": "44002", "choice_score": "46" }
            ],
            "questionType": "1"

        },

        {
            "questionId": "44002",
            "detail": "เธอพอใจในความสัมพันธ์ตอนนี้หรือไม่",
            "choices": [
                { "seq": "1", "desc": "ไม่พอใจ", "nextQuestionId": "44003", "choice_score": "41.5" },
                { "seq": "2", "desc": "พอใจ", "nextQuestionId": "44003", "choice_score": "46.5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "44003",
            "detail": "เธอได้ลองพูดคุยถึงปัญหาความสัมพันธ์กับอีกฝ่ายหรือยัง",
            "choices": [
                { "seq": "1", "desc": "ยังไม่ได้ลองพูดคุย", "nextQuestionId": "44004", "choice_score": "42" },
                { "seq": "2", "desc": "ได้ลองพูดคุยแล้ว", "nextQuestionId": "44004", "choice_score": "47" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "44004",
            "detail": "เมื่อตอนที่เธอมีความรัก เธอเป็นคนที่ดีขึ้นหรือไม่ ",
            "choices": [
                { "seq": "1", "desc": "คิดว่าตัวเองแย่ลง", "nextQuestionId": "44005", "choice_score": "42.5" },
                { "seq": "2", "desc": "คิดว่าตัวเองดีขึ้นนะ", "nextQuestionId": "44005", "choice_score": "47.5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "44005",
            "detail": "ปัญหาที่เจออยู่เกี่ยวข้องกับมือที่ 3 ไหม",
            "choices": [
                { "seq": "1", "desc": "เกี่ยวกับมือที่ 3", "nextQuestionId": "44006", "choice_score": "1" },
                { "seq": "2", "desc": "ไม่เกี่ยวกับมือที่ 3", "nextQuestionId": "44006", "choice_score": "5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "44006",
            "detail": "เธอรู้สึกว่าอีกฝ่ายอยากที่จะสานความพันธ์ครั้งนี้ต่อไปไหม",
            "choices": [
                { "seq": "1", "desc": "ไม่อยากสานความสัมพันธ์", "nextQuestionId": "44007", "choice_score": "43" },
                { "seq": "2", "desc": "อยากสานความสัมพันธ์", "nextQuestionId": "44007", "choice_score": "48" }
            ],
            "questionType": "1"
        },

       
        {
            "questionId": "44007",
            "detail": "เธอคิดว่าอีกฝ่ายเห็นคุณค่าของเธอในความสัมพันธ์ครั้งนี้ไหม",
            "choices": [
                { "seq": "1", "desc": "ไม่เห็นคุณค่า", "nextQuestionId": "44008", "choice_score": "43.5" },
                { "seq": "2", "desc": "เห็นคุณค่า", "nextQuestionId": "44008", "choice_score": "48.5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "44008",
            "detail": "เธออยากเริ่มต้นความสัมพันธ์ที่ดีแต่ยังไม่กล้าเริ่มต้นรึเปล่า",
            "choices": [
                { "seq": "1", "desc": "กล้าเริ่มต้นใหม่", "nextQuestionId": "44009", "choice_score": "2" },
                { "seq": "2", "desc": "ยังไม่กล้าเริ่มต้นใหม่", "nextQuestionId": "44009", "choice_score": "6" }
            ],
            "questionType": "1"
        },

       

        {
            "questionId": "44009",
            "detail": "อยากจะบอกกับตัวเองในวันนี้ไหม พิมพ์สิ่งที่เธออยากบอกได้เลย แต่ถ้าไม่มีสามารถกดถัดไปได้เลยนะ",
            "nextQuestionId": "44010",
            "questionType": "2"
        },

        {
            "questionId": "44010",
            "detail": "เรามาก้าวข้ามผ่านอุปสรรคนี้ไปด้วยกันกับน้องหมีนะ",
            "nextQuestionId": "",
            "questionType": "3"
        },

     
        {
            "questionId": "45001",
            "detail": "ตอนนี้ปัญหาเรื่องการเงินของเธอกระทบต่อจิตใจเธอแค่ไหน",
            "choices": [
                { "seq": "1", "desc": "มากที่สุด", "nextQuestionId": "45002", "choice_score": "5" },
                { "seq": "2", "desc": "มาก", "nextQuestionId": "45002", "choice_score": "4" },
                { "seq": "3", "desc": "ปานกลาง", "nextQuestionId": "45002", "choice_score": "3" },
                { "seq": "4", "desc": "น้อย", "nextQuestionId": "45002", "choice_score": "2" },
                { "seq": "5", "desc": "น้อยที่สุด", "nextQuestionId": "45002", "choice_score": "1" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45002",
            "detail": "เรามาข้ามผ่านอุปสรรคนี้ไปด้วยกันนะ โดยน้องหมีอยากนำเสนอรูปแบบเหล่านี้มาให้เธอได้ลองเลือก",
            "choices": [
                { "seq": "1", "desc": "ลองจัดลำดับความสำคัญของหนี้กัน", "nextQuestionId": "45003", "choice_score": "85" },
                { "seq": "2", "desc": "มาลองวางแผนการใช้เงินกัน", "nextQuestionId": "45003", "choice_score": "80" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45003",
            "detail": "ถ้าให้เธอลองวางแผนจัดระเบียบหนี้เธอพอจะนึกออกกันไหม",
            "choices": [
                { "seq": "1", "desc": "คิดออกๆ", "nextQuestionId": "45004", "choice_score": "80.5" },
                { "seq": "2", "desc": "ยังไม่เข้าใจเท่าไหร่", "nextQuestionId": "45004", "choice_score": "85.5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45004",
            "detail": "เธอมองว่ารูปแบบใดที่เธอสามารถพอที่จะทำให้หนี้ลดลงไปได้",
            "choices": [
                { "seq": "1", "desc": "ยืม/กู้เงินจากคนอื่นมาโปะหนี้", "nextQuestionId": "45005", "choice_score": "82" },
                { "seq": "2", "desc": "ขายสินทรัพย์ที่ตนเองมีอยู่", "nextQuestionId": "45005", "choice_score": "81.5" },
                { "seq": "3", "desc": "เพิ่มรายได้ด้วยงานพิเศษ", "nextQuestionId": "45005", "choice_score": "81" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45005",
            "detail": "เธอคิดว่าการยืม/กู้เงินเพื่อมาโปะหนี้",
            "choices": [
                { "seq": "1", "desc": "ข้อดีมากกว่า", "nextQuestionId": "45006", "choice_score": "86" },
                { "seq": "2", "desc": "ข้อเสียมากกว่า", "nextQuestionId": "45006", "choice_score": "82.5" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45006",
            "detail": "น้องหมีอยากให้เธอทำใจให้สบาย และลองคิดว่ามีวิธีใดที่จะช่วยทำให้ตัดสินใจขายได้ง่ายขึ้น",
            "choices": [
                { "seq": "1", "desc": "เช็คว่ามีทรัพย์สินใดที่จะนำมาขายได้บ้าง", "nextQuestionId": "45007", "choice_score": "84" },
                { "seq": "2", "desc": "นำทรัพย์สินที่มีความจำเป็นน้อยไปขายก่อน", "nextQuestionId": "45007", "choice_score": "83.5" },
                { "seq": "2", "desc": "ทำทั้ง 2 วิธีข้างต้น", "nextQuestionId": "45007", "choice_score": "83" }
            ],
            "questionType": "1"
        },

        {
            "questionId": "45007",
            "detail": "เธอมีอะไรที่อยากจะบอกกับตัวเองในวันนี้ไหมพิมพ์สิ่งที่เธออยากบอกกับตัวเองในกล่องข้อความได้เลย แต่ถ้าไม่มีสามารถกดถัดไปได้เลยนะ",
            "nextQuestionId": "45008",
            "questionType": "2"
        },

        {
            "questionId": "45008",
            "detail": "อาจจะใช้เวลาสักหน่อยนะ อย่าเพิ่งท้อน้าาา",
            "nextQuestionId": "",
            "questionType": "3"
        }
        ]




    /*await psql.manyOrNone(sql)
                    .then((data) => {
                     
    
                    console.log(data.length)
                    if(data.length >0){ 
                    ret.status=200
                    ret.message="Success"
                    ret.data = data
    
    
                    }
    
                    })
                    .catch(error => {
                    // error;
                    ret.status =400
                    ret.message="Error"
                    throw error  
                    });*/
    return question

}

export default question