
import { useEffect } from "react";
import { AppDispatch, RootState, store } from "./store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { initialResumeState, setResume } from "./slices/resumeSlice";
import { Resume, Settings } from "../types/types";
import { loadStateFromLocalStorage, saveStateToLocalStorage } from "./localStorage";
import { initialSettings, setSettings } from "./slices/settingsSlice";
import { deepMerge } from "@/lib/utils";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useSaveStateToLocalStorageOnChange = () => {
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            saveStateToLocalStorage(store.getState());
        });
        return unsubscribe;
    }, []);
};

export const useSetInitialStore = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const state = loadStateFromLocalStorage();
        if (!state) return;
        if (state.resume) {
            const mergedResumeState = deepMerge(
                initialResumeState,
                state.resume
            ) as Resume;
            dispatch(setResume(mergedResumeState));
        }
        if (state.settings) {
            const mergedSettingsState = deepMerge(
                initialSettings,
                state.settings
            ) as Settings;
            dispatch(setSettings(mergedSettingsState));
        }
    }, []);
};
