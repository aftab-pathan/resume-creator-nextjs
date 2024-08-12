import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//Deep Merge
type IObject = { [key: string]: any };

const isObject = (item: any): item is IObject => {
  return item && typeof item === "object" && !Array.isArray(item);
};

export const deepMerge = (target: IObject, source: IObject, level = 0) => {
  const copyTarget = level === 0 ? structuredClone(target) : target;

  for (const key in source) {
    const sourceValue = source[key];

    if (!isObject(sourceValue)) {
      copyTarget[key] = sourceValue;
    } else {
      if (!isObject(copyTarget[key])) {
        copyTarget[key] = {};
      }
      deepMerge(copyTarget[key], sourceValue, level + 1);
    }
  }
  return copyTarget;
};

//Deep Clone
export const deepClone = <T extends { [key: string]: any }>(object: T) =>
  JSON.parse(JSON.stringify(object)) as T;
