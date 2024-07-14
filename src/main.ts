import { doGet } from "./doGet.ts";
import { doPost } from "./doPost.ts";
import { appendRow, createRow, obj2txtout } from "./utils.ts";
import { post_line_notify } from "./postLineNotify.ts";

(global as any).doGet = doGet;

(global as any).doPost = doPost;

(global as any).appendRow = appendRow;

(global as any).createRow = createRow;

(global as any).obj2txtout = obj2txtout;

(global as any).post_line_notify = post_line_notify;
