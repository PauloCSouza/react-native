
//  Stores game data
class QuestionHelper {

    constructor() { }

    static actualGame = null;
    static quizzes = [];
    static answers = [];
    static actualQuizIdx = -1;


    static setActualGame(game) {
        return this.actualGame = game;
    }

    static getActualGame() {
        return this.actualGame;
    }

    static setQuizzes(quizzes) {
        return this.quizzes = quizzes;
    }

    static getQuizzes() {
        return this.quizzes;
    }

    static getActualQuiz() {

        const game = QuestionHelper.getActualGame();
        const quizIdx = QuestionHelper.getActualQuizIdx();
        const quiz = game.quizzes[quizIdx];

        return quiz;
    }

    static setActualQuizIdx(actualQuizIdx) {
        return this.actualQuizIdx = actualQuizIdx;
    }

    static getActualQuizIdx() {
        return this.actualQuizIdx;
    }


    static generateQuizzes() {

        QuestionHelper.setQuizzes(QuestionHelper.getActualGame().quizzes);
        QuestionHelper.setActualQuizIdx(0);
        this.answers = new Array(QuestionHelper.getQuizzes().length);

    }


    static checkValidAnswer(quiz, quizOption) {
        if (quiz.quiz_option_code == quizOption.code) {
            return true;
        } else {
            return false;
        }
    }

    static updateQuizStatus(quizOption) {
        var quiz = QuestionHelper.getActualQuiz();
        this.answers[QuestionHelper.getActualQuizIdx()] = QuestionHelper.checkValidAnswer(quiz, quizOption);
    }

    static moveNextQuiz() {
        QuestionHelper.setActualQuizIdx(QuestionHelper.getActualQuizIdx() + 1);
    }

    static isAnyQuizPending() {
        return (QuestionHelper.getActualQuizIdx() < QuestionHelper.getQuizzes().length);
    }

    static getCorrectAnswersCount() {
        var countCorrectAnswers = 0;
        for (let i = 0; i < this.answers.length; i++) {
            if (this.answers[i]) {
                countCorrectAnswers++;
            }
        }
        return countCorrectAnswers;
    }


}

export default QuestionHelper;
