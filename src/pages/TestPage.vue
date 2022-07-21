<template>
    <div class="wrapper">
        <div v-if="!testEnable" class="buttons">
            <main-button @click="vocabularyTest">Vocabulary test</main-button>
            <main-button @click="phrasesTest">Phrases test</main-button>
        </div>
        <div v-if="testStart" class="test">
            <div class="english"><b>{{testItems.length&&testItems[current].en}}</b></div>
            <input v-model="answer"
                   @keyup.enter="nextItem"
                   autofocus
                   ref="input"
                   type="text"
                   placeholder="Enter translation">
            <div class="bottom">
                <span>{{current + 1}}/{{testItems.length}}</span>
                <main-button @click="nextItem(answer)" :disabled="answer === ''" >next</main-button>
            </div>
        </div>
        <div v-if="resultShow" class="result">
            <h1>Test is over</h1>
            <div>Right: <b>{{this.right}}</b></div>
            <div>Wrong: <b>{{this.wrong}}</b></div>
            <main-button @click="close">close</main-button>
        </div>
        <div v-if="error" class="result error">
            <h1>You must have at least 5 phrases</h1>
        </div>
        <preloader v-if="preloaderStatus"></preloader>
    </div>
</template>

<script>
    export default {
        name: "TestPage",
        data() {
            return {
                testEnable: false,
                testStart: false,
                resultShow: false,
                error: false,
                preloaderStatus: false,
                testItems: [],
                current: 0,
                right: 0,
                wrong: 0,
                answer: '',
            }
        },
        methods: {
            vocabularyTest() {
                this.getItemsForTest('vocabulary');
            },
            phrasesTest() {
                this.getItemsForTest('phrases');
            },
            async getItemsForTest(items){
                this.preloaderStatus = true;
                this.testEnable = true;
                try {
                    const response = await fetch(`http://localhost:8080/api/${items}`);
                    const resp = await response.json();
                    if(!response.ok) throw new Error('Ответ сети был не ok.');
                    let arr = [];
                    this.preloaderStatus = false;
                    if(resp.length < 5) {
                        this.error = true;
                    } else {
                        resp.map((item) => {
                            let elem = {
                                en: item.eng,
                                tn: item.tn,
                            };
                            arr = [...arr, elem];
                        });
                        this.testItems = arr.sort(() => 0.5 - Math.random());
                        this.testStart = true;
                    }
                } catch (e) {
                    console.log(e.message)
                }
            },
            nextItem(ans) {
                ans === this.testItems[this.current].tn ? this.right++ : this.wrong++;
                this.current++;
                this.answer = '';
                if(this.current === this.testItems.length) {
                    this.testStart = false;
                    this.resultShow = true;
                }
                this.$refs.input.focus()
            },
            close() {
                //document.location.reload();
                this.$router.go()
            }
        },
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 500px;
        position: relative;
    }


    .buttons {
        display: flex;
        flex-direction: column;
    }
    .buttons button {
        margin-bottom: 20px;
    }

    .test, .result {
        padding: 30px;
        width: 500px;
        min-height: 200px;
        border-radius: 5px;
        background: #fff;
        color: #000;
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 13px 1px rgba(0,0,0,0.75);
        justify-content: center;
    }
    .test .bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 500;
        margin-top: 20px;
    }

    .test .english {
        margin-bottom: 15px;
        font-size: 30px;
        text-align: center;
    }

    .error h1 {
        margin-bottom: 0;
    }

    h1 {
        margin-top: 0;
    }
    .result {
        font-size: 30px;
    }
    .result button {
        margin-top: 30px;
    }
</style>