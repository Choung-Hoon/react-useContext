import { createContext } from "react";
// <ThemeContext.Provider> 태그의 value에 값을 설정하지 않는 경우의 초기값
console.log("ThemeContext 생성");
export const ThemeContext = createContext("<ThemeContext.Provider> 태그의 value에 값을 설정하지 않는 경우의 초기값");
