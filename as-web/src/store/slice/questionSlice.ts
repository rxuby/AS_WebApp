import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import data from "@data/QuestionsData";
import { stat } from "fs";

export type questionSlice = {
    startAttempt: boolean;
    currentQuestion: number;
    answer: string[];
    isSubmit: boolean;
    score: number;
    listScore: number[];
}

const initialState: questionSlice = {
    startAttempt: false,
    currentQuestion: 0,
    answer: [],
    isSubmit: false,
    score: 0,
    listScore: [],
}

export const questionSlice = createSlice({
    name: "question",
    initialState: { value:initialState },
    reducers:{
        setSatrtAttempt: (state) => {
            state.value.startAttempt = true;
        },
        nextQuestion: (state) => {
            state.value.currentQuestion += 1
        },
        prevQuestion: (state) => {
            state.value.currentQuestion -= 1
        },
        setSelectedAns: (state, action: PayloadAction<string>) => {
            state.value.answer[state.value.currentQuestion] = action.payload;
        },
        submit: (state) => {
            state.value.answer.forEach((answers,index) => {
                if(answers === data[index].answer){
                    state.value.score += 1;
                }
            });
            state.value.listScore.push(state.value.score);
            if (state.value.listScore.length > 10){
                state.value.listScore.shift();
            }
            state.value.isSubmit = true;
        },
        reAttempt: (state) => {
            state.value.startAttempt = false;
            state.value.currentQuestion = 0;
            state.value.answer = [];
            state.value.isSubmit = false;
            state.value.score = 0;
        }

    }
})

export const {
    setSatrtAttempt,
    nextQuestion,
    prevQuestion,
    setSelectedAns,
    submit,
    reAttempt,
} = questionSlice.actions;
export default questionSlice.reducer;
