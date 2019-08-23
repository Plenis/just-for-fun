function DigitalQQ(question) {
    let questionAsked = question || {};

    function addBtn(qq) {

        let questionData = " ";

        for (let index = 0; index < questionData.length; index++) {
            const element = questionData[index];
            if (qq.startsWith(element)) {
                console.log(element)
                return true

            }
        }
            if (questionAsked[qq] === undefined) {
                if (!(qq)) {
                    return false;
                }
                questionAsked[qq] = 0;
                return true;
            }
        }

        function getTextarea() {   
        return Object.keys(questionAsked);
        }

        function getQuestions(){
          return questionAsked
        }

        return {
            addBtn,
            getTextarea,
            getQuestions,
        }
    }

