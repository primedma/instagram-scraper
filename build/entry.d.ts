import { Options, Result, UserMetaFromWebApi, PostMetaFromWebApi, HistoryItem } from './types';
export declare const user: (input: string, options?: Options | undefined) => Promise<Result>;
export declare const hashtag: (input: string, options?: Options | undefined) => Promise<Result>;
export declare const location: (input: string, options?: Options | undefined) => Promise<Result>;
export declare const comments: (input: string, options?: Options | undefined) => Promise<Result>;
export declare const likers: (input: string, options?: Options | undefined) => Promise<Result>;
export declare const followers: (input: string, options?: Options | undefined) => Promise<Result>;
export declare const following: (input: string, options?: Options | undefined) => Promise<Result>;
export declare const getUserMeta: (input: string, options?: Options | undefined) => Promise<UserMetaFromWebApi>;
export declare const getStories: (input: string, options?: Options | undefined) => Promise<PostMetaFromWebApi>;
export declare const stories: (input: string, options?: Options | undefined) => Promise<PostMetaFromWebApi>;
export declare const history: (input: string, options?: Options | undefined) => Promise<{
    message: string;
    table?: undefined;
} | {
    table: HistoryItem[];
    message?: undefined;
}>;
export declare const fromfile: (input: string, options: Options) => Promise<{
    table: any[];
}>;
