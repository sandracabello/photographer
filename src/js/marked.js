import { marked } from 'marked';
export default function (content) {
    return marked(content);
}
